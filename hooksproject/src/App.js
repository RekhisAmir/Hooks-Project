import './App.css';
import {useState} from 'react';
import MovieList from './Movie-app/MovieList';
import AddMovie from './Movie-app/AddMovie'
import Search from './Movie-app/Search'
import {moviesData} from './Movie-app/Data'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Info from './Movie-app/Info';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchValue, setSearchValue] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const handleAdd = (newMovies) => setMovies([...movies,newMovies])
  const handleRating =(rate)=>setSearchRating(rate)
  const handleSearch =(e)=>setSearchValue(e.target.value)
  return (
    <div className="App">
    <BrowserRouter>
    <Search searchValue={searchValue}
    searchRating={searchRating}
    handleRating={handleRating}
    handleSearch={handleSearch}/>

    <Switch>
    <Route exact path='/'  render={()=>
    
      <MovieList serie={movies.filter(movie=>movie.name.toLowerCase().includes(searchValue.toLowerCase().trim()))} />
    }/>
    <Route exact path='/Info/:name' render={(props)=><Info data={movies} {...props}/>}/>
    </Switch>
    <AddMovie handleAdd={handleAdd}/>
    </BrowserRouter>
    </div>

    );
  } 
  
  export default App;
  