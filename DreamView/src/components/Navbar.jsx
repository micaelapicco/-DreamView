function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Dream view</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Destacados</a>
          </li>
          <li>
            <a>Cartelera</a>
          </li>
          <li>
            <button>Comprar ticket</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
