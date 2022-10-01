import React from 'react';
import './homepage-image.css'
import Button from '../common/button';

const HomepageImage = () => {
  return (
    <div className='homepage-image'>
      <div className='call-to-action'>
        <p>Psicologia clínica de abordagem Junguiana, Terapia Floral e Integrativa.</p>
        <Button></Button>
      </div>
      <img src="./Isabel.png" alt="" />
    </div>
  );
}

export default HomepageImage;
