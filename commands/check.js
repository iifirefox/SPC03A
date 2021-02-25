const Discord = require('discord.js');
const gamedata = require('../data/hh3data.json');
const {createCanvas, loadImage} = require('canvas');
module.exports.run = async (message, arg,User) => {
    const checkembed = new Discord.MessageEmbed();
    const miraclembed = new Discord.MessageEmbed();
    checkembed.setColor(User.colortheme);
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
    var temdatanames = User.TemdataNames.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      }
      var rawtemdatanumbers= User.TemdataNumbers.split("<:>"); var temdatanumbers = [];
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index])
      }
      if(User.energy!=undefined){
      var stepamount = 0;
      var halfloor =0;
      if(User.floor>3&User.floor<=9){
          stepamount=125;
          halfloor = 63;
      }
      else if(User.floor==10){
          stepamount=140;
          half=70;
      }
      else if(User.floor==3){
        stepamount=65;
        halfloor = 33;
    }
      else {
          stepamount = 60;
          halfloor = 30;
      }
      var Imgset = User.Ary_Imgset.split("<:>");
      var newfix = User.floor-1;
      var floormax =stepamount*newfix;
      halfloor = floormax-halfloor;
      floormax -= User.step;
    if (User.CombatMode != 0)
    {
            checkembed.setColor("#FF0000");
            checkembed.setTitle("You are in battle with " +temdatanames[0]);
            var lv = temdatanumbers[9]+"";var newlv = lv.substring(1);
            var hpcolor ="#FF1919";
            if(lv.charAt(0)!="3"){
            checkembed.setDescription("Monster Lv"+newlv);
        }
            else{
                checkembed.setDescription("Boss Lv"+newlv);
                hpcolor ="#76009F"
            }
            const canvas = createCanvas(256,296);
            const ctx = canvas.getContext("2d");
            const background = await loadImage("https://i.ibb.co/cFVyjpQ/newoverly.png");
            ctx.drawImage(background,0,0, canvas.width, canvas.height);
            ctx.beginPath();
            const pic = await loadImage(Imgset[1]);
            ctx.drawImage(pic,0,33, canvas.width, 256);
            ctx.lineWidth = 2;
            ctx.strokeStyle="#FFA600";
            ctx.globalAlpha=0.2;
            ctx.fillStyle = "#000000";
            ctx.fillRect(38, 0 , 180, 25);
            ctx.fill();
            ctx.globalAlpha=1;
            ctx.strokeRect(38, 0 , 180, 25);
            ctx.stroke();
            ctx.fillStyle = hpcolor;
            ctx.globalAlpha = 0.6;
            var current = temdatanumbers[0]/temdatanumbers[1];
            current = Math.round(current*100);
            ctx.fillRect(38, 1 , current*1.8, 23);
            ctx.fill();
            ctx.globalAlpha=1;
            ctx.font="10px Arial";
            ctx.fillStyle="#ffffff";
            ctx.fillText("HP",45,15);
            ctx.font="10px Sans";
            ctx.fillStyle="#ffffff";
            ctx.fillText(temdatanumbers[0],120,15);
            ctx.closePath;
            ctx.clip();
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
            checkembed.attachFiles(attachment);
            checkembed.setImage("attachment://png.png");
            if(temdatanumbers[10]>0.0){
                var intstring = temdatanumbers[10].toString();
                var monstercheatype = intstring.charAt(0);
                monstercheatype = Number(monstercheatype);
            }
            if(monstercheatype==1)
            {checkembed.setFooter("Boss Ability: Age of Ruin\nEvery time the boss lands a critical hit, there is a chance your speed will decrease.");}
            else if(monstercheatype==2)
            {checkembed.setFooter("Boss Ability: "+temdatanames[0]+"'s roar\nEvery time you lands a critical hit, there is a chance you might be stuned and your accuracy decrease.");}
            else if(monstercheatype==3)
            {checkembed.setFooter("Boss Ability: Warrior's Fury\nWhen the boss have half it's hp, it's attack power increases while it's defense decreases.");}
            else if(monstercheatype==4)
            {checkembed.setFooter("Boss Ability: Natural Immunity\nThis boss status cannot be changed.");}
            else if(monstercheatype==5)
            {checkembed.setFooter("Boss Ability: Noble Blood\nThe more HP the boss loses the more critical chance.");}
            else if(monstercheatype==6)
            {checkembed.setFooter("Boss Ability: Queen's Webs\nThe more HP the boss loses the more speed and accuracy you lose.");}
            else if(monstercheatype==7)
            {checkembed.setFooter("Boss Ability: Hypothermia\nYour speed and defense decreases heavily for this battle.");}
            else if(monstercheatype==8)
            {checkembed.setFooter(`Boss Ability: "Awaken"\n? ? ?`);}
            else if(monstercheatype==9)
            {checkembed.setFooter("Boss Ability: Void\nWhenever the boss moves first,there is a chance your attack might fall through the void.");}
            message.channel.send(checkembed);
    }
    else
    {
        checkembed.setColor(User.colortheme);
        if (User.floor == 0) { checkembed.setDescription(":x: The Game haven't started yet \n `-croll` to start game"); }
        if (hh3funset1[5]==1)
        {
            checkembed.setTitle("Forest");
            checkembed.setDescription(":dagger: You've found a Stick! \n you can Equip this item as a weapon \n  to equip this item command: `-equip`");
            checkembed.setImage(Imgset[0]);
            var equipnames = User.Ary_Equipmentnames.split("<:>");
            var rawequipmentdata = User.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
    for(var index=0; index<rawhh3funset1.length;index++){
        equipmentdata[index]= Number(rawequipmentdata[index])
    }
            equipnames[0] = gamedata.sys_sword_names[0];
            equipmentdata[0] = 1;
            equipmentdata[1] = gamedata.sys_sword_dataset[0];
            equipmentdata[2] = gamedata.sys_sword_dataset[1];
            equipmentdata[3] = 100;
            equipmentdata[4] = gamedata.sys_sword_dataset[2];
           hh3funset1[5] = 2;
           User.Ary_Equipmentnames = equipnames.join("<:>");
           User.Ary_Equipmentdata = equipmentdata.join("<:>");
           User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
        }
        else if (User.floor == 0) {checkembed.setTitle("Your Outside the House"); checkembed.setDescription("you have walked " + User.step + " steps.");  checkembed.setImage(Imgset[0]); }
        else if (User.floor == 1) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps."); checkembed.setImage(Imgset[0]); }
        else if (User.floor == 2) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor== 3) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps..\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor == 4) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor == 5) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor == 6) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor == 7) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor == 8) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor == 9) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor == 10) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        message.channel.send(checkembed);
}
var half = User.MaxHP/2;
if(hh3funset1[5]>=2&User.floor>=2&User.HP<half&User.step>=halfloor&User.CombatMode==0&Math.random()<0.45){
    var heal = 40;
    var oldhp = User.HP;
    User.HP+=heal;
    if(User.HP>User.MaxHP){
        User.HP=User.MaxHP;
    }
    var amount = User.HP-oldhp;
    miraclembed.setColor("#FDFFFF");
    miraclembed.setTitle(":woman_fairy: You found a Fairy");
    miraclembed.setDescription("as thanks the Fairy healed you\n:hearts: you recovered +"+amount+" HP");
    message.channel.send(miraclembed);
}
}
else{
    checkembed.setColor(User.colortheme);
    checkembed.setDescription(":x: Your Turn hasn't started yet\nTo Start your turn, command: `-myturn`");
    message.channel.send(checkembed);
}
}
module.exports.key = {
    name: "check",
    description: "tells the player whats happening"
}