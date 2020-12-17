import axios from 'axios';
import ProductSummary from "../components/Product/ProductSummary";
import ProductAttributes from "../components/Product/ProductAttributes";
import baseUrl from "../utils/baseUrl";

function Product(props) {
  if (props.data.success) {
    return (
      <>
        <ProductSummary user={ props.user } {...props.data.product} />
        <ProductAttributes user={props.user} {...props.data.product} />
      </>
    )
  } else {
    return <>
      <div>{ props.data.msg }</div>
    </>
  }
  
}

/* 
Product.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/product`;
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);
  return { product: response.data };
}; */

export async function getServerSideProps(context) {
  const url = `${ baseUrl }/api/product`;
  const payload = { params: { 
    id: context.query._id
  }}
  const response = await axios.get(url, payload)
  const data = response.data
  
  return {
    props: {
      data
    }
  }
}

export default Product