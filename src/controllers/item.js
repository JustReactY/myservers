const ModelDb = require('../db/item_card')

const add_item = async (ctx) => {
    const { title, tag } = ctx.request.body
    let data = await ModelDb.save({
        title,
        tag
    })
    ctx.body = {
        code: 0,
        data
    }
}

module.exports = {
    'POST /add_item': add_item,
}