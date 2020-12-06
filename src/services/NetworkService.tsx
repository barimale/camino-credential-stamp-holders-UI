
function search(query: string) {
    return new Promise( async (resolve,reject) => {
      return await fetch(`api/${query}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      })
        .then(parseJSON)
        .then((data: any) => {
            return resolve(data);
        })
        .catch((error: any) => {
            return reject(error);
        });
    })
  
  }
  
  function create(type: string, data: any) {
    return new Promise(async (resolve, reject) => {
      return await fetch(`api/${type}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
      })
      .then((result: any) => {
          return parseJSON(result);
      })
      .then((result: any) => {
          return resolve(result);
       })
      .catch((error: any) => {
          return reject(error);
      })
    })
  
  }
  
  function parseJSON(response: any) {
    return response.json();
  }
  
  const NetworkService = { search, create };
  export default NetworkService;