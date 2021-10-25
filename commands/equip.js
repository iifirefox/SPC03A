const Discord = require('discord.js');
module.exports.run = async (message, arg,User) => {
    const equipembed = new Discord.MessageEmbed();
    var num = Number(arg);
    if(User.Ary_Equipmentnames)var equipnames = User.Ary_Equipmentnames.split("<:>");
    else return message.channel.send(equipembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    var profilenames = User.Ary_HH3ProfileNames.split("<:>");
    var rawequipmentdata = User.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
    for(var index=0; index<rawequipmentdata.length;index++){
        equipmentdata[index]= Number(rawequipmentdata[index]);
    }
    var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index]);
    }
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
    var hh3funset1 = [];
    for(var index=0; index<rawhh3funset1.length;index++){
        hh3funset1[index]= Number(rawhh3funset1[index]);
    };
    var rawdata = User.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index]);
    }
    equipembed.setColor(User.colortheme);
            if (num ==0 | isNaN(num))
            {
                if (equipnames.every(a=>a == ""))
                {
                    equipembed.setTitle(":school_satchel: Equipment Bag");
                    equipembed.setDescription(":x: you don't have any items in your bag.");
                    equipembed.setFooter("0/8 \nto Equip Command: -equip with a number. \n to Discard Command: -discard with a number or weapon to discard weapon, armor.\n to unequip Command: -unequip with weapon or armor.");
                    await message.channel.send(equipembed);
                }
                else
                {
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
                    equipembed.setTitle(":school_satchel: Equipment Bag");
                    if(hh3funset1[5]==2){
                        equipembed.setDescription("**To Equip, Command: `equip <Number next to the item's name>`**To learn about combat command`fighthelp`\nTo continue the game command`roll`")
                    }
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
                            if (equipmentdata[dtypecort] > 0)
                            {
                                equipembed.addField(lister + "  " + equipnames[i], "Atk: " + equipmentdata[dphycort] + "\n AddAtk: " + display + "%\nDurability: " + equipmentdata[ddurcort]);
                                temnum[0]++;
                            }
                            else
                            {
                                equipembed.addField(lister + "  " + equipnames[i], "Def: " + equipmentdata[dphycort] + "\n AddDef: " + display + "%\nDurability: " + equipmentdata[ddurcort]);
                                temnum[0]++;
                            }
                        }
                    }
                    if(hh3funset1[5]!=2){
                    equipembed.setFooter(temnum + "/8\nto Equip Command: -equip with a number. \n to Discard Command: -discard with a number or weapon to discard weapon, armor.\n to unequip Command: -unequip with weapon or armor.");
                };
                    await message.channel.send(equipembed);
                }
            }
            else
            {
                num--;
                if (num <= equipnames.length - 1 & num > -1)
                {
                    temname = equipnames[num];
                    if (temname != ""| temname != undefined)
                    {
                        var argcounter = 5 * num;
                        var typecort = 0 + argcounter;
                        var phycort = 1 + argcounter;
                        var precentcort = 2 + argcounter;
                        var durcort = 3 + argcounter;
                        var durdmgcort = 4 + argcounter;
                       var phynum = equipmentdata[phycort];
                       var percentnum = equipmentdata[precentcort];
                       var durabilitynum = equipmentdata[durcort];
                       var durdmgnum = equipmentdata[durdmgcort];
                        if (equipmentdata[typecort] > 0)
                        {
                            equipnames[num] = profilenames[1];
                            profilenames[1] = temname;
                            typenum = equipmentdata[typecort];
                            equipmentdata[typecort] = profiledata[3];
                            profiledata[3] = typenum;
                            equipmentdata[phycort] = profiledata[4];
                            profiledata[4] = phynum;
                            equipmentdata[precentcort] = profiledata[5];
                            profiledata[5] = percentnum;
                            equipmentdata[durcort] = profiledata[6];
                            profiledata[6] = durabilitynum;
                            equipmentdata[durdmgcort] = profiledata[7];
                            profiledata[7] = durdmgnum;
                            if(profilenames[1].includes("Sword")){mdata[9]++;User.Metadata = mdata.join("<:>");}
                           else if(profilenames[1].includes("Wand")){mdata[10]++;User.Metadata = mdata.join("<:>");}
                           else if(profilenames[1].includes("Bow")){mdata[11]++;User.Metadata = mdata.join("<:>");}
                        }
                        else
                        {
                            equipnames[num] = profilenames[2];
                            profilenames[2] = temname;
                            equipmentdata[typecort] = 0;
                            equipmentdata[phycort] = profiledata[8];
                            profiledata[8] = phynum;
                            equipmentdata[precentcort] = profiledata[9];
                            profiledata[9] = percentnum;
                            equipmentdata[durcort] = profiledata[10];
                            profiledata[10] = durabilitynum;
                            equipmentdata[durdmgcort] = profiledata[11];
                            profiledata[11] = durdmgnum;
                        }
                            User.Ary_Equipmentnames = equipnames.join("<:>");
                            User.Ary_Equipmentdata = equipmentdata.join("<:>");
                            User.Ary_HH3ProfileNames = profilenames.join("<:>");
                            User.Ary_HH3ProfileData = profiledata.join("<:>");
                            if(hh3funset1[5]!=2){
                        equipembed.setDescription(":gear: " + temname + " is equipped.");
                        if(hh3funset1[5]=3&!profilenames[1].includes("Stick")&!profilenames[1].includes("")&profilenames[1]!=undefined){
                            equipembed.setFooter("This Weapon is able to use skills.\nTo view skills, command: -skills");
                            hh3funset1[5]++;
                        }
                    }
                        else{
                            equipembed.setDescription(":gear: " + temname + " is equipped.\n:small_blue_diamond: To check your bag, Command: `items`\n:small_blue_diamond: To learn to fight command`fighthelp`\nTo continue the game `-roll`");
                            hh3funset1[5]++;
                            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                        }
                        await message.channel.send(equipembed);
                    }
                    else
                    {
                         message.channel.send(":x: That equip doesn't exist, please try the numbers listed.");
                    }
                }
                else
                {
                     message.channel.send(":x: That equip doesn't exist, please try the numbers listed.");
                }
            }
}
module.exports.key = {
    name: "equip",
    description: "equip your armor or sword"
}