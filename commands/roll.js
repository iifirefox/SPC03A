const Discord = require('discord.js');
const {createCanvas, loadImage} = require('canvas');
const Gamedata = require('../data/hh3data.json');
const Account = require("../data/tree");
module.exports.run = async (message, arg, User, client) => {
    function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
      };
      function RandomMinMax(min,max) {
        return Math.floor(Math.random() * (max+1 - min)) + min;
      }
      const dice = new Discord.MessageEmbed();
      const embed = new Discord.MessageEmbed();
      const newsembed = new Discord.MessageEmbed();
      const warnembed = new Discord.MessageEmbed();
      const monsterembed = new Discord.MessageEmbed();
      if(User.energy!=undefined){
      var temdatanames = User.TemdataNames.split("<:>");
      var profilenames = User.Ary_HH3ProfileNames.split("<:>");
      var rawtemdatanumbers= User.TemdataNumbers.split("<:>");
      var temdatanumbers = [];
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index]);
      };
      var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      };
      var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index]);
    }
    var rawdata = User.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index])
    }
      var Imgset = User.Ary_Imgset.split("<:>");
    if (User.energy!=undefined||hh3funset1[0]==1)
    {
        // Messages are not sync with each other for the reaction, future me please sync them :) - past me
       async function roll(message){
        if (User.CombatMode > 0)
        {
            warnembed.setColor("#FFFE00");
            warnembed.setDescription(":x: You  cannot Roll because you are in a battle.\n command: `-act` with `attack`,`defend`,`flee`,`potion`");
           return message.channel.send(warnembed);
        }
        else if(User.energy<=0){
            warnembed.setColor("#FFFE00");
            warnembed.setDescription(":x: You  cannot Roll because you have no energy to continue.\n You recover 10 energy every Hour");
            if(User.energy<0) User.energy=0;
            User.turn = false;
           return message.channel.send(warnembed);
        }
        else if(!User.turn){
            warnembed.setColor("#FFFE00");
            warnembed.setDescription(":x: Your turn has ended,\nTo start another turn\ncommand: `-myturn`");
            if(User.energy<0) User.energy=0;
            User.turn = false;
           return message.channel.send(warnembed);
        }
        else if (User.CombatMode == 0)
        {
            if(hh3funset1[13]>0)hh3funset1[13]=0;
             if(hh3funset1[11]==2){
                Account.findOne({
                    id: User.multid
                },async(err,UserII)=>{
                  if(err)console.log(err);
                  if(!UserII) message.channel.send(warnembed.setDescription(":x: No User Found").setColor("#FFFE00"))
                        if(!UserII){hh3funset1[13]=1;return message.channel.send(warnembed.setDescription(":x: No User found."));}
                        if(UserII.turn!=true){hh3funset1[13]=1;return message.channel.send(warnembed.setDescription(":x: You cannot roll because\n"+UserII.name+" haven't start their turn yet."));}
                        if(UserII.CombatMode>0){hh3funset1[13]=1;return message.channel.send(warnembed.setDescription(":x: You cannot roll because\n"+UserII.name+" is in battle\n(please wait until their battle is settled)."));}
                        if(hh3funset1[13]==1){
                            Account.findOne({
                                id: User.id
                            },async(err,User)=>{
                              if(err)console.log(err);User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");User.save().catch(err => console.log(err));})
                        }
                })
            }
            if(hh3funset1[13]==1&hh3funset1[11]==2)return undefined;
            if(hh3funset1[1]>0){
                hh3funset1[1]=0;
                User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
            }
            embed.setColor(User.colortheme);
            monsterembed.setColor("#FF0000");
                  var  numbers = 
                    [
          1,2,3,4,5,6
                    ];
                    var resulted = numbers[RandomMax(numbers.length)];
                    if(User.step>900){profiledata[15]==0;User.Ary_HH3ProfileData= profiledata.join("<:>");}
                    User.step += resulted;
                    mdata[13]+=resulted;
                    var rolled =2.8;
                    if(profilenames[5]==Gamedata.sys_chest_mysterychest[2])rolled=2;
                    else if(profilenames[5]==Gamedata.sys_chest_mysterychest[7])rolled=5;
                    User.energy-=rolled;
                    if(User.energy<0)User.energy=0;
                    mdata[1]++;
                    dice.setColor(User.colortheme)
                    var description = ":game_die: You rolled the dice, \n you got "+resulted;
                    if(profilenames[5]==Gamedata.sys_chest_mysterychest[1]){
                        var  numbers = 
                    [
                        1,2,3,4,5,6
                    ];var resultedevent = numbers[RandomMax(numbers.length)];
                    User.step +=resultedevent;mdata[1]++;mdata[13]+=resultedevent;description+="\n and "+resultedevent
                    }
                    dice.setDescription(description);
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
                   var oldfloor = User.floor;
                   var newfix=0;
                  if(User.floor<0)newfix= User.floor*-1;
                 else newfix = User.floor-1;
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
                    else if(User.floor<0&User.floor>4){
                        stepamount = 260;
                        halfloor=130;
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
                   if (User.floor == 1& Imgset[0]==Gamedata.floor1){
                    Imgset[0] = Gamedata.floor2;
                    User.Ary_Imgset = Imgset.join("<:>");
                    User.floor++;
                    User.step=6;
                }
                    if (User.floor!=oldfloor)
                    {
                        newsembed.setColor("#001AFF");
                        if(User.floor==4 & User.level <3){
                            newsembed.setDescription("You reached the next floor but the door is locked\n You need to be at least `level 3` to reach the next floor");
                            newsembed.setFooter("your floor has been reset");
                            User.floor=3; User.step = 1+60;
                        }
                        else if (User.floor==5 & User.level<5){
                            newsembed.setDescription("You reached the next floor but the door is locked\n You need to be at least `level 5` to reach the next floor");
                            newsembed.setFooter("your floor has been reset");
                            User.floor=4; User.step = 1+(125*2);
                        }
                        else if (User.floor==9 & User.level<8){
                            newsembed.setDescription("You reached the next floor but the door is locked\n You need to be at least `level 8` to reach the next floor");
                            newsembed.setFooter("your floor has been reset");
                            User.floor=8; User.step = 1+(125*6);
                        }
                        else if(User.floor==10&User.step>=(140*(1-User.floor))){
                            newsembed.setDescription("You reached the Top of the Hunted House");
                            newsembed.setFooter("command: -check to see the view");
                            Imgset[0]=Gamedata.top;
                            User.Ary_Imgset = Imgset.join("<:>");
                        }
                        else{
                        newsembed.setTitle("You are now on floor " + User.floor + "\n -check for info");
                        if (User.floor== 1)
                        {
                            Imgset[0] = Gamedata.floor1;
                           newsembed.setDescription("You've made it inside the Mansion, though the door behind you locked it's self.\n There must be a key to unlocking it - `Clear Floor 10` \n command: `roll`");
                            newsembed.setImage(Imgset[0]);
                            
                        }
                        else if (User.floor == 3)
                        {  Imgset[0] = Gamedata.floor3;
                        newsembed.setDescription("You have Unlocked Shop\nYou have Unlocked Craft Shop\nYou have Unlocked Brew Shop\nYou have Unlocked Repair shop"); newsembed.addField("commands:","-shop to vist the shop\n-craft to vist the craft shop\n-brew to vist the brew shop\n-repair to vist the repair shop");
                        hh3funset1[0] = 1;mdata[12]=User.floor-1; }
                        else if (User.floor == 4)
                        {  Imgset[0] = Gamedata.floor4;mdata[12]=User.floor-1; }
                        else if (User.floor == 5)
                        {  Imgset[0] = Gamedata.floor5;mdata[12]=User.floor-1; }
                        else if (User.floor == 6)
                        {  Imgset[0] = Gamedata.floor6;mdata[12]=User.floor-1; }
                        else if (User.floor == 7)
                        {  Imgset[0] = Gamedata.floor7;mdata[12]=User.floor-1;}
                        else if (User.floor == 8)
                        {  Imgset[0] = Gamedata.floor8;mdata[12]=User.floor-1;}
                        else if (User.floor == 9)
                        {  Imgset[0] = Gamedata.floor9;mdata[12]=User.floor-1;}
                        else if (User.floor == 10)
                        {  Imgset[0] = Gamedata.floor10;mdata[12]=User.floor-1;}
                        else if (User.floor == -1)
                        {  Imgset[0] = Gamedata.floorb1;User.step=0;}
                        else if (User.floor == -2)
                        {  Imgset[0] = Gamedata.floorb2;mdata[12]=User.floor+1;}
                        else if (User.floor == -3)
                        {  Imgset[0] = Gamedata.floorb5;mdata[12]=User.floor+1;}
                        hh3funset1[8]=0;
                        hh3funset1[9]=0;
                        User.Ary_Imgset = Imgset.join("<:>");
                        User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                         newfix = User.floor-1;
                         if(User.floor<0)newfix= User.floor*-1;
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
                            else if(User.floor<0){
                                stepamount= 100;
                                halfloor=50;
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
                    if(User.floor<0)set=User.floor*-1-1;
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
                    var skillset = set*4;
                    var skillset2 = skillset+1;
                    var skillset3 = skillset+2;
                    var skillset4 = skillset+3;
                    var monsterfix= User.floor-2;
                    if(User.floor<0)monsterfix=User.floor*-1-1;
                    var setmonster = 3*monsterfix;
                    setmonster= setmonster
                    var set2 = 1+setmonster;
                    var set3 = 2+setmonster;
                    var spawnrate =  Gamedata.sys_spawn_rateI;
                    if(User.floor<0)spawnrate = Gamedata.sys_spawn_rateII
                    if(profilenames[5]==Gamedata.sys_chest_mysterychest[6])spawnrate-=0.15;
                    else if(profilenames[5]==Gamedata.sys_chest_mysterychest[10])spawnrate+=0.20;
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
                        else if(User.floor>=-6&User.floor<=10&User.floor!=1){
                            if(User.step>=floormax-7&hh3funset1[9]==0){
                                var bossname = Gamedata.sys_monsternames_boss;
                            var bossskills = Gamedata.sys_monsterboss_skillname;
                            var bosspic = Gamedata.sys_monsterpic_boss;
                            var bossstat = Gamedata.sys_monsterboss_state;
                            if(User.floor<0){ bossname = Gamedata.sys_monsternames_bossA;bosspic = Gamedata.sys_monsterpic_bossA;bossstat = Gamedata.sys_monsterbossA_state;bossskills = Gamedata.sys_monsterbossA_skillname;}
                                User.CombatMode=1;
                                temdatanames[0] = bossname[set];
                                temdatanames[1] = bossskills[skillset];
                                temdatanames[2] = bossskills[skillset2];
                                temdatanames[3] = bossskills[skillset3];
                                temdatanames[4] = bossskills[skillset4];
                                temdatanumbers[0] = bossstat[maxhp];
                                temdatanumbers[1] = bossstat[maxhp];
                                temdatanumbers[2] = bossstat[atk];
                                temdatanumbers[3] = bossstat[adatk];
                                temdatanumbers[4] = bossstat[def];
                                temdatanumbers[5] = bossstat[addef];
                                temdatanumbers[6] = bossstat[speed];
                                temdatanumbers[7] = bossstat[crit];
                                temdatanumbers[8] = bossstat[accy];
                                temdatanumbers[9] = bossstat[dropkey];
                                temdatanumbers[10] = bossstat[effectkey];
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
                                temdatanumbers[24]=0;
                                temdatanumbers[25]=0;
                                temdatanumbers[26]=0;
                                temdatanumbers[27]=0;
                                temdatanumbers[28]=0;
                                temdatanumbers[29]=0;
                                temdatanumbers[30]=0;
                                temdatanumbers[31]=0;
                                temdatanumbers[32]=0;
                                temdatanumbers[33]=0;
                                mdata[2]++;
                                Imgset[1] = bosspic[set];
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                monsterembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
                              if(hh3funset1[11]!=2) monsterembed.setDescription("Boss Lv"+lv);
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
                               if(hh3funset1[11]!=2) message.channel.send(monsterembed);
                               else{
                                Account.findOne({
                                    id: User.multid
                                },async(err,UserII)=>{
                                  if(err)console.log(err);
                                  var ImgsetA = UserII.Ary_Imgset.split("<:>");
                                  var rawprofiledataA = UserII.Ary_HH3ProfileData.split("<:>");var profiledataA = [];
                                  for(var index=0; index<rawprofiledataA.length;index++){
                                  profiledataA[index]= Number(rawprofiledataA[index]);}
                                  var temdatanamesA = UserII.TemdataNames.split("<:>");
                                  var rawtemdatanumbersA= UserII.TemdataNumbers.split("<:>");
                                  var temdatanumbersA = [];
                                  for(var index=0; index<rawtemdatanumbersA.length;index++){
                                  temdatanumbersA[index]= Number(rawtemdatanumbersA[index]);
                                };
                                  temdatanumbersA[46]=2;
                                  ImgsetA[1] = Imgset[1];
                                  temdatanamesA = temdatanames;
                                  temdatanumbersA = temdatanumbers;
                                  temdatanumbersA[4]+=Gamedata.sys_multip_bossdef[0];
                                  temdatanumbersA[5]+=Gamedata.sys_multip_bossdef[1];
                                  temdatanumbersA[45] = profiledata[12];
                                  temdatanumbersA[46]=0;
                                  temdatanumbersA[47]=0;
                                  temdatanumbersA[48]=profiledata[15];
                                  temdatanumbersA[49]=0; var herospd = profiledata[12];
                                  temdatanumbersA[50]=0; var herospdII = profiledataA[12];
                                  temdatanumbersA[51]=0; var herospkey = 0;
                                  temdatanumbersA[52]=0; var herospkeyII = 0;
                                  temdatanumbersA[53]=0;
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
                                    if(herospkey==herospkeyII){
                                        var picked = RandomMinMax(1,2);
                                        if(picked==1){herospkey++}
                                       else if(picked==2){herospkeyII++};
                                    }
                                }
                                if(herospkey>herospkeyII){monsterembed.setDescription("Boss Lv"+lv+"\n`"+User.name+" moves first`"); temdatanumbersA[47]=1; temdatanumbersA[54]=1;}
                                          else { monsterembed.setDescription("Boss Lv"+lv+"\n`"+UserII.name+" moves first`");temdatanumbersA[47]=2; temdatanumbersA[54]=2;}
                                          temdatanumbersA[57]=0;temdatanumbersA[58]=0;
                                  UserII.Ary_Imgset = ImgsetA.join("<:>");
                                UserII.TemdataNames = temdatanamesA.join("<:>");
                                UserII.TemdataNumbers = temdatanumbersA.join("<:>");  
                                UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
                                UserII.CombatMode=2;
                                UserII.save().catch(err => console.log(err));
                                Account.findOne({
                                    id: User.id
                                },async(err,User)=>{
                                  if(err)console.log(err);
                                  temdatanumbers[4]+=Gamedata.sys_multip_bossdef[0];
                                  temdatanumbers[5]+=Gamedata.sys_multip_bossdef[1];
                                  temdatanumbers[45] = profiledataA[12];
                                  temdatanumbers[46] =1;
                                  temdatanumbers[47] = temdatanumbersA[47];
                                  temdatanumbers[53]=0;
                                  temdatanumbers[54] = temdatanumbersA[47];
                                  temdatanumbers[57]=0;temdatanumbers[58]=0;
                                  User.TemdataNumbers = temdatanumbers.join("<:>")
                                  User.TemdataNames = temdatanames.join("<:>");
                                  User.Ary_HH3ProfileData = profiledata.join("<:>");
                                  User.Ary_Imgset = Imgset.join("<:>");
                                  User.CombatMode=2;
                                  User.save().catch(err => console.log(err));
                                })
                                message.channel.send(monsterembed);
                                })
                               }
                            }
                            else if(Math.random()<spawnrate){
                                var monstername=[];
                                var monsterpic=[];
                                var monsterstat=[];
                                 monstername=Gamedata.sys_monsternames_normal;
                                 monsterpic =Gamedata.sys_monsterpic_normal;
                                 monsterstat=Gamedata.sys_monster_state;
                                if(User.floor<0){monstername=Gamedata.sys_monsternames_bnormal;monsterpic =Gamedata.sys_monsterpic_bnormal;
                                    monsterstat=Gamedata.sys_monsterb_state;}
                                var randomfoe = [monstername[setmonster],monstername[set2],monstername[set3]];
                                var newrandomfoe = randomfoe[RandomMax(randomfoe.length)];
                                if(monstername.some(a=>a==newrandomfoe)){
                                    var foedex = monstername.indexOf(newrandomfoe)
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
                                temdatanames[0] = monstername[foedex];
                                temdatanumbers[0] = monsterstat[maxhp];
                                temdatanumbers[1] = monsterstat[maxhp];
                                temdatanumbers[2] = monsterstat[atk];
                                temdatanumbers[3] = monsterstat[adatk];
                                temdatanumbers[4] = monsterstat[def];
                                temdatanumbers[5] = monsterstat[addef];
                                temdatanumbers[6] = monsterstat[speed];
                                temdatanumbers[7] = monsterstat[crit];
                                temdatanumbers[8] = monsterstat[accy];
                                temdatanumbers[9] = monsterstat[dropkey];
                                temdatanumbers[10] = monsterstat[effectkey];
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
                                temdatanumbers[24]=0;
                                temdatanumbers[25]=0;
                                temdatanumbers[26]=0;
                                temdatanumbers[27]=0;
                                temdatanumbers[28]=0;
                                temdatanumbers[29]=0;
                                temdatanumbers[30]=0;
                                temdatanumbers[31]=0;
                                temdatanumbers[32]=0;
                                temdatanumbers[33]=0;
                                var lv = temdatanumbers[9]+"";
                                lv = lv.substring(1);
                                mdata[2]++;
                                Imgset[1] = monsterpic[foedex];
                                if(hh3funset1[11]==2){
                                    var newrandomfoeII = randomfoe[RandomMax(randomfoe.length)];
                                    var foedexII = monstername.indexOf(newrandomfoeII);
                                    var foedatatableII = 11*foedexII
                                 maxhp = 1+ foedatatableII;
                                 atk = 2+ foedatatableII;
                                 adatk = 3+ foedatatableII;
                                 def = 4+ foedatatableII;
                                 addef = 5+foedatatableII;
                                 speed = 6+ foedatatableII;
                                 crit = 7+ foedatatableII;
                                 accy = 8 + foedatatableII;
                                 dropkey = 9+ foedatatableII;
                                 effectkey = 10+foedatatableII;
                                 temdatanames[7] = monstername[foedexII];
                                temdatanumbers[32] = monsterstat[maxhp];
                                temdatanumbers[33] = monsterstat[maxhp];
                                temdatanumbers[34] = monsterstat[atk];
                                temdatanumbers[35] = monsterstat[adatk];
                                temdatanumbers[36] = monsterstat[def];
                                temdatanumbers[37] = monsterstat[addef];
                                temdatanumbers[38] = monsterstat[speed];
                                temdatanumbers[39] = monsterstat[crit];
                                temdatanumbers[40] = monsterstat[accy];
                                temdatanumbers[41] = monsterstat[dropkey];
                                temdatanumbers[42] = monsterstat[effectkey];
                                temdatanumbers[43] = 0;
                                temdatanumbers[44] = 0;
                                var lvII = temdatanumbers[41]+"";
                                lvII = lvII.substring(1);
                                mdata[2]++;
                                Imgset[2] = monsterpic[foedexII];
                                }
                                User.Metadata= mdata.join("<:>");
                                User.Ary_Imgset = Imgset.join("<:>");
                                User.TemdataNames = temdatanames.join("<:>");
                                User.TemdataNumbers = temdatanumbers.join("<:>");
                                
                                if(hh3funset1[11]!=2){
                                monsterembed.setTitle(":interrobang: You have encountered a "+temdatanames[0]+" Lv."+lv);
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
                                ctx.font="bold 11px Sans";
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
                                else if(hh3funset1[11]==2){
                                    monsterembed.setTitle(":interrobang: You have encountered a "+temdatanames[0]+" Lv."+lv+" and a "+temdatanames[7]+" Lv."+lvII);
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
                                monsterembed.attachFiles(attachment);
                                Account.findOne({
                                    id: User.multid
                                },async(err,UserII)=>{
                                  if(err)console.log(err);
                                  var ImgsetA = UserII.Ary_Imgset.split("<:>");
                                  var rawprofiledataA = UserII.Ary_HH3ProfileData.split("<:>");var profiledataA = [];
                                  for(var index=0; index<rawprofiledataA.length;index++){
                                  profiledataA[index]= Number(rawprofiledataA[index]);}
                                  var temdatanamesA = UserII.TemdataNames.split("<:>");
                                  var rawtemdatanumbersA= UserII.TemdataNumbers.split("<:>");
                                  var temdatanumbersA = [];
                                  for(var index=0; index<rawtemdatanumbersA.length;index++){
                                  temdatanumbersA[index]= Number(rawtemdatanumbersA[index]);
                                };
                                  temdatanumbersA[46]=2;
                                  ImgsetA[1] = Imgset[1];
                                  ImgsetA[2] = Imgset[2];
                                  temdatanamesA = temdatanames;
                                  temdatanumbersA = temdatanumbers;
                                  temdatanumbersA[45] = profiledata[12];
                                  temdatanumbersA[46]=0;
                                  temdatanumbersA[47]=0;
                                  temdatanumbersA[48]=profiledata[15];
                                  temdatanumbersA[49]=0; var herospd = profiledata[12];
                                  temdatanumbersA[50]=0; var herospdII = profiledataA[12];
                                  temdatanumbersA[51]=0; var herospkey = 0;
                                  temdatanumbersA[52]=0; var herospkeyII = 0;
                                  temdatanumbersA[53]=0;
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
                                    if(herospkey==herospkeyII){
                                        var picked = RandomMinMax(1,2);
                                        if(picked==1){herospkey++}
                                       else if(picked==2){herospkeyII++};
                                    }
                                }
                                if(herospkey>herospkeyII){monsterembed.setDescription("`"+User.name+" moves first`"); temdatanumbersA[47]=1; temdatanumbersA[54]=1;}
                                          else { monsterembed.setDescription("`"+UserII.name+" moves first`");temdatanumbersA[47]=2; temdatanumbersA[54]=2;}
                                          temdatanumbersA[57]=0;temdatanumbersA[58]=0;
                                  UserII.Ary_Imgset = ImgsetA.join("<:>");
                                UserII.TemdataNames = temdatanamesA.join("<:>");
                                UserII.TemdataNumbers = temdatanumbersA.join("<:>");  
                                UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
                                UserII.CombatMode=2;
                                UserII.save().catch(err => console.log(err));
                                Account.findOne({
                                    id: User.id
                                },async(err,User)=>{
                                  if(err)console.log(err);
                                  temdatanumbers[45] = profiledataA[12];
                                  temdatanumbers[46] =1;
                                  temdatanumbers[47] = temdatanumbersA[47];
                                  temdatanumbers[53]=0;
                                  temdatanumbers[54] = temdatanumbersA[47];
                                  temdatanumbers[57]=0;temdatanumbers[58]=0;
                                  User.TemdataNumbers = temdatanumbers.join("<:>")
                                  User.TemdataNames = temdatanames.join("<:>");
                                  User.Ary_HH3ProfileData = profiledata.join("<:>");
                                  User.Ary_Imgset = Imgset.join("<:>");
                                  User.CombatMode=2;
                                  User.save().catch(err => console.log(err));
                                })
                                  monsterembed.setImage("attachment://png.png");
                                monsterembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
                                message.channel.send(monsterembed);
                                })
                                }
                                }
                            }
                            else if(User.floor>2&Math.random()<0.99||User.floor<0&Math.random()<Gamedata.sys_spawn_ratedor[1]){
                                hh3funset1[1] =1;
                                dice.setColor("#32BEFE");
                                dice.setTitle(":grey_exclamation: A door near you is emanating light\nDo you wish to open it?\n(you will need a "+Gamedata.sys_item_names[6]+")");
                                dice.setThumbnail("https://i.ibb.co/z77mK0X/door.png");
                                dice.setDescription("To open, command: `-open`\nyou can ignore this.\n"+dice.description);
                                if(User.level>=10&Math.random()<Gamedata.sys_spawn_ratedor[2]){hh3funset1[1] =2;dice.setTitle(":grey_exclamation: A door near you is sealed with skeleton lock\nDo you wish to open it?\n(you will need a "
                                +Gamedata.sys_item_names[7]+" or 36x "+Gamedata.sys_item_names[6]+" )");
                                dice.setThumbnail("https://i.ibb.co/whtnLZL/lock-door.png");dice.setDescription("To open, command: `-open`\nyou can ignore this.\n"+dice.description);}
                                User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                            }
                        }
                        if(arg == ""&User.floor>=2&User.step>=halfloor&hh3funset1[8]==0){
                            dice.setTitle(":triangular_flag_on_post: Floor "+User.floor+" Check Point!\nHP recovered 50%");
                            var heal = Math.round(User.MaxHP/2);
                            User.HP+=heal;
                             if(User.HP>User.MaxHP){
                                User.HP=User.MaxHP;
                            }
                            hh3funset1[8]=1;
                            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                        }
                        if(client.user.id!=message.author.id&User.floor>1||client.user.id!=message.author.id&User.floor<0) message.channel.send(dice).then((message)=>{message.react('🎲');
                        function sample(){
                        const filter = (reaction, user) => {
                         return ['🎲'].includes(reaction.emoji.name) && user.id === User.id;
                     };
                        message.awaitReactions(filter, { max: 1})
                     .then((collected) => {
                         const reaction = collected.first();
                         if (reaction.emoji.name === '🎲') {
                            message.reactions.resolve('🎲').users.remove(User.id);
                             roll(message);
                         } 
                     })
                 }
                     sample();
                 });
                 else if(User.floor>1||User.floor<0) message.edit(dice).then((message)=>{message.react('🎲');
                 function sample(){
                 const filter = (reaction, user) => {
                  return ['🎲'].includes(reaction.emoji.name) && user.id === User.id;
              };
                 message.awaitReactions(filter, { max: 1})
              .then((collected) => {
                  const reaction = collected.first();
                  if (reaction.emoji.name === '🎲') {
                     message.reactions.resolve('🎲').users.remove(User.id);
                      roll(message);
                  } 
              })
          }
              sample();
          });
                    if(hh3funset1[6]>0){hh3funset1[6]=0;hh3funset1[7]=0;User.Ary_HH3FunctionSet1=hh3funset1.join("<:>");}
                    User.Metadata = mdata.join("<:>");
            }
            Account.findOne({
                id: User.id
            },async(err,User)=>{User.save().catch(err => console.log(err));});
        }
        roll(message);
        }
        else{message.channel.send(embed.setColor("#F8FF00").setDescription(":x: Your Turn hasn't started yet\nTo Start your turn, command: `-myturn`"))}}
        else{message.channel.send(embed.setColor("#F8FF00").setDescription(":x: You cannot use this command yet.\nPlease start your turn,\nCommand:`-myturn`"));}}
    module.exports.key = {
        name: "roll",
        description: "roll to win."
    }