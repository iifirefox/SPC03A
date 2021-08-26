const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
var oldcritatk = act.heroatkcrit;
if(act.heroatkcrit==0){act.heroatkcrit[0]=1;act.attack=act.skillsetdata4;act.herotxt.replace("but **Missed**","**"+act.attack+"** dmg")}
act.act.temdatanumbers[6] = Math.round(act.temdatanumbers[6]*0.8);
act.hh3funset1[16]=1;
module.exports.temdatanumbers = act.temdatanumbers;
if(oldcritatk==0)module.exports.attack = act.attack;
module.exports.hh3funset1 = act.hh3funset1;
module.exports.herotxt = act.herotxt;
if(oldcritatk==0)module.exports.heroatkcrit = act.heroatkcrit;
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];