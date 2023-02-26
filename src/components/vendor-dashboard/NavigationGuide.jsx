import React, { useEffect, useRef, useState } from 'react';
import Vendordashboard from './vendor-dashboard.module.css';
import mapboxgl from 'mapbox-gl';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJ1ZHYxMyIsImEiOiJjbGVqeGJlbzUwZnlpM3lxc2RwODVmZGk1In0.VjeUe48153TvLmFeSN0SEA';

const NavigationGuide = () => {

   const [startLocation, setStartLocation] = useState('');
   const [endLocation, setEndLocation] = useState('');
   const mapRef = useRef(null);
   const directionsRef = useRef(null);

   useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 2,
      interactive: true
    });

    const directions = new Directions({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling'
      });
  
      map.addControl(directions);
      //directionsRef.current = directions;
  
      // directions.on('load', () => {
      //   //const routeLayer = map.getLayer('directions-route-line');
      // });
  
      return () => map.remove();
    }, []);


    const handleStartLocationChange = (event) => {
        setStartLocation(event.target.value);
      };
    
      const handleEndLocationChange = (event) => {
        setEndLocation(event.target.value);
      };
    
      const handleRouteClick = () => {
        directionsRef.current.setOrigin(startLocation);
        directionsRef.current.setDestination(endLocation);
        directionsRef.current.query();
      };

   return (
    <div><form onSubmit={(event) => event.preventDefault()} style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "16px"
          }}>
          {/* <label htmlFor="startLocation">Start location:</label>
          <input
            type="text"
            id="startLocation"
            value={startLocation}
            onChange={handleStartLocationChange}
          />
          <br />
          <label htmlFor="endLocation">End location:</label>
          <input
            type="text"
            id="endLocation"
            value={endLocation}
            onChange={handleEndLocationChange}
          />
          <br /> */}
          {/* <button onClick={handleRouteClick}>Get Route</button> */}
          </form>
        <div ref={mapRef} className={`${Vendordashboard.map_container}`} />

    </div>
  )
}

export default NavigationGuide;