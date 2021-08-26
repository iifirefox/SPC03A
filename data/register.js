const Account = require('./tree');
const Gamedata = require('./hh3data.json');
const bot = require('../bot');
module.exports. Account =new Account({
    id: bot.message.author.id,name:bot.message.author.username,server: bot.message.guild.name,
    Profileimg:bot.message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }),
    colortheme: Gamedata.sys_set_colortheme,HP: Gamedata.sys_set_hp,MaxHP: Gamedata.sys_set_hp,
    turn:Gamedata.sys_set_turn,multi: Gamedata.sys_set_multi,multid:Gamedata.sys_set_multid, multiname:Gamedata.sys_set_multiname,
    currency: Gamedata.sys_set_currency,Ary_HH3ProfileNames: Gamedata.sys_set_profilenames,
    Ary_HH3ProfileData: Gamedata.sys_set_profiledata,Skillenergy:Gamedata.sys_set_skillenergy,Maxskillenergy:Gamedata.sys_set_skillenergymax,
     exp:Gamedata.sys_set_exp,level:Gamedata.sys_set_level,Upgradepoint:Gamedata.sys_set_upgradepoint,
     expcooldown:Gamedata.sys_set_expcd,fightagaincooldown: Date.now()+Gamedata.sys_set_fightagaincd,hpcooldown:Date.now(),
    energycooldown:Date.now(),CombatMode: Gamedata.sys_set_combat,accountver:Gamedata.accountupdate,Lastupdated: Date.now(),
    Metadata: Date.now()+Gamedata.sys_set_metadata
    });