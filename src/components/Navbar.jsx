import { links } from "../data.jsx";

const Navbar = () => {
  return (
    <nav className=" bg-emerald-100">
      <div className=" align-element flex flex-col sm:flex-row py-4 sm:gap-x-64 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className=" capitalize tracking-wide hover:text-emerald-600 duration-300 text-lg"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
