const Discord = require('discord.js');
module.exports.run = async (message, arg,User) => {

    const newemmbed = new Discord.MessageEmbed();
    newemmbed.setColor(User.colortheme)
    newemmbed.setAuthor("Hunted House 3");
    if(User.Ary_HH3FunctionSet1==undefined){User.Ary_HH3FunctionSet1 = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";}
    var rawdata = User.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index])
    }
    if(User.Ary_itembagdata){
    var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index])
    }}
    if(User.energy!=undefined&User.turn==false){
        newemmbed.setTitle("Welcome Back" + User.name+ "\n here is the list of commands");
        mdata[5]++;User.Metadata = mdata.join("<:>");
    }
    else if(User.energy!=undefined&User.turn==true){
        newemmbed.setTitle("your turn already is active" + User.name+ "\n here is the list of commands");
    }
    if(User.energy==undefined){
        User.HP = User.MaxHP;
        User.Maxenergy = 100;
        User.energy = 100;
        User.step =0;
        User.Ary_Imgset = "<:>";
        User.Ary_itembagnames= "HP Potion<:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:><:>";
        User.Ary_itembagdata="10<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0"
        User.Ary_Equipmentnames = "<:><:><:><:><:><:><:>";
        User.Ary_Equipmentdata = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
        User.Shop_itemsnames = "<:><:><:><:><:>";
        User.Shop_itemsdata = "0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0<:>0";
        User.TemdataNames = "";
        User.TemdataNumbers = "";
        User.floor =0;
        User.RefreshItems = 0;
        User.Fightagain =1;
        User.hh3dailycooldown = Date.now()+86400000;
        mdata[5]++;
        User.Metadata = mdata.join("<:>");
         rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
        newemmbed.setTitle("your turn has started "+User.name+"\n here is the list of commands");User.turn=true;
        newemmbed.setDescription("To progress in this game you must roll a dice, command: `-roll`\nTo see other hunted house commands: `-help game`\nNew Start bonus: `HP Potion x10`");
    }
    else if (User.energy) { 
    newemmbed.setDescription("To Continue the Game command: `-roll`\nTo Look around Command: `-check`\nTo view items command: `-items`\nTo End Turn command:    `-endturn`\nTo Equipment command: `-equip`\nTo Shop command: `-shop`");
        User.turn=true;
        if(Date.now()>User.hh3dailycooldown){
            var potionamount = 3;
            itembagdata[0]+= potionamount;
            User.Ary_itembagdata = itembagdata.join("<:>");
            User.hh3dailycooldown = Date.now()+86400000;
            newemmbed.addfield("Daily Bonus","`HP Potion x3`");
        } 
}
         message.channel.send( newemmbed );
}
module.exports.key = {
    name: "myturn",
    description: "starts the turn of HH3"
}