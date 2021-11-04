const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {

    const dembed = new Discord.MessageEmbed();
    if(User.TemdataNames.includes("no.")){
    var Imgset = User.Ary_Imgset.split("<:>");
    var img =Imgset[1];
    Imgset[1]="";
    User.Ary_Imgset = Imgset.join("<:>");
    if(hh3funset1[16]>0){hh3funset1[16]=0;User.Ary_HH3FunctionSet1=hh3funset1.join("<:>");};
    User.TemdataNames = "";
    User.TemdataNumbers = "";
    User.CombatMode=0;
    dembed.setAuthor(":gear: has despawned",img);}
    else if(User.CombatMode!=0){dembed.setDescription(":x: can only despawn spawned monsters from `spawn` command.")}
    else if(!User.energy){dembed.setDescription(":x: User missing info to use this command.")};
         message.channel.send( dembed );
}
module.exports.key = {
    name: "despawn",
    description: "Despawns created monsters."
}