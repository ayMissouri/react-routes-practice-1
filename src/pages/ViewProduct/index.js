import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router";

function ViewProductPage(props) {
  const [product, setProduct] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  console.log({ product, location });

  useEffect(() => {
    if (location.state) {
      const { product } = location.state;

      setProduct(product);
    }
  }, [location]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>Product {id} - {product.name}</h2>
      <p>£{product.price}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}

export default ViewProductPage;
