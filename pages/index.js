import axios from "axios";
import baseUrl from "../utils/baseUrl";

//Com useEffect() buscamos dados no client side, 
//mas com getStaticProps fazemos um pre-carregamento,
//deixando mais rapido, use issae é so exportar a funcao que ja funciona.
import ProductList from "../components/Index/ProductList";
import ProductPagination from "../components/Index/ProductPagination"

function Home(props) {
  return <>
    <ProductList products={props.products} />
    <ProductPagination totalPages={props.totalPages} />
  </>
}

Home.getInitialProps = async (ctx) => {
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 9
  const payload = {
    params: {
      page: page,
      size: size,
    }
  }
  const url = `${baseUrl}/api/products`;
  // fetch data on server
  const response = await axios.get(url, payload);
  // return response data as an object
  return { products: response.data.products, totalPages: response.data.totalPages};
  // note: this object will be merged with existing props
};
 

/* export async function getServerSideProps(context) {
  const url = `${baseUrl}/api/products`;
  let data = {};
  // fetch data on server
  const response = await axios.get(url);
  if (response.data.success) {
    return {
      props: {
        products: response.data.products
      } // will be passed to the page component as props
    }
  } else {
    return {
      props: {}
    }
  }
} */


export default Home;