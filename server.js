const express = require('express')
const mongoose = require('mongoose');
const Item = require('./models/item');
require('dotenv').config()
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.t6ybobn.mongodb.net/Inventory?retryWrites=true&w=majority`
//console.log(process.env.MONGOPASSWORD);
mongoose.set('strictQuery', false);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
})

app.post('/add_item', async (req, res) => {
    const {priceNumber: price, invNumber: inventory, delivDateString: nextDelivery, delivAmtNumber: deliveryAmt, nameString: name} = req.body

    let newItem = await Item.create({
        price,
        inventory,
        nextDelivery,
        deliveryAmt,
        name
    })
    console.log(newItem);
    if (newItem) {
        console.log('upload complete');
    }
    res.send(newItem)
})

app.get('/view_collection', async (req, res) => {
    let response = await Item.find({});
    console.log(response);
    res.json(response)
})















app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})