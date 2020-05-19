import React from 'react';
import PetImage from './PetImage/PetImage';
import PetInfo from './PetInfo/PetInfo';
import './../style.css';
import PropTypes from 'prop-types';

const Card = ({data:{image, petData}})=>(
  
      <div className="card">
        <PetImage image = {image} />
        <PetInfo petData = {petData} />
      </div>


);

Card.propTypes = {

  data:PropTypes.shape({
    image:PropTypes.string.isRequired,
    petData:PropTypes.shape({
      
    }),

  }),

};

export default Card;
