import { Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from 'next/link';
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from 'react'
import React from "react";
import { handleLogout } from "../../utils/auth";

export const config = { amp: true }

function Header({ user }) {
  const router = useRouter();
  const isRoot = user && user.role === "root"
  const isAdmin = user && user.role === "admin" 
  const isRootOrAdmin = isRoot || isAdmin
 
  useEffect(() => {

    /*START ProgressBar events*/
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    })
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    })
    router.events.on("routeChangeError", () => {
      NProgress.done();
    })
    /*END ProgressBar events*/


  }, [])

  function routeActive(route) {
    return route == router.pathname;
  }

  return <>
    <Menu fluid id="menu" inverted stackable >
      <Container textAlign='center' className="is-flex is-flex-center">
        <Link href="/"> 
          <Menu.Item header active={routeActive('/')}>
            <Image 
              src="static/logo.svg"
              size="mini"
              style={{marginRight: "1rem"}}
            />
            ReactReserve
          </Menu.Item>
        </Link>
        <Link href="/cart"> 
          <Menu.Item header active={routeActive('/cart')}>
            <Icon name="cart" size="large"/>
            Cart
          </Menu.Item>
        </Link>
        {isRootOrAdmin && (<Link href="/create"> 
          <Menu.Item header active={routeActive('/create')}>
            <Icon name="add square" size="large"/>
            Create
          </Menu.Item>
        </Link>)}

        {user ? (<>
          <Link href="/account"> 
          <Menu.Item header active={routeActive('/account')}>
            <Icon name="user" size="large"/>
            Account
          </Menu.Item>
        </Link>
        <Menu.Item onClick={handleLogout} header>
          <Icon name="sign out" size="large"/>
          Logout
        </Menu.Item>
        </>) : ( <>
            <Link href="/login"> 
            <Menu.Item header active={routeActive('/login')}>
              <Icon name="sign in" size="large"/>
              Login
            </Menu.Item>
          </Link>
          <Link href="/signup"> 
            <Menu.Item header active={routeActive('/signup')}>
              <Icon name="signup" size="large"/>
              Signup
            </Menu.Item>
          </Link>
          </>
        )}
      
      </Container>
    </Menu>
  </>
}



export default Header;
