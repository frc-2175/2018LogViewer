import Axios from 'axios';

const FAKE = false;

Axios.defaults.baseURL = 'http://roborio-2175-frc.local';

export function getFolders() {
  if (FAKE) {
    return new Promise((resolve, reject) => {
      resolve(['1', '2', '3']);
    });
  } else {
    return Axios.get('/')
      .then(response => {
        return response.data;
      });
  }
}

export function getFiles(folderName) {
  if (FAKE) {
    return new Promise((resolve, reject) => {
      switch (folderName) {
        case '1':
          resolve(['talon.log']);
          break;
        case '2':
          resolve(['talon.log', 'joystick.log']);
          break;
        case '3':
          resolve(['talon.log', 'joystick.log', 'gyro.log']);
          break;
        default:
          resolve(['nobody.log']);
          break;
      }
    });
  } else {
    return Axios.get(`/${folderName}`)
      .then(response => {
        return response.data;
      });
  }
}

export function getFile(folderName, fileName) {
  if (FAKE) {
    const fakeData = `
{"timestamp":10.0,"values":{"value":0.0}}
{"timestamp":10.1,"values":{"value":1.0}}
{"timestamp":10.2,"values":{"value":0.0}}
{"timestamp":10.3,"values":{"value":-1.0}}
{"timestamp":10.4,"values":{"value":0.0}}
`
    return new Promise((resolve, reject) => {
      resolve();
    });
  } else {
    return Axios.get(`/${folderName}/${fileName}`)
      .then(response => {
        return response.data;
      });
  }
}
