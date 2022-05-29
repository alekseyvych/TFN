const baseAPI = '/api';

//Heroes (EJEMPLO)
const apiService = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/heroes`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(hero) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/hero`, {
        method: 'PUT',
        body: JSON.stringify(hero),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(hero) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/hero`, {
        method: 'POST',
        body: JSON.stringify(hero),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(hero) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/hero/${hero.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

//Clientes

getClient() {
  return new Promise((resolve, reject) => {
    fetch(`${baseAPI}/clients`)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => {
        reject(err);
      });
  });
},

createClient(client) {
  return new Promise((resolve, reject) => {
    fetch(`${baseAPI}/client`, {
      method: 'PUT',
      body: JSON.stringify(client),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(result => result.json())
      .then(json => resolve(json))
      .catch(err => {
        reject(err);
      });
  });
},

updateClient(client) {
  return new Promise((resolve, reject) => {
    fetch(`${baseAPI}/client`, {
      method: 'POST',
      body: JSON.stringify(client),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
},

destroyClient(client) {
  return new Promise((resolve, reject) => {
    fetch(`${baseAPI}/client/${client.id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => {
        reject(err);
      });
  });
}

};
export default apiService;
