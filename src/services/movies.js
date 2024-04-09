const API_KEY = '3dc64a35'

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

export const fetchMovies = async () => {
  let data = null

  try {
    const res = await fetch(`${API_URL}&s=Harry`)


    data = await res.json()

    if (data.Response === 'False') {
      throw new Error('Couldn\'t fetch movies, try again later')
    }

    return data?.Search.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
    }))
  } catch (error) {
    console.error(error)
  }
}

export const fetchMovieById = async (id) => {
  let data = null

  try {
    const res = await fetch(`${API_URL}&i=${id}`)


    data = await res.json()

    if (data.Response === 'False') {
      throw new Error('Couldn\'t fetch movies, try again later')
    }

    return {
      id: data.imdbID,
      title: data.Title,
      plot: data.Plot,
      poster: data.Poster,
      rating: data.imdbRating,
      language: data.Language
    }
  } catch (error) {
    console.error(error)
  }
}
