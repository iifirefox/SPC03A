const Discord = require('discord.js');
module.exports.run = async (message, arg, User,client) => {
if(User.id=="265733605077155851"){
    if(arg.includes("off")){
        message.channel.send("Good Night").then(client.destroy());
    }
   else if(arg.includes("restart")){
       message.channel.send(":gear: *restarting...*").then((message)=>{
        client.destroy().then(client.login(process.env.tokena)).then(message.edit(":gear: restarted back for more"))});
    }
}
else message.channel.send(":x: Only my Developer can use this command")
}
module.exports.key = {
    name: "spc",
    description: "main spc controls."
}