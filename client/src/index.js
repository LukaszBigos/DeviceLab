// import { ui } from './ui'

const http = new CustomHTTP();
const ui = new UI();

//get devices on DOM load
document.addEventListener('DOMContentLoaded', getDevices);

// Listen for add device
document.querySelector('#add-device-btn').addEventListener('click', submitDevice);

// Listen for edit state
document.querySelector('#device-list').addEventListener('click', enableEdit);

// Listen for Cancel
document.querySelector('#add-device').addEventListener('click', cancelEdit);

// Listen for Delete
document.querySelector('#device-list').addEventListener('click', deleteDevice);

// Get Devices
function getDevices() {
    http.get('http://localhost:3000/api/devices')
    .then(data => ui.showDevices(data))
    .catch(err => console.log(err));
}

//Add Device
function submitDevice() {
    const id = document.querySelector('#device-id').value;
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

    if(name === '' || os === '' || status === '' ||  team === '' ) {
        ui.showAlert('Please fill in all fields', 'alert-warning');
    }

    else {    
        //check for ID 
        if(id === '') {
            // Create Device
            http.post('http://localhost:3000/api/devices', data)
            .then(data => {
                ui.showAlert('New device added', 'alert-success');
                ui.clearFields();
                getDevices();
            })
            .catch(err => console.log(err));
        }
        else {
            // Update Post
            http.put(`http://localhost:3000/api/devices/${id}`, data)
            .then(data => {
                ui.showAlert('Device info updated', 'alert-success');
                ui.changeFormState('add');
                getDevices();
            })
            .catch(err => console.log(err));
        }

    }
 
}

function deleteDevice(e) {
    if(e.target.parentElement.classList.contains('delete')) {
      const id = e.target.parentElement.dataset.id;
      if(confirm('Are you sure?')) {
        http.delete(`http://localhost:3000/api/devices/${id}`)
          .then(data => {
            ui.showAlert('Device removed', 'alert alert-warning');
            getDevices();
          })
          .catch(err => console.log(err));
      }
    }
    e.preventDefault();
  }

// Enable Edit State
function enableEdit(e) {
    if(e.target.parentElement.classList.contains('edit')) {
        const id = e.target.parentElement.dataset.id;
        const name = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        const os = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        const status = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
        const team = e.target.parentElement.parentElement.previousElementSibling.textContent;
        
        const data = {
            id,
            name,
            os,
            status,
            team
        }

        // Fill form with selected record
        ui.fillForm(data);
    }

    e.preventDefault();
}

// Cancel Edit State
function cancelEdit(e) {
    if(e.target.classList.contains('cancel')) {
        ui.changeFormState('add');
    }
    e.preventDefault();
}

