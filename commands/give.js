const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
const Account = require("../data/tree");
module.exports.run = async (message, arg, User) => {
    function getUserFromMention(mention) {
        if (!mention) return;
      if (mention.includes('<@') && mention.includes('>')) {
          mention = mention.slice(2, -1);
          if (mention.startsWith('!')) {
            mention = mention.slice(1);
          }
          return mention.replace("@","");
        }
      }
      function IgnoringCase(text, other) {
        return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
    }
    if(User.Ary_itembagnames)var itembagnames = User.Ary_itembagnames.split("<:>");
    else return message.channel.send(givembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    var equipnames = User.Ary_Equipmentnames.split("<:>");
    var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index]);
    }
    var rawequipmentdata = User.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
    for(var index=0; index<rawequipmentdata.length;index++){
        equipmentdata[index]= Number(rawequipmentdata[index]);
    }
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      };
    const givembed = new Discord.MessageEmbed();
    givembed.setColor(User.colortheme);
    var theuser = undefined;
    var rawstring=[];
    var rawstringI=[];
    var theitem =undefined;
    var amount = undefined
    if(arg.includes("<@")){rawstring= arg.split(/(?<=\>)/); 
    theitem= rawstring[1].trimStart(); 
    theuser = getUserFromMention(rawstring[0].trim());if(arg.includes(" x")){rawstringI = rawstring[1].split("x"); amount= Number(rawstringI[1].trim());
    theitem= rawstringI[0].trimStart().trimEnd();}}
   else if(hh3funset1[0]!=""){theitem=arg;theuser = hh3funset1[0];}
   Account.findOne({
    id: theuser
},async(err,UserII)=>{
  if(err)console.log(err);
  if(!UserII) return message.channel.send(givembed.setDescription(":x: Error: No User found."));
  if(User.id== UserII.id) return message.channel.send(givembed.setDescription(":x: Error: You cannot give your self."));
  if(!UserII.Ary_itembagnames) return message.channel.send(givembed.setDescription(":x: Error: This User hasn't started their game."));
  if(!UserII.Ary_Equipmentnames) return message.channel.send(givembed.setDescription(":x: Error: This User hasn't started their game."));
  if(equipnames.some(a=>IgnoringCase(a,theitem))){
    var equipnamesA = UserII.Ary_Equipmentnames.split("<:>");
    var rawequipmentdataA = UserII.Ary_Equipmentdata.split("<:>");var equipmentdataA = [];
    for(var index=0; index<rawequipmentdataA.length;index++){
        equipmentdataA[index]= Number(rawequipmentdataA[index]);}
        var check = 0;
        var filter= undefined;
        if(!equipnamesA.some(a=>a===""))return message.channel.send(givembed.setDescription(":x: User bag is full."));
        else check = equipnamesA.indexOf("");
      theitem = equipnames.find(a=>IgnoringCase(a,theitem));
      if(Gamedata.sys_sword_names.some(a=>a==theitem)) filter=Gamedata.sys_sword_names.indexOf(theitem);
      if(Gamedata.sys_wand_names.some(a=>a==theitem)) filter=Gamedata.sys_wand_names.indexOf(theitem);
      if(Gamedata.sys_bow_names.some(a=>a==theitem)) filter=Gamedata.sys_bow_names.indexOf(theitem);
      if(Gamedata.sys_armor_names.some(a=>a==theitem)) filter=Gamedata.sys_armor_names.indexOf(theitem);
      if(theitem.includes("Sword")&filter>3||theitem.includes("Armor")&filter>1||filter>2)
      return message.channel.send(givembed.setDescription(":x: Can only give equipment up to Battle type Weapons and Standard Armor."));
      var getnum = equipnames.indexOf(theitem);
      var table1 = 5 * getnum; var btable1 = 5*check;
      var table2 = table1+1; var btable2 = btable1+1;
      var table3 = table1+2; var btable3 = btable1+2;
      var table4 = table1+3; var btable4 = btable1+3;
      var table5 = table1+4; var btable5 = btable1+4;
      equipnamesA[check] = equipnames[getnum];
      equipmentdataA[btable1] = equipmentdata[table1];
      equipmentdataA[btable2] = equipmentdata[table2];
      equipmentdataA[btable3] = equipmentdata[table3];
      equipmentdataA[btable4] = equipmentdata[table4];
      equipmentdataA[btable5] = equipmentdata[table5];
      UserII.Ary_Equipmentnames = equipnamesA.join("<:>");
      UserII.Ary_Equipmentdata = equipmentdataA.join("<:>");
      UserII.save().catch(err => console.log(err));
      Account.findOne({
        id: User.id
    },async(err,User)=>{
      if(err)console.log(err);
    equipnames[getnum]="";
      equipmentdata[table1]=0;
      equipmentdata[table2]=0;
      equipmentdata[table3]=0;
      equipmentdata[table4]=0;
      equipmentdata[table5]=0;
      User.Ary_Equipmentnames = equipnames.join("<:>");
      User.Ary_Equipmentdata = equipmentdata.join("<:>");
      User.save().catch(err => console.log(err));})
      givembed.setDescription(":mailbox_with_mail: "+User.name+" gave "+UserII.name+" `"+theitem+"`!");
  }
  else if(itembagnames.some(a=>IgnoringCase(a,theitem))){
    theitem = itembagnames.find(a=>IgnoringCase(a,theitem));
    var getnum = itembagnames.indexOf(theitem);
    if(itembagdata[getnum]<2)return message.channel.send(givembed.setDescription(":x: You do not have enough "+theitem+".\n(You need more then 1 to give)"));
    if(amount==undefined||amount==NaN) amount=1;
    if(itembagdata[getnum]<amount||itembagdata[getnum]==amount) amount = itembagdata[getnum]-1;
    var itembagnamesA = UserII.Ary_itembagnames.split("<:>");
    var rawitembagdataA = UserII.Ary_itembagdata.split("<:>");var itembagdataA = [];
    for(var index=0; index<rawitembagdataA.length;index++){
        itembagdataA[index]= Number(rawitembagdataA[index]);
    }
    if(itembagnamesA[getnum]=="")itembagnamesA[getnum]=theitem;
    itembagdataA[getnum]+= amount;
    UserII.Ary_itembagnames = itembagnamesA.join("<:>");
    UserII.Ary_itembagdata = itembagdataA.join("<:>");
    UserII.save().catch(err => console.log(err));
    Account.findOne({
      id: User.id
  },async(err,User)=>{
    if(err)console.log(err);
    itembagdata[getnum]-=amount;
    User.Ary_itembagdata = itembagdata.join("<:>");
    User.save().catch(err => console.log(err));})
   if(amount<2) givembed.setDescription(":mailbox_with_mail: "+User.name+" gave "+UserII.name+" `"+theitem+"`!");
   else givembed.setDescription(":mailbox_with_mail: "+User.name+" gave "+UserII.name+" `"+theitem+"x"+amount+"`!");
  }
   else if(Gamedata.sys_item_names.some(a=>IgnoringCase(a,theitem))||Gamedata.sys_material_names.some(a=>IgnoringCase(a,theitem))||
  Gamedata.sys_sword_names.some(a=>IgnoringCase(a,theitem))||Gamedata.sys_wand_names.some(a=>IgnoringCase(a,theitem))||
  Gamedata.sys_bow_names.some(a=>IgnoringCase(a,theitem))||Gamedata.sys_armor_names.some(a=>IgnoringCase(a,theitem)))
  givembed.setDescription(":x: You do not own that item.");
  else givembed.setDescription(":x: this item does not exist.");
message.channel.send( givembed );
});
}
module.exports.key = {
    name: "give",
    description: "give someone a gift."
}