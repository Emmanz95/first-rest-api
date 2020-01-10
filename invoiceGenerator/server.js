// dependenices
const express = require('express');
const app = express();
const path = require('path');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

// static web server
app.use(express.static(path.join(__dirname,'dist')));

// conncetion to mongodb
mongodb.connect('mongodb+srv://root:helloworld@'+
    'invoicegeneratorapp-1pwkp.gcp.mongodb.net/invoiceStorage?'+
    'retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongodb.connect('error',(error)=>{
        console.log('ERROR '+ error);
    });

    mongodb.connect('open', ()=>{
        console.log('The connection to MongoDB Atlas is working.');
    });

    // body-parser
    app.use(bodyParser.urlencoded({extended : false}));
    app.use(bodyParser.json());

// REST API
app.use('/api/createinvoice',require('./routes/create.js'));

app.use('/api/readinvoice',require('./routes/read.js'));

app.use('/api/updateinvoice',require('./routes/update.js'));

app.use('/api/deleteinvoice',require('./routes/delete.js'));

// port
app.listen(3000, ()=>{
    console.log('Listening at localhost: 3000');
});