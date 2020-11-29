import { Component } from 'react';
import ReactPlayer from 'react-player'
import './../../App.css';

export default class Form extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    //componentDidMount()
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result.drinks
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {  
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>error</p>
    }
    else if (!isLoaded) {
      return <p>Loading...</p>
    }
    else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.strDrink}
                <img width="50" height="50" src={item.strDrinkThumb} />
              </li>
            ))}
          </ul>
          <div className="App">
            <ReactPlayer controls="true" url="https://www.youtube.com/watch?v=ATIFWDTjKM8" />
          </div>
        </div>
      )
    }
  }
}


