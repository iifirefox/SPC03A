const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    const repairembed = new Discord.MessageEmbed();
    repairembed.setColor("#FFC500");
    var equipnames = User.Ary_Equipmentnames.split("<:>");
    var profilenames = User.Ary_HH3ProfileNames.split("<:>");
    var rawequipmentdata = User.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
    for(var index=0; index<rawequipmentdata.length;index++){
        equipmentdata[index]= Number(rawequipmentdata[index])
    }
    var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index])
    }
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      }
      if(User.CombatMode==0){
    if(hh3funset1[0]==1){
    var num = Number(arg)
    if (num ==0 | isNaN(num)){
        var lister =1;
        var wepprice = 15;
        var armprice = 18;
        if(profilenames[1]!=""){
            var newprice;
            if(Gamedata.sys_sword_names.find(a=>a==profilenames[1])){newprice= Gamedata.sys_sword_names.indexOf(profilenames[1])*wepprice; newprice+=3}
            else if(Gamedata.sys_wand_names.find(a=>a==profilenames[1])){newprice= Gamedata.sys_wand_names.indexOf(profilenames[1])+1;newprice*=wepprice; newprice+=3}
            else if(Gamedata.sys_bow_names.find(a=>a==profilenames[1])){newprice= Gamedata.sys_bow_names.indexOf(profilenames[1])+1;newprice*=wepprice; newprice+=3}
            else if(profilenames[1].includes("Armor")){repairembed.setDescription(":x: Fatal Error: Your Game is glitched, please wait for future updates.");return};
            repairembed.addField(lister + "  " +profilenames[1]+"  `Equipped`","Durability:"+profiledata[6]+"%\n Price: `"+newprice+"`");
            lister++;
        }
        if(profilenames[2]!=""){
            var newpricea;
            if(Gamedata.sys_armor_names.find(a=>a==profilenames[2])){newpricea= Gamedata.sys_armor_names.indexOf(profilenames[2])*armprice; newpricea+=6}
            else if(!profilenames[2].includes("Armor")){repairembed.setDescription(":x: Fatal Error: Your Game is glitched, please wait for future updates.");return};
            repairembed.addField(lister + "  " +profilenames[2]+"  `Equipped`","Durability:"+profiledata[10]+"%\n Price: `"+newpricea+"`");
            lister++;
        }
        for(var repairdex=0; repairdex<equipnames.length;repairdex++){
            if (equipnames[repairdex] !== "")
            {
                var anewprice;
                var dargcounter = 5 * repairdex;
                var dtypecort = 0+dargcounter;
                var ddurcort = 3 + dargcounter;
                if (!equipnames[repairdex].includes("Armor"))
                {
                    if(Gamedata.sys_sword_names.find(a=>a==equipnames[repairdex])){anewprice= Gamedata.sys_sword_names.indexOf(equipnames[repairdex])*wepprice; newprice+=3}
                    else if(Gamedata.sys_wand_names.find(a=>a==equipnames[repairdex])){anewprice= Gamedata.sys_wand_names.indexOf(equipnames[repairdex])+1;anewprice*=wepprice; anewprice+=3}
                    else if(Gamedata.sys_bow_names.find(a=>a==equipnames[repairdex])){anewprice= Gamedata.sys_bow_names.indexOf(equipnames[repairdex])+1;anewprice*=wepprice; anewprice+=3}
                    repairembed.addField(lister + "  " + equipnames[repairdex], "Durability: " + equipmentdata[ddurcort]+"%\n Price: `"+anewprice+"`");
                    lister++;
                }
                else
                {
                    if(Gamedata.sys_armor_names.find(a=>a==equipnames[repairdex])){anewprice= Gamedata.sys_armor_names.indexOf(equipnames[repairdex])*armprice; anewprice+=6}
                    repairembed.addField(lister + "  " + equipnames[repairdex], "Durability: " + equipmentdata[ddurcort]+"%\n Price: `"+anewprice+"`");
                    lister++;
                }
            }
        }
        repairembed.addField("Balance: `"+User.currency+"`","To repair command: -repair <Listed Number>")
    }
    else{
        num--;
        var getdatanames=[];
        var getdatanum = [];
        var vindex=0;
        if(profilenames[1]!=""){getdatanames[vindex]=profilenames[1]; getdatanum[0] =profiledata[3];getdatanum[1]= profiledata[6]; vindex++};
        if(profilenames[2]!=""){getdatanames[vindex]=profilenames[2]; var dataset = vindex*2; var dataset1= 1+dataset; getdatanum[dataset] =0;getdatanum[dataset1]= profiledata[10]; vindex++};
        var plusloop = vindex+1;
        var equipnamedex = 0;
        for(var newdex = vindex; newdex<plusloop;newdex++){
            if (equipnames[equipnamedex] !== "")
            {
                var dargcounter = 5 * equipnamedex;
                if (equipmentdata[dargcounter] > 0)
                {
                    getdatanames[newdex]=equipnames[equipnamedex]; getdatanum[equipnamedex] =equipmentdata[dargcounter];
                    plusloop++;
                }
                else
                {
                    getdatanames[newdex]=equipnames[equipnamedex]; getdatanum[equipnamedex] =equipmentdata[dargcounter];
                    plusloop++;
                }
                equipnamedex++;
        }
    }
        if (getdatanames[num]!="" & getdatanames[num]!=undefined & num > -1){
            var getprice;
            var gettype;
            if(Gamedata.sys_sword_names.find(a=>a==getdatanames[num])){getprice = Gamedata.sys_sword_names.indexOf(getdatanames[num]); gettype=1;}
            else if(Gamedata.sys_wand_names.find(a=>a==getdatanames[num])){getprice = Gamedata.sys_wand_names.indexOf(getdatanames[num])+1; gettype=2;}
            else if(Gamedata.sys_bow_names.find(a=>a==getdatanames[num])){getprice = Gamedata.sys_bow_names.indexOf(getdatanames[num])+1; gettype=3;}
            else if(Gamedata.sys_armor_names.find(a=>a==getdatanames[num])){getprice = Gamedata.sys_armor_names.indexOf(getdatanames[num]); gettype=0;}
            var wepprice = 15;
            var armprice = 18;
                var ori;
                if(profilenames[1]!=""&profilenames[2]!=""){ori=2}
                else if(profilenames[1]!=""||profilenames[2]!=""){ori=1}
                if(num<1&ori==1||num<2&ori==2){
                if(gettype>0){
                    var newprice = getprice*wepprice;
                    newprice+=3;
                    if(User.currency>= newprice){
                    User.currency -= newprice;
                    profiledata[3]= gettype;
                    profiledata[6]=100;
                    repairembed.setDescription(":tools: `"+profilenames[1]+"` has been repaired!");}
                    else{
                        repairembed.setDescription(":x: You do not have enough Currency");
                    }
                }
               else {
                var newprice = getprice*armprice;
                newprice+=6
                if(User.currency>= newprice){
                    User.currency -= newprice;
                    profiledata[14]= 0;
                    profiledata[10]=100;
                    repairembed.setDescription(":tools: `"+profilenames[2]+"` has been repaired!");}
                    else{
                        repairembed.setDescription(":x: You do not have enough Currency");
                    }
                }
                }
                else{
            var numindex =num;
            if(ori==1){numindex-=1}
            else if(ori==2){numindex-=2}
                var dargcounter = 5 * numindex;
                var ddurcort = 3 + dargcounter;
                if(gettype>0){
                    var newprice = getprice*wepprice;
                    newprice+=3
                    if(User.currency>= newprice){
                    User.currency -= newprice;
                    equipmentdata[dargcounter]= gettype;
                    equipmentdata[ddurcort]=100;
                    repairembed.setDescription(":tools: `"+getdatanames[num]+"` has been repaired!");}
                    else{
                        repairembed.setDescription(":x: You do not have enough Currency");
                    }
                }
                else{
                    var newprice = getprice*armprice;
                    newprice+=6
                if(User.currency>= newprice){
                    User.currency -= newprice;
                equipmentdata[dargcounter]= gettype;
                    equipmentdata[ddurcort]=100;
                    repairembed.setDescription(":tools: `"+getdatanames[num]+"` has been repaired!");}
                    else{
                        repairembed.setDescription(":x: You do not have enough Currency");
                    }
                }
                }
                User.Ary_Equipmentdata = equipmentdata.join("<:>");
                User.Ary_HH3ProfileData = profiledata.join("<:>");
        }
        else{
            repairembed.setDescription(":x: That item doesn't exist.");
        }
    }}
    else{
        repairembed.setDescription(":x: Repair has not been unlock yet. \nYou need to reach the 3rd floor.");
    }}
    else{
        repairembed.setDescription(":x: You  cannot enter the shop because you are in a battle.\nTo leave the battle, command: `-act flee`");
    }
    message.channel.send(repairembed);
}
module.exports.key = {
    name: "repair",
    description: "repair your items."
}