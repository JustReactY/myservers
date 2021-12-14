const mongoose = require('../db')
const Schema = mongoose.Schema;

// 创建的集合
const mySchema = new Schema({
  title: String,
  tag: String,
});

const MyModel = mongoose.model('item_card', mySchema);


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
  update(_id, up) {
    return new Promise((resolve, reject) => {
      MyModel.update({
        _id
      }, {
        $set: {age: 18}
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