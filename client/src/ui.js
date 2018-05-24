class UI {
    constructor() {
          this.deviceInput = document.querySelector('#device-name');
          this.osInput = document.querySelector('#os');
          this.statusInput = document.querySelector('#status');
          this.teamInput = document.querySelector('#team');
          this.addDeviceButton = document.querySelector('#add-device-btn');
          this.dataFetch = document.getElementById('data-fetch');
    }
    showDevices(devices) {
        let output = '';
                for(let i in devices){
                    output += `
                    <tr>
                    <td> 
                    ${devices[i].name}
                    </td>
                    <td>
                    ${devices[i].model}
                    </td>
                    <td>
                    ${devices[i].os}
                    </td>
                    <td>
                    ${devices[i].team}
                    </td>
                    </tr>`;
                }
                dataFetch.innerHTML = output;
    }
}

// export const ui = new UI;