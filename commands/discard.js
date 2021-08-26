const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {
    const disembed = new Discord.MessageEmbed();
    if(User.Ary_Equipmentnames){
    var equipnames = User.Ary_Equipmentnames.split("<:>");}
    else return message.channel.send(disembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
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
      disembed.setColor(User.colortheme);
    var numarg = Number(arg)
            if (numarg ==0 | isNaN(numarg))
            {
                if (arg == "weapon")
                {
                    disembed.setDescription(":warning: Are you sure you want to disard `" + profilenames[1] + "`?");
                    disembed.setFooter(" command: -discard yes to confirm.");
                    hh3funset1[6] = 2;
                    User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                    await  message.channel.send(disembed);
                }
                else if (arg == "armor")
                {
                    disembed.setDescription(":warning: Are you sure you want to disard `" + profilenames[2] + "`?");
                    disembed.setFooter(" command: -discard yes to confirm.");
                    hh3funset1[6] = 3;
                    User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                    await  message.channel.send(disembed);
                }
                else if (hh3funset1[6] >= 1 & arg == "yes")
                {
                    var temnamesav;
                    if (hh3funset1[6] == 1)
                    {
                        var argcounter = 5 * hh3funset1[7];
                        var typecort = 0 + argcounter;
                        var phycort = 1 + argcounter;
                        var precentcort = 2 + argcounter;
                        var durcort = 3 + argcounter;
                        var durdmgcort = 4 + argcounter;
                        temnamesav = equipnames[hh3funset1[7]];
                        equipnames[hh3funset1[7]] = "";
                        equipmentdata[typecort] = 0;
                        equipmentdata[phycort] = 0;
                        equipmentdata[precentcort] = 0;
                        equipmentdata[durcort] = 0;
                        equipmentdata[durdmgcort] = 0;
                        hh3funset1[7] = 0;
                        hh3funset1[6] = 0;
                        User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                        User.Ary_Equipmentnames = equipnames.join("<:>");
                        User.Ary_Equipmentdata = equipmentdata.join("<:>");
                        disembed.setDescription(":gear: `" + temnamesav + "` has been discarded.");
                        await message.channel.send(disembed);
                    }
                    else if (hh3funset1[6] == 2)
                    {
                        temnamesav = profilenames[1];
                        profilenames[1] = ""; // equipped weapon name
                        profiledata[3] = 0; // equipped weapon type
                        profiledata[4] = 0; // equipped phy number
                        profiledata[5] = 0; // equipped precent number
                        profiledata[6] = 0; // equipped dur number
                        profiledata[7] = 0; // equipped durdmg number
                        hh3funset1[6] = 0;
                        hh3funset1[7] = 0;
                        User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                        User.Ary_HH3ProfileNames = profilenames.join("<:>");
                        User.Ary_HH3ProfileData = profiledata.join("<:>");
                        disembed.setDescription(":gear: `" + temnamesav + "` has been discarded.");
                        await message.channel.send(disembed);
                    }
                    else if (hh3funset1[6] == 3)
                    {
                        temnamesav = profilenames[2];
                        profilenames[2] = ""; // equipped weapon name
                        profiledata[8] = 0; // equipped phy number
                        profiledata[9] = 0; // equipped precent number
                        profiledata[10] = 0; // equipped dur number
                        profiledata[11] = 0; // equipped durdmg number
                        hh3funset1[6] = 0;
                        hh3funset1[7] = 0;
                        User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                        User.Ary_HH3ProfileNames = profilenames.join("<:>");
                        User.Ary_HH3ProfileData = profiledata.join("<:>");
                        disembed.setDescription(":gear: `" + temnamesav + "` has been discarded.");
                        await message.channel.send(disembed);
                    }
                }
                else
                {
                    await message.channel.send(":x: That equip doesn't exist, please try the numbers listed.");
                }
            }
            else
            {
                numarg--;
                if (numarg <= equipnames.length - 1 & numarg > -1)
                {
                    if (equipnames[numarg] != "")
                    {
                        disembed.setDescription(":warning: Are you sure you want to disard `" + equipnames[numarg] + "`?");
                        disembed.setFooter(" command: -discard yes to confirm.");
                        hh3funset1[6] = 1;
                        hh3funset1[7] = numarg;
                        User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                        await message.channel.send(disembed);
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
            }
}
module.exports.key = {
    name: "discard",
    description: "discard your equipment."
}