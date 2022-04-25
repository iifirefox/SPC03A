const Account = require('./tree');
const Gamedata = require('./hh3data.json');
const bot = require('../bot');
    if(bot.theuser.accountver!=Gamedata.accountupdate){
   if(bot.theuser.Ary_HH3ProfileNames) var profilenames = bot.theuser.Ary_HH3ProfileNames.split("<:>");
  if(bot.theuser.Ary_Equipmentnames)  var equipnames = bot.theuser.Ary_Equipmentnames.split("<:>");
   if(bot.theuser.Ary_itembagnames) var itembagnames = bot.theuser.Ary_itembagnames.split("<:>");
   if(bot.theuser.Ary_Imgset) var Imgset = bot.theuser.Ary_Imgset.split("<:>");
   if(bot.theuser.Ary_skills) var skillset = bot.theuser.Ary_skills.split("<:>");
   if(bot.theuser.skillslearned) var skillslearned = bot.theuser.skillslearned.split("<:>");
   if(bot.theuser.Ary_Crystalnames) var crystalnames = bot.theuser.Ary_Crystalnames.split("<:>");
   if(bot.theuser.Ary_skillsdata){var rawskillsetdata = bot.theuser.Ary_skillsdata.split("<:>");var skillsetdata = [];
    for(var index=0; index<rawskillsetdata.length;index++){
        skillsetdata[index]= Number(rawskillsetdata[index])};}
     if(bot.theuser.Ary_HH3ProfileData) {var rawprofiledata = bot.theuser.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index]);
    }}
   if(bot.theuser.Ary_Equipmentdata) {var rawequipmentdata = bot.theuser.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
    for(var index=0; index<rawequipmentdata.length;index++){
        equipmentdata[index]= Number(rawequipmentdata[index]);
    }}
   if(bot.theuser.Ary_itembagdata) {var rawitembagdata = bot.theuser.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index]);
    }}
   if(bot.theuser.Ary_HH3FunctionSet1) {var rawhh3funset1 = bot.theuser.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index]);
      }}
     if(bot.theuser.Metadata) {var rawdata = bot.theuser.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index]);
    }}
   if(bot.theuser.Ary_Crystaldata) {var rawcrystaldata = bot.theuser.Ary_Crystaldata.split("<:>");var crystaldata = [];
    for(var index=0; index<rawcrystaldata.length;index++){
        crystaldata[index]= Number(rawcrystaldata[index]);
    }}

    bot.theuser.HP = Gamedata.sys_set_hp;
    bot.theuser.MaxHP = Gamedata.sys_set_hp;
    bot.theuser.Upgradepoint = bot.theuser.level;
    bot.theuser.turn = Gamedata.sys_set_turn;
    bot.theuser.multi = Gamedata.sys_set_multi;
    bot.theuser.multid = Gamedata.sys_set_multid;
    bot.theuser.multiname = Gamedata.sys_set_multiname;
    bot.theuser.Skillenergy = Gamedata.sys_set_skillenergy;
    bot.theuser.MaxSkillenergy = Gamedata.sys_set_skillenergymax;
    bot.theuser.expcooldown = Gamedata.sys_set_expcd;
    bot.theuser.fightagaincooldown = Date.now()+Gamedata.sys_set_fightagaincd;
    bot.theuser.hpcooldown = Date.now();
    bot.theuser.energycooldown = Date.now();
    bot.theuser.CombatMode = Gamedata.sys_set_combat;
    profiledata[12]=0;
    profiledata[13]=0;
    profiledata[16]=0;
    profiledata[17]=0;
    profiledata[18]=0;
    profiledata[19]=0;
    profiledata[20]=0;
    profiledata[25]=0;
    profiledata[26]=0;
    profiledata[27]=0;
    profiledata[28]=0;
    profiledata[29]=0;
    profiledata[30]=0;
    profiledata[31]=0;
    bot.theuser.Ary_skills = "Force Attack<:>empty<:>empty<:>empty";
    bot.theuser.skillslearned = "Force Attack<:>Slash<:>Charge<:>Mega Slash<:>Blast<:>Focus<:>Focus Blast<:>Fire<:>Swift<:>All Fire";
    bot.theuser.reskill = "Slash<:>Force Attack<:>empty<:>empty<:>Blast<:>Force Attack<:>empty<:>empty<:>Fire<:>Force<:>empty<:>empty";
    bot.theuser.Ary_Crystalnames = "<:><:><:><:><:><:><:><:><:>";
    bot.theuser.Ary_Crystaldata = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
    if(itembagnames&itembagdata)
   {for(var x=0;x<Gamedata.sys_item_names.length;x++){
       if(itembagnames.include(Gamedata.sys_item_names[x])){
        var getcort = itembagnames.indexOf(Gamedata.sys_item_names[x]);
        itembagnames[x]=Gamedata.sys_item_names[x];
        itembagdata[x] = itembagdata[getcort];
        if(getcort!=x)itembagdata[getcort]=0;
    }}
    for(var x=0;x<Gamedata.sys_material_names.length;x++){
        var itemx =x+11;
        if(itembagnames.include(Gamedata.sys_material_names[x])){
         var getcort = itembagnames.indexOf(Gamedata.sys_material_names[x]);
         itembagnames[itemx]=Gamedata.sys_material_names[x];
         itembagdata[itemx] = itembagdata[getcort];
         if(getcort!=itemx)itembagdata[getcort]=0;
     }}}
     if(profilenames[1]){
    if(profiledata[3]==1){var getname = Gamedata.sys_sword_names.indexOf(profilenames[1]);
        var table = getname*3;
        var t2 = table+1;
        var t3 = table+2;
        profiledata[4]= Gamedata.sys_sword_dataset[table];
        profiledata[5]= Gamedata.sys_sword_dataset[t2];
        profiledata[7]= Gamedata.sys_sword_dataset[t3];
    }
   else if(profiledata[3]==2){ var getname = Gamedata.sys_wand_names.indexOf(profilenames[1]);
    var table = getname*3;
    var t2 = table+1;
    var t3 = table+2;
    profiledata[4]= Gamedata.sys_wand_dataset[table];
    profiledata[5]= Gamedata.sys_wand_dataset[t2];
    profiledata[7]= Gamedata.sys_wand_dataset[t3];}
   else if(profiledata[3]==3){ var getname = Gamedata.sys_bow_names.indexOf(profilenames[1]);
    var table = getname*3;
    var t2 = table+1;
    var t3 = table+2;
    profiledata[4]= Gamedata.sys_bow_dataset[table];
    profiledata[5]= Gamedata.sys_bow_dataset[t2];
    profiledata[7]= Gamedata.sys_bow_dataset[t3];}
}
if(profilenames[2]){
    var getname = Gamedata.sys_armor_names.indexOf(profilenames[2]);
    if(getname<7){
    var table = getname*3;
    var t2 = table+1;
    var t3 = table+2;
    profiledata[8]= Gamedata.sys_armor_dataset[table];
    profiledata[9]= Gamedata.sys_armor_dataset[t2];
    profiledata[11]= Gamedata.sys_armor_dataset[t3];}
}
if(equipnames){
    for(var x=0; x<equipnames.length;x++){
        if(equipnames[x]){
        var table = x*5;
        var phy = table+1;
        var per = table+2;
        var dec = table+4;
        if(equipmentdata[table]==1){
            var getcort = Gamedata.sys_sword_names.indexOf(equipnames[x]);
            var tab = getcort*3;
            var tab2 = tab+1;
            var tab3 = tab+2;
            equipmentdata[phy] = Gamedata.sys_sword_dataset[tab];
            equipmentdata[per] = Gamedata.sys_sword_dataset[tab2];
            equipmentdata[dec] = Gamedata.sys_sword_dataset[tab3];
        }
        else if(equipmentdata[table]==2){
            var getcort = Gamedata.sys_wand_names.indexOf(equipnames[x]);
            var tab = getcort*3;
            var tab2 = tab+1;
            var tab3 = tab+2;
            equipmentdata[phy] = Gamedata.sys_wand_dataset[tab];
            equipmentdata[per] = Gamedata.sys_wand_dataset[tab2];
            equipmentdata[dec] = Gamedata.sys_wand_dataset[tab3];
        }
        else if(equipmentdata[table]==3){
            var getcort = Gamedata.sys_bow_names.indexOf(equipnames[x]);
            var tab = getcort*3;
            var tab2 = tab+1;
            var tab3 = tab+2;
            equipmentdata[phy] = Gamedata.sys_bow_dataset[tab];
            equipmentdata[per] = Gamedata.sys_bow_dataset[tab2];
            equipmentdata[dec] = Gamedata.sys_bow_dataset[tab3];
        }
        else if(equipmentdata[table]==0){
            var getcort = Gamedata.sys_armor_names.indexOf(equipnames[x]);
            var tab = getcort*3;
            var tab2 = tab+1;
            var tab3 = tab+2;
            equipmentdata[phy] = Gamedata.sys_armor_dataset[tab];
            equipmentdata[per] = Gamedata.sys_armor_dataset[tab2];
            equipmentdata[dec] = Gamedata.sys_armor_dataset[tab3];
        }
    }
    }
    bot.theuser.Ary_Equipmentnames = equipnames.join(Gamedata.key);
    bot.theuser.Ary_Equipmentdata = equipmentdata.join(Gamedata.key);
}
if(profiledata)bot.theuser.Ary_HH3ProfileData = profiledata.join(Gamedata.key);
if(profilenames)bot.theuser.Ary_HH3ProfileNames = profilenames.join(Gamedata.key);
    bot.theuser.accountver = Gamedata.accountupdate;
}
bot.theuser.Lastupdated = Date.now();
module.exports.theuser = bot.theuser;