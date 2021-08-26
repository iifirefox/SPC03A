const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
act.skillsetdata5 = 1;
module.exports.skillsetdata5 = act.skillsetdata5;
module.exports.skilleffectkey = true;}
if(act.foeskillspecial){
    var plant =Math.round(act.HeroHP*0.32);
    act.temdatanumbers[0]+=plant;
    if(act.temdatanumbers[0]>act.temdatanumbers[1])act.temdatanumbers[0]=act.temdatanumbers[1]
    act.HeroHP-=plant
    if(act.HeroHP<0)act.HeroHP=0;
    module.exports.HeroHP = act.HeroHP;
    module.exports.temdatanumbers = act.temdatanumbers;
}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];