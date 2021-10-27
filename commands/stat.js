const Discord = require('discord.js');
const Account = require("../data/tree");
const Gamedata = require('../data/hh3data.json');
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
    if(User.HP<User.MaxHP&Date.now()>User.hpcooldown&User.CombatMode==0){
        var times =Date.now();
        times =times-=User.hpcooldown;
        times = times/360000;
        times = Math.round(times);
        if(times>User.MaxHP) times = User.MaxHP;
       else if(times==0)times++;
        User.HP+=times;
        if(User.HP>User.MaxHP) User.HP=User.MaxHP;
        if(times>0)User.hpcooldown = Date.now()+360000;
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
  const background2 = await loadImage("https://i.ibb.co/W0Fw5sv/wallpaperhw.jpg");
  ctx.drawImage(background,0,0, canvas.width, canvas.height);
  ctx.globalAlpha = 0.2
  ctx.drawImage(background2,0,0, canvas.width, canvas.height);
  ctx.globalAlpha=1;
  ctx.beginPath();
  ctx.fillStyle="#ffffff"
  ctx.fillRect(220, 170 , 50, 30);
  ctx.fill();
  ctx.closePath();
  var sy= 135;
  var sx= 235;
  var x =420;
  var y = sy+35;
  var curve = sy+17.5;
  ctx.beginPath()
  ctx.globalAlpha=1;
  ctx.lineWidth = 2;
  ctx.moveTo(sx, sy);
  ctx.lineTo(x, sy);
  ctx.quadraticCurveTo (   x+20 ,  sy ,  x+20 ,  curve ) ;  
  ctx.quadraticCurveTo (  x+20 ,  y ,   x ,  y ) ;
  ctx.lineTo(sx, y);
  ctx.lineTo(sx, sy);
  ctx.fillStyle = "rgba(154, 0, 0, 0.5)";
  ctx.fill();
  var sy= 170;
  var sx= 260;
  var y = sy+30;
  var curve = sy+17.5;
  ctx.closePath();
  ctx.beginPath();
  ctx.globalAlpha=1;
  ctx.lineWidth = 2;
  ctx.moveTo(sx, sy);
  ctx.lineTo(x, sy);
  ctx.quadraticCurveTo (   x+20 ,  sy ,  x+20 ,  curve ) ;  
  ctx.quadraticCurveTo (  x+20 ,  y ,   x ,  y ) ;
  ctx.lineTo(sx, y);
  ctx.lineTo(sx, sy);
  ctx.fillStyle = "rgba(0, 162, 163, 0.5)";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.globalAlpha=1;
  var sy= 135;
  var sx= 230;
  var y = sy+35;
  var curve = sy+17.5;
  var current = User.HP/User.MaxHP;
  current = Math.round(current*100);
  var r = 20;
  if(current>100)current=100;
  if(current<=0){current=0;r=0}
  var x =Math.round(sx+current*(190/100));
  ctx.fillStyle = "#EF4910";
  ctx.lineWidth = 2;
  ctx.moveTo(sx, sy);
  ctx.lineTo(x, sy);
  ctx.quadraticCurveTo (   x+r ,  sy ,  x+r ,  curve ) ;  
  ctx.quadraticCurveTo (  x+r ,  y ,   x ,  y ) ;
  ctx.lineTo(sx, y);
  ctx.lineTo(sx, sy);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.globalAlpha=1;
  var oldlv = User.level-1;
  var oldlvexpmax =Math.pow(2,3)*oldlv+60*oldlv;
  var maxexp = Math.pow(2,3)*User.level+60*User.level+oldlvexpmax+User.level*2;
  var current = User.exp/maxexp;
  current = Math.round(current*100);
  var sy= 170;
  var sx= 260;
  var y = sy+30;
  var curve = sy+17.5;
  var r = 20;
  if(current>100)current=100;
  if(current<=0){current=0;r=0}
  var x =Math.round(260+current*(160/100));
  ctx.fillStyle = "#6BFFFE";
  ctx.lineWidth = 2;
  ctx.moveTo(sx, sy);
  ctx.lineTo(x, sy);
  ctx.quadraticCurveTo (   x+r ,  sy ,  x+r ,  curve ) ;  
  ctx.quadraticCurveTo (  x+r ,  y ,   x ,  y ) ;
  ctx.lineTo(sx, y);
  ctx.lineTo(sx, sy);
  ctx.fill();
  ctx.closePath();
  if(User.energy!=undefined){
  ctx.beginPath();
  ctx.globalAlpha=1;
  var sy= 320;
  var sx= 500;
  var y = 360;
  var x =670;
  var curve = sy+17.5;
  var r = 20;
  ctx.lineWidth = 2;
  ctx.fillStyle = "rgba(194, 176, 0, 0.5)";
  ctx.moveTo(sx, sy);
  ctx.lineTo(x, sy);
  ctx.quadraticCurveTo (   x+r ,  sy ,  x+r ,  curve ) ;  
  ctx.quadraticCurveTo (  x+r ,  y ,   x ,  y ) ;
  ctx.lineTo(sx, y);
  ctx.quadraticCurveTo(sx-r,y,sx-r,curve)
  ctx.quadraticCurveTo(sx-r,sy,sx,sy)
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.globalAlpha=1;
  var sy= 320;
  var sx= 500;
  var y = 360;
  var curve = sy+17.5;
  var current = User.energy/User.Maxenergy;
  current = Math.round(current*100);
  var r = 20;
  if(current>100)current=100;
  if(current<=0){current=0;r=0}
  var x =Math.round(sx+current*(170/100));
  ctx.lineWidth = 2;
  ctx.fillStyle = "#FFB100";
  ctx.moveTo(sx, sy);
  ctx.lineTo(x, sy);
  ctx.quadraticCurveTo (   x+r ,  sy ,  x+r ,  curve ) ;  
  ctx.quadraticCurveTo (  x+r ,  y ,   x ,  y ) ;
  ctx.lineTo(sx, y);
  ctx.quadraticCurveTo(sx-r,y,sx-r,curve)
  ctx.quadraticCurveTo(sx-r,sy,sx,sy)
  ctx.fill();
  ctx.closePath();}
  ctx.beginPath();
  ctx.globalAlpha=1;
  var sy= 425;
  var sx= 500;
  var y = 460;
  var x =670;
  var curve = sy+17.5;
  var r = 20;
  ctx.lineWidth = 2;
  ctx.fillStyle = "rgba(129, 80, 0, 0.5)";
  ctx.moveTo(sx, sy);
  ctx.lineTo(x, sy);
  ctx.quadraticCurveTo (   x+r ,  sy ,  x+r ,  curve ) ;  
  ctx.quadraticCurveTo (  x+r ,  y ,   x ,  y ) ;
  ctx.lineTo(sx, y);
  ctx.quadraticCurveTo(sx-r,y,sx-r,curve)
  ctx.quadraticCurveTo(sx-r,sy,sx,sy)
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.globalAlpha=1;
  var sy= 425;
  var sx= 500;
  var y = 460;
  var curve = sy+17.5;
  var current = User.Skillenergy/User.Maxskillenergy;
  current = Math.round(current*100);
  var r = 20;
  if(current>100)current=100;
  if(current<=0){current=0;r=0}
  var x =Math.round(sx+current*(170/100));
  ctx.lineWidth = 2;
  ctx.fillStyle = "#FF7F00";
  ctx.moveTo(sx, sy);
  ctx.lineTo(x, sy);
  ctx.quadraticCurveTo (   x+r ,  sy ,  x+r ,  curve ) ;  
  ctx.quadraticCurveTo (  x+r ,  y ,   x ,  y ) ;
  ctx.lineTo(sx, y);
  ctx.quadraticCurveTo(sx-r,y,sx-r,curve)
  ctx.quadraticCurveTo(sx-r,sy,sx,sy)
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.globalAlpha=1;
  ctx.font="30px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText(User.name,240,125);
  ctx.font="13px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("Lv "+User.level,226,191);
  ctx.font="20px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("Skill Energy",490,450);
  ctx.font="20px Sans";
  ctx.fillStyle="#000000";
  ctx.fillText(User.Skillenergy+" / "+User.Maxskillenergy,620,450);
  if(User.energy!=undefined){
    ctx.font="23px Arial";
    ctx.fillStyle="#000000";
    var disp = Math.round(profiledata[12]*100);
    ctx.fillText("Speed: "+disp+"%",75,460);
  ctx.font="18px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("Energy Recovery",500,380);
  ctx.font="18px Sans";
  ctx.fillStyle="#000000";
  ctx.fillText(minutesB+"Min "+secondsB+"Sec",500,410);}
  ctx.globalAlpha=1;
  ctx.font="15px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("EXP",270,190);
  ctx.font="12px Sans";
  ctx.fillStyle="#000000";
  ctx.textAlign ="center"
  ctx.fillText(User.exp+" / "+maxexp,370,190);
  if(User.energy!=undefined){
  ctx.globalAlpha=1;
  ctx.font="18px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("Energy",520,345);
  ctx.font="20px Sans";
  ctx.fillStyle="#000000";
  ctx.textAlign ="center"
  ctx.fillText(Math.round(User.energy)+" / "+User.Maxenergy,605,346);}
  ctx.globalAlpha=1;
  ctx.font="18px Sans";
  ctx.fillStyle="#000000";
  ctx.fillText("HP",253,157);
  ctx.font="20px Sans";
  ctx.fillStyle="#000000";
  ctx.textAlign ="center"
  ctx.fillText(User.HP+" / "+User.MaxHP,350,157)
  ctx.font="23px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText("HP Recovery",515,155);
  ctx.font="23px Sans";
  ctx.fillStyle="#000000";
  ctx.fillText(minutes+"Min "+seconds+"Sec",500,180);
  ctx.font="30px Arial";
  ctx.fillStyle="#000000";
  ctx.font="25px Arial";
  ctx.fillStyle="#656565";
  var weaponname = "Bare Hands"
  if(profilenames[1]!=""){weaponname=profilenames[1];ctx.fillStyle="#000000";}
  ctx.fillText(weaponname,140,335);
  if(profilenames[1]!=""){
    ctx.font="20px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Atk: "+(profiledata[4]+profiledata[16]),110,370);
    ctx.font="20px Arial";
    ctx.fillStyle="#000000";
    var display = Math.round(profiledata[5]*100);
    ctx.fillText("Atk%: "+display+"%",130,400);
    ctx.font="20px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Durability: "+profiledata[6].toFixed()+"%",142,430);
  }
  else{
    ctx.font="20px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Atk: "+(Gamedata.sys_hero_hand+profiledata[16]),145,370);
  }
  ctx.font="25px Arial";
  ctx.fillStyle="#656565";
  var armorname = "No Armor"
  if(profilenames[2]!=""){armorname=profilenames[2];ctx.fillStyle="#000000";}
  ctx.fillText(armorname,360,335);
  if(profilenames[2]!=""){
    ctx.font="20px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Def: "+profiledata[8],345,370);
    ctx.font="20px Arial";
    ctx.fillStyle="#000000";
    var display = Math.round(profiledata[9]*100);
    ctx.fillText("Def%: "+display+"%",360,400);
    ctx.font="20px Arial";
    ctx.fillStyle="#000000";
    ctx.fillText("Durability: "+profiledata[10].toFixed()+"%",370,430);
  }
ctx.closePath();
  ctx.beginPath();
  ctx.arc(150,150,80,0,Math.PI*2,true);
  ctx.lineWidth = 4;
  ctx.strokeStyle = User.colortheme;
  ctx.stroke();
  ctx.closePath();
  if(User.multi==true){
    Account.findOne({
      id: User.multid
  },async(err,UserII)=>{
    if(err)console.log(err);
  ctx.beginPath();
  ctx.globalAlpha=1;
  ctx.font="20px Arial";
  ctx.fillStyle="#000000";
  ctx.fillText(User.multname,100,100)
  ctx.fillStyle = "#EF4910";
  ctx.globalAlpha = 0.6;
  var current = UserII.HP/UserII.MaxHP;
  current = Math.round(current*100);
  ctx.fillRect(150,190, current*2.5, 30);
  ctx.fill();
  ctx.closePath();});}
  ctx.clip();
  const avatar = await loadImage(User.Profileimg);
  ctx.drawImage(avatar, 70,68,165,165);
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
    newemmbed.attachFiles(attachment);
    newemmbed.setImage("attachment://png.png");
    newemmbed.setColor(User.colortheme);
    message.channel.send(newemmbed);
    profiledata[15]=0;
    User.Ary_HH3ProfileData = profiledata.join("<:>");
  })
}
module.exports.key = {
    name: "stat",
    description: "tell me your name."
}