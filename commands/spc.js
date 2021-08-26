const Discord = require('discord.js');
module.exports.run = async (message, arg, User,client) => {
if(User.id=="265733605077155851"){
    if(arg.includes("off")){
        client.destory();
    }
   else if(arg.includes("restart")){
        client.destory().then(client.login(process.env.token))
    }
}
}
module.exports.key = {
    name: "spc",
    description: "main spc controls."
}