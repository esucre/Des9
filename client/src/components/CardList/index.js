import React from 'react';
import Card from './../Card/index';
const loli = require('./../../../src/img/loli2.jpg');

const datas = [
  {
    image: 'loli2',
    petData: {
      petName: 'Shinobu',
      petType: 'Loli',
      petDescription: 'Loli legal',
      petInfo: 'Totalmente legal prro',
    },
  },
  {
    image: 'loli3',
    petData: {
      petName: 'Taiga',
      petType: 'Loli',
      petDescription: 'Loli legal',
      petInfo: 'Totalmente legal prro',
    },
  },
];

const arrToComponent = datas =>(
    datas.map(data => <Card data = {data}/>)
);

const CardList = () => (
  <div>
    {arrToComponent(datas)}
  </div>
);

export default CardList;
