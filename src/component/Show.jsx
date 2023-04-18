import React from 'react';
import PropTypes from 'prop-types';
import '../footer.css';

class Show extends React.Component{
    render() {
        const {number1, number2} = this.props
        return (
          <div>
            <h1>{number1} + {number2} = {number1 + number2}</h1>
          </div>
        );
      }

}
Show.defaultProps = {
    number1: '4',
    number2: '2'
  }

  Show.propTypes = {
    number1: PropTypes.number,
    number2: PropTypes.number
  }

export default Show;