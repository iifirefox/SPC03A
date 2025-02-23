const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
const {createCanvas, loadImage,registerFont} = require('canvas');
module.exports.run = async (message, arg, User) => {
    const crystalembed = new Discord.MessageEmbed();
    crystalembed.setColor(User.colortheme);
    if(User.CombatMode==0){
    if(User.Ary_Crystalnames) var crystalnames = User.Ary_Crystalnames.split("<:>");
  else return message.channel.send(crystalembed.setDescription(":x: Error: User missing infomation to use this command.\nMaybe this is the wrong command?"));
  if(User.Ary_Crystaldata.split("<:>")){var rawcrystaldata = User.Ary_Crystaldata.split("<:>");var crystaldata = [];
    for(var index=0; index<rawcrystaldata.length;index++){
        crystaldata[index]= Number(rawcrystaldata[index]);
    }}else return message.channel.send(crystalembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    if(User.Ary_HH3ProfileNames)var profilenames = User.Ary_HH3ProfileNames.split("<:>");
    else return message.channel.send(crystalembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    if(User.Ary_HH3ProfileData){
        var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index]);
    }if(profiledata.length<30){profiledata[26]=0;profiledata[27]=0;profiledata[28]=0;profiledata[29]=0,profiledata[30]=0;profiledata[31]=0;
      profiledata[32]=0;User.Ary_HH3ProfileData = profiledata.join(Gamedata.key);};}
    else return message.channel.send(crystalembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    if(User.TemdataNumbers||User.TemdataNumbers==""){
        var rawtemdatanumbers= User.TemdataNumbers.split("<:>");
      var temdatanumbers = [];
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index])
      }
    }
    else return message.channel.send(crystalembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    if(User.Ary_HH3FunctionSet1){
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index]);
      }}else return message.channel.send(crystalembed.setDescription(":x: Error: User missing infomation to use this command\nMaybe this is the wrong command?"));
    crystalembed.setTitle(":gem: Crystal bag");
    if(!arg.includes("to")&!arg.includes("yes")){
    var amount =0;
    if(!crystalnames.every(a=>a=="")){
      var getdata = 0;
      var o;
      for(var i=0; i<crystalnames.length;i++){
        if(crystalnames[i]!==""){
          o = crystalnames[i];
          crystalnames[i]="";
          crystalnames[getdata]=o;
          var t = 4*i;
          var t2 = t+1;
          var t3 = t2+1;
          var t4 = t3+1;
          var ta = 4*getdata;
          var ta2 = ta+1;
          var ta3 = ta2+1;
          var ta4 = ta3+1;
          var set1 = crystaldata[t];
          var set2 = crystaldata[t2];
          var set3 = crystaldata[t3];
          var set4 = crystaldata[t4];
          crystaldata[t]=0;
          crystaldata[t2]=0;
          crystaldata[t3]=0;
          crystaldata[t4]=0;
          crystaldata[ta]=set1;
          crystaldata[ta2]=set2;
          crystaldata[ta3]=set3;
          crystaldata[ta4]=set4;
          getdata++;
          User.Ary_Crystalnames = crystalnames.join(Gamedata.key);
          User.Ary_Crystaldata = crystaldata.join(Gamedata.key);
        }
      }
    for(var x =0;x<crystalnames.length;x++){
        if(crystalnames[x]!=""){
            var list = 1+x;
           var a=x*4;var b=a+1;var c=b+1;var d =c+1;
            var addtxt = "";
            var gettype =crystaldata[d].toString().charAt(1);
            var gettype2 =crystaldata[d].toString().charAt(2);
            var gettype3 =crystaldata[d].toString().charAt(3);
            var gemdis=crystaldata[a];
            var gemdis2=crystaldata[b];
            var gemdis3=crystaldata[c];
            if(gemdis<1)gemdis=Math.round(gemdis*100);
            if(gemdis2<1)gemdis2=Math.round(gemdis2*100);
            if(gemdis3<1)gemdis3=Math.round(gemdis3*100);
           addtxt=Gamedata.sys_crystal_getype[gettype]+": "+gemdis;
           if(crystaldata[b])addtxt+="\n"+Gamedata.sys_crystal_getype[gettype2]+": "+gemdis2;
           if(crystaldata[c])addtxt+="\n"+Gamedata.sys_crystal_getype[gettype3]+": "+gemdis3;
           crystalembed.addField(list+" "+crystalnames[x],addtxt);
           amount++;
        }
    }
}
else{crystalembed.setDescription(":x: You do not have any Crystals.");}
crystalembed.addField(amount+"/10","To change crystals command: -crystal <number> to <crystal slot number>");
if(profilenames[10]||profilenames[11]||profilenames[12]){
  var w=335;var h=300; var a =21;
  registerFont( './data/fonts/Karla-Bold.ttf', { family: "Karla-Bold" } );
const canvas = createCanvas(w,h);
      const ctx = canvas.getContext("2d");
     const background = await loadImage(Gamedata.sys_socket_stat);
      ctx.drawImage(background,0,0, canvas.width, canvas.height);
      ctx.beginPath();var gem1;var gem2;var gem3;
      if(profilenames[10].includes("Crystal")||profilenames[10].includes("Gem")){
        var d = (0*4)+24;
        var gettype =profiledata[d].toString().charAt(0);
        var gettype1 =profiledata[d].toString().charAt(1);
        var gettype2 =profiledata[d].toString().charAt(2);
        var gettype3 =profiledata[d].toString().charAt(3);
          if(gettype==2){
            if(gettype1==0)gem1 = await loadImage(Gamedata.sys_crystal_red);
           else if(gettype1==1)gem1 = await loadImage(Gamedata.sys_crystal_blue);
            else if(gettype1==2)gem1 = await loadImage(Gamedata.sys_crystal_orange);
          }
          else{
          if(Gamedata.sys_gem_names==profilenames[10])gem1 = await loadImage(Gamedata.sys_gem_grey);
          else if(gettype1==0)gem1 = await loadImage(Gamedata.sys_gem_red);
          else if(gettype1==1)gem1 = await loadImage(Gamedata.sys_gem_blue);
          else if(gettype1==2)gem1 = await loadImage(Gamedata.sys_gem_orange);
          else if(gettype1==3)gem1 = await loadImage(Gamedata.sys_gem_yellow);
          else if(gettype1==4)gem1 = await loadImage(Gamedata.sys_gem_aqua);
          else if(gettype1==5)gem1 = await loadImage(Gamedata.sys_gem_purple);
          }
         ctx.drawImage(gem1,-17,68,140,136);
         ctx.font="15px Karla-Bold";
         ctx.fillStyle="#ffffff";
         ctx.fillText(profilenames[10],22,205);
         ctx.font="15px Karla-Bold";
         ctx.fillStyle="#ffffff";
         var gemdis=profiledata[a+(0*4)];
         var gemdis2=profiledata[a+(0*4)];
         var gemdis3=profiledata[a+(0*4)];
         if(gemdis<1)gemdis=gemdis*100;
         if(gemdis2<1)gemdis2=gemdis2*100;
         if(gemdis3<1)gemdis3=gemdis3*100;
         var addtxt =" +"+gemdis+" "+Gamedata.sys_crystal_getype[gettype1];
         if(profiledata[a+1]) addtxt+="\n +"+gemdis2+" "+Gamedata.sys_crystal_getype[gettype2];
         if(profiledata[a+2]) addtxt+="\n +"+gemdis3+" "+Gamedata.sys_crystal_getype[gettype3];
         ctx.fillText(addtxt,25,230);
      }
      if(profilenames[11].includes("Crystal")||profilenames[11].includes("Gem")){
        var d = (1*4)+24;
        var gettype =profiledata[d].toString().charAt(0);
        var gettype1 =profiledata[d].toString().charAt(1);
        var gettype2 =profiledata[d].toString().charAt(2);
        var gettype3 =profiledata[d].toString().charAt(3);
          if(gettype==2){
            if(gettype1==0)gem2 = await loadImage(Gamedata.sys_crystal_red);
           else if(gettype1==1)gem2 = await loadImage(Gamedata.sys_crystal_blue);
            else if(gettype1==2)gem2 = await loadImage(Gamedata.sys_crystal_orange);
          }
          else{
          if(Gamedata.sys_gem_names==profilenames[11])gem1 = await loadImage(Gamedata.sys_gem_grey);
          else if(gettype1==0)gem2 = await loadImage(Gamedata.sys_gem_red);
          else if(gettype1==1)gem2 = await loadImage(Gamedata.sys_gem_blue);
          else if(gettype1==2)gem2 = await loadImage(Gamedata.sys_gem_orange);
          else if(gettype1==3)gem2 = await loadImage(Gamedata.sys_gem_yellow);
          else if(gettype1==4)gem2 = await loadImage(Gamedata.sys_gem_aqua);
          else if(gettype1==5)gem2 = await loadImage(Gamedata.sys_gem_purple);
          }
         ctx.drawImage(gem2,58,-60,235,232);
         ctx.font="15px Karla-Bold";
         ctx.fillStyle="#ffffff";
         ctx.fillText(profilenames[11],118,130);
         ctx.font="15px Karla-Bold";
         ctx.fillStyle="#ffffff";
         var gemdis=profiledata[a+(1*4)];
         var gemdis2=profiledata[a+(1*4)];
         var gemdis3=profiledata[a+(1*4)];
         if(gemdis<1)gemdis=gemdis*100;
         if(gemdis2<1)gemdis2=gemdis2*100;
         if(gemdis3<1)gemdis3=gemdis3*100;
         var addtxt =" +"+gemdis+" "+Gamedata.sys_crystal_getype[gettype1];
         if(profiledata[a+1]) addtxt+="\n +"+gemdis2+" "+Gamedata.sys_crystal_getype[gettype2];
         if(profiledata[a+2]) addtxt+="\n +"+gemdis3+" "+Gamedata.sys_crystal_getype[gettype3];
         ctx.fillText(addtxt,138,160);
      }
      if(profilenames[12].includes("Crystal")||profilenames[12].includes("Gem")){
        var d = (2*4)+24;
        var gettype =profiledata[d].toString().charAt(0);
        var gettype1 =profiledata[d].toString().charAt(1);
        var gettype2 =profiledata[d].toString().charAt(2);
        var gettype3 =profiledata[d].toString().charAt(3);
          if(gettype==2){
            if(gettype1==0)gem3 = await loadImage(Gamedata.sys_crystal_red);
           else if(gettype1==1)gem3 = await loadImage(Gamedata.sys_crystal_blue);
            else if(gettype1==2)gem3 = await loadImage(Gamedata.sys_crystal_orange);
          }
          else{
          if(Gamedata.sys_gem_names==profilenames[12])gem1 = await loadImage(Gamedata.sys_gem_grey);
          else if(gettype1==0)gem3 = await loadImage(Gamedata.sys_gem_red);
          else if(gettype1==1)gem3 = await loadImage(Gamedata.sys_gem_blue);
          else if(gettype1==2)gem3 = await loadImage(Gamedata.sys_gem_orange);
          else if(gettype1==3)gem3 = await loadImage(Gamedata.sys_gem_yellow);
          else if(gettype1==4)gem3 = await loadImage(Gamedata.sys_gem_aqua);
          else if(gettype1==5)gem3 = await loadImage(Gamedata.sys_gem_purple);
          }
         ctx.drawImage(gem3,220,68,135,135);
         ctx.font="15px Karla-Bold";
         ctx.fillStyle="#ffffff";
         ctx.fillText(profilenames[12],230,205);
         ctx.font="15px Karla-Bold";
         ctx.fillStyle="#ffffff";
         var gemdis=profiledata[a+(2*4)];
         var gemdis2=profiledata[a+(2*4)];
         var gemdis3=profiledata[a+(2*4)];
         if(gemdis<1)gemdis=gemdis*100;
         if(gemdis2<1)gemdis2=gemdis2*100;
         if(gemdis3<1)gemdis3=gemdis3*100;
         var addtxt =" +"+gemdis+" "+Gamedata.sys_crystal_getype[gettype1];
         if(profiledata[a+1]) addtxt+="\n +"+gemdis2+" "+Gamedata.sys_crystal_getype[gettype2];
         if(profiledata[a+2]) addtxt+="\n +"+gemdis3+" "+Gamedata.sys_crystal_getype[gettype3];
         ctx.fillText(addtxt,255,230);
      }
      ctx.closePath;
      ctx.clip();
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(),"png.png");
      crystalembed.attachFiles(attachment);
    crystalembed.setImage("attachment://png.png");}
    else crystalembed.setImage(Gamedata.sys_socket_none);
}
else if(!arg.includes("yes")){
    var newarg = arg.split("to");
  var newarg0 = Number(newarg[0].trim()); var newarg1 = Number(newarg[1].trim());
    if(isNaN(newarg0)||newarg0<1||newarg0>10) return message.channel.send(crystalembed.setDescription(`incorrect number\n -crystal change "A Number from the list(1-10)" to "crystal slot(1-3)" `));
   else if(isNaN(newarg1)||newarg1<1||newarg1>3) return message.channel.send(crystalembed.setDescription(`incorrect number\n -crystal change "A Number from the list(1-10)" to "crystal slot(1-3)" `));
   newarg0--; newarg1--;
   if(crystalnames[newarg0].includes("Gem")&newarg1==1) return message.channel.send(crystalembed.setDescription(":x: You cannot bound a Gem to a Crystal slot\ntry `1` or `3`"));
   else if(crystalnames[newarg0].includes("Crystal")&newarg1!=1) return message.channel.send(crystalembed.setDescription(":x: You cannot bound a Crystal to a gem slot\ntry `2`"));
   if(crystalnames[newarg0]!=""){
       if(profilenames[newarg1+10]==""){
        var a=newarg0*4;var b=a+1;var c=b+1;var d =c+1;
        var ap=(newarg1*4)+21;var bp=ap+1;var cp=bp+1;var dp =cp+1;
          profilenames[newarg1+10] = crystalnames[newarg0];
          var tem = crystalnames[newarg0];
          crystalnames[newarg0] ="";
          profiledata[ap] = crystaldata[a];
          crystaldata[a]=0;

          if(crystalnames[newarg0]==Gamedata.sys_gem_names[6]){
            profiledata[bp] = crystaldata[b];
            profiledata[cp] = crystaldata[c];
            crystaldata[b]=0;
            crystaldata[c]=0;
          }
          profiledata[dp] = crystaldata[d];
          crystaldata[d]=0;
          User.Ary_HH3ProfileNames = profilenames.join(Gamedata.key);
          User.Ary_HH3ProfileData = profiledata.join(Gamedata.key);
          User.Ary_Crystalnames = crystalnames.join(Gamedata.key);
          User.Ary_Crystaldata = crystaldata.join(Gamedata.key);
          crystalembed.setDescription("slot `"+(newarg1+1)+"` now bound to `"+tem+"`!");
       }
       else{
        temdatanumbers[0] = newarg0; temdatanumbers[1] = newarg1; temdatanumbers[3]=1; User.TemdataNumbers = temdatanumbers.join("<:>");
        hh3funset1[6]=5; User.Ary_HH3FunctionSet1 = hh3funset1.join(Gamedata.key);
           crystalembed.setDescription(":warning: You have a crystal/gem in that slot!\n`Changing this item will only replace it and won't recover`");
           crystalembed.setFooter("To confirm: -crystal yes");
       }
   }
   else crystalembed.setDescription(":x: That item does not exist.")
} else if(arg.includes("yes")&temdatanumbers[3]==1&hh3funset1[6]==5){
    var a=temdatanumbers[0]*4;var b=a+1;var c=b+1;var d =c+1;
    var ap=(temdatanumbers[1]*4)+21;var bp=ap+1;var cp=bp+1;var dp =cp+1;
        if(crystalnames[temdatanumbers[0]].includes("Gem"));
          profilenames[temdatanumbers[1]+10] = crystalnames[temdatanumbers[0]];
         var tem = crystalnames[temdatanumbers[0]];
         crystalnames[temdatanumbers[0]] ="";
          profiledata[ap] = crystaldata[a];
          crystaldata[a]=0;

          if(crystalnames[newarg0]==Gamedata.sys_gem_names[6]){
            profiledata[bp] = crystaldata[b];
            profiledata[cp] = crystaldata[c];
            crystaldata[b]=0;
            crystaldata[c]=0;
          }
          profiledata[dp] = crystaldata[d];
          crystaldata[d]=0;
          User.Ary_HH3ProfileNames = profilenames.join(Gamedata.key);
          User.Ary_HH3ProfileData = profiledata.join(Gamedata.key);
          User.Ary_Crystalnames = crystalnames.join(Gamedata.key);
          User.Ary_Crystaldata = crystaldata.join(Gamedata.key);
          crystalembed.setDescription("You are now bound to `"+tem+"`!");
} else return message.channel.send(crystalembed.setTitle("").setDescription(":x: that action does not exist anymore."))
}else crystalembed.setDescription(":x: You are in a battle.")
         message.channel.send( crystalembed );
}
module.exports.key = {
    name: "crystal",
    description: "choose which crystals and gems to be bound to."
}