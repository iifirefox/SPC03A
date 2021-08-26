const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
act.temdatanumbers[12]=0.50; act.temdatanumbers[16]=0.30;
act.herotxt+="\n+50% AddAttack\n +30% incoming dmg";
module.exports.temdatanumbers = act.temdatanumbers;
module.exports.herotxt= act.herotxt;}
if(act.foeskillspecial){
act.temdatanumbers[3]=0.50; act.temdatanumbers[5]=0;
act.foetxt+="\n+50% AddAttack\n +30% incoming dmg";
module.exports.temdatanumbers = act.temdatanumbers;
module.exports.herotxt= act.herotxt;
}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];