const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
      };
    const spembed = new Discord.MessageEmbed();
    if(User.energy!=undefined&User.CombatMode==0&User.multi!=true){
        var temdatanames = User.TemdataNames.split("<:>");
        var Imgset = User.Ary_Imgset.split("<:>");
      var rawtemdatanumbers= User.TemdataNumbers.split("<:>");
      var temdatanumbers = [];
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index]);
      };
        var monsterpic=[];
        var monsterstat=[];
        var index =0;
        if(arg.includes("1")) index=1;
            monsterpic =Gamedata.sys_monsterpic_normal;
            monsterstat=Gamedata.sys_monster_stateA;
            var foedatatable = 11*index;
       var maxhp = 1+ foedatatable;
       var atk = 2+ foedatatable;
       var adatk = 3+ foedatatable;
       var def = 4+ foedatatable;
       var addef = 5+foedatatable;
       var speed = 6+ foedatatable;
       var crit = 7+ foedatatable;
       var accy = 8 + foedatatable;
       var dropkey = 9+ foedatatable;
       var effectkey = 10+foedatatable;
        User.CombatMode=1;
        temdatanames[0] = "Monster no."+RandomMax(9)+RandomMax(9)+RandomMax(9)+RandomMax(9)+RandomMax(9);
        temdatanumbers[0] = monsterstat[maxhp];
        temdatanumbers[1] = monsterstat[maxhp];
        temdatanumbers[2] = monsterstat[atk];
        temdatanumbers[3] = monsterstat[adatk];
        temdatanumbers[4] = monsterstat[def];
        temdatanumbers[5] = monsterstat[addef];
        temdatanumbers[6] = monsterstat[speed];
        temdatanumbers[7] = monsterstat[crit];
        temdatanumbers[8] = monsterstat[accy];
        temdatanumbers[9] = monsterstat[dropkey];
        temdatanumbers[10] = monsterstat[effectkey];
        temdatanumbers[11]=0;
        temdatanumbers[12]=0;
        temdatanumbers[13]=0;
        temdatanumbers[14]=0;
        temdatanumbers[15]=0;
        temdatanumbers[16]=0;
        temdatanumbers[17]=0;
        temdatanumbers[18]=0;
        temdatanumbers[19]=0;
        temdatanumbers[20]=0;
        temdatanumbers[21]=0;
        temdatanumbers[22]=0;
        temdatanumbers[23]=0;
        temdatanumbers[24]=0;
        temdatanumbers[25]=0;
        temdatanumbers[26]=0;
        temdatanumbers[27]=0;
        temdatanumbers[28]=0;
        temdatanumbers[29]=0;
        temdatanumbers[30]=0;
        temdatanumbers[31]=0;
        temdatanumbers[32]=0;
        temdatanumbers[33]=0;
        Imgset[1] = monsterpic[RandomMax(Gamedata.sys_monsterpic_normal.length)];
        User.Ary_Imgset = Imgset.join("<:>");
        User.TemdataNames = temdatanames.join("<:>");
        User.TemdataNumbers = temdatanumbers.join("<:>");
        spembed.setTitle(":interrobang: You have encountered a "+temdatanames[0]);
        const canvas = createCanvas(256,296);
        const ctx = canvas.getContext("2d");
        const background = await loadImage("https://i.ibb.co/cFVyjpQ/newoverly.png");
        ctx.drawImage(background,0,0, canvas.width, canvas.height);
        ctx.beginPath();
        const pic = await loadImage(Imgset[1]);
        ctx.drawImage(pic,0,33, canvas.width, 256);
        ctx.lineWidth = 2;
        ctx.strokeStyle="#FFA600";
        ctx.globalAlpha=0.2;
        ctx.fillStyle = "#000000";
        ctx.fillRect(38, 0 , 180, 25);
        ctx.fill();
        ctx.globalAlpha=1;
        ctx.strokeRect(38, 0 , 180, 25);
        ctx.stroke();
        ctx.fillStyle = "#FF1919";
        ctx.globalAlpha = 0.6;
        var current = temdatanumbers[0]/temdatanumbers[1];
        current = Math.round(current*100);
        ctx.fillRect(38, 1 , current*1.8, 23);
        ctx.fill();
        ctx.globalAlpha=1;
        ctx.font="10px Arial";
        ctx.fillStyle="#ffffff";
        ctx.fillText("HP",45,15);
        ctx.font="bold 11px Sans";
        ctx.fillStyle="#ffffff";
        ctx.fillText(temdatanumbers[0],120,15);
        ctx.closePath;
        ctx.clip();
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
        message.channel.send(spembed.attachFiles(attachment).
        setImage("attachment://png.png").
        addField("To fight, command:"," -act with `attack`, `defend`,`potion`,`flee`\n or to check status command: `-check`"));
    }
    else if(User.CombatMode!=0)message.channel.send(spembed.setDescription(":x: Your already in combat."))
    else if(User.multi==true)message.channel.send(spembed.setDescription(":x: Please leave your party to use this command."))
    else if(!User.energy)message.channel.send(spembed.setDescription(":x: User is missing data to use this command."));
}
module.exports.key = {
    name: "spawn",
    description: "spawn your own monsters."
}