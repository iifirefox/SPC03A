const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {
    if(User.Ary_HH3FunctionSet1)var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
    else return message.channel.send(checkembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    var profilenames = User.Ary_HH3ProfileNames.split("<:>");
    var rawdata = User.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index])
    }
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      };
      var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index])
    }
    var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index]);
    }
    const restartembed = new Discord.MessageEmbed();
    restartembed.setColor(User.colortheme);
    if(!arg.includes("yes")&profiledata[8]==1){
    restartembed.setAuthor("Restarting from the begining",User.Profileimg);
    restartembed.setTitle(":warning: Your Game will restart from the begining\n`You will lose all your progress you have made so far`");
    restartembed.setDescription("Your Level and upgrade status will maintained");
    restartembed.addField("Are you sure you want to erase your game?","to confirm command: -restart yes");
}else if(arg.includes("yes")&itembagdata[8]==1){
    User.HP = User.MaxHP;
    User.energy = undefined;
    User.turn = false;
    User.TemdataNames = "";
    User.TemdataNumbers= "";
    User.floor= 0;
    User.RefreshItems=0;
    User.step=0;
    User.CombatMode=0;
    profilenames[1]="";
    profilenames[2]="";
    profiledata[2]=0;
    profiledata[3]=0;
    profiledata[4]=0;
    profiledata[5]=0;
    profiledata[6]=0;
    profiledata[7]=0;
    profiledata[8]=0;
    profiledata[9]=0;
    profiledata[10]=0;
    profiledata[11]=0;
    profiledata[14]=0;
    profiledata[15]=0;
    User.Ary_HH3ProfileNames = profilenames.join("<:>");
    User.Ary_HH3ProfileData = profiledata.join("<:>");
    mdata[5]=0;
    mdata[1]=0;
    mdata[2]=0;
    mdata[3]=0;
    mdata[4]=0;
    mdata[6]=0;
    mdata[7]=0;
    mdata[9]=0;
    mdata[10]=0;
    mdata[11]=0;
    mdata[12]=0;
    mdata[13]=0;
    User.Metadata = mdata.join("<:>")
    User.Shop_itemsnames="";
    User.Ary_Equipmentnames="";
    User.Ary_Equipmentdata="";
    User.Ary_itembagnames="";
    User.Ary_itembagdata="";
    User.Ary_HH3FunctionSet1= undefined;
    restartembed.setDescription(":recycle: Your game progress has been erased\nTo begin another game\nCommand: `-myturn`");
}
else{
    restartembed.setDescription(":x: You need to complete the game to use this command.")
}
         message.channel.send( restartembed );
}
module.exports.key = {
    name: "restart",
    description: "lets begin another game."
}