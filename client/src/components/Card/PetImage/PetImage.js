import React from 'react';
import './style.css';
const loli = require ('./../../../img/loli2.jpg');

const PetImage = ()=>(
    <div  className="petBackground">        
        <img src={loli} alt="Loli.jpg" className = 'product'/>
    </div>
);

export default PetImage;