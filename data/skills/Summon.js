const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
function RandomMax(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
if(act.skillspecial){
var the25pc = Math.round(act.HeroHP*0.25);
act.HeroHP = Math.round(act.HeroHP-the25pc);
var summonname =Gamedata.sys_monsternames_normal[RandomMax(9)];
var summonpic="";
if(Gamedata.sys_monsternames_normal.some(a=>a==summonname)){
    var summonindex = Gamedata.sys_monsternames_normal.indexOf(summonname);
    summonpic = Gamedata.sys_monsterpic_normal[summonindex];
    var grade = summonindex+1/3;if(grade.toString().includes("333"))grade+1;grade= Math.round(grade);
    var datatable = 11*summonindex;var datatable2 = datatable+2;var datatable3 = datatable+8;
    act.temdatanum29 = Math.round(act.HeroMaxHP*0.20*grade);
    act.temdatanum30 = Gamedata.sys_monster_state[datatable2];
    act.temdatanum31 = Gamedata.sys_monster_state[datatable3];
    act.skilleffectkey = true;
}
module.exports.HeroHP = act.HeroHP
module.exports.temdatanum29 = act.temdatanum29;
module.exports.temdatanum30 = act.temdatanum30;
module.exports.temdatanum31 = act.temdatanum31;
module.exports.temname5 = summonname;
module.exports.summonpic = summonpic;
module.exports.skilleffectkey = act.skilleffectkey;}
if(act.foeskillspecial){
  act.temdatanumbers[3] += 0.1;
  act.temdatanumbers[5] += 0.1;
  module.exports.act.temdatanumbers = act.temdatanumbers;
}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];