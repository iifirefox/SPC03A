const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
if(act.temdatanumbers[12]<0.30){
    act.temdatanumbers[12] += act.skillsetdata4;
    act.temdatanumbers[16] += act.skillsetdata5;
    displayper=Math.round(act.skillsetdata4*100);
    displayper2=Math.round(act.skillsetdata5*100);
    act.herotxt = act.herotxt+"\n Your AddAtk has increase +"+displayper+"%\n but your def decrease by "+displayper2+"%";
    module.exports.temdatanumbers = act.temdatanumbers;
    }
    else{
        act.herotxt= act.herotxt+":x: Your AddAtk cannot increase anymore.";
     }
     module.exports.herotxt = act.herotxt;
    }
    if(act.foeskillspecial){
        if(act.temdatanumbers[2]<0.30){
            var per = 0.06;
            act.temdatanumbers[2] += per;
            act.temdatanumbers[5] += per;
            displayper=Math.round(per*100);
            displayper2=Math.round(per*100);
            act.foetxt = act.foetxt+"\n Atk% has increase +"+displayper+"%\n but your def decrease by "+displayper2+"%";
        module.exports.act.temdatanumbers = act.temdatanumbers;
        }
        else{
            act.foetxt= act.foetxt+":x: Your Speed cannot increase anymore.";
         }
         module.exports.foetxt = act.foetxt;}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];