import Movies from '../components/Movies'

const Cartelera = () => {
  return (
    <main id='cartelera'>
      <header className='header'>
        <h1>En cartelera</h1>
      </header>
      <section className='movieList'>
        <picture>
          <img src='pops-cartelera.png' alt='Pops cartelera' />
        </picture>
        <Movies />
      </section>
    </main>
  )
}

export default Cartelera
