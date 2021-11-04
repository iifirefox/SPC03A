const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {

    const dembed = new Discord.MessageEmbed();
    dembed.setColor("#fdffff");
    var temdatanames = User.TemdataNames.split("<:>");
    if(temdatanames[0].includes("no.")){
    var Imgset = User.Ary_Imgset.split("<:>");
    var img =Imgset[1];
    var name = temdatanames[0];
    Imgset[1]="";
    User.Ary_Imgset = Imgset.join("<:>");
    User.TemdataNames = "";
    User.TemdataNumbers = "";
    User.CombatMode=0;
    dembed.setAuthor(name+" has despawned",img);}
    else if(User.CombatMode!=0){dembed.setDescription(":x: can only despawn spawned monsters from `spawn` command.")}
    else if(User.CombatMode==0){dembed.setDescription(":x: You are not in combat.")}
    else if(!User.energy){dembed.setDescription(":x: User missing info to use this command.")};
         message.channel.send( dembed );
}
module.exports.key = {
    name: "despawn",
    description: "Despawns created monsters."
}