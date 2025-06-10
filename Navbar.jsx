const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-white shadow-md">
    <h1 className="text-2xl font-bold">ShopSmart</h1>
    <ul className="flex space-x-6">
      <li>
        <a href="#products" className="hover:text-blue-500">
          Products
        </a>
      </li>
      <li>
        <a href="#cta" className="hover:text-blue-500">
          Deals
        </a>
      </li>
      <li>
        <a href="#footer" className="hover:text-blue-500">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
