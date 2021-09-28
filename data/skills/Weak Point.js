const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial&act.skillsetdata5!=1){
act.temdatanum3 -0.10;
act.temdatanum6 -0.10;
act.herotxt = act.herotxt+="\n Foe's AddAtk and Speed decrease by 10%";
act.skillsetdata[5]=1;
module.exports.temdatanumbers = act.temdatanumbers;
module.exports.skillsetdata = act.skillsetdata;
module.exports.herotxt = act.herotxt;
}
if(act.foeskillspecial){
    act.temdatanumbers[12] - 0.10;
    if(act.temdatanumbers[12]<0)act.temdatanumbers[12]=0;
    act.temdatanumbers[15] + 0.10;
    act.foetxt = act.foetxt+="\n"+act.username+"'s AddAtk and Speed decrease by 10%";
    module.exports.foetxt = act.foetxt;
}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];