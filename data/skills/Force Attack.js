const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
var oldmg = act.attack;
if(act.heroatkcrit[0]!=0){act.attack=act.skillsetdata4;
act.herotxt.replace(oldmg,act.attack);
module.exports.attack = act.attack;
module.exports.herotxt = act.herotxt;}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];