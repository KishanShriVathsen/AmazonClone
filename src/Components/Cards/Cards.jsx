import cardsData from "../../collection";
function Cards() {
    return (
        <div className="relative bottom-60 z-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%]">

            {cardsData.map((items, index) => (
                <div key={index} className="bg-white p-4 rounded-lg opacity-90 text-center">
                    <h5 className="font-bold text-lg mb-3">
                        {items.title}
                    </h5>

                    {/* Multiple Products */}
                    {items.products && (
                        <div className="grid grid-cols-2 gap-3">
                            {items.products.map((product, i) => (
                                <div key={i}>
                                    <img src={product.image} alt={product.name} className="w-35 mx-auto"/>
                                    <a href="#" className="text-sm">{product.name}</a>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Single Large Image */}
                    {items.image && (
                        <div className="w-full">
                            <img src={items.image} alt={items.title} className="w-full"/>
                        </div>
                    )}

                    <a href="/" className="text-blue-400 block mt-3">
                        Show More
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Cards;
