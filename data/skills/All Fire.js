const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.foeskillspecial)module.exports.trueffect = 2;
if(act.foeskillspecial){
    act.foetext ="\n"+foeattack+" dmg";
    act.foetext ="\n"+foeattack+" dmg";
    act.foeattack*3;
    module.exports.foeattack = act.foeattack;
    module.exports.foetext = act.foetext;
    module.exports.foeffect = 2;
}