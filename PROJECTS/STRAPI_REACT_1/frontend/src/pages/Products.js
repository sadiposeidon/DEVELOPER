import { useState, useEffect } from "react";
import Loading from "../components/Loading";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:1337/api/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
        console.error("Xəta baş verdi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <h1>Xəta: {error.message}</h1>;

  return (
    <div>
      <h1>Məhsullar</h1>
      <ul>
        {data.data?.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
