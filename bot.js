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
            if(!User){
        const newData =  new Account({
                id: message.author.id,name:message.author.username,server: message.guild.name,
                 Ary_HH3ProfileNames: Gamedata.sys_set_profilenames,Ary_HH3ProfileData: Gamedata.sys_set_profiledata,
                 Profileimg:message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }),
                 currency: Gamedata.sys_set_currency,colortheme: Gamedata.sys_set_colortheme,HP: Gamedata.sys_set_hp,
                 MaxHP: Gamedata.sys_set_hp,Skillenergy:Gamedata.sys_set_skillenergy,Maxskillenergy:Gamedata.sys_set_skillenergymax,
                 exp:Gamedata.sys_set_exp,level:Gamedata.sys_set_level,Upgradepoint:Gamedata.sys_set_upgradepoint,turn:Gamedata.sys_set_turn,
                 expcooldown:Gamedata.sys_set_expcd,fightagaincooldown: Date.now()+Gamedata.sys_set_fightagaincd,hpcooldown:Date.now(),
                energycooldown:Date.now(),CombatMode: Gamedata.sys_set_combat,Lastupdated: Date.now(),
                Metadata: Date.now()+Gamedata.sys_set_metadata
                });
               User= newData;
            }
            if(User.Fightagain!=undefined){
            if(User.Fightagain==0&Date.now()>User.fightagaincooldown){
                User.Fightagain=1;
                User.fightagaincooldown=Date.now()+Gamedata.sys_set_fightagaincd;
            }
            if(User.turn==true&&Date.now()> User.Lastupdated+Gamedata.sys_set_turnendcd){
                User.turn = false;
                User.Lastupdated = Date.now();
            }}
            if(User.Profileimg!=message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 })){User.Profileimg=message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 })}
            const commandname = newmsg.shift();
            const arg = newmsg.join(" ");var samp=User;
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
                    client.commands.get('roll').run(message, arg, User);
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
                    client.commands.get('act').run(message, arg, User);
                    break;
                    case "again":
                    client.commands.get('again').run(message, arg, User);
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
            }
            var oldlv = User.level-1;
            var oldlvexpmax =Math.pow(2,3)*oldlv+60*oldlv;
            var maxexp = Math.pow(2,3)*User.level+60*User.level+oldlvexpmax+User.level*2;
            if(User.exp>maxexp){
                const embed = new Discord.MessageEmbed();
                embed.setColor("#FEFEFE");
                var displaylevel=User.level+1;
                embed.setTitle(User.name+" has level up to "+displaylevel+"! :arrow_up:");
                if(User.level<=10){
                embed.setDescription("+1 Upgrade point\nHP increased +6\nHP and Energy is fully recovered");}
                else{
                    embed.setDescription("+1 Upgrade point\nHP and Energy is fully recovered");
                }
                embed.setFooter("To Upgrade your status, command: -upgrade");
                User.level++;
                User.exp-=maxexp;
                User.Upgradepoint++;
                if(User.level<=10){
                User.MaxHP+=Gamedata.sys_set_hpincrease;}
                User.HP=User.MaxHP;
                if(User.energy)User.energy=Gamedata.sys_set_energy;
                message.channel.send(embed);
            }if(User.id!=samp.id)User = samp;
User.Lastupdated = Date.now();
User.save().catch(err => console.log(err));
        }
        )

    }
})