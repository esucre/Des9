import React, {Component} from 'react';
import PetImage from './PetImage/PetImage';
import PetInfo from './PetInfo/PetInfo'
import './style.css';

class Card extends Component{

    render(){

        return(

                <div className = 'card'>
                    <PetImage/>
                    <PetInfo/>
                </div>

            );


    }

      
}

export default Card;