const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
if(!act.heroatkcrit.every(a=>a==0)){
var type = 1;
var defaulthp = Gamedata.sys_monsternames_normal.indexOf(act.temdatanumbers[0]);
if(defaulthp==-1){defaulthp = Gamedata.sys_monsternames_special.indexOf(act.temdatanumbers[0]);type=2;}
if(defaulthp==-1){defaulthp = Gamedata.sys_monsternames_boss.indexOf(act.temdatanumbers[0]);type =3;}
defaulthp = (defaulthp*11)+2;
if(type==1) defaulthp = Gamedata.sys_monster_state[defaulthp];
else if(type==2) defaulthp = Gamedata.sys_monsterspecial_state[defaulthp];
else if(type==3) defaulthp = Gamedata.sys_monsterboss_state[defaulthp];
var num=1;
if(act.atkloop>1){for(var x=0; x<act.atkloop;x++){if(act.heroatkcrit[x]>0){num+1}}};
var hpd = 0.08*num;
var txt = 8*num;
if(act.temdatanumbers[1]>defaulthp/2){
    act.temdatanumbers[1]-=Math.round(act.temdatanumbers[1]*hpd);
    act.herotxt+="\n:black_heart: Foe's MaxHP decreased "+txt+"%"
    if(act.temdatanumbers[0]>act.temdatanumbers[1]){act.temdatanumbers[0]=act.temdatanumbers[1];}
    module.exports.temdatanumbers = act.temdatanumbers;
    module.exports.herotxt = act.herotxt;
}
else{
    act.herotxt+="\n Foe's HP cannot lower anymore";
    module.exports.herotxt = act.herotxt;
}}}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];