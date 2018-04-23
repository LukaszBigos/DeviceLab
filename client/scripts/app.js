console.log('test');

const getDevices = document.getElementById('get-devices');
const dataFetch = document.getElementById('data-fetch');
dataFetch.style.display = 'none';

getDevices.addEventListener('click', loadDevices);

function loadDevices(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/devices', true);

    xhr.onload = () => {
        if(xhr.status == 200){
            const devices = JSON.parse(xhr.responseText);
            
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