import Layout from "../components/_App/Layout";
import React from "react";
import { parseCookies, destroyCookie } from "nookies";
import Store from "./../components/Store/Store";
import App from "next/app";
import baseUrl from "../utils/baseUrl";
import { redirectUser } from "../utils/auth"
import axios from "axios";
import Router from "next/router";

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    const { reactreserve_token } = parseCookies(ctx);

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }


    if (!reactreserve_token) {
      const isProtectedRoute =
        ctx.pathname === "/account" || ctx.pathname === "/create";
      if (isProtectedRoute) {
        redirectUser(ctx, "/login");
      }
    } else {
      try {
        const payload = { headers: { Authorization: reactreserve_token } };
        const url = `${baseUrl}/api/account`;
        const response = await axios.get(url, payload);
        const user = response.data.user;
        const isRoot = user.role === "root";
        const isAdmin = user.role === "admin";
        // if authenticated, but not of role 'admin' or 'root', redirect from '/create' page
        const isNotPermitted = !(isRoot || isAdmin) && (ctx.pathname === "/create" || ctx.pathname === "/login");
        if (isNotPermitted) {
          redirectUser(ctx, "/");
        }
        pageProps.user = user;
      } catch (error) {
        console.error("Error getting current user", error);
        // 1) Throw out invalid token
        destroyCookie(ctx, "reactreserve_token");
        // 2) Redirect to login
        redirectUser(ctx, "/login");
      }
    }

    return { pageProps };
  }

  componentDidMount() {
    //vai detectar quando o localstorage foi alterado
    //isso é bom para logout universal, em todas as janelas abertas do site no momento (naquele navegador)
    window.addEventListener('storage', this.syncLogout) //segundo arg e uma callback para o evento de localstorage
  }

  syncLogout = event => {
    if (event.key === "logout") {
      Router.push("/login")
    }
  }

  render() {

    const { Component, pageProps } = this.props;

    return (
      <Store>
        <Layout { ...pageProps }>
        <Component { ...pageProps } />
        </Layout>
      </Store>
    );
  }
}

export default MyApp;
