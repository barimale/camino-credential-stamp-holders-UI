import { store } from 'react-notifications-component';

function api(): string{
  return 'http://localhost:3005/api';
}

function search(query: string) {
  const timeout = 10000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

    return new Promise( async (resolve,reject) => {
      return await fetch(`${api()}/${query}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        signal: controller.signal
      })
        .then(parseJSON)
        .then((data: any) => {
          clearTimeout(id);
          return resolve(data);
        })
        .catch((error: any) => {
          store.addNotification({
            title: "Error",
            message: error.message,
            type: "danger",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: false
            }
          });
          
          return reject(error);
        });
    })
  
  }
  
  function create(type: string, data: any) {
    return new Promise(async (resolve, reject) => {
      return await fetch(`${api()}/${type}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
      })
      .then((result: any) => {
        if(result.status !== 200){
          store.addNotification({
            title: "Error: " + result.status,
            message: result.statusText,
            type: "danger",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: false
            }
          });

          return reject(result.statusText);
        }

        return parseJSON(result);
      })
      .then((result: any) => {
        return resolve(result);
       })
      .catch((error: any) => {
        store.addNotification({
          title: "Error",
          message: error.message,
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: false
          }
        });

        return reject(error);
      })
    })
  }

  function get(type: string): any {
    return new Promise(async (resolve, reject) => {
      return await fetch(`${api()}/${type}`, {
        headers: {
          'Accept': 'application/json'
        },
        method: 'get'
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
  
  const NetworkService = { search, create, get };
  export default NetworkService;