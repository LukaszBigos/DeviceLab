class UI {
    constructor() {
        this.idInput = document.querySelector('#device-id');
        this.deviceInput = document.querySelector('#device-name');
        this.osInput = document.querySelector('#os');
        this.statusInput = document.querySelector('#status');
        this.teamInput = document.querySelector('#team');
        this.addDeviceButton = document.querySelector('#add-device-btn');
        this.dataFetch = document.getElementById('data-fetch');
        this.state = 'add'; 
    }
    showDevices(devices) {
        console.log('z ui show devices',  devices);
        let output = '';
        
        devices.forEach( (device) => {
            output += ` 
                <tr>
                    <td>${device.name}</td>
                    <td>${device.os}</td>
                    <td>${device.status}</td>
                    <td>${device.team}</td>
                    <td>
                    <a href="#" class="edit" data-id="${device._id}">
                        <i class="fas fa-edit"></i>
                    </a>
                    <a href="#" class="delete" data-id="${device._id}">
                    <i class="fas fa-trash"></i>
                    </a> 
                    </td>
                </tr>`;
        });
            this.dataFetch.innerHTML = output;
    }

    showAlert(message, className) {
        
        this.clearAlert();

        const div = document.createElement('div');
        
        div.className = className;

        div.appendChild(document.createTextNode(message));
        
        // Get parent
        const container = document.querySelector('main');

        //Get element before which alert will be displayed
        const searchDevice = document.querySelector('#filter-device');

        // Insert alert div
        container.insertBefore(div, searchDevice)

        // Remove alert
        this.clearAlert();

    }

    clearAlert() {
        const currentAlert = document.querySelectorAll('.alert-success, .alert-warning');

        if(currentAlert.length > 0) {
            setTimeout(() => {
                currentAlert[0].style.opacity = '0.4';
            }, 500);           
            
            setTimeout(() => {
                currentAlert[0].remove();
            }, 2500);
        }
    }

    clearFields() {
        this.deviceInput.value = '';
        this.osInput.value = '';
        this.statusInput.value = '';
        this.teamInput.value = '';
    }

    // Fill form to edit
    fillForm(data) {
        this.idInput.value = data.id;
        this.deviceInput.value = data.name;
        this.osInput.value = data.os;
        this.statusInput.value = data.status;
        this.teamInput.value = data.team;
        
        this.changeFormState('edit');
    }

    clearIdInput() {
        this.idInput.value = '';
    }
    
    // Change the form state

    changeFormState(type) {

        if(type === 'edit') {

            this.addDeviceButton.value = 'Update device';
            this.addDeviceButton.className = 'blue-btn update';

            // Create cancel button
            const cancelButton = document.createElement('button');
            cancelButton.className = 'blue-btn cancel';
            cancelButton.appendChild(document.createTextNode('Cancel Edit'));

            // Get parent
            const parent = document.querySelector('#add-device');

            //Get element to inser before
            const formEnd = document.querySelector('.form-end');

            // Insert Cancel button
            parent.insertBefore(cancelButton, formEnd); 
        }
        else {
            this.addDeviceButton.value = 'Add device';
            this.addDeviceButton.className = 'blue-btn';
            if(document.querySelector('.cancel')) {
                document.querySelector('.cancel').remove();
            }

            // Clear ID from hidden input
            this.clearIdInput();

            //Clear entries
            this.clearFields();
        }
    }

}

// export const ui = new UI;