import Axios from 'axios';
const apiUrl = 'http://18.222.40.124';

module.exports.trackClick = (element, widget) => {
  Axios.post(`${apiUrl}/interactions`, {
    element: element,
    widget: widget,
    time: Date.now().toString()
  });
}