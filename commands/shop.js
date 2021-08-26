const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      function RandomMinMax(min,max) {
        return Math.floor(Math.random() * (max+1 - min)) + min;
      }
      function toInt(x) {
        return x * 100;
      }
      var itemnames = User.Shop_itemsnames.split("<:>");
      if(User.Ary_HH3ProfileNames)var profilenames = User.Ary_HH3ProfileNames.split("<:>");
      else return message.channel.send(shopembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    var rawitemsdata = User.Shop_itemsdata.split("<:>");var itemsdata = [];
    for(var index=0; index<rawitemsdata.length;index++){
        itemsdata[index]= Number(rawitemsdata[index])
    }
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
    var hh3funset1 = [];
    for(var index=0; index<rawhh3funset1.length;index++){
        hh3funset1[index]= Number(rawhh3funset1[index])
    }
    const shopembed = new Discord.MessageEmbed();
    shopembed.setColor("#00FDFF");
    if(User.CombatMode==0){
    if(hh3funset1[0]==1){
      var temietext = ["Hoi! I'm Temmie.","New items in stock! buy while they last.","Sales for Temmie's future.","Hoooooooooooooi!","Hoi,Hoi,Hoi!","Temmie finds you the best stuff."];
    shopembed.setAuthor("Temmie Shop",Gamedata.NPC_Cat);
    shopembed.setTitle(temietext[RandomMax(temietext.length)]);
    if(Date.now() > User.RefreshItems){
        User.RefreshItems = Date.now()+600000;
    User.Shop_itemsnames = "<:><:><:><:><:>";
    User.Shop_itemsdata = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
     itemnames = User.Shop_itemsnames.split("<:>");
     rawitemsdata = User.Shop_itemsdata.split("<:>");var itemsdata = [];
    for(var index=0; index<rawitemsdata.length;index++){
        itemsdata[index]= Number(rawitemsdata[index])
    }
    //User.Shop_itemsnames = itemnames.join("<:>");

    itemsdata[13]=itemnames.length;
    User.Shop_itemsdata = itemsdata.join("<:>");
    for(var loop = 0; loop< itemsdata[13] ; loop++){
        var selectitem;
        var itemkey="";
        var itemindex;
        var itemprice;
        var itemstock;
        for(var indx = 0; indx=true; indx++){
            var numset = [1,2,3,4];
            var wepset = [3,4,5];
            var getmatil = [Gamedata.sys_material_names[0],Gamedata.sys_material_names[1],Gamedata.sys_material_names[2],Gamedata.sys_material_names[3],Gamedata.sys_material_names[6],Gamedata.sys_material_names[7]];
            var getitems = [Gamedata.sys_item_names[0],Gamedata.sys_item_names[2],Gamedata.sys_item_names[3],Gamedata.sys_item_names[4],Gamedata.sys_item_names[5],Gamedata.sys_item_names[6],Gamedata.sys_item_names[9]];
            var getswd = [Gamedata.sys_sword_dataset[1],Gamedata.sys_sword_dataset[2],Gamedata.sys_sword_dataset[3]];
            var getwnd = [Gamedata.sys_wand_dataset[0],Gamedata.sys_wand_dataset[1],Gamedata.sys_wand_dataset[2]];
            var getbow = [Gamedata.sys_bow_dataset[0],Gamedata.sys_bow_dataset[1],Gamedata.sys_bow_dataset[2]];
            var getarm = [Gamedata.sys_armor_dataset[0],Gamedata.sys_armor_dataset[1],Gamedata.sys_armor_dataset[2]]
            var newnumset = numset[RandomMax(numset.length)]
            if(newnumset==1){
             if(Math.random()<Gamedata.sys_shop_rateset[0]) { selectitem = 1; break}}
             if(newnumset==2){
             if(Math.random()<Gamedata.sys_shop_rateset[1]) { selectitem = 2; break}}
             if(newnumset==3){
             if(Math.random()<Gamedata.sys_shop_rateset[2]) { selectitem = wepset[RandomMax(wepset.length)]; break}}
             if(newnumset==4){
             if(Math.random()<Gamedata.sys_shop_rateset[3]) { selectitem = 6; break}}
        }
        if(selectitem==1){
                var pickitem = RandomMax(getmatil.length);
                if(pickitem==0){
                    if(Math.random()<Gamedata.sys_shop_rateset2[0]){ itemkey= Gamedata.sys_material_names[pickitem];};
                }
                else if(pickitem==1){
                    if(Math.random()<Gamedata.sys_shop_rateset2[0]){ itemkey= Gamedata.sys_material_names[pickitem];};
                }
                else if(pickitem==2){
                    if(Math.random()<Gamedata.sys_shop_rateset2[2]){  itemkey= Gamedata.sys_material_names[pickitem];};
                }
                else if(pickitem==3){
                    if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_material_names[pickitem];};
                }
                else if(pickitem==4){
                     if(Math.random()<Gamedata.sys_shop_rateset2[0]){ itemkey= Gamedata.sys_material_names[6];};
                }
                else if(pickitem==5){
                    if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_material_names[7];};
                }
                if(itemkey!==""){itemindex = Gamedata.sys_material_names.indexOf(itemkey); itemprice = Gamedata.sys_mtl_price[itemindex]; itemstock= RandomMinMax(1,Gamedata.sys_shop_itemsockM)}
        }
       else if(selectitem==2){
                var pickitem = RandomMax(getitems.length);
                if(pickitem==0){
                    if(Math.random()<Gamedata.sys_shop_rateset2[0]){ itemkey= Gamedata.sys_item_names[pickitem];};
                }
                else if(pickitem==1){
                    if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_item_names[2];};
                }
                else if(pickitem==2){
                    if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_item_names[3];};
                }
                else if(pickitem==3){
                    if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_item_names[4];};
                }
                else if(pickitem==4){
                     if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_item_names[5];};
                }
                else if(pickitem==5){
                    if(Math.random()<Gamedata.sys_shop_rateset2[0]){ itemkey= Gamedata.sys_item_names[6];};
                }
                else if(pickitem==6){
                    if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_item_names[9];};
                }
                if(itemkey!==""){itemindex = Gamedata.sys_item_names.indexOf(itemkey); itemprice = Gamedata.sys_itm_price[itemindex];itemstock= RandomMinMax(1,Gamedata.sys_shop_itemsockI)}
        }
        else if(selectitem==3){
            var pickitem = RandomMax(getswd.length);
            if(pickitem==0){
                if(Math.random()<Gamedata.sys_shop_rateset2[0]){ itemkey= Gamedata.sys_sword_names[1];};
            }
            else if(pickitem==1){
                if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_sword_names[2];};
            }
            else if(pickitem==2){
                if(Math.random()<Gamedata.sys_shop_rateset2[2]){ itemkey= Gamedata.sys_sword_names[3];};
            }
            if(itemkey!==""){itemindex = Gamedata.sys_sword_names.indexOf(itemkey); itemprice = Gamedata.sys_weapon_price[itemindex]; itemstock= 1}
        }
        else if(selectitem==4){
            var pickitem = RandomMax(getwnd.length);
                if(pickitem==0){
                    if(Math.random()<Gamedata.sys_shop_rateset2[0]){ itemkey= Gamedata.sys_wand_names[pickitem];};
                }
                else if(pickitem==1){
                    if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_wand_names[pickitem];};
                }
                else if(pickitem==2){
                    if(Math.random()<Gamedata.sys_shop_rateset2[2]){ itemkey= Gamedata.sys_wand_names[pickitem];};
                }
                if(itemkey!==""){itemindex = Gamedata.sys_wand_names.indexOf(itemkey); itemprice = Gamedata.sys_weapon_price[itemindex];itemstock= 1}
        }
        else if(selectitem==5){
            var pickitem = RandomMax(getbow.length);
                if(pickitem==0){
                    if(Math.random()<Gamedata.sys_shop_rateset2[0]){ itemkey= Gamedata.sys_bow_names[pickitem];};
                }
                else if(pickitem==1){
                    if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_bow_names[pickitem];};
                }
                else if(pickitem==2){
                    if(Math.random()<Gamedata.sys_shop_rateset2[2]){ itemkey= Gamedata.sys_bow_names[pickitem];};
                }
                if(itemkey!==""){itemindex = Gamedata.sys_bow_names.indexOf(itemkey); itemprice = Gamedata.sys_weapon_price[itemindex];itemstock= 1}
        }
        else if(selectitem==6){
            var pickitem = RandomMax(getarm.length);
                if(pickitem==0){
                    if(Math.random()<Gamedata.sys_shop_rateset2[0]){ itemkey= Gamedata.sys_armor_names[pickitem];};
                }
                else if(pickitem==1){
                    if(Math.random()<Gamedata.sys_shop_rateset2[1]){ itemkey= Gamedata.sys_armor_names[pickitem];};
                }
                else if(pickitem==2){
                    if(Math.random()<Gamedata.sys_shop_rateset2[2]){ itemkey= Gamedata.sys_armor_names[pickitem];};
                }
                if(itemkey!==""){itemindex = Gamedata.sys_armor_names.indexOf(itemkey); itemprice = Gamedata.sys_armor_price[itemindex];itemstock= 1}
        }
        if(itemsdata[14]>itemnames.length){break;}
       else if(itemkey==""||itemnames.includes(itemkey)){
            itemsdata[13]++;
    User.Shop_itemsdata = itemsdata.join("<:>");
        }
        else if(itemkey!==""){if(profilenames[5]==Gamedata.sys_chest_mysterychest[3]) itemprice= itemprice+Math.round(itemprice*0.10)
            var stockindex = itemsdata[14]+6
            itemnames[itemsdata[14]] = itemkey;
            itemsdata[itemsdata[14]] = itemprice;
            itemsdata[stockindex] = itemstock;
            itemsdata[14]++
            User.Shop_itemsnames = itemnames.join("<:>");
            User.Shop_itemsdata = itemsdata.join("<:>");
        }
    }
}
      var now = new Date(Date.now()).getTime();
      var refresh = new Date(User.RefreshItems).getTime();
      var between = refresh-now;
  var minutes = Math.floor((between% (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((between% (1000 * 60)) / 1000);
    for(var i = 0; i <6; i++){
        var a = 6 + i;
        var aa = i+1;
        var phy;
        var per;
        if(Gamedata.sys_sword_names.includes(itemnames[i])){var e = Gamedata.sys_sword_names.indexOf(itemnames[i]); var wepset = 3*e; var dmgcort = 0+wepset;var percort = 1+wepset; phy =Gamedata.sys_sword_dataset[dmgcort];per =Gamedata.sys_sword_dataset[percort];};
        if(Gamedata.sys_wand_names.includes(itemnames[i])){var e = Gamedata.sys_wand_names.indexOf(itemnames[i]);  var wepset = 3*e; var dmgcort = 0+wepset;var percort = 1+wepset; phy =Gamedata.sys_wand_dataset[dmgcort];per =Gamedata.sys_wand_dataset[percort];};
        if(Gamedata.sys_bow_names.includes(itemnames[i])){var e = Gamedata.sys_bow_names.indexOf(itemnames[i]);  var wepset = 3*e; var dmgcort = 0+wepset;var percort = 1+wepset; phy =Gamedata.sys_bow_dataset[dmgcort];per =Gamedata.sys_bow_dataset[percort];};
        if(Gamedata.sys_armor_names.includes(itemnames[i])){var e = Gamedata.sys_armor_names.indexOf(itemnames[i]);  var wepset = 3*e; var dmgcort = 0+wepset;var percort = 1+wepset; phy =Gamedata.sys_armor_dataset[dmgcort];per =Gamedata.sys_armor_dataset[percort];}
        if(itemnames[i].includes("Sword")&itemsdata[a]>0||itemnames[i].includes("Wand")&itemsdata[a]>0||itemnames[i].includes("Bow")&itemsdata[a]>0){
            shopembed.addField(aa +" "+itemnames[i],"Atk: "+phy+" AddAtk: "+toInt(per)+"%"+"\n `Price`: "+itemsdata[i]);
        }
        else if(itemnames[i].includes("Armor")&itemsdata[a]>0){
            shopembed.addField(aa +" "+itemnames[i],"Def: "+phy+" AddDef: "+toInt(per)+"%"+"\n `Price`: "+itemsdata[i]);
        }
        else if(itemsdata[a]>0){
            shopembed.addField(aa+" "+itemnames[i],"Stock: "+itemsdata[a]+"\n `Price`: "+itemsdata[i]);
        }
    }
    shopembed.addField("Currency balance: `"+User.currency+"`","Time until refresh: `"+minutes+" Minutes "+seconds+" Seconds`");
    shopembed.setFooter("To buy, command: -buy <name of item>\nTo buy stacks -buy <name of item> x<amount>\nTo sell, command: -sell");}
    else{
        shopembed.setDescription(":x: Shop has not been unlock yet. \nYou need to reach the 3rd floor.");
    }}
    else{
        shopembed.setDescription(":x: You  cannot enter the shop because you are in a battle.\nTo leave the battle, command: `-act flee`");
    }
    message.channel.send(shopembed);
}
module.exports.key = {
    name: "shop",
    description: "Shop for items you need for your adventure."
}