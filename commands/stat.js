const Discord = require('discord.js');
const Account = require("../data/tree");
const {createCanvas, loadImage} = require('canvas');
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
  var theuser = User;
  var ismension =getUserFromMention(arg);
  Account.findOne({
    id: ismension
},async(err,User)=>{
  if(err)console.log(err);
        if(!User)User=theuser;

    const newemmbed = new Discord.MessageEmbed();
    var profilenames = User.Ary_HH3ProfileNames.split("<:>");
    var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index])
    }
    if(User.HP<User.MaxHP&Date.now()>User.hpcooldown){
        var times =Date.now();
        times =times-=User.hpcooldown;
        times = times/360000;
        times = Math.round(times);
        if(times>User.MaxHP) times = User.MaxHP;
       else if(times==0)times++;
        User.HP+=times;
        if(User.HP>User.MaxHP) User.HP=User.MaxHP;
        User.hpcooldown = Date.now()+360000;
    }
    if(User.energy!=undefined&&User.energy<User.Maxenergy&Date.now()>User.energycooldown){
        var times =Date.now();
        times =times-=User.energycooldown;
        times = times/3600000;
        times = Math.round(times);
        if(times>User.Maxenergy) times = User.Maxenergy;
       else if(times==0)times+=10;
       else{times=times*10}
        User.energy+=times;
        if(User.energy>User.Maxenergy) User.energy=User.Maxenergy;
        User.energycooldown = Date.now()+3600000;
    }
    var hpvar =Date.now();
    var energyvar =Date.now()+3600000;
    if(User.HP<User.MaxHP)hpvar=User.hpcooldown;
    if(User.energy<User.Maxenergy)energyvar=User.energycooldown;
    var now = new Date(Date.now()).getTime();
      var refresh = new Date(hpvar).getTime();
      var refreshB = new Date(energyvar).getTime();
      var between = refresh-=now;
      var betweenB = refreshB-=now;
  var minutes = Math.floor((between% (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((between% (1000 * 60)) / 1000);
  var minutesB = Math.floor((betweenB% (1000 * 60 * 60)) / (1000 * 60));
  var secondsB = Math.floor((betweenB% (1000 * 60)) / 1000);
  if(minutes<0)minutes=0;
  if(seconds<0)seconds=0;
  if(minutesB<0)minutes=0;
  if(secondsB<0)seconds=0;
  if(User.HP>User.MaxHP)User.HP=User.MaxHP;
  if(User.HP<0)User.HP=0;
  if(User.energy){
  if(User.energy>User.Maxenergy)User.energy=User.Maxenergy;
  if(User.energy<0)User.energy=0;}
  const canvas = createCanvas(800,500);
  const ctx = canvas.getContext("2d");
  const background = await loadImage("https://i.ibb.co/Q824TCw/profilebackground.jpg");
  ctx.drawImage(background,0,0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(150,150,120,0,Math.PI*2,true);
  ctx.lineWidth = 10;
  ctx.strokeStyle = User.colortheme;
  ctx.stroke();
  ctx.font="50px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("Name: "+User.name,300,90);
  ctx.font="30px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("Lv: "+User.level,330,135);
  if(User.energy!=undefined){
    ctx.font="30px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Skill Energy",60,400);
    ctx.font="30px Sans";
    ctx.fillStyle="#000000";
    ctx.fillText(User.Skillenergy+" / "+User.Maxskillenergy,100,435);
    ctx.font="23px Arial";
    ctx.fillStyle="#000000";
    var disp = Math.round(profiledata[12]*100);
    ctx.fillText("Speed: "+disp+"%",60,465);
  ctx.font="23px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("Energy Recovery",450,205);
  ctx.font="23px Sans";
  ctx.fillStyle="#000000";
  ctx.fillText(minutesB+"Min "+secondsB+"Sec",480,230);}
  ctx.lineWidth = 1;
  ctx.strokeStyle="#FFFFFF";
  ctx.globalAlpha=0.8;
  ctx.fillStyle = "#003332";
  ctx.fillRect(425, 110 , 250, 30);
  ctx.fill();
  ctx.globalAlpha=1;
  ctx.strokeRect(425, 110 , 250, 30);
  ctx.stroke();
  ctx.fillStyle = "#6BFFFE";
  ctx.globalAlpha = 0.6;
  var oldlv = User.level-1;
  var oldlvexpmax =Math.pow(2,3)*oldlv+60*oldlv;
  var maxexp = Math.pow(2,3)*User.level+60*User.level+oldlvexpmax+User.level*2;
  var current = User.exp/maxexp;
  current = Math.round(current*100);
  if(current>100)current=100;
  if(current<0)current=0;
  ctx.fillRect(425, 110 , current*2.5, 30);
  ctx.fill();
  ctx.globalAlpha=1;
  ctx.font="18px Arial";
  ctx.fillStyle="#ffffff";
  ctx.fillText("EXP",440,131);
  ctx.font="20px Sans";
  ctx.fillStyle="#ffffff";
  ctx.textAlign ="center"
  ctx.fillText(User.exp+" / "+maxexp,550,130);
  if(User.energy!=undefined){
  ctx.lineWidth = 1;
  ctx.strokeStyle="#FFFFFF";
  ctx.globalAlpha=0.8;
  ctx.fillStyle = "#775300";
  ctx.fillRect(425, 150 , 250, 30);
  ctx.fill();
  ctx.globalAlpha=1;
  ctx.strokeRect(425, 150 , 250, 30);
  ctx.stroke();
  ctx.fillStyle = "#FFB100";
  ctx.globalAlpha = 0.6;
  var current = User.energy/User.Maxenergy;
  current = Math.round(current*100);
  if(current>100)current=100;
  if(current<0)current=0;
  ctx.fillRect(425, 150 , current*2.5, 30);
  ctx.fill();
  ctx.globalAlpha=1;
  ctx.font="18px Arial";
  ctx.fillStyle="#ffffff";
  ctx.fillText("Energy",465,170);
  ctx.font="20px Sans";
  ctx.fillStyle="#ffffff";
  ctx.textAlign ="center"
  ctx.fillText(User.energy+" / "+User.Maxenergy,550,172);}
  ctx.lineWidth = 1;
  ctx.strokeStyle="#FFFFFF";
  ctx.globalAlpha=0.8;
  ctx.fillStyle = "#4A1604";
  ctx.fillRect(30,283 , 250, 30);
  ctx.fill();
  ctx.globalAlpha=1;
  ctx.strokeRect(30,283 , 250, 30);
  ctx.stroke();
  ctx.fillStyle = "#EF4910";
  ctx.globalAlpha = 0.6;
  var current = User.HP/User.MaxHP;
  current = Math.round(current*100);
  if(current>100)current=100;
  if(current<0)current=0;
  ctx.fillRect(30,283, current*2.5, 30);
  ctx.fill();
  ctx.globalAlpha=1;
  ctx.font="18px Sans";
  ctx.fillStyle="#ffffff";
  ctx.fillText("HP",55,303);
  ctx.font="20px Sans";
  ctx.fillStyle="#ffffff";
  ctx.textAlign ="center"
  ctx.fillText(User.HP+" / "+User.MaxHP,150,305)
  ctx.font="23px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("HP Recovery",155,340);
  ctx.font="23px Sans";
  ctx.fillStyle="#000000";
  ctx.fillText(minutes+"Min "+seconds+"Sec",155,360);
  ctx.font="30px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("Weapon",400,300);
  ctx.font="30px Arial";
  ctx.fillStyle="#000000";
  var weaponname = "None"
  if(profilenames[1]!="")weaponname=profilenames[1]
  ctx.fillText(weaponname,395,335);
  if(profilenames[1]!=""){
    ctx.font="30px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Atk: "+profiledata[4],395,370);
    ctx.font="30px Arial";
    ctx.fillStyle="#000000";
    var display = Math.round(profiledata[5]*100);
    ctx.fillText("AddAtk: "+display+"%",395,400);
    ctx.font="30px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Durability: "+profiledata[6].toFixed()+"%",395,430);
  }
  ctx.fillText("Armor",630,300);
  ctx.font="30px Arial";
  ctx.fillStyle="#000000";
  var armorname = "None"
  if(profilenames[2]!="")armorname=profilenames[2];
  ctx.fillText(armorname,630,335);
  if(profilenames[2]!=""){
    ctx.font="30px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Def: "+profiledata[8],630,370);
    ctx.font="30px Arial";
    ctx.fillStyle="#000000";
    var display = Math.round(profiledata[9]*100);
    ctx.fillText("AddDef: "+display+"%",630,400);
    ctx.font="30px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Durability: "+profiledata[10].toFixed()+"%",640,430);
  }
  ctx.closePath;
  ctx.clip();
  const avatar = await loadImage(User.Profileimg);
  ctx.drawImage(avatar, 25,25,250,250);
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
    newemmbed.attachFiles(attachment);
    newemmbed.setImage("attachment://png.png");
    newemmbed.setColor(User.colortheme);
    message.channel.send(newemmbed);
    profiledata[15]=0;
    User.Ary_HH3ProfileData = profiledata.join("<:>");
    User.save().catch(err => console.log(err));
  })
}
module.exports.key = {
    name: "stat",
    description: "tell me your name."
}