const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
    var hh3funset1 = [];
    for(var index=0; index<rawhh3funset1.length;index++){
        hh3funset1[index]= Number(rawhh3funset1[index])
    }
    const rembed = new Discord.MessageEmbed();
    rembed.setColor(User.colortheme);
    if(hh3funset1[10]==1&User.Fightagain>0){
    rembed.setDescription("You stood up again ready to fight again!\n:hearts: recovered half your HP");
    User.energy -20;
    if(User.energy<0)
    {User.energy=0;}
    User.HP = User.MaxHP/2;
    User.CombatMode=1;
    User.Fightagain=0;
    hh3funset1[10]=0;
    User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
}
    else{
        rembed.setDescription(":x: You cannot use this command.")
    }
         message.channel.send( rembed );
}
module.exports.key = {
    name: "again",
    description: "Stand and fight again."
}