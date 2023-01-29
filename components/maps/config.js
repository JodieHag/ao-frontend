import ufoImg from '../../static/media/img/ufo.png';
import abductionImg from '../../static/media/img/abduction.png';
import entityImg from '../../static/media/img/alien.png';
import contactImg from '../../static/media/img/contact.png';

export const createMap = ({ zoom, center }) => {
  let map;
  if (typeof maplibregl !== 'undefined') {
    map = new maplibregl.Map({
      container: 'mapAO', // container ID
      style: 'https://api.maptiler.com/maps/voyager/style.json?key=HktdhA01J5l6PGfMMGXD', // style URL (https://cloud.maptiler.com/ + key)
      center, // starting position last item updated [lng, lat]
      zoom, // starting zoom,
      minZoom: 1,
      attributionControl: false,
      locale: 'es',
      pitch: 10,
    });
  }

  return map;
};

export const typeImg = {
  ufo: ufoImg,
  abduction: abductionImg,
  entity: entityImg,
  contact: contactImg,
};
