// import { ui } from './ui'

const http = new CustomHTTP();
const ui = new UI();

document.addEventListener('DOMContentLoaded', getDevices);

function getDevices() {
    http.get('http://localhost:3000/api/devices')
    .then(data => ui.showDevices(data))
    .catch(err => console.log(err));
}
