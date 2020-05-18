import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
// const loli = './../../../img/';
const loli = require ('./../../../../img/loli2.jpg');

const PetImage = ({img})=>(
    <div  className="petBackground">       
        <img src={loli} alt="Loli.jpg" className = 'petImage'/>
    </div>
    
);

PetImage.propTypes = {

    img:PropTypes.string,

};

export default PetImage;
