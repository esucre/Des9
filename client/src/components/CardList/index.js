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
    cardData: {
      name: 'Shinobu',
      type: 'Loli',
      description: 'Mi Loli legal Favorita',
      info: 'Totalmente legal prro',
    },
  },
  {
    id: 2,
    image: 'loli2',
    cardData: {
      name: 'Taiga',
      type: 'Loli',
      description: 'Loli no tan legal',
      info: 'Totalmente legal prro',
    },
  },
  {
    id: 3,
    image: 'loli2',
    cardData: {
      name: 'Yue',
      type: 'Loli',
      description: 'Loli no tan legal',
      info: 'Totalmente legal prro',
    },
  },
  {
    id: 4,
    image: 'loli4',
    cardData: {
      name: 'Shirayuki',
      type: 'Loli',
      description: 'Loli no tan legal',
      info: 'Totalmente legal prro',
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
          {/* <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
            <div>Loli</div>
          </Rodal> */}
        </ul>
      </div>
    );
  }
}

export default CardList;
