import { useParams } from "react-router-dom";
import cardsData from "../collection";

function Details() {
    const { id } = useParams();

    const product = cardsData
        .flatMap((items) => items.products || [])
        .find((item) => item.id === Number(id));

    if (!product) {
        return <h1>Product not found!</h1>;
    }

    return (
        <div className="p-5">
            <img
                src={product.image}
                alt={product.name}
                className="w-60"
            />

            <h1 className="text-2xl font-bold">
                {product.name}
            </h1>
        </div>
    );
}

export default Details;