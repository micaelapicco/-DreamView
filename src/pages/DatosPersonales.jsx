import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DatosPersonales = () => {

  const navigate = useNavigate()

  const urlParams = new URLSearchParams(window.location.search)

  const pelicula = urlParams.get('pelicula')
  const funcion = urlParams.get('funcion')
  const asiento = urlParams.get('asiento')

  useEffect(() => {
    if (!pelicula || !funcion || !asiento) {
      navigate('/comprar-ticket?' + new URLSearchParams({ error: 'Debes completar este formulario antes' }))
    }
  }, [])

  return (
    <div className='min-h-[calc(100vh-72px)] px-8 pt-12 relative'>
      <header className='header' >
        <h1>Comprar ticket</h1>
        <h2>Completa tu información personal</h2>
      </header>
      <main>
        <section className='ticket-section'>
          <form method='get' action='/datos-personales/finalizar'>
            <input type='hidden' name='pelicula' value={pelicula} />
            <input type='hidden' name='funcion' value={funcion} />
            <input type='hidden' name='asiento' value={asiento} />
            <div className='form-control'>
              <label className='label' htmlFor='campo1'>
                Nombre completo
              </label>
              <input
                required
                name='nombre'
                className='bg-[var(--bg)]'
                placeholder='Juan Perez'
              />
            </div>
            <div className='form-control'>
              <label className='label' htmlFor='campo2'>
                E-mail
              </label>
              <input
                required
                name='email'
                className='bg-[var(--bg)]'
                type='email'
                placeholder='juan.perez@test.com'
              />
            </div>
            <div className='form-control'>
              <label className='label' htmlFor='campo3'>
                Teléfono
              </label>
              <input
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
                name='telefono'
                required
                className='bg-[var(--bg)]'
                type='tel'
                placeholder='091 - 233 - 233'
              />
            </div>
            <div className='flex justify-center items-center mt-4 space-x-4'>
              <button
                type='submit'
                className='btn btn-outline w-36 bg-[#91c870]'
              >
                Finalizar
              </button>
              <Link className='btn btn-ghost' to='/comprar-ticket'>
                Volver
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default DatosPersonales
