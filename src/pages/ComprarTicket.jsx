const ComprarTicket = () => {

  const urlParams = new URLSearchParams(window.location.search)
  const error = urlParams.get('error')

  return (
    <div className='min-h-[calc(100vh-72px)] px-8 pt-12 relative'>
      <header className='header'>
        <h1>Comprar ticket</h1>
        <h2>Selecciona una función</h2>
      </header>
      <main className='overflow-y-hidden h-full'>

        {error && (
          <section className='ticket-section'>
            <div className='alert alert-error w-3/5 top-1'>
              {error}
            </div>
          </section>
        )}

        <section className='ticket-section grid place-items-center'>
          <form method='get' action='/datos-personales'>
            <div className='form-control'>
              <label className='label' htmlFor='pelicula'>
                Seleccione película
              </label>
              <select id='pelicula' name='pelicula'>
                <option value='Jhon Wick 4'>John Wick 4</option>
                <option value='Harry Potter'>Harry Potter</option>
                <option value='Oppenheimer'>Oppenheimer</option>
              </select>
            </div>
            <div className='form-control'>
              <label className='label' htmlFor='funcion'>
                Seleccione función
              </label>
              <select id='funcion' name='funcion'>
                <option value='30/10/2023 14:00'>30/10/2023 14:00</option>
                <option value='30/10/2023 16:00'>30/10/2023 16:00</option>
                <option value='31/11/2023 14:00'>31/11/2023 14:00</option>
              </select>
            </div>
            <div className='form-control'>
              <label className='label' htmlFor='asiento'>
                Seleccione asiento
              </label>
              <select id='asiento' name='asiento'>
                <option value='opcion1'>Fila 1 - Asiento 1</option>
                <option value='opcion2'>Fila 2 - Asiento 2</option>
                <option value='opcion3'>Fila 3 - Asiento 3</option>
              </select>
            </div>
            <div className='flex justify-center items-center mt-4 space-x-4'>
              <button className='btn btn-outline w-36' type='submit'>
                Continuar
              </button>
              <button type='reset' className='btn btn-ghost'>
                Reiniciar
              </button>
            </div>
          </form>
        </section>
      </main>
      <picture className='absolute bottom-0 left-0 '>
        <img className='' src='/pops-compra2.png' alt='Cubeta de pops' />
      </picture>
      <picture className='absolute bottom-0 right-0'>
        <img className='select-none' src='/pops-compra.png' alt='Pops sueltos' />
      </picture>
    </div>
  )
}

export default ComprarTicket
