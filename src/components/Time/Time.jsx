import { Component } from 'react';
export default class Time extends Component {
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
      fetch("http://localhost:5000/time")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            this.setState({
              isLoaded: true,
              items: result
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
            Сейчас {items.time}
            </ul>
          </div>
        )
      }
    }
  }