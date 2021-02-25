const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    function IgnoringCase(text, other) {
        return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
    }
    var temdatanames = User.TemdataNames.split("<:>");
    var equipnames = User.Ary_Equipmentnames.split("<:>");
    var rawequipmentdata = User.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
    for(var index=0; index<rawequipmentdata.length;index++){
        equipmentdata[index]= Number(rawequipmentdata[index])
    }
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      }
      var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index])
    }
    var rawtemdatanumbers= User.TemdataNumbers.split("<:>");
      var temdatanumbers = [];
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index])
      }
    const craftembed = new Discord.MessageEmbed();
    craftembed.setColor("#FFC500");
    if(User.CombatMode==0){
    if(hh3funset1[0]==1){
    if(arg==""||arg==undefined||arg.includes("yes")){
        if(arg.includes("yes")&hh3funset1[6]==5){
            var checkresult = equipnames.indexOf("");
            if(itembagdata[temdatanumbers[4]]>= temdatanumbers[0]&itembagdata[temdatanumbers[5]]>= temdatanumbers[1]&itembagdata[temdatanumbers[6]]>= temdatanumbers[2]){
              if(User.currency>=temdatanumbers[3]){
                if(checkresult != -1){
                    var dataindex;
                    var datakey;
                    var equipindex = 5*checkresult;
                    var phycort = 1+equipindex;
                    var percort = 2+equipindex;
                    var durcort = 3+equipindex;
                    var durdmgcort = 4+equipindex;
                    var datacort = 3;
                    var dataphy = 0;
                    var dataper = 1;
                    var datadurdmg = 2;
                    if(Gamedata.sys_sword_names.includes(temdatanames[3])){ dataindex = Gamedata.sys_sword_names.indexOf(temdatanames[3]); 
                      datakey=  datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[equipindex]=1; equipmentdata[phycort] = Gamedata.sys_sword_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_sword_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_sword_dataset[datadurdmg];
                    };
                    if(Gamedata.sys_wand_names.includes(temdatanames[3])){ dataindex = Gamedata.sys_wand_names.indexOf(temdatanames[3]);
                       datakey = datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[equipindex]=2; equipmentdata[phycort] = Gamedata.sys_wand_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_wand_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_wand_dataset[datadurdmg];
                    };
                    if(Gamedata.sys_bow_names.includes(temdatanames[3])){ dataindex = Gamedata.sys_bow_names.indexOf(temdatanames[3]);
                       datakey = datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[equipindex]=3; equipmentdata[phycort] = Gamedata.sys_bow_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_bow_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_bow_dataset[datadurdmg];};
                    if(Gamedata.sys_armor_names.includes(temdatanames[3])){ dataindex = Gamedata.sys_armor_names.indexOf(temdatanames[3]);
                       datakey = datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[equipindex]=0; equipmentdata[phycort] = Gamedata.sys_armor_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_armor_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_armor_dataset[datadurdmg];};
                        var temsavename = temdatanames[3]
                    equipnames[checkresult] =temdatanames[3];
                    equipmentdata[durcort] = 100;
                    User.currency -= temdatanumbers[3];
                    itembagdata[temdatanumbers[4]]-= temdatanumbers[0];
                    itembagdata[temdatanumbers[5]]-= temdatanumbers[1];
                    itembagdata[temdatanumbers[6]]-= temdatanumbers[2];
                    hh3funset1[6] =0;
                    User.TemdataNames = "";
                    User.TemdataNumbers = "";
                    User.Ary_itembagdata = itembagdata.join("<:>");
                    User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                    User.Ary_Equipmentnames = equipnames.join("<:>");
                    User.Ary_Equipmentdata = equipmentdata.join("<:>");
                    craftembed.setDescription(":tools: "+User.name+" has crafted `"+temsavename+"`!");
                }else{
                    craftembed.setDescription(":x: You do not have enough bag space to craft this.");
                }
              }else{
                craftembed.setDescription(":x: You do not have enough Currency.");
            }  
            }
            else{
                craftembed.setDescription(":x: You do not have enough Materials.");
            }
        }else{
    craftembed.setAuthor("Craft Shop",Gamedata.NPC_Craft);
    for(var displayindex =0; displayindex<5;displayindex++){
        var swrdindex =displayindex+1
        var swordindex = 3*swrdindex;
        var equipdata = 3*displayindex;
        var phycort = 0+equipdata;
        var percort = 1+equipdata;
        var swordphy = 0+swordindex;
        var swordper= 1+swordindex;
        var newswordperdisplay = Gamedata.sys_sword_dataset[swordper]*100;
        var newandperdisplay =Gamedata.sys_wand_dataset[percort]*100;
        var newbowperdisplay =Gamedata.sys_bow_dataset[percort]*100;
        var newarmorperdisplay =Gamedata.sys_armor_dataset[percort]*100;
        var lopkey;
        var oldlopkey;
        if(displayindex ==1&User.floor>=4){ lopkey = 1};
        if(displayindex ==2&User.floor>=6){ lopkey = 2};
        if(displayindex ==3&User.floor>=6){ lopkey = 3};
        if(displayindex ==4&User.floor>=8){ lopkey = 4};
        //if(displayindex ==5&User.floor>=8){ lopkey = 5};
        if(displayindex==0){
        craftembed.addField(Gamedata.sys_sword_names[swrdindex],"Atk: `"+Gamedata.sys_sword_dataset[swordphy]+"` AddAtk: `"+Math.round(newswordperdisplay)+"%`");
        craftembed.addField(Gamedata.sys_wand_names[displayindex],"Atk: `"+Gamedata.sys_wand_dataset[phycort]+"` AddAtk: `"+Math.round(newandperdisplay)+"%`");
        craftembed.addField(Gamedata.sys_bow_names[displayindex],"Atk: `"+Gamedata.sys_bow_dataset[phycort]+"` AddAtk: `"+Math.round(newbowperdisplay)+"%`");
        if(displayindex<=2)
        craftembed.addField(Gamedata.sys_armor_names[displayindex],"Def: `"+Gamedata.sys_armor_dataset[phycort]+"` AddDef: `"+Math.round(newarmorperdisplay)+"%`");
    }
    else if(displayindex>=1 & lopkey>0& lopkey!=oldlopkey){
        craftembed.addField(Gamedata.sys_sword_names[swrdindex],"Atk: `"+Gamedata.sys_sword_dataset[swordphy]+"` AddAtk: `"+Math.round(newswordperdisplay)+"%`");
        craftembed.addField(Gamedata.sys_wand_names[displayindex],"Atk: `"+Gamedata.sys_wand_dataset[phycort]+"` AddAtk: `"+Math.round(newandperdisplay)+"%`");
        craftembed.addField(Gamedata.sys_bow_names[displayindex],"Atk: `"+Gamedata.sys_bow_dataset[phycort]+"` AddAtk: `"+Math.round(newbowperdisplay)+"%`");
        if(displayindex<=2)
        craftembed.addField(Gamedata.sys_armor_names[displayindex],"Def: `"+Gamedata.sys_armor_dataset[phycort]+"` AddDef: `"+Math.round(newarmorperdisplay)+"%`");
    }
    oldlopkey = lopkey;
}
    craftembed.setFooter("To craft Equipment command: -craft <name in list> \n To craft potions command: -brew.");}
}
else{
    var namecheck;
    var equipindex;
    var equiptype=-1;
    if(Gamedata.sys_sword_names.find(a => IgnoringCase(a,arg))){namecheck = Gamedata.sys_sword_names.find(a => IgnoringCase(a,arg)); equipindex = Gamedata.sys_sword_names.indexOf(namecheck); equiptype=1;}
   else if(Gamedata.sys_wand_names.find(a => IgnoringCase(a,arg))){namecheck = Gamedata.sys_wand_names.find(a => IgnoringCase(a,arg)); equipindex = Gamedata.sys_wand_names.indexOf(namecheck); equiptype=2;}
   else if(Gamedata.sys_bow_names.find(a => IgnoringCase(a,arg))){namecheck = Gamedata.sys_bow_names.find(a => IgnoringCase(a,arg)); equipindex = Gamedata.sys_bow_names.indexOf(namecheck); equiptype=3;}
   else if(Gamedata.sys_armor_names.find(a => IgnoringCase(a,arg))){namecheck = Gamedata.sys_armor_names.find(a => IgnoringCase(a,arg)); equipindex = Gamedata.sys_armor_names.indexOf(namecheck); equiptype=0;}
    if(namecheck!= undefined){
        var bagsupplies1;
        var bagsupplies2;
        var bagsupplies3;
        if(equiptype==1){
            equipindex--
        }
         if(equipindex!= undefined&equipindex!=-1&equipindex<5){
             User.TemdataNames = "<:>";
             User.TemdataNumbers = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
             if(equipindex<4){
            var craftort = 3*equipindex;
            var supplie2 = 1+craftort;
            var costcort = 2+craftort;
            var craftortname = 2*equipindex;
            var supplie2name = 1+craftortname;
            if(!namecheck.includes("Armor")){
            temdatanumbers[0] = Gamedata.sys_craftmaterial_weaponset3[craftort];
            temdatanumbers[1] = Gamedata.sys_craftmaterial_weaponset3[supplie2];
            temdatanumbers[3] = Gamedata.sys_craftmaterial_weaponset3[costcort];
            temdatanames[0] = Gamedata.sys_craftsupplie_wepnameset2[craftortname];
            temdatanames[1] = Gamedata.sys_craftsupplie_wepnameset2[supplie2name];
            bagsupplies1 = Gamedata.sys_material_names.indexOf(temdatanames[0]);
            bagsupplies2 = Gamedata.sys_material_names.indexOf(temdatanames[1]);
            temdatanumbers[4] = bagsupplies1+10;
            temdatanumbers[5]= bagsupplies2+10;
            temdatanumbers[7] = equipindex;

        }
            else{
            temdatanumbers[0] = Gamedata.sys_craftmaterial_armorset3[craftort];
            temdatanumbers[1] = Gamedata.sys_craftmaterial_armorset3[supplie2];
            temdatanumbers[3] = Gamedata.sys_craftmaterial_armorset3[costcort];
            temdatanames[0] = Gamedata.sys_craftsupplie_armnameset2[craftortname];
            temdatanames[1] = Gamedata.sys_craftsupplie_armnameset2[supplie2name];
            bagsupplies1 = Gamedata.sys_material_names.indexOf(temdatanames[0]);
            bagsupplies2 = Gamedata.sys_material_names.indexOf(temdatanames[1]);
            temdatanumbers[4] = bagsupplies1+10;
            temdatanumbers[5]= bagsupplies2+10;
            temdatanumbers[7] = equipindex;
            }
            temdatanames[3] = namecheck;
            hh3funset1[6]=5;
            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
            User.TemdataNames = temdatanames.join("<:>");
            User.TemdataNumbers = temdatanumbers.join("<:>");
            craftembed.setDescription(":tools: do you want to craft `" + namecheck +"`?\nYou need:");
            craftembed.addField(temdatanames[0],itembagdata[temdatanumbers[4]]+"/"+temdatanumbers[0]);
            craftembed.addField(temdatanames[1],itembagdata[temdatanumbers[5]]+"/"+temdatanumbers[1]);
            craftembed.addField("Cost: "+temdatanumbers[3],"Currency Balance: "+User.currency);
            craftembed.setFooter(" command: -craft yes to confirm.");
        }
            else if(equipindex==4& !namecheck.includes("Armor")){
            var newequipindex =equipindex-4
            var craftort = 4*newequipindex;
            var supplie2 = 1+craftort;
            var supplie3 = 2+craftort;
            var costcort = 3+craftort;
            temdatanumbers[0] = Gamedata.sys_craftmaterial_weaponset4[craftort];
            temdatanumbers[1] = Gamedata.sys_craftmaterial_weaponset4[supplie2];
            temdatanumbers[2] = Gamedata.sys_craftmaterial_weaponset4[supplie3];
            temdatanumbers[3] = Gamedata.sys_craftmaterial_weaponset4[costcort];
            temdatanames[0] = Gamedata.sys_craftsupplie_wepnameset3[craftort];
            temdatanames[1] = Gamedata.sys_craftsupplie_wepnameset3[supplie2];
            temdatanames[2] = Gamedata.sys_craftsupplie_wepnameset3[supplie3];
            bagsupplies1 = Gamedata.sys_material_names.indexOf(temdatanames[0]);
            bagsupplies2 = Gamedata.sys_material_names.indexOf(temdatanames[1]);
            bagsupplies3 = Gamedata.sys_material_names.indexOf(temdatanames[2]);
            temdatanumbers[4] = bagsupplies1+10;
            temdatanumbers[5] = bagsupplies2+10;
            temdatanumbers[6] = bagsupplies3+10;
            temdatanumbers[7] = equipindex;
            temdatanames[3] = namecheck;
            hh3funset1[6]=5;
            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
            User.TemdataNames = temdatanames.join("<:>");
            User.TemdataNumbers = temdatanumbers.join("<:>");
            craftembed.setDescription(":tools: do you want to craft `" + namecheck +"`?\nYou need:");
            craftembed.addField(temdatanames[0],itembagdata[temdatanumbers[4]]+"/"+temdatanumbers[0]);
            craftembed.addField(temdatanames[1],itembagdata[temdatanumbers[5]]+"/"+temdatanumbers[1]);
            craftembed.addField(temdatanames[2],itembagdata[temdatanumbers[6]]+"/"+temdatanumbers[2]);
            craftembed.addField("Cost: `"+temdatanumbers[3]+"`","Currency Balance: `"+User.currency+"`");
            craftembed.setFooter(" command: -craft yes to confirm.");
            }
            else{
                craftembed.setDescription(":x: Cannot craft "+namecheck);
            }
        }
        else{
            craftembed.setDescription(":x: Cannot craft "+namecheck);
        }
    }
    else{
        craftembed.setDescription(":x: that item does not exist.");
    }
}}
else{
    craftembed.setDescription(":x: Craft has not been unlock yet. \nYou need to reach the 3rd floor.");
}}else{
    craftembed.setDescription(":x: You  cannot enter the shop because you are in a battle.\nTo leave the battle, command: `-act flee`");
}
         message.channel.send( craftembed );
}
module.exports.key = {
    name: "craft",
    description: "craft your items."
}