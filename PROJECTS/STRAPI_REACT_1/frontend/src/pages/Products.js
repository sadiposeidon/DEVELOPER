import {useState, useEffect} from "react";

export default function Products(){
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("http://localhost:1337/api/products");
            const data = await res.json();
            setData(data);
            console.log(data);
        } catch (error) {
            setError(error);
            console.error("Xəta baş verdi:", error);
        }
        setIsLoading(false);
    };
    fetchData();
    }, []);

    // return <h1 className="text-3xl font-bold underline">Hi, Poroducts!</h1>

    // return (
    //     <div>
    //         <h1>Products</h1>
    //         <pre>{JSON.stringify(data, null, 2)}</pre>
    //     </div>
    // )

    if(isLoading) return <h1>Yüklənir...</h1>;
    if(error) return <h1>Xəta: {error.message}</h1>;

    return (
        <div>
        <h1>Məhsullar</h1>
        <ul>
            {data.data?.map((product) => (
            <li key={product.id}>
                <strong className="border-4 border-green-500 text-indigo-500 bg-orange-500 rounded hover:bg-white">{product.name}</strong> – {product.price} AZN
<strong class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
  Hover ilə rəng dəyişir
</strong>

            </li>
            ))}
        </ul>
        </div>
    );
}