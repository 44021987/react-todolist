import React, { Component }  from 'react';

class Foot extends Component {
  setStatus = e => {
    this.props.setStatus(e.target.getAttribute('data-value'))
  }
  render() {
    return (
      <div className="center">
        <button data-value="0" onClick={this.setStatus}>全部</button>
        <button data-value="1" onClick={this.setStatus}>已完成</button>
        <button data-value="2" onClick={this.setStatus}>未完成</button>
      </div>
    )
  }
}

export default Foot