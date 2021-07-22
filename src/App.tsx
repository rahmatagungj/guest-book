import React from 'react';
import Form from './components/Form';
import Header from './components/Header';

const {useState, useEffect} = React;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => {
      setIsLoaded(false)
    }
  }, [])

  return (
    <div className="App">
      {isLoaded ? (
        <>
      <Header title="Guest Book"/>
      <Form/>
     </>
      ) : <h2>Loading ...</h2>}
    </div>
  );
}

export default App;
