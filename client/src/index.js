// import { ui } from './ui'
// Storage Controller

// Device Controller

// Get Users

const http = new CustomHTTP;

http.get('http://localhost:3000/api/devices')
    .then(data => console.log(data))
    .catch(err => console.log(err));

const DeviceCtrl = (() => {
    
    // Device Constructor
    const Device = (name, model, os, team) => {
        //to be used for sending data to db
    }

    function loadDevices() {
        const xhr = new XMLHttpRequest();
        const dataFetch = document.getElementById('data-fetch');
        const getDevices = document.getElementById('get-devices');

        xhr.open('GET', 'http://localhost:3000/api/devices', true);
    
        xhr.onload = () => {

            //showDevices from uiCrtl
            if(xhr.status == 200){
                const devices = JSON.parse(xhr.responseText);
                
                // let output = '';
                // for(let i in devices){
                //     output += `
                //     <tr>
                //     <td> 
                //     ${devices[i].name}
                //     </td>
                //     <td>
                //     ${devices[i].model}
                //     </td>
                //     <td>
                //     ${devices[i].os}
                //     </td>
                //     <td>
                //     ${devices[i].team}
                //     </td>
                //     </tr>`;
                // }
                // dataFetch.innerHTML = output;
            }
        }
    
        xhr.send();
        getDevices.innerHTML = 'Hide Devices';
    
        if (dataFetch.style.display === 'none') {
            dataFetch.style.display = 'table-footer-group';
        }
    
        else {
            dataFetch.style.display = 'none';
            getDevices.innerHTML = 'Show Devices';
        }
    }

    return {
        getDevices: () => {
            return loadDevices();
        }
    }
})();

// UI Controller

const UICtrl = (() => {
    
    const getDevices = document.getElementById('show-device-btn');
    const dataFetch = document.getElementById('data-fetch');
    dataFetch.style.display = 'none';

    getDevices.addEventListener('click', DeviceCtrl.getDevices);

})();

// App Controller

const AppCtrl = ((DeviceCtrl, UICtrl) => {
    

    // Public methods
    return {
        init: function() {
            console.log('App initialized...');
            // const devices = DeviceCtrl.getDevices();
            // console.log(devices);
        }
    }


})(DeviceCtrl, UICtrl);

AppCtrl.init();

