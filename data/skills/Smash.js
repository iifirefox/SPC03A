const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.herospkey>act.foespdkey&act.skillspecial&act.foeskillspecial){
if(act.foeatk){act.foeatkey = false;act.foeskillspecial=false};
act.foetxt = act.foetxt.replace(act.foeattack,":no_entry_sign: Skill was Canceled");
act.foetxt = foetxt.replace("dmg","");
if(act.foetxt.includes(":boom: ")) act.foetxt = act.foetxt.replace(":boom: ","");
if(act.foetxt.includes("d *"))act.foetxt = act.foetxt.replace("d *","d*");
module.exports.foeatk = act.foeatk;module.exports.foeskillspecial = act.foeskillspecial;
module.exports.foetxt = act.foetxt;
}
if(act.herospkey<act.foespdkey&act.foeskillspecial){
    act.herotxt = act.herotxt.replace(act.foeattack,":no_entry_sign: Skill was Canceled");
    act.herotxt = herotxt.replace("dmg","");
    if(act.herotxt.includes(":boom: ")) act.foetxt = act.foetxt.replace(":boom: ","");
    if(act.herotxt.includes("d *"))act.foetxt = act.foetxt.replace("d *","d*");
    module.exports.foeatk = act.foeatk;
    module.exports.herotxt = act.herotxt;
}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];