import React, { useEffect } from 'react';
import './MapBox.css';
import initializeMapboxGl from './initializeMapboxGl';

const container = 'map';
const accessToken = 'pk.eyJ1Ijoic2NvdHRnbGVuYmxhbmNoIiwiYSI6ImNrN2RrMnlkOTBmcXkzZnB0cDA4ZDU4OXUifQ.glaqnpNSC-dWFmijWk7uxw';

function MapBox() {
  useEffect(() => {
    initializeMapboxGl({
      container, accessToken
    });
  });

  return (
    <div id={container} />
  );
}

export default MapBox;
