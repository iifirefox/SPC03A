const Discord = require('discord.js');
const Account = require("../data/tree");
module.exports.run = async (message, arg, User) => {
    const disbandembed = new Discord.MessageEmbed();
    disbandembed.setColor(User.colortheme);
    if(User.Ary_HH3FunctionSet1){
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index]);
      };}
      else return message.channel.send(disbandembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
      if(User.multid!=""){
    Account.findOne({
        id: User.multid
    },async(err,UserII)=>{
      if(err)console.log(err);
      if(!UserII&User.multid!="") User.multid="";
      if(!UserII) return message.channel.send(disbandembed.setDescription(":x: Error: No User found."));
      else if(UserII.Ary_HH3FunctionSet1){var rawhh3funset1A = UserII.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1A = [];for(var index=0; index<rawhh3funset1A.length;index++){
          hh3funset1A[index]= Number(rawhh3funset1A[index]);
      }; hh3funset1A[11]=0;UserII.Ary_HH3FunctionSet1 = hh3funset1A.join("<:>");
     UserII.multi=false; UserII.multid="";UserII.multiname="";
       UserII.save().catch(err => console.log(err));}});
       User.multi=false; User.multid=""; User.multiname="";
    hh3funset1[11]=0;User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
    message.channel.send( disbandembed.setDescription(":boom: Party has disbanded") );}
    else message.channel.send(disbandembed.setDescription(":x: Error: No User found."))
}
module.exports.key = {
    name: "disband",
    description: "disband a party."
}