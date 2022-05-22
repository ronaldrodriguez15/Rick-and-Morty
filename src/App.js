import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

function App() {

  const [characters, setCharacters] = useState([])
  const [paginate, SetPaginate] = useState({});

  const InitialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setCharacters(response.results);
      SetPaginate(response.info);
    })
    .catch(err => console.log(err))
  };

  const onPrevious = () => {
    fetchCharacters(paginate.prev);
  };
  const onNext = () => {
    fetchCharacters(paginate.next);
  };

  useEffect(() => {
    fetchCharacters(InitialUrl);
  }, []);
  

  return (
    <>
      <Navbar />
      <div className="container">
        <Pagination prev={paginate.prev} next={paginate.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
      </div>
      <Footer />
    </>
  );
}

export default App;
