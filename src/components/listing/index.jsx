function ProductListing() {
  const products = ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"];

  return (
    <ul>
      {products?.length > 0 &&
        products.map(function (product, index) {
          return <li key={product}>{product}</li>;
        })}
    </ul>
  );
}

export default ProductListing;
