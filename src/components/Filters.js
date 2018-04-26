import React from 'react';

class Filters extends React.Component {
  handleOnChangeGreased = event => {
    this.props.onChangeGreased(event.target.value)
  }
  render(){
    return (
      <div className="ui form">
        <h3>Greased?</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleOnChangeGreased} value={this.props.filters.greased}>
            <option value="all">All</option>
            <option value='true'>Greased</option>
            <option value='false'>Not Greased</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindHogsClick}>Find Hogs</button>
        </div>
      </div>
    )
  }
}
export default Filters
