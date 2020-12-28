import React, { useContext } from 'react';
import AccountHeader from "../components/Account/AccountHeader";
import AccountOrders from "../components/Account/AccountOrders";
import AccountPermissions from "../components/Account/AccountPermissions";
import { parseCookies } from "nookies"
import baseUrl from '../utils/baseUrl';
import axios from "axios";
import catchErrors from '../utils/catchErrors';
import cookies from "js-cookie"

function Account({ user, orders }) {
  return <>
    <AccountHeader {...user} />
    <AccountOrders orders={orders} />
    {user.role == "root" && <AccountPermissions currentuser={user._id} />}
    
  </>
}

Account.getInitialProps = async (ctx) => {
  const { reactreserve_token } = parseCookies(ctx)
  if (!reactreserve_token) {
    return {
      orders: []
    }
  }
  try {
    const payload = { headers: { Authorization: reactreserve_token }}
    const url = `${baseUrl}/api/orders`
    const response = await axios.get(url, payload)
    return {
      orders: response.data.orders
    }
  } catch(error) {
    console.log(error)
  } 
}

export default Account