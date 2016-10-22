export const APP_DATA = 'APP_DATA';

const data = [
  {
    id          : 1,
    seen        : true,
    jobStatus   : true,
    submitted   : '9 Days ago',
    photo       : 'https://s-media-cache-ak0.pinimg.com/originals/0e/ed/c9/0eedc9e9a5104635d84d3b06b3e162b5.jpg',
    business    : 'Eric place',
    position    : 'chef',
    emailUpdate : true,
    textUpdates : false
  },
  {
    id          : 2,
    seen        : true,
    jobStatus   : true,
    submitted   : '19 Days ago',
    photo       : 'https://s-media-cache-ak0.pinimg.com/originals/0e/ed/c9/0eedc9e9a5104635d84d3b06b3e162b5.jpg',
    business    : 'Justin place',
    position    : 'host',
    emailUpdate : false,
    textUpdates : true
  },
];
export function fetchApps() {
  return {
    type    : APP_DATA,
    payload : data
  };
}
