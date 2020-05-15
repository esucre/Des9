import React from 'react';
import Card from './../Card/index'
const loli = require ('./../../../src/img/loli2.jpg');

const data = {
    image: 'loli2',   
    petData:{
        petName:'Shinobu',
        petType:'Loli',
        petDescription:'Loli legal',
        petInfo: 'Totalmente legal prro',
    },
}

const CardList = ()=>(
    <div>
        <Card data = {data}/>       
    </div>
);


export default CardList;