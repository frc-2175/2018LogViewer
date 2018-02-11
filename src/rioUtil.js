import Axios from 'axios';

const FAKE = true;

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
          resolve(['talon.data']);
          break;
        case '2':
          resolve(['talon.data', 'joystick.data']);
          break;
        case '3':
          resolve(['talon.data', 'joystick.data', 'gyro.data']);
          break;
        default:
          resolve(['nobody.data']);
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
  let values, name;
  switch (fileName) {
    case 'talon.data':
      values = [0.0, 1.0, 0.0, -1.0, 0.0];
      name = "output";
      break;
    case 'joystick.data':
      values = [0.0, 0.5, 1.0, 0.5, 1.0];
      name = "x";
      break;
    case 'gyro.data':
      values = [0.0, 180.0, 90.0, 180.0, 45.0];
      name = "zrotation";
      break
    default:
      values = [0.0, 0.0, 0.0, 0.0, 0.0];
      name = "none";
      break;
  }

  if (FAKE) {
    const fakeData = `{"timestamp":10.0,"values":{"${name}":${values[0]}}}
{"timestamp":10.1,"values":{"${name}":${values[1]}}}
{"timestamp":10.2,"values":{"${name}":${values[2]}}}
{"timestamp":10.3,"values":{"${name}":${values[3]}}}
{"timestamp":10.4,"values":{"${name}":${values[4]}}}`;

    return new Promise((resolve, reject) => {
      resolve({data: fakeData, name: name});
    });
  } else {
    return Axios.get(`/${folderName}/${fileName}`)
      .then(response => {
        return response.data;
      });
  }
}
