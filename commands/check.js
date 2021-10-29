const Discord = require('discord.js');
const gamedata = require('../data/hh3data.json');
const Account = require("../data/tree");
const {createCanvas, loadImage} = require('canvas');
module.exports.run = async (message, arg,User) => {
    const checkembed = new Discord.MessageEmbed();
    checkembed.setColor(User.colortheme);
    if(User.Ary_HH3FunctionSet1)var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
    else return message.channel.send(checkembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
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
    else if(User.floor<0&User.floor>-4){
        stepamount = 230;
        halfloor=115;
        }
      else {
          stepamount = 60;
          halfloor = 30;
      }
      var Imgset = User.Ary_Imgset.split("<:>");
      var newfix=0;
      if(User.floor<0)newfix= User.floor*-1;
      else newfix = User.floor-1;
      var floormax =stepamount*newfix;
      halfloor = floormax-halfloor;
      floormax -= User.step;
    if (User.CombatMode > 0&User.CombatMode !=3)
    {
            checkembed.setColor("#FF0000");
            var add ="";
            var lv = temdatanumbers[9]+"";var newlv = lv.substring(1);
            if(User.CombatMode==2&temdatanumbers[41]&temdatanumbers[9])var lvII = temdatanumbers[9].toString().substring(1);
            if(lv.charAt(0)!="3") add="a ";
            if(temdatanumbers[32]==0)checkembed.setTitle("You are in battle with "+add +temdatanames[0]+"\nLv: "+newlv);
            else if(temdatanumbers[32])checkembed.setTitle("You are in battle with "+
            add +temdatanames[0]+"Lv."+newlv+" and a "+temdatanames[7]+" Lv."+lvII);
            var hpcolor ="#FF1919";
            if(lv.charAt(0)=="3"){checkembed.setDescription("Boss Lv"+newlv);
                hpcolor ="#76009F"
            }
            if(temdatanumbers[32]<1){
            const canvas = createCanvas(256,286);
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
            ctx.font="bold 11px Sans";
            ctx.fillStyle="#ffffff";
            ctx.fillText(temdatanumbers[0],120,15);
            ctx.closePath;
            ctx.clip();
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
            checkembed.attachFiles(attachment);}
            else if(hh3funset1[11]==2){
                const canvas = createCanvas(516,286);
            const ctx = canvas.getContext("2d");
            const background = await loadImage("https://i.ibb.co/cFVyjpQ/newoverly.png");
            ctx.drawImage(background,0,0, canvas.width, canvas.height);
            ctx.beginPath();
            const pic = await loadImage(Imgset[1]);
            ctx.drawImage(pic,0,33, 256, 256);
            const pic2 = await loadImage(Imgset[2]);
            ctx.drawImage(pic2,260,33, 256, 256);
            ctx.lineWidth = 2;
            ctx.strokeStyle="#FFA600";
            ctx.globalAlpha=0.2;
            ctx.fillStyle = "#000000";
            ctx.fillRect(38, 0 , 178, 25);
            ctx.fill();
            ctx.globalAlpha=1;
            ctx.strokeRect(38, 0 , 178, 25);
            ctx.stroke();
            ctx.fillStyle = "#FF1919";
            ctx.globalAlpha = 0.6;
            var current = temdatanumbers[0] /temdatanumbers[1];
            current = Math.round(current*100);
            ctx.fillRect(38, 1 , current*1.78, 23);
            ctx.fill();
            ctx.globalAlpha=1;
            ctx.lineWidth = 2;
            ctx.strokeStyle="#FFA600";
            ctx.globalAlpha=0.2;
            ctx.fillStyle = "#000000";
            ctx.fillRect(300, 0 , 178, 25);
            ctx.fill();
            ctx.globalAlpha=1;
            ctx.strokeRect(300, 0 , 178, 25);
            ctx.stroke();
            ctx.fillStyle = "#FF1919";
            ctx.globalAlpha = 0.6;
            current = temdatanumbers[32] /temdatanumbers[33];
            current = Math.round(current*100);
            ctx.fillRect(300, 1 , current*1.78, 23);
            ctx.fill();
            ctx.globalAlpha=1;
            ctx.font="10px Arial";
            ctx.fillStyle="#ffffff";
            ctx.fillText("HP",45,15);
            ctx.font="bold 11px Sans";
            ctx.fillStyle="#ffffff";
            ctx.fillText(temdatanumbers[0],120,15);
            ctx.font="10px Arial";
            ctx.fillStyle="#ffffff";
            ctx.fillText("HP",310,15);
            ctx.font="bold 11px Sans";
            ctx.fillStyle="#ffffff";
            ctx.fillText(temdatanumbers[32],380,15);
            ctx.closePath;
            ctx.clip();
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
            checkembed.attachFiles(attachment);
            }
            checkembed.setImage("attachment://png.png");
            if(temdatanumbers[10]>0.0){
                var monstercheatype = Number(temdatanumbers[10].toString().substring(2));
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
            {checkembed.setFooter(`Boss Ability: "Awaken"\nThis boss will use 100% of it's power`);}
            else if(monstercheatype==9)
            {checkembed.setFooter("Boss Ability: Void\nWhenever the boss moves first,there is a chance your attack might fall through the void.");}
            else if(monstercheatype==11)
            {checkembed.setFooter("Boss Ability: Shadow\nThe boss can only be damaged by critical hits,\nand when you miss, The Boss's attack power increases(100% max).");}
            else if(monstercheatype==12)
            {checkembed.setFooter("Boss Ability: Perdiction\nWhenever you use a potion while on low on HP,\nyour Skill Energy is drained to 0.\nusing potions with no skill energy will stun you.");}
            else if(monstercheatype==12)
            {checkembed.setFooter("Boss Ability: Transformation\nThis boss will transform into Dragon, Angel or back to a crystal.\nCrystal:None\nDragon: Heavy Attack power\nAngel: Very Swift");}
            var summon = "";
            if(temdatanumbers[29]) summon="\n"+temdatanames[5]+":❤️ "+temdatanumbers[29];
        if(User.CombatMode!=2)message.channel.send(checkembed.setImage("attachment://png.png").setFooter(User.name+":❤️ "+User.HP+"/"+User.MaxHP+" ⚡"+User.Skillenergy+"/"+User.Maxskillenergy+summon));
        else{ Account.findOne({
            id: User.multid
        },async(err,UserII)=>{
          if(err)console.log(err);var summonA="";
          var temdatanamesA = UserII.TemdataNames.split("<:>");
          var rawtemdatanumbersA= UserII.TemdataNumbers.split("<:>");var temdatanumbersA = [];
          for(var index=0; index<rawtemdatanumbersA.length;index++){
            temdatanumbersA[index]= Number(rawtemdatanumbersA[index])
          }
          if(temdatanumbersA[29]) summonA="\n"+temdatanamesA[5]+":❤️ "+temdatanumbersA[29];
            message.channel.send(checkembed.setImage("attachment://png.png").setFooter(User.name+":❤️ "+User.HP+"/"+User.MaxHP+" ⚡"+User.Skillenergy+"/"+User.Maxskillenergy+"\n"+UserII.name+":❤️ "+UserII.HP+"/"+User.MaxHP+" ⚡"+UserII.Skillenergy+"/"+UserII.Maxskillenergy+summon+summonA));});};
    }
    else if(User.CombatMode==3){
        Account.findOne({
            id: User.multid
        },async(err,UserII)=>{
          if(err)console.log(err);
          if(!UserII)return message.channel.send(checkembed.setDescription(":x: Error: No User found."));
          checkembed.setTitle(UserII.name+"\nlv "+UserII.level)
        const canvas = createCanvas(256,286);
            const ctx = canvas.getContext("2d");
            const background = await loadImage(UserII.Profileimg);
            ctx.drawImage(background,35,35, 200, 200);
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle="#FFA600";
            ctx.globalAlpha=0.2;
            ctx.fillStyle = "#000000";
            ctx.fillRect(38, 0 , 180, 25);
            ctx.fill();
            ctx.globalAlpha=1;
            ctx.strokeRect(38, 0 , 180, 25);
            ctx.stroke();
            ctx.fillStyle = "#FF1919";
            ctx.globalAlpha = 0.6;
            var current = UserII.HP/UserII.MaxHP
            current = Math.round(current*100);
            ctx.fillRect(38, 1 , current*1.8, 23);
            ctx.fill();
            ctx.globalAlpha=1;
            ctx.font="10px Arial";
            ctx.fillStyle="#ffffff";
            ctx.fillText("HP",45,15);
            ctx.font="bold 11px Sans";
            ctx.fillStyle="#ffffff";
            ctx.fillText(UserII.HP,120,15);
            ctx.closePath;
            ctx.clip();
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
            checkembed.attachFiles(attachment);message.channel.send(checkembed.setImage("attachment://png.png").setFooter(User.name+":❤️ "+User.HP+"/"+User.MaxHP+" ⚡"+User.Skillenergy+"/"+User.Maxskillenergy));
        });
    }
    else
    {
        checkembed.setColor(User.colortheme);
        if (User.floor == 0) { checkembed.setDescription(":x: The Game haven't started yet \n `roll` to start game"); }
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
        else if (User.floor <=9&User.floor>=2) { checkembed.setTitle("Your on floor " + User.floor+ " - `Reach floor 10`"); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor ==10) { checkembed.setTitle("Your on floor " + User.floor); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until Top floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor == -1) { checkembed.setTitle("Your in the Basement"); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor == -2) { checkembed.setTitle("Your in the Hidden Library"); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        else if (User.floor == -3) { checkembed.setTitle("Your in the Crystal Cave"); checkembed.setDescription("you have walked " + User.step + " steps.\n"+floormax+" more steps Until next floor"); checkembed.setImage(Imgset[0]); }
        message.channel.send(checkembed);
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