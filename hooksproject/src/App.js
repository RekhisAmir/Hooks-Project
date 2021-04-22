import './App.css';
import {useState} from 'react';
import MovieList from './Movie-app/MovieList';
import AddMovie from './Movie-app/AddMovie'
import Search from './Movie-app/Search'
import {moviesData} from './Movie-app/Data'

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchValue, setSearchValue] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const handleAdd = (newMovies) => setMovies([...movies,newMovies])
  const handleRating =(rate)=>setSearchRating(rate)
  const handleSearch =(e)=>setSearchValue(e.target.value)
  return (
    <div className="App">
     <Search searchValue={searchValue}
            searchRating={searchRating}
            handleRating={handleRating}
            handleSearch={handleSearch}/>
     <MovieList serie={movies.filter(movie=>movie.name.toLowerCase().includes(searchValue.toLowerCase().trim()))} />
     <AddMovie handleAdd={handleAdd}/>
     </div>
  );
} 

export default App;
