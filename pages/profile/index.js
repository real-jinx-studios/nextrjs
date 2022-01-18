export default function Profile(props) {
  return <div>{JSON.stringify(props)}</div>;
}

export async function getServersideProps() {
  /*const data = await axios.get(`/api/get-products`);*/
  //connection to middleware for static generation
  /*const res = await fetch("http://localhost:5000/get-products");
    const data = await res.json();
    return {
      props: {
        products: data,
      },
    };*/
  const data = await query("SELECT * FROM customers WHERE `email` = 'rjs' ");
  data.forEach((item) => {
    console.log(item, typeof item);
  });
  return {
    props: {
      products: JSON.parse(JSON.stringify(data)),

    },
  };
}
