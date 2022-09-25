import { CSSProperties, useEffect, useState } from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Posters from './components/Posters';
import Services from './components/Services';
import Vimeo from './components/Vimeo';

function App() {

  const override: CSSProperties = {
    textAlign: "center",
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <div className="App">

      {
        loading ?
          <div className="Loader">
            <PuffLoader
              size={100}
              color={"#000000"}
              cssOverride={override}
              loading={loading}
              speedMultiplier={1.5}
            />
          </div>

          :
          <>
            <Navbar />
            {/* <Video /> */}
            <Home />
            <Vimeo />
            <Posters />
            <Services />
            {/* <Video /> */}
            <Contact />
          </>

      }
    </div>
  );
}

export default App;