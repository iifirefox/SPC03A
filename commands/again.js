const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {
    if(User.Ary_HH3FunctionSet1)var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
    else return message.channel.send(unequipembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    var hh3funset1 = [];
    for(var index=0; index<rawhh3funset1.length;index++){
        hh3funset1[index]= Number(rawhh3funset1[index])
    }
    const rembed = new Discord.MessageEmbed();
    rembed.setColor(User.colortheme);
    if(hh3funset1[10]==1&User.Fightagain>0){
    rembed.setDescription("You got rise ready to fight again!\n:hearts: recovered half your HP");
    User.energy -20;
    if(User.energy<0)User.energy=0;
    User.HP = Math.round(User.MaxHP/2);
    User.CombatMode=1;
    User.Fightagain=0;
    hh3funset1[10]=0;
    if(hh3funset1[11]==2){
        var rawtemdatanumbers= User.TemdataNumbers.split("<:>");
      var temdatanumbers = [];
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index])
      }
      var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index]);
    }
    User.CombatMode=2;
    if(profiledata[19]==1) temdatanumbers[57]=0;
    else if(profiledata[19]==2) temdatanumbers[58]=0;
        hh3funset1[15]=0;
        User.TemdataNumbers = temdatanumbers.join("<:>");
    }
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