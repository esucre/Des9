import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const PetInfo = ({ petData:{ petName, petType, petDescription, petInfo } }) => (
  <div className="info">
    <div class="petName">
      <div>
        <h1 class="big">{petName}</h1>
      </div>
      <h3 class="small">{petType}</h3>
    </div>
    <div class="description">
      <h3 class="title">{petDescription}</h3>
      <p class="text">{petInfo}</p>
    </div>
    <div class="adopt-terms">
      <a href="#" class="adopt">
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
