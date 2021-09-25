const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
const Account = require("../data/tree");
module.exports.run = async (message, arg, User) => {
const warnembed = new Discord.MessageEmbed();
warnembed.setColor("#FFFFFE");
if(User.CombatMode==3){
const heroembed = new Discord.MessageEmbed();
const heroeffectembed = new Discord.MessageEmbed();
const herodefeatembed = new Discord.MessageEmbed();
heroembed.setColor(User.colortheme);
Account.findOne({
    id: User.multid
},async(err,UserII)=>{
  if(err)console.log(err);
  if(!UserII)return message.channel.send(warnembed.setDescription(":x: Error: No User found."));
  Account.findOne({
    id: User.id
},async(err,User)=>{
  if(err)console.log(err);
  if(!User)return message.channel.send(":x: Error: No user found.");
  function RandomMinMax(min,max) {
    return Math.floor(Math.random() * (max+1 - min)) + min;
  }
  
function IgnoringCase(text, other) {
return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
}
arg = arg.toLowerCase();
var temdatanames = User.TemdataNames.split("<:>");
var temdatanamesA = UserII.TemdataNames.split("<:>");
var profilenames = User.Ary_HH3ProfileNames.split("<:>");
var Imgset = User.Ary_Imgset.split("<:>");
var ImgsetA = UserII.Ary_Imgset.split("<:>");
var skillset = User.Ary_skills.split("<:>");
var rawskillsetdata = User.Ary_skillsdata.split("<:>");var skillsetdata = [];
for(var index=0; index<rawskillsetdata.length;index++){
  skillsetdata[index]= Number(rawskillsetdata[index]);};
var rawskillsetdataA = UserII.Ary_skillsdata.split("<:>");var skillsetdataA = [];
for(var index=0; index<rawskillsetdataA.length;index++){
  skillsetdataA[index]= Number(rawskillsetdataA[index]);};
var rawtemdatanumbers= User.TemdataNumbers.split("<:>");var temdatanumbers = [];
for(var index=0; index<rawtemdatanumbers.length;index++){
  temdatanumbers[index]= Number(rawtemdatanumbers[index]);};
var rawtemdatanumbersA= UserII.TemdataNumbers.split("<:>");var temdatanumbersA = [];
for(var index=0; index<rawtemdatanumbersA.length;index++){
  temdatanumbersA[index]= Number(rawtemdatanumbersA[index]);};
var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
for(var index=0; index<rawprofiledata.length;index++){
  profiledata[index]= Number(rawprofiledata[index]);};
var rawprofiledataA = UserII.Ary_HH3ProfileData.split("<:>");var profiledataA = [];
for(var index=0; index<rawprofiledataA.length;index++){
  profiledataA[index]= Number(rawprofiledataA[index]);};
var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");var hh3funset1 = [];
for(var index=0; index<rawhh3funset1.length;index++){
  hh3funset1[index]= Number(rawhh3funset1[index]);};
var rawdata = User.Metadata.split("<:>");var mdata = [];
for(var index=0; index<rawdata.length;index++){
  mdata[index]= Number(rawdata[index]);};
  var herospd=profiledata[12];
  var herospdII=profiledataA[12];
  var herospkey=temdatanumbers[18];
  var herospkeyII=temdatanumbers[19];
  var heroatkcrit=[];
  var foeatkcrit=temdatanumbersA[25];
  var herocritrate;
  var heroacy;
  var atkloop;
  var heroatk=[];
  var hand;
  var attack=0;
  var herotxt;
  var herotxteft="";
  var defendload=0;
  var temkey =0;
  var skillname="";
  var skillkey = false;
  var skillspecial = false;
  var heroeftkey = false;
  var effects = "";
  var alla = false;
if(profiledata[15]!=2&temdatanumbers[13]==temdatanumbers[46]){
  if(arg.includes("skill")||skillset.some(a=>IgnoringCase(a,arg))){
      if(arg.includes("skill")){var setcheck =arg.split("skill");var num6 =Number(setcheck[1])-1;
      if(skillset[num6]=="empty"||num6>3||num6<0) return message.channel.send(warnembed.setDescription(":x: This skill slot is empty or does not exist."));
      if(isNaN(num6)){var skillnameindex = skillset.find(a=>IgnoringCase(a,num6));num6 = skillset.indexOf(skillnameindex);}
  }
      else if(skillset.some(a=>IgnoringCase(a,arg))){
          var skillnameindex = skillset.find(a=>IgnoringCase(a,arg))
          var num6 = skillset.indexOf(skillnameindex);}
      else return message.channel.send(warnembed.setDescription(":x: This skill slot is empty or does not exist."));
      var dtable1 = 5*num6;
          var dtable2 = dtable1+1;
          var dtable3 = dtable1+2;
          var dtable4 = dtable1+3;
          var dtable5 = dtable1+4;
          if(User.Skillenergy<skillsetdata[dtable3])return message.channel.send(warnembed.setDescription(":x: Not enough skill energy."));
          var wepcheck = false; if(profiledata[3]==1||profiledata[3]==3)wepcheck=true;
          if(profiledata[3]==skillsetdata[dtable2]||skillsetdata[dtable2]==0||skillsetdata[dtable2]==4&wepcheck==true){
              if(skillsetdata[dtable1]==1){ skillkey=true;skillspecial = true;}
             else if(skillsetdata[dtable1]!=1) skillspecial = true;
              skillname = skillset[num6];
          }
          else return message.channel.send(warnembed.setDescription(":x: You do not have the weapon requird to use this"));
          herotxt="";
  }
if(arg=="attack"||skillkey==true&skillsetdata[dtable1]==1){
  //attack the monster
  if(profiledata[3]==1){
  herocritrate= Gamedata.sys_combat_rates[1]+temdatanumbers[22]+profiledata[18];
  heroacy = Gamedata.sys_combat_rates[4]+profiledata[13];
  atkloop=1;
  }
 else if(profiledata[3]==2){
      herocritrate= Gamedata.sys_combat_rates[2]+temdatanumbers[22]+profiledata[18];
      heroacy = Gamedata.sys_combat_rates[5]+profiledata[13];
      atkloop=1;
      }
 else if(profiledata[3]==3){
       herocritrate= Gamedata.sys_combat_rates[3]+temdatanumbers[22]+profiledata[18];
       heroacy = Gamedata.sys_combat_rates[6]+profiledata[13];
       atkloop=1;
       if(arg.includes("attack")||skillname==Gamedata.sys_heronoskills[26]){
          var addmoreatk = profiledata[12]*0.20;
          addmoreatk= profiledata[12]- addmoreatk;
          if(Math.random()<addmoreatk){
              atkloop++
          }
          if(Math.random()<addmoreatk){
             atkloop++
         }
      }
      else if(skillname==Gamedata.sys_heronoskills[9]&skillkey==true){atkloop=3};
      }else{
          herocritrate=Gamedata.sys_combat_rates[7]+temdatanumbers[22]+profiledata[18];
          heroacy = Gamedata.sys_combat_rates[8];
          hand = Gamedata.sys_hero_hand;
          atkloop=1;
      }
      if(profilenames[5]==Gamedata.sys_chest_mysterychest[5])herocritrate+=0.60;
      else if(profilenames[5]==Gamedata.sys_chest_mysterychest[9])herocritrate-=0.50;
      heroacy-=temdatanumbers[21];
      for(var a=0;a<atkloop;a++){
          if(Math.random()>heroacy||temdatanumbers[20]){
              heroatk[a]=0;
              heroatkcrit[a]=0;
              if(temdatanumbers[20])temdatanumbers[20]=0;
          }
          else if(Math.random()<herocritrate){
              if(profiledata[3]>0&profiledata[3]<4){
                  heroatk[a] = profiledata[4]*Gamedata.sys_combat_rates[0];
                  heroatk[a] = profiledata[4]+heroatk[a];
                  heroatk[a] = Math.round(heroatk[a]);
                  heroatkcrit[a]=2;
              }
              else{
                  heroatk[a] = hand*Gamedata.sys_combat_rates[0];
                  heroatk[a] = hand+heroatk[a];
                  heroatk[a] = Math.round(heroatk[a]);
                  heroatkcrit[a]=2;
              }
          }
          else{
              if(profiledata[3]>0& profiledata[3]<4){
                  heroatk[a] = profiledata[4];
                  heroatkcrit[a]=1;
              }else{
                  heroatk[a] = hand;
                  heroatkcrit[a]=1;
              }
          }if(profilenames[5]==Gamedata.sys_chest_mysterychest[4]){heroatk[a]+= Math.round(heroatk[a]*0.25);}
          else if(profilenames[5]==Gamedata.sys_chest_mysterychest[8]){heroatk[a]-= Math.round(heroatk[a]*0.10);}
          var addmg = heroatk[a]*profiledata[5];
          var addmg2 = heroatk[a]*profiledata[19];
         var addmg3 =  heroatk[a]*temdatanumbers[12];
          heroatk[a] = Math.round(heroatk[a]+addmg+addmg2+addmg3)+profiledata[16];
          var o = heroatk[a]/2;
          var oa = 52 - o; o = oa/100;
          oa = o * heroatk[a]; o = heroatk[a]-oa;
          var tem = Math.round(o);
          if(skillkey==true&heroatkcrit[a]>0){
          var rawdmg = tem+skillsetdata[dtable4];
          tem = rawdmg/5;
          tem = Math.round(tem);
          heroatk[a] += tem;
          }
          heroatk[a] = RandomMinMax(tem,heroatk[a]);
      }
      herotxt="";
}
else if(arg=="defend"){
  //defend from the monster
  var typedef = profiledata[3]-1;
  if(typedef==-1)typedef=2;
      if(herospkey>herospkeyII){
      temdatanumbers[17] = Gamedata.sys_combat_def[typedef];
      var tem = Math.round(temdatanumbers[17]*100);
      }
      else{
          defendload = Gamedata.sys_combat_def[typedef];
          var tem = Math.round(defendload*100);
      }
      herotxt = User.name+" has defend\n:shield: "+tem+"%";
  }
  else if(arg.includes("potion"))return message.channel.send(":x: Potions are not allowed");
  else if(arg=="flee"){
    temdatanumbers[23]=1;
    User.TemdataNumbers = temdatanumbers.join("<:>");
    User.save().catch(err => console.log(err));
      return message.channel.send(warnembed.setDescription("Are you sure you want to flee from this match?\ncommand: `-act yes` to confirm"));
  }
  else if(arg=="avoid"){
      if(User.Skillenergy>0){
          User.Skillenergy--;
          if(User.Skillenergy>User.Maxskillenergy) User.Skillenergy=User.Maxskillenergy;
          if(herospkey>foespdkey){
          temdatanumbersA[20]=1;
          herotxt="You avoid the attack";
          }
          else{
              herotxt="Fail to avoid";
          }
      }
      else{
          herotxt=":x: You need more skill energy"
      }
  }}
  else if(profiledata[15]!=2&temdatanumbers[46]!=temdatanumbers[47]) return message.channel.send(warnembed.setDescription(":x: It is your opponent's turn"));
  else {temkey = profiledata[15];profiledata[15]=0;herotxt=":zap: You are stunned\ntry act command again."}
  if(arg!=""&herotxt!=undefined){
      if(User.HP>0&temkey!=2){
          if(arg.includes("attack")||skillkey==true){
              for(var atkdex =0; atkdex<heroatk.length;atkdex++){
                  var newatk = profiledataA[9]*heroatk[atkdex];
                  newatk = heroatk[atkdex]-newatk;
                  newatk = Math.round(newatk);
                  if(temdatanumbers[24]>0){
                 var newatkbuff = temdatanumbers[24]*newatk
                  newatk = newatk-=newatkbuff;
                  newatk = Math.round(newatk);}
                  if(temdatanumbers[26]>0){
                    var newatkbuff = temdatanumbers[26]*newatk
                     newatk = Math.round(newatk-=newatkbuff);}
                  newatk= newatk-=(profiledataA[8]+profiledataA[17]);
                  if(temdatanumbers[11]<0){
                      var newatk3 = temdatanumbers[11]*newatk;
                      newatk = newatk-=newatk3;
                      newatk = Math.round(newatk);
                  }
                  if(newatk<0)newatk=0;
                  newatk= Math.round(newatk);
                  if(alla==true) newatk= Math.round(newatk/2);
                  if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanamesA[5])&temdatanumbersA[29]>0)newatk = Math.round(newatk/2);
                  attack+=newatk
                  if(attack<0)attack=0;
                  if(heroatkcrit[atkdex]==2){
                      herotxteft +="\n**"+newatk+"**:boom: dmg";
                  }
                  else if(heroatkcrit[atkdex]==1){
                      herotxteft +="\n**"+newatk+"** dmg";
                  }
                  else if(heroatkcrit[atkdex]==0){
                      herotxteft +="\n but **Missed**";
                  }
              }
              if(arg.includes("attack")&herotxteft.includes(":boom:")&skillkey==false){
                  herotxt = User.name+" attack > Critical! >"+herotxteft
              }
              else if(arg.includes("attack")&skillkey==false){
                  herotxt= User.name+" attack"+herotxteft
              }
             else if(skillkey==true&herotxteft.includes(":boom:")&skillkey==false){
                  herotxt = User.name+" uses "+skillname+" > Critical! >"+herotxteft
              }
              else if(skillkey==true){
                  herotxt= User.name+" uses "+skillname+herotxteft
              }
          }
      }
      if(temdatanumbersA[28]>0){temdatanumbersA[28]--; if(skillspecial==true)herotxt+="\nbut failed";skillspecial=false;if(temdatanumbersA[28]<1&temdatanumbersA[27]>0)temdatanumbersA[27]=0;}
      if(skillspecial==true){
          if(skillkey==false)herotxt +=User.name+" uses "+skillname;
          module.exports.skillsetdata4 = skillsetdata[dtable4];
          module.exports.skillsetdata5 = skillsetdata[dtable5];
          module.exports.HeroHP = User.HP;
          module.exports.HeroMaxHP = User.MaxHP;
          module.exports.heroatkcrit=heroatkcrit;
          module.exports.heroatkcrit0=heroatkcrit[0];
          module.exports.foeatkcrit = foeatkcrit;
          module.exports.herotxt = herotxt;
          module.exports.heroatk = heroatk;
          module.exports.attack = attack;
          module.exports.profilenames= profilenames;
          module.exports.profiledata = profiledata;
          module.exports.hh3funset1 = hh3funset1;
          module.exports.profiledata3 = profiledata[3];
          module.exports.temdataname0 = temdatanames[0];
          module.exports.temdatanum0 = UserII.HP;
          module.exports.temdatanum1 = UserII.MaxHP
          module.exports.temdatanum3 = temdatanumbers[3];
          module.exports.temdatanum5 = temdatanumbers[5];
          module.exports.temdatanum6 = temdatanumbers[6];
          module.exports.temdatanum7 = temdatanumbers[7];
          module.exports.temdatanum11 = temdatanumbers[11];
          module.exports.temdatanum12 = temdatanumbers[12];
          module.exports.temdatanum14 = temdatanumbers[14];
          module.exports.temdatanum15 = temdatanumbers[15];
          module.exports.temdatanum16 = temdatanumbers[16];
          module.exports.temdatanum22 = temdatanumbers[22];
          module.exports.temdatanum24 = temdatanumbers[24];
          module.exports.temdatanum27 = temdatanumbers[27];
          module.exports.temdatanum28 = temdatanumbers[28];
          module.exports.temdatanum29 = temdatanumbers[29];
          module.exports.temdatanum30 = temdatanumbers[30];
          module.exports.temdatanum31 = temdatanumbers[31];
          module.exports.temdatanames = temdatanames;
          module.exports.temdatanumbers=temdatanumbers;
          module.exports.skillset=skillset;
          module.exports.skillsetdata=skillsetdata;
          module.exports.herospkey = herospkey;
          module.exports.skillname = skillname;
          module.exports.skillspecial = skillspecial;
          if(skillname==Gamedata.sys_heronoskills[13]||skillname==Gamedata.sys_heronoskills[24]){
              herospkey=-1;
           }
         else if(skillname==Gamedata.sys_heronoskills[23]){
              foespdkey=-1;
           }
      }
              if(temdatanumbers[17]>0)temdatanumbers[17]=0;
              if(skillkey==true&skillname||skillname){
                  var skillpath =Gamedata.sys_skill_path+skillname;
                  const skilleffects = require(skillpath);
                  if(skilleffects.skillsetdata4){skillsetdata[dtable4] = skilleffects.skillsetdata4;User.Ary_skillsdata = skillsetdata.join("<:>")};
                  if(skilleffects.skillsetdata5){skillsetdata[dtable5] = skilleffects.skillsetdata5;User.Ary_skillsdata = skillsetdata.join("<:>")};
                  if(skilleffects.temdatanames) temdatanames = skilleffects.temdatanames;
                  if(skilleffects.temdatanumbers) temdatanumbers = skilleffects.temdatanumbers;
                  if(skilleffects.herotxt) herotxt = skilleffects.herotxt;
                  if(skilleffects.herospkey) herospkey = skilleffects.herospkey;
                  if(skilleffects.foeatkcrit) foeatkcrit = skilleffects.foeatkcrit;
                  if(skilleffects.attack) attack = skilleffects.attack;
                  if(skilleffects.HeroHP) User.HP = skilleffects.HeroHP;
                  if(skilleffects.healback) healback = skilleffects.healback;
                  if(skilleffects.hh3funset1) hh3funset1 = skilleffects.hh3funset1;
                  if(skilleffects.temdatanum0) UserII.HP = skilleffects.temdatanum0;
                  if(skilleffects.temdatanum1) temdatanumbers[1] = skilleffects.temdatanum1;
                  if(skilleffects.temdatanum3) temdatanumbers[3] = skilleffects.temdatanum3;
                  if(skilleffects.temdatanum5) temdatanumbers[5] = skilleffects.temdatanum5;
                  if(skilleffects.temdatanum6) temdatanumbers[6] = skilleffects.temdatanum6;
                  if(skilleffects.temdatanum7) temdatanumbers[7] = skilleffects.temdatanum7;
                  if(skilleffects.temdatanum11) temdatanumbers[11] = skilleffects.temdatanum11;
                  if(skilleffects.temdatanum12) temdatanumbers[12] = skilleffects.temdatanum12;
                  if(skilleffects.temdatanum14) temdatanumbers[14] = skilleffects.temdatanum14;
                  if(skilleffects.temdatanum22) temdatanumbers[22] = skilleffects.temdatanum22;
                  if(skilleffects.temdatanum24) temdatanumbers[24] = skilleffects.temdatanum24;
                  if(skilleffects.temdatanum27) temdatanumbers[27] = skilleffects.temdatanum27;
                  if(skilleffects.temdatanum28) temdatanumbers[28] = skilleffects.temdatanum28;
                  if(skilleffects.temdatanum29) temdatanumbers[29] = skilleffects.temdatanum29;
                  if(skilleffects.temdatanum30) temdatanumbers[30] = skilleffects.temdatanum30;
                  if(skilleffects.temdatanum31) temdatanumbers[31] = skilleffects.temdatanum31;
                  if(skilleffects.temname5) temdatanames[5] = skilleffects.temname5;
                  if(skilleffects.summonpic) Imgset[3]=skilleffects.summonpic; 
                      User.Skillenergy -= skillsetdata[dtable3];
                      if(User.Skillenergy<0)User.Skillenergy=0;
                      UserII.HP-= attack;
                      if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanamesA[5])&temdatanumbersA[29]>0){
                        temdatanumbersA[29]-=attack;
                        if(temdatanumbersA[29]<=0){
                            effects+="\n"+UserII.name+"'s "+temdatanamesA[5]+" has been defeated";
                            temdatanamesA[5]="";temdatanumbersA[29]=0;temdatanumbersA[30]=0;temdatanumbersA[31]=0;
                        }
                    }
                      if(mdata[6]<attack){
                          mdata[6]=attack;
                          User.Metadata = mdata.join("<:>");
                      }
                      if(skilleffects.trueffect){
                          for(var skilcount = 0;skilcount<heroatkcrit.length;skilcount++){
                              if(heroatkcrit[skilcount]>0){
                                  if(skilleffects.trueffect==3&profiledataA[15]==0){
                                      if(Math.random()<Gamedata.sys_skill_data2[0]){
                                          //monster defense decreases
                                          profiledataA[15]=3;
                                          heroeffectembed.setColor("#FFFE00");
                                          heroeffectembed.setDescription(":shield: "+temdatanames[0]+" defense has decrease!");
                                          heroeftkey = true;
                                      }
                                  }
                                  else if(skilleffects.trueffect==2&profiledataA[15]==0){
                                      if(Math.random()<Gamedata.sys_skill_data2[1]){
                                         // stun
                                         profiledataA[15] = 2;
                                         heroeffectembed.setColor("#FFFE00");
                                          heroeffectembed.setDescription(":zap: "+temdatanames[0]+" has been stunned!");
                                          heroeftkey = true;
                                      }
                                  }
                                  else if(skilleffects.trueffect==4&profiledataA[15]==0){
                                      if(Math.random()<Gamedata.sys_skill_data2[3]){
                                          // curruption
                                          profiledataA[15] = 4;
                                          temdatanumbers[11]-= 0.05;
                                          heroeffectembed.setColor("#0F0F0F");
                                          heroeffectembed.setDescription(":broken_heart: "+temdatanames[0]+" has been corrupted!");
                                          heroeftkey = true;
                                      }
                                  }
                                  else if(skilleffects.trueffect==1&profiledataA[15]==0){
                                      if(Math.random()<Gamedata.sys_skill_data2[4]){
                                          // poison
                                          profiledataA[15] = 1;
                                          heroeffectembed.setColor("#01FF00");
                                          heroeffectembed.setDescription(":green_heart: "+temdatanames[0]+" has been poisoned!");
                                          heroeftkey = true;
                                      }
                                  }
                                  else if(skillname==Gamedata.sys_heronoskills[14]&profiledata[15]!=0){
                                      //reflection
                                      profiledataA[15]=profiledata[15];
                                      if(profiledata[15]==1){heroeffectembed.setColor("#01FF00");
                                      heroeffectembed.setDescription(":green_heart: "+temdatanames[0]+" has been poisoned!");}
                                      else if(profiledata[15]==3){heroeffectembed.setColor("#FFFE00");
                                      heroeffectembed.setDescription(":shield: "+temdatanames[0]+" defense has decreased!");}
                                      else if(profiledata[15]==4){heroeffectembed.setColor("#0F0F0F");temdatanumbers[11]+= 0.05;
                                      heroeffectembed.setDescription(":broken_heart: "+temdatanames[0]+" has been corrupted!");}
                                  }
                              }
                          }
                      }
                  var rpath = require.resolve(skillpath);delete require.cache[rpath];
              }
             else if(arg=="attack"){
                      UserII.HP-= attack;
                      if(skillsetdata[4]==1||skillsetdata[9]==1||skillsetdata[14]==1||skillsetdata[19]==1)
                      {var healback =Math.round(attack*0.35);User.HP+=healback;herotxt+="\n:heart: You heal back +"+healback;};
                      if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanamesA[5])&temdatanumbersA[29]>0){
                        temdatanumbersA[29]-=attack;
                        if(temdatanumbersA[29]<=0){
                            effects+="\n"+UserII.name+"'s "+temdatanamesA[5]+" has been defeated";
                            temdatanamesA[5]="";temdatanumbersA[29]=0;temdatanumbersA[30]=0;temdatanumbersA[31]=0;ImgsetA[3]=0;UserII.Ary_Imgset=Imgset.join("<:>");
                        }
                    }
                  User.Skillenergy++;
                  if(User.Skillenergy>User.Maxskillenergy){
                      User.Skillenergy=User.Maxskillenergy;
                  }
              }
              else if(arg=="defend"){
                  if(defendload>0){
                      temdatanumbers[17]= defendload;
                  }
                  if(foeatkcrit>0){
                      User.Skillenergy++;
                  if(User.Skillenergy>User.Maxskillenergy){
                      User.Skillenergy=User.Maxskillenergy;
                  }}
              }
              if(profiledata[15]==1){
                  var poisoneffect = User.MaxHP*0.08;
                  poisoneffect = Math.round(poisoneffect);
                  User.HP-=poisoneffect;
                  if(User.HP<0) User.HP=0;
                  heroembed.setColor("#01FF00");
                  effects="You are poisoned \n"+poisoneffect+" dmg";
              }
             else if(profiledata[15]==4){
                  var poisoneffect = User.MaxHP*0.06;
                  poisoneffect = Math.round(poisoneffect);
                  User.HP-=poisoneffect;
                  if(User.HP<0) User.HP=0;
                  heroembed.setColor("#0F0F0F");
                  effects="You are corrupted \n"+poisoneffect+" dmg";
              }
              if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanames[5])&temdatanumbers[29]>0){
                  if(Math.random()<temdatanumbers[31]){
                  var om = temdatanumbers[30]/2;
                  var oam = 52 - om; om = oam/100;
                  oam = om * temdatanumbers[30]; om = temdatanumbers[30]-oam;
                  var tema = Math.round(om);
                  var attackm = RandomMinMax(tema,temdatanumbers[30]);
                  var newatkm = temdatanumbers[5]*attackm;
                  newatkm = temdatanumbers[30]-newatkm;
                  newatkm = Math.round(newatkm);
                  newatkm= newatkm-=temdatanumbers[4];
                  if(newatkm<0)newatkm=0;
                  newatkm= Math.round(newatkm);
                  attackm+=newatkm;UserII.HP-= attackm;if(temdatanumbers[32]>0)UserII.HP-= attackm;
              }
                  if(attackm){
                      herotxt +="\n**"+User.name+"'s "+temdatanames[5]+" attacks "+attackm+"** dmg";
                  }
                  else{
                      herotxt +="\n**"+User.name+"'s "+temdatanames[5]+" attacks but Missed**";
                  }
              }
              heroembed.setTitle("*"+herotxt+"*");
          heroembed.setFooter(effects);
          if(heroeftkey==true){
              message.channel.send(heroeffectembed);
          }
          if(temdatanumbers[13]!=temdatanumbers[47]){
          for(var sp = 0; sp<6;sp++){
            if(Math.random()<herospd){
                if(sp>=5){
                    herospkey+=3;
                }
                else{
                    herospkey+=sp;
                }
            }
            if(Math.random()<herospdII){
                if(sp>=5){
                    herospkeyII+=3;
                }
                else{
                    herospkeyII+=sp;
                }
            }
        }
        if(herospkey==herospkeyII){
            var picked = RandomMinMax(1,2);
            if(picked==1){herospkey++}
           else if(picked==2){herospkeyII++};
        }
        temdatanumbersA[18]=herospkey;
        temdatanumbersA[19]=herospkeyII;
        if(herospkey>herospkeyII){temdatanumbersA[47]=temdatanumbers[46];temdatanumbersA[13]=temdatanumbersA[47];}
        else if(herospkey<herospkeyII) {temdatanumbersA[47]=temdatanumbersA[46];temdatanumbersA[13]=temdatanumbersA[47];};
        if(temdatanumbersA[47]==temdatanumbersA[46]) heroembed.addField("Turn","`"+UserII.name+"`"); else heroembed.addField("Turn","`"+User.name+"`");}
       else if(temdatanumbers[46]==temdatanumbers[47]){
            temdatanumbersA[13]= temdatanumbersA[46];
            heroembed.addField("Turn","`"+User.multiname+"`");
        }
        temdatanumbersA[2]=profiledata[4];
        temdatanumbersA[3]=profiledata[5];
        temdatanumbersA[4]=profiledata[8];
        temdatanumbersA[5]=profiledata[9];
        temdatanumbersA[6]=profiledata[12];
        temdatanumbersA[7]=profiledata[18];
        temdatanumbersA[8]=profiledata[13];
        temdatanumbersA[25]=heroatkcrit;
        temdatanumbersA[26]=temdatanumbers[17];
        if(hh3funset1[16]>0)User.Skillenergy=0;
        UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
        UserII.TemdataNumbers = temdatanumbersA.join("<:>");
          if(temdatanumbers[13]!=temdatanumbers[47])temdatanumbers[47] = temdatanumbersA[47];
          temdatanumbers[13] = temdatanumbersA[13];
          User.Ary_HH3ProfileData = profiledata.join("<:>");
          User.TemdataNumbers = temdatanumbers.join("<:>");
          message.channel.send(heroembed);
if(User.HP<=0||UserII.HP<=0){
  if(User.HP<=0) herodefeatembed.setAuthor(User.name+" has been defeated by "+User.multiname,User.Profileimg)
    .setDescription("Do you want to rematch?").setFooter("to rematch command: -rematch");
    else{herodefeatembed.setColor(UserII.colortheme);herodefeatembed.setAuthor(UserII.name+" has been defeated by "+User.multiname,UserII.Profileimg)
    .setDescription("Do you want to rematch?\n*time remaining to choose 10secs*");};
    User.TemdataNames = "";
    User.TemdataNumbers = "";
    UserII.TemdataNames = "";
    UserII.TemdataNumbers = "";
    User.CombatMode=0;
    UserII.CombatMode=0;
    profiledata[15]=0;
    profiledataA[15]=0;
    Imgset[1]="";
    ImgsetA[1]="";
    if(hh3funset1[13]==3){
        profilenames[1]="";
        profiledata[3]=0;
        profiledata[4]=0;
        profiledata[6]=0;
        User.Ary_skills ="<:><:><:>";
        hh3funset1[13]=0;
        User.Ary_HH3ProfileNames = profilenames.join("<:>");
    }
    User.Ary_Imgset = Imgset.join("<:>");
    UserII.Ary_Imgset = ImgsetA.join("<:>");
    User.HP = User.MaxHP;
    UserII.HP = UserII.MaxHP;
    User.Ary_HH3ProfileData = profiledata.join("<:>");
    UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
    if(hh3funset1[16]>0)hh3funset1[16]=0;
    User.Ary_HH3FunctionSet1=hh3funset1.join("<:>");
    var temdatanames = User.TemdataNames.split("<:>");
    var temdatanamesA = UserII.TemdataNames.split("<:>");
    temdatanames[0] = User.multiname;
    temdatanames[1]= User.multid;
    function noparty(){
        return(User.multid="",
         User.multiname="",
         User.multi = false,
         UserII.multid="",
         UserII.multiname="",
         UserII.multi = false)}
         var whitemark ='✅';
         var crossmark ='❎';
         message.channel.send(herodefeatembed).then(function(message){message.react(whitemark),message.react(crossmark)
         const filter = (reaction, theuser) => {
             return [whitemark, crossmark].includes(reaction.emoji.name) && theuser.id === User.id ||
             [whitemark, crossmark].includes(reaction.emoji.name) && theuser.id === UserII.id;
         };
         message.awaitReactions(filter, { max: 2, time: 13000, errors: ['time'] })
         .then(collected => {
             const reaction = collected.first();
     
             if (reaction.emoji.name === whitemark) {
                if(User.energy=undefined){
                    if(User.Ary_HH3FunctionSet1==undefined){User.Ary_HH3FunctionSet1 =
                      "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";}
                    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
                    var hh3funset1 = [];
                    for(var index=0; index<rawhh3funset1.length;index++){
                        hh3funset1[index]= Number(rawhh3funset1[index]);
                    };
                    var profilenames = User.Ary_HH3ProfileNames.split("<:>");
                    var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
                    for(var index=0; index<rawprofiledata.length;index++){
                      profiledata[index]= Number(rawprofiledata[index]);};
                      profilenames[1]= RandomMinMax("Temp Sword","Temp Wand","Temp Bow");
                      if(profilenames[1].includes("Sword")){profiledata[3]=1;User.Ary_skills = "Force Attack<:>Slash<:>Charge<:>MegaSlash";
                      User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>1<:>1<:>2<:>65<:>0<:>2<:>1<:>1<:>0.06<:>0<:>1<:>1<:>5<:>76<:>0";}
                     else if(profilenames[1].includes("Wand")){profiledata[3]=2;User.Ary_skills = "Force Attack<:>Blast<:>Focus<:>FocusBlast";
                     User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>1<:>2<:>1<:>68<:>0<:>2<:>2<:>1<:>0.06<:>0<:>1<:>2<:>5<:>80<:>0";
                    }
                      else {profiledata[3]=3;User.Ary_skills = "Force Attack<:>Fire<:>Swift<:>All Fire";
                      User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>1<:>3<:>2<:>50<:>0<:>2<:>3<:>1<:>0.06<:>0<:>1<:>3<:>5<:>48<:>0";
                    }
                      profiledata[4]=12;
                      profiledata[6]=100;
                    hh3funset1[13]=3;
                    User.Ary_HH3ProfileNames = profilenames.join("<:>");
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                  }
        User.CombatMode=3;
        UserII.CombatMode=3;
     var Imgset = User.Ary_Imgset.split("<:>");
     var ImgsetA = UserII.Ary_Imgset.split("<:>");
     Imgset[1]=UserII.Profileimg;
     ImgsetA[1]=User.Profileimg;
     temdatanumbers[2]=profiledataA[4];
     temdatanumbers[3]=profiledataA[5];
     temdatanumbers[4]=profiledataA[8];
     temdatanumbers[5]=profiledataA[9];
     temdatanumbers[6]=profiledataA[12];
     temdatanumbers[7]=profiledataA[18];
     temdatanumbers[8]=profiledataA[13];
     temdatanumbers[18]=0;
     temdatanumbers[19]=0;
     temdatanumbersA[2]=profiledata[4];
     temdatanumbersA[3]=profiledata[5];
     temdatanumbersA[4]=profiledata[8];
     temdatanumbersA[5]=profiledata[9];
     temdatanumbersA[6]=profiledata[12];
     temdatanumbersA[7]=profiledata[18];
     temdatanumbersA[8]=profiledata[13];
     temdatanumbersA[18]=0;
     temdatanumbersA[19]=0;
     temdatanames[0]= UserII.name;
     temdatanamesA[0]= User.name;
     temdatanumbers[46]=1;
     temdatanumbersA[46]=2;
     var herospd=profiledata[12];
     var herospdII=profiledataA[12];
     var herospkey=0;
     var herospkeyII=0;
     for(var sp = 0; sp<6;sp++){
       if(Math.random()<herospd){
           if(sp>=5){
               herospkey+=3;
           }
           else{
               herospkey+=sp;
           }
       }
       if(Math.random()<herospdII){
           if(sp>=5){
               herospkeyII+=3;
           }
           else{
               herospkeyII+=sp;
           }
       }
     }
     if(herospkey==herospkeyII){
       var picked = RandomMinMax(1,2);
       if(picked==1){herospkey++}
      else if(picked==2){herospkeyII++};
     }
     var txt;
     if(herospkey>herospkeyII){txt="`"+User.name+" moves first`"; temdatanumbersA[47]=temdatanumbers[46]; temdatanumbersA[13]=temdatanumbers[46];}
     else { txt="`"+UserII.name+" moves first`";temdatanumbersA[47]=temdatanumbersA[46]; temdatanumbersA[13]=temdatanumbersA[46];}
     temdatanumbers[46]=temdatanumbersA[47];
     temdatanumbers[13]=temdatanumbersA[13];
     User.Ary_HH3ProfileData = profiledata.join("<:>");
     UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
     User.TemdataNumbers = temdatanumbers.join("<:>");
     UserII.TemdataNumbers = temdatanumbersA.join("<:>");
     User.Ary_Imgset = Imgset.join("<:>");
     UserII.Ary_Imgset = ImgsetA.join("<:>");
         User.TemdataNames = temdatanames.join("<:>");
         UserII.TemdataNames = temdatanamesA.join("<:>");
         message.edit(herodefeatembed.setDescription(":crossed_swords:"+User.name+":boom: vs :boom:"+UserII.name+":crossed_swords:\n"+txt) );
         User.save().catch(err => console.log(err));
         UserII.save().catch(err => console.log(err));
		} else{noparty();message.edit(herodefeatembed.setDescription("*Rematch is canceled*"));
        User.save().catch(err => console.log(err));
        UserII.save().catch(err => console.log(err));
        }
	})
	.catch(collected => {
		noparty();message.edit(herodefeatembed.setDescription("*Rematch has expired*"));
        User.save().catch(err => console.log(err));
        UserII.save().catch(err => console.log(err));
         })});
}
User.save().catch(err => console.log(err));
UserII.save().catch(err => console.log(err));
}
else if(arg.includes("yes")&&temdatanumbers[23]==1){
    herodefeatembed.setAuthor(User.name+" has fled from "+User.multiname,message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .setDescription("Do you want to rematch?\n*time remaining to choose 10secs*");
    User.TemdataNames = "";
    User.TemdataNumbers = "";
    UserII.TemdataNames = "";
    UserII.TemdataNumbers = "";
    User.CombatMode=0;
    UserII.CombatMode=0;
    profiledata[15]=0;
    profiledataA[15]=0;
    Imgset[1]="";
    ImgsetA[1]="";
    if(hh3funset1[13]==3){
        profilenames[1]="";
        profiledata[3]=0;
        profiledata[4]=0;
        profiledata[6]=0;
        User.Ary_skills ="<:><:><:>";
        hh3funset1[13]=0;
        User.Ary_HH3ProfileNames = profilenames.join("<:>");
    }
    User.Ary_Imgset = Imgset.join("<:>");
    UserII.Ary_Imgset = ImgsetA.join("<:>");
    User.HP = User.MaxHP;
    UserII.HP = UserII.MaxHP;
    User.Ary_HH3ProfileData = profiledata.join("<:>");
    UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
    if(hh3funset1[16]>0)hh3funset1[16]=0;
    User.Ary_HH3FunctionSet1=hh3funset1.join("<:>");
    function noparty(){
   return(User.multid="",
    User.multiname="",
    User.multi = false,
    UserII.multid="",
    UserII.multiname="",
    UserII.multi = false)}
    var whitemark ='✅';
    var crossmark ='❎';
    message.channel.send(herodefeatembed).then(function(message){message.react(whitemark),message.react(crossmark)
    const filter = (reaction, theuser) => {
        return [whitemark, crossmark].includes(reaction.emoji.name) && theuser.id === User.id ||
        [whitemark, crossmark].includes(reaction.emoji.name) && theuser.id === UserII.id;
    };
    message.awaitReactions(filter, { max: 2, time: 13000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === whitemark) {
            if(User.energy=undefined){
                if(User.Ary_HH3FunctionSet1==undefined){User.Ary_HH3FunctionSet1 =
                  "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";}
                var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
                var hh3funset1 = [];
                for(var index=0; index<rawhh3funset1.length;index++){
                    hh3funset1[index]= Number(rawhh3funset1[index]);
                };
                var profilenames = User.Ary_HH3ProfileNames.split("<:>");
                var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
                for(var index=0; index<rawprofiledata.length;index++){
                  profiledata[index]= Number(rawprofiledata[index]);};
                  profilenames[1]= RandomMinMax("Temp Sword","Temp Wand","Temp Bow");
                  if(profilenames[1].includes("Sword")){profiledata[3]=1;User.Ary_skills = "Force Attack<:>Slash<:>Charge<:>MegaSlash";
                  User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>1<:>1<:>2<:>65<:>0<:>2<:>1<:>1<:>0.06<:>0<:>1<:>1<:>5<:>76<:>0";}
                 else if(profilenames[1].includes("Wand")){profiledata[3]=2;User.Ary_skills = "Force Attack<:>Blast<:>Focus<:>FocusBlast";
                 User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>1<:>2<:>1<:>68<:>0<:>2<:>2<:>1<:>0.06<:>0<:>1<:>2<:>5<:>80<:>0";
                }
                  else {profiledata[3]=3;User.Ary_skills = "Force Attack<:>Fire<:>Swift<:>All Fire";
                  User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>1<:>3<:>2<:>50<:>0<:>2<:>3<:>1<:>0.06<:>0<:>1<:>3<:>5<:>48<:>0";
                }
                  profiledata[4]=12;
                  profiledata[6]=100;
                hh3funset1[13]=3;
                User.Ary_HH3ProfileNames = profilenames.join("<:>");
                User.Ary_HH3ProfileData = profiledata.join("<:>");
                User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
              }
	User.CombatMode=3;
    UserII.CombatMode=3;
var Imgset = User.Ary_Imgset.split("<:>");
var ImgsetA = UserII.Ary_Imgset.split("<:>");
Imgset[1]=UserII.Profileimg;
ImgsetA[1]=User.Profileimg;
temdatanumbers[2]=profiledataA[4];
temdatanumbers[3]=profiledataA[5];
temdatanumbers[4]=profiledataA[8];
temdatanumbers[5]=profiledataA[9];
temdatanumbers[6]=profiledataA[12];
temdatanumbers[7]=profiledataA[18];
temdatanumbers[8]=profiledataA[13];
temdatanumbers[18]=0;
temdatanumbers[19]=0;
temdatanumbersA[2]=profiledata[4];
temdatanumbersA[3]=profiledata[5];
temdatanumbersA[4]=profiledata[8];
temdatanumbersA[5]=profiledata[9];
temdatanumbersA[6]=profiledata[12];
temdatanumbersA[7]=profiledata[18];
temdatanumbersA[8]=profiledata[13];
temdatanumbersA[18]=0;
temdatanumbersA[19]=0;
temdatanames[0]= UserII.name;
temdatanamesA[0]= User.name;
temdatanumbers[46];
temdatanumbersA[46]=2;
var herospd=profiledata[12];
var herospdII=profiledataA[12];
var herospkey=0;
var herospkeyII=0;
for(var sp = 0; sp<6;sp++){
  if(Math.random()<herospd){
      if(sp>=5){
          herospkey+=3;
      }
      else{
          herospkey+=sp;
      }
  }
  if(Math.random()<herospdII){
      if(sp>=5){
          herospkeyII+=3;
      }
      else{
          herospkeyII+=sp;
      }
  }
}
if(herospkey==herospkeyII){
  var picked = RandomMinMax(1,2);
  if(picked==1){herospkey++}
 else if(picked==2){herospkeyII++};
}
var txt;
if(herospkey>herospkeyII){txt="`"+User.name+" moves first`"; temdatanumbersA[47]=temdatanumbers[46]; temdatanumbersA[13]=temdatanumbers[46];}
else { txt="`"+UserII.name+" moves first`";temdatanumbersA[47]=temdatanumbersA[46]; temdatanumbersA[13]=temdatanumbersA[46];}
temdatanumbers[46]=temdatanumbersA[47];
temdatanumbers[13]=temdatanumbersA[13];
User.Ary_HH3ProfileData = profiledata.join("<:>");
UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
User.TemdataNumbers = temdatanumbers.join("<:>");
UserII.TemdataNumbers = temdatanumbersA.join("<:>");
User.Ary_Imgset = Imgset.join("<:>");
UserII.Ary_Imgset = ImgsetA.join("<:>");
    User.TemdataNames = temdatanames.join("<:>");
    UserII.TemdataNames = temdatanamesA.join("<:>");
message.edit(herodefeatembed.setDescription(":crossed_swords:"+User.name+":boom: vs :boom:"+UserII.name+":crossed_swords:\n"+txt) );
User.save().catch(err => console.log(err));
UserII.save().catch(err => console.log(err));
		} else{noparty();message.edit(herodefeatembed.setDescription("*Rematch is canceled*"));
        User.save().catch(err => console.log(err));
        UserII.save().catch(err => console.log(err));
        }
	})
	.catch(collected => {
		noparty();message.edit(herodefeatembed.setDescription("*Rematch has expired*"));
        User.save().catch(err => console.log(err));
        UserII.save().catch(err => console.log(err));
	})});
    User.save().catch(err => console.log(err));
    UserII.save().catch(err => console.log(err));
} 
else return message.channel.send(warnembed.setDescription(":x: you can only use act with attack, defend, skill <skill name>, potion, or flee"));
});
});
}
else return message.channel.send(warnembed.setDescription(":x: Error: You are not in a Match"));
}
module.exports.key = {
    name: "act_pvp",
    description: "1V1."
}