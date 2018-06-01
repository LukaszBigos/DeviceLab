class UI {
    constructor() {
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
                    <td> 
                    ${device.name}
                    </td>
                    <td>
                    ${device.os}
                    </td>
                    <td>
                    ${device.status}
                    </td>
                    <td>
                    ${device.team}
                    </td>
                    <td>
                    <a href="#" data-id="${device.id}">
                        <i class="fas fa-edit"></i>
                    </a> 

                    <a href="#" data-id="${device.id}">
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
        const currentAlert = document.querySelector('.alert-success');

        if(currentAlert) {
            setTimeout(() => {
                currentAlert.style.opacity = '0.4';
            }, 500);           
            
            setTimeout(() => {
                currentAlert.remove();
            }, 2500);
        }
    }

    clearFields() {
        this.deviceInput.value = '';
        this.osInput.value = '';
    }
}

// export const ui = new UI;