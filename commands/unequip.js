const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {
    if(User.Ary_Equipmentnames)var equipnames = User.Ary_Equipmentnames.split("<:>");
    else return message.channel.send(unequipembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
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
    const unequipembed = new Discord.MessageEmbed();
    unequipembed.setColor(User.colortheme);
    var checkresult;
    var checkresult = equipnames.indexOf("");
            if (checkresult != -1)
            {
                var cort = 5 * checkresult;
                var type = 0 + cort;
                var phy = 1 + cort;
                var per = 2 + cort;
                var dur = 3 + cort;
                var durdmg = 4 + cort;
                if (arg == "weapon")
                {
                    equipnames[checkresult] = profilenames[1];
                    equipmentdata[type] = profiledata[3];
                    equipmentdata[phy] = profiledata[4];
                    equipmentdata[per] = profiledata[5];
                    equipmentdata[dur] = profiledata[6];
                    equipmentdata[durdmg] = profiledata[7];
                    profilenames[1] = "";
                    profiledata[3] = 0;
                    profiledata[4] = 0;
                    profiledata[5] = 0;
                    profiledata[6] = 0;
                    profiledata[7] = 0;
                    User.Ary_Equipmentnames = equipnames.join("<:>");
                    User.Ary_Equipmentdata = equipmentdata.join("<:>");
                    User.Ary_HH3ProfileNames = profilenames.join("<:>");
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                   unequipembed.setDescription(":gear: Your " + equipnames[checkresult] + " has been unquipped.");
                    await message.channel.send(unequipembed);
                }
                else if (arg == "armor")
                {
                    equipnames[checkresult] = profilenames[2];
                    equipmentdata[type] = 0;
                    equipmentdata[phy] = profiledata[8];
                    equipmentdata[per] = profiledata[9];
                    equipmentdata[dur] = profiledata[10];
                    equipmentdata[durdmg] = profiledata[11];
                    profilenames[2] = "";
                    profiledata[8] = 0;
                    profiledata[9] = 0;
                    profiledata[10] = 0;
                    profiledata[11] = 0;
                    User.Ary_Equipmentnames = equipnames.join("<:>");
                    User.Ary_Equipmentdata = equipmentdata.join("<:>");
                    User.Ary_HH3ProfileNames = profilenames.join("<:>");
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    unequipembed.setDescription(":gear: Your " + equipnames[checkresult] + " has been unquipped.");
                    await message.channel.send(unequipembed);
                }
            }
            else
            {
                unequipembed.setDescription(":x: Your bag does not have space to do that.");
                await message.channel.send(unequipembed);
            }
}
module.exports.key = {
    name: "unequip",
    description: "unquip your equipment."
}