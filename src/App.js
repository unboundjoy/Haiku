import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneSyllable: [],
      twoSyllable: [],
      threeSyllable: [],
      fourSyllable: [],
      haiku: ''
    };

    this.randomHaiku = this.randomHaiku.bind(this);
  }

  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/jdkato/prose/master/testdata/1-syllable-words.txt`).then(res => {
      const oneSyllable = res.data.split('\n');
      console.log(oneSyllable);
      this.setState({ oneSyllable });
    });
    axios.get(`https://raw.githubusercontent.com/jdkato/prose/master/testdata/2-syllable-words.txt`).then(res => {
      const twoSyllable = res.data.split('\n');
      console.log(twoSyllable);
      this.setState({ twoSyllable });
    });
    axios.get(`https://raw.githubusercontent.com/jdkato/prose/master/testdata/3-syllable-words.txt`).then(res => {
      const threeSyllable = res.data.split('\n');
      console.log(threeSyllable);
      this.setState({ threeSyllable });
    });
    axios
      .get(`https://raw.githubusercontent.com/nathanmerrill/wordsbysyllables/master/4-syllable-words.txt`)
      .then(res => {
        const fourSyllable = res.data.split('\n');
        console.log(fourSyllable);
        this.setState({ fourSyllable });
      });
  }

  randomHaiku() {
    console.log('here');
    let one = this.state.oneSyllable[Math.floor(Math.random() * this.state.oneSyllable.length)];
    let one1 = this.state.oneSyllable[Math.floor(Math.random() * this.state.oneSyllable.length)];
    let two = this.state.twoSyllable[Math.floor(Math.random() * this.state.twoSyllable.length)];
    let two1 = this.state.twoSyllable[Math.floor(Math.random() * this.state.twoSyllable.length)];
    let three = this.state.threeSyllable[Math.floor(Math.random() * this.state.threeSyllable.length)];
    let three1 = this.state.threeSyllable[Math.floor(Math.random() * this.state.threeSyllable.length)];
    let four = this.state.fourSyllable[Math.floor(Math.random() * this.state.fourSyllable.length)];
    let four1 = this.state.fourSyllable[Math.floor(Math.random() * this.state.fourSyllable.length)];
    let fiveArray = [two, three].join(' ');
    let fiveArray1 = [three, two].join(' ');
    let fiveArray2 = [one, four].join(' ');
    let fiveArray3 = [four, one].join(' ');
    let randomFive = [fiveArray, fiveArray1, fiveArray2, fiveArray3];
    let randomFive2 = [fiveArray, fiveArray1, fiveArray2, fiveArray3];
    let sevenArray = [four1, three1].join(' ');
    let sevenArray1 = [three1, four1].join(' ');
    let sevenArray2 = [two1, four1, one1].join(' ');
    let randomSeven = [sevenArray, sevenArray1, sevenArray2];
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '62vh',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {randomFive[Math.floor(Math.random() * randomFive.length)]}
        <br />
        {randomSeven[Math.floor(Math.random() * randomSeven.length)]}
        <br />
        {randomFive2[Math.floor(Math.random() * randomFive2.length)]}
      </div>
    );
  }

  render() {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
          <h1> One Million Haiku </h1>
        </div>

        <button
          style={{ display: 'flex', justifyContent: 'center', height: '5vh', marginLeft: 'auto', marginRight: 'auto' }}
          onClick={() => {
            let haiku = this.randomHaiku();
            this.setState({ haiku });
          }}
        >
          GENERATE HAIKU
        </button>

        {this.state.haiku}
      </>
    );
  }
}

export default App;
