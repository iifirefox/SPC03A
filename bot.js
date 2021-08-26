const Discord = require('discord.js');
const fs = require('fs');
const mongoose = require('mongoose');
const Account = require("./data/tree");
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
    client.user.setActivity("RPG 24/7");
})
client.on('message', message => {
    const newmsg = message.content.substring(prefix.length).split(" ");
    Account.findOne({
        id:message.author.id
    },(err,updateuser)=>{
        if(err)console.log(err);
        if(updateuser){
            if(Date.now()>updateuser.expcooldown){
            updateuser.exp++;
            updateuser.expcooldown = Date.now()+120000;
            updateuser.save().catch(err => console.log(err));
        }
        }
    })
    if (message.content.startsWith(prefix) & message.author.id != client.id ) {
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
                            times = times/120000;
                            times = Math.round(times);
                            if(times>theuser.MaxHP) times = theuser.MaxHP;
                            theuser.HP+=times;
                            if(theuser.HP>theuser.MaxHP) theuser.HP=theuser.MaxHP;
                            if(times>0)theuser.hpcooldown = Date.now()+120000
                        }
                        if(theuser.energy&&theuser.energy<theuser.Maxenergy&Date.now()>theuser.energycooldown){
                            hasmodified = true;
                            var times =Date.now();
                            times =times-=theuser.energycooldown;
                            times = times/3600000;
                            times = Math.round(times);
                            if(times>theuser.Maxenergy) times = theuser.Maxenergy;
                            else if(times==0)times+=10;
                            else{times*10}
                            theuser.energy+=times;
                            if(theuser.energy>theuser.Maxenergy) theuser.energy=theuser.Maxenergy;
                            theuser.energycooldown = Date.now()+3600000;
                        }
                        if(theuser.fightagain&&theuser.fightagain==0&Date.now()>theuser.fightagaincooldown){
                            hasmodified = true;
                            theuser.fightagain=1;
                            theuser.fightagaincooldown=Date.now()+86400000;
                        }
                        if(theuser.turn==true&&Date.now()> theuser.Lastupdated+10800000){
                            hasmodified = true;
                            theuser.turn = false;
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
                id: message.author.id,
                name:message.author.username,
                server: message.guild.name,
                 Ary_HH3ProfileNames: "<:><:><:><:><:>",
                 Ary_HH3ProfileData: "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0",
                 currency: 0,colortheme: "#001AFF",HP: 20,MaxHP: 20,Skillenergy:0,Maxskillenergy:5,exp:0,level:1,
                Upgradepoint:0,turn:false,expcooldown:0,fightagaincooldown: Date.now()+86400000,hpcooldown:Date.now(),
                energycooldown:Date.now(),CombatMode: 0,Lastupdated: Date.now(),
                Metadata: Date.now()+"<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0"
                });
               User= newData;
            } 
            const commandname = newmsg.shift();
            const arg = newmsg.join(" ");
            if(User.name!=message.author.username)User.name = message.author.username;
            if(User.server!=message.guild.name)User.server = message.guild.name;
            var oldlv = User.level-1;
            var oldlvexpmax =Math.pow(2,3)*oldlv+60*oldlv;
            var maxexp = Math.pow(2,3)*User.level+60*User.level+oldlvexpmax+User.level*2;
            if(User.exp>maxexp){
                const embed = new Discord.MessageEmbed();
                embed.setColor("#FEFEFE");
                embed.setTitle(User.name+" has level up to "+User.level+"! :arrow_up:");
                embed.setDescription("+1 Upgrade point\nHP increased +5\nHP and Energy is fully recovered");
                embed.setFooter("To Upgrade your status, command: -upgrade")
                User.level++;
                User.Upgradepoint++;
                User.MaxHP+=5;
                User.HP=User.MaxHP;
                if(User.energy)User.energy=100;
                message.channel.send(embed);
            }
            switch (commandname) {
                case "name":
                    client.commands.get('name').run(message,arg, User);
                    break;
                case "help":
                    client.commands.get('help').run(client, message, arg);
                    break;
                case "play":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname);
                    break;
                case "stop":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname);
                    break;
                case "skip":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname);
                    break;
                case "vol":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname);
                    break;
                case "playing":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname);
                    break;
                case "playlist":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname);
                    break;
                case "pause":
                    client.commands.get('music(play,stop,skip,volume,pause)').run(message, arg, commandname);
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
            }
User.Lastupdated = Date.now();
User.save().catch(err => console.log(err));
        }
        )

    }
})