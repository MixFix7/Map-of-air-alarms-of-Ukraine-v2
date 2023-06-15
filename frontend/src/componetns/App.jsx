import './../css/App.css';
import axios from 'axios';
import { Component } from 'react';
import Map from './Home/Map';
// import Map from './screen/map';
import Footer from './Home/Footer';

class App extends Component{
  state = { details: [], }

  componentDidMount() {
    this.fetchData();

    this.interval =  setInterval(() => this.fetchData(), 15000);
  };

  componentWillUnmount () {
    clearInterval(this.interval);
  };

  fetchData() {
    axios.get("http://localhost:8000/api/ukraineApi/")
    .then(res => {
      const data = res.data;
      console.log(data)
      this.setState({
        details: data
      });
    })
    .catch(err => {
      console.error(err);
  })};
  
  
  render() {

    const {data} = this.state

    return (
      <div>
        <Map data={data} className='fill-black'/>
        <Footer/>
      </div> 
    );
  };

};



export default App;

