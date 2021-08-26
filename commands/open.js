const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
const Account = require("../data/tree");
const {createCanvas, loadImage} = require('canvas');
module.exports.run = async (message, arg, User) => {
    function RandomMinMax(min,max) {
        return Math.floor(Math.random() * (max+1 - min)) + min;
      }
      function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      const openembed = new Discord.MessageEmbed(); openembed.setColor(User.colortheme);
      if(User.CombatMode==0){
     if(User.TemdataNames||User.TemdataNames=="") var temdatanames = User.TemdataNames.split("<:>");
     else return message.channel.send(openembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
     if(User.Ary_Imgset) var Imgset = User.Ary_Imgset.split("<:>");
     else return message.channel.send(openembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
     if(User.TemdataNumbers||User.TemdataNumbers=="") var rawtemdatanumbers= User.TemdataNumbers.split("<:>");
     else return message.channel.send(openembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
     if(User.Ary_itembagnames) var itembagnames = User.Ary_itembagnames.split("<:>");
     else return message.channel.send(openembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    if(User.Ary_itembagdata){var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index])
    }}else return message.channel.send(openembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
      var temdatanumbers = [];var apply = true;
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index])
      };
      if( User.Ary_HH3FunctionSet1){
      var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      };}else return message.channel.send(openembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
     if(User.Metadata){var rawdata = User.Metadata.split("<:>");var mdata = [];
      for(var index=0; index<rawdata.length;index++){
          mdata[index]= Number(rawdata[index])
      }}else return message.channel.send(openembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
     if(User.Ary_HH3ProfileData){var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index]);
    }}else return message.channel.send(openembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    console.log(Boolean(hh3funset1[1]==1&itembagdata[6]>0)+" hh3set1:"+hh3funset1[1]+" itembag:"+itembagdata[6])
      if(hh3funset1[1]==1&itembagdata[6]>0){
          itembagdata[6]--;
    User.Ary_itembagdata = itembagdata.join("<:>");
    var whitemark ='✅';
    var crossmark ='❎';
            var stepamount = 0;
            var floorlimit =0;
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
          else if(User.floor<0){
              stepamount=100;
              halfloor = 50;
          }
            else {
                stepamount = 60;
                halfloor = 30;
            }
            var newfix=0;
            if(User.floor<0)newfix= User.floor*-1;
            else newfix = User.floor-1;
            var floormax =stepamount*newfix;
    if(User.floor >=3){
        if(Math.random()<Gamedata.sys_spawnrate_door[0]&User.step<floormax-halfloor){
            var adfoot = RandomMinMax(12,29);
            
            floorlimit = floormax-6;
            var userstep =User.step += adfoot;
            var track = adfoot;
            if(userstep>floorlimit){
                userstep=floorlimit;
                track = adfoot+userstep -floorlimit;
                track = adfoot - track;
            }
            apply=false;
            openembed.setColor("#00FFF9");
            openembed.setTitle(":door: Lucky! you found a short cut.\n do you want to go up +"+track+"?");
            openembed.setDescription("to take it, react: :white_check_mark:\ncommand roll to cancel and continue.");
            message.channel.send( openembed ).then(function(message){message.react(whitemark)
                const filter = (reaction, theuser) => {
                    return [whitemark].includes(reaction.emoji.name) && theuser.id === User.id
                };
                message.awaitReactions(filter, { max: 1}).then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === whitemark) {
                        User.step+=track;
                        message.edit(openembed.setTitle(":door: You took the shortcut\n+"+track+" steps").setDescription(""))
                    }
                })
            })
        }
        else if(Math.random()<Gamedata.sys_spawnrate_door[1]){
            openembed.setColor("AQUA");
            openembed.setTitle("Undead Witch");
            openembed.setImage(Gamedata.NPC_Witch);
            var chance;
            if(Math.random()<0.69)chance=true;
            if(chance){
                 if(Math.random()<0.59){
                    openembed.setDescription("The Witch welcome's you to rest and gave you `Skeleton Key`"+
                    "\nYour Spawn Point has been set\nYou got a `Skeleton Key`!\ncommand:`roll`");
                    hh3funset1[11]=User.step;hh3funset1[13]=1;
                    var getdex = Gamedata.sys_item_names.indexOf("Skeleton Key");
                    if(!itembagnames[getdex]){itembagnames[getdex]=Gamedata.sys_item_names[getdex];User.Ary_itembagnames=itembagnames.join("<:>");}
                    itembagdata[getdex]++;
                    User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                    User.Ary_itembagdata = itembagdata.join("<:>");
                }
                else if(Math.random()<0.32){
                    openembed.setDescription("The Witch gave you a `Skeleton Key`\ncommand:`roll`"+
                    "\nYou got a `Skeleton Key`!");
                    var getdex = Gamedata.sys_item_names.indexOf("Skeleton Key");
                    if(!itembagnames[getdex]){itembagnames[getdex]=Gamedata.sys_item_names[getdex];User.Ary_itembagnames=itembagnames.join("<:>");}
                    itembagdata[getdex]++;
                    User.Ary_itembagdata = itembagdata.join("<:>");
                }
                else openembed.setDescription("she stares at you for few seconds then disappears\ncommand:`roll`");
            }
            else{
                openembed.setDescription("There is a deadly aura coming from the witch\n you fled from her\n-35 Energy\ncommand:`roll`");
                User.energy-=35;
                if(User.energy<0)User.energy=0;
            }
        }
        else{
            openembed.setColor("#006BFF");
            openembed.setTitle(":door: Seems like nothing in here");
        }
        hh3funset1[1]=0;
            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
    }if(apply==true) message.channel.send( openembed );
        }
        else if(hh3funset1[1]==2&(itembagdata[7]>0||itembagdata[6]>=36)){
            if(itembagdata[7]>0)itembagdata[7]--;
            else if(itembagdata[6]>=36)itembagdata[6]-=36;
            User.Ary_itembagdata = itembagdata.join("<:>");
            hh3funset1[1]=0;
            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
            var monster = Gamedata.sys_monsternames_special[RandomMax(Gamedata.sys_monsternames_special.length)];
            var monsterdex =Gamedata.sys_monsternames_special.indexOf(monster);
            var bossskills = Gamedata.sys_monsterspecial_skillname;
            var table = 11*monsterdex;
            var table2 = table+1;
            var table3 = table+2;
            var table4 = table+3;
            var table5 = table+4;
            var table6 = table+5;
            var table7 = table+6;
            var table8 = table+7;
            var table9 = table+8;
            var table10 = table+9;
            var table11 = table+10;
            var skillset = 4*monsterdex;
            var skillset2 = skillset+1;
            var skillset3 = skillset+2;
            var skillset4 = skillset+3;
            temdatanames[0]= Gamedata.sys_monsternames_special[monsterdex];
            temdatanames[1] = bossskills[skillset];
            temdatanames[2] = bossskills[skillset2];
            temdatanames[3] = bossskills[skillset3];
            temdatanames[4] = bossskills[skillset4];
            temdatanumbers[0]= Gamedata.sys_monsterspecial_state[table2];
            temdatanumbers[1]= Gamedata.sys_monsterspecial_state[table2];
            temdatanumbers[2]= Gamedata.sys_monsterspecial_state[table3];
            temdatanumbers[3]= Gamedata.sys_monsterspecial_state[table4];
            temdatanumbers[4]= Gamedata.sys_monsterspecial_state[table5];
            temdatanumbers[5]= Gamedata.sys_monsterspecial_state[table6];
            temdatanumbers[6]= Gamedata.sys_monsterspecial_state[table7];
            temdatanumbers[7]= Gamedata.sys_monsterspecial_state[table8];
            temdatanumbers[8]= Gamedata.sys_monsterspecial_state[table9];
            temdatanumbers[9]= Gamedata.sys_monsterspecial_state[table10];
            temdatanumbers[10]= Gamedata.sys_monsterspecial_state[table11];
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
           temdatanumbers[1]=Math.round(temdatanumbers[1]+(User.level*(temdatanumbers[1]*0.78)))
           temdatanumbers[0]=temdatanumbers[1];
           temdatanumbers[3]= temdatanumbers[3]+(User.level*0.11);
           temdatanumbers[5] = temdatanumbers[5]+(User.level*0.03);
            mdata[2]++;
            Imgset[1] = Gamedata.sys_monsterpic_special[monsterdex];
            User.Metadata= mdata.join("<:>");
            User.Ary_Imgset = Imgset.join("<:>");
            User.TemdataNames = temdatanames.join("<:>");
            User.TemdataNumbers = temdatanumbers.join("<:>");
            User.CombatMode=1;
            openembed.setTitle(":interrobang: You have encountered "+temdatanames[0]);
            if(hh3funset1[11]!=2) openembed.setDescription("Boss Lv "+User.level);
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
              openembed.attachFiles(attachment);
              openembed.setImage("attachment://png.png");
              openembed.addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`");
             if(hh3funset1[11]!=2) message.channel.send(openembed);
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
                profiledataA[19]=2;
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
              };
              if(herospkey>herospkeyII){openembed.setDescription("Boss Lv"+User.level+"\n`"+User.name+" moves first`"); profiledataA[20]=1; temdatanumbersA[54]=1;}
                        else { openembed.setDescription("Boss Lv"+User.level+"\n`"+UserII.name+" moves first`");profiledataA[20]=2; temdatanumbersA[54]=2;}
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
                temdatanumbers[46] =0;
                temdatanumbers[47] =0;
                temdatanumbers[48]=0;
                temdatanumbers[49]=0;
                temdatanumbers[50]=0;
                temdatanumbers[51]=0;
                temdatanumbers[52]=0;
                temdatanumbers[53]=0;
                profiledata[19]=1;
                profiledata[20] = profiledataA[20];
                temdatanumbers[54] = profiledataA[20];
                temdatanumbers[57]=0;temdatanumbers[58]=0;
                User.TemdataNames = temdatanames.join("<:>");
                User.TemdataNumbers = temdatanumbers.join("<:>")
                User.Ary_HH3ProfileData = profiledata.join("<:>");
                User.CombatMode=2;
                User.save().catch(err => console.log(err));
              })
              message.channel.send(openembed);
              })
             }
        }
        else if(hh3funset1[1]==2&(!itembagdata[7]||itembagdata[6]<36)||hh3funset1[1]==1&itembagdata[6]<1){hh3funset1[1]=0; User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");return message.channel.send(openembed.setDescription(":x: Not enough keys\ncommand:`roll`"));}
        else {hh3funset1[1]=0; User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>"); return message.channel.send(openembed.setDescription(":x: There was no Door found\ncommand:`roll`"));}}
        else return message.channel.send(openembed.setDescription(":x: you are in combat"));
}
module.exports.key = {
    name: "open",
    description: "open the door of mystery."
}