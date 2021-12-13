const api = require('./src/utils/request');


function addUser() {
    api.post('/add_user', {
        username: 'yyy',
        password: '000000'
    }).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
}

function login() {
    api.post('/login', {
        username: 'yyy',
        password: '000000'
    }).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
}


// addUser()
login()