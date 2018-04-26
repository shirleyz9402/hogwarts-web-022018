import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import Filters from './Filters'
// import Hog from './Hog'
import HogBrowser from './HogBrowser'



class App extends Component {
constructor(){

  super()
  this.state = {
    hogs: [],
    clickedHogs: [],
    sortBy: '',
    filters: {
      greased: 'all'
    }
  }

}
handleOnChangeGreased = greased => {
  this.setState({filters: Object.assign({}, this.filters, {
    greased: greased
    })
  })
}
fetchHogs = () => {
  console.log(hogs)
  if (this.state.filters.greased === 'all'){
    this.setState({hogs: hogs})
  }
  else if (this.state.filters.greased === 'greased'){
    this.setState({hogs: hogs.filter(hog => hog.greased)})

  }
  else {
    this.setState({hogs: hogs.filter(hog => !hog.greased)})
  }
}
handleClickedHogs = hog => {
    if (!this.state.clickedHogs.includes(hog)){
      this.setState({clickedHogs: [...this.state.clickedHogs,hog]})
    }
    else {
      this.setState({clickedHogs: this.state.clickedHogs.filter(newHog => newHog!==hog)})
    }
  }


  render() {
    return (
      <div className="App">
          < Nav />
          <Filters
            filters = {this.state.filters}
            onChangeGreased = {this.handleOnChangeGreased}
            onFindHogsClick = {this.fetchHogs}
            />
          <HogBrowser
          hogs={this.state.hogs}
          clickedHogs={this.state.clickedHogs}
          handleClickedHogs={this.handleClickedHogs}
          />

      </div>
    )
  }
}

export default App;
