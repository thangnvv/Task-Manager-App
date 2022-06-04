const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
}, (error) => {
    if (error)
        return console.log('Unable to connect tasks-manager: ', error)
})

module.exports = mongoose


