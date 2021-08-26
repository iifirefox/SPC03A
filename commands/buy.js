const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    const buyembed = new Discord.MessageEmbed();
    buyembed.setColor("#00FDFF");
    function IgnoringCase(text, other) {
        return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
    }
    if(User.Shop_itemsnames)var itemnames = User.Shop_itemsnames.split("<:>");
    else return message.channel.send(buyembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    var itembagnames = User.Ary_itembagnames.split("<:>");
    var equipnames = User.Ary_Equipmentnames.split("<:>");
    var rawequipmentdata = User.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
    for(var index=0; index<rawequipmentdata.length;index++){
        equipmentdata[index]= Number(rawequipmentdata[index])
    }
    var rawitemsdata = User.Shop_itemsdata.split("<:>");var itemsdata = [];
    for(var index=0; index<rawitemsdata.length;index++){
        itemsdata[index]= Number(rawitemsdata[index])
    }
    var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index])
    }
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
    var hh3funset1 = [];
    for(var index=0; index<rawhh3funset1.length;index++){
        hh3funset1[index]= Number(rawhh3funset1[index])
    }
    if(User.CombatMode==0){  
if(hh3funset1[0]==1){
var theitem = arg.split("x");
    var namecheck = itemnames.find(a=>IgnoringCase(a,theitem[0].trimEnd()));
    if(!namecheck == undefined || !namecheck == ""){
        var itemindex = itemnames.indexOf(namecheck);
        var stock = 6+ itemindex;
        if(itemsdata[stock] >= 1){
            if(User.currency >= itemsdata[itemindex]){
                if(namecheck.includes("Sword")||namecheck.includes("Wand")||namecheck.includes("Bow")||namecheck.includes("Armor")){
                    var checkresult;
                    var checkresult = equipnames.indexOf("");
                if(checkresult != -1){
                    var dataindex;
                    var datakey;
                    var bagchort = 5*checkresult;
                    var typecort = 0 +bagchort;
                    var phycort = 1 + bagchort;
                    var percort = 2 + bagchort;
                    var durcort = 3 + bagchort;
                    var durdmgcort = 4+ bagchort;
                    var datacort = 3;
                    var dataphy = 0;
                    var dataper = 1;
                    var datadurdmg = 2;
                    if(Gamedata.sys_sword_names.includes(namecheck)){ dataindex = Gamedata.sys_sword_names.indexOf(namecheck); 
                      datakey=  datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[typecort]=1; equipmentdata[phycort] = Gamedata.sys_sword_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_sword_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_sword_dataset[datadurdmg];
                    };
                    if(Gamedata.sys_wand_names.includes(namecheck)){ dataindex = Gamedata.sys_wand_names.indexOf(namecheck);
                       datakey = datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[typecort]=2; equipmentdata[phycort] = Gamedata.sys_wand_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_wand_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_wand_dataset[datadurdmg];
                    };
                    if(Gamedata.sys_bow_names.includes(namecheck)){ dataindex = Gamedata.sys_bow_names.indexOf(namecheck);
                       datakey = datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[typecort]=3; equipmentdata[phycort] = Gamedata.sys_bow_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_bow_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_bow_dataset[datadurdmg];};
                    if(Gamedata.sys_armor_names.includes(namecheck)){ dataindex = Gamedata.sys_armor_names.indexOf(namecheck);
                       datakey = datacort*dataindex; dataphy+=datakey; dataper+=datakey; datadurdmg+=datakey;
                        equipmentdata[typecort]=0; equipmentdata[phycort] = Gamedata.sys_armor_dataset[dataphy];
                        equipmentdata[percort] = Gamedata.sys_armor_dataset[dataper];equipmentdata[durdmgcort] = Gamedata.sys_armor_dataset[datadurdmg];};
                    equipnames[checkresult] =namecheck;
                    equipmentdata[durcort] = 100;
                    User.currency -= itemsdata[itemindex];
                    itemnames[itemindex] ="";
                    itemsdata[stock]=0;
                    User.Shop_itemsnames = itemnames.join("<:>");
                    User.Shop_itemsdata = itemsdata.join("<:>");
                    User.Ary_Equipmentnames = equipnames.join("<:>");
                    User.Ary_Equipmentdata = equipmentdata.join("<:>");
                    buyembed.setDescription(":shopping_bags: "+User.name+" has bought "+namecheck);
                }
                else{
                    buyembed.setDescription(":x: "+User.name+" equipment bag is full");
                }
                }else{
                    var mtl;
                    var itm;
                    if(arg.includes("x")){
                        theitem[1].trim();
                        var times = Number(theitem[1]);
                        if(times<= itemsdata[stock]& times>-1){
                            if(User.currency >= itemsdata[itemindex]*times){
                                mtl = Gamedata.sys_material_names.indexOf(namecheck);
                                itm  = Gamedata.sys_item_names.indexOf(namecheck);
                                if(itm!=-1){
                                    if(itembagnames[itm]==""){
                                        itembagnames[itm] = namecheck;
                                    }
                                    itembagdata[itm]+=times;
                                    User.currency -= itemsdata[itemindex]*times;
                                    itemsdata[stock]-=times;
                                    if(itemsdata[stock]<=0){
                                        itemnames[itemindex] = "";
                                    }
                           }
                                else if(mtl!=-1){
                                    mtl+=12;
                                     if(itembagnames[mtl]==""){
                                         itembagnames[mtl] = namecheck;
                                     }
                                     itembagdata[mtl]+=times;
                                     User.currency -= itemsdata[itemindex]*times;
                                     itemsdata[stock]-= times;
                                     if(itemsdata[stock]<=0){
                                         itemnames[itemindex] = "";
                                     }
                                 }
                            User.Ary_itembagnames = itembagnames.join("<:>");
                            User.Ary_itembagdata = itembagdata.join("<:>");
                            User.Shop_itemsnames = itemnames.join("<:>");
                            User.Shop_itemsdata = itemsdata.join("<:>");
                            buyembed.setDescription(":shopping_bags: "+User.name+" has bought "+namecheck+" x"+times);
                        }
                        else{
                            buyembed.setDescription(":x: "+User.name+" do not have enough Currency");
                        }
                        }
                        else{
                            buyembed.setDescription(":x: not enough in stock");
                        }
                    }else{
                        mtl = Gamedata.sys_material_names.indexOf(namecheck);
                           itm  = Gamedata.sys_item_names.indexOf(namecheck);
                           if(itm!=-1){
                            if(itembagnames[itm]==""){
                                itembagnames[itm] = namecheck;
                            }
                            itembagdata[itm]++;
                            User.currency -= itemsdata[itemindex];
                            itemsdata[stock]--;
                            if(itemsdata[stock]<=0){
                                itemnames[itemindex] = "";
                            }
                        }
                           else if(mtl!=-1){
                               mtl+=12
                                if(itembagnames[mtl]==""){
                                    itembagnames[mtl] = namecheck;
                                }
                                itembagdata[mtl]++;
                                User.currency -= itemsdata[itemindex];
                                itemsdata[stock]--;
                                if(itemsdata[stock]<=0){
                                    itemnames[itemindex] = "";
                                }
                            }
                            User.Ary_itembagnames = itembagnames.join("<:>");
                            User.Ary_itembagdata = itembagdata.join("<:>");
                            User.Shop_itemsnames = itemnames.join("<:>");
                            User.Shop_itemsdata = itemsdata.join("<:>");
                            buyembed.setDescription(":shopping_bags: "+User.name+" has bought "+namecheck);
                    }
                }
            } else {
                buyembed.setDescription(":x: "+User.name+" do not have enough Currency");
            }
        }
        else {
            buyembed.setDescription(":x: This item is not in stock");
        }
    }
    else{
        buyembed.setDescription(":x: This shop does not sell that item.");
    }}
    else{
        buyembed.setDescription(":x: Shop has not been unlock yet. \nYou need to reach the 3rd floor.");
    }}
    else{
        buyembed.setDescription(":x: You  cannot enter the shop because you are in a battle.\nTo leave the battle, command: `-act flee`");
    }
    message.channel.send(buyembed);
}
module.exports.key = {
    name: "buy",
    description: "Buy your stuff at a good price."
}