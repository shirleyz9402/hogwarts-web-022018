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
    const {hog: {name, specialty, weight, greased, medal}} = this.props
    const fileName = Object.values({name}).toString().replace(/ /g, '_').toLowerCase() + '.jpg'
    return (
      <div id={this.props} className="ui eight wide column" onClick={this.handleClick}>
        <h1>{name}</h1>
      <img id={this.props} src={require(`../hog-imgs/${fileName}`)} />
      {this.state.clicked ?
        <div id={this.props} className="details">
          <p>Specialty:{specialty}</p>
          <p>Weight:{weight}</p>
          <p>Greased:{greased ? "true" : "false"}</p>
          <p>Highest Medal Achieved: {medal}</p>
        </div> : ""
      }
      </div>
    )

  }
}



export default Hog
