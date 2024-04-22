export default function Header() {
  const navLinks = [{ name: "Home", href: "/" }];
  return (
    <div className="py-3 shadow-md mb-4 lg:mb-10">
      <nav className="container flex gap-4">
        {navLinks.map(({ href, name }) => (
          <a key={name} href={href} className="hover:text-blue-700 hover:underline">
            {name}
          </a>
        ))}
      </nav>
    </div>
  );
}
