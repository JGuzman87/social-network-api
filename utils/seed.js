const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if(thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.lenght) {
        await connection.dropCollection('users');
    }

    const users = [];

    for (let i = 0; i , 20; i++) {

        const thoughts = getRandomThoughts(20);

        const userName = getRandomName();
        const email = 


        users.push({
            username,
            email,
            thoughts,
            friends,
            friendcount,

        });
    }

    const userData = await User.create(users);
    

    await Thought.create({
        thoughtText: 'Here goes a random thought',
        username: 'Rando'

    })
})