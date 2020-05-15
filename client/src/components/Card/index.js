import React, { Component } from 'react';
import PetImage from './PetImage/PetImage';
import PetInfo from './PetInfo/PetInfo';
import './style.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    const {data:{image, petData}} = props;
    this.state = {
      image,
      petData,
    }
  }

  render() {
    const {image, petData} = this.state;
    return (
      <div className="card">
        <PetImage image = {image} />
        <PetInfo petData = {petData} />
      </div>
    );
  }
}

Card.propTypes = {

  data:PropTypes.shape({
    image:PropTypes.string.isRequired,
    petData:PropTypes.shape({
      
    }),

  }),

};

export default Card;
