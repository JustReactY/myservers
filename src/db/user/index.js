const mongoose = require('../db')
const Schema = mongoose.Schema;

// 创建的集合
const mySchema = new Schema({
  username: String,
  password: String,
});

const MyModel = mongoose.model('user', mySchema);


class Mongodb {
  constructor () {

  }
// 查询
  query (obj) {
     return new Promise((resolve, reject) => {
       MyModel.find(obj, (err, res) => {
         if(err) {
           reject(err)
         }
         resolve(res)
       })
     })
  }
// 保存
  save (obj) {
     const m = new MyModel(obj)
     return new Promise((resolve, reject)=> {
       m.save((err, res) => {
         if (err) {
           reject(err)
         }
         resolve(res)
         console.log(res)
       })
     })
     
  }
}
const MyDB = new Mongodb()
module.exports = MyDB