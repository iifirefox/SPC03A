const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
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
      const sellembed = new Discord.MessageEmbed();
    sellembed.setColor("#00FDFF");
    if(User.CombatMode==0){
      if(hh3funset1[0]==1){
    var num = Number(arg);
    var equipindex;
     var theprice;
    if (num ==0 | isNaN(num)){
        if (hh3funset1[6] >= 1 & arg == "yes"){
            var argcounter = 5 * hh3funset1[7];
                        var typecort = 0 + argcounter;
                        var phycort = 1 + argcounter;
                        var precentcort = 2 + argcounter;
                        var durcort = 3 + argcounter;
                        var durdmgcort = 4 + argcounter;
                        temnamesav = equipnames[hh3funset1[7]];
                        tempricesav = hh3funset1[8];
                        equipnames[hh3funset1[7]] = "";
                        equipmentdata[typecort] = 0;
                        equipmentdata[phycort] = 0;
                        equipmentdata[precentcort] = 0;
                        equipmentdata[durcort] = 0;
                        equipmentdata[durdmgcort] = 0;
                        User.currency += hh3funset1[8];
                        hh3funset1[7] = 0;
                        hh3funset1[6] = 0;
                        hh3funset1[8] = 0;
                        User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                        User.Ary_Equipmentnames = equipnames.join("<:>");
                        User.Ary_Equipmentdata = equipmentdata.join("<:>");
                        sellembed.setDescription(":moneybag:  `" + temnamesav + "` has been sold for `"+tempricesav+"`");
        }
        else{
            if(equipnames.every(a=>a == "")){
                sellembed.setTitle(":school_satchel: Equipment Bag");
                    sellembed.setDescription(":x: you don't have any items in your bag.");
                sellembed.addField("0/8","Currency balance: `"+User.currency+"`");
                    sellembed.setFooter("To sell an item Command: -sell <number in list>");
            }else{
        var temnum = [0];
                    var temname = undefined;
                    for (var i = 0; i < equipnames.length; i++)
                    {
                        if (equipnames[i] !== "")
                        {
                            temname = equipnames[i];
                            equipnames[i] = "";
                            equipnames[temnum[0]] = temname;
                            var argcounter = 5 * i;
                            var typecort = 0 + argcounter;
                            var phycort = 1 + argcounter;
                            var precentcort = 2 + argcounter;
                            var durcort = 3 + argcounter;
                            var durdmgcort = 4 + argcounter;
                            var sargcounter = 5 * temnum[0];
                            var stypecort = 0 + sargcounter;
                            var sphycort = 1 + sargcounter;
                            var sprecentcort = 2 + sargcounter;
                            var sdurcort = 3 + sargcounter;
                            var sdurdmgcort = 4 + sargcounter;
                           var typenum =equipmentdata[typecort];
                           var phynum = equipmentdata[phycort];
                           var percentnum = equipmentdata[precentcort];
                           var durabilitynum = equipmentdata[durcort];
                           var durdmgnum = equipmentdata[durdmgcort];
                            equipmentdata[typecort] = 0;
                            equipmentdata[phycort] = 0;
                            equipmentdata[precentcort] = 0;
                            equipmentdata[durcort] = 0;
                            equipmentdata[durdmgcort] = 0;
                            equipmentdata[stypecort] = typenum;
                            equipmentdata[sphycort] = phynum;
                            equipmentdata[sprecentcort] = percentnum;
                            equipmentdata[sdurcort] = durabilitynum;
                            equipmentdata[sdurdmgcort] = durdmgnum;
                            temnum[0]++;
                            User.Ary_Equipmentnames = equipnames.join("<:>");
                            User.Ary_Equipmentdata = equipmentdata.join("<:>");
                        }
                    }
                    temnum[0] = 0;
                    equipnames = User.Ary_Equipmentnames.split("<:>");
                    rawequipmentdata = User.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
    for(var index=0; index<rawequipmentdata.length;index++){
        equipmentdata[index]= Number(rawequipmentdata[index])
    }
                    sellembed.setTitle(":school_satchel: Equipment Bag");
                    for (var i = 0; i < equipnames.length; i++)
                    {
                        if (equipnames[i] !== "")
                        {
                            var dargcounter = 5 * i;
                            var dtypecort = 0 + dargcounter;
                            var dphycort = 1 + dargcounter;
                            var dprecentcort = 2 + dargcounter;
                            var ddurcort = 3 + dargcounter;
                            var durdmgcort = 4 + dargcounter;
                            var lister = 1 + i;
                            var display = equipmentdata[dprecentcort] * 100;
                                 display = Math.round(display);
                                 if(Gamedata.sys_sword_names.includes(equipnames[i])){ equipindex = Gamedata.sys_sword_names.indexOf(equipnames[i]); theprice = Gamedata.sys_weapon_price[equipindex]/3;theprice= Math.round(theprice)}
                               else if(Gamedata.sys_wand_names.includes(equipnames[i])){ equipindex = Gamedata.sys_wand_names.indexOf(equipnames[i]);theprice = Gamedata.sys_weapon_price[equipindex]/3;theprice= Math.round(theprice)}
                               else if(Gamedata.sys_bow_names.includes(equipnames[i])){ equipindex = Gamedata.sys_bow_names.indexOf(equipnames[i]);theprice = Gamedata.sys_weapon_price[equipindex]/3;theprice= Math.round(theprice)}
                               else if(Gamedata.sys_armor_names.includes(equipnames[i])){ equipindex = Gamedata.sys_armor_names.indexOf(equipnames[i]);theprice = Gamedata.sys_armor_price[equipindex]/3;theprice= Math.round(theprice)};
                            if (equipmentdata[dtypecort] > 0)
                            {
                                sellembed.addField(lister + "  " + equipnames[i], "Atk: " + equipmentdata[dphycort] + "\n AddAtk: " + display + "%\nDurability: " + equipmentdata[ddurcort]+"\ncurrency: `"+theprice+"`");
                                temnum[0]++;
                            }
                            else
                            {
                                sellembed.addField(lister + "  " + equipnames[i], "Def: " + equipmentdata[dphycort] + "\n AddDef: " + display + "%\nDurability: " + equipmentdata[ddurcort]+"\ncurrency: `"+theprice+"`");
                                temnum[0]++;
                            }
                        }}
                    
                    sellembed.addField(temnum + "/8","Currency balance: `"+User.currency+"`");
                    sellembed.setFooter("To sell an item Command: -sell <number in list>");
                }
                }
                    await message.channel.send(sellembed);
    }else{
        num--;
                if (num <= equipnames.length - 1 & num > -1)
                {
                    if (equipnames[num] != "")
                    {
                        if(Gamedata.sys_sword_names.includes(equipnames[num])){ equipindex = Gamedata.sys_sword_names.indexOf(equipnames[num]); theprice = Gamedata.sys_weapon_price[equipindex]/3;theprice= Math.round(theprice)}
                       else if(Gamedata.sys_wand_names.includes(equipnames[num])){ equipindex = Gamedata.sys_wand_names.indexOf(equipnames[num]);theprice = Gamedata.sys_weapon_price[equipindex]/3;theprice= Math.round(theprice)}
                       else if(Gamedata.sys_bow_names.includes(equipnames[num])){ equipindex = Gamedata.sys_bow_names.indexOf(equipnames[num]);theprice = Gamedata.sys_weapon_price[equipindex]/3;theprice= Math.round(theprice)}
                       else if(Gamedata.sys_armor_names.includes(equipnames[num])){ equipindex = Gamedata.sys_armor_names.indexOf(equipnames[num]);theprice = Gamedata.sys_armor_price[equipindex]/3;theprice= Math.round(theprice)}
                        sellembed.setDescription(":warning: Are you sure you want to sell `" + equipnames[num] +"` for `"+theprice+ "` currency?");
                        sellembed.setFooter(" command: -sell yes to confirm.");
                        hh3funset1[6] = 1;
                        hh3funset1[7] = num;
                        hh3funset1[8] = theprice;
                        User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                        await message.channel.send(sellembed);
                    }
                    else
                    {
                        await message.channel.send(":x: That item doesn't exist.");
                    }
                }
                else
                {
                    await  message.channel.send(":x: That item doesn't exist.");
                }
    }}
    else{
        sellembed.setDescription(":x: Sell has not been unlock yet. \nYou need to reach the 3rd floor.");
        message.channel.send(sellembed);
    }}
    else{
        sellembed.setDescription(":x: You  cannot enter the shop because you are in a battle.\nTo leave the battle, command: `-act flee`");
        message.channel.send(sellembed);
    }
}
module.exports.key = {
    name: "sell",
    description: "Sell items of choice."
}