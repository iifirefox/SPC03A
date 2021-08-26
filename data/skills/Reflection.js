const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
if(act.foeatkcrit!=0){
act.herospkey = -1;
if(act.heroatkcrit[0]==0){act.herotxt = act.herotxt.replace("missed",act.attack+" dmg");module.exports.herotxt = act.herotxt;}
var oldfoeatk = act.foeattack;
var oldheroatk = act.attack;
act.foeattack = Math.round(act.foeattack/2);
act.attack = act.foeattack;
act.foetxt.replace(oldfoeatk,act.foeattack);
herotxt.replace(oldheroatk,act.attack);
module.exports.foeattack = act.foeattack;
module.exports.attack = act.foeattack;
module.exports.herospkey = act.herospkey;}
else{act.herotxt.replace(act.attack+" dmg","missed");act.attack=0;module.exports.herotxt = act.herotxt;module.exports.attack = act.attack;}
}
if(act.foeskillspecial){
    if(act.heroatkcrit[0]!=0){
    act.foespkey = -1;
    if(act.foeatkcrit==0){act.foetxt = act.foetxt.replace("missed",act.foeattack+" dmg");module.exports.foetxt = act.foetxt;}
    var oldatk = act.attack;
    var oldfoeatk = act.foeattack;
    act.attack = Math.round(act.attack/2);
    act.foeattack = act.attack;
    act.herotxt.replace(oldatk,act.attack);
    foetxt.replace(oldfoeatk,act.foeattack);
    module.exports.attack = act.attack;
    module.exports.foeattack = act.attack;
    module.exports.foespkey = act.foespkey;}
    else{act.foetxt.replace(act.foeattack+" dmg","missed");act.foeattack=0;module.exports.foetxt = act.foetxt;module.exports.foeattack = act.foeattack;}
    }
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];