const Discord = require('discord.js');
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
      function RandomMinMax(min,max) {
        return Math.floor(Math.random() * (max+1 - min)) + min;
      }
    const pvpembed = new Discord.MessageEmbed();
    pvpembed.setColor(User.colortheme);
    if(User.TemdataNames==undefined) User.TemdataNames ="";
    var temdatanames = User.TemdataNames.split("<:>");
    if(!arg.includes("@")&!arg.includes("accept")){
    pvpembed.setTitle(":crossed_swords: PVP");
    pvpembed.setDescription("Baisc 1v1 fights\nNote: Users that haven't played Hunted House 3 yet uses fixed status."+
    "\nYou can use the same fighting commands used in Hunted House 3\n**Rules**");
    pvpembed.addField("**1**","`Do not spam`");
    pvpembed.addField("**2**","`Cannot Use items in pvp matches.`");
    pvpembed.addField("**3**","`be friendly and respectful.`");
    pvpembed.setFooter("To pvp command: -pvp <User's Tag>\nTo pvp with fixed status: -pvp a <User's Tag>"
    +"\nTo accept pvp match: -pvp accept\nTo accept pvp match with fixed status: -pvp accept a");message.channel.send( pvpembed );}
    else if(arg.includes("@")){
        var getid = getUserFromMention(arg);
        Account.findOne({
            id: getid
        },async(err,UserII)=>{
          if(err)console.log(err);
          if(!UserII)return message.channel.send(":x: Error: No user found.");
          if(UserII.multid==""){
            if(User.id == UserII.id) return message.channel.send(":x: You cannot fight yourself");
            if(UserII.TemdataNames==undefined) User.TemdataNames ="";
            var temdatanamesA = UserII.TemdataNames.split("<:>");
            temdatanamesA[12] = User.id;
            UserII.TemdataNames = temdatanamesA.join("<:>");
            UserII.save().catch(err => console.log(err));
          pvpembed.setDescription(":mailbox_with_mail: Request has been sent to "+UserII.name).setFooter("to accept: pvp accept");
        }
          else pvpembed.setDescription(":x: "+UserII.name+" is already in a Party/Pvp match");
          message.channel.send( pvpembed );
    });
  }
  else if(arg.includes("accept")&&temdatanames[12]){
    Account.findOne({
      id: temdatanames[12]
  },async(err,UserII)=>{
    if(err)console.log(err);
    if(!UserII)return message.channel.send(":x: Error: No user found.");
    Account.findOne({
      id: User.id
  },async(err,User)=>{
    if(err)console.log(err);
    if(!User)return message.channel.send(":x: Error: No user found.");
    if(User.TemdataNumbers==undefined)User.TemdataNumbers="";
    if(User.energy=undefined){
      if(User.Ary_HH3FunctionSet1==undefined){User.Ary_HH3FunctionSet1 =
        "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";}
      var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index]);
      };
      var profilenames = User.Ary_HH3ProfileNames.split("<:>");
      var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
      for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index]);};
        profilenames[1]= RandomMinMax("Temp Sword","Temp Wand","Temp Bow");
        if(profilenames[1].includes("Sword")){profiledata[3]=1;User.Ary_skills = "Force Attack<:>Slash<:>Charge<:>MegaSlash";
        User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>1<:>1<:>2<:>65<:>0<:>2<:>1<:>1<:>0.06<:>0<:>1<:>1<:>5<:>76<:>0";}
       else if(profilenames[1].includes("Wand")){profiledata[3]=2;User.Ary_skills = "Force Attack<:>Blast<:>Focus<:>FocusBlast";
       User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>1<:>2<:>1<:>68<:>0<:>2<:>2<:>1<:>0.06<:>0<:>1<:>2<:>5<:>80<:>0";
      }
        else {profiledata[3]=3;User.Ary_skills = "Force Attack<:>Fire<:>Swift<:>All Fire";
        User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>1<:>3<:>2<:>50<:>0<:>2<:>3<:>1<:>0.06<:>0<:>1<:>3<:>5<:>48<:>0";
      }
        profiledata[4]=12;
        profiledata[6]=100;
      hh3funset1[13]=3;
      User.Ary_HH3ProfileNames = profilenames.join("<:>");
      User.Ary_HH3ProfileData = profiledata.join("<:>");
      User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
    }
    var rawtemdatanumbers= User.TemdataNumbers.split("<:>");var temdatanumbers = [];
    for(var index=0; index<rawtemdatanumbers.length;index++){
      temdatanumbers[index]= Number(rawtemdatanumbers[index])};
    var temdatanamesA = UserII.TemdataNames.split("<:>");
    var rawtemdatanumbersA= UserII.TemdataNumbers.split("<:>");var temdatanumbersA = [];
for(var index=0; index<rawtemdatanumbersA.length;index++){
  temdatanumbersA[index]= Number(rawtemdatanumbersA[index]);};
  var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
for(var index=0; index<rawprofiledata.length;index++){
  profiledata[index]= Number(rawprofiledata[index]);};
  var rawprofiledataA = UserII.Ary_HH3ProfileData.split("<:>");var profiledataA = [];
for(var index=0; index<rawprofiledataA.length;index++){
  profiledataA[index]= Number(rawprofiledataA[index]);};
    User.multi=true;
    User.multid=temdatanames[12];
    User.multiname=UserII.name;
    temdatanames[12]="";
    UserII.multi=true;
    UserII.multid=User.id;
    UserII.multiname=User.name;
    User.CombatMode=3;
    UserII.CombatMode=3;
var Imgset = User.Ary_Imgset.split("<:>");
var ImgsetA = UserII.Ary_Imgset.split("<:>");
Imgset[1]=UserII.Profileimg;
ImgsetA[1]=User.Profileimg;
temdatanumbers[2]=profiledataA[4];
temdatanumbers[3]=profiledataA[5];
temdatanumbers[4]=profiledataA[8];
temdatanumbers[5]=profiledataA[9];
temdatanumbers[6]=profiledataA[12];
temdatanumbers[7]=profiledataA[18];
temdatanumbers[8]=profiledataA[13];
temdatanumbers[18]=0;
temdatanumbers[19]=0;
temdatanumbersA[2]=profiledata[4];
temdatanumbersA[3]=profiledata[5];
temdatanumbersA[4]=profiledata[8];
temdatanumbersA[5]=profiledata[9];
temdatanumbersA[6]=profiledata[12];
temdatanumbersA[7]=profiledata[18];
temdatanumbersA[8]=profiledata[13];
temdatanumbersA[18]=0;
temdatanumbersA[19]=0;
temdatanames[0]= UserII.name;
temdatanamesA[0]= User.name;
temdatanumbers[46]=1;
temdatanumbersA[46]=2;
var herospd=profiledata[12];
var herospdII=profiledataA[12];
var herospkey=0;
var herospkeyII=0;
for(var sp = 0; sp<6;sp++){
  if(Math.random()<herospd){
      if(sp>=5){
          herospkey+=3;
      }
      else{
          herospkey+=sp;
      }
  }
  if(Math.random()<herospdII){
      if(sp>=5){
          herospkeyII+=3;
      }
      else{
          herospkeyII+=sp;
      }
  }
}
if(herospkey==herospkeyII){
  var picked = RandomMinMax(1,2);
  if(picked==1){herospkey++}
 else if(picked==2){herospkeyII++};
}
var txt;
if(herospkey>herospkeyII){txt="`"+User.name+" moves first`"; temdatanumbersA[47]=temdatanumbers[46]; temdatanumbersA[13]=temdatanumbers[46];}
else { txt="`"+UserII.name+" moves first`";temdatanumbersA[47]=temdatanumbersA[46]; temdatanumbersA[13]=temdatanumbersA[46];}
temdatanumbers[47]=temdatanumbersA[47];
temdatanumbers[13]=temdatanumbersA[13];
User.TemdataNumbers = temdatanumbers.join("<:>");
UserII.TemdataNumbers = temdatanumbersA.join("<:>");
User.Ary_Imgset = Imgset.join("<:>");
UserII.Ary_Imgset = ImgsetA.join("<:>");
    User.TemdataNames = temdatanames.join("<:>");
    UserII.TemdataNames = temdatanamesA.join("<:>");
    User.save().catch(err => console.log(err));
    UserII.save().catch(err => console.log(err));
    message.channel.send( pvpembed.setDescription(":crossed_swords:"+User.name+":boom: vs :boom:"+UserII.name+":crossed_swords:\n"+txt) );
  });});
  }
  else return message.channel.send(pvpembed.setDescription(":mailbox_with_no_mail: No request was found").setFooter("to send a request command: -pvp <User's tag>"))
}
module.exports.key = {
    name: "pvp",
    description: "start a match."
}