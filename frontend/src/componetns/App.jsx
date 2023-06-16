import './../static/App.css';
import axios from 'axios';
import { Component, useState, useEffect } from 'react';
import Map from './Home/Map';
// import Map from './screen/map';
import Footer from './Home/Footer';
import Loader from './Home/UI/Loader';
import RefreshButton from './Home/buttons/RefreshButton';
import Timer from './Home/UI/Timer';
import { click } from '@testing-library/user-event/dist/click';


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

  const refreshCommand = () => {
    fetchData()
  }

  console.log(details);

  if (details === "null") {
    return <Loader/>;
  }

  return (
    <div>
      <Map details={details}/>
      <Footer>
        <Timer>
          <RefreshButton command={refreshCommand}/>
        </Timer>
      </Footer>
    </div>
  );
};

export default App;

