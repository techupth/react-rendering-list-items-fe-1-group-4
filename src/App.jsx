import "./App.css";
import movies from './data/movies';


function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        {movies.map((item) => {
          return (
            <div className="movies-item">
              <img src={item.image} className="movies-image" />
              <div className="info">
            <div className="movies-title">Title: {item.title}</div>
              <div className="movies-year">Year: {item.year}</div>
              <div className="movies-runtime">Runtime: {item.runtime}</div>
              <div className="movies-director">Director: {item.director}</div>
              <div className="movies-genres">
              Genres: {item.genres.map(genre => <button className={`genre ${genre.toLowerCase()}`}>{genre}</button>)}
                </div>
              <div className="movies-imdbRating">IMDB Rating: {item.imdbRating}</div>
              <div className="movies-imdbVotes">IMDB Votes: {item.imdbVotes}</div>
              </div>
              </div>
          );
        })}

      </section>
    </div>
  );
}

export default App;
