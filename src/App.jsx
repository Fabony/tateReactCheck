
import './App.css'
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Jean okafor',
        bio: 'A Lovely cook.',
        imgSrc: "https://i0.wp.com/koko.ng/wp-content/uploads/2023/05/Hilda-Baci-KOKO-TV-NG-1.jpg",
        profession: 'Carterer',
      },
      show: false,
      interval: 0,
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, interval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>
        <div>
          {show && (
            <div>
              <img src={person.imgSrc} alt={person.fullName} />
              <h1>{person.fullName}</h1>
              <p>{person.bio}</p>
              <p>{person.profession}</p>
            </div>
          )}
        </div>
        <p>Time interval since mount: {interval} seconds</p>
      </div>
    );
  }
}

export default App;
