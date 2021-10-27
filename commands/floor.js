const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    if(User.Ary_Imgset)var Imgset = User.Ary_Imgset.split("<:>");
    else return message.channel.send(floorembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index]);
    }
    var rawdata = User.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index])
    }
    var num = Number(arg);
    const floorembed = new Discord.MessageEmbed();
    floorembed.setColor(User.colortheme);
    if(num ==0 | isNaN(num)&itembagdata[8]==1){
        floorembed.setTitle("Select the floor you wish to go to");
        floorembed.addField("Floor 2","Hunted ghosts takeover.");
        floorembed.addField("Floor 3","Creepy crawlers in the dark.");
        floorembed.addField("Floor 4","Forest inside a house");
        floorembed.addField("Floor 5","Darkness everywhere");
        floorembed.addField("Floor 6","Mushroom land");
        floorembed.addField("Floor 7","Vampire's keep");
        floorembed.addField("Floor 8","Spider's web");
        floorembed.addField("Floor 9","Cold chills everywhere");
        floorembed.addField("Floor 10","Darkness Party");
        floorembed.addField("Floor -1 (Basement)","Abandoned Basement");
        floorembed.addField("Floor -2 (Hidden Library)","World of secrets");
        floorembed.addField("Floor -3 (Crystal Cave)","Energy source of everything");
    }
    else if(num>=2&num<=10&itembagdata[8]==1||num<-1&num>-4&itembagdata[8]==1){
        var floor = true;
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
            User.floor=num;
            var setnum = num-2;
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
            User.floor=num;
            var setnum = num-2;
            User.step=140*setnum+1;
            Imgset[0] = Gamedata.floor10;
            User.Ary_Imgset = Imgset.join("<:>");
        }
        else if(num==-1){
            User.floor=num;
            User.step=0;
            Imgset[0] = Gamedata.floorb1;
            User.Ary_Imgset = Imgset.join("<:>");
        }
       else if(num<-1&num>-4&mdata[12]<num){
            User.floor=num;
            var setnum = num*-1;
            User.step=260*setnum+1;
            User.step=1;
            Imgset[0] = Gamedata.floorb1;
            if(num==-2) Imgset[0] = Gamedata.floorb2;
            if(num==-3) Imgset[0] = Gamedata.floorb5;
        }
        else{floorembed.setDescription(":x: You need to clear that floor first!");floor=false;}
       if(floor) floorembed.setDescription(":gear: You are now on floor "+User.floor);
    }
    else{floorembed.setDescription(":x: That Command is locked\ntry another")}
         message.channel.send( floorembed );
}
module.exports.key = {
    name: "floor",
    description: "use master key to go on certain floor."
}