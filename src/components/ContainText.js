import React from 'react';

class ContainText extends React.Component {
  render() {
    return (
      <div className="text-data" >
        <p>
          {this.props.category}
        </p>
      </div>
    )
  }
}

export default ContainText;
