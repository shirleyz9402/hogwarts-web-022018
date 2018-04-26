import React from 'react';

class Hog extends React.Component{
  handleClick = (event) => {
    console.log('-------', event.target.id)
    this.setState({clicked: !this.state.clicked})
    this.props.handleClickedHogs(event.target.id)
  }
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

  render(){
    console.log(this.props.hog)
    return (
      <div id={this.props.hog} className="ui grid container" onClick={this.handleClick}>
        <h1>{this.props.hog.name}</h1>
      <img id={this.props.hog} src='../hog-imgs/cherub.jpg'/>
      {this.state.clicked ?
        <div id={this.props.hog} className="details">
          <p>Specialty:{this.props.hog.specialty}</p>
          <p>Weight:{this.props.hog.weight}</p>
          <p>Greased:{this.props.hog.greased}</p>
          <p>Highest Medal Achieved: {this.props.hog.medal}</p>
        </div> : ""
      }
      </div>
    )

  }
}



export default Hog
