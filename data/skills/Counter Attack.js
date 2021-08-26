const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
act.herospkey= -1;
if(act.foeatkcrit==0){act.User.Skllenergy++; if(act.User.Skllenergy>act.User.MaxSkillenergy)act.User.Skllenergy=act.User.MaxSkillenergy}
if(act.profiledata3==1){
    act.foeattack = math.round(act.foeattack/2);
module.exports.foeattack = act.foeattack;
}
if(act.profiledata3==3&Math.random()<.50){
    act.foeatkey = false;
    act.foetxt = act.foetxt.replace(act.foeattack,"but missed");
    act.foetxt = act.foetxt.replace("dmg","");
module.exports.foetxt = act.foetxt;
module.exports.foeatkey = act.foeatkey;
}
module.exports.herospkey = act.herospkey;
}
if(act.foeskillspecial){
    act.foespkey= -1;
    act.attack = math.round(act.attack/2);
    module.exports.foespkey = act.foespkey;
    module.exports.attack = act.attack;}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];