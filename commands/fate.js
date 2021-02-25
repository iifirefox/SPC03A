const Discord = require('discord.js');
module.exports.run = async (message, arg) => {
    function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    var choice = arg.split('&')
    const newemmbed = new Discord.MessageEmbed();
    newemmbed.setColor("#FF09EC")
    newemmbed.setDescription(":8ball: The Ball of Fate says " + choice[RandomMax(choice.length)]);
    message.channel.send(newemmbed);
}
module.exports.key = {
    name: "fate",
    description: "What fate has chosen for you?."
}