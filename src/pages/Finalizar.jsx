
export const Finalizar = () => {

  const urlParams = new URLSearchParams(window.location.search)

  const funcion = urlParams.get('funcion')
  const name = urlParams.get('nombre')


  return (
    <main className='min-h-[calc(100vh-72px)] px-8 pt-12 relative grid place-items-center ' >
      <section className='flex flex-col items-center gap-4 text-center'>
        <header className='header' >
        <h2 className='opacity-40 text-bold'>Comprar ticket</h2>
        <h1>¡Felicitaciones {name}!</h1>

        </header>
        <img className='select-none' src='/ticket.png' />
        <p className='text-center'>
          Tu entrada para la funcion de {funcion} ha sido canjeada.
        </p>
        <p>¡Te esperamos!</p>

      </section>
    </main>
  )
}
