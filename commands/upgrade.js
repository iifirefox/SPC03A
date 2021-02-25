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
    if(arg==""){
        upgradeembed.setAuthor("Upgrade Status",message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }));
        upgradeembed.setTitle("To Upgrade, command: `-upgrade <a name in status list>`\nTo Upgrade multipliable, command:\n`-upgrade <a name in status list> x <amount>`");
        upgradeembed.addField("HP","HP is your Health Points\n+3 per upgrade point");
        upgradeembed.addField("Atk","Atk is your Attack power\n+1% per upgrade point");
        upgradeembed.addField("Def","Def is your Defense Power\n+1% per upgrade point");
        upgradeembed.addField("Accuracy","Accuracy is your Accuracy for attack chance\n+2% per upgrade point");
        upgradeembed.addField("Critical","Critical is your Critical Rate for attack\n+2% per upgrade point");
        upgradeembed.addField("Speed","Speed is your speed in combat\n+2% per upgrade point");
        upgradeembed.addField("Upgrade Points: `"+User.Upgradepoint+"`","Pick a status you wish to upgrade.")
    }
    else{
        var match =["hp","atk","def","accuracy","critical","speed"];
        var getarg = arg.split("x");
        getarg[0]= getarg[0].trimEnd();
        console.log(getarg[0]);
        if(match.some(a=>IgnoringCase(a,getarg[0]))){
            getarg[0] = match.find(a=>IgnoringCase(a,getarg[0]));
            if(User.Upgradepoint>0){
    if(getarg[1]){
        getarg[1] = Number(getarg[1].trimStart());
        if(!isNaN(getarg[1])){
            if(User.Upgradepoint>=getarg[1]){
                if(getarg[0].includes("hp")){
                    User.Upgradepoint-=getarg[1];
                    User.MaxHP+=3*getarg[1];
                    upgradeembed.setDescription(":gear: Your HP has been upgraded to"+User.MaxHP);
                }
                else if(getarg[0].includes("atk")){
                    User.Upgradepoint-=getarg[1];
                    profiledata[16]+=0.01*getarg[1];
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    var display = profiledata[16]*100;
                    display = Math.round(display);
                    upgradeembed.setDescription(":gear: Your Atk has been upgraded to"+display);
                }
                else if(getarg[0].includes("def")){
                    User.Upgradepoint-=getarg[1];
                    profiledata[17]+=0.01*getarg[1];
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    var display = profiledata[17]*100;
                    display = Math.round(display);
                    upgradeembed.setDescription(":gear: Your Def has been upgraded to"+display);
                }
                else if(getarg[0].includes("accuracy")){
                    User.Upgradepoint-=getarg[1];
                    profiledata[13]+=0.02*getarg[1];
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    var display = profiledata[13]*100;
                    display = Math.round(display);
                    upgradeembed.setDescription(":gear: Your Accuracy has been upgraded to"+display);
                }
                else if(getarg[0].includes(getarg[0]=="critical")){
                    User.Upgradepoint-=getarg[1];
                    profiledata[18]+=0.02*getarg[1];
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    var display = profiledata[18]*100;
                    display = Math.round(display);
                    upgradeembed.setDescription(":gear: Your Critical has been upgraded to"+display);
                }
                else if(getarg[0].includes("critical")){
                    User.Upgradepoint-=getarg[1];
                    profiledata[18]+=0.02*getarg[1];
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    var display = profiledata[18]*100;
                    display = Math.round(display);
                    upgradeembed.setDescription(":gear: Your Critical has been upgraded to "+display+"%");
                }
                else if(getarg[0].includes("speed")){
                    User.Upgradepoint-=getarg[1];
                    profiledata[12]+=0.02*getarg[1];
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    var display = profiledata[12]*100;
                    display = Math.round(display);
                    upgradeembed.setDescription(":gear: Your Speed has been upgraded to"+display);
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
            User.Upgradepoint--;
            User.MaxHP+=3;
            upgradeembed.setDescription(":gear: Your HP has been upgraded to "+User.MaxHP);
        }
        else if(getarg[0].includes("atk")){
            User.Upgradepoint--;
            profiledata[16]+=0.01;
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            var display = profiledata[16]*100;
            display = Math.round(display);
            upgradeembed.setDescription(":gear: Your Atk has been upgraded to "+display+"%");
        }
        else if(getarg[0].includes("def")){
            User.Upgradepoint--;
            profiledata[17]+=0.01;
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            var display = profiledata[17]*100;
            display = Math.round(display);
            upgradeembed.setDescription(":gear: Your Def has been upgraded to "+display+"%");
        }
        else if(getarg[0].includes("accuracy")){
            User.Upgradepoint--;
            profiledata[13]+=0.02;
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            var display = profiledata[13]*100;
            display = Math.round(display);
            upgradeembed.setDescription(":gear: Your Accuracy has been upgraded to "+display+"%");
        }
        else if(getarg[0].includes("critical")){
            User.Upgradepoint--;
            profiledata[18]+=0.02;
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            var display = profiledata[18]*100;
            display = Math.round(display);
            upgradeembed.setDescription(":gear: Your Critical has been upgraded to "+display+"%");
        }
        else if(getarg[0].includes("speed")){
            User.Upgradepoint--;
            profiledata[12]+=0.02;
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            var display = profiledata[12]*100;
            display = Math.round(display);
            upgradeembed.setDescription(":gear: Your Speed has been upgraded to "+display+"%");
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