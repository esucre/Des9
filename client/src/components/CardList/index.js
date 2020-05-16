import React, { Component } from 'react';
import Card from './../Card/index';
import './style.css';
const loli = require('./../../../src/img/loli2.jpg');

const datas = [
  {
    image: 'loli1',
    petData: {
      petName: 'Shinobu',
      petType: 'Loli',
      petDescription: 'Mi Loli legal Favorita',
      petInfo: 'Totalmente legal prro',
    },
  },
  {
    image: 'loli2',
    petData: {
      petName: 'Taiga',
      petType: 'Loli',
      petDescription: 'Loli no tan legal',
      petInfo: 'Totalmente legal prro',
    },
  },
];

const arrToComponent = (datas) => datas.map((data) => <Card data={data} />);

class CardList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="card-list">{arrToComponent(datas)}</li>
        </ul>
      </div>
    );
  }
}

export default CardList;
