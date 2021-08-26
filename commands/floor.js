const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    if(User.Ary_Imgset)var Imgset = User.Ary_Imgset.split("<:>");
    else return message.channel.send(floorembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index])
    }
    var num = Number(arg);
    const floorembed = new Discord.MessageEmbed();
    floorembed.setColor(User.colortheme);
    if(num ==0 | isNaN(num)&profiledata[2]==1){
        floorembed.setTitle("Select the floor you wish to go to");
        floorembed.addfield("Floor 2","Hunted ghosts takeover.");
        floorembed.addfield("Floor 3","Creepy crawlers in the dark.");
        floorembed.addfield("Floor 4","Forest inside a house");
        floorembed.addfield("Floor 5","Darkness everywhere");
        floorembed.addfield("Floor 6","Mushroom land");
        floorembed.addfield("Floor 7","Vampire's keep");
        floorembed.addfield("Floor 8","Spider's web");
        floorembed.addfield("Floor 9","Cold chills everywhere");
        floorembed.addfield("Floor 10","Darkness Party");
    }
    else if(num>=2&num<=10&profiledata[2]==1){
        if(num==2){
            User.floor=num;
            User.step=10;
            Imgset[0] = Gamedata.floor2;
            User.Ary_Imgset = Imgset.join("<:>");
        }
        else if(num==3){
            User.floor==num;
            User.step=61;
            Imgset[0] = Gamedata.floor3;
            User.Ary_Imgset = Imgset.join("<:>");
        }
        else if(num>3&num<10){
            var setnum = num-2;
            User.floor=num;
            User.step=125*setnum+1;
            if(num==4) Imgset[0] = Gamedata.floor4;
            if(num==5) Imgset[0] = Gamedata.floor5;
            if(num==6) Imgset[0] = Gamedata.floor6;
            if(num==7) Imgset[0] = Gamedata.floor7;
            if(num==8) Imgset[0] = Gamedata.floor8;
            if(num==9) Imgset[0] = Gamedata.floor9;
            User.Ary_Imgset = Imgset.join("<:>");
        }
        else if(num==10){
            var setnum = num-2;
            User.floor=num;
            User.step=140*setnum+1;
            Imgset[0] = Gamedata.floor10;
            User.Ary_Imgset = Imgset.join("<:>");
        }
        floorembed.setDescription(":gear: You are now on floor "+User.floor);
    }
    else{floorembed.setDescription(":x: That Command is locked\ntry another")}
         message.channel.send( floorembed );
}
module.exports.key = {
    name: "floor",
    description: "use master key to go on certain floor."
}