const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    function RandomMinMax(min,max) {
        return Math.floor(Math.random() * (max+1 - min)) + min;
      }
      var temdatanames = User.TemdataNames.split("<:>");
      var Imgset = User.Ary_Imgset.split("<:>");
      var rawtemdatanumbers= User.TemdataNumbers.split("<:>");
      var temdatanumbers = [];
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index])
      };
      if(User.Ary_HH3FunctionSet1){
      var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      };
    const openembed = new Discord.MessageEmbed();
    if(hh3funset1[1]>0)
    if(User.floor ==2){
        if(Math.random()<0.50){
            var adfoot = RandomMinMax(12,26);
            var oldfoot = User.step;
            User.step += adfoot;
            if(User.step>54){
                User.step=54;
            }
            var footamount = User.step-oldfoot;
            openembed.setColor("#00FFF9");
            openembed.setTitle(":door: Lucky! you found a short cut");
            openembed.setDescription(":footprints: you move +"+footamount+" ahead");
        }
        else{
            openembed.setColor("#006BFF");
            openembed.setTitle(":door: Seems like nothing in here");
        }
        hh3funset1[1]=0;
            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
    }
    else if(User.floor>=3){
        var fl = User.floor-3;
        var fl2 = 1+fl;
        var fl3 = 2+fl;
         if(Math.random()<0.30){
            var randomfoe = [Gamedata.sys_monsternames_normal[fl],Gamedata.sys_monsternames_normal[fl2],Gamedata.sys_monsternames_normal[fl3]];
            var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
            if(Gamedata.sys_monsternames_normal.some(a=>a==newrandomfoe)){
                var foedex = Gamedata.sys_monsternames_normal.indexOf(newrandomfoe)
                var foedatatable = 11*foedex
               var maxhp = 1+ foedatatable;
               var atk = 2+ foedatatable;
               var adatk = 3+ foedatatable;
               var def = 4+ foedatatable;
               var addef = 5+foedatatable;
               var speed = 6+ foedatatable;
               var crit = 7+ foedatatable;
               var accy = 8 + foedatatable;
               var dropkey = 9+ foedatatable;
               var effectkey = 10+foedatatable;
                User.CombatMode=1;
                temdatanames[0] = Gamedata.sys_monsternames_normal[foedex];
                temdatanumbers[0] = Gamedata.sys_monster_state[maxhp];
                temdatanumbers[1] = Gamedata.sys_monster_state[maxhp];
                temdatanumbers[2] = Gamedata.sys_monster_state[atk];
                temdatanumbers[3] = Gamedata.sys_monster_state[adatk];
                temdatanumbers[4] = Gamedata.sys_monster_state[def];
                temdatanumbers[5] = Gamedata.sys_monster_state[addef];
                temdatanumbers[6] = Gamedata.sys_monster_state[speed];
                temdatanumbers[7] = Gamedata.sys_monster_state[crit];
                temdatanumbers[8] = Gamedata.sys_monster_state[accy];
                temdatanumbers[9] = Gamedata.sys_monster_state[dropkey];
                temdatanumbers[10] = Gamedata.sys_monster_state[effectkey];
                temdatanumbers[11]=0;
                temdatanumbers[12]=0;
                temdatanumbers[13]=0;
                temdatanumbers[14]=0;
                temdatanumbers[15]=0;
                temdatanumbers[16]=0;
                temdatanumbers[17]=0;
                temdatanumbers[18]=0;
                temdatanumbers[19]=0;
                temdatanumbers[20]=0;
                temdatanumbers[21]=0;
                temdatanumbers[22]=0;
                temdatanumbers[23]=0;
                Imgset[1] = Gamedata.sys_monsterpic_normal[foedex];
                User.Ary_Imgset = Imgset.join("<:>");
                User.TemdataNames = temdatanames.join("<:>");
                User.TemdataNumbers = temdatanumbers.join("<:>");
                var lv = temdatanumbers[9]+"";
                lv = lv.substring(1);
                monsterembed.setTitle(":interrobang: You have encountered a "+temdatanames[0]);
                monsterembed.setDescription("monster Lv"+lv);
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
                ctx.fillStyle = "#FF1919";
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
                const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
                openembed.setColor("#FF0000");
                openembed.attachFiles(attachment);
                openembed.setImage("attachment://png.png");
                openembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                openembed.send(monsterembed);}
        }
       else if(Math.random()<0.30){
            var adfoot = RandomMinMax(12,26);
            var newfix = User.floor-1;
            var stepamount = 0;
            if(User.floor>3){
            stepamount=125;
            }
            else if(User.floor==3){
                stepamount=65;
             }
             var floormax =stepamount*newfix;
             floormax = floormax-6;
            var oldfoot = User.step;
            User.step += adfoot;
            if(User.step>floormax){
                User.step=floormax;
            }
            var footamount = User.step-oldfoot;
            openembed.setColor("#00FFF9");
            openembed.setTitle(":door: Lucky! you found a short cut");
            openembed.setDescription(":footprints: you move +"+footamount+" ahead");
        }
        else{
            openembed.setColor("#006BFF");
            openembed.setTitle(":door: Seems like nothing in here");
        }
        hh3funset1[1]=0;
            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
    }
         message.channel.send( openembed );
        }
}
module.exports.key = {
    name: "open",
    description: "open the door of mystery."
}