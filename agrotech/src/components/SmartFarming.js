import React from 'react';
import './CSS/sf.css';
import Footer from './Footer';

function SmartFarming() {
  return (
    <div>
      <section>
      {/* AIzaSyAmsXtrYd9smS7YCDTEZZqfGwXIDIxZiuc */}
      <h2>Smart Farming</h2>
        <iframe
          title='1'
          width="33%"
          height="75%"
          src="https://www.youtube.com/embed/l0bpy857deM"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          title='1'
          width="33%"
          height="75%"
          src="https://www.youtube.com/embed/DcYSSTu3rxw"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>            
      </section>
      <Footer />
    </div>
  );
}

export default SmartFarming;
