const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    const skillsembed = new Discord.MessageEmbed();
    skillsembed.setColor(User.colortheme);
  if(User.Ary_HH3ProfileNames) var profilenames = User.Ary_HH3ProfileNames.split("<:>");
  else return message.channel.send(skillsembed.setDescription(":x: Error: User missing infomation to use this command.\nMaybe this is the wrong command?"));
   if(User.Ary_skills) var aryskills = User.Ary_skills.split("<:>");
   else return message.channel.send(skillsembed.setDescription(":x: Error: User missing infomation to use this command.\nMaybe this is the wrong command?"));
   if(User.skillslearned) var aryskillearn = User.skillslearned.split("<:>");
   else return message.channel.send(skillsembed.setDescription(":x: Error: User missing infomation to use this command.\nMaybe this is the wrong command?"));
   if(User.Ary_skillsdata.split("<:>")){var rawskilldata = User.Ary_skillsdata.split("<:>");var aryskilldata = [];
    for(var index=0; index<rawskilldata.length;index++){
        aryskilldata[index]= Number(rawskilldata[index])
    }}else return message.channel.send(skillsembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    function IgnoringCase(text, other) {
        return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
    }
   if(!arg.includes("to")) skillsembed.setAuthor(User.name+"'s Skill Page",message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }));
    skillsembed.setDescription("To change skills, command: -skill < skill name > `to` < skill slot number >");
    arg = arg.toLowerCase();
     if(arg.includes("tree")&!arg.includes("to")){
        skillsembed.setTitle("To Change your skills, Command: -skill (selected skill's name) to (skill slot number 1-4)")
        skillsembed.setDescription("**(slot 1) "+aryskills[0]+" | (slot 2) "+aryskills[1]+" | (slot 3) "+aryskills[2]+" | (slot 4) "+aryskills[3]+"**");
        for(var index =0; index<4;index++){
           var skilltext = Gamedata.sys_heronoskills.indexOf(aryskillearn[index]);
          var getext = Gamedata.sys_heroskills_script[skilltext]
            skillsembed.addField(aryskillearn[index],getext);
        }
        message.channel.send(skillsembed).then((message)=>{message.react('⏪'),message.react('⬅️'),message.react('➡️'),message.react('⏩');
        function sample(){
        const filter = (reaction, user) => {
         return ['⬅️','➡️','⏪','⏩'].includes(reaction.emoji.name) && user.id === User.id;
     };
        message.awaitReactions(filter, { max: 1})
     .then((collected) => {
         const reaction = collected.first();
         if (reaction.emoji.name == '➡️') {
           if(index<aryskillearn.length) skillsembed.spliceFields(0,9);
            var newdex = index+4;
            for(index; index<newdex||index<aryskillearn.length;index++){
                if(aryskillearn[index]){
                var skilltext = Gamedata.sys_heronoskills.indexOf(aryskillearn[index]);
               var getext = Gamedata.sys_heroskills_script[skilltext]
                 skillsembed.addField(aryskillearn[index],getext);}
             }
             message.edit(skillsembed).then(message=>{message.reactions.resolve('➡️').users.remove(User.id);});
             sample();
         } else if (reaction.emoji.name == '⬅️') {
             index-=8;
             if(index<0)index=0;
             var newdex = index+4;
             skillsembed.spliceFields(0,9);
            for(index; index<newdex;index++){
                if(aryskillearn[index]){
                var skilltext = Gamedata.sys_heronoskills.indexOf(aryskillearn[index]);
               var getext = Gamedata.sys_heroskills_script[skilltext]
                skillsembed.addField(aryskillearn[index],getext);}
             }
             message.edit(skillsembed).then(message=>{message.reactions.resolve('⬅️').users.remove(User.id);});
             sample();
         }
        else if (reaction.emoji.name == '⏩') {
            skillsembed.spliceFields(0,9);
            var newdex = aryskillearn.length;
            index = aryskillearn.length-3;
            for(index; index<newdex;index++){
                if(aryskillearn[index]){
                var skilltext = Gamedata.sys_heronoskills.indexOf(aryskillearn[index]);
               var getext = Gamedata.sys_heroskills_script[skilltext]
                 skillsembed.addField(aryskillearn[index],getext);}
             }
             message.edit(skillsembed).then(message=>{message.reactions.resolve('⏩').users.remove(User.id);});
             sample();
         }
         else if (reaction.emoji.name == '⏪') {
            skillsembed.spliceFields(0,9);
            var newdex = 4;
            index = 0;
            for(index; index<newdex;index++){
                if(aryskillearn[index]){
                var skilltext = Gamedata.sys_heronoskills.indexOf(aryskillearn[index]);
               var getext = Gamedata.sys_heroskills_script[skilltext]
                 skillsembed.addField(aryskillearn[index],getext);}
             }
             message.edit(skillsembed).then(message=>{message.reactions.resolve('⏪').users.remove(User.id);});
             sample();
         }
     })
 }
     sample();
 });
    }
    else if(arg.includes("to")){
        var firstsplit = arg.split("to");
        firstsplit[0] = firstsplit[0].trimEnd();
        var getnum = Number(firstsplit[1].trimStart())-1;
        if(Gamedata.sys_heronoskills.some(a=>IgnoringCase(a,firstsplit[0]))&aryskillearn.some(a=>IgnoringCase(a,firstsplit[0]))&getnum<4&getnum>-1){
            var getname =  Gamedata.sys_heronoskills.find(a=>IgnoringCase(a,firstsplit[0]));
            var getdatakey = Gamedata.sys_heronoskills.indexOf(getname);
            aryskills[getnum] = getname;
            var table = getdatakey*5;var table2 = table+1; var table3 = table+2; var table4 = table+3; var table5 = table+4;
            var tablea = getnum*5;var table2a = tablea+1; var table3a = tablea+2; var table4a = tablea+3; var table5a = tablea+4;
            aryskilldata[tablea]=Gamedata.sys_heroskill_numbers[table];
            aryskilldata[table2a]=Gamedata.sys_heroskill_numbers[table2];
            aryskilldata[table3a]=Gamedata.sys_heroskill_numbers[table3];
            aryskilldata[table4a]=Gamedata.sys_heroskill_numbers[table4];
            aryskilldata[table5a]=Gamedata.sys_heroskill_numbers[table5];
            User.Ary_skills = aryskills.join("<:>");
            User.Ary_skillsdata = aryskilldata.join("<:>");
            getnum+=1;
            skillsembed.setDescription(":gear: skill in slot("+getnum+") has been changed to "+getname);
        }
        else if(Gamedata.sys_heronoskills.some(a=>IgnoringCase(a,firstsplit[0]))&!aryskillearn.some(a=>IgnoringCase(a,firstsplit[0])))skillsembed.setDescription(":x: You did not learn this skill yet");
        else skillsembed.setDescription(":x: Skill slot number or Name is incorrect");
        message.channel.send(skillsembed)
    }
    else{
        var header = ":no_entry_sign:  You have no weapon, you can use `(Any)` type skills only.";
    if(profilenames[1].includes("Sword")){
        header=":dagger: You can currently use `(Sword)` type skills";
    }
    else if(profilenames[1].includes("Wand")){
        header=":magic_wand: You can currently use `(Wand)` type skills";
    }
    else if(profilenames[1].includes("Bow")){
        header=":bow_and_arrow: You can currently use `(Bow)` type skills";
    }
    skillsembed.setTitle(header);
    var skillnoscript;
    var scriptdisplayer;
    for(var run=0; run<4;run++){
        if(Gamedata.sys_heronoskills.some(a=>a==aryskills[run])){
    skillnoscript = Gamedata.sys_heronoskills.indexOf(aryskills[run]);
    scriptdisplayer = Gamedata.sys_heroskills_script[skillnoscript];
}
    else scriptdisplayer="(you can add skills)";
    skillsembed.addField(aryskills[run],scriptdisplayer);
}
skillsembed.setFooter("🔹 You can use Skills in combat by using the command: act < Skill's name >\nor act skill < skill slot number >"+
"\nYou can gain Skill Energy by attacking normally( act attack )\nor by defending( -act defend )")
message.channel.send(skillsembed)
}
}
module.exports.key = {
    name: "skill",
    description: "what skill to use?"
}