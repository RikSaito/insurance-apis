const csvFilePath = '../productdata/a.csv';
const csv = require('csvtojson');
const express = require('express');
const app = express();

app.get('/quote/:age/:gender/:paymentmethod', (req, res) =>{

    const asyncFunction = async () => {
        const jsonArray = await csv().fromFile(csvFilePath);
        res.json((jsonArray.find(function(element){
            return(
                element.age == req.params.age &&
                element.gender == req.params.gender &&
                element.paymentmethod == req.params.paymentmethod
                );
        })))    
    }

    asyncFunction();

})

app.listen(3000, () => console.log('Listening on port 3000'));
