import React from 'react';
import './../../style.css';
import PropTypes from 'prop-types';
// const loli = './../../../img/';
const loli = require ('./../../../../img/loli2.jpg');

const CardImage = ({img})=>(
    <div  className="background">       
        <img src={loli} alt="Loli.jpg" className = 'petImage'/>
    </div>
    
);

CardImage.propTypes = {

    img:PropTypes.string,

};

export default CardImage;
