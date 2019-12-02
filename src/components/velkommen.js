import React from 'react';
import IntroSlider from './introSlider';
import Nyheder from './nyheder';
import Aktiviteter from './aktivititer';
import Outro from './outro';
import Footer from './footer';



const Velkommen = () => {

return (
<div>

  <IntroSlider />
  <Nyheder />
  <Aktiviteter/>
<Outro/>
<Footer/>


</div>
);
}

export default Velkommen;