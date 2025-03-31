const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('FGC');

const userCollection = db.collection('user');
const guessCollection = db.collection('guesses');
const scoreCollection = db.collection('score');

(async function testConnection() {
    try {
        await db.command({ ping: 1});
        console.log(`Connected to Database`);
    }
    catch (ex) {
        console.log(`Unable to connect to Database with ${url} because ${ex.message}`);
        process.exit(1);
    }
})();

function getUser(name) {
    return userCollection.findOne({ name: name });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    await userCollection.updateOne({ name: user.name }, { $set: user });
}

async function saveGuess(guess) {
    console.log("Inside the actual DB setting");
    if(await guessCollection.findOne({ name: guess.name }))
    {
        await guessCollection.updateOne({ name: guess.name }, {$set: guess });
    }
    else
    {
        await guessCollection.insertOne(guess);
    }   
}

async function addScore(score) {
    await scoreCollection.insertOne(score);
}

async function updateScore(score) {
    await scoreCollection.updateOne({ name: score.name}, { $set: score });
}

function getTopScores() {
    const query = { score: { $lt: 100 } };
    const options = {
        sort: { score: -1 },
        limit: 10,
    };
    const point = scoreCollection.find(query, options);
    return point.toArray();
}


module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    saveGuess,
    addScore,
    updateScore,
    getTopScores,
};