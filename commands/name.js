const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {

    const newemmbed = new Discord.MessageEmbed();
    newemmbed.setDescription("Welcome Back embeder ::): ");
         message.channel.send( newemmbed );
}
module.exports.key = {
    name: "name",
    description: "tell me your name."
}