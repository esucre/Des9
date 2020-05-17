import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const PetInfo = ({ petData:{ petName, petType, petDescription, petInfo } }) => (
  <div className="info">
    <div className ="petName">
      <div>
        <h1 className ="big">{petName}</h1>
      </div>
      <h3 className ="small">{petType}</h3>
    </div>
    <div className ="description">
      <h3 className ="title">{petDescription}</h3>
      <p className ="text">{petInfo}</p>
    </div>
    <div className ="adopt-terms">
      <a href="#" className ="adopt">
        ¡Adoptame!
      </a>
      {/* <div class="price">
                        <i class="fas fa-dollar-sign"></i>
                        <h1>189.99</h1>
                    </div> */}
    </div>
  </div>
);
PetInfo.propTypes = {

  petData:PropTypes.shape({
    petName:PropTypes.string.isRequired,
    petType:PropTypes.string.isRequired,
    petDescription:PropTypes.string.isRequired,
    petInfo:PropTypes.string.isRequired,
  })

};

export default PetInfo;
