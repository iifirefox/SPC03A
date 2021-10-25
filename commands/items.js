const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    if(User.Ary_itembagnames)var itembagnames = User.Ary_itembagnames.split("<:>");
    else return message.channel.send(itemsembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index]);
    }
    const itemsembed = new Discord.MessageEmbed();
    itemsembed.setColor(User.colortheme);
    if(User.CombatMode==0){
        var num = Number(arg)
    if (num ==0 | isNaN(num)){
    itemsembed.setTitle(":school_satchel: Item Bag");
    if(!itembagnames.every(a=>a=="")){
        var items = itembagnames.filter(a=>a);
    for(var index = 0; index<6; index++){
        var x = itembagnames.indexOf(items[index]);
        itemsembed.addField(items[index],itembagdata[x]);
    }
}
    else{
        message.channel.send(itemsembed.setDescription(":x: You do not have any items"));
    }
        itemsembed.addField("HP",User.HP+"/"+User.MaxHP,true);
        itemsembed.addField("Energy",Math.round(User.energy)+"/"+Math.round(User.Maxenergy),true);
        var text = "To Heal using "+Gamedata.sys_item_names[0]+" Command: -items 1\nTo Heal using "+Gamedata.sys_item_names[1]+" Command: -items 2\nTo use "+Gamedata.sys_item_names[9]+" Command: -items 3"+
        "\nTo use "+Gamedata.sys_item_names[10]+" Command: -items 4"
        itemsembed.setFooter(text);
        if(items<7) message.channel.send(itemsembed);
        else message.channel.send(itemsembed.setFooter(text+"\n⬅️➡️⏪⏩ view more items")).then((message)=>{message.react('⏪'),message.react('⬅️'),message.react('➡️'),message.react('⏩');
        function sample(){
        const filter = (reaction, user) => {
         return ['⬅️','➡️','⏪','⏩'].includes(reaction.emoji.name) && user.id === User.id;
     };
        message.awaitReactions(filter, { max: 1})
     .then((collected) => {
         const reaction = collected.first();
         if (reaction.emoji.name == '➡️') {
           if(index<items.length) itemsembed.spliceFields(0,9);
            var newdex = index+6;
            if(newdex>items.length)newdex=items.length;
            for(index; index< newdex||index<items.length; index++){
                if(items[index]){
                var x = itembagnames.indexOf(items[index]);
                itemsembed.addField(items[index],itembagdata[x]);}
            }
             message.edit(itemsembed).then(message=>{message.reactions.resolve('➡️').users.remove(User.id);});
             sample();
         } else if (reaction.emoji.name == '⬅️') {
             index-=12;
             if(index<0)index=0;
             var newdex = index+6;
             itemsembed.spliceFields(0,9);
             for(index; index< newdex; index++){
                var x = itembagnames.indexOf(items[index]);
                itemsembed.addField(items[index],itembagdata[x]);
             }
             message.edit(itemsembed).then(message=>{message.reactions.resolve('⬅️').users.remove(User.id);});
             sample();
         }
        else if (reaction.emoji.name == '⏩') {
            itemsembed.spliceFields(0,9);
            var newdex = items.length;
            index = items.length-6;
            for(index; index< newdex; index++){
                var x = itembagnames.indexOf(items[index]);
                itemsembed.addField(items[index],itembagdata[x]);
            }
             message.edit(itemsembed).then(message=>{message.reactions.resolve('⏩').users.remove(User.id);});
             sample();
         }
         else if (reaction.emoji.name == '⏪') {
            itemsembed.spliceFields(0,9);
            index = 0;
            for(index; index<6; index++){
                var x = itembagnames.indexOf(items[index]);
                itemsembed.addField(items[index],itembagdata[x]);
            }
             message.edit(itemsembed).then(message=>{message.reactions.resolve('⏪').users.remove(User.id);});
             sample();
         }
     })
     }
     sample();
     });
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
                    message.channel.send(itemsembed.addField("HP",User.HP+"/"+User.MaxHP));
                }
                else{
                    message.channel.send(itemsembed.setDescription(":test_tube: "+User.name+"'s HP is Full \nThe Item was not consumed."));
                }
            }else{
                message.channel.send(itemsembed.setDescription(":x: You do have enough "+Gamedata.sys_item_names[0]));
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
                    message.channel.send(itemsembed.addField("HP",User.HP+"/"+User.MaxHP));
                }
                else{
                    message.channel.send(itemsembed.setDescription(":heart: "+User.name+"'s HP is Full \nThe Item was not consumed."));
                }
            }else{
                message.channel.send(itemsembed.setDescription(":x: You do have enough "+Gamedata.sys_item_names[1]));
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
                    message.channel.send(itemsembed.addField("Energy",User.energy+"/"+User.Maxenergy));
                }
                else{
                    message.channel.send(itemsembed.setDescription(":zap: "+User.name+"'s Energy is Full \nThe Item was not consumed."));
                }
            }else{
                message.channel.send(itemsembed.setDescription(":x: You do have enough "+Gamedata.sys_item_names[9]));
            }
        }
        else if(num==4){
            if(itembagdata[10]>0){
                if(User.HP<User.MaxHP){
                    itembagdata[10]--;
                    User.HP = User.MaxHP;
                    User.Ary_itembagdata = itembagdata.join("<:>");
                    itemsembed.setDescription(":test_tube: "+User.name+" consumes 1 "+Gamedata.sys_item_names[10]+"\n recover 100% HP");
                    message.channel.send(itemsembed.addField("HP",User.HP+"/"+User.MaxHP));
                }
                else{
                    message.channel.send(itemsembed.setDescription(":heart: "+User.name+"'s HP is Full \nThe Item was not consumed."));
                }
            }else{
                message.channel.send(itemsembed.setDescription(":x: You do have enough "+Gamedata.sys_item_names[9]));
            }
        }
        else{
            message.channel.send(itemsembed.setDescription(":x: That item doesn't exist."));
        }
    }
    }else{
        message.channel.send(itemsembed.setDescription(":x: You are in a battle.\nTo view foe, command: `-check`\nTo Heal, command: `-act potion`"));
    }
}
module.exports.key = {
    name: "items",
    description: "Displays your items and heal."
}