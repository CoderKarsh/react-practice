import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import Search from "./components/Search.jsx";
import MovieCard from "./components/MovieCard.jsx";
import Spinner from "./components/Spinner.jsx";

// API Necessities
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  // useState Hooks
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  useDebounce(()=>setDebouncedSearchTerm(debouncedSearchTerm),  500, [debouncedSearchTerm])

  // API Fetching
  const fetchMovies = async (query = "") => {
    setIsLoading(true);

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } catch (error) {
      setErrorMessage(
        "Error fetching movies. Try refreshing or try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (  
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          {/* <img src="./hero-img.png" alt="Hero Banner" /> */}

          <h1>
            Find <span className="text-gradient">Movies</span> you'll enjoy
            without the Hassle
          </h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header> 

        <section className="all-movies">
          <h2>All Movies</h2>
          {isLoading && <Spinner />}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {!errorMessage && (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
