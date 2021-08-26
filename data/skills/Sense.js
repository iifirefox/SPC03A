const Gamedata = require('../hh3data.json');
var act = require(Gamedata.sys_skill_path1);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path2);
if(!act.HeroMaxHP)act = require(Gamedata.sys_skill_path3);
if(act.skillspecial){
if(act.temdatanumbers[14]<0.30&act.temdatanumbers[12]<0.30){
act.temdatanumbers[14] += act.skillsetdata4;
act.temdatanumbers[12] += act.skillsetdata5;
displayper=Math.round(act.skillsetdata4*100);
displayper2=Math.round(act.skillsetdata5*100);
act.herotxt = act.herotxt+"\n Your Speed has increase +"+displayper+"%\n Your Atk% has increase +"+displayper2+"%";
module.exports.temdatanumbers = act.temdatanumbers;
}
else{
   if(act.temdatanumbers[14]>=0.30) act.herotxt= act.herotxt+":x: Your Speed cannot increase anymore.";
   else if(act.temdatanumbers[12]>=0.30) act.herotxt= act.herotxt+":x: Your Atk% cannot increase anymore.";
 }
 module.exports.herotxt = act.herotxt;
}
if(act.foeskillspecial){
  var per = 0.06;
  if(act.temdatanumbers[6]<0.30&act.temdatanumbers[3]<0.30){
  act.temdatanumbers[6] += per;
  act.temdatanumbers[3] += per;
  displayper=Math.round(per*100);
  displayper2=Math.round(per*100);
  act.foetxt = act.foetxt+"\n Speed has increase +"+displayper+"%\n Atk% has increase +"+displayper2+"%";
  module.exports.act.temdatanumbers = act.temdatanumbers;
  }
  else{
    if(act.temdatanumbers[6]>=0.30) act.herotxt= act.herotxt+":x: Your Speed cannot increase anymore.";
    else if(act.temdatanumbers[3]>=0.30) act.herotxt= act.herotxt+":x: Your Atk% cannot increase anymore.";
   }
   module.exports.foetxt = act.foetxt;}
var rpath = require.resolve(Gamedata.sys_skill_path1,Gamedata.sys_skill_path2,Gamedata.sys_skill_path3);delete require.cache[rpath];