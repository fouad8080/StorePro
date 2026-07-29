function TopSellingProducts() {
  const products = [
    {
      name: "Wireless Headphones",
      image: "./icon/icon/headphone.jpeg",
      price: "$1,245.00",
      growth: "18.5%",
      units: "340 units",
    },
    {
      name: "Smart Watch Series 5",
      image: "./icon/icon/Smart Watch Series 5.jpeg",
      price: "$980.50",
      growth: "15.2%",
      units: "280 units",
    },
    
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="card-title">Top Selling Products</h3>
        <button className="text-sm text-gray-500 border rounded-lg px-3 py-1.5">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between ">
            <div className="flex items-center gap-3 justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-10 h-10 rounded-lg object-cover bg-gray-100"
              />
              <span className="text-sm text-gray-700">{product.name}</span>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <span className="text-gray-700 w-20">{product.price}</span>
              <span className="text-green-600 w-16">↑ {product.growth}</span>
              <span className="text-gray-500 w-20 text-right">{product.units}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSellingProducts;