import { useEffect, useState } from "react";
import HeadTitle from "@/components/HeadTitle";

// Movie DB Free Api Key
const API_KEY = "0893f8c7df602588a4cbc8304965ecab";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();

      setMovies(results);
    })();
  }, []);

  return (
    <>
      <div>
        {!movies && <h4>Loading...</h4>}
        {movies?.map((movie) => (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
