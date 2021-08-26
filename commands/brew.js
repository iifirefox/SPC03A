const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
const Account = require("../data/tree");
module.exports.run = async (message, arg, User) => {
    function IgnoringCase(text, other) {
        return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
    }
    if(User.Ary_itembagnames)var itembagnames = User.Ary_itembagnames.split("<:>");
    else return message.channel.send(brewembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      }
      var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index])
    }
    const brewembed = new Discord.MessageEmbed();
    brewembed.setColor("#EAA9FF");
    if(User.CombatMode==0){
    if(hh3funset1[0]==1){
    if(arg==""||arg==undefined||arg.includes("yes")){
            brewembed.setAuthor("Brew Shop",Gamedata.NPC_Brew);
            brewembed.addField(Gamedata.sys_item_names[0],"Restores 30 HP");
            brewembed.addField(Gamedata.sys_item_names[1],"Restores 80 HP");
            brewembed.addField(Gamedata.sys_item_names[2],"Critical rate will increase by 30% for 3 turns");
            brewembed.addField(Gamedata.sys_item_names[3],"Defense will increase by 30% for 3 turns");
            brewembed.addField(Gamedata.sys_item_names[4],"Speed will increase by 30% for 3 turns");
            brewembed.addField(Gamedata.sys_item_names[5],"Removes any status effect on you");
            message.channel.send(brewembed.setFooter("To brew an item command: -brew <name in list> \nTo brew stack items command: -brew <name in list> x<amount> \nTo craft Equipment command: -craft."));
    }
    else{
        var temnum = [];temnum[2]=0;temnum[6]=0;temnum[7]=0;
        var temname= [];temname[2]="";
        function confirm(message){
            if(itembagdata[temnum[4]]>= temnum[0]&itembagdata[temnum[5]]>= temnum[1]&itembagdata[temnum[6]]>= temnum[2]) 0;
            else return message.edit(brewembed.setDescription(":x: You do not have enough Materials.").setFooter("").spliceFields(0,3));
           if(User.currency>=temnum[3]) 0;
           else return message.edit(brewembed.setDescription(":x: You do not have enough Currency.").setFooter("").spliceFields(0,3));
            var itm = Gamedata.sys_item_names.indexOf(temname[3]);
                if(itembagnames[itm]=="")itembagnames[itm] = temnum[3];
                    var temsavename = temname[3];
                    if(temnum[8]==1)message.edit(brewembed.setDescription(":test_tube:  "+User.name+" has brewed `"+temsavename+"`!").setFooter("").spliceFields(0,3));
                    else message.edit(brewembed.setDescription(":test_tube:  "+User.name+" has brewed `"+temsavename+" x"+temnum[8]+"`!").setFooter("").spliceFields(0,3));
                    return(
                        Account.findOne({
                            id: User.id
                        },async(err,User)=>{
                          if(err)console.log(err);
                        itembagdata[itm]+=temnum[8],
                        User.currency -= temnum[3],
                        itembagdata[temnum[4]]-= temnum[0];
                        itembagdata[temnum[5]]-= temnum[1];
                        itembagdata[temnum[6]]-= temnum[2];
                        User.Ary_itembagnames = itembagnames.join("<:>"),
                        User.Ary_itembagdata = itembagdata.join("<:>"),
                          User.save().catch(err => console.log(err));})
                        );
                    }
       var namecheck;
       var itemintex;
       var theitem = arg.split("x");
       if(Gamedata.sys_item_names.find(a =>IgnoringCase(a,theitem[0].trimEnd()))){namecheck =Gamedata.sys_item_names.find(a =>IgnoringCase(a,theitem[0].trimEnd())); itemintex=Gamedata.sys_item_names.indexOf(namecheck)}
       if(namecheck!= undefined & itemintex<6){
        var times;
        if(!isNaN(theitem[1])){times=Number(theitem[1])}
        else{times=1}
           if(namecheck.includes("HP")||namecheck.includes("Speed")){
               if(namecheck.includes("Speed"))itemintex=1;
            var craftort = 3*itemintex;
            var supplie2 = 1+craftort;
            var costcort = 2+craftort;
            temname[0] =  Gamedata.sys_craftsupplie_potnameset2[0];
            temname[1] = Gamedata.sys_craftsupplie_potnameset2[1];
            temnum[0] = Gamedata.sys_craftmaterial_potionset3[craftort]*times;
            temnum[1] = Gamedata.sys_craftmaterial_potionset3[supplie2]*times;
            temnum[3] = Gamedata.sys_craftmaterial_potionset3[4]*times
            bagsupplies1 = Gamedata.sys_material_names.indexOf(temname[0]);
            bagsupplies2 = Gamedata.sys_material_names.indexOf(temname[1]);
            temnum[4] = bagsupplies1+12;
            temnum[5] = bagsupplies2+12;
            temnum[8] = times;
            temname[3] = namecheck;
            if(times==1) brewembed.setDescription(":test_tube: do you want to brew `" + namecheck +"`?\nYou need:");
            else brewembed.setDescription(":test_tube: do you want to brew `" + namecheck +" x"+times+"`?\nYou need:");
            brewembed.addField(temname[0],"`"+itembagdata[temnum[4]]+"`/"+temnum[0]);
            brewembed.addField(temname[1],"`"+itembagdata[temnum[5]]+"`/"+temnum[1]);
            brewembed.addField("Cost: `"+temnum[3]+"`","Currency Balance: `"+User.currency+"`");
            message.channel.send(brewembed.setFooter("React ✅ to confirm.")).then((message)=>{message.react('✅')
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
            if(namecheck.includes("Pure")){itemintex-=1}
               var set2 = itemintex-1;
            var craftort = 4*set2;
            var supplie2 = 1+craftort;
            var supplie3 = 2+craftort;
            var costcort = 3+craftort;
            var craftortname = 3*set2;
            var supplie2name = 1+craftortname;
            var supplie3name = 2+craftortname;
            temname[0] = Gamedata.sys_craftsupplie_potnameset3[craftortname];
            temname[1] = Gamedata.sys_craftsupplie_potnameset3[supplie2name];
            temname[2] = Gamedata.sys_craftsupplie_potnameset3[supplie3name];
            temnum[0] = Gamedata.sys_craftmaterial_potionset4[craftort]*times;
            temnum[1] = Gamedata.sys_craftmaterial_potionset4[supplie2]*times;
            temnum[2] = Gamedata.sys_craftmaterial_potionset4[supplie3]*times;
            temnum[3] = Gamedata.sys_craftmaterial_potionset4[costcort]*times;
            bagsupplies1 = Gamedata.sys_material_names.indexOf(temname[0]);
            bagsupplies2 = Gamedata.sys_material_names.indexOf(temname[1]);
            bagsupplies3 = Gamedata.sys_material_names.indexOf(temname[2]);
            temnum[4] = bagsupplies1+12;
            temnum[5] = bagsupplies2+12;
            temnum[6] = bagsupplies3+12;
            temnum[7] = set2;
            temnum[8] = times;
            temname[3] = namecheck;
            if(times==1) brewembed.setDescription(":test_tube: do you want to brew `" + namecheck +"`?\nYou need:");
                else brewembed.setDescription(":test_tube: do you want to brew `" + namecheck +" x"+times+"`?\nYou need:");
            brewembed.addField(temname[0],"`"+itembagdata[temnum[4]]+"`/"+temnum[0]);
            brewembed.addField(temname[1],"`"+itembagdata[temnum[5]]+"`/"+temnum[1]);
            brewembed.addField(temname[2],"`"+itembagdata[temnum[6]]+"`/"+temnum[2]);
            brewembed.addField("Cost: `"+temnum[3]+"`","Currency Balance: `"+User.currency+"`");
            message.channel.send(brewembed.setFooter("React ✅ to confirm.")).then((message)=>{message.react('✅')
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
       }
       else return message.channel.send(brewembed.setDescription(":x: that item does not exist."));
    }}
    else return message.channel.send(brewembed.setDescription(":x: Brew has not been unlock yet. \nYou need to reach the 3rd floor."));
    }else return message.channel.send(brewembed.setDescription(":x: You  cannot enter the shop because you are in a battle.\nTo leave the battle, command: `-act flee`"));
}
module.exports.key = {
    name: "brew",
    description: "Brew your potions."
}