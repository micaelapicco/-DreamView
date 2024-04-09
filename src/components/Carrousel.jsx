import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { fetchMovieById } from '../services/movies'
import { useEffect, useState } from 'react'
import { Star } from './Icons'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

const Carousel = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovieById('tt1201607').then((data) =>
      setMovies((prevState) => [...prevState, data])
    )
    fetchMovieById('tt0295297').then((data) =>
      setMovies((prevState) => [...prevState, data])
    )
    fetchMovieById('tt0304141').then((data) =>
      setMovies((prevState) => [...prevState, data])
    )
  }, [])

  const slides = movies.map((movie) => (
    <SwiperSlide key={movie.id} className='m-12'>
      <div className='slide-container'>
        <div className='relative'>
        <span className='rating-span absolute -top-2 -left-2'>
          <Star />
          {movie.rating}/10
          <p>IMDB</p>
        </span>
          <img src={movie.poster} alt={movie.title} className='rating-img' />
        </div>
        <div className='content'>
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.plot}</p>
          </div>
          <div className='buttons flex gap-2 mt-4'>
            <button>
              <img src='trailer.png' alt='Tráiler' />
              Ver Tráiler
            </button>
            <button>
              <Link to='/comprar-ticket'>
              <img src='tickets.png' alt='Tickets' />
              Comprar Ticket
              </Link>
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
    >
      {slides}
    </Swiper>
  )
}

export default Carousel
