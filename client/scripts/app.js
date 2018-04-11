console.log('test');

document.getElementById('get-devices').addEventListener('click', loadDevices);

function loadDevices(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/devices', true);

    xhr.onload = () => {
        if(xhr.status == 200){
            const devices = JSON.parse(xhr.responseText);
            
            let output = '';
            for(let i in devices){
                output += `
                <tr grid-area: name>
                <td>
                ${devices[i].name}
                </td>
                </tr>`;
            }
            document.getElementById('data-fetch').innerHTML = output;
        }
    }

    xhr.send();
}