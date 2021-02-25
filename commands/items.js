const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    var itembagnames = User.Ary_itembagnames.split("<:>");
    var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index])
    }
    const itemsembed = new Discord.MessageEmbed();
    itemsembed.setColor(User.colortheme);
    if(User.CombatMode==0){
        var num = Number(arg)
    if (num ==0 | isNaN(num)){
    itemsembed.setTitle(":school_satchel: Item Bag");
    if(!itembagnames.every(a=>a=="")){
    for(var itemsdex = 0; itemsdex< itembagnames.length; itemsdex++){
        if(itembagnames[itemsdex]!=""){
            itemsembed.addField(itembagnames[itemsdex],itembagdata[itemsdex]);
        }
    }}
    else{
        itemsembed.setDescription(":x: You do not have any items");
    }
        itemsembed.addField("HP",User.HP+"/"+User.MaxHP);
        itemsembed.addField("Energy",User.energy+"/"+User.Maxenergy);
        itemsembed.setFooter("To Heal using "+Gamedata.sys_item_names[0]+" Command: -items 1\nTo Heal using "+Gamedata.sys_item_names[1]+" Command: -items 2\nTo use "+Gamedata.sys_item_names[9]+" Command: -items 3");
    }
    else{
        if(num==1){
            if(itembagdata[0]>0){
                if(User.HP<User.MaxHP){
                    itembagdata[0]--;
                    User.HP+=Gamedata.sys_Item_Effects[0];
                    if(User.HP>User.MaxHP){User.HP=User.MaxHP};
                    User.Ary_itembagdata = itembagdata.join("<:>");
                    itemsembed.setDescription(":test_tube: "+User.name+" consumes 1 "+Gamedata.sys_item_names[0]+"\n recover +"+Gamedata.sys_Item_Effects[0]+" HP");
                    itemsembed.addField("HP",User.HP+"/"+User.MaxHP);
                }
                else{
                    itemsembed.setDescription(":test_tube: "+User.name+"'s HP is Full \nThe Item was not consumed.");
                }
            }else{
                itemsembed.setDescription(":x: You do have enough "+Gamedata.sys_item_names[0]);
            }
        }
       else if(num==2){
            if(itembagdata[1]>0){
                if(User.HP<User.MaxHP){
                    itembagdata[1]--;
                    User.HP+=Gamedata.sys_Item_Effects[1];
                    if(User.HP>User.MaxHP){User.HP=User.MaxHP};
                    User.Ary_itembagdata = itembagdata.join("<:>");
                    itemsembed.setDescription(":test_tube: "+User.name+" consumes 1 "+Gamedata.sys_item_names[1]+"\n recover +"+Gamedata.sys_Item_Effects[1]+" HP");
                    itemsembed.addField("HP",User.HP+"/"+User.MaxHP);
                }
                else{
                    itemsembed.setDescription(":heart: "+User.name+" HP is Full \nThe Item was not consumed.");
                }
            }else{
                itemsembed.setDescription(":x: You do have enough "+Gamedata.sys_item_names[1]);
            }
        }
        else if(num==3){
            if(itembagdata[9]>0){
                if(User.energy<User.Maxenergy){
                    itembagdata[9]--;
                    User.energy+=Gamedata.sys_Item_Effects[5];
                    if(User.energy>User.Maxenergy){User.energy=User.Maxenergy};
                    User.Ary_itembagdata = itembagdata.join("<:>");
                    itemsembed.setDescription(":test_tube: "+User.name+" consumes 1 "+Gamedata.sys_item_names[9]+"\n recover +"+Gamedata.sys_Item_Effects[1]+" Energy");
                    itemsembed.addField("Energy",User.energy+"/"+User.Maxenergy);
                }
                else{
                    itemsembed.setDescription(":zap: "+User.name+" Energy is Full \nThe Item was not consumed.");
                }
            }else{
                itemsembed.setDescription(":x: You do have enough "+Gamedata.sys_item_names[1]);
            }
        }
        else{
            itemsembed.setDescription(":x: That item doesn't exist.");
        }
    }
    }else{
        itemsembed.setDescription(":x: You are in a battle.\nTo view foe, command: `-check`\nTo Heal, command: `-act potion`");
    }
    
    
         message.channel.send( itemsembed );
}
module.exports.key = {
    name: "items",
    description: "Displays your items and heal."
}