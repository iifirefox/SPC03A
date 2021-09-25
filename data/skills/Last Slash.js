const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
var venge = (act.HeroHP-act.foeattack)/act.HeroHP;
venge= venge-=act.HeroHP/act.HeroMaxHP;venge=act.attack*venge;
act.attack = Math.round(act.attack+venge);
module.exports.attack = act.attack;
module.exports.herospkey = -1;
}
if(act.foeskillspecial){
    var venge = (act.temdatanumbers[0]-act.attack)/act.temdatanumbers[0];
    venge= venge-=act.temdatanumbers[0]/act.temdatanumbers[1];venge=act.foeattack*venge;
    act.foeattack = Math.round(act.foeattack+venge);
    module.exports.foeattack = act.foeattack;
    module.exports.foespdkey = -2;    
}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];