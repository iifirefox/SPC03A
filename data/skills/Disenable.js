const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
act.temdatanumbers[27]=3;
if(act.foeatkey==true){act.foetxt = act.temdatanames[0]+"'s Skill was disabled";act.foeatkey=false;
module.exports.foeatkey = act.foeatkey;module.exports.foetxt = act.foetxt;
}
module.exports.temdatanumbers = temdatanumbers;
}
if(act.foeskillspecial){
    act.temdatanumbers[28]=3;
    if(act.skillspecial==true){act.herotxt = act.username+"'s Skill was disabled";act.foeatkey=false;
    module.exports.foeatkey = act.foeatkey;module.exports.herotxt = act.herotxt;
    }
    module.exports.temdatanumbers = temdatanumbers;
}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];