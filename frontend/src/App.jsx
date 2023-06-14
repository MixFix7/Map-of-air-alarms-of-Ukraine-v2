import './App.css';
import axios from 'axios';
import { Component } from 'react';

const appd = () => {
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  )
}


class App extends Component{
  state = { details: [], }

  componentDidMount() {
    this.fetchData();

    this.interval = setInterval(this.fetchData, 15000);
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
    });
  }
  render() {
    return (
      <div>
        <header>Данні про тривогу в Україні</header>
        <hr />
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div className="Alerts">
              <h2>Вінницька область</h2>
              <span>тривога: {output.Vinnytsia.toString()}</span>
              <h2>Луцька область</h2>
              <span>тривога: {output.Volyn.toString()}</span>
              <h2>Дніпропетровська область</h2>
              <span>тривога: {output.Dnipropetrovska.toString()}</span>
              <h2>Донецька область</h2>
              <span>тривога: {output.Donetsk.toString()}</span>
              <h2>Житомирська область</h2>
              <span>тривога: {output.Zhytomyr.toString()}</span>
              <h2>Закарпатська область</h2>
              <span>тривога: {output.Transcarpathian.toString()}</span>
              <h2>Запорізька область</h2>
              <span>тривога: {output.Zaporizhzhya.toString()}</span>
              <h2>Івано-Франківська область</h2>
              <span>тривога: {output.Ivano_Frankivsk.toString()}</span>
              <h2>Київська область</h2>
              <span>тривога: {output.Kyiv.toString()}</span>
              <h2>Кіровоградська область</h2>
              <span>тривога: {output.Kirovograd.toString()}</span>
              <h2>Луганська область</h2>
              <span>тривога: {output.Luhansk.toString()}</span>
              <h2>Миколаївська область</h2>
              <span>тривога: {output.Mykolaiv.toString()}</span>
              <h2>Львівська область</h2>
              <span>тривога: {output.Lviv.toString()}</span>
              <h2>Рівненська область</h2>
              <span>тривога: {output.Rivne.toString()}</span>
              <h2>Сумська область</h2>
              <span>тривога: {output.Sumy.toString()}</span>
              <h2>Тернопільська область</h2>
              <span>тривога: {output.Ternopil.toString()}</span>
              <h2>Харківська область</h2>
              <span>тривога: {output.Kharkiv.toString()}</span>
              <h2>Херсонська область</h2>
              <span>тривога: {output.Kherson.toString()}</span>
              <h2>Хмельницька область</h2>
              <span>тривога: {output.Khmelnytsky.toString()}</span>
              <h2>Черкаська область</h2>
              <span>тривога: {output.Cherkasy.toString()}</span>
              <h2>Чернігівська область</h2>
              <span>тривога: {output.Chernihiv.toString()}</span>
              <h2>Чернівецька область</h2>
              <span>тривога: {output.Chernivtsi.toString()}</span>
              <h2>Кримська область</h2>
              <span>тривога: {output.Crimea.toString()}</span>


              
            </div>
          </div>
        ))}
      </div>
    )
  };

};



export default appd;

