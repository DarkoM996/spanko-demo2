const Navbar = () => {
  return (
    <header className="relative z-[999] px-6 py-6">
      <nav className="max-w-screen-3xl mx-auto w-full h-20 flex justify-between items-center bg-slate-200 rounded-full px-6 ">
        {/* TypeLogo instead of the actual logo for now */}
        <div className="">
          <h3 className="text-3xl font-bold">SpankoMattress</h3>
        </div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Mattresses</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
