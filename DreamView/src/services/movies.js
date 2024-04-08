const API_KEY = '3dc64a35'

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

export const fetchMovies = async () => {
  let data = null

  try {
    const res = await fetch(`${API_URL}&s=Harry`)


    data = await res.json()
    console.log(data)

    if (data.Response === "False") {
      throw new Error("Couldn't fetch movies, try again later")
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
    console.log(data)

    if (data.Response === "False") {
      throw new Error("Couldn't fetch movies, try again later")
    }

    return data?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      plot: movie.Plot,
      poster: movie.Poster,
      rating: movie.imdRating,
      language: movie.Language
    }))
  } catch (error) {
    console.error(error)
  }
}