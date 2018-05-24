class CustomHTTP {
    
    //make http GET Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    
    //make http POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;

    }

    //make http PUT request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const resData = await response.json();
        return resData;
    }

    //make http delete request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        const resData = await 'Resource Deleted...';
        return resData;        
    }
}