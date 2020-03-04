import React, { useEffect } from 'react';
import './MapBox.css';
import initializeMapboxGl from './intializeMapboxGl';

const container = 'map';

function MapBox() {
  useEffect(() => {
    initializeMapboxGl({
      container
    });
  });

  return (
    <div id={container} />
  );
}

export default MapBox;
