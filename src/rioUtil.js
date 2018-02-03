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
    return new Promise((resolve, reject) => {
      resolve('{"timestamp":10,"values":{"output":1.0}}');
    });
  } else {
    return Axios.get(`/${folderName}/${fileName}`)
      .then(response => {
        return response.data;
      });
  }
}
