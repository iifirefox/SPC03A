const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
if(act.HeroHP<act.HeroMaxHP){var oldhp = act.HeroHP;
act.heroHP+=act.skillsetdata4;
if(act.HeroHP>act.HeroMaxHP)act.HeroHP=act.HeroMaxHP;
oldhp= act.HeroHP-oldhp;
act.herotxt = act.herotxt+"\n :heart: Recovered +"+oldhp+" HP";
module.exports.HeroHP = act.HeroHP;
}
else{
    act.herotxt= act.herotxt+":x: HP is already fully recovered.";
 }
 module.exports.herotxt = act.herotxt;
}
if(act.foeskillspecial){
    if(act.temdatanumbers[0]<act.temdatanumbers[1]){var oldhp = act.temdatanumbers[0];
        act.temdatanumbers[0]+=52;
        if(act.temdatanumbers[0]>act.temdatanumbers[1])act.temdatanumbers[0]=act.temdatanumbers[1];
        oldhp= act.temdatanumbers[0]-oldhp;
        act.foetxt = act.foetxt+"\n :heart: Recovered +"+oldhp+" HP";
        module.exports.HeroHP = act.HeroHP;
        }
        else{
            act.herotxt= act.herotxt+":x: HP is already fully recovered.";
         }
         module.exports.temdatanumbers = act.temdatanumbers;
}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];