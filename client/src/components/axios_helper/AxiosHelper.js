import axios from 'axios'

exports.addMessage = (data) => {
  console.log("fires from axios add message");
  return axios.post('/addmessage', data);
};

exports.getAllMessage = () => {
  console.log('getAllmessage fired')
  return axios.get('/getallmessage')
}
