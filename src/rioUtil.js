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
  let values, names;
  switch (fileName) {
    case 'talon.data':
      values = [[0.0, 1.0, 0.0, -1.0, 0.0], [12, 11.4, 5, 3, 6]];
      names = ["output", "current"];
      break;
    case 'joystick.data':
      values = [[0.0, 0.5, 1.0, 0.5, 1.0], [0.0, 0.3, 0.0, 0.0, 0.5]];
      names = ["x", "y"];
      break;
    case 'gyro.data':
      values = [[0.0, 180.0, 90.0, 180.0, 45.0], [0.0, 5.0, 3.0, 2.0, 4.0]];
      names = ["zrotation", "xrotation"];
      break
    default:
      values = [[0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0]];
      names = ["none", "stuff"];
      break;
  }

  if (FAKE) {
    const fakeData = `{"timestamp":10.0,"values":{"${names[0]}":${values[0][0]}, "${names[1]}":${values[1][0]}}}
{"timestamp":10.1,"values":{"${names[0]}":${values[0][1]}, "${names[1]}":${values[1][1]}}}
{"timestamp":10.2,"values":{"${names[0]}":${values[0][2]}, "${names[1]}":${values[1][2]}}}
{"timestamp":10.3,"values":{"${names[0]}":${values[0][3]}, "${names[1]}":${values[1][3]}}}
{"timestamp":10.4,"values":{"${names[0]}":${values[0][4]}, "${names[1]}":${values[1][4]}}}`;

    return new Promise((resolve, reject) => {
      resolve(fakeData);
    });
  } else {
    return Axios.get(`/${folderName}/${fileName}`)
      .then(response => {
        return response.data;
      });
  }
}

export function getDataSets(file) {
    let objects = file.map(element => JSON.parse(element));
    let sets = [];
    for(let value in objects[0].values) {
        sets.push(value);
    }
    return sets;
}
