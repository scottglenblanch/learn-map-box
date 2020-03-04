import getMapConfig from './getMapConfig';
import getAccessToken from './getAccessToken';
import initMapData from './initMapData';
import mapboxgl from 'mapbox-gl';


export default ({ container }) => {

  mapboxgl.accessToken = getAccessToken();

  var map = new mapboxgl.Map(getMapConfig(container));

  initMapData(map);
}