const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {
    var rawdata = User.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index])
    }
    const dataembed = new Discord.MessageEmbed();
    dataembed.setColor(User.colortheme);
    var fav = "N/A"
    var account = new Date(mdata[0]);
    var maxexp =0;
    for(var level=User.level-1;level<User.level;level++){
    var oldlv = User.level-1;
    var oldlvexpmax =Math.pow(2,3)*oldlv+60*oldlv;
     maxexp += Math.pow(2,3)*User.level+60*User.level+oldlvexpmax+User.level*2;}
    dataembed.setAuthor(User.name+"'s Statistic",message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }));
    dataembed.addField("Game starts",mdata[5]);
    dataembed.addField("Rolls",mdata[1]);
    dataembed.addField("Floors Cleared",mdata[12]);
    dataembed.addField("Steps taken",mdata[13]);
    dataembed.addField("Monsters Encountered",mdata[2]);
    dataembed.addField("Monsters Defeated",mdata[3]);
    dataembed.addField("Defeated",mdata[4]);
    //dataembed.addField("PvP wins",mdata[8]);
    dataembed.addField("Highest Damage dealt",mdata[6]);
    dataembed.addField("Highest Damage taken",mdata[7]);
    dataembed.addField("Total EXP",maxexp+User.exp);
    if(mdata[9]>mdata[10]&mdata[9]>mdata[11])fav="Sword";
    else if(mdata[10]>mdata[9]&mdata[10]>mdata[11])fav="Wand";
    else if(mdata[11]>mdata[9]&mdata[11]>mdata[10])fav="Bow";
    dataembed.addField("Favorite Type of Weapon",fav);
    dataembed.addField("Account Created",account);
         message.channel.send( dataembed );
}
module.exports.key = {
    name: "statistic",
    description: "Data collection."
}