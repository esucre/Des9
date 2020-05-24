import React from 'react';
// import './../../style.css';
import PropTypes from 'prop-types';
// const loli = './../../../img/';
const hat = require ('../../../../assets/img/ORH82L0.jpg');

const CardImage = ({img})=>(
    <div  className="background">       
        <img src={hat} alt="Loli.jpg" className = 'petImage'/>
    </div>
    
);

CardImage.propTypes = {

    img:PropTypes.string,

};

export default CardImage;
