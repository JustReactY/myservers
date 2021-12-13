const api = require('./src/utils/request');

// api.get('/hello/12').then(res => {
//     console.log(res.data)
// }).catch(err => {
//     console.log('err')
// })

/* api.post('/signin', {
    name: 'koa',
    password: '12345'
}).then(res => {
    console.log(res.data)
}).catch(err => {
    console.log('err')
}) */

api.get('/?aaa=1').then(res => {
    console.log(res.data)
}).catch(err => {
    console.log('err')
})