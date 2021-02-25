const Discord = require('discord.js');
const {createCanvas, loadImage} = require('canvas');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
      };
      const dice = new Discord.MessageEmbed();
      const embed = new Discord.MessageEmbed();
      const newsembed = new Discord.MessageEmbed();
      const doorembed = new Discord.MessageEmbed();
      const warnembed = new Discord.MessageEmbed();
      const monsterembed = new Discord.MessageEmbed();
      if(User.energy!=undefined){
      var temdatanames = User.TemdataNames.split("<:>");
      var rawtemdatanumbers= User.TemdataNumbers.split("<:>");
      var profilenames = User.Ary_HH3ProfileNames.split("<:>");
      var temdatanumbers = [];
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index])
      };
      var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      };
      var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index])
    }
    var rawdata = User.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index])
    }
      var Imgset = User.Ary_Imgset.split("<:>");
    if (User.energy!=undefined||hh3funset1[0]==1)
    {
        if(hh3funset1[10]==1&temdatanames[0]!=""){
            User.TemdataNames = "";
            User.TemdataNumbers = "";
            User.CombatMode=0;
            var newfix = User.floor-1;
            var stepamount = 0;
            if(User.floor>3&User.floor<=9){
            stepamount=125;
            }
            else if(User.floor==3){
            stepamount=65;
            }
            else if(User.floor==10){
                stepamount = 140;
                }
            else {
            stepamount = 60;
            }
            var floormax =stepamount*newfix;
            if(User.floor>3&User.floor<=9){
            var halfloor = floormax -=63;
            if(User.step>=halfloor){
            User.step = halfloor;
            }
            else{
            User.step=floormax-124;
            if(User.step<=0)User.step=10;
             }
            }
            else if(User.floor==10){
            var halfloor = floormax -=70;
            if(User.step>=halfloor){
            User.step = halfloor;
            }
            else{
            User.step=floormax-279;
            if(User.step<=0)User.step=10;
             }
            }
            else if(User.floor==3){
            var halfloor = floormax -=33;
            if(User.step>=halfloor){
            User.step = halfloor;
            }
            else{
            User.step-=floormax-69 ;
            if(User.step<=0)User.step=10;
            }}
            else if(User.floor==2){
            var halfloor = floormax -=30;
            if(User.step>=halfloor){
            User.step = halfloor;
            }
            else{
            User.step-=floormax-50;
            if(User.step<=0)User.step=10;
                }
            if(profilenames[1]==Gamedata.sys_sword_names[0]){
                profiledata[3] =1;
                profiledata[6]=100;
                User.Ary_HH3ProfileData = profiledata.join("<:>");
            }
                };
            Imgset[1]="";
            User.Ary_Imgset = Imgset.join("<:>");
            hh3funset1[10]=0;
            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
        }
        if (User.CombatMode > 0)
        {
            warnembed.setColor("#FFFE00");
            warnembed.setDescription(":x: You  cannot Roll because you are in a battle.\n command: `-act` with `attack`,`defend`,`flee`,`potion`");
            message.channel.send(warnembed);
        }
        else if(User.energy<=0){
            warnembed.setColor("#FFFE00");
            warnembed.setDescription(":x: You  cannot Roll because you have no energy to continue.\n You recover 10 energy every Hour");
            if(User.energy<0) User.energy=0;
            User.turn = false;
            message.channel.send(warnembed);
        }
        else if(User.turn!=true){
            warnembed.setColor("#FFFE00");
            warnembed.setDescription(":x: Your turn has ended,\nTo start another turn\ncommand: `-myturn`");
            if(User.energy<0) User.energy=0;
            User.turn = false;
            message.channel.send(warnembed);
        }
        else if (User.CombatMode == 0)
        {
            if(hh3funset1[1]>0){
                hh3funset1[1]=0;
                User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
            }
            embed.setColor(User.colortheme);
            monsterembed.setColor("#FF0000");
                if (arg == "")
                {
                  var  numbers = 
                    [
          1,2,3,4,5,6
                    ];
                    var resulted = numbers[RandomMax(numbers.length)];
                    if(User.step>900){profiledata[15]==0;User.Ary_HH3ProfileData= profiledata.join("<:>");}
                    User.step += resulted;
                    User.energy-=2;
                    if(User.energy<0)User.energy=0;
                    mdata[1]++;
                    dice.setColor(User.colortheme)
                    dice.setDescription(":game_die: You rolled the dice, \n you got "+resulted);
                    // [2] is dice active 0 is not and 1 open, [3] is item dura 1 
                    if (hh3funset1[2] == 1 && hh3funset1[3]>0)
                    {
                       
                        var resulted2 = numbers[RandomMax(numbers.length)];
                        User.step += resulted2;
                        hh3funset1[2]--;
                        if (hh3funset1[3]<=0)
                        {
                            hh3funset1[3] = 0;
                            hh3funset1[2] = 0;
                            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                        }
                    }
                    }
                   // event dungeon set if (player.Funkey[2] == 3) { }
                   var oldfloor = User.floor;
                   var newfix = User.floor-1;
                   var stepamount = 0;
                   var halfloor =0;
                   if(User.floor>3&User.floor<=9){
                    stepamount=125;
                    halfloor=63;
                    }
                else if(User.floor==3){
                    stepamount=65;
                    halfloor=33;
                    }
                else if(User.floor==10){
                    stepamount = 140;
                    halfloor=70;
                    }
                else {
                    stepamount = 60;
                    halfloor=30;
                    }
                   var floormax =stepamount*newfix;
                   halfloor = floormax-halfloor;
                   if(User.floor==3)halfloor = 75;
                   if(User.floor>2&User.step>floormax&User.floor<=9){
                       User.floor++;
                   }
                   else if(User.floor==0&hh3funset1[5]==2||User.floor==0&hh3funset1[5]==3){
                       User.floor++;
                   }
                   else if(User.floor==2&User.step>60){
                       User.floor++;
                   }
                    if (User.floor!=oldfloor)
                    {
                        newsembed.setColor("#001AFF");
                        if(User.floor==4 & User.level <3){
                            newsembed.setDescription("You reached the next floor but the door is locked\n You need to be at least `level 3` to reach the next floor");
                            newsembed.setFooter("your floor has been reset");
                            User.floor=3; User.step = 60;
                        }
                        else if (User.floor==5 & User.level<5){
                            newsembed.setDescription("You reached the next floor but the door is locked\n You need to be at least `level 5` to reach the next floor");
                            newsembed.setFooter("your floor has been reset");
                            User.floor=4; User.step = 125*3;
                        }
                        else if (User.floor==9 & User.level<8){
                            newsembed.setDescription("You reached the next floor but the door is locked\n You need to be at least `level 8` to reach the next floor");
                            newsembed.setFooter("your floor has been reset");
                            User.floor=8; User.step = 125*7;
                        }
                        else if(User.floor==10&User.step>=floormax){
                            newsembed.setDescription("You reached the Top of the Hunted House");
                            newsembed.setFooter("command: -check to see the view");
                            Imgset[0]=Gamedata.top;
                            User.Ary_Imgset = Imgset.join("<:>");
                        }
                        else{
                        newsembed.setTitle("You are now on floor " + User.floor + "\n -check for info");
                        if (User.floor== 1)
                        {
                            Imgset[0] = "https://i.ibb.co/M9NJJtF/f1.jpg";
                           newsembed.setDescription("You've made it inside the House, but the door has locked it's self.\n There must be a key to unlocking it \n command: `-roll upstairs` or `-roll downstairs`");
                            newsembed.setImage(Imgset[0]);
                        }
                        else if (User.floor == 3)
                        {  Imgset[0] = Gamedata.floor3; newsembed.setDescription("You have Unlocked Shop\nYou have Unlocked Craft Shop\nYou have Unlocked Brew Shop\nYou have Unlocked Repair shop"); newsembed.addField("commands:","-shop to vist the shop\n-craft to vist the craft shop\n-brew to vist the brew shop\n-repair to vist the repair shop"); hh3funset1[0] = 1; }
                        else if (User.floor == 4)
                        {  Imgset[0] = Gamedata.floor4; }
                        else if (User.floor == 5)
                        {  Imgset[0] = Gamedata.floor5; }
                        else if (User.floor == 6)
                        {  Imgset[0] = Gamedata.floor6; }
                        else if (User.floor == 7)
                        {  Imgset[0] = Gamedata.floor7;}
                        else if (User.floor == 8)
                        {  Imgset[0] = Gamedata.floor8;}
                        else if (User.floor == 9)
                        {  Imgset[0] = Gamedata.floor9;}
                        else if (User.floor == 10)
                        {  Imgset[0] = Gamedata.floor10;}
                        hh3funset1[8]=0;
                        hh3funset1[9]=0;
                        User.Ary_Imgset = Imgset.join("<:>");
                        User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                         newfix = User.floor-1;
                         var stepamount = 0;
                         var halfloor =0;
                        if(User.floor>3&User.floor<=9){
                            stepamount=125;
                            halfloor=63;
                            }
                        else if(User.floor==3){
                            stepamount=65;
                            halfloor=33;
                            }
                        else if(User.floor==10){
                            stepamount = 140;
                            halfloor=70;
                            }
                        else {
                            stepamount = 60;
                            halfloor=30;
                            }
                         floormax =stepamount*newfix;
                        halfloor = floormax-halfloor;}
                        message.channel.send(newsembed);
                    }
                    var set = User.floor-2;
                    var dataset = 11*set;
                    var maxhp = 1+ dataset;
                    var atk = 2+ dataset;
                    var adatk = 3+ dataset;
                    var def = 4+ dataset;
                    var addef = 5+dataset;
                    var speed = 6+ dataset;
                    var crit = 7+ dataset;
                    var accy = 8 + dataset;
                    var dropkey = 9+ dataset;
                    var effectkey = 10+dataset;
                    var monsterfix= User.floor-2;
                    var setmonster = 3*monsterfix;
                    setmonster= setmonster
                    var set2 = 1+setmonster;
                    var set3 = 2+setmonster;
                    if(User.floor == 0&hh3funset1[5] == 0)
                        {
                                embed.setTitle("*~snap~*");
                                embed.setDescription("oh? looks you have stepped on something. \n Command: `-check` to look around.");
                                hh3funset1[5]=1;
                                Imgset[0] = "https://i.ibb.co/gRGWDfK/f0.jpg";
                                User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                message.channel.send(embed);
                        }
                        else if(User.floor ==1& arg.includes("upstairs")|User.floor ==1& arg.includes("up stairs")){
                            embed.setTitle(":arrow_up: *you went up stairs*");
                            embed.setDescription(" `-roll` to begin the exploration");
                            Imgset[0] = "https://i.ibb.co/V9P96h5/f2.jpg";
                            User.Ary_Imgset = Imgset.join("<:>");
                            User.floor++;
                            message.channel.send(embed);
                        }
                        else if(User.floor==1&arg.includes("downstairs")|User.floor==1&arg.includes("down stairs")){
                            embed.setDescription(":x: This Map is not in this Game verison.");
                            embed.setImage("https://i.pinimg.com/originals/2f/aa/84/2faa849df307d2372d4273f5a27b7b8f.jpg");
                            message.channel.send(embed);
                        }
                        else if(User.floor==2){
                            if(User.step>=floormax-7&hh3funset1[9]==0){
                                User.CombatMode=1;
                                temdatanames[0] = Gamedata.sys_monsternames_boss[set];
                                temdatanumbers[0] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[1] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[2] = Gamedata.sys_monsterboss_state[atk];
                                temdatanumbers[3] = Gamedata.sys_monsterboss_state[adatk];
                                temdatanumbers[4] = Gamedata.sys_monsterboss_state[def];
                                temdatanumbers[5] = Gamedata.sys_monsterboss_state[addef];
                                temdatanumbers[6] = Gamedata.sys_monsterboss_state[speed];
                                temdatanumbers[7] = Gamedata.sys_monsterboss_state[crit];
                                temdatanumbers[8] = Gamedata.sys_monsterboss_state[accy];
                                temdatanumbers[9] = Gamedata.sys_monsterboss_state[dropkey];
                                temdatanumbers[10] = Gamedata.sys_monsterboss_state[effectkey];
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_boss[set];
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                User.img
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                monsterembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
                                monsterembed.setDescription("Boss Lv"+lv);
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
                                ctx.fillStyle = "#76009F";
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
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                            }
                            else if(Math.random()<Gamedata.sys_spawn_rate){
                                var randomfoe = [Gamedata.sys_monsternames_normal[setmonster],Gamedata.sys_monsternames_normal[set2],Gamedata.sys_monsternames_normal[set3]];
                                var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
                                if(Gamedata.sys_monsternames_normal.some(a=>a==newrandomfoe)){
                                    var foedex = Gamedata.sys_monsternames_normal.indexOf(newrandomfoe)
                                    var foedatatable = 11*foedex
                                     maxhp = 1+ foedatatable;
                                     atk = 2+ foedatatable;
                                     adatk = 3+ foedatatable;
                                     def = 4+ foedatatable;
                                     addef = 5+foedatatable;
                                     speed = 6+ foedatatable;
                                     crit = 7+ foedatatable;
                                     accy = 8 + foedatatable;
                                     dropkey = 9+ foedatatable;
                                     effectkey = 10+foedatatable;
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_normal[foedex];
                                User.Metadata= mdata.join("<:>");
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
                                ctx.closePath;
                                ctx.clip();
                                const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                                }
                            }
                            else if(Math.random()<0.28){
                                hh3funset1[1] =1;
                                doorembed.setColor("#32BEFE");
                                doorembed.setTitle(":grey_exclamation: A door near you is emanating light\nDo you wish to open it?");
                                doorembed.setDescription("To open, command: `-open`\nyou can ignore this.");
                            }
                        }
                        else if(User.floor==3){
                            if(User.step>=floormax-7&hh3funset1[9]==0){
                                User.CombatMode=1;
                                temdatanames[0] = Gamedata.sys_monsternames_boss[set];
                                temdatanumbers[0] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[1] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[2] = Gamedata.sys_monsterboss_state[atk];
                                temdatanumbers[3] = Gamedata.sys_monsterboss_state[adatk];
                                temdatanumbers[4] = Gamedata.sys_monsterboss_state[def];
                                temdatanumbers[5] = Gamedata.sys_monsterboss_state[addef];
                                temdatanumbers[6] = Gamedata.sys_monsterboss_state[speed];
                                temdatanumbers[7] = Gamedata.sys_monsterboss_state[crit];
                                temdatanumbers[8] = Gamedata.sys_monsterboss_state[accy];
                                temdatanumbers[9] = Gamedata.sys_monsterboss_state[dropkey];
                                temdatanumbers[10] = Gamedata.sys_monsterboss_state[effectkey];
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_boss[set];
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                monsterembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
                                monsterembed.setDescription("Boss Lv"+lv);
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
                                ctx.fillStyle = "#76009F";
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
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                            }
                            else if(Math.random()<Gamedata.sys_spawn_rate){
                                var randomfoe = [Gamedata.sys_monsternames_normal[setmonster],Gamedata.sys_monsternames_normal[set2],Gamedata.sys_monsternames_normal[set3]];
                                var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
                                if(Gamedata.sys_monsternames_normal.some(a=>a==newrandomfoe)){
                                    var foedex = Gamedata.sys_monsternames_normal.indexOf(newrandomfoe);
                                    console.log(foedex);
                                    var foedatatable = 11*foedex
                                     maxhp = 1+ foedatatable;
                                     atk = 2+ foedatatable;
                                     adatk = 3+ foedatatable;
                                     def = 4+ foedatatable;
                                     addef = 5+foedatatable;
                                     speed = 6+ foedatatable;
                                     crit = 7+ foedatatable;
                                     accy = 8 + foedatatable;
                                     dropkey = 9+ foedatatable;
                                     effectkey = 10+foedatatable;
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_normal[foedex];
                                User.Metadata= mdata.join("<:>");
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
                                ctx.closePath;
                                ctx.clip();
                                const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                                }
                            }
                        }
                        else if(User.floor==4){
                            if(User.step>=floormax-7&hh3funset1[9]==0){
                                User.CombatMode=1;
                                temdatanames[0] = Gamedata.sys_monsternames_boss[set];
                                temdatanumbers[0] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[1] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[2] = Gamedata.sys_monsterboss_state[atk];
                                temdatanumbers[3] = Gamedata.sys_monsterboss_state[adatk];
                                temdatanumbers[4] = Gamedata.sys_monsterboss_state[def];
                                temdatanumbers[5] = Gamedata.sys_monsterboss_state[addef];
                                temdatanumbers[6] = Gamedata.sys_monsterboss_state[speed];
                                temdatanumbers[7] = Gamedata.sys_monsterboss_state[crit];
                                temdatanumbers[8] = Gamedata.sys_monsterboss_state[accy];
                                temdatanumbers[9] = Gamedata.sys_monsterboss_state[dropkey];
                                temdatanumbers[10] = Gamedata.sys_monsterboss_state[effectkey];
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_boss[set];
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                monsterembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
                                monsterembed.setDescription("Boss Lv"+lv);
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
                                ctx.fillStyle = "#76009F";
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
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                            }
                            else if(Math.random()<Gamedata.sys_spawn_rate){
                                var randomfoe = [Gamedata.sys_monsternames_normal[setmonster],Gamedata.sys_monsternames_normal[set2],Gamedata.sys_monsternames_normal[set3]];
                                var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
                                if(Gamedata.sys_monsternames_normal.some(a=>a==newrandomfoe)){
                                    var foedex = Gamedata.sys_monsternames_normal.indexOf(newrandomfoe)
                                    var foedatatable = 11*foedex
                                     maxhp = 1+ foedatatable;
                                     atk = 2+ foedatatable;
                                     adatk = 3+ foedatatable;
                                     def = 4+ foedatatable;
                                     addef = 5+foedatatable;
                                     speed = 6+ foedatatable;
                                     crit = 7+ foedatatable;
                                     accy = 8 + foedatatable;
                                     dropkey = 9+ foedatatable;
                                     effectkey = 10+foedatatable;
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_normal[foedex];
                                User.Metadata= mdata.join("<:>");
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
                                ctx.closePath;
                                ctx.clip();
                                const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                                }
                            }
                        }
                        else if(User.floor==5){
                            if(User.step>=floormax-7&hh3funset1[9]==0){
                                User.CombatMode=1;
                                temdatanames[0] = Gamedata.sys_monsternames_boss[set];
                                temdatanumbers[0] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[1] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[2] = Gamedata.sys_monsterboss_state[atk];
                                temdatanumbers[3] = Gamedata.sys_monsterboss_state[adatk];
                                temdatanumbers[4] = Gamedata.sys_monsterboss_state[def];
                                temdatanumbers[5] = Gamedata.sys_monsterboss_state[addef];
                                temdatanumbers[6] = Gamedata.sys_monsterboss_state[speed];
                                temdatanumbers[7] = Gamedata.sys_monsterboss_state[crit];
                                temdatanumbers[8] = Gamedata.sys_monsterboss_state[accy];
                                temdatanumbers[9] = Gamedata.sys_monsterboss_state[dropkey];
                                temdatanumbers[10] = Gamedata.sys_monsterboss_state[effectkey];
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_boss[set];
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                monsterembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
                                monsterembed.setDescription("Boss Lv"+lv);
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
                                ctx.fillStyle = "#76009F";
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
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                            }
                            else if(Math.random()<Gamedata.sys_spawn_rate){
                                var randomfoe = [Gamedata.sys_monsternames_normal[setmonster],Gamedata.sys_monsternames_normal[set2],Gamedata.sys_monsternames_normal[set3]];
                                var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
                                if(Gamedata.sys_monsternames_normal.some(a=>a==newrandomfoe)){
                                    var foedex = Gamedata.sys_monsternames_normal.indexOf(newrandomfoe)
                                    var foedatatable = 11*foedex
                                     maxhp = 1+ foedatatable;
                                     atk = 2+ foedatatable;
                                     adatk = 3+ foedatatable;
                                     def = 4+ foedatatable;
                                     addef = 5+foedatatable;
                                     speed = 6+ foedatatable;
                                     crit = 7+ foedatatable;
                                     accy = 8 + foedatatable;
                                     dropkey = 9+ foedatatable;
                                     effectkey = 10+foedatatable;
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_normal[foedex];
                                User.Metadata= mdata.join("<:>");
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
                                ctx.closePath;
                                ctx.clip();
                                const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                                }
                            }
                        }
                        else if(User.floor==6){
                            if(User.step>=floormax-7&hh3funset1[9]==0){
                                User.CombatMode=1;
                                temdatanames[0] = Gamedata.sys_monsternames_boss[set];
                                temdatanumbers[0] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[1] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[2] = Gamedata.sys_monsterboss_state[atk];
                                temdatanumbers[3] = Gamedata.sys_monsterboss_state[adatk];
                                temdatanumbers[4] = Gamedata.sys_monsterboss_state[def];
                                temdatanumbers[5] = Gamedata.sys_monsterboss_state[addef];
                                temdatanumbers[6] = Gamedata.sys_monsterboss_state[speed];
                                temdatanumbers[7] = Gamedata.sys_monsterboss_state[crit];
                                temdatanumbers[8] = Gamedata.sys_monsterboss_state[accy];
                                temdatanumbers[9] = Gamedata.sys_monsterboss_state[dropkey];
                                temdatanumbers[10] = Gamedata.sys_monsterboss_state[effectkey];
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_boss[set];
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                monsterembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
                                monsterembed.setDescription("Boss Lv"+lv);
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
                                ctx.fillStyle = "#76009F";
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
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                            }
                            else if(Math.random()<Gamedata.sys_spawn_rate){
                                var randomfoe = [Gamedata.sys_monsternames_normal[setmonster],Gamedata.sys_monsternames_normal[set2],Gamedata.sys_monsternames_normal[set3]];
                                var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
                                if(Gamedata.sys_monsternames_normal.some(a=>a==newrandomfoe)){
                                    var foedex = Gamedata.sys_monsternames_normal.indexOf(newrandomfoe)
                                    var foedatatable = 11*foedex
                                     maxhp = 1+ foedatatable;
                                     atk = 2+ foedatatable;
                                     adatk = 3+ foedatatable;
                                     def = 4+ foedatatable;
                                     addef = 5+foedatatable;
                                     speed = 6+ foedatatable;
                                     crit = 7+ foedatatable;
                                     accy = 8 + foedatatable;
                                     dropkey = 9+ foedatatable;
                                     effectkey = 10+foedatatable;
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_normal[foedex];
                                User.Metadata= mdata.join("<:>");
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
                                ctx.closePath;
                                ctx.clip();
                                const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                                }
                            }
                        }
                        else if(User.floor==7){
                            if(User.step>=floormax-7&hh3funset1[9]==0){
                                User.CombatMode=1;
                                temdatanames[0] = Gamedata.sys_monsternames_boss[set];
                                temdatanumbers[0] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[1] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[2] = Gamedata.sys_monsterboss_state[atk];
                                temdatanumbers[3] = Gamedata.sys_monsterboss_state[adatk];
                                temdatanumbers[4] = Gamedata.sys_monsterboss_state[def];
                                temdatanumbers[5] = Gamedata.sys_monsterboss_state[addef];
                                temdatanumbers[6] = Gamedata.sys_monsterboss_state[speed];
                                temdatanumbers[7] = Gamedata.sys_monsterboss_state[crit];
                                temdatanumbers[8] = Gamedata.sys_monsterboss_state[accy];
                                temdatanumbers[9] = Gamedata.sys_monsterboss_state[dropkey];
                                temdatanumbers[10] = Gamedata.sys_monsterboss_state[effectkey];
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_boss[set];
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                monsterembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
                                monsterembed.setDescription("Boss Lv"+lv);
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
                                ctx.fillStyle = "#76009F";
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
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                            }
                            else if(Math.random()<Gamedata.sys_spawn_rate){
                                var randomfoe = [Gamedata.sys_monsternames_normal[setmonster],Gamedata.sys_monsternames_normal[set2],Gamedata.sys_monsternames_normal[set3]];
                                var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
                                if(Gamedata.sys_monsternames_normal.some(a=>a==newrandomfoe)){
                                    var foedex = Gamedata.sys_monsternames_normal.indexOf(newrandomfoe)
                                    var foedatatable = 11*foedex
                                     maxhp = 1+ foedatatable;
                                     atk = 2+ foedatatable;
                                     adatk = 3+ foedatatable;
                                     def = 4+ foedatatable;
                                     addef = 5+foedatatable;
                                     speed = 6+ foedatatable;
                                     crit = 7+ foedatatable;
                                     accy = 8 + foedatatable;
                                     dropkey = 9+ foedatatable;
                                     effectkey = 10+foedatatable;
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_normal[foedex];
                                User.Metadata= mdata.join("<:>");
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
                                ctx.closePath;
                                ctx.clip();
                                const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                                }
                            }
                        }
                        else if(User.floor==8){
                            if(User.step>=floormax-7&hh3funset1[9]==0){
                                User.CombatMode=1;
                                temdatanames[0] = Gamedata.sys_monsternames_boss[set];
                                temdatanumbers[0] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[1] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[2] = Gamedata.sys_monsterboss_state[atk];
                                temdatanumbers[3] = Gamedata.sys_monsterboss_state[adatk];
                                temdatanumbers[4] = Gamedata.sys_monsterboss_state[def];
                                temdatanumbers[5] = Gamedata.sys_monsterboss_state[addef];
                                temdatanumbers[6] = Gamedata.sys_monsterboss_state[speed];
                                temdatanumbers[7] = Gamedata.sys_monsterboss_state[crit];
                                temdatanumbers[8] = Gamedata.sys_monsterboss_state[accy];
                                temdatanumbers[9] = Gamedata.sys_monsterboss_state[dropkey];
                                temdatanumbers[10] = Gamedata.sys_monsterboss_state[effectkey];
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_boss[set];
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                monsterembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
                                monsterembed.setDescription("Boss Lv"+lv);
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
                                ctx.fillStyle = "#76009F";
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
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                            }
                            else if(Math.random()<Gamedata.sys_spawn_rate){
                                var randomfoe = [Gamedata.sys_monsternames_normal[setmonster],Gamedata.sys_monsternames_normal[set2],Gamedata.sys_monsternames_normal[set3]];
                                var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
                                if(Gamedata.sys_monsternames_normal.some(a=>a==newrandomfoe)){
                                    var foedex = Gamedata.sys_monsternames_normal.indexOf(newrandomfoe)
                                    var foedatatable = 11*foedex
                                     maxhp = 1+ foedatatable;
                                     atk = 2+ foedatatable;
                                     adatk = 3+ foedatatable;
                                     def = 4+ foedatatable;
                                     addef = 5+foedatatable;
                                     speed = 6+ foedatatable;
                                     crit = 7+ foedatatable;
                                     accy = 8 + foedatatable;
                                     dropkey = 9+ foedatatable;
                                     effectkey = 10+foedatatable;
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_normal[foedex];
                                User.Metadata= mdata.join("<:>");
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
                                ctx.closePath;
                                ctx.clip();
                                const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                                }
                            }
                        }
                        else if( User.floor==9){
                            if(User.step>=floormax-7&hh3funset1[9]==0){
                                User.CombatMode=1;
                                temdatanames[0] = Gamedata.sys_monsternames_boss[set];
                                temdatanumbers[0] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[1] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[2] = Gamedata.sys_monsterboss_state[atk];
                                temdatanumbers[3] = Gamedata.sys_monsterboss_state[adatk];
                                temdatanumbers[4] = Gamedata.sys_monsterboss_state[def];
                                temdatanumbers[5] = Gamedata.sys_monsterboss_state[addef];
                                temdatanumbers[6] = Gamedata.sys_monsterboss_state[speed];
                                temdatanumbers[7] = Gamedata.sys_monsterboss_state[crit];
                                temdatanumbers[8] = Gamedata.sys_monsterboss_state[accy];
                                temdatanumbers[9] = Gamedata.sys_monsterboss_state[dropkey];
                                temdatanumbers[10] = Gamedata.sys_monsterboss_state[effectkey];
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_boss[set];
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                monsterembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
                                monsterembed.setDescription("Boss Lv"+lv);
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
                                ctx.fillStyle = "#76009F";
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
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                            }
                            else if(Math.random()<Gamedata.sys_spawn_rate){
                                var randomfoe = [Gamedata.sys_monsternames_normal[setmonster],Gamedata.sys_monsternames_normal[set2],Gamedata.sys_monsternames_normal[set3]];
                                var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
                                if(Gamedata.sys_monsternames_normal.some(a=>a==newrandomfoe)){
                                    var foedex = Gamedata.sys_monsternames_normal.indexOf(newrandomfoe)
                                    var foedatatable = 11*foedex
                                     maxhp = 1+ foedatatable;
                                     atk = 2+ foedatatable;
                                     adatk = 3+ foedatatable;
                                     def = 4+ foedatatable;
                                     addef = 5+foedatatable;
                                     speed = 6+ foedatatable;
                                     crit = 7+ foedatatable;
                                     accy = 8 + foedatatable;
                                     dropkey = 9+ foedatatable;
                                     effectkey = 10+foedatatable;
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_normal[foedex];
                                User.Metadata= mdata.join("<:>");
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
                                ctx.closePath;
                                ctx.clip();
                                const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                                }
                            }
                        }
                        else if(User.floor==10){
                            if(User.step>=floormax-7&hh3funset1[9]==0){
                                User.CombatMode=1;
                                temdatanames[0] = Gamedata.sys_monsternames_boss[set];
                                temdatanumbers[0] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[1] = Gamedata.sys_monsterboss_state[maxhp];
                                temdatanumbers[2] = Gamedata.sys_monsterboss_state[atk];
                                temdatanumbers[3] = Gamedata.sys_monsterboss_state[adatk];
                                temdatanumbers[4] = Gamedata.sys_monsterboss_state[def];
                                temdatanumbers[5] = Gamedata.sys_monsterboss_state[addef];
                                temdatanumbers[6] = Gamedata.sys_monsterboss_state[speed];
                                temdatanumbers[7] = Gamedata.sys_monsterboss_state[crit];
                                temdatanumbers[8] = Gamedata.sys_monsterboss_state[accy];
                                temdatanumbers[9] = Gamedata.sys_monsterboss_state[dropkey];
                                temdatanumbers[10] = Gamedata.sys_monsterboss_state[effectkey];
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_boss[set];
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                monsterembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
                                monsterembed.setDescription("Boss Lv"+lv);
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
                                ctx.fillStyle = "#76009F";
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
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                            }
                            else if(Math.random()<Gamedata.sys_spawn_rate2){
                                var set4 = 4+setmonster;
                                var randomfoe = [Gamedata.sys_monsternames_normal[setmonster],Gamedata.sys_monsternames_normal[set2],Gamedata.sys_monsternames_normal[set3],Gamedata.sys_monsternames_normal[set4]];
                                var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
                                if(Gamedata.sys_monsternames_normal.some(a=>a==newrandomfoe)){
                                    var foedex = Gamedata.sys_monsternames_normal.indexOf(newrandomfoe)
                                    var foedatatable = 11*foedex
                                     maxhp = 1+ foedatatable;
                                     atk = 2+ foedatatable;
                                     adatk = 3+ foedatatable;
                                     def = 4+ foedatatable;
                                     addef = 5+foedatatable;
                                     speed = 6+ foedatatable;
                                     crit = 7+ foedatatable;
                                     accy = 8 + foedatatable;
                                     dropkey = 9+ foedatatable;
                                     effectkey = 10+foedatatable;
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
                                mdata[2]++;
                                Imgset[1] = Gamedata.sys_monsterpic_normal[foedex];
                                User.Metadata= mdata.join("<:>");
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
                                ctx.closePath;
                                ctx.clip();
                                const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
                                monsterembed.attachFiles(attachment);
                                monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                                }
                            }
                        }
                        if(arg == ""&User.floor>=2&User.step>=halfloor&hh3funset1[8]==0){
                            dice.setTitle(":triangular_flag_on_post: Floor "+User.floor+" Check Point!\nHP recovered 50%");
                            var heal = User.MaxHP/2;
                            heal = Math.round(heal);
                            User.HP+=heal;
                             if(User.HP>User.MaxHP){
                                User.HP=User.MaxHP;
                            }
                            hh3funset1[8]=1;
                            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                            message.channel.send(dice);
                        }
                       else if(dice.description){message.channel.send(dice);}
                       User.Metadata = mdata.join("<:>");
            }
        }
        else{embed.setDescription(":x: Your Turn hasn't started yet\nTo Start your turn, command: `-myturn`")}}
        else{embed.setColor("#F8FF00");embed.setDescription(":x: You cannot use this command yet.\nPlease start your turn,\nCommand:`-myturn`"); message.channel.send(embed)}
    }
    module.exports.key = {
        name: "roll",
        description: "roll to win."
    }