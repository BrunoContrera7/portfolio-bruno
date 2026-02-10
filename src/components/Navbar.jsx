

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a] backdrop-blur-sm z-50">
      <ul className="flex justify-center space-x-6 py-4 text-sm font-medium">
        <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-teal-400 transition">Projects</a></li>
        <li><a href="#skills" className="hover:text-teal-400 transition">Skills</a></li>
        <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;