// import { ui } from './ui'

const http = new CustomHTTP();
const ui = new UI();

//get devices on DOM load
document.addEventListener('DOMContentLoaded', getDevices);

// Listen for add device
document.querySelector('#add-device-btn').addEventListener('click', submitDevice); 

// Get Devices
function getDevices() {
    http.get('http://localhost:3000/api/devices')
    .then(data => ui.showDevices(data))
    .catch(err => console.log(err));
}

//Add Device
function submitDevice() {
    const name = document.querySelector('#device-name').value;
    const os = document.querySelector('#os').value;
    const status = document.querySelector('#status').value;
    const team = document.querySelector('#team').value;

    const data = {
        name, // same as name: name etc
        os,
        status,
        team
    }

    // Create Device
    http.post('http://localhost:3000/api/devices', data)
        .then(data => {
            ui.showAlert('New device added', 'alert-success');
            ui.clearFields();
            getDevices();
        })
        .catch(err => console.log(err))
} 