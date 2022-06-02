
import { useState, useEffect } from "react"
import './App.css';
import Quote from "./components/Quote"
function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null

  });

  const fetchQuote = async () =>{
    return await  fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json());
    
  }
  const generate = async () => {
    setQuote(await fetchQuote())
  }
  useEffect( () => {
    (async function(){
      try{
        setQuote(await fetchQuote());
      }
      catch (e) {
        console.error(e);
    }
   
  }) ();
},[]);

  return (
    <div className="App">
      <header className="App-header">
       <Quote quote = {quote}/>


       <button onClick={generate}>generate quote</button>
      </header>
    </div>
  );

  }
export default App;
