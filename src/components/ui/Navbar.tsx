import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="relative z-[999] px-6 py-6 lg:px-28">
      <nav className="max-w-screen-3xl mx-auto w-full h-20 flex justify-between items-center bg-primary-foreground dark:bg-slate-900  rounded-full px-6 ">
        {/* TypeLogo instead of the actual logo for now */}
        <div className="">
          <h3 className="text-xl md:text-3xl font-bold">SpankoMattress</h3>
        </div>
        <ul className="hidden md:flex gap-4">
          <li>Home</li>
          <li>Mattresses</li>
          <li>Contact</li>
        </ul>
        {/* Toggle Button */}
        <div className="hidden md:flex">Toggle</div>
        {/* Menu Button */}
        <IoMdMenu className="md:hidden text-2xl" />
      </nav>
    </header>
  );
};

export default Navbar;
