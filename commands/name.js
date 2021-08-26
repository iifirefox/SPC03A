const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {

    const newemmbed = new Discord.MessageEmbed();
   var newemmbedtxt ="Welcome Back embeder ::): "+arg;
   exports.newemmbedtxt = newemmbedtxt;
   var rpath = require.resolve("../data/skills/none.js");delete require.cache[rpath];
   var  none = require("../data/skills/none.js");
   if(none.newemmbedtxt) newemmbedtxt = none.newemmbedtxt;
         message.channel.send( newemmbed.setDescription(newemmbedtxt) );
}
module.exports.key = {
    name: "name",
    description: "tell me your name."
}