function fetchS(url, tokens){
    
    return fetch(url, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokens}
    }).then(data => data.json())
}

export default fetchS