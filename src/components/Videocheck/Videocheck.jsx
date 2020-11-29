import { Component } from 'react';
import ReactPlayer from 'react-player'

export default class Videocheck extends Component {
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
      fetch("http://localhost:5000/video")
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
                   <ReactPlayer controls="true" url={item.src_video} />
                </li>
              ))}
            </ul>
          </div>
        )
      }
    }
  }