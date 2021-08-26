const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial)module.exports.trueffect = 2;
if(act.foeskillspecial)module.exports.foeffect = 2;
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];