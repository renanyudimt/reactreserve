import cookie from "js-cookie";
import Router from 'next/router'

//Usaremos o Router direto do next/router, sem ser o useRouter, porque estamos dentro de uma function e nao um function component e vai dar erro se tentar usar o useRouter.
export function handleLogin(token) {
  cookie.set('reactreserve_token', token)
  Router.push("/account")

}

export function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

export function handleLogout() {
  cookie.remove("reactreserve_token");
  window.localStorage.setItem('logout', Date.now()) //nao importa o que incluir aqui
  Router.push("/login");
}