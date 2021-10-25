const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {
    function IgnoringCase(text, other) {
        return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
    }
    var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index])
    }
    const upgradeembed = new Discord.MessageEmbed();
    upgradeembed.setColor(User.colortheme);
    if(arg==""||arg.includes(" &")){
        var displayed1 = (profiledata[12]*100);
        var displayed2 = (profiledata[13]*100);
        var displayed5 = (profiledata[18]*100);
        upgradeembed.setAuthor("Upgrade Status",message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }));
        upgradeembed.setTitle("To Upgrade, command: `-upgrade <a name in status list>`\nTo Upgrade multipliable, command:\n`-upgrade <a name in status list> x <amount>`");
        upgradeembed.addField("HP","HP is your Health Points\n+8 per upgrade point(Max base HP is 240)\n"+User.MaxHP);
        upgradeembed.addField("Atk","Atk is your Attack power\n+3 per upgrade point\n"+profiledata[16]);
        upgradeembed.addField("Def","Def is your Defense Power\n+3 per upgrade point\n"+profiledata[17]);
        upgradeembed.addField("Accuracy","Accuracy is your Accuracy for attack chance\n+2% per upgrade point(Max Accuracy is 30%)\n"+displayed2);
        upgradeembed.addField("Critical","Critical is your Critical Rate for attack\n+4% per upgrade point(Max Critical is 64%)\n"+displayed5);
        upgradeembed.addField("Speed","Speed is your speed in combat\n+2% per upgrade point(Max Speed is 100%)\n"+displayed1);
        upgradeembed.addField("Upgrade Points: `"+User.Upgradepoint+"`","Pick a status you wish to upgrade.")
    }
    else{
        var match =["hp","atk","def","accuracy","critical","speed","crit","attack","defense","spd","acy"];
        var getarg = arg.split("x");
        getarg[0]= getarg[0].trimEnd().toLowerCase();
        if(match.some(a=>IgnoringCase(a,getarg[0]))){
            getarg[0] = match.find(a=>IgnoringCase(a,getarg[0]));
            if(User.Upgradepoint>0){
    if(getarg[1]){
        getarg[1] = Math.round(Number(getarg[1].trimStart()));
        if(!isNaN(getarg[1])){
            if(User.Upgradepoint>=getarg[1]){
                if(getarg[0].includes("hp")){
                    if(User.MaxHP<240){
                    User.Upgradepoint-=getarg[1];
                    User.MaxHP+=8*getarg[1];
                    upgradeembed.setDescription(":gear: Your HP has been upgraded to "+User.MaxHP+" (Max Base HP upgrade is 240)");
                    if(User.MaxHP==161){upgradeembed.addField("Congratulations\nYour HP is maxed out","You cannot upgrade your HP anymore.");}
                }
                    else{
                        upgradeembed.setDescription(":x: Your HP is maxed out");
                    }
                }
                else if(getarg[0].includes(("atk"||"attack"))){
                    User.Upgradepoint-=getarg[1];
                    profiledata[16]+=(3*getarg[1]);
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    upgradeembed.setDescription(":gear: Your Atk has been upgraded to "+profiledata[16]);
                }
                else if(getarg[0].includes(("def"||"defense"))){
                    User.Upgradepoint-=getarg[1];
                    profiledata[17]+=(3*getarg[1]);
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    upgradeembed.setDescription(":gear: Your Def has been upgraded to "+ profiledata[17]);
                }
                else if(getarg[0].includes(("accuracy"||"acy"))){
                    if(profiledata[13]<0.30){
                    User.Upgradepoint-=getarg[1];
                    profiledata[13]+=(0.02*getarg[1]);
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    var display = profiledata[13]*100;
                    display = Math.round(display);
                    upgradeembed.setDescription(":gear: Your Accuracy has been upgraded to"+display+" (Max Accuracy is 30%)");
                    if(profiledata[13]==0.30){upgradeembed.addField("Congratulations\nYour Accuracy is maxed out","You cannot upgrade your Accuracy anymore.");}}
                    else{
                        upgradeembed.setDescription(":x: Your Accuracy is maxed out");
                    }
                }
                else if(getarg[0].includes("crit")){
                    if(profiledata[18]<0.64){
                    User.Upgradepoint-=getarg[1];
                    profiledata[18]+=(0.04*getarg[1]);
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    var display = profiledata[18]*100;
                    display = Math.round(display);
                    upgradeembed.setDescription(":gear: Your Critical has been upgraded to"+display+" (Max Critical is 64%)");
                    if(profiledata[18]==0.64){upgradeembed.addField("Congratulations\nYour Critical is maxed out","You cannot upgrade your Critical anymore.");}}
                    else{
                        upgradeembed.setDescription(":x: Your Critical is maxed out");
                    }
                }
                else if(getarg[0].includes(("speed"||"spd"))){
                    if(profiledata[12]<1){
                    User.Upgradepoint-=getarg[1];
                    profiledata[12]+=(0.02*getarg[1]);
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    var display = profiledata[12]*100;
                    display = Math.round(display);
                    upgradeembed.setDescription(":gear: Your Speed has been upgraded to"+display+" (Max Speed is 100%)");
                    if(profiledata[12]==1){upgradeembed.addField("Congratulations\nYour Speed is maxed out","You cannot upgrade your Speed anymore.");}}
                    else{
                        upgradeembed.setDescription(":x: Your Speed is maxed out");
                    }
                }
                else{
                upgradeembed.setTitle(":x: Error cannot find status");
                }
            }
            else{
                upgradeembed.setTitle(":x: Not enough Upgrade points");
                upgradeembed.setDescription("You can get more Upgrade point by leveling up.");
            }
        }
        else{
            upgradeembed.setDescription(":x: invalid amount");
        }
    }
    else{
        if(getarg[0].includes("hp")){
            if(User.MaxHP<240){
            User.Upgradepoint--;
            User.MaxHP+=8;
            upgradeembed.setDescription(":gear: Your HP has been upgraded to "+User.MaxHP+" (Max HP upgrade is 240)");
            if(User.MaxHP==240){upgradeembed.addField("Congratulations\nYour HP is maxed out","You cannot upgrade your HP anymore.");}
        }
            else{
                upgradeembed.setDescription(":x: Your HP is maxed out");
            }
        }
        else  if(getarg[0].includes(("atk"||"attack"))){
            User.Upgradepoint--;
            profiledata[16]+=3;
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            upgradeembed.setDescription(":gear: Your Atk has been upgraded to "+profiledata[16]);
        }
        else if(getarg[0].includes(("def"||"defense"))){
            User.Upgradepoint--;
            profiledata[17]+=3;
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            upgradeembed.setDescription(":gear: Your Def has been upgraded to "+profiledata[17]);
        }
        else if(getarg[0].includes(("accuracy"||"acy"))){
            if(profiledata[13]<0.30){
            User.Upgradepoint--;
            profiledata[13]+=0.02;
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            var display = profiledata[13]*100;
            display = Math.round(display);
            upgradeembed.setDescription(":gear: Your Accuracy has been upgraded to"+display+" (Max Accuracy is 30%)");
            if(profiledata[13]==0.30){upgradeembed.addField("Congratulations\nYour Accuracy is maxed out","You cannot upgrade your Accuracy anymore.");}}
            else{
                upgradeembed.setDescription(":x: Your Accuracy is maxed out");
            }
        }
        else if(getarg[0].includes("crit")){
            if(profiledata[18]<0.64){
            User.Upgradepoint--;
            profiledata[18]+=0.04;
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            var display = profiledata[18]*100;
            display = Math.round(display);
            upgradeembed.setDescription(":gear: Your Critical has been upgraded to"+display+" (Max Critical is 64%)");
            if(profiledata[18]==0.64){upgradeembed.addField("Congratulations\nYour Critical is maxed out","You cannot upgrade your Critical anymore.");}}
            else{
                upgradeembed.setDescription(":x: Your Critical is maxed out");
            }
        }
        else if(getarg[0].includes(("speed"||"spd"))){
            if(profiledata[12]<1){
            User.Upgradepoint--;
            profiledata[12]+=0.02;
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            var display = profiledata[12]*100;
            display = Math.round(display);
            upgradeembed.setDescription(":gear: Your Speed has been upgraded to"+display+" (Max Speed is 100%)");
            if(profiledata[12]==1){upgradeembed.addField("Congratulations\nYour Speed is maxed out","You cannot upgrade your Speed anymore.");}}
            else{
                upgradeembed.setDescription(":x: Your Speed is maxed out");
            }
        }
    }
}
else{
    upgradeembed.setTitle(":x: Not enough Upgrade points");
    upgradeembed.setDescription("You can get more Upgrade point by leveling up.");
}
}
else{
    upgradeembed.setTitle(":x: That status does not exist.");
    upgradeembed.setDescription("Please pick the status in the list.\nTo view list, command: `-upgrade`");
}
    }

         message.channel.send( upgradeembed );
}
module.exports.key = {
    name: "upgrade",
    description: "Upgrade your status."
}