const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial)module.exports.trueffect = 2;
if(act.foeskillspecial){
    var per = act.foeattack-act.temdatanumbers[2];
    for(var skill=0; skill<2;skill++){
    var count =0;
    if(Math.random()<act.temdatanumbers[7]){
        // critical attack
        var critper = act.temdatanumbers[2]*Gamedata.sys_combat_rates[0];
        count = Math.round(temdatanumbers[2]+critper+per);
    }else {count=act.foeattack}
    act.foetext +="\n"+count+" dmg";
    act.foeattack+=count;}
    module.exports.foeattack = act.foeattack;
    module.exports.foetext = act.foetext;
    module.exports.foeffect = 2;
}