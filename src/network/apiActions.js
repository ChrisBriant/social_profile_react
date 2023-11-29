import {conn } from './api';

const getProfile = () => {
  return new Promise((resolve,reject) => {
    conn.get('/api/getprofile')
    .then( (response) => {
      return resolve(response.data);
    }).catch((err) => {
      console.log(err);
      return reject('An error occured');
    });
  });
}

export {getProfile};