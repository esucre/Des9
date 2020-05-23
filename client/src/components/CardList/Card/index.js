import React from 'react';
import CardImage from './CardImage/CardImage';
import CardInfo from './CardInfo/CardInfo';
import InfoButton from './InfoButton/InfoButton'
import './../style.css';
import PropTypes from 'prop-types';

const Card = ({data:{image, cardData}})=>(
  
      <div className="card">
        <CardImage image = {image} />
        <CardInfo cardData = {cardData} />
        <InfoButton/>
      </div>


);

Card.propTypes = {

  data:PropTypes.shape({
    image:PropTypes.string.isRequired,
    cardData:PropTypes.shape({
      
    }),

  }),

};

export default Card;
