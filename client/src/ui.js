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
                    ${device.model}
                    </td>
                    <td>
                    ${device.os}
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
}

// export const ui = new UI;