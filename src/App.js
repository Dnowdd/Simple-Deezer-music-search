import { useState } from 'react';
import './App.css';
import Music from './components/Music'

function App() {
  const [musics, setMusics] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(null);

  /* SEARCH THE TEXT IN MUSIC'S DEEZER API */
  function getMusic(search){

    //INSERT HERE YOUR RAPID-API-KEY
    //INSERT HERE YOUR RAPID-API-KEY
    //INSERT HERE YOUR RAPID-API-KEY
    //INSERT HERE YOUR RAPID-API-KEY
      const rapidApiKey = '';
    //INSERT HERE YOUR RAPID-API-KEY
    //INSERT HERE YOUR RAPID-API-KEY
    //INSERT HERE YOUR RAPID-API-KEY
    //INSERT HERE YOUR RAPID-API-KEY

    const url = `https://deezerdevs-deezer.p.rapidapi.com/search/track?q=${search}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => setMusics(json.data))
    .catch(err => console.error('error:' + err));
  }

  /* CALL THE MUSIC FUNCTION WITH TYPING DELAY */
  const inputChanged = e => {
    setInputValue(e.target.value)

    clearTimeout(timer)

    const newTimer = setTimeout(() => {
      getMusic(inputValue)
    }, 500)

    setTimer(newTimer)
  }

  return (
    <>
      <div className='form'>
        <label htmlFor="search">Search Music in Deezer.</label>
        <input id="search" placeholder="Search here for your music." onChange={inputChanged} autoComplete='off' spellCheck='false'/>
      </div>
      <div className='musics'>
        { musics.map( data => <Music music={data} /> ) }
      </div>
    </>
  );
}

export default App;
