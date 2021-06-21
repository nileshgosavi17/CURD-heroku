const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abc:123@cluster0.5eabj.mongodb.net/test', { useNewUrlParser: true,useUnifiedTopology:true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');