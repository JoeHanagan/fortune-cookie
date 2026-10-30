//get jason file
const fortunes = require('./fortunes.json')

//declare random function
const getFortune = () => {
    const randIndex = Math.floor(Math.random() * fortunes.length);

    //return random index???
    return fortunes[randIndex]
}

module.exports = {
  getFortune
};