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
      resolve(['talon.log', 'joystick.log']);
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
