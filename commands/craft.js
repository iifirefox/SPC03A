const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
const Account = require("../data/tree");
module.exports.run = async (message, arg, User) => {
    function IgnoringCase(text, other) {
        return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
    }
    const craftembed = new Discord.MessageEmbed();
    if(User.Ary_Equipmentnames)var equipnames = User.Ary_Equipmentnames.split("<:>");
    else return message.channel.send(craftembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
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
    craftembed.setColor("#FFC500");
    if(User.CombatMode==0){
    if(hh3funset1[0]==1){
    if(arg==""||arg==undefined||arg.includes("yes")){
    craftembed.setAuthor("Craft Shop",Gamedata.NPC_Craft);
    for(var displayindex =0; displayindex<7;displayindex++){
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
        if(displayindex ==(5||6)&itembagdata[8]>0){ lopkey = 6};
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
message.channel.send(craftembed.setFooter("To craft Equipment command: -craft <name in list> \n To craft potions command: -brew."));
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
        var temnum = [];temnum[2]=0;temnum[6]=0;temnum[7]=0;
        var temname= [];temname[2]="";
        function confirm(message){
            var checkresult = equipnames.indexOf("");
            if(itembagdata[temnum[4]]>= temnum[0]&itembagdata[temnum[5]]>= temnum[1]&itembagdata[temnum[6]]>= temnum[2])0;
            else return message.edit(craftembed.setDescription(":x: You do not have enough Materials.").setFooter("").spliceFields(0,3));
              if(User.currency>=temnum[3])0;
              else return message.edit(craftembed.setDescription(":x: You do not have enough Currency.").setFooter("").spliceFields(0,3));
                if(checkresult == -1) return message.edit(craftembed.setDescription(":x: You do not have enough bag space to craft this.").setFooter("").spliceFields(0,3));
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
                    if(Gamedata.sys_sword_names.includes(temname[3])){ dataindex = Gamedata.sys_sword_names.indexOf(temname[3]); 
                      datakey=  datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[equipindex]=1; equipmentdata[phycort] = Gamedata.sys_sword_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_sword_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_sword_dataset[datadurdmg];
                    };
                    if(Gamedata.sys_wand_names.includes(temname[3])){ dataindex = Gamedata.sys_wand_names.indexOf(temname[3]);
                       datakey = datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[equipindex]=2; equipmentdata[phycort] = Gamedata.sys_wand_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_wand_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_wand_dataset[datadurdmg];
                    };
                    if(Gamedata.sys_bow_names.includes(temname[3])){ dataindex = Gamedata.sys_bow_names.indexOf(temname[3]);
                       datakey = datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[equipindex]=3; equipmentdata[phycort] = Gamedata.sys_bow_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_bow_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_bow_dataset[datadurdmg];};
                    if(Gamedata.sys_armor_names.includes(temname[3])){ dataindex = Gamedata.sys_armor_names.indexOf(temname[3]);
                       datakey = datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[equipindex]=0; equipmentdata[phycort] = Gamedata.sys_armor_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_armor_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_armor_dataset[datadurdmg];};
                        var temsavename = temname[3]
                        message.edit(craftembed.setDescription(":tools: "+User.name+" has crafted `"+temsavename+"`!").setFooter("").spliceFields(0,3));
                    equipnames[checkresult] =temname[3];
                    equipmentdata[durcort] = 100;
                    User.currency -= temnum[3];
                    itembagdata[temnum[4]]-= temnum[0];
                    itembagdata[temnum[5]]-= temnum[1];
                    itembagdata[temnum[6]]-= temnum[2];
                    return(
                    Account.findOne({
                        id: User.id
                    },async(err,User)=>{
                      if(err)console.log(err);
                    User.Ary_itembagdata = itembagdata.join("<:>");
                    User.Ary_Equipmentnames = equipnames.join("<:>");
                    User.Ary_Equipmentdata = equipmentdata.join("<:>");
                    User.save().catch(err => console.log(err));}))
        }
         if(equipindex!= undefined&equipindex!=-1&equipindex<7){
             if(equipindex<4){
            var craftort = 3*equipindex;
            var supplie2 = 1+craftort;
            var costcort = 2+craftort;
            var craftortname = 2*equipindex;
            var supplie2name = 1+craftortname;
            if(!namecheck.includes("Armor")){
            temnum[0] = Gamedata.sys_craftmaterial_weaponset3[craftort];
            temnum[1] = Gamedata.sys_craftmaterial_weaponset3[supplie2];
            temnum[3] = Gamedata.sys_craftmaterial_weaponset3[costcort];
            temname[0] = Gamedata.sys_craftsupplie_wepnameset2[craftortname];
            temname[1] = Gamedata.sys_craftsupplie_wepnameset2[supplie2name];
            bagsupplies1 = Gamedata.sys_material_names.indexOf(temname[0]);
            bagsupplies2 = Gamedata.sys_material_names.indexOf(temname[1]);
            temnum[4] = bagsupplies1+12;
            temnum[5]= bagsupplies2+12;
            temnum[7] = equipindex;

        }
            else{
            temnum[0] = Gamedata.sys_craftmaterial_armorset3[craftort];
            temnum[1] = Gamedata.sys_craftmaterial_armorset3[supplie2];
            temnum[3] = Gamedata.sys_craftmaterial_armorset3[costcort];
            temname[0] = Gamedata.sys_craftsupplie_armnameset2[craftortname];
            temname[1] = Gamedata.sys_craftsupplie_armnameset2[supplie2name];
            bagsupplies1 = Gamedata.sys_material_names.indexOf(temname[0]);
            bagsupplies2 = Gamedata.sys_material_names.indexOf(temname[1]);
            temnum[4] = bagsupplies1+12;
            temnum[5]= bagsupplies2+12;
            temnum[7] = equipindex;
            }
            temname[3] = namecheck;
            craftembed.setDescription(":tools: do you want to craft `" + namecheck +"`?\nYou need:");
            craftembed.addField(temname[0],"`"+itembagdata[temnum[4]]+"`/"+temnum[0]);
            craftembed.addField(temname[1],"`"+itembagdata[temnum[5]]+"`/"+temnum[1]);
            craftembed.addField("Cost: "+temnum[3],"Currency Balance: `"+User.currency+"`");
            message.channel.send(craftembed.setFooter(" command: -craft yes to confirm.")).then((message)=>{message.react('✅')
            const filter = (reaction, user) => {
             return ['✅'].includes(reaction.emoji.name) && user.id === User.id;
         };
            message.awaitReactions(filter, { max: 1})
         .then(collected => {
             const reaction = collected.first();
     
             if (reaction.emoji.name === '✅') {
                 confirm(message);
             }
         })});
        }
            else if(equipindex==4& !namecheck.includes("Armor")){
            var newequipindex =equipindex-4
            var craftort = 4*newequipindex;
            var supplie2 = 1+craftort;
            var supplie3 = 2+craftort;
            var costcort = 3+craftort;
            var num=12;
            var num2=12;
            var num3=12;
            temnum[0] = Gamedata.sys_craftmaterial_weaponset4[craftort];
            temnum[1] = Gamedata.sys_craftmaterial_weaponset4[supplie2];
            temnum[2] = Gamedata.sys_craftmaterial_weaponset4[supplie3];
            temnum[3] = Gamedata.sys_craftmaterial_weaponset4[costcort];
            temname[0] = Gamedata.sys_craftsupplie_wepnameset3[craftort];
            temname[1] = Gamedata.sys_craftsupplie_wepnameset3[supplie2];
            temname[2] = Gamedata.sys_craftsupplie_wepnameset3[supplie3];
            bagsupplies1 = Gamedata.sys_material_names.indexOf(temname[0]);
            if(bagsupplies1==-1){bagsupplies1 = Gamedata.sys_item_names.indexOf(temname[0]);num=0;}
            bagsupplies2 = Gamedata.sys_material_names.indexOf(temname[1]);
            if(bagsupplies2==-1){bagsupplies2 = Gamedata.sys_item_names.indexOf(temname[1]);num2=0;}
            bagsupplies3 = Gamedata.sys_material_names.indexOf(temname[2]);
            if(bagsupplies3==-1){bagsupplies3 = Gamedata.sys_item_names.indexOf(temname[2]);num3=0;}
            temnum[4] = bagsupplies1+num;
            temnum[5] = bagsupplies2+num;
            temnum[6] = bagsupplies3+num;
            temnum[7] = equipindex;
            temname[3] = namecheck;
            craftembed.setDescription(":tools: do you want to craft `" + namecheck +"`?\nYou need:");
            craftembed.addField(temname[0],"`"+itembagdata[temnum[4]]+"`/"+temnum[0]);
            craftembed.addField(temname[1],"`"+itembagdata[temnum[5]]+"`/"+temnum[1]);
            craftembed.addField(temname[2],"`"+itembagdata[temnum[6]]+"`/"+temnum[2]);
            craftembed.addField("Cost: `"+temnum[3]+"`","Currency Balance: `"+User.currency+"`");
            message.channel.send(craftembed.setFooter(" command: -craft yes to confirm.")).then((message)=>{message.react('✅')
            const filter = (reaction, user) => {
             return ['✅'].includes(reaction.emoji.name) && user.id === User.id;
         };
            message.awaitReactions(filter, { max: 1})
         .then(collected => {
             const reaction = collected.first();
     
             if (reaction.emoji.name === '✅') {
                 confirm(message);
             }
         })});
            }
            else{
                message.channel.send(craftembed.setDescription(":x: Cannot craft "+namecheck));
            }
        }
        else{
            message.channel.send(craftembed.setDescription(":x: Cannot craft "+namecheck));
        }
    }
    else{
        message.channel.send(craftembed.setDescription(":x: that item does not exist."));
    }
}}
else{
    message.channel.send(craftembed.setDescription(":x: Craft has not been unlock yet. \nYou need to reach the 3rd floor."));
}}else{
    message.channel.send(craftembed.setDescription(":x: You  cannot enter the shop because you are in a battle.\nTo leave the battle, command: `-act flee`"));
}
}
module.exports.key = {
    name: "craft",
    description: "craft your items."
}