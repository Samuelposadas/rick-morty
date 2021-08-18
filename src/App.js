
import './App.css';
import { useFetch } from './hooks/useFetch';
import { useState } from "react"
import Characters from './components/Characters/Characters';
import Loading from './components/common/Loading';
import Search from './components/Search/Search';



function App() {

  const [endpoint, setEndpoint] = useState("character")
  const {loading, error, data} = useFetch(endpoint)
  const { results: characters, info } = data;

  const findCharacters = (character) => {
    setEndpoint(`character?name=${character}`)
  }

  if (loading) return <Loading />
  if (error) return <h3>Ocurrio un error..</h3>

  return (
    <div className="container">
      <h1 className="text-center">Rick and Morty</h1>
      <Search findCharacters = {findCharacters} />
      <Characters characters={characters} />
    </div>
  );
}

export default App;
