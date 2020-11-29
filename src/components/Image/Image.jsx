import { Component } from 'react';
export default class Image extends Component {
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
      fetch("http://localhost:5000/image")
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
              {items.map(item => (
                <li>
                   TYPE_NEWS:{item.type_news}
                  <img width="300" height="300" src={item.src_image} />
                </li>
              ))}
            </ul>
          </div>
        )
      }
    }
  }