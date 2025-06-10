const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Headphones",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Laptop",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  },
];

const Products = () => (
  <section id="products" className="p-10 bg-white">
    <h3 className="text-3xl font-semibold text-center mb-8">
      Featured Products
    </h3>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded shadow hover:shadow-lg"
        >
          <img
            src={product.image}
            alt={product.name}
            className="mb-4 w-full h-48 object-cover"
          />
          <h4 className="text-xl font-medium">{product.name}</h4>
          <p className="text-blue-600 font-bold">{product.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
