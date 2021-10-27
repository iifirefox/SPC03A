const Discord = require('discord.js');
const fs = require('fs');
const mongoose = require('mongoose');
const Account = require("./data/tree");
const Gamedata = require('./data/hh3data.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const jstring = require('./bot.json');
client.login(process.env.token);
mongoose.connect(jstring.mongo,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const prefix = jstring.prefix;
const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandfiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.key.name, command);
}
client.once('ready', () => {
    console.log("connected as " + client.user.tag);
    const Guilds = client.guilds.cache.map(guild => guild.name);
    console.log("connected to"+Guilds)
    client.user.setActivity("Command: -help");
})
client.on('message', message => {
    if(message.content.includes("<:>"))return message.channel.send(":x: prohibited symbol");
    const newmsg = message.content.substring(prefix.length).split(" ");
    Account.findOne({
        id:message.author.id
    },(err,updateuser)=>{
        if(err)console.log(err);
        if(updateuser){
            if(Date.now()>updateuser.expcooldown){
            updateuser.exp++;
            if(updateuser.name!=message.author.username)updateuser.name = message.author.username;
            if(updateuser.server!=message.guild.name)updateuser.server = message.guild.name;
            updateuser.expcooldown = Date.now()+Gamedata.sys_set_expcdnew;
            if(updateuser.Profileimg!=message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
            {updateuser.Profileimg=message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 })}
            updateuser.save().catch(err => console.log(err));
        }
        }
    })
    if (message.content.startsWith(prefix) & message.author.id != client.id &!message.content.includes("<:>") ) {
        Account.find({server:message.guild.name},(err,serverusers)=>{
            if(err)console.log(err);
            if(serverusers){
                for(var index = 0; index<serverusers.length;index++){
                Account.findOne({
                    id:serverusers[index].id
                },(err,theuser)=>{
                    if(err)console.log(err);
                    if(theuser){
                        var hasmodified = false;
                        if(theuser.HP<theuser.MaxHP&Date.now()>theuser.hpcooldown){
                            hasmodified = true;
                            var times =Date.now();
                            times =times-=theuser.hpcooldown;
                            times = times/Gamedata.sys_set_hpcd;
                            times = Math.round(times);
                            if(times>theuser.MaxHP) times = theuser.MaxHP;
                            theuser.HP+=times;
                            if(theuser.HP>theuser.MaxHP) theuser.HP=theuser.MaxHP;
                            if(times>0)theuser.hpcooldown = Date.now()+Gamedata.sys_set_hpcd
                        }
                        if(theuser.energy!=undefined&&theuser.energy<theuser.Maxenergy&Date.now()>theuser.energycooldown){
                            hasmodified = true;
                            var times =Date.now();
                            times =times-=theuser.energycooldown;
                            times = times/Gamedata.sys_set_energycd;
                            times = Math.round(times);
                            if(times>theuser.Maxenergy) times = theuser.Maxenergy;
                            else if(times==0)times+=10;
                            else{times=times*10}
                            theuser.energy+=times;
                            if(theuser.energy>theuser.Maxenergy) theuser.energy=theuser.Maxenergy;
                            theuser.energycooldown = Date.now()+Gamedata.sys_set_energycd;
                        }
                        if(hasmodified==true){
                        theuser.Lastupdated = Date.now();
                        theuser.save().catch(err => console.log(err));}
                    }
                })
            }
            }
        })
        Account.findOne({
            id: message.author.id
        },(err, User) =>{
            if(err) console.log(err);
            if(!User){module.exports.message = message;
                var register = require(Gamedata.sys_register_path);
               User= register.Account;
               var rpath = require.resolve(Gamedata.sys_register_path);delete require.cache[rpath];
            }
            //if(User.server!="Hai"&User.id!="265733605077155851"||User.server=="L0Ii"&User.id!="265733605077155851") return;
            var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
            for(var index=0; index<rawprofiledata.length;index++){
                profiledata[index]= Number(rawprofiledata[index])
            }
            if(User.accountver==undefined)User.accountver =Gamedata.accountupdate;
            if(User.multi==undefined|| User.id==207279179241226244&profiledata[16]==0.01||User.name=="Lite of the Moon"&profiledata[16]==10){
                User.multi=false;
                var profilenames = User.Ary_HH3ProfileNames.split("<:>");
                var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
                for(var index=0; index<rawprofiledata.length;index++){
                    profiledata[index]= Number(rawprofiledata[index])
                }
                profiledata[12]=0.20;
                profiledata[16]=0;
                profiledata[17]=0;
                profiledata[18]=0;
                profiledata[19]=0;
                profiledata[20]=0;
                User.Ary_HH3ProfileData = profiledata.join("<:>");
                User.MaxHP=100;
                User.HP=User.MaxHP;
                User.Upgradepoint= User.level
                if(!User.multid)User.multid="";
                if(!User.multiname)User.multiname="";
                if(User.energy){
            var getindex;
            if(profiledata[3]==1) getindex = Gamedata.sys_sword_names.indexOf(profilenames[1]);
           else if(profiledata[3]==2) getindex = Gamedata.sys_wand_names.indexOf(profilenames[1]);
           else if(profiledata[3]==3) getindex = Gamedata.sys_bow_names.indexOf(profilenames[1]);
            if(getindex!=-1){
                getindex = getindex*3;
                if(profiledata[3]==1){
                profiledata[4]= Gamedata.sys_sword_dataset[getindex];
                profiledata[5]= Gamedata.sys_sword_dataset[getindex+1];
                profiledata[7]= Gamedata.sys_sword_dataset[getindex+2];
            }
           else if(profiledata[3]==2){
                profiledata[4]= Gamedata.sys_wand_dataset[getindex];
                profiledata[5]= Gamedata.sys_wand_dataset[getindex+1];
                profiledata[7]= Gamedata.sys_wand_dataset[getindex+2];
            }
           else if(profiledata[3]==3){
                profiledata[4]= Gamedata.sys_bow_dataset[getindex];
                profiledata[5]= Gamedata.sys_bow_dataset[getindex+1];
                profiledata[7]= Gamedata.sys_bow_dataset[getindex+2];
            }
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            }
                User.Ary_Crystalnames = "<:><:><:><:><:><:><:><:><:>";
                User.Ary_Crystaldata = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
                User.Ary_skills = "Force Attack<:>empty<:>empty<:>empty";
                User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
                User.skillslearned = "Force Attack<:>Slash<:>Charge<:>Mega Slash<:>Blast<:>Focus<:>Focus Blast<:>Fire<:>Swift<:>All Fire";}
            }
            if(User.Fightagain!=undefined){
            if(User.Fightagain==0&Date.now()>User.fightagaincooldown){
                User.Fightagain=1;
                User.fightagaincooldown=Date.now()+Gamedata.sys_set_fightagaincd;
            }
            if((User.turn==true||User.CombatMode>0)&&Date.now()> User.Lastupdated+Gamedata.sys_set_turnendcd){
                User.turn = false;
                if(User.CombatMode=1){
                   var newfix = User.floor-1;
                   var oldfix = User.floor-2;
                   if(User.floor<0){newfix= User.floor*-1;oldfix =newfix-1}
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
                   var floormax =stepamount*newfix;
                   var oldfloormx = stepamount*oldfix;
                   halfloor = floormax-halfloor;
                   if(User.step>halfloor&User.step < halfloor+6){
                       User.step= halfloor;
                   }
                  else if(User.floor>2&User.step<oldfloormx+7){
                       User.step=oldfloormx+1;
                   }
                  else if(User.floor==2& User.step<16){
                       User.step=10;
                   }
                   else if(User.floor>=2){
                       User.step-=6;
                   }
                }
                if(User.multi==true){
                    User.multi=false;
                    User.multid="";
                    User.multiname="";
                }
                User.TemdataNames = "";
                User.TemdataNumbers = "";
                User.CombatMode=0;
            }
            User.Lastupdated = Date.now();
        }
            const commandname = newmsg.shift();const arg = newmsg.join(" ");var samp=User;
            if(User.name!=message.author.username)User.name = message.author.username;
            if(User.server!=message.guild.name)User.server = message.guild.name;
            switch (commandname) {
                case "name":
                    client.commands.get('name').run(message,arg, User);
                    break;
                case "help":
                    client.commands.get('help').run(client, message, arg);
                    break;
                case "play":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                case "stop":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                case "skip":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                case "vol":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                case "playing":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg,commandname ,User,client);
                    break;
                case "playlist":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                case "pause":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                case "loop":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                case "unloop":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                case "disconnect":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                    case "p":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                    case ("fav"||"favorite"):
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname ,User,client);
                    break;
                case "stat":
                    client.commands.get('stat').run( message, arg, User);
                    break;
                case "color":
                    client.commands.get('color').run(message, arg, User);
                    break;
                case "dice":
                    client.commands.get('dice').run(message);
                    break;
                case "fate":
                    client.commands.get('fate').run(message, arg);
                    break;
                case "animehunt":
                    client.commands.get('animehunt').run(message, arg, User);
                    break;
                    case "myturn":
                    client.commands.get('myturn').run(message, arg, User);
                    break;
                    case "roll":
                    client.commands.get('roll').run(message, arg, User, client);
                    break;
                    case "check":
                    client.commands.get('check').run(message, arg, User);
                    break;
                    case "equip":
                    client.commands.get('equip').run(message, arg, User);
                    break;
                    case "unequip":
                    client.commands.get('unequip').run(message, arg, User);
                    break;
                    case "discard":
                    client.commands.get('discard').run(message, arg, User);
                    break;
                    case "shop":
                    client.commands.get('shop').run(message, arg, User);
                    break;
                    case "buy":
                    client.commands.get('buy').run(message, arg, User);
                    break;
                    case "sell":
                    client.commands.get('sell').run(message, arg, User);
                    break;
                    case "craft":
                    client.commands.get('craft').run(message, arg, User);
                    break;
                    case "brew":
                    client.commands.get('brew').run(message, arg, User);
                    break;
                    case "repair":
                    client.commands.get('repair').run(message, arg, User);
                    break;
                    case "items":
                    client.commands.get('items').run(message, arg, User);
                    break;
                    case "act":
                    switch(User.CombatMode){case true,2:client.commands.get('act_multi').run(message, arg, User);break;
                    case 3:client.commands.get('act_pvp').run(message, arg, User);break;
                    default: client.commands.get('act').run(message, arg, User);break; };
                    break;
                    case "open":
                    client.commands.get('open').run(message, arg, User);
                    break;
                    case "upgrade":
                    client.commands.get('upgrade').run(message, arg, User);
                    break;
                    case "skill":
                    client.commands.get('skill').run(message, arg, User);
                    break;
                    case "statistic":
                    client.commands.get('statistic').run(message, arg, User);
                    break;
                    case "floor":
                    client.commands.get('floor').run(message, arg, User);
                    break;
                    case "restart":
                    client.commands.get('restart').run(message, arg, User);
                    break;
                    case "daily":
                    client.commands.get('daily').run(message, arg, User);
                    break;
                    case "give":
                    client.commands.get('give').run(message, arg, User);
                    break;
                    case "crystal":
                    client.commands.get('crystal').run(message, arg, User);
                    break;
                    case "pvp":
                    client.commands.get('pvp').run(message, arg, User);
                    break;
                    case "disband":
                    client.commands.get('disband').run(message, arg, User);
                    break;
                    case "spc":
                    client.commands.get('spc').run(message, arg, User,client);
                    break;
                    case "fighthelp":
                    client.commands.get('fighthelp').run(message, arg, User);
                    break;
                    
            }
            var oldlv = User.level-1;
            var oldlvexpmax =Math.pow(2,3)*oldlv+60*oldlv;
            var maxexp = Math.pow(2,3)*User.level+60*User.level+oldlvexpmax+User.level*2;
            if(User.exp>maxexp&User.CombatMode<2){
                const embed = new Discord.MessageEmbed();
                embed.setColor("#FEFEFE");
                var displaylevel=User.level+1;
                embed.setTitle(User.name+" has level up to "+displaylevel+"! :arrow_up:");
                embed.setDescription("+1 Upgrade point\nHP and Energy is fully recovered");
                embed.setFooter("To Upgrade your status, command: -upgrade");
                User.level++;
                User.exp-=maxexp;
                User.Upgradepoint++;
                User.HP=User.MaxHP;
                if(User.energy)User.energy=Gamedata.sys_set_energy;
                if(User.skillslearned){
                if(User.level==3||User.level==6||User.level==10){
                    var skillslearned = User.skillslearned.split(Gamedata.key);
                    if(User.level==3){
                        skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[15];
                        skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[16];
                        skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[17];
                        embed.addField(":ledger: You have Learned\n`"+Gamedata.sys_heronoskills[15]+
                        "`!\n`"+Gamedata.sys_heronoskills[16]+"`!\n`"+Gamedata.sys_heronoskills[17]+"`!","command: `skill index` for full decription")
                    }
                   else if(User.level==6){
                        skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[24];
                        skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[25];
                if(!skillslearned.includes(Gamedata.sys_heronoskills[26]))skillslearned[skillslearned.length+2]=Gamedata.sys_heronoskills[26];
                embed.addField(":ledger: You have Learned\n`"+Gamedata.sys_heronoskills[24]+
                "`!\n`"+Gamedata.sys_heronoskills[25]+"`!\n`"+Gamedata.sys_heronoskills[26]+"`!","command: `skill index` for full decription")
                    }else if(User.level==10){
                        skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[27];
                        skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[28];
                        skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[23];
                        embed.addField(":ledger: You have Learned\n`"+Gamedata.sys_heronoskills[27]+
                        "`!\n`"+Gamedata.sys_heronoskills[28]+"`!\n`"+Gamedata.sys_heronoskills[23]+"`!","command: `skill index` for full decription")
                    }
                    User.skillslearned = skillslearned.join(Gamedata.key);
                }}
                message.channel.send(embed);
            }
User.Lastupdated = Date.now();var savekey= true;if(User.multid!=""&User.CombatMode<2) savekey=false;
if(User.id==samp.id&savekey==true)User.save().catch(err => console.log(err));
        }
        );
    }
})