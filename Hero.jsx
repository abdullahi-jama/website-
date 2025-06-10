const Hero = () => (
  <section className="flex flex-col items-center text-center p-16 bg-gray-100">
    <h2 className="text-4xl font-bold mb-4">Your One-Stop Shop</h2>
    <p className="text-lg mb-6">
      Find everything you need at unbeatable prices.
    </p>
    <button
      onClick={() => {
        const section = document.getElementById("products");
        section?.scrollIntoView({ behavior: "smooth" });
      }}
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
    >
      Shop Now
    </button>
  </section> // ✅ This was missing
);

export default Hero;
