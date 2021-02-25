const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    var profilenames = User.Ary_HH3ProfileNames.split("<:>");
    const skillsembed = new Discord.MessageEmbed();
    skillsembed.setAuthor(User.name+"'s Skill Page",message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }));
    skillsembed.setDescription("You can use Skills in combat by using the command: `-act skill < Skill's name >`\nYou can gain Skill Energy by attacking normally(`-act attack`)\nor by defending(`-act defend`)");
    skillsembed.setColor(User.colortheme);
    arg = arg.toLowerCase();
    if(arg==""|!arg.includes("sword")&!arg.includes("wand")&!arg.includes("bow")){
    if(profilenames[1].includes("Sword")){
        var display = Math.round(Gamedata.sys_skill_data[1]*100);
        skillsembed.setTitle("You can currently use Sword skills");
        skillsembed.addField(Gamedata.sys_skill_names[0],"Deals "+Gamedata.sys_skill_data[0]+"% of your damage\nand 30% chance to decrease the foe's defense.\n`Cost "+Gamedata.sys_skill_data1[0]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[1],"Increases your Attack Power by "+display+"%\n`Cost "+Gamedata.sys_skill_data1[1]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[2],"Deals "+Gamedata.sys_skill_data[2]+"% of your damage\nand 10% chance to stun the foe\nalso gain +1 skill energy\n`Cost "+Gamedata.sys_skill_data1[2]+" Skill Energy`");
        skillsembed.setFooter("To view sword skills, command: -skill sword\nTo view wand skills, command: -skill wand\nTo view bow skills, command: -skill bow");
    }
    else if(profilenames[1].includes("Wand")){
        var display = Math.round(Gamedata.sys_skill_data[4]*100);
        skillsembed.setTitle("You can currently use Wand skills");
        skillsembed.addField(Gamedata.sys_skill_names[3],"Deals "+Gamedata.sys_skill_data[3]+"% of your damage\nand 20% chance to decrease the foe's defense.\n`Cost "+Gamedata.sys_skill_data1[3]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[4],"Increases your CriticalRate by "+display+"%\n`Cost "+Gamedata.sys_skill_data1[4]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[5],"Deals "+Gamedata.sys_skill_data[5]+"% of your damage\nand 30% chance curruption on foe\nalso your attack decreases 5%\n`Cost "+Gamedata.sys_skill_data1[5]+" Skill Energy`");
        skillsembed.setFooter("To view sword skills, command: -skill sword\nTo view wand skills, command: -skill\nTo view bow skills, command: -skill bow");
    }
    else if(profilenames[1].includes("Bow")){
        var display = Math.round(Gamedata.sys_skill_data[7]*100);
        skillsembed.setTitle("You can currently use Bow skills");
        skillsembed.addField(Gamedata.sys_skill_names[6],"Deals "+Gamedata.sys_skill_data[6]+"% of your damage\nand 30% chance to poison the foe.\n`Cost "+Gamedata.sys_skill_data1[6]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[7],"Increases your Speed by "+display+"%\n`Cost "+Gamedata.sys_skill_data1[7]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[8],"Deals "+Gamedata.sys_skill_data[8]+"% of your damage x3\nand 30% chance to stun the foe\n`Cost "+Gamedata.sys_skill_data1[8]+" Skill Energy`");
        skillsembed.setFooter("To view sword skills, command: -skill sword\nTo view wand skills, command: -skill wand\nTo view bow skills, command: -skill bow");
    }
    else{
        skillsembed.setTitle(":x: You have no weapon to use any skills with.");
        skillsembed.setFooter("To view sword skills, command: -skills sword\nTo view wand skills, command: -skills\nTo view bow skill, command: -skills bow");
    }}
    else if(arg.includes("sword")){
        var display = Math.round(Gamedata.sys_skill_data[1]*100);
        skillsembed.addField(Gamedata.sys_skill_names[0],"Deals "+Gamedata.sys_skill_data[0]+"% of your damage\nand 30% chance to decrease the foe's defense.\n`Cost "+Gamedata.sys_skill_data1[0]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[1],"Increases your attack power by "+display+"%\n`Cost "+Gamedata.sys_skill_data1[1]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[2],"Deals "+Gamedata.sys_skill_data[2]+"% of your damage\nand 10% chance to stun the foe\nalso gain +1 skill energy\n`Cost "+Gamedata.sys_skill_data1[2]+" Skill Energy`");
        skillsembed.setFooter("To view sword skills, command: -skills sword\nTo view wand skills, command: -skill wand\nTo view bow skills, command: -skill bow");
    }
    else if(arg.includes("wand")){
        var display = Math.round(Gamedata.sys_skill_data[4]*100);
        skillsembed.addField(Gamedata.sys_skill_names[3],"Deals "+Gamedata.sys_skill_data[3]+"% of your damage\nand 20% chance to decrease the foe's defense.\n`Cost "+Gamedata.sys_skill_data1[3]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[4],"Increases your CriticalRate by "+display+"%\n`Cost "+Gamedata.sys_skill_data1[4]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[5],"Deals "+Gamedata.sys_skill_data[5]+"% of your damage\nand 30% chance curruption on foe\nalso your attack decreases 5%\n`Cost "+Gamedata.sys_skill_data1[5]+" Skill Energy`");
        skillsembed.setFooter("To view sword skills, command: -skills sword\nTo view wand skills, command: -skill wand\nTo view bow skills, command: -skill bow");
    }
    else if(arg.includes("bow")){
        var display = Math.round(Gamedata.sys_skill_data[7]*100);
        skillsembed.addField(Gamedata.sys_skill_names[6],"Deals "+Gamedata.sys_skill_data[6]+"% of your damage\nand 30% chance to poison the foe.\n`Cost "+Gamedata.sys_skill_data1[6]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[7],"Increases your Speed by "+display+"%\n`Cost "+Gamedata.sys_skill_data1[7]+" Skill Energy`");
        skillsembed.addField(Gamedata.sys_skill_names[8],"Deals "+Gamedata.sys_skill_data[8]+"% of your damage x3\nand 30% chance to stun the foe\n`Cost "+Gamedata.sys_skill_data1[8]+" Skill Energy`");
        skillsembed.setFooter("To view sword skills, command: -skill sword\nTo view wand skills, command: -skill wand\nTo view bow skills, command: -skill bow");
    }
         message.channel.send( skillsembed );
}
module.exports.key = {
    name: "skill",
    description: "what skill to use?"
}