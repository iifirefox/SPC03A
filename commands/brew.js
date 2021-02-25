const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    function IgnoringCase(text, other) {
        return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
    }
    var temdatanames = User.TemdataNames.split("<:>");
    var itembagnames = User.Ary_itembagnames.split("<:>");
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
    const brewembed = new Discord.MessageEmbed();
    brewembed.setColor("#EAA9FF");
    if(User.CombatMode==0){
    if(hh3funset1[0]==1){
    if(arg==""||arg==undefined||arg.includes("yes")){
        if(arg.includes("yes")&hh3funset1[6]==6){
            if(itembagdata[temdatanumbers[4]]>= temdatanumbers[0]&itembagdata[temdatanumbers[5]]>= temdatanumbers[1]&itembagdata[temdatanumbers[6]]>= temdatanumbers[2]){
            if(User.currency>=temdatanumbers[3]){
            var itm;
            itm  = Gamedata.sys_item_names.indexOf(temdatanames[3]);
              if(itm!=-1){
                if(itembagnames[itm]==""){
                    itembagnames[itm] = temdatanames[3];
                    }
                    var temsavename = temdatanames[3]
                    itembagdata[itm]+=temdatanumbers[8];
                    User.currency -= temdatanumbers[3];
                    itembagdata[temdatanumbers[4]]-= temdatanumbers[0];
                    itembagdata[temdatanumbers[5]]-= temdatanumbers[1];
                    itembagdata[temdatanumbers[6]]-= temdatanumbers[2];
                    hh3funset1[6] =0;
                    User.TemdataNames = "";
                    User.TemdataNumbers = "";
                    User.Ary_itembagnames = itembagnames.join("<:>");
                    User.Ary_itembagdata = itembagdata.join("<:>");
                    User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                    if(temdatanumbers[8]==1){
                    brewembed.setDescription(":test_tube:  "+User.name+" has brewed `"+temsavename+"`!");}
                    else{
                        brewembed.setDescription(":test_tube:  "+User.name+" has brewed `"+temsavename+" x"+temdatanumbers[8]+"`!");
                    }
                    }
                    else{
                        brewembed.setDescription(":x: Cannot Find this item.");
                    }
        }
        else{
            brewembed.setDescription(":x: You do not have enough Currency.");
        }
    }else{
        brewembed.setDescription(":x: You do not have enough Materials.");
    }
}
        else{
            brewembed.setAuthor("Brew Shop",Gamedata.NPC_Brew);
            brewembed.addField(Gamedata.sys_item_names[0],"Restores 30 HP");
            brewembed.addField(Gamedata.sys_item_names[1],"Restores 80 HP");
            brewembed.addField(Gamedata.sys_item_names[2],"Critical rate will increase by 30% for 3 turns");
            brewembed.addField(Gamedata.sys_item_names[3],"Defense will increase by 30% for 3 turns");
            brewembed.addField(Gamedata.sys_item_names[4],"Speed will increase by 30% for 3 turns");
            brewembed.addField(Gamedata.sys_item_names[5],"Removes any status effect on you");
            brewembed.setFooter("To brew an item command: -brew <name in list> \nTo brew stack items command: -brew <name in list> x<amount> \nTo craft Equipment command: -craft.");
    }
    }
    else{
       var namecheck;
       var itemintex;
       var theitem = arg.split("x");
       if(Gamedata.sys_item_names.find(a =>IgnoringCase(a,theitem[0].trimEnd()))){namecheck =Gamedata.sys_item_names.find(a =>IgnoringCase(a,theitem[0].trimEnd())); itemintex=Gamedata.sys_item_names.indexOf(namecheck)}
       if(namecheck!= undefined & itemintex<6){
        var times;
        if(!isNaN(theitem[1])){times=Number(theitem[1])}
        else{times=1}
           if(namecheck.includes("HP")||namecheck.includes("Speed")){
               if(namecheck.includes("Speed"))itemintex=1;
            var craftort = 3*itemintex;
            var supplie2 = 1+craftort;
            var costcort = 2+craftort;
            User.TemdataNumbers = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
             rawtemdatanumbers= User.TemdataNumbers.split("<:>");
             temdatanumbers = [];
             for(var index=0; index<rawtemdatanumbers.length;index++){
             temdatanumbers[index]= Number(rawtemdatanumbers[index])
            }
            temdatanames[0] =  Gamedata.sys_craftsupplie_potnameset2[0];
            temdatanames[1] = Gamedata.sys_craftsupplie_potnameset2[1];
            temdatanumbers[0] = Gamedata.sys_craftmaterial_potionset3[craftort]*times;
            temdatanumbers[1] = Gamedata.sys_craftmaterial_potionset3[supplie2]*times;
            temdatanumbers[3] = Gamedata.sys_craftmaterial_potionset3[4]*times
            bagsupplies1 = Gamedata.sys_material_names.indexOf(temdatanames[0]);
            bagsupplies2 = Gamedata.sys_material_names.indexOf(temdatanames[1]);
            temdatanumbers[4] = bagsupplies1+10;
            temdatanumbers[5] = bagsupplies2+10;
            temdatanumbers[8] = times;
            temdatanames[3] = namecheck;
            hh3funset1[6]=6;
            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
            User.TemdataNames = temdatanames.join("<:>");
            User.TemdataNumbers = temdatanumbers.join("<:>");
            if(times==1){
            brewembed.setDescription(":test_tube: do you want to brew `" + namecheck +"`?\nYou need:");}
            else{
                brewembed.setDescription(":test_tube: do you want to brew `" + namecheck +" x"+times+"`?\nYou need:");
            }
            brewembed.addField(temdatanames[0],itembagdata[temdatanumbers[4]]+"/"+temdatanumbers[0]);
            brewembed.addField(temdatanames[1],itembagdata[temdatanumbers[5]]+"/"+temdatanumbers[1]);
            brewembed.addField("Cost: `"+temdatanumbers[3]+"`","Currency Balance: `"+User.currency+"`");
            brewembed.setFooter(" command: -brew yes to confirm.");
           }
           else{
            if(namecheck.includes("Pure")){itemintex-=1}
               var set2 = itemintex-1;
            var craftort = 4*set2;
            var supplie2 = 1+craftort;
            var supplie3 = 2+craftort;
            var costcort = 3+craftort;
            var craftortname = 3*set2;
            var supplie2name = 1+craftortname;
            var supplie3name = 2+craftortname;
            User.TemdataNumbers = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
             rawtemdatanumbers= User.TemdataNumbers.split("<:>");
             temdatanumbers = [];
             for(var index=0; index<rawtemdatanumbers.length;index++){
             temdatanumbers[index]= Number(rawtemdatanumbers[index])
            }
            temdatanames[0] = Gamedata.sys_craftsupplie_potnameset3[craftortname];
            temdatanames[1] = Gamedata.sys_craftsupplie_potnameset3[supplie2name];
            temdatanames[2] = Gamedata.sys_craftsupplie_potnameset3[supplie3name];
            temdatanumbers[0] = Gamedata.sys_craftmaterial_potionset4[craftort]*times;
            temdatanumbers[1] = Gamedata.sys_craftmaterial_potionset4[supplie2]*times;
            temdatanumbers[2] = Gamedata.sys_craftmaterial_potionset4[supplie3]*times;
            temdatanumbers[3] = Gamedata.sys_craftmaterial_potionset4[costcort]*times;
            bagsupplies1 = Gamedata.sys_material_names.indexOf(temdatanames[0]);
            bagsupplies2 = Gamedata.sys_material_names.indexOf(temdatanames[1]);
            bagsupplies3 = Gamedata.sys_material_names.indexOf(temdatanames[2]);
            temdatanumbers[4] = bagsupplies1+10;
            temdatanumbers[5] = bagsupplies2+10;
            temdatanumbers[6] = bagsupplies3+10;
            temdatanumbers[7] = set2;
            temdatanumbers[8] = times;
            temdatanames[3] = namecheck;
            hh3funset1[6]=6;
            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
            User.TemdataNames = temdatanames.join("<:>");
            User.TemdataNumbers = temdatanumbers.join("<:>");
            if(times==1){
                brewembed.setDescription(":test_tube: do you want to brew `" + namecheck +"`?\nYou need:");}
                else{
                    brewembed.setDescription(":test_tube: do you want to brew `" + namecheck +" x"+times+"`?\nYou need:");
                }
            brewembed.addField(temdatanames[0],itembagdata[temdatanumbers[4]]+"/"+temdatanumbers[0]);
            brewembed.addField(temdatanames[1],itembagdata[temdatanumbers[5]]+"/"+temdatanumbers[1]);
            brewembed.addField(temdatanames[2],itembagdata[temdatanumbers[6]]+"/"+temdatanumbers[2]);
            brewembed.addField("Cost: `"+temdatanumbers[3]+"`","Currency Balance: `"+User.currency+"`");
            brewembed.setFooter(" command: -brew yes to confirm.");
    }
       }
       else{
        brewembed.setDescription(":x: that item does not exist.");
       }
    }}
    else{
        brewembed.setDescription(":x: Brew has not been unlock yet. \nYou need to reach the 3rd floor.");
    }}else{
        brewembed.setDescription(":x: You  cannot enter the shop because you are in a battle.\nTo leave the battle, command: `-act flee`");
    }
    message.channel.send(brewembed);
}
module.exports.key = {
    name: "brew",
    description: "Brew your potions."
}