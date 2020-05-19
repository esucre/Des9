import React, { Component } from 'react';
import Card from './Card/index';
import './style.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
const loli = require('./../../../src/img/loli2.jpg');

const datas = [
  {
    id: 1,
    image: 'loli1',
    petData: {
      petName: 'Shinobu',
      petType: 'Loli',
      petDescription: 'Mi Loli legal Favorita',
      petInfo: 'Totalmente legal prro',
    },
  },
  {
    id: 2,
    image: 'loli2',
    petData: {
      petName: 'Taiga',
      petType: 'Loli',
      petDescription: 'Loli no tan legal',
      petInfo: 'Totalmente legal prro',
    },
  },
  {
    id: 2,
    image: 'loli2',
    petData: {
      petName: 'Yue',
      petType: 'Loli',
      petDescription: 'Loli no tan legal',
      petInfo: 'Totalmente legal prro',
    },
  },
  {
    id: 4,
    image: 'loli4',
    petData: {
      petName: 'Shirayuki',
      petType: 'Loli',
      petDescription: 'Loli no tan legal',
      petInfo: 'Totalmente legal prro',
    },
  },
];

const arrToComponent = (datas) => datas.map((data) => <Card key={data.id} data={data} />);

class CardList extends Component {

  constructor(props){
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
}

hide() {
    this.setState({ visible: false });
}
  render() {
    return (
      <div>
        <ul>
          <li className="card-list" onClick={this.show.bind(this)}>{arrToComponent(datas)}</li>
          <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
            <div>Loli</div>
          </Rodal>
        </ul>
      </div>
    );
  }
}

export default CardList;
