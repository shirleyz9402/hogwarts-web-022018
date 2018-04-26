import React from 'react';
import Hog from './Hog';

class HogBrowser extends React.Component{
  render(){
    const renderHogs = this.props.hogs.map((hog,i) => {
      return (<Hog
      key = {i}
      hog = {hog}
      handleClickedHogs = {this.props.handleClickedHogs}
      />)
      }
    )
    return(
      <div className="ui cards">
      {renderHogs}
      </div>
    )
  }
}
export default HogBrowser
