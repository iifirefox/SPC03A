const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
if(act.temdatanumbers[14]<0.30){
    act.temdatanumbers[14] += act.skillsetdata4;
displayper=Math.round(act.skillsetdata4*100);
act.herotxt = act.herotxt+"\n Your Speed has increase +"+displayper+"%";
module.exports.temdatanumbers = act.temdatanumbers;
}
else{
    act.herotxt= act.herotxt+":x: Your Speed cannot increase anymore.";
 }
 module.exports.herotxt = act.herotxt;};
 if(act.foeskillspecial){
    if(act.temdatanumbers[6]<0.30){
        var per = 0.06;
    act.temdatanumbers[6] += per;
    displayper=Math.round(per*100);
    act.foetxt = act.foetxt+"\n Speed has increase +"+displayper+"%";
    module.exports.act.temdatanumbers = act.temdatanumbers;
    }
    else{
        act.foetxt= act.foetxt+":x: Speed cannot increase anymore.";
     }
     module.exports.foetxt = act.foetxt;}
 var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];