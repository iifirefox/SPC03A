const Discord = require('discord.js');
module.exports.run = async (message) => {
    function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    var dice = ["https://i.ibb.co/3vf4YR8/dice1.png", "https://i.ibb.co/FqHrJyR/dice2.png", "https://i.ibb.co/6F6Lcrs/dice3.png", "https://i.ibb.co/4S2Ty1Y/dice4.png", "https://i.ibb.co/HXJgtpj/dice5.png", "https://i.ibb.co/PMHD7MF/dice6.png"]
    message.channel.send(dice[RandomMax(dice.length)]);
}
module.exports.key = {
    name: "dice",
    description: "roll a random dice"
}