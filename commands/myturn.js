const Discord = require('discord.js');
const {createCanvas, loadImage} = require('canvas');
const Gamedata = require('../data/hh3data.json');
const Account = require("../data/tree");
module.exports.run = async (message, arg,User) => {
    function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      function IgnoringCase(text, other) {
        return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
    }
    function RandomMinMax(min,max) {
        return Math.floor(Math.random() * (max+1 - min)) + min;
      }
    const newemmbed = new Discord.MessageEmbed();
    newemmbed.setColor(User.colortheme)
    newemmbed.setAuthor("Hunted House 3");
    if(User.Ary_HH3FunctionSet1==undefined){User.Ary_HH3FunctionSet1 =
         "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";}
      var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index]);
      };
    var profilenames = User.Ary_HH3ProfileNames.split("<:>");
    var rawdata = User.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index]);
    }
    if(User.Ary_itembagdata){
    var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index]);
    }}
    if(User.TemdataNames){
        var temdatanames = User.TemdataNames.split("<:>");}
        function getUserFromMention(mention) {
            if (!mention) return;
          if (mention.includes('<@') && mention.includes('>')) {
              mention = mention.slice(2, -1);
              if (mention.startsWith('!')) {
                mention = mention.slice(1);
              }
              return mention.replace("@","");
            }
          }
  var ismension =getUserFromMention(arg);
 if(arg.includes("<@")){ Account.findOne({
    id: ismension
},async(err,UserII)=>{
  if(err)console.log(err);
  if(!User.energy) return message.channel.send(newemmbed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
  if(!UserII) return message.channel.send(newemmbed.setDescription(":x: Error: No User found."));
  if(UserII.multid==""){if(User.id == UserII.id) return message.channel.send(":x: You cannot send request to yourself.");
 if(UserII.Ary_HH3FunctionSet1){var rawhh3funset1A = UserII.Ary_HH3FunctionSet1.split("<:>");var hh3funset1A = [];
  for(var index=0; index<rawhh3funset1A.length;index++){
      hh3funset1A[index]= Number(rawhh3funset1A[index]);};var temdatanamesA = UserII.TemdataNames.split("<:>");
      hh3funset1A[11]=1;temdatanamesA[12] = User.id;temdatanamesA[13]=User.name;UserII.Ary_HH3FunctionSet1 = hh3funset1A.join("<:>");
      UserII.TemdataNames = temdatanamesA.join("<:>"); 
  UserII.save().catch(err => console.log(err));
} else newemmbed.setDescription(":x: This User hasn't started their game yet.");}
else newemmbed.setDescription(":x: "+UserII.name+" is already in a Party/Pvp match");
});newemmbed.addField("Multiplayer",":mailbox_with_mail:  Request has been sent").setFooter("to accept: myturn accept");}
var now = new Date(Date.now()).getTime();
var refresh = new Date(User.hh3dailycooldown).getTime();
var between = refresh-now;
var hours = Math.floor((between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((between% (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((between% (1000 * 60)) / 1000);
if(User.energy!=undefined&User.turn==false&!arg.includes("<@")&!arg.includes("accept")){
    newemmbed.setTitle("Welcome Back " + User.name+ "\n here is the list of commands");
        mdata[5]++;User.Metadata = mdata.join("<:>");
    }
    else if(User.energy!=undefined&User.turn==true&!arg.includes("<@")&!arg.includes("accept")){
   newemmbed.setTitle("your turn already is active" + User.name+ "\nhere is the list of commands");
    }
    if(User.energy==undefined){
        User.HP = User.MaxHP;
        User.Maxenergy = 100;
        User.energy = 100;
        User.step =0;
        User.Ary_Imgset = "<:><:>";
        User.Ary_itembagnames= "HP Potion<:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:>";
        User.Ary_itembagdata="10<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
        User.Ary_Equipmentnames = "<:><:><:><:><:><:><:>";
        User.Ary_Equipmentdata = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
        User.Shop_itemsnames = "<:><:><:><:><:>";
        User.Shop_itemsdata = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
        User.TemdataNames = "";
        User.TemdataNumbers = "";
        User.Ary_skills = "Force Attack<:>empty<:>empty<:>empty";
        User.Ary_skillsdata = "1<:>0<:>5<:>90<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
        User.skillslearned = "Force Attack<:>Slash<:>Charge<:>Mega Slash<:>Blast<:>Focus<:>Focus Blast<:>Fire<:>Swift<:>All Fire";
        User.reskill = "Slash<:>Force Attack<:>empty<:>empty<:>Blast<:>Force Attack<:>empty<:>empty<:>Fire<:>Force<:>empty<:>empty";
        User.Ary_Crystalnames = "<:><:><:><:><:><:><:><:><:>";
        User.Ary_Crystaldata = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
        User.floor =0;
        User.RefreshItems = 0;
        User.Fightagain =1;
        User.hh3dailycooldown = Date.now()+86400000;
        mdata[5]++;
        User.Metadata = mdata.join("<:>");
         rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
         if(User.level>=3){
            var skillslearned = User.skillslearned.split(Gamedata.key);
            if(User.level>=3){
                skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[15];
                skillslearned[skillslearned.length+1]=Gamedata.sys_heronoskills[16];
                skillslearned[skillslearned.length+2]=Gamedata.sys_heronoskills[17];
            }
           if(User.level>=6){
                skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[24];
                skillslearned[skillslearned.length+1]=Gamedata.sys_heronoskills[25];
        if(!skillslearned.includes(Gamedata.sys_heronoskills[26]))skillslearned[skillslearned.length+2]=Gamedata.sys_heronoskills[26];
            }if(User.level>=10){
                skillslearned[skillslearned.length]=Gamedata.sys_heronoskills[27];
                skillslearned[skillslearned.length+1]=Gamedata.sys_heronoskills[28];
                skillslearned[skillslearned.length+2]=Gamedata.sys_heronoskills[29];
            }
            User.skillslearned = skillslearned.join(Gamedata.key);
        }
        newemmbed.setTitle("your turn has started "+User.name+"\n here is the list of commands");User.turn=true;
        message.channel.send(newemmbed.setDescription("To progress in this game you must roll a dice, command: `-roll`\nTo see other hunted house commands: `-help game`\nNew Start bonus: `HP Potion x10`"));
    }
    else if (User.energy!=undefined&!arg.includes("<@")||User.energy!=undefined) {
        if(User.turn==false&User.multi==false&hh3funset1[11]>0){
            hh3funset1[11]=0; User.multid="";
            User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
        }
        if(arg.includes("accept")&&temdatanames[12]){
            Account.findOne({
                id: temdatanames[12]
            },async(err,UserII)=>{
              if(err)console.log(err);
              if(!UserII) return message.channel.send(newemmbed.setDescription(":x: Error: No User found"));
              if(User.id==UserII.id)return message.channel.send(newemmbed.setDescription(":x: You cannot Party yourself"));
              var rawhh3funset1A = UserII.Ary_HH3FunctionSet1.split("<:>");
             var hh3funset1A = [];
             for(var index=0; index<rawhh3funset1A.length;index++){
                hh3funset1A[index]= Number(rawhh3funset1A[index]);
                };
                hh3funset1A[11]=2;
                UserII.multi = true;
                UserII.multid = User.id;
                UserII.multiname = User.name;
                UserII.Ary_HH3FunctionSet1 = hh3funset1A.join("<:>");
                UserII.save().catch(err => console.log(err));
                Account.findOne({
                    id: User.id
                },async(err,User)=>{if(err)console.log(err);User.multiname=UserII.name;User.multid=temdatanames[12];temdatanames[12]="";
            hh3funset1[11]=2;User.multi = true;User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                User.save().catch(err => console.log(err));})
            });
            newemmbed.addField("Multiplayer",":slight_smile::slight_smile: "+User.name+" and "+temdatanames[13]+" form a Party");
            newemmbed.addField("benefits\n\nBattles","Your Teamate can join your battles,\n your attacks turn into AOE");
            newemmbed.addField("Pary commands","`disband` - disbands the party");
        } else if(arg.includes("accept")) return message.channel.send(newemmbed.setDescription(":mailbox_with_no_mail: No request was found").setFooter("to send a request command: -myturn <User's tag>"));
        User.turn=true;
        if(User.hh3dailycooldown>Date.now())newemmbed.setDescription("Daily reward in `"+hours+":"+minutes+":"+seconds+"`\nTo Continue the Game command: `roll`\nTo view game progress Command: `check`"+
        "\nTo view items command: `items`\nTo Equipment command: `equip`\nTo Shop command: `shop`\nTo send Multiplayer request command: `myturn < User tag >`\nTo accept request command: `myturn accept`");
       else newemmbed.setDescription("To Continue the Game command: `roll`\nTo view game progress Command: `check`\nTo view items command: `items`\nTo Equipment command: `equip`\nTo Shop command: `shop`"+
       "\nTo send Multiplayer request command: `myturn < User tag >`\nTo accept request command: `myturn accept`");
        if(User.hh3dailycooldown<Date.now()){
            var temname= [];
            var chestlinks = [];
            for(var wood=0; wood<3;wood++){
            temname[wood] = "Wooden Chest";
            chestlinks[wood] = Gamedata.sys_chest_wood;
            if(Math.random()<0.50){
                if(Math.random()<0.25){
                    temname[wood] = "Ancient Wooden Chest";
                chestlinks[wood] = Gamedata.sys_chest_wooda;
            }
                if(Math.random()<0.10){
                    temname[wood] = "Rare Wooden Chest";
                    chestlinks[wood] = Gamedata.sys_chest_woodr;
                }
            }
           else if(Math.random()<0.37&(User.floor>5||User.floor<0)){
                temname[wood] = "Iron Chest";
                chestlinks[wood] = Gamedata.sys_chest_iron;
                if(Math.random()<0.25){
                    temname[wood] = "Ancient Iron Chest";
                chestlinks[wood] = Gamedata.sys_chest_irona;
            }
                if(Math.random()<0.10){
                    temname[wood] = "Rare Iron Chest";
                    chestlinks[wood] = Gamedata.sys_chest_ironr;
                }
            }
            else if(Math.random()<.50){
                temname[wood] = "Mystery Chest";
                chestlinks[wood] = Gamedata.sys_chest_mys;
            }
            else if(Math.random()<.50&(User.floor>8||User.floor<0)){
                temname[wood] = "Mystic Chest";
                chestlinks[wood] = Gamedata.sys_chest_mytic;
            }
        }
        function confirm(message,num){
                var equipnames = User.Ary_Equipmentnames.split("<:>");
                var itembagnames = User.Ary_itembagnames.split("<:>");
            var rawequipmentdata = User.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
            for(var index=0; index<rawequipmentdata.length;index++){
                equipmentdata[index]= Number(rawequipmentdata[index])
            }
            var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
            for(var index=0; index<rawitembagdata.length;index++){
                itembagdata[index]= Number(rawitembagdata[index])
            }
            if(User.Ary_HH3ProfileNames)var profilenames = User.Ary_HH3ProfileNames.split("<:>");
            newemmbed.setTitle(":gift: "+temname[num]+" reward");
            var getchest;
            var getchestrate;
            if(temname[num]=="Wooden Chest"||temname[num]=="Ancient Wooden Chest"){
                getchest = Gamedata.sys_chest_wooden1name;
                if(temname[num]=="Wooden Chest") getchestrate = Gamedata.sys_chest_woodenrate;
                if(temname[num]=="Ancient Wooden Chest") getchestrate = Gamedata.sys_chest_woodenArate;
            }
           else if(temname[num]=="Rare Wooden Chest"){
            getchest = Gamedata.sys_chest_wooden2name;
            getchestrate = Gamedata.sys_chest_wooden2rate;
           } 
           else if(temname[num]=="Mystery Chest"){
            getchest = Gamedata.sys_chest_mysterychest;
            getchestrate = Gamedata.sys_chest_mysteryrate;
           }
           else if(temname[num]=="Iron Chest"){
            getchest = Gamedata.sys_chest_steel1name;
            getchestrate = Gamedata.sys_chest_steelrate;
           }
           else if(temname[num]=="Ancient Iron Chest"){
            getchest = Gamedata.sys_chest_steel2name;
            getchestrate = Gamedata.sys_chest_steelArate;
           }
           else if(temname[num]=="Rare Iron Chest"){
            getchest = Gamedata.sys_chest_steel2name;
            getchestrate = Gamedata.sys_chest_steel2rate;
           }
           else if(temname[num]=="Mystic Chest"){
            getchest = Gamedata.sys_chest_mysticname;
            getchestrate = Gamedata.sys_chest_mysticrate;
           }
           if(getchest){
               var getitem;
               while(!getitem){
                   var randomitem = RandomMax(getchest.length);
                   if(Math.random()<getchestrate[randomitem]){
                       getitem= getchest[randomitem];
                       var itemamount=0;
                       if(getitem.includes("x")){
                           var splititem = getitem.split("x");
                           splititem[0].trimEnd();
                           splititem[1].trimStart();
                           getitem=splititem[0];
                           itemamount=Number(splititem[1]);
                       }
                    if(Gamedata.sys_material_names.some(a=>IgnoringCase(a,getitem))){
                        var getname = Gamedata.sys_material_names.find(a=>IgnoringCase(a,getitem));
                        var getcort = Gamedata.sys_material_names.indexOf(getname);
                        var amount = RandomMinMax(1,itemamount);
                        getcrot = getcort+=12;
                        if(itembagnames[getcort]==""){
                        itembagnames[getcort] = getname;}
                        itembagdata[getcort] += amount;
                        amount= ""+amount;
                        User.Ary_itembagnames = itembagnames.join("<:>");
                        User.Ary_itembagdata = Ary_itembagdata.join("<:>");
                        newemmbed.addField(":moneybag: "+getname,amount.padStart(6," "));
                    }
                    else if(Gamedata.sys_item_names.some(a=>IgnoringCase(a,getitem))){
                        var getname = Gamedata.sys_item_names.find(a=>IgnoringCase(a,getitem));
                        var getcort = Gamedata.sys_item_names.indexOf(getname);
                        console.log(itemamount);
                        var amount = RandomMinMax(1,itemamount);
                        if(itembagnames[getcort]==""){
                        itembagnames[getcort] = getname;}
                        itembagdata[getcort] += amount;
                        amount= ""+amount;
                        User.Ary_itembagnames = itembagnames.join("<:>");
                        User.Ary_itembagdata = itembagdata.join("<:>");
                        newemmbed.addField(":test_tube: "+getname,amount.padStart(6," "));
                    }
                    else if(Gamedata.sys_sword_names.some(a=>IgnoringCase(a,getitem))){
                        var getname = Gamedata.sys_sword_names.find(a=>IgnoringCase(a,getitem));
                        var getcort = Gamedata.sys_sword_names.indexOf(getname);
                        var tablecort =3*getcort;
                        var percent = 1+tablecort;
                        var durdmg = 2+tablecort;
                        var checkresult = equipnames.indexOf("");
                        if(checkresult!=-1){
                            var bagtable = 5*checkresult;
                            var bagphy = 1+bagtable;
                            var bagper = 2+bagtable;
                            var bagdur = 3+bagtable;
                            var bagdurdmg = 4+bagtable;
                            equipnames[checkresult]= getname;
                            equipmentdata[bagtable]= 1;
                            equipmentdata[bagphy]= Gamedata.sys_sword_dataset[tablecort];
                            equipmentdata[bagper]= Gamedata.sys_sword_dataset[percent];
                            equipmentdata[bagdur]= RandomMinMax(30,100);
                            equipmentdata[bagdurdmg]= Gamedata.sys_sword_dataset[durdmg];
                            User.Ary_Equipmentnames = equipnames.join("<:>");
                            User.Ary_Equipmentdata = equipmentdata.join("<:>");
                            var displaydrop = Gamedata.sys_sword_dataset[percent]*100;
                            displaydrop = Math.round(displaydrop);
                            newemmbed.addField(":dagger: "+getname,"Atk:"+Gamedata.sys_sword_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]);
                        }
                        else{
                            newemmbed.addField(":x: You do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                        }
                    }
                    else if(Gamedata.sys_wand_names.some(a=>IgnoringCase(a,getitem))){
                        var getname = Gamedata.sys_wand_names.find(a=>IgnoringCase(a,getitem));
                        var getcort = Gamedata.sys_wand_names.indexOf(getname);
                        var tablecort =3*getcort;
                        var percent = 1+tablecort;
                        var durdmg = 2+tablecort;
                        var checkresult = equipnames.indexOf("");
                        if(checkresult!=-1){
                            var bagtable = 5*checkresult;
                            var bagphy = 1+bagtable;
                            var bagper = 2+bagtable;
                            var bagdur = 3+bagtable;
                            var bagdurdmg = 4+bagtable;
                            equipnames[checkresult]= getname;
                            equipmentdata[bagtable]= 2;
                            equipmentdata[bagphy]= Gamedata.sys_wand_dataset[tablecort];
                            equipmentdata[bagper]= Gamedata.sys_wand_dataset[percent];
                            equipmentdata[bagdur]= RandomMinMax(30,100);
                            equipmentdata[bagdurdmg]= Gamedata.sys_wand_dataset[durdmg];
                            User.Ary_Equipmentnames = equipnames.join("<:>");
                            User.Ary_Equipmentdata = equipmentdata.join("<:>");
                            var displaydrop = Gamedata.sys_wand_dataset[percent]*100;
                            displaydrop = Math.round(displaydrop);
                            newemmbed.addField(":magic_wand: "+getname,"Atk:"+Gamedata.sys_wand_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]);
                        }
                        else{
                            newemmbed.addField(":x: You do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                        }
                    }
                    else if(Gamedata.sys_bow_names.some(a=>IgnoringCase(a,getitem))){
                        var getname = Gamedata.sys_bow_names.find(a=>IgnoringCase(a,getitem));
                        var getcort = Gamedata.sys_bow_names.indexOf(getname);
                        var tablecort =3*getcort;
                        var percent = 1+tablecort;
                        var durdmg = 2+tablecort;
                        var checkresult = equipnames.indexOf("");
                        if(checkresult!=-1){
                            var bagtable = 5*checkresult;
                            var bagphy = 1+bagtable;
                            var bagper = 2+bagtable;
                            var bagdur = 3+bagtable;
                            var bagdurdmg = 4+bagtable;
                            equipnames[checkresult]= getname;
                            equipmentdata[bagtable]= 3;
                            equipmentdata[bagphy]= Gamedata.sys_bow_dataset[tablecort];
                            equipmentdata[bagper]= Gamedata.sys_bow_dataset[percent];
                            equipmentdata[bagdur]= RandomMinMax(30,100);
                            equipmentdata[bagdurdmg]= Gamedata.sys_bow_dataset[durdmg];
                            User.Ary_Equipmentnames = equipnames.join("<:>");
                            User.Ary_Equipmentdata = equipmentdata.join("<:>");
                            var displaydrop = Gamedata.sys_bow_dataset[percent]*100;
                            displaydrop = Math.round(displaydrop);
                            newemmbed.addField(":bow_and_arrow: "+getname,"Atk:"+Gamedata.sys_bow_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]);
                        }
                        else{
                            newemmbed.addField(":x: You do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                        }
                    }
                    else if(Gamedata.sys_armor_names.some(a=>IgnoringCase(a,getitem))){
                        var getname = Gamedata.sys_armor_names.find(a=>IgnoringCase(a,getitem));
                        var getcort = Gamedata.sys_armor_names.indexOf(getname);
                        var tablecort =3*getcort;
                        var percent = 1+tablecort;
                        var durdmg = 2+tablecort;
                        var checkresult = equipnames.indexOf("");
                        if(checkresult!=-1){
                            var bagtable = 5*checkresult;
                            var bagphy = 1+bagtable;
                            var bagper = 2+bagtable;
                            var bagdur = 3+bagtable;
                            var bagdurdmg = 4+bagtable;
                            equipnames[checkresult]= getname;
                            equipmentdata[bagtable]= 0;
                            equipmentdata[bagphy]= Gamedata.sys_armor_dataset[tablecort];
                            equipmentdata[bagper]= Gamedata.sys_armor_dataset[percent];
                            equipmentdata[bagdur]= RandomMinMax(30,100);
                            equipmentdata[bagdurdmg]= Gamedata.sys_armor_dataset[durdmg];
                            User.Ary_Equipmentnames = equipnames.join("<:>");
                            User.Ary_Equipmentdata = equipmentdata.join("<:>");
                            var displaydrop = Gamedata.sys_armor_dataset[percent]*100;
                            displaydrop = Math.round(displaydrop);
                            newemmbed.addField(":coat: "+getname,"Def:"+Gamedata.sys_armor_dataset[tablecort]+" AddDef:"+displaydrop+"\nDurability"+equipmentdata[bagdur]);
                        }
                        else{
                            newemmbed.addField(":x: You do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                        }
                    }
                   else if(getitem=="GOLD"){
                        itemamount = RandomMinMax(1,itemamount);
                        User.currency+=itemamount;
                        itemamount=""+itemamount;
                        newemmbed.addField(":coin: Currency",itemamount.padStart(6," "));
                    }
                    else if(getitem=="Minic"){
                       var percenthp= Math.round(User.HP/itemamount);
                       User.HP-= percenthp;
                       User.HP= Math.round(User.HP);
                       if(User.HP<1)User.HP=1;
                       if(User.HP>User.MaxHP)User.HP=User.MaxHP;
                       newemmbed.setDescription(":interrobang: You have encountered a Minic Chest");
                       newemmbed.setImage(Gamedata.sys_chest_minic);
                    }
                    else if(Gamedata.sys_chest_mysterychest.some(a=>a==getitem)){
                        if(getitem==Gamedata.sys_chest_mysterychest[3]){
                            profiledata[0] = User.MaxHP;
                            User.MaxHP= Math.round(User.MaxHP+User.MaxHP/0.30);
                            User.HP = User.MaxHP;
                            User.Ary_Equipmentdata = profiledata.join("<:>");
                        }
                        profilenames[5]=getitem;
                        User.Ary_HH3ProfileNames = profilenames.join("<:>");
                        newemmbed.setDescription(":gear: "+getitem+" for this turn");
                    }
                    else{
                        newemmbed.addField(":x: Item not found","This will be patched soon");
               }
                   }
               }
               message.edit(newemmbed.setImage(""));
               return(
                Account.findOne({
                    id: User.id
                },async(err,User)=>{
                  if(err)console.log(err);
                  User.hh3dailycooldown = Date.now()+86400000;
                User.save().catch(err => console.log(err));}))
           }
        }
            const canvas = createCanvas(560,200);
            const ctx = canvas.getContext("2d");
            const background = await loadImage("https://i.ibb.co/98CmL0j/dailyreward.png");
            ctx.drawImage(background,0,0, canvas.width, canvas.height);
            ctx.beginPath();
            const chest1 = await loadImage(chestlinks[0]);
            ctx.drawImage(chest1,0,0, 200, 200);
            const chest2 = await loadImage(chestlinks[1]);
            ctx.drawImage(chest2,183,0, 200, 200);
            const chest3 = await loadImage(chestlinks[2]);
            ctx.drawImage(chest3,366,0, 200, 200);
            ctx.font="18px Sans";
            ctx.fillStyle="#000000";
            if(temname[0] =="Mystery Chest")ctx.fillStyle="#ffffff";
            ctx.fillText("1",94,110);
            ctx.font="18px Sans";
            ctx.fillStyle="#000000";
            if(temname[1]=="Mystery Chest")ctx.fillStyle="#ffffff";
            ctx.fillText("2",276,110);
            ctx.font="18px Sans";
            ctx.fillStyle="#000000";
            if(temname[2]=="Mystery Chest")ctx.fillStyle="#ffffff";
            ctx.fillText("3",460,110);
            ctx.closePath();
            ctx.clip();
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
    newemmbed.attachFiles(attachment);
    message.channel.send(newemmbed.setImage("attachment://png.png")).then(function(message){message.react('1️⃣'),message.react('2️⃣'),message.react('3️⃣')
    const filter = (reaction, user) => {
     return ['1️⃣', '2️⃣', '3️⃣'].includes(reaction.emoji.name) && user.id === User.id;
 };
    message.awaitReactions(filter, { max: 1})
 .then(collected => {
     const reaction = collected.first();

     if (reaction.emoji.name == '1️⃣') {
         confirm(message,0);
     } else if (reaction.emoji.name == '2️⃣') {
        confirm(message,1);
     }
     else{
        confirm(message,2);
    }
 })
})
        } 
        else message.channel.send(newemmbed);
}
if(profilenames[5]!=""){
    if(profilenames[5]==Gamedata.sys_chest_mysterychest[1]){
        hh3funset1[2]=0;
        User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
        User.Ary_HH3ProfileNames = profilenames.join("<:>");
    }
    if(profilenames[5]==Gamedata.sys_chest_mysterychest[3]){
        User.MaxHP=profiledata[0];
        User.HP=MaxHP;
        profiledata[0]=0;
        User.Ary_Equipmentdata = profiledata.join("<:>");
        User.Ary_HH3ProfileNames = profilenames.join("<:>");
    }
    profilenames[5]="";
}
}
module.exports.key = {
    name: "myturn",
    description: "starts the turn of HH3"
}