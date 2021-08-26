const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
if(act.skillsetdata5!=1){
act.temdatanumbers[3] -0.06;
act.temdatanumbers[5] -0.06;
act.temdatanumbers[6] -0.06;
act.temdatanumbers[7] -0.06;
act.herotxt = act.herotxt+="\n Foe's AddAtk, AddDef, Speed and Critical Rate decrease by 6%";
module.exports.skilleffectkey = true;
module.exports.temdatanumbers = act.temdatanumbers;
module.exports.skillsetdata5 = 1;
}
else{
    act.herotxt = act.herotxt+="\n :x: This skill is in effect"
}}
if(act.foeskillspecial){
if(act.temdatanumbers[12])act.temdatanumbers[12] -0.06;
if(act.temdatanumbers[17])act.temdatanumbers[17] -0.06;
if(act.temdatanumbers[15])act.temdatanumbers[15] -0.06;
act.temdatanumbers[7] -0.06;
act.foetxt = act.foetxt+="\n Foe's AddAtk, AddDef, Speed by 6%";
}
module.exports.herotxt = act.herotxt;
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];