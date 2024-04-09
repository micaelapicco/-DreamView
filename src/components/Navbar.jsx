import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar sticky top-0 z-30 justify-between'>
      <Link to='/' className='btn btn-ghost text-xl'>
        <img src='dreamViewLogo.svg' alt='Dream View logo'/>
      </Link>
      <ul className='menu menu-horizontal px-1'>
        <li>
          <Link href='/#destacados'>Destacados</Link>
        </li>
        <li>
          <Link href='/#cartelera'>Cartelera</Link>
        </li>
        <li>
            <Link className='buy-btn' to='/comprar-ticket'>Comprar ticket</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
