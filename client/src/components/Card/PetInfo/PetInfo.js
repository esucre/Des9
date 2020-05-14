import React from 'react';
import './style.css';

const PetInfo = () => (
  <div className="info">
    <div class="petName">
      <div>
        <h1 class="big">Lolis</h1>
      </div>
      <h3 class="small">Lolis is Justice</h3>
    </div>
    <div class="description">
      <h3 class="title">Informacion de la Mascota</h3>
      <p class="text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's.
      </p>
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

export default PetInfo;
