import './../css/App.css';
import axios from 'axios';
import { Component, useState, useEffect } from 'react';
import Map from './Home/Map';
// import Map from './screen/map';
import Footer from './Home/Footer';
import Loader from './Home/loader/Loader';


const App = () => {
  const [details, setDetails] = useState("null");

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => fetchData(), 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/api/ukraineApi/")
      .then((res) => {
        const data = res.data;
        setDetails(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(details);

  if (details === "null") {
    return <div><Loader/></div>;
  }

  return (
    <div>
      <Map details={details}/>
      <Footer/>
    </div>
  );
};

export default App;

