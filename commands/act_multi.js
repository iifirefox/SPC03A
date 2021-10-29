const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
const Account = require("../data/tree");
module.exports.run = async (message, arg, User) => {
    const heroembed = new Discord.MessageEmbed();
    const monstercheatembed = new Discord.MessageEmbed();
    const monstereffectembed = new Discord.MessageEmbed();
    const heroeffectembed = new Discord.MessageEmbed();
    const warnembed = new Discord.MessageEmbed();
    const warnembed2 = new Discord.MessageEmbed();
    const extraembed = new Discord.MessageEmbed();
    const herodefeatembed = new Discord.MessageEmbed();
    const herodefeatembedII = new Discord.MessageEmbed();
    const monsterdefeatembed = new Discord.MessageEmbed();
    heroembed.setColor(User.colortheme);
    monstercheatembed.setColor("#FF0000");
    monsterdefeatembed.setColor("#FF0000");
    warnembed.setColor("#FFFE00");
    warnembed2.setColor("#FFFE00");
    if(User.CombatMode==2){
    Account.findOne({
        id: User.multid
    },async(err,UserII)=>{
      if(err)console.log(err);
      if(!UserII)return message.channel.send(":x: Error: No Party found.");
      Account.findOne({
        id: User.id
    },async(err,User)=>{
      if(err)console.log(err);
      if(!User)return message.channel.send(":x: Error: No user found.");
      herodefeatembed.setColor(User.colortheme);
      herodefeatembedII.setColor(UserII.colortheme);
    var temdatanames = User.TemdataNames.split("<:>");
    var temdatanamesA = UserII.TemdataNames.split("<:>");
    var profilenames = User.Ary_HH3ProfileNames.split("<:>");
    var profilenamesA = User.Ary_HH3ProfileNames.split("<:>");
    var equipnames = User.Ary_Equipmentnames.split("<:>");
    var equipnamesA = UserII.Ary_Equipmentnames.split("<:>");
    var itembagnames = User.Ary_itembagnames.split("<:>");
    var itembagnamesA = UserII.Ary_itembagnames.split("<:>");
    var Imgset = User.Ary_Imgset.split("<:>");
    var ImgsetA = UserII.Ary_Imgset.split("<:>");
    var skillset = User.Ary_skills.split("<:>");
    var skillslearned = User.skillslearned.split("<:>");
    var skillslearnedA = UserII.skillslearned.split("<:>");
    var crystalnames = User.Ary_Crystalnames.split("<:>");
    var crystalnamesA = UserII.Ary_Crystalnames.split("<:>");
    var rawskillsetdata = User.Ary_skillsdata.split("<:>");var skillsetdata = [];
    for(var index=0; index<rawskillsetdata.length;index++){
        skillsetdata[index]= Number(rawskillsetdata[index])};
    var rawtemdatanumbers= User.TemdataNumbers.split("<:>");var temdatanumbers = [];
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index])
      }
      var rawtemdatanumbersA= UserII.TemdataNumbers.split("<:>");var temdatanumbersA = [];
      for(var index=0; index<rawtemdatanumbersA.length;index++){
        temdatanumbersA[index]= Number(rawtemdatanumbersA[index])
      }
      var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index]);
    }
    var rawprofiledataA = UserII.Ary_HH3ProfileData.split("<:>");var profiledataA = [];
    for(var index=0; index<rawprofiledataA.length;index++){
        profiledataA[index]= Number(rawprofiledataA[index]);
    }
    var rawequipmentdata = User.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
    for(var index=0; index<rawequipmentdata.length;index++){
        equipmentdata[index]= Number(rawequipmentdata[index]);
    }
    var rawequipmentdataA = UserII.Ary_Equipmentdata.split("<:>");var equipmentdataA = [];
    for(var index=0; index<rawequipmentdataA.length;index++){
        equipmentdataA[index]= Number(rawequipmentdataA[index]);
    }
    var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index]);
    }
    var rawitembagdataA = UserII.Ary_itembagdata.split("<:>");var itembagdataA = [];
    for(var index=0; index<rawitembagdataA.length;index++){
        itembagdataA[index]= Number(rawitembagdataA[index]);
    }
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index]);
      }
      var rawhh3funset1A = UserII.Ary_HH3FunctionSet1.split("<:>");var hh3funset1A = [];
      for(var index=0; index<rawhh3funset1A.length;index++){
          hh3funset1A[index]= Number(rawhh3funset1A[index]);
      }
      var rawdata = User.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index]);
    }
    var rawdataA = UserII.Metadata.split("<:>");var mdataA = [];
    for(var index=0; index<rawdataA.length;index++){
        mdataA[index]= Number(rawdataA[index]);
    }
    var rawcrystaldata = User.Ary_Crystaldata.split("<:>");var crystaldata = [];
    for(var index=0; index<rawcrystaldata.length;index++){
        crystaldata[index]= Number(rawcrystaldata[index]);
    }
    var rawcrystaldataA = UserII.Ary_Crystaldata.split("<:>");var crystaldataA = [];
    for(var index=0; index<rawcrystaldataA.length;index++){
        crystaldataA[index]= Number(rawcrystaldataA[index]);
    }
    function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    function RandomMinMax(min,max) {
        return Math.floor(Math.random() * (max+1 - min)) + min;
      }
      function IgnoringCase(text, other) {
        return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
    }
    function arrayRemove(arr, value)
    { 
    return arr.filter(function(ele){return ele != value;});
    }
    heroembed.setColor(User.colortheme);
    herodefeatembed.setColor(User.colortheme);
    herodefeatembedII.setColor(UserII.colortheme);
    monstercheatembed.setColor("#FF0000");
    monsterdefeatembed.setColor("#FF0000");
    warnembed2.setColor("#FFFE00");
    // the command must be in lowercase
    arg = arg.toLowerCase();
    // values set
    var herospd=profiledata[12];
    var foespd=temdatanumbers[6];
    var herospkey=0;
    var foespdkey=0;
    var foephyatk;
    var heroatkcrit=[];
    var foeatkcrit;
    var herocritrate;
    var heroacy;
    var atkloop;
    var heroatk=[];
    var hand;
    var attack=0;
    var herotxt;
    var herotxteft="";
    var foetxt="";
    var foeattack;
    var defendload=0;
    var potioneffect=0;
    var potionkey=0;
    var runkey=0;
    var runkey2=0;
    var foecheatxt;
    var foeffect;
    var defeffected=0;;
    var newfix = temdatanumbers[1]*0.50;
    var temkey =0;
    var skillname="";
    var skillkey = false;
    var skillspecial = false;
    var foeatkey = true;
    var foeatk = true;
    var itemdropnames = [];
    var itemdropnums = [];
    var itemdropnamesII = [];
    var itemdropnumsII = [];
    var exp;
    var currency;
    var effects = "";
    var skilldmg = false;
    var foemaxdmg=0;
    var displayskill=false;
    var foeskillkey=true;
    var alla = false;
    var foespdII = temdatanumbers[38];
    var foespdkeyII =0;
    var foeatkeyII = true;
    var foeatkcritII;
    var foephyatkII;
    var foeattackII;
    var foetxtII="";
    var herospdII = temdatanumbers[45];
    var herospkeyII=0;
    var defeatxt="";
    var defeatimg="";
    var extraembedkey=false;
    var foeskillspecial = false;
    // add monster effect
    if(temdatanumbers[10]>0.0){
        var monstercheatype = Number(temdatanumbers[10].toString().substring(2));
        var monstereffectype = Number(temdatanumbers[10].toString().charAt(0));
            if(profiledata[15]==-1){
            herospd-=0.20;
            profiledata[15]=0;
            }
    }
    // speed for monsters (only the fastest hero sets this)
    if(hh3funset1[11]==2&temdatanumbers[46]==temdatanumbers[47]){
        for(var sp = 0; sp<6;sp++){
            if(temdatanumbers[0]>0){
            if(Math.random()<foespd){
                if(sp>=5){
                    foespdkey+=3;
                }
                else{
                    foespdkey+=sp;
                }
            }}
            if(temdatanumbers[33]>0){
            if(Math.random()<foespdII){
                if(sp>=5){
                    foespdkeyII+=3;
                }
                else{
                    foespdkeyII+=sp;
                }
            }}
        }
        if(foespdkey==foespdkeyII){
            var picked = RandomMinMax(1,2);
            if(picked==1){foespdkey++}
           else if(picked==2){foespdkeyII++};
        }
        if(foespdkey==herospkey){
            var picked = RandomMinMax(1,2);
            if(picked==1){foespdkey++}
           else if(picked==2){herospkey++};
        }
        if(foespdkeyII==herospkey&temdatanumbers[33]>0){
            var picked = RandomMinMax(1,2);
            if(picked==1){foespdkeyII++}
           else if(picked==2){herospkey++};
        }
       temdatanumbers[50]=foespdkey;
       if(temdatanumbers[33]>0) temdatanumbers[51]=foespdkeyII
    }else if(hh3funset1[11]==2&&temdatanumbers[46]!=temdatanumbers[47]){
       if(temdatanumbers[52]!=1) foespdkey=temdatanumbers[50];
        if(temdatanumbers[33]>0&temdatanumbers[53]) foespdkeyII=temdatanumbers[51];
        if(foespdkey==foespdkeyII){
            var picked = RandomMinMax(1,2);
            if(picked==1){foespdkey++}
           else if(picked==2){foespdkeyII++};
        }
        if(foespdkey==herospkey){
            var picked = RandomMinMax(1,2);
            if(picked==1){foespdkey++}
           else if(picked==2){herospkey++};
        }
        if(foespdkeyII==herospkey&temdatanumbers[33]>0){
            var picked = RandomMinMax(1,2);
            if(picked==1){foespdkeyII++}
           else if(picked==2){herospkey++};
        }
    }
    if(Math.random()<temdatanumbers[8]){
        if(temdatanames[6]!=""&temdatanames[6]!=undefined){
            var skillindex = Gamedata.sys_heronoskills.indexOf(theskill)*5;
            var foeskillvalue =Gamedata.sys_heroskill_numbers[skillindex+4];
           if(temdatanumbers[23]) skilldmg=true;
            displayskill=true; foeskillspecial=true;
        }
        if(foeatk==true){
        if(Math.random()<temdatanumbers[7]){
            // critical attack
            var critper = temdatanumbers[2]*Gamedata.sys_combat_rates[0];
           var crit = temdatanumbers[2]+critper;
            crit = Math.round(crit);
            foephyatk = crit;
            foeatkcrit=2;
        }
        else{
            // attack
            foephyatk = temdatanumbers[2];
            foeatkcrit =1;
        }
        var addmgper = temdatanumbers[3]*foephyatk;
        var addmg = foephyatk+=addmgper;
        foephyatk = Math.round(addmg);
        foemaxdmg = foephyatk;
        var o = foephyatk/2;
        var oa = 52 - o; o = oa/100;
        oa = o * foephyatk; o = foephyatk-oa;
        var tem = Math.round(o);
        foephyatk = RandomMinMax(tem,foephyatk);
        if(skilldmg==true){
            var newdmge = Math.round(foeskillvalue/5);
            var newdmgemax = newdmge+foemaxdmg;
            foephyatk = RandomMinMax(newdmge,newdmgemax);
        }
    }}
        else{
            foeatkcrit=0;
            foephyatk=0;
        }
        if(hh3funset1[11]==2&temdatanumbers[52]==1)foeskillkey=false;
        if(temdatanames[5]=="true")temdatanames[5]="false";
        if(temdatanumbers[27]==1)foeskillkey=false;
        if(temdatanumbers[9]>19&foeskillkey==true){
            var skillrate=0;
            var setr = Number(temdatanumbers[9].toString().charAt(2))
            if(temdatanumbers[9]>29)skillrate= Gamedata.sys_monsterbosskill_rate[setr];
            if(Math.random()<skillrate){
                var getskill = [];
                var theskill="";
                for(var skillsetm=0;skillsetm<4;skillsetm++){
                    var set=skillsetm+1;
                    if(temdatanames[set]!=""){
                        getskill[skillsetm]= temdatanames[set];
                    }else break;
                }
                theskill= getskill[RandomMax(getskill.length)];
                var skillindex = Gamedata.sys_heronoskills.indexOf(theskill)*5;skillindex = Gamedata.sys_heroskill_numbers[skillindex]
                if(skillindex ==1){
            effects= "[Warning] "+temdatanames[0]+" is preparing to use "+theskill+"\nuse defend, dont use skills, quickly avoid it!";}
            temdatanames[6] = theskill;
        }
        }
        if(temdatanumbers[28]>0){temdatanames[28]--;if(temdatanumbers[28]<1&temdatanumbers[27]>0)temdatanumbers[27]=0;}
        // Monster 2 AI
        if(hh3funset1[11]==2&temdatanumbers[53]<1&temdatanumbers[32]>0){
            if(Math.random()<temdatanumbers[40]){
                if(Math.random()<temdatanumbers[39]){
                    var critperII = temdatanumbers[34]*Gamedata.sys_combat_rates[0];
                    var critII = Math.round(temdatanumbers[2]+critperII);
                    foephyatkII = critII;
                    foeatkcritII=2;
                }
                else{
                    foephyatkII = temdatanumbers[34];
                    foeatkcritII =1;
                }
                var addmgperII = temdatanumbers[35]*foephyatkII;
                foephyatkII = Math.round(foephyatkII+addmgperII);
                foemaxdmg = foephyatkII;
                var o = foephyatkII/2;
                var oa = 52 - o; o = oa/100;
                oa = o * foephyatkII; o = Math.round(foephyatkII-oa);
                foephyatkII = RandomMinMax(o,foephyatkII);
        }
        else{foephyatkII=0;foeattackII=0;}
    }
    // hero's turn
    if(profiledata[15]!=2&temdatanumbers[54]==temdatanumbers[46]&User.HP>0){
        if(arg.includes("skill")||skillset.some(a=>IgnoringCase(a,arg))&!arg.includes("potion")){
            if(arg.includes("skill")){var setcheck =arg.split("skill");var num6 =Number(setcheck[1])-1;
            if(skillset[num6]=="empty"||num6>3||num6<0) return message.channel.send(warnembed.setDescription(":x: This skill slot is empty or does not exist."));
            if(isNaN(num6)){var skillnameindex = skillset.find(a=>IgnoringCase(a,num6));num6 = skillset.indexOf(skillnameindex);}
        }
            else if(skillset.some(a=>IgnoringCase(a,arg))){
                var skillnameindex = skillset.find(a=>IgnoringCase(a,arg))
                var num6 = skillset.indexOf(skillnameindex);}
            else return message.channel.send(warnembed.setDescription(":x: This skill slot is empty or does not exist."));
            var dtable1 = 5*num6;
                var dtable2 = dtable1+1;
                var dtable3 = dtable1+2;
                var dtable4 = dtable1+3;
                var dtable5 = dtable1+4;
                if(User.Skillenergy<skillsetdata[dtable3])return message.channel.send(warnembed.setDescription(":x: Not enough skill energy."));
                var wepcheck = false; if(profiledata[3]==1||profiledata[3]==3)wepcheck=true;
                if(profiledata[3]==skillsetdata[dtable2]||skillsetdata[dtable2]==0||skillsetdata[dtable2]==4&wepcheck==true){
                    if(skillsetdata[dtable1]==1){ skillkey=true;skillspecial = true;}
                    if(skillsetdata[dtable1]==3) skillspecial = true;
                    skillname = skillset[num6];
                }
                else return message.channel.send(warnembed.setDescription(":x: You do not have the weapon requird to use this"));
                herotxt="";
        }
    if(arg=="attack"&!arg.includes("potion")||skillkey==true&!arg.includes("potion")&skillsetdata[dtable1]==1){
        //attack the monster
        if(profiledata[3]==1){
        herocritrate= Gamedata.sys_combat_rates[1]+temdatanumbers[22]+profiledata[18];
        heroacy = Gamedata.sys_combat_rates[4]+profiledata[13];
        atkloop=1;
        }
       else if(profiledata[3]==2){
            herocritrate= Gamedata.sys_combat_rates[2]+temdatanumbers[22]+profiledata[18];
            heroacy = Gamedata.sys_combat_rates[5]+profiledata[13];
            atkloop=1;
            }
       else if(profiledata[3]==3){
             herocritrate= Gamedata.sys_combat_rates[3]+temdatanumbers[22]+profiledata[18];
             heroacy = Gamedata.sys_combat_rates[6]+profiledata[13];
             atkloop=1;
             if(arg.includes("attack")){
                var addmoreatk = profiledata[12]*0.20;
                addmoreatk= profiledata[12]- addmoreatk;
                if(Math.random()<addmoreatk){
                    atkloop++
                }
                if(Math.random()<addmoreatk){
                   atkloop++
               }
            }
            else if(arg.includes("all")&skillkey==true){atkloop=3};
            }else{
                herocritrate=Gamedata.sys_combat_rates[7]+temdatanumbers[22]+profiledata[18];
                heroacy = Gamedata.sys_combat_rates[8];
                hand = Gamedata.sys_hero_hand;
                atkloop=1;
            }
            if(temdatanumbers[18]>0){
                herocritrate+= Gamedata.sys_potion_effect[2];
                if(temdatanumbers[18]==0){
                    extraembed.setColor("#FFFE00");
                    extraembed.addField(":clock1:","Critical potion effects has run out");
                    extraembedkey=true;
                }
            }
            if(profilenames[5]==Gamedata.sys_chest_mysterychest[5])herocritrate+=0.60;
            else if(profilenames[5]==Gamedata.sys_chest_mysterychest[9])herocritrate-=0.50;
            heroacy-=temdatanumbers[21];
            for(var a=0;a<atkloop;a++){
                if(Math.random()>heroacy){
                    heroatk[a]=0;
                    heroatkcrit[a]=0;
                }
                else if(Math.random()<herocritrate){
                    if(profiledata[3]>0&profiledata[3]<4){
                        heroatk[a] = profiledata[4]*Gamedata.sys_combat_rates[0];
                        heroatk[a] = profiledata[4]+heroatk[a];
                        heroatk[a] = Math.round(heroatk[a]);
                        heroatkcrit[a]=2;
                    }
                    else{
                        heroatk[a] = hand*Gamedata.sys_combat_rates[0];
                        heroatk[a] = hand+heroatk[a];
                        heroatk[a] = Math.round(heroatk[a]);
                        heroatkcrit[a]=2;
                    }
                }
                else{
                    if(profiledata[3]>0& profiledata[3]<4){
                        heroatk[a] = profiledata[4];
                        heroatkcrit[a]=1;
                    }else{
                        heroatk[a] = hand;
                        heroatkcrit[a]=1;
                    }
                }if(profilenames[5]==Gamedata.sys_chest_mysterychest[4]){heroatk[a]+= Math.round(heroatk[a]*0.25);}
                else if(profilenames[5]==Gamedata.sys_chest_mysterychest[8]){heroatk[a]-= Math.round(heroatk[a]*0.10);}
                var addmg = heroatk[a]*profiledata[5];
                var addmg2 = heroatk[a]*profiledata[19];
               var addmg3 =  heroatk[a]*temdatanumbers[12];
                heroatk[a] = Math.round(heroatk[a]+addmg+addmg2+addmg3)+profiledata[16];
                var o = heroatk[a]/2;
                var oa = 52 - o; o = oa/100;
                oa = o * heroatk[a]; o = heroatk[a]-oa;
                var tem = Math.round(o);
                if(skillkey==true&heroatkcrit[a]>0){
                var rawdmg = tem+skillsetdata[dtable4];
                tem = rawdmg/5;
                tem = Math.round(tem);
                heroatk[a] += tem;
                }
                heroatk[a] = RandomMinMax(tem,heroatk[a]);
            }
            herotxt="";
    }
    else if(arg=="defend"&!arg.includes("potion")){
        //defend from the monster
        var typedef = profiledata[3]-1;
        if(typedef==-1)typedef=2;
            if(herospkey>foespdkey){
            temdatanumbers[17] = Gamedata.sys_combat_def[typedef];
            var tem = temdatanumbers[17]*100;
            tem= Math.round(tem);
            }
            else{
                defendload = Gamedata.sys_combat_def[typedef];
                var tem = defendload*100;
                tem= Math.round(tem);
            }
            herotxt = User.name+" has defend\n:shield: "+tem+"%";
        }
        else if(arg.includes("potion")){
            // potion
            if(arg.includes("hp")||arg=="potion"){
                if(itembagdata[0]>0){
                potioneffect = Gamedata.sys_potion_effect[0];
                itembagdata[0]--;
                var oldhp = User.HP;
                var newhp = User.HP+potioneffect;
                var amount = newhp-oldhp;
                herotxt = User.name+" consumed 1 "+Gamedata.sys_item_names[0]+"\n:heart: recover +"+amount+" HP";}
                else{
                    herotxt = ":x: you do not have enough "+Gamedata.sys_item_names[0];
                }
            }
           else if(arg.includes("fairy")){
                if(itembagdata[1]>0){
                potioneffect = Gamedata.sys_potion_effect[1];
                itembagdata[1]--;
                var oldhp = User.HP;
                var newhp = User.HP+potioneffect;
                var amount = newhp-oldhp;
                herotxt = User.name+" consumed 1 "+Gamedata.sys_item_names[1];}
                else{
                    herotxt = ":x: you do not have enough "+Gamedata.sys_item_names[1]+"\n:heart: recover +"+amount+" HP";
                }
            }
            else if(arg.includes("critical")){
                if(itembagdata[2]>0){
                potionkey=18;
                itembagdata[2]--;
                herotxt = User.name+" consumed 1 "+Gamedata.sys_item_names[2]+"\n:clock1: +3 rounds";
                }
                else{
                    herotxt = ":x: you do not have enough "+Gamedata.sys_item_names[2];
                }
        }
        else if(arg.includes("defense")){
            if(itembagdata[3]>0){
               potionkey=19;
               itembagdata[3]--;
               herotxt = User.name+" consumed 1 "+Gamedata.sys_item_names[3]+"\n:clock1: +3 rounds";
               }
               else{
                   herotxt = ":x: you do not have enough "+Gamedata.sys_item_names[3];
               }
           }
       else if(arg.includes("speed")){
           if(itembagdata[4]>0){
               potionkey=20;
               itembagdata[4]--;
               herotxt = User.name+" consumed 1 "+Gamedata.sys_item_names[4]+"\n:clock1: +3 rounds";
               }
               else{
                   herotxt = ":x: you do not have enough "+Gamedata.sys_item_names[4];
               }
       }
       else if(arg.includes("pure")){
           if(itembagdata[5]>0){
               itembagdata[5]--;
               potioneffect=1;
               herotxt = User.name+" consumed 1 "+Gamedata.sys_item_names[5]+"\nYour status return to normal";
               }
               else{
                   herotxt = ":x: you do not have enough "+Gamedata.sys_item_names[5];
               }
       }
       User.Ary_itembagdata = itembagdata.join("<:>");
    }
        else if(arg=="flee"&!arg.includes("potion")){
            //flee from the monster
            for(var sp=0;sp<=3;sp++){
                if(Math.random()<profiledata[12]){
                    runkey++;
                }
                if(Math.random()<temdatanumbers[6]){
                    runkey2++;
                }
            }
            if(runkey==runkey2){
               var rankey = RandomMinMax(1,2);
               if(rankey==1){runkey++}
               else{runkey2++}
            }
            if(runkey>runkey2){
                var chance = RandomMinMax(6,20);
                herotxt = "Team has fled from monsters\n-**"+chance+"** steps for Party Leader";
            }
            else{
                herotxt = User.name+" **cannot escape**";
            }
        }
        else if(arg=="avoid"&!arg.includes("potion")){
            if(User.Skillenergy>0){
                User.Skillenergy--;
                if(User.Skillenergy>User.Maxskillenergy) User.Skillenergy=User.Maxskillenergy;
                if(herospkey>foespdkey){
                foeatkey = false;
                herotxt="You avoid the attack";
                }
                else{
                    herotxt="Fail to avoid";
                }
            }
            else{
                herotxt=":x: You need more skill energy"
            }
        }}
        else if(temdatanumbers[46]!=temdatanumbers[54]) return message.channel.send(heroembed.setDescription(":x: "+User.name+" cannot move this turn"));
        else if(User.HP<=0) return message.channel.send(heroembed.setDescription("You are defeated."));
        else {temkey = profiledata[15];profiledata[15]=0;herotxt=":zap: You are stunned\ntry act command again."}
        if(arg!=""&herotxt!=undefined){
    if(User.HP>0&temkey!=2){
        if(arg.includes("attack")||skillkey==true&skillsetdata[dtable1]==1){
            for(var atkdex =0; atkdex<heroatk.length;atkdex++){
                if(temdatanumbers[13]==3){
                    defeffected = temdatanumbers[5]*.50;
                    temdatanumbers[5]-=defeffected
                }
                var newatk = temdatanumbers[5]*heroatk[atkdex];
                newatk = heroatk[atkdex]-newatk;
                newatk = Math.round(newatk);
                if(temdatanumbers[24]>0){
               var newatkbuff = temdatanumbers[24]*newatk
                newatk = newatk-=newatkbuff;
                newatk = Math.round(newatk);}
                if(temdatanumbers[11]<0){
                    var newatk3 = temdatanumbers[11]*newatk;
                    newatk = newatk-=newatk3;
                    newatk = Math.round(newatk);
                }
                newatk= newatk-=temdatanumbers[4];
                if(newatk<0)newatk=0;
                if(monstercheatype==9&&herospkey<foespdkey&Math.random()<0.20){ effects="[Warning] Your Attack has fallen into the void\n";newatk=0;}
                if(monstercheatype==11&&heroatkcrit[atkdex]==1){newatk=0;heroatkcrit[atkdex]=0}
                newatk= Math.round(newatk);
                if(alla==true) newatk= Math.round(newatk/2);
                attack+=newatk
                if(attack<0)attack=0;
                if(heroatkcrit[atkdex]==2){
                    herotxteft +="\n**"+newatk+"**:boom: dmg";
                }
                else if(heroatkcrit[atkdex]==1){
                    herotxteft +="\n**"+newatk+"** dmg";
                }
                else if(heroatkcrit[atkdex]==0){
                    herotxteft +="\n**Missed**";
                }
    
            }
            if(arg.includes("attack")&herotxteft.includes(":boom:")){
                herotxt = User.name+" attack with a critical!"+herotxteft
            }
            else if(arg.includes("attack")&skillkey==false){
                herotxt= User.name+" attack"+herotxteft
            }
            else if(skillkey==true){
                if(skillsetdata[dtable1]==1&herotxteft.includes(":boom:")){
                herotxt = User.name+" uses "+skillname+herotxteft;
            }
            else if(skillsetdata[dtable1]==1){
                herotxt = User.name+" uses "+skillname+herotxteft;
            }
            }
        }
    }
    if(temdatanumbers[0]>0){
        var profiledef = profiledata[9];
        var lowdef = profiledef*temdatanumbers[16];
        profiledef = Math.round(profiledef-lowdef);
        if(monstercheatype==7){
            defeffected= profiledata[9]*.30;
            profiledef = profiledef-= defeffected;
        }
        if(profiledata[15]==3){
            defeffected= profiledata[9]*.50;
            profiledef = profiledef-= defeffected;
         }
        if(profiledef<0)profiledef*-1;
        var netatk = foephyatk*temdatanumbers[17];
        netatk = foephyatk-=netatk;
        netatk= Math.round(netatk);
       var netatk2 = profiledef*netatk;
       netatk = netatk-=netatk2;
       netatk=Math.round(netatk-(profiledata[8]+profiledata[17]));
       foeattack = netatk;
       if(foeattack<0)foeattack=0;
       if(temdatanumbers[19]>0){
           temdatanumbers[19]--;
           var admore = Gamedata.sys_potion_effect[2]* foeattack;
           admore = Math.round(foeattack-=admore);
           if(admore<0)admore=0;
           foeattack = admore;
           if(foeattack<0)foeattack=0;
           if(temdatanumbers[19]==0){
            extraembed.setColor("#FFFE00");
            extraembed.addField(":clock1:","Defense potion effects has run out");
            extraembedkey=true;
        }
       }
       if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanames[5])&temdatanumbers[29]>0){
        foeattack = Math.round(foeattack/2);
    }
       var atktype=" attack";
       if(foeatkey==false) foeatkcrit=0;
       if(displayskill==true)atktype=" Uses "+temdatanames[6];
       if(foeatkcrit==2&foeatkey==true){
       foetxt= temdatanames[0]+atktype+">critical!>\n**"+foeattack+"**:boom: dmg";}
       else if(foeatkcrit==1&foeatkey==true){
        foetxt= temdatanames[0]+atktype+"\n**"+foeattack+"** dmg";
       }
       else if(foeatkcrit==0){
        foetxt= temdatanames[0]+atktype+"\nbut **Missed**";
       }
    }
    if(temdatanumbers[52]>0){foetxt="";foeatkey=false;}
    if(temdatanumbers[53]<1&temdatanumbers[32]>0){
        var profiledef = profiledata[9];
        var lowdef = profiledef*temdatanumbers[16];
        profiledef = Math.round(profiledef-lowdef);
        if(monstercheatype==7){
           defeffected= profiledata[9]*.30;
           profiledef = profiledef-= defeffected;
         }
        if(profiledata[15]==3){
           defeffected= profiledata[9]*.50;
           profiledef = profiledef-= defeffected;
         }
        if(profiledef<0)profiledef*-1;
        var netatk = foephyatkII*temdatanumbers[17];
        netatk = Math.round(foephyatkII-=netatk);
       var netatk2 = profiledef*netatk;
       netatk = netatk-=netatk2;
       netatk=Math.round(netatk-(profiledata[8]+profiledata[17]));
       foeattackII = netatk;
       if(foeattackII<0)foeattackII=0;
       if(temdatanumbers[19]>0){
           var admore = Gamedata.sys_potion_effect[2]* foeattackII;
           admore = Math.round(foeattackII-=admore);
           if(admore<0)admore=0;
           foeattackII = admore;
           if(foeattackII<0)foeattackII=0;
       }
       if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanames[5])&temdatanumbers[29]>0){
        foeattackII = Math.round(foeattackII/2);
    }
       if(foeatkcritII==2&foeatkeyII==true){
       foetxtII= temdatanames[7]+">critical!>\n**"+foeattackII+"**:boom: dmg";}
       else if(foeatkcritII==1&foeatkeyII==true){
        foetxtII= temdatanames[7]+"\n**"+foeattackII+"** dmg";
       }
       else {
        foetxtII= temdatanames[7]+"\nbut **Missed**";
       }
    }
    if(skillspecial||foeskillspecial){
        if(skillspecial&skillkey==false)herotxt +=User.name+" uses "+skillname;
        module.exports.skillspecial = skillspecial;
        module.exports.foeskillspecial = foeskillspecial;
        module.exports.skillsetdata = skillsetdata;
        module.exports.HeroHP = User.HP;
        module.exports.HeroMaxHP = User.MaxHP;
        module.exports.username= User.name;
        module.exports.heroatkcrit=heroatkcrit;
        module.exports.heroatkcrit0=heroatkcrit[0];
        module.exports.skillsetdata4 = skillsetdata[dtable4];
        module.exports.skillsetdata5 = skillsetdata[dtable5];
        module.exports.foeatkcrit = foeatkcrit;
        module.exports.herotxt = herotxt;
        module.exports.heroatk = heroatk;
        module.exports.foetxt= foetxt;
        module.exports.foeatk = foeatk;
        module.exports.attack = attack;
        module.exports.foeattack = foeattack;
        module.exports.profilenames= profilenames;
        module.exports.profiledata = profiledata;
        module.exports.hh3funset1 = hh3funset1;
        module.exports.profiledata3 = profiledata[3];
        module.exports.temdatanames = temdatanames;
        module.exports.temdatanumbers=temdatanumbers;
        module.exports.skillset=skillset;
        module.exports.skillsetdata=skillsetdata;
        module.exports.foeatkey = foeatkey;
        module.exports.herospkey = herospkey;
        module.exports.foespdkey = foespdkey;
        module.exports.skillname = skillname;
        module.exports.skilldmg = skilldmg;
        module.exports.skillspecial = skillspecial;
        module.exports.foeatkcrit = foeatkcrit;
    }
    if(skillspecial||foeskillspecial){
        var skillpath =Gamedata.sys_skill_path+skillname;
        var foeskillpath =Gamedata.sys_skill_path+temdatanames[6];
        if(skillspecial) var skilleffects = require(skillpath);
       if(foeskillspecial) var skilleffects = require(foeskillpath);
        if(skilleffects.skillsetdata4){skillsetdata[dtable4] = skilleffects.skillsetdata4;User.Ary_skillsdata = skillsetdata.join("<:>")};
        if(skilleffects.skillsetdata5){skillsetdata[dtable5] = skilleffects.skillsetdata5;User.Ary_skillsdata = skillsetdata.join("<:>")};
        if(skilleffects.foetxt) foetxt = skilleffects.foetxt;
        if(skilleffects.foeatkey) foeatkey = skilleffects.foeatkey;
        if(skilleffects.temdatanames) temdatanames = skilleffects.temdatanames;
        if(skilleffects.temdatanumbers) temdatanumbers = skilleffects.temdatanumbers;
        if(skilleffects.herotxt) herotxt = skilleffects.herotxt;
        if(skilleffects.foeatkcrit) foeatkcrit = skilleffects.foeatkcrit;
        if(skilleffects.foeattack) foeattack = skilleffects.foeattack;
        if(skilleffects.attack) attack = skilleffects.attack;
        if(skilleffects.herospkey) herospkey = skilleffects.herospkey;
        if(skilleffects.foespkey) foespdkey = skilleffects.foespkey;
        if(skilleffects.HeroHP) User.HP = skilleffects.HeroHP;
        if(skilleffects.healback) healback = skilleffects.healback;
        if(skilleffects.hh3funset1) hh3funset1 = skilleffects.hh3funset1;
        if(skilleffects.summonpic) Imgset[3]=skilleffects.summonpic; 
    }
    // who goes first hero or the monster?
    if(hh3funset1[11]==2){
        var foetxtA;
        var multia=false;
        if(herospkey==foespdkey){var ap = RandomMinMax(1,2);if(ap==1)herospkey+=RandomMinMax(1,6);else foespdkey+=RandomMinMax(1,6)};
        if(herospkey==foespdkeyII){var ap = RandomMinMax(1,2);if(ap==1)herospkey+=RandomMinMax(1,6);else foespdkeyII+=RandomMinMax(1,6)};
         if(herospkey<foespdkey & temdatanumbers[52]!=1||herospkey<foespdkeyII & temdatanumbers[53]!=1&temdatanumbers[32]>0){if(temdatanumbers[33]>0){
             if(temdatanumbers[52]==1 & temdatanumbers[53]!=1&temdatanumbers[32]>0){var them=2; temdatanumbers[53]=1;}else if(temdatanumbers[53]==1 & temdatanumbers[52]!=1){var them=1;temdatanumbers[52]=1;}
        else if(herospkey<foespdkey){var them=1; temdatanumbers[52]=1;}else if(herospkey<foespdkeyII&temdatanumbers[32]>0){var them=2; temdatanumbers[53]=1;};} else{var them=1;temdatanumbers[52]=1;};
             if(them==1) var mname=0; else var mname=7;
             if(them==1) var mstat=13; else var mstat =14;
             if(them==1) var m_MaxHP=1; else var m_MaxHP=33;
             if(them==1) var mHP=0; else var mHP=32;
             if(them==1) var matktrue = foeatkey; else var matktrue= foeatkeyII
             if(them==1) var matk = foeattack; else var matk = foeattackII;
             if(them!=1) foetxt = foetxtII;
             if(temdatanumbers[mstat]==1){
                 var foepoisoneffect = temdatanumbers[m_MaxHP]*0.08;// poison
         foepoisoneffect = Math.round(foepoisoneffect);
        temdatanumbers[0]-=foepoisoneffect;
        effects=temdatanames[0]+" is poisoned! "+foepoisoneffect+" dmg";
             }
             else if(temdatanumbers[mstat]==2){
                 monstereffectembed.setColor("#FFFE00");// stun
                 foetxt = temdatanames[mname]+" is stunned!";
                 temdatanumbers[mstat]=0;
                 matktrue = false;
             }
             else if(temdatanumbers[mstat]==4){
                 var foepoisoneffect = temdatanumbers[m_MaxHP]*0.06;// corruption
         foepoisoneffect = Math.round(foepoisoneffect);
         temdatanumbers[mHP]-=foepoisoneffect;
         effects=temdatanames[mname]+" is corrupted! "+foepoisoneffect+" dmg";
             }
             if(matktrue==true){
                 if(temdatanumbers[57]==0&temdatanumbers[58]==0)var mtarget= RandomMinMax(1,2);
                 else if(temdatanumbers[57]!=0) var mtarget = 2;
                 else if(temdatanumbers[58]!=0) var mtarget = 1;
                 if(mtarget==1){
                 User.HP= User.HP-matk;if(User.HP<0) User.HP=0;if(foetxt.includes("Missed"))foetxt+="  "+User.name; else foetxt+=" to "+User.name;}
                 else if(mtarget==2){
                       UserII.HP=UserII.HP-matk;if(UserII.HP<0) UserII.HP=0;
                     if(foetxt.includes("Missed"))foetxt+=" "+UserII.name; else foetxt+=" to "+UserII.name
                 }
                 if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanames[5])&skillname!=Gamedata.sys_heronoskills[19]&temdatanumbers[29]>0){
                     temdatanumbers[29]-=matk;
                     if(temdatanumbers[29]<=0){
                         effects+="\n"+User.name+"'s "+temdatanames[5]+" has been defeated";
                         temdatanames[5]="";temdatanumbers[29]=0;temdatanumbers[30]=0;temdatanumbers[31]=0;Imgset[3]=0;User.Ary_Imgset=Imgset.join("<:>");
                     }
                 }
                 if(mdata[7]<matk){
                     mdata[7]=matk;
                     User.Metadata = mdata.join("<:>");
                 }
             }
             foetxtA = foetxt;
             multia=true;
         }
         if(herospkey<foespdkey & temdatanumbers[52]!=1||herospkey<foespdkeyII & temdatanumbers[53]!=1&temdatanumbers[32]>0){if(temdatanumbers[33]>0){
             if(temdatanumbers[52]==1 & temdatanumbers[53]!=1&temdatanumbers[32]>0){var them=2; temdatanumbers[53]=1;}else if(temdatanumbers[53]==1 & temdatanumbers[52]!=1){var them=1;temdatanumbers[52]=1;}
        else if(herospkey<foespdkey){var them=1; temdatanumbers[52]=1;}else if(herospkey<foespdkeyII&temdatanumbers[32]>0){var them=2; temdatanumbers[53]=1;};} else{var them=1;temdatanumbers[52]=1;};
             if(them==1) var mname=0; else var mname=7;
             if(them==1) var mstat=13; else var mstat =14;
             if(them==1) var m_MaxHP=1; else var m_MaxHP=33;
             if(them==1) var mHP=0; else var mHP=32;
             if(them==1) var matktrue = foeatkey; else var matktrue= foeatkeyII
             if(them==1) var matk = foeattack; else var matk = foeattackII;
             if(them!=1) foetxt = foetxtII;
             if(temdatanumbers[mstat]==1){
                 var foepoisoneffect = temdatanumbers[m_MaxHP]*0.08;// poison
         foepoisoneffect = Math.round(foepoisoneffect);
        temdatanumbers[0]-=foepoisoneffect;
        effects=temdatanames[0]+" is poisoned! "+foepoisoneffect+" dmg";
             }
             else if(temdatanumbers[mstat]==2){
                 monstereffectembed.setColor("#FFFE00");// stun
                 foetxt = temdatanames[mname]+" is stunned!";
                 temdatanumbers[mstat]=0;
                 matktrue = false;
             }
             else if(temdatanumbers[mstat]==4){
                 var foepoisoneffect = temdatanumbers[m_MaxHP]*0.06;// corruption
         foepoisoneffect = Math.round(foepoisoneffect);
         temdatanumbers[mHP]-=foepoisoneffect;
         effects=temdatanames[mname]+" is corrupted! "+foepoisoneffect+" dmg";
             }
             if(matktrue==true){
                 if(temdatanumbers[57]==0&temdatanumbers[58]==0)var mtarget= RandomMinMax(1,2);
                 else if(temdatanumbers[57]!=0) var mtarget = 2;
                 else if(temdatanumbers[58]!=0) var mtarget = 1;
                 if(mtarget==1){
                 User.HP= User.HP-matk;if(User.HP<0) User.HP=0;User.HP=0;if(foetxt.includes("Missed"))foetxt+=" "+User.name; else foetxt+=" to "+User.name;}
                 else if(mtarget==2){
                    UserII.HP=UserII.HP-matk;if(UserII.HP<0) UserII.HP=0;
                    if(!foetxt.includes("Missed"))foetxt+=" to "+UserII.name; else foetxt+=" "+UserII.name;
                 }
                 if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanames[5])&skillname!=Gamedata.sys_heronoskills[19]&temdatanumbers[29]>0){
                     temdatanumbers[29]-=matk;
                     if(temdatanumbers[29]<=0){
                         effects+="\n"+User.name+"'s "+temdatanames[5]+" has been defeated";
                         temdatanames[5]="";temdatanumbers[29]=0;temdatanumbers[30]=0;temdatanumbers[31]=0;Imgset[3]=0;User.Ary_Imgset=Imgset.join("<:>");
                     }
                 }
                 if(mdata[7]<matk){
                     mdata[7]=matk;
                     User.Metadata = mdata.join("<:>");
                 }
             }
             if(multia==true) foetxt = foetxtA+"\n"+foetxt;
         }
         if(User.HP>0){
             // hero turn
             if(temdatanumbers[17]>0)temdatanumbers[17]=0;
             if(skillkey==true||skillname){
                    User.Skillenergy -= skillsetdata[dtable3];
                    if(User.Skillenergy<0)User.Skillenergy=0;
                    if(skillsetdata[dtable1]==1){
                    temdatanumbers[0]-= attack;
                    if(skillname==Gamedata.sys_heronoskills[25]){temdatanumbers[1]-=Math.round(temdatanumbers[1]*0.03)*atkloop;}
                    if(temdatanumbers[33]>0){temdatanumbers[32]-= attack};
                    if(alla==true)temdatanumbers[32]-= attack;
                    if(mdata[6]<attack){
                        mdata[6]=attack;
                        User.Metadata = mdata.join("<:>");
                    }
                    if(skilleffects.trueffect){
                        for(var skilcount = 0;skilcount<heroatkcrit.length;skilcount++){
                            if(heroatkcrit[skilcount]>0){
                                if(skilleffects.trueffect==3&temdatanumbers[13]==0){
                                    if(Math.random()<Gamedata.sys_skill_data2[0]){
                                        //monster defense decreases
                                        temdatanumbers[13]=3;
                                        heroeffectembed.setColor("#FFFE00");
                                        heroeffectembed.setDescription(":shield: "+temdatanames[0]+" defense has decrease!");
                                        heroeftkey = true;
                                    }
                                }
                                else if(skilleffects.trueffect==2&temdatanumbers[13]==0){
                                    if(Math.random()<Gamedata.sys_skill_data2[1]){
                                       // stun
                                       temdatanumbers[13] = 2;
                                       heroeffectembed.setColor("#FFFE00");
                                        heroeffectembed.setDescription(":zap: "+temdatanames[0]+" has been stunned!");
                                        heroeftkey = true;
                                    }
                                }
                                else if(skilleffects.trueffect==4&temdatanumbers[13]==0){
                                    if(Math.random()<Gamedata.sys_skill_data2[3]){
                                        // curruption
                                        temdatanumbers[13] = 4;
                                        temdatanumbers[11]-= 0.05;
                                        heroeffectembed.setColor("#0F0F0F");
                                        heroeffectembed.setDescription(":broken_heart: "+temdatanames[0]+" has been corrupted!");
                                        heroeftkey = true;
                                    }
                                }
                                else if(skilleffects.trueffect==1&temdatanumbers[13]==0){
                                    if(Math.random()<Gamedata.sys_skill_data2[4]){
                                        // poison
                                        temdatanumbers[13] = 1;
                                        heroeffectembed.setColor("#01FF00");
                                        heroeffectembed.setDescription(":green_heart: "+temdatanames[0]+" has been poisoned!");
                                        heroeftkey = true;
                                    }
                                }
                                else if(skillname==Gamedata.sys_heronoskills[14]&profiledata[15]!=0){
                                    //reflection
                                    temdatanumbers[13]=profiledata[15];
                                    if(profiledata[15]==1){heroeffectembed.setColor("#01FF00");
                                    heroeffectembed.setDescription(":green_heart: "+temdatanames[0]+" has been poisoned!");}
                                    else if(profiledata[15]==3){heroeffectembed.setColor("#FFFE00");
                                    heroeffectembed.setDescription(":shield: "+temdatanames[0]+" defense has decreased!");}
                                    else if(profiledata[15]==4){heroeffectembed.setColor("#0F0F0F");temdatanumbers[11]+= 0.05;
                                    heroeffectembed.setDescription(":broken_heart: "+temdatanames[0]+" has been corrupted!");}
                                }
                            }
                        }
                    }
                }var rpath = require.resolve(skillpath);delete require.cache[rpath];
            }
            else if(arg=="attack"){
                     temdatanumbers[0]-= attack;
                     if(skillsetdata[4]==1||skillsetdata[9]==1||skillsetdata[14]==1||skillsetdata[19]==1)
                    {var healback =Math.round(attack*0.35);User.HP+=healback;herotxt+="\n:heart: You heal back +"+healback;};
                     if(temdatanumbers[33]>0){temdatanumbers[32]-= attack};
                     if(alla==true)temdatanumbers[32]-= attack;
                 User.Skillenergy++;
                 if(User.Skillenergy>User.Maxskillenergy){
                     User.Skillenergy=User.Maxskillenergy;
                 }
             }
             else if(arg=="defend"){
             if(defendload>0){
                 temdatanumbers[17]= defendload;
             }
             if(foeatkcrit>0){
                 User.Skillenergy++;
             if(User.Skillenergy>User.Maxskillenergy){
                 User.Skillenergy=User.Maxskillenergy;
             }}
             }
             else if(arg.includes("potion")&potioneffect!=0){
                 if(herotxt.includes("HP")||herotxt.includes("Fairy")){
                     User.HP+= potioneffect;
                     if(User.HP>User.MaxHP){
                         User.HP=User.MaxHP;
                     }
                 }
                 else if(!herotxt.includes("Pure")){
                     temdatanumbers[potionkey]+=3;
                 }
                 else if(potioneffect==1){
                     profiledata[15]=0;
                 }
             }
             else if(arg.includes("flee")&herotxt.includes("fled")){
                 if(temdatanumbers[46]==1){
                 var fixed = 125*User.floor;
                     fixed = fixed-124;
                     User.step-=chance;
                     if(User.step<0){
                         User.step =10;
                     }
                     if(User.floor>3&User.step<fixed){
                         User.floor--;
                     }
                     else if(User.floor==3&User.step<60){
                         User.floor--;
                     }}else{
                        var fixed = 125*UserII.floor;
                        fixed = fixed-124;
                        UserII.step-=chance;
                        if(UserII.step<0){
                            UserII.step =10;
                        }
                        if(UserII.floor>3&UserII.step<fixed){
                            UserII.floor--;
                        }
                        else if(User.floor==3&UserII.step<60){
                            UserII.floor--;};
                     };
                     Imgset[1] = "";
                 User.Ary_Imgset = Imgset.join("<:>");
                 if(hh3funset1[16]>0){hh3funset1[16]=0;User.Ary_HH3FunctionSet1=hh3funset1.join("<:>");};
                 profiledata[15]=0;
                 profiledataA[15]=0;
                 if(hh3funset1[16]>0)User.Skillenergy=0;
                 if(hh3funset1A[16]>0)User.Skillenergy=0;
                 if(hh3funset1[15]>0)hh3funset1[15];
                 if(hh3funset1A[15]>0)hh3funset1A[15];
                 User.TemdataNames="";
                 User.TemdataNumbers="";
                 User.CombatMode=0;
                 UserII.TemdataNames="";
                 UserII.TemdataNumbers="";
                 UserII.CombatMode=0;
             }
             if(profiledata[15]==1){
                 var poisoneffect = User.MaxHP*0.08;
                 poisoneffect = Math.round(poisoneffect);
                 User.HP-=poisoneffect;
                 if(User.HP<0) User.HP=0;
                 heroembed.setColor("#01FF00");
                 effects="You are poisoned \n"+poisoneffect+" dmg";
             }
            else if(profiledata[15]==4){
                 var poisoneffect = User.MaxHP*0.06;
                 poisoneffect = Math.round(poisoneffect);
                 User.HP-=poisoneffect;
                 if(User.HP<0) User.HP=0;
                 heroembed.setColor("#0F0F0F");
                 effects="You are corrupted \n"+poisoneffect+" dmg";
             }
             if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanames[5])&temdatanumbers[29]>0){
                 if(Math.random()<temdatanumbers[31]){
                 var om = temdatanumbers[30]/2;
                 var oam = 52 - om; om = oam/100;
                 oam = om * temdatanumbers[30]; om = temdatanumbers[30]-oam;
                 var tema = Math.round(om);
                 var attackm = RandomMinMax(tema,temdatanumbers[30]);
                 if(temdatanumbers[13]==3){
                     defeffected = temdatanumbers[5]*.50;
                     temdatanumbers[5]-=defeffected
                 }
                 var newatkm = temdatanumbers[5]*attackm;
                 newatkm = temdatanumbers[30]-newatkm;
                 newatkm = Math.round(newatkm);
                 newatkm= newatkm-=temdatanumbers[4];
                 if(newatkm<0)newatkm=0;
                 if(monstercheatype==9&&herospkey<foespdkey&Math.random()<0.20){ effects="\n[Warning] "+temdatanames[5]+" Attack has fallen into the void\n";newatk=0;}
                 newatkm= Math.round(newatkm);
                 attackm+=newatkm;temdatanumbers[0]-= attackm;if(temdatanumbers[32]>0)temdatanumbers[0]-= attackm;
             }
                 if(attackm){
                     herotxt +="\n**"+User.name+"'s "+temdatanames[5]+" attacks "+attackm+"** dmg";
                 }
                 else{
                     herotxt +="\n**"+User.name+"'s "+temdatanames[5]+" attacks but Missed**";
                 }
             }
     }
     if(foespdkey<=herospkey&foespdkeyII<=herospkey){
     if(herospkey>foespdkey&temdatanumbers[52]!=1||herospkey>foespdkeyII&temdatanumbers[53]!=1&temdatanumbers[32]>0){if(temdatanumbers[33]>0){
         if(temdatanumbers[52]==1 & temdatanumbers[53]!=1&temdatanumbers[32]>0){var them=2; temdatanumbers[53]=1;}else if(temdatanumbers[53]==1 & temdatanumbers[52]!=1){var them=1;temdatanumbers[52]=1;}
    else if(herospkey>foespdkey){var them=1; temdatanumbers[52]=1;}else if(herospkey>foespdkeyII&temdatanumbers[32]>0){var them=2; temdatanumbers[53]=1;};} else{var them=1;temdatanumbers[52]=1;};
         if(temdatanumbers[32]<=0)them=1;
         if(them==1) var mname=0; else var mname=7;
         if(them==1) var mstat=13; else var mstat =14;
         if(them==1) var m_MaxHP=1; else var m_MaxHP=33;
         if(them==1) var mHP=0; else var mHP=32;
         if(them==1) var matktrue = foeatkey; else var matktrue= foeatkeyII
         if(them==1) var matk = foeattack; else var matk = foeattackII;
         if(them!=1) foetxt = foetxtII;
         if(temdatanumbers[mstat]==1){
    var foepoisoneffect = temdatanumbers[m_MaxHP]*0.08;// poison
    foepoisoneffect = Math.round(foepoisoneffect);
    temdatanumbers[0]-=foepoisoneffect;
    effects=temdatanames[0]+" is poisoned! "+foepoisoneffect+" dmg";
         }
         else if(temdatanumbers[mstat]==2){
             monstereffectembed.setColor("#FFFE00");// stun
             foetxt = temdatanames[mname]+" is stunned!";
             temdatanumbers[mstat]=0;
             matktrue = false;
         }
         else if(temdatanumbers[mstat]==4){
             var foepoisoneffect = temdatanumbers[m_MaxHP]*0.06;// corruption
     foepoisoneffect = Math.round(foepoisoneffect);
     temdatanumbers[mHP]-=foepoisoneffect;
     effects=temdatanames[mname]+" is corrupted! "+foepoisoneffect+" dmg";
         }
         if(matktrue==true){
             if(temdatanumbers[57]==0&temdatanumbers[58]==0)var mtarget= RandomMinMax(1,2);
             else if(temdatanumbers[57]!=0) var mtarget = 2;
             else if(temdatanumbers[58]!=0) var mtarget = 1;
             if(mtarget==1){
             User.HP=User.HP-matk;if(User.HP<0) User.HP=0;if(!foetxt.includes("Missed"))foetxt+=" to "+User.name; else foetxt+=" "+User.name;}
             else if(mtarget==2){
            UserII.HP=UserII.HP-matk;if(UserII.HP<0) UserII.HP=0;
            if(foetxt.includes("Missed"))foetxt+=" "+UserII.name; else foetxt+=" to "+UserII.name;
             }
             if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanames[5])&skillname!=Gamedata.sys_heronoskills[19]&temdatanumbers[29]>0){
                 temdatanumbers[29]-=matk;
                 if(temdatanumbers[29]<=0){
                     effects+="\n"+User.name+"'s "+temdatanames[5]+" has been defeated";
                     temdatanames[5]="";temdatanumbers[29]=0;temdatanumbers[30]=0;temdatanumbers[31]=0;Imgset[3]=0;User.Ary_Imgset=Imgset.join("<:>");
                 }
             }
             if(mdata[7]<matk){
                 mdata[7]=matk;
                 User.Metadata = mdata.join("<:>");
             }
         }
         if(multia==true) effects = foetxt+"\n"+effects;
         foetxtA = foetxt;
             multia=true;
     }
     if(herospkey>foespdkey&temdatanumbers[52]!=1||herospkey>foespdkeyII&temdatanumbers[53]!=1&temdatanumbers[32]>0){if(temdatanumbers[33]>0){
         if(temdatanumbers[52]==1 & temdatanumbers[53]!=1&temdatanumbers[32]>0){var them=2; temdatanumbers[53]=1;}else if(temdatanumbers[53]==1 & temdatanumbers[52]!=1){var them=1;temdatanumbers[52]=1;}
    else if(herospkey>foespdkey){var them=1; temdatanumbers[52]=1;}else if(herospkey>foespdkeyII&temdatanumbers[32]>0){var them=2; temdatanumbers[53]=1;};} else{var them=1;temdatanumbers[52]=1;};
         if(temdatanumbers[32]<=0)them=1;
         if(them==1) var mname=0; else var mname=7;
         if(them==1) var mstat=13; else var mstat =14;
         if(them==1) var m_MaxHP=1; else var m_MaxHP=33;
         if(them==1) var mHP=0; else var mHP=32;
         if(them==1) var matktrue = foeatkey; else var matktrue= foeatkeyII
         if(them==1) var matk = foeattack; else var matk = foeattackII;
         if(them!=1) foetxt = foetxtII;
         if(temdatanumbers[mstat]==1){
             var foepoisoneffect = temdatanumbers[m_MaxHP]*0.08;// poison
     foepoisoneffect = Math.round(foepoisoneffect);
    temdatanumbers[0]-=foepoisoneffect;
    effects=temdatanames[0]+" is poisoned! "+foepoisoneffect+" dmg";
         }
         else if(temdatanumbers[mstat]==2){
             monstereffectembed.setColor("#FFFE00");// stun
             foetxt = temdatanames[mname]+" is stunned!";
             temdatanumbers[mstat]=0;
             matktrue = false;
         }
         else if(temdatanumbers[mstat]==4){
             var foepoisoneffect = temdatanumbers[m_MaxHP]*0.06;// corruption
     foepoisoneffect = Math.round(foepoisoneffect);
     temdatanumbers[mHP]-=foepoisoneffect;
     effects=temdatanames[mname]+" is corrupted! "+foepoisoneffect+" dmg";
         }
         if(matktrue==true){
             if(temdatanumbers[57]==0&temdatanumbers[58]==0)var mtarget= RandomMinMax(1,2);
                 else if(temdatanumbers[57]!=0) var mtarget = 2;
                 else if(temdatanumbers[58]!=0) var mtarget = 1;
                 if(mtarget==1){
                 User.HP=User.HP-matk;if(User.HP<0) User.HP=0;if(!foetxt.includes("Missed"))foetxt+=" to "+User.name; else foetxt+=" "+User.name;}
                 else if(mtarget==2){
                 UserII.HP=UserII.HP-matk;if(UserII.HP<0) UserII.HP=0;
                 if(!foetxt.includes("Missed"))foetxt+=" to "+UserII.name; else foetxt+=" "+UserII.name;
                 }
             if(Gamedata.sys_monsternames_normal.some(a=>a==temdatanames[5])&skillname!=Gamedata.sys_heronoskills[19]&temdatanumbers[29]>0){
                 temdatanumbers[29]-=matk;
                 if(temdatanumbers[29]<=0){
                     effects+="\n"+User.name+"'s "+temdatanames[5]+" has been defeated";
                     temdatanames[5]="";temdatanumbers[29]=0;temdatanumbers[30]=0;temdatanumbers[31]=0;Imgset[3]=0;User.Ary_Imgset=Imgset.join("<:>");
                 }
             }
             if(mdata[7]<matk){
                 mdata[7]=matk;
                 User.Metadata = mdata.join("<:>");
             }
         }
         if(multia==true) foetxt = foetxtA+"\n"+foetxt;
     }}
     if(herospkey<foespdkey||herospkey<foespdkeyII){heroembed.setTitle(foetxt).setDescription(herotxt).setFooter(effects);} else{heroembed.setTitle(herotxt).setDescription(foetxt).setFooter(effects);}
     }
     if(monstercheatype==1&foeatkcrit>1&temdatanumbers[0]>0){
        profiledata[15]=-1;
        monstercheatembed.setColor("#FF0000");
        foecheatxt =  temdatanames[0]+"'s Ability: `Age of Ruin`\n Your speed has decreased";
        monstercheatembed.setDescription(foecheatxt);
}
   else if(monstercheatype==2&heroatkcrit.some(a=>a==3)&temdatanumbers[0]>0&Math.random()<0.30){
            profiledata[15]=2;
            temdatanumbers[21]+=0.05;
            monstercheatembed.setColor("#FF0000");
            foecheatxt =  temdatanames[0]+"'s Ability: `"+temdatanames[0]+"'s roar`\n:zap: You have been stunned and your accuracy has decreases 5%\nYou must use any act command to fight the stun";
            monstercheatembed.setDescription(foecheatxt);
    }
   else if(monstercheatype==3&temdatanumbers[0]<=newfix&temdatanumbers[0]>0&temdatanumbers[5]!=0){
        temdatanumbers[0] = newfix;
        temdatanumbers[2] +=5;
        temdatanumbers[3] +=0.10;
        temdatanumbers[5] =0;
        temdatanumbersA[2] = temdatanumbers[2];
        temdatanumbersA[3] = temdatanumbers[3];
        temdatanumbersA[5] = temdatanumbers[5];
        monstercheatembed.setColor("#FF0000");
        foecheatxt = temdatanames[0]+"'s Ability: `Warrior's Fury`\n"+temdatanames[0]+"'s attack power has increase\nbut defense has decrease.";
        monstercheatembed.setDescription(foecheatxt);
    }
    else if(monstercheatype==4& temdatanumbers[13]!=0){
        temdatanumbers[13]=0;
        monstercheatembed.setColor("#FF0000");
        foecheatxt = temdatanames[0]+"'s Ability: `Natural Immunity`\nThis boss status cannot be changed.";
        monstercheatembed.setDescription(foecheatxt);
    }
    else if(monstercheatype==5& temdatanumbers[0]< temdatanumbers[1]&attack>0){
        var rate = temdatanumbers[1] - temdatanumbers[0];
        var ratelv = rate/temdatanumbers[1];
        ratelv = Math.round(ratelv*100);
        var critrate = ratelv*0.003
        temdatanumbers[7] = temdatanumbers[7] =critrate;
        temdatanumbersA[7] = temdatanumbers[7];
    }
    else if(monstercheatype==6& temdatanumbers[0]< temdatanumbers[1]&attack>0){
        var rate = temdatanumbers[1] - temdatanumbers[0];
        var ratelv = rate/temdatanumbers[1];
        ratelv = Math.round(ratelv*100);
        var debuffrate = ratelv*0.0012
        temdatanumbers[15] +=debuffrate;
        temdatanumbers[21] += debuffrate;
        temdatanumbersA[15] +=debuffrate;
        temdatanumbersA[21] += debuffrate;
    }
    else if(monstercheatype==8 & temdatanumbers[0]<=0){
        monstercheatembed.setAuthor(temdatanames[0]+" has been defeated\n"+temdatanames[0]+"'s Ability: Awaken", Imgset[1]);
        var bset = User.floor-1;
        var bdataset = 11*bset;
        var bmaxhp = 1+ bdataset;
        var batk = 2+ bdataset;
        var badatk = 3+ bdataset;
        var bdef = 4+ bdataset;
        var baddef = 5+bdataset;
        var bspeed = 6+ bdataset;
        var bcrit = 7+ bdataset;
        var baccy = 8 + bdataset;
        var bdropkey = 9+ bdataset;
        var beffectkey = 10+bdataset;
        temdatanames[0] = Gamedata.sys_monsternames_boss[bset];
        temdatanumbers[0] = Gamedata.sys_monsterboss_state[bmaxhp];
        temdatanumbers[1] = Gamedata.sys_monsterboss_state[bmaxhp];
        temdatanumbers[2] = Gamedata.sys_monsterboss_state[batk];
        temdatanumbers[3] = Gamedata.sys_monsterboss_state[badatk];
        temdatanumbers[4] = Gamedata.sys_monsterboss_state[bdef];
        temdatanumbers[5] = Gamedata.sys_monsterboss_state[baddef];
        temdatanumbers[6] = Gamedata.sys_monsterboss_state[bspeed];
        temdatanumbers[7] = Gamedata.sys_monsterboss_state[bcrit];
        temdatanumbers[8] = Gamedata.sys_monsterboss_state[baccy];
        temdatanumbers[9] = Gamedata.sys_monsterboss_state[bdropkey];
        temdatanumbers[10] = Gamedata.sys_monsterboss_state[beffectkey];
        Imgset[1] = Gamedata.sys_monsterpic_boss[bset];
        temdatanamesA[0] = Gamedata.sys_monsternames_boss[bset];
        temdatanumbersA[0] = Gamedata.sys_monsterboss_state[bmaxhp];
        temdatanumbersA[1] = Gamedata.sys_monsterboss_state[bmaxhp];
        temdatanumbersA[2] = Gamedata.sys_monsterboss_state[batk];
        temdatanumbersA[3] = Gamedata.sys_monsterboss_state[badatk];
        temdatanumbersA[4] = Gamedata.sys_monsterboss_state[bdef];
        temdatanumbersA[5] = Gamedata.sys_monsterboss_state[baddef];
        temdatanumbersA[6] = Gamedata.sys_monsterboss_state[bspeed];
        temdatanumbersA[7] = Gamedata.sys_monsterboss_state[bcrit];
        temdatanumbersA[8] = Gamedata.sys_monsterboss_state[baccy];
        temdatanumbersA[9] = Gamedata.sys_monsterboss_state[bdropkey];
        temdatanumbersA[10] = Gamedata.sys_monsterboss_state[beffectkey];
        ImgsetA[1] = Gamedata.sys_monsterpic_boss[bset];
        User.Ary_Imgset = Imgset.join("<:>");
        monstercheatembed.setTitle("Lich: I have watched you ever since you have enter my home and gain power as you progress...\nKilled my family like their monsters...\nYou want the key to leave this place?\nTry to take The Master Key from me!");
        monstercheatembed.setImage(Imgset[1]);
        foecheatxt="";
    }
    else if(monstercheatype==11&foeatkcrit==0){
        if(temdatanumbers[3]<1) temdatanumbers[3]+=0.07;
        if(temdatanumbersA[3]<1) temdatanumbersA[3]+=0.07;
    }
    else if(monstercheatype==12&User.HP<(User.MaxHP*.3)&arg.includes("potion")||monstercheatype==12&arg.includes("potion")){
        if(User.Skillenergy<1){profiledata[15]=2;User.Ary_HH3ProfileData= profiledata.join("<:>");monstereffectembed.setColor("#FFFE00");
        monstereffectembed.setDescription(":zap: You have been Stunned!\nYou must use any act command to fight the stun");foeffect="";};
        if(User.HP<(User.MaxHP*.3))User.Skillenergy=0;
    }
    else if(monstercheatype==13&Math.random()<0.30){
        var bset = RandomMinMax(2,4);
        var bdataset = 11*bset;
        var bmaxhp = 1+ bdataset;
        var batk = 2+ bdataset;
        var badatk = 3+ bdataset;
        var bdef = 4+ bdataset;
        var baddef = 5+bdataset;
        var bspeed = 6+ bdataset;
        var bcrit = 7+ bdataset;
        var baccy = 8 + bdataset;
        var bdropkey = 9+ bdataset;
        var beffectkey = 10+bdataset;
        var skillset = bset*4;
        var skillset2 = skillset+1;
        var skillset3 = skillset+2;
        var skillset4 = skillset+3;
        temdatanames[1] = Gamedata.sys_monsterbossA_skillname[skillset];
        temdatanames[2] = Gamedata.sys_monsterbossA_skillname[skillset2];
        temdatanames[3] = Gamedata.sys_monsterbossA_skillname[skillset3];
        temdatanames[4] = Gamedata.sys_monsterbossA_skillname[skillset4];
        temdatanumbers[2] = Gamedata.sys_monsterbossA_state[batk];
        temdatanumbers[3] = Gamedata.sys_monsterbossA_state[badatk];
        temdatanumbers[4] = Gamedata.sys_monsterbossA_state[bdef];
        temdatanumbers[5] = Gamedata.sys_monsterbossA_state[baddef];
        temdatanumbers[6] = Gamedata.sys_monsterbossA_state[bspeed];
        temdatanumbers[7] = Gamedata.sys_monsterbossA_state[bcrit];
        temdatanumbers[8] = Gamedata.sys_monsterbossA_state[baccy];
        temdatanumbers[9] = Gamedata.sys_monsterbossA_state[bdropkey];
        temdatanumbers[10] = Gamedata.sys_monsterbossA_state[beffectkey];
        temdatanumbersA[0] = temdatanumbers[0];
        temdatanumbersA[2] = temdatanumbers[2];
        temdatanumbersA[3] = temdatanumbers[3];
        temdatanumbersA[4] = temdatanumbers[4];
        temdatanumbersA[5] = temdatanumbers[5];
        temdatanumbersA[6] = temdatanumbers[6];
        temdatanumbersA[7] = temdatanumbers[7];
        temdatanumbersA[8] = temdatanumbers[8];
        temdatanumbersA[9] = temdatanumbers[9];
        temdatanumbersA[10] = temdatanumbers[10];
        Imgset[1] = Gamedata.sys_monsterpic_bossA[bset];
        monstereffectembed.setColor("#FF0000");
        monstereffectembed.setDescription("The Core has Transformed!\nStats has Changed.");foeffect="";
    }
    if(monstereffectype==1&foeatkcrit>0&profiledata[15]==0&foeatkey==true&Math.random()<0.23&temdatanumbers[0]>0){
        profiledata[15]=1;
        monstereffectembed.setColor("#01FF00");
        monstereffectembed.setDescription(":green_heart: You have been Poisoned!\nYou will take additional dmg each round and your speed decreased");
        monstereffectembed.setFooter("Tip: You can use a Pure Potion to remove the effects");
        foeffect="";
    }
   else if(monstereffectype==2&foeatkcrit>0&profiledata[15]==0&foeatkey==true&Math.random()<0.12&temdatanumbers[0]>0){
        profiledata[15]=2;
        monstereffectembed.setColor("#FFFE00");
        monstereffectembed.setDescription(":zap: You have been Stunned!\nYou must use any act command to fight the stun");
        foeffect="";
    }
    else if(monstereffectype==3&foeatkcrit>0&profiledata[15]==0&foeatkey==true&Math.random()<0.15&temdatanumbers[0]>0){
        profiledata[15]=3;
        monstereffectembed.setColor("#FFFE00");
        monstereffectembed.setDescription(":shield: Your Defense has decreased!");
        foeffect="";
    }
    else if(monstereffectype==4&foeatkcrit>0&profiledata[15]==0&foeatkey==true&Math.random()<0.20&temdatanumbers[0]>0){
        profiledata[15]=4;
        monstereffectembed.setColor("#0F0F0F");
        monstereffectembed.setDescription(":broken_heart: You have been Corrupted!\nYou will take additional dmg each round and your defense decreased");
        monstereffectembed.setFooter("Tip: You can use a Pure Potion to remove the effects");
        foeffect="";
    }
var teamdefeated = false;
var mdefeated = false;
     if(User.HP<=0){
        if(User.HP!=0)User.HP=0;
        profiledata[15]=0;
        User.Ary_HH3ProfileData = profiledata.join("<:>");
        mdata[4]++;
        User.Metadata = mdata.join("<:>");
        herodefeatembed.setAuthor(User.name+" has been defeated by "+temdatanames[0],User.Profileimg);
        if(User.Fightagain>0){
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            message.channel.send(herodefeatembed.setTitle("Do you wish to continue fighting?\n`cost 25 Energy`\nYou can use this command once daily")
            .setDescription("To continue fighting: react `⚡` **once daily**(cost 25 energy)\nTo cancel and wait 10 rounds until recovered: react `❌`"))
            .then((message)=>{message.react('⚡'),message.react('❌');
            const filter = (reaction, user) => {
             return ['⚡','❌'].includes(reaction.emoji.name) && user.id === User.id;
         }; message.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
         .then(collected => {
             const reaction = collected.first();
     
             if (reaction.emoji.name === '⚡') {
                User.energy -25;
                User.HP = Math.round(User.MaxHP/2);
                User.Fightagain=0;
                if(temdatanumbers[0]<0&temdatanumbers[32]<0){temdatanumbers[0]=1;User.TemdataNumbers = temdatanumbers.join("<:>");};
                 message.edit(herodefeatembed.setDescription(":hearts: recovered half your HP"));
             } else {
                if(temdatanumbers[46]==1)temdatanumbers[57]=10;else if(temdatanumbers[46]==2)temdatanumbers[58]=10;
                User.TemdataNumbers = temdatanumbers.join("<:>");
                User.Ary_HH3ProfileData = profiledata.join("<:>");
                 message.edit(herodefeatembed.setDescription(" you must wait 10 arounds to revive with quarter of your HP"));
             }
         })
         .catch(collected => {
            if(temdatanumbers[46]==1)temdatanumbers[57]=10;else if(temdatanumbers[46]==2)temdatanumbers[58]=10;
            User.TemdataNumbers = temdatanumbers.join("<:>");
            User.Ary_HH3ProfileData = profiledata.join("<:>");
             message.edit(herodefeatembed.setDescription(" you must wait 10 arounds to revive with quarter of your HP"));
         });})
        }
        else{
            if(temdatanumbers[46]==1)temdatanumbers[57]=10;else if(temdatanumbers[46]==2)temdatanumbers[58]=10;
            User.TemdataNumbers = temdatanumbers.join("<:>");
            User.Ary_HH3ProfileData = profiledata.join("<:>");
             message.channel.send(herodefeatembed.setDescription(" you must wait 10 arounds to revive with quarter of your HP"));
        }
        }
        if(UserII.HP<=0){
        if(UserII.HP!=0)UserII.HP=0;
        profiledataA[15]=0;
        UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
        mdataA[4]++;
        UserII.Metadata = mdataA.join("<:>");
        herodefeatembedII.setAuthor(UserII.name+" has been defeated by "+temdatanamesA[0],UserII.Profileimg);
        if(User.Fightagain>0){
            User.Ary_HH3ProfileData = profiledata.join("<:>");
            message.channel.send(herodefeatembedII.setTitle("Do you wish to continue fighting?\n`cost 25 Energy`\nYou can use this command once daily")
            .setDescription("To continue fighting: react `⚡` **once daily**(cost 25 energy)\nTo cancel and wait 10 rounds until recovered: react `❌`"))
            .then((message)=>{message.react('⚡'),message.react('❌');
            const filter = (reaction, user) => {
             return ['⚡','❌'].includes(reaction.emoji.name) && user.id === UserII.id;
         }; message.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
         .then(collected => {
             const reaction = collected.first();
     
             if (reaction.emoji.name === '⚡') {
                User.energy -25;
                UserII.HP = Math.round(User.MaxHP/2);
                UserII.Fightagain=0;
                if(temdatanumbersA[0]<0&temdatanumbersA[32]<0){temdatanumbersA[0]=1;UserII.TemdataNumbers = temdatanumbersA.join("<:>");};
                 message.edit(herodefeatembedII.setDescription(":hearts: recovered half your HP"));
             } else {
                if(temdatanumbersA[46]==1)temdatanumbers[57]=10;else if(temdatanumbers[46]==2)temdatanumbersA[58]=10;
                UserII.TemdataNumbers = temdatanumbersA.join("<:>");
                UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
                 message.edit(herodefeatembedII.setDescription(" you must wait 10 arounds to revive with quarter of your HP"));
             }
         })
         .catch(collected => {
            if(temdatanumbersA[46]==1)temdatanumbers[57]=10;else if(temdatanumbers[46]==2)temdatanumbersA[58]=10;
            UserII.TemdataNumbers = temdatanumbersA.join("<:>");
            UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
             message.edit(herodefeatembedII.setDescription(" you must wait 10 arounds to revive with quarter of your HP"));
         });})
        }
        else{
            if(temdatanumbersA[46]==1)temdatanumbers[57]=10;else if(temdatanumbers[46]==2)temdatanumbersA[58]=10;
            UserII.TemdataNumbers = temdatanumbersA.join("<:>");
            UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
             message.channel.send(herodefeatembedII.setDescription(" you must wait 10 arounds to revive with quarter of your HP"));
        }
        }
        if(User.HP<=0&UserII.HP<=0){
            User.TemdataNames = "";
            User.TemdataNumbers = "";
            User.CombatMode=0;
            profiledata[15]=0;
            User.HP = User.MaxHP;
            if(hh3funset1[15]>0){hh3funset1[15]=0;User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");}
            if(hh3funset1[11]!=2||hh3funset1[11]==2&temdatanumbers[46]==1){
           var newfix = User.floor-1;
           var stepamount = 0;
           var displaysteps;
           if(User.floor>3&User.floor<=9){
            stepamount=125;
            }
            else if(User.floor==10){
                stepamount=140
            }
           else if(User.floor==3){
            stepamount=65;
            }
           else {
            stepamount = 60;
            }
           var floormax =stepamount*newfix;
            if(User.floor>3&User.floor<=9){
                var halfloor = floormax -=63;
                if(User.step>=halfloor){
                    User.step = halfloor;
                    displaysteps=halfloor
                }
                else{
                User.step=floormax-124;
                displaysteps=floormax-124;
                if(User.step<=0)User.step=10;
            }
            }
            else if(User.floor==10){
                var halfloor = floormax -=70;
                if(User.step>=halfloor){
                User.step = halfloor;
                displaysteps=halfloor;
                }
                else{
                User.step=floormax-279;
                displaysteps=floormax-279;
                if(User.step<=0)User.step=10;
                 }
                }
            else if(User.floor==3){
                var halfloor = floormax -=33;
                if(User.step>=halfloor){
                    User.step = halfloor;
                    displaysteps=halfloor;
                }
                else{
                User.step-=floormax-69 ;
                displaysteps=floormax-69;
                if(User.step<=0)User.step=10;
            }}
           else if(User.floor==2){
            var halfloor = floormax -=30;
            if(User.step>=halfloor){
                User.step = halfloor;
                displaysteps=halfloor;
            }
            else{
            User.step-=floormax-50;
            displaysteps=floormax-50;
            if(User.step<=0)User.step=10;
            if(!displaysteps)displaysteps="-";
        }
        if(profilenames[1]==Gamedata.sys_sword_names[0]){
            profiledata[3] =1;
            profiledata[6]=100;
        } User.Ary_HH3ProfileData = profiledata.join("<:>");
    }
           };
            Imgset[1]="";
            Imgset[2]="";
            User.Ary_Imgset = Imgset.join("<:>");
            if(hh3funset1[11]==2){
                  UserII.TemdataNames="";
                  UserII.TemdataNumbers="";
                    if(hh3funset1A[15]>0){hh3funset1A[15]=0;UserII.Ary_HH3FunctionSet1 = hh3funset1A.join("<:>");}
                  profiledataA[15]=0;temdatanumbersA[46]=0;temdatanumbersA[47]=0;;
                  ImgsetA[1]="";
                  ImgsetA[2]="";
                    mdataA[4]++;
                    User.Metadata = mdata.join("<:>");
                  UserII.Ary_Imgset = ImgsetA.join("<:>");
                  UserII.Ary_HH3FunctionSet1 = hh3funset1A.join("<:>");
                  UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
            }
            herodefeatembedII.addField("Team Defeated","Party Leader walks back "+displaysteps+" steps");
            defeatkeyII=true;teamdefeated=true;
        }
        if(temdatanumbers[0]<1&temdatanumbers[32]>0&teamdefeated==false){
            defeatxt =temdatanames[0]+" has been defeated", Imgset[1];
            temdatanames[0] = temdatanames[7]; temdatanames[7]="";
            temdatanamesA[0] = temdatanamesA[7]; temdatanamesA[7]="";
            temdatanumbers[0] = temdatanumbers[32]; temdatanumbers[32]=0;
            temdatanumbers[1] = temdatanumbers[33]; temdatanumbersA[1]=temdatanumbers[1];
            temdatanumbers[2] = temdatanumbers[34]; temdatanumbers[34]=0;
            temdatanumbers[3] = temdatanumbers[35]; temdatanumbers[35]=0;
            temdatanumbers[4] = temdatanumbers[36]; temdatanumbers[36]=0;
            temdatanumbers[5] = temdatanumbers[37]; temdatanumbers[37]=0;
            temdatanumbers[6] = temdatanumbers[38]; temdatanumbers[38]=0;
            temdatanumbers[7] = temdatanumbers[39]; temdatanumbers[39]=0;
            temdatanumbers[8] = temdatanumbers[40]; temdatanumbers[40]=0;
            temdatanumbers[10] = temdatanumbers[42]; temdatanumbers[42]=0;
            Imgset[1]=Imgset[2]; Imgset[2]="";ImgsetA[1]=ImgsetA[2]; ImgsetA[2]="";
            User.Ary_Imgset = Imgset.join("<:>");UserII.Ary_Imgset = ImgsetA.join("<:>");
            mdefeated = true;monsterdefeatembed.setAuthor(defeatxt);
        }
        if(temdatanumbers[32]<=0&temdatanumbers[33]!=0&Imgset[2]!=""){
           if(mdefeated==true){defeatxt=defeatxt+"\n"+temdatanames[7]+" has been defeated";defeatimg=Imgset[2];}
           else { defeatxt=temdatanames[7]+" has been defeated", Imgset[2];mdefeated=true;defeatimg=Imgset[2]}
            Imgset[2]=""; ImgsetA[2]=""; User.Ary_Imgset = Imgset.join("<:>"); UserII.Ary_Imgset = ImgsetA.join("<:>");
            monsterdefeatembed.setAuthor(defeatxt);
        }
        if(temdatanumbers[0]<=0&teamdefeated==false){
            if(mdefeated==true){defeatxt=defeatxt+"\n"+temdatanames[0]+" has been defeated";defeatimg= Imgset[1];}
            else {defeatxt=temdatanames[0]+" has been defeated", Imgset[1];mdefeated=true;defeatimg=Imgset[1]}
             var kepname = temdatanames[0];
             var rawdrop = ""+temdatanumbers[9];
             var monstertype =Number(rawdrop.charAt(0));
             var droptier =Number (rawdrop.substring(1));
             var rawdropII ="";
             var droptierII;
             if(temdatanumbers[33]!=0){
                 rawdropII = ""+temdatanumbers[41];
                 droptierII =Number (rawdropII.substring(1));
                var monstertypeII =Number(rawdropII.charAt(0));
               var balanceII = droptierII*6;
               var expdropII = droptierII*15
               var minbalanceII = Math.round(0.30*balanceII);
                var minexpdropII = Math.round(0.50*expdropII);
               var currencyII = RandomMinMax(minbalanceII,balanceII);
               var expII = RandomMinMax(minexpdropII,expdropII);
                }
             Imgset[1]="";
             User.Ary_Imgset = Imgset.join("<:>");
             if(hh3funset1[16]>0){hh3funset1[16]=0;User.Ary_HH3FunctionSet1=hh3funset1.join("<:>");};
             User.TemdataNames = "";
             User.TemdataNumbers = "";
             User.CombatMode=0;
             hh3funset1[15]=0;
             mdata[3]++;
             mdataA[3]++;
             if(temdatanumbers[33]!=0){mdata[3]++;mdataA[3]++;}
             User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
             User.Metadata = mdata.join("<:>");
             UserII.Metadata = mdataA.join("<:>");
             UserII.TemdataNames="";
             UserII.TemdataNumbers="";
             UserII.CombatMode=0;
             hh3funset1A[15]=0;
             temdatanumbersA[46]=0;temdatanumbersA[47]=0;
             ImgsetA[1]="";
             UserII.Ary_Imgset = ImgsetA.join("<:>");
             UserII.Ary_HH3FunctionSet1 = hh3funset1A.join("<:>");
             UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
             var balance = 0;
             var expdrop = 0;
             if(monstertype==1){
                balance = droptier*3;
                expdrop = droptier*8;
               }
               else if(monstertype==2){
                balance = droptier*11;
                expdrop = droptier*32;
               }
               else if(monstertype==3){
                balance = droptier*9;
                expdrop = droptier*25;
               }
             var minbalance = 0.30*balance;
             var minexpdrop = 0.50*expdrop;
             minbalance = Math.round(minbalance);
             minexpdrop = Math.round(minexpdrop);
             currency = RandomMinMax(minbalance,balance);
             exp = RandomMinMax(minexpdrop,expdrop);
             User.exp += exp; UserII.exp+=exp;
             UserII.currency += currency; UserII.currency+=currency;
             if(droptierII){
                 User.exp+=expII; UserII.exp+=expII;
                 User.currency+=currencyII; UserII.currency+=currencyII;
             }
             monsterdefeatembed.setTitle(":gift: Team Reward");
            if(temdatanumbers[33]==0) monsterdefeatembed.setDescription("EXP: "+exp+"\nCurrency: "+currency);
            else monsterdefeatembed.setDescription("EXP: "+exp+"(+"+expII+")\nCurrency: "+currency+"(+"+currencyII+")");
             if(monstertype==1&droptier==1){
                 itemdropnames = Gamedata.sys_monsternormaldrop_tier1;
                 itemdropnums = Gamedata.sys_monsternormaldrop_tier1rate;
             }
             if(monstertype==1&droptier==2){
                 itemdropnames = Gamedata.sys_monsternormaldrop_tier2;
                 itemdropnums = Gamedata.sys_monsternormaldrop_tier2rate;
             }
             if(monstertype==1&droptier==3){
                 itemdropnames = Gamedata.sys_monsternormaldrop_tier3;
                 itemdropnums = Gamedata.sys_monsternormaldrop_tier3rate;
             }
             if(monstertype==1&droptier==4){
                itemdropnames = Gamedata.sys_monsternormaldrop_tier4;
                itemdropnums = Gamedata.sys_monsternormaldrop_tier4rate;
            }
             if(monstertype==1&droptier==5){
                 itemdropnames = Gamedata.sys_monsternormaldrop_tier5;
                 itemdropnums = Gamedata.sys_monsternormaldrop_tier5rate;
             }
             if(monstertype==1&droptier==6){
                 itemdropnames = Gamedata.sys_monsternormaldrop_tier6;
                 itemdropnums = Gamedata.sys_monsternormaldrop_tier6rate;
             }
             if(monstertype==1&droptier==7){
                 itemdropnames = Gamedata.sys_monsternormaldrop_tier7;
                 itemdropnums = Gamedata.sys_monsternormaldrop_tier7rate;
             }
             if(monstertype==1&droptier==8){
                 itemdropnames = Gamedata.sys_monsternormaldrop_tier8;
                 itemdropnums = Gamedata.sys_monsternormaldrop_tier8rate;
             }
             if(monstertype==1&droptier==9){
                 itemdropnames = Gamedata.sys_monsternormaldrop_tier9;
                 itemdropnums = Gamedata.sys_monsternormaldrop_tier9rate;
             }
             if(monstertype==1&droptier==11){
                itemdropnames = Gamedata.sys_monsternormaldrop_tier11;
                itemdropnums = Gamedata.sys_monsternormaldrop_tier11rate;
            }
            if(monstertype==1&droptier==12){
                itemdropnames = Gamedata.sys_monsternormaldrop_tier12;
                itemdropnums = Gamedata.sys_monsternormaldrop_tier12rate;
            }
            if(monstertype==1&droptier==13){
                itemdropnames = Gamedata.sys_monsternormaldrop_tier13;
                itemdropnums = Gamedata.sys_monsternormaldrop_tier13rate;
            }
             if(monstertype==3&droptier==1){
                 itemdropnames = Gamedata.sys_monsterbossdrop_tier1;
                 itemdropnums = Gamedata.sys_monsterbossdrop_tier1rate;
             }
             if(monstertype==3&droptier==2){
                 itemdropnames = Gamedata.sys_monsterbossdrop_tier2;
                 itemdropnums = Gamedata.sys_monsterbossdrop_tier2rate;
             }
             if(monstertype==3&droptier==3){
                 itemdropnames = Gamedata.sys_monsterbossdrop_tier3;
                 itemdropnums = Gamedata.sys_monsterbossdrop_tier3rate;
             }
             if(monstertype==3&droptier==4){
                 itemdropnames = Gamedata.sys_monsterbossdrop_tier4;
                 itemdropnums = Gamedata.sys_monsterbossdrop_tier4rate;
             }
             if(monstertype==3&droptier==5){
                 itemdropnames = Gamedata.sys_monsterbossdrop_tier5;
                 itemdropnums = Gamedata.sys_monsterbossdrop_tier5rate;
             }
             if(monstertype==3&droptier==6){
                 itemdropnames = Gamedata.sys_monsterbossdrop_tier6;
                 itemdropnums = Gamedata.sys_monsterbossdrop_tier6rate;
             }
             if(monstertype==3&droptier==7){
                 itemdropnames = Gamedata.sys_monsterbossdrop_tier7;
                 itemdropnums = Gamedata.sys_monsterbossdrop_tier7rate;
             }
             if(monstertype==3&droptier==8){
                 itemdropnames = Gamedata.sys_monsterbossdrop_tier8;
                 itemdropnums = Gamedata.sys_monsterbossdrop_tier8rate;
             }
             if(monstertype==3&droptier==9){
                 itemdropnames = Gamedata.sys_monsterbossdrop_tier9;
                 itemdropnums = Gamedata.sys_monsterbossdrop_tier9rate;
             }
             if(monstertype==3&droptier==11){
                itemdropnames = Gamedata.sys_monsterbossdrop_tier11;
                itemdropnums = Gamedata.sys_monsterbossdrop_tier11rate;
            }
            if(monstertype==3&droptier==12){
                itemdropnames = Gamedata.sys_monsterbossdrop_tier12;
                itemdropnums = Gamedata.sys_monsterbossdrop_tier12rate;
            }
            if(monstertype==3&droptier==13){
                itemdropnames = Gamedata.sys_monsterbossdrop_tier13;
                itemdropnums = Gamedata.sys_monsterbossdrop_tier13rate;
            }
             if(droptierII!=""){
                 if(monstertypeII==1&droptierII==1){
                     itemdropnamesII = Gamedata.sys_monsternormaldrop_tier1;
                     itemdropnumsII = Gamedata.sys_monsternormaldrop_tier1rate;
                 }
                 if(monstertypeII==1&droptierII==2){
                     itemdropnamesII = Gamedata.sys_monsternormaldrop_tier2;
                     itemdropnumsII = Gamedata.sys_monsternormaldrop_tier2rate;
                 }
                 if(monstertypeII==1&droptierII==3){
                     itemdropnamesII = Gamedata.sys_monsternormaldrop_tier3;
                     itemdropnumsII = Gamedata.sys_monsternormaldrop_tier3rate;
                 }
                 if(monstertypeII==1&droptierII==4){
                    itemdropnamesII = Gamedata.sys_monsternormaldrop_tier4;
                    itemdropnumsII = Gamedata.sys_monsternormaldrop_tier4rate;
                }
                 if(monstertypeII==1&droptierII==5){
                     itemdropnamesII = Gamedata.sys_monsternormaldrop_tier5;
                     itemdropnumsII = Gamedata.sys_monsternormaldrop_tier5rate;
                 }
                 if(monstertypeII==1&droptierII==6){
                     itemdropnamesII = Gamedata.sys_monsternormaldrop_tier6;
                     itemdropnumsII = Gamedata.sys_monsternormaldrop_tier6rate;
                 }
                 if(monstertypeII==1&droptierII==7){
                     itemdropnamesII = Gamedata.sys_monsternormaldrop_tier7;
                     itemdropnumsII = Gamedata.sys_monsternormaldrop_tier7rate;
                 }
                 if(monstertypeII==1&droptierII==8){
                     itemdropnamesII = Gamedata.sys_monsternormaldrop_tier8;
                     itemdropnumsII = Gamedata.sys_monsternormaldrop_tier8rate;
                 }
                 if(monstertypeII==1&droptierII==9){
                     itemdropnamesII = Gamedata.sys_monsternormaldrop_tier9;
                     itemdropnumsII = Gamedata.sys_monsternormaldrop_tier9rate;
                 }
                 if(monstertypeII==1&droptierII==11){
                     itemdropnamesII = Gamedata.sys_monsternormaldrop_tier11;
                     itemdropnumsII = Gamedata.sys_monsternormaldrop_tier11rate;
                 }
                 if(monstertypeII==1&droptierII==12){
                    itemdropnamesII = Gamedata.sys_monsternormaldrop_tier12;
                    itemdropnumsII = Gamedata.sys_monsternormaldrop_tier12rate;
                }
                if(monstertypeII==1&droptierII==13){
                    itemdropnamesII = Gamedata.sys_monsternormaldrop_tier13;
                    itemdropnumsII = Gamedata.sys_monsternormaldrop_tier13rate;
                }
             }
                 for(var item = 0; item < 3; item++){
                     var items = RandomMax(itemdropnames.length);
                     if(Math.random()<itemdropnums[items]){
                        if(itemdropnames[items].includes("x")){
                            var splititem = itemdropnames[items].split("x");
                            splititem[0].trimEnd();
                            splititem[1].trimStart();
                            itemdropnames[items]=splititem[0];
                           var amount=Number(splititem[1]);
                        }
                         if(Gamedata.sys_material_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                             var getname = Gamedata.sys_material_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                             var getcort = Gamedata.sys_material_names.indexOf(getname);
                             amount = RandomMinMax(1,amount);
                             getcrot = getcort+=12;
                             if(itembagnames[getcort]==""){
                             itembagnames[getcort] = getname;}
                             itembagdata[getcort] += amount;
                             monsterdefeatembed.addField(":moneybag: "+getname," "+amount+" ("+User.name+")");
                         }
                         else if(Gamedata.sys_item_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                             var getname = Gamedata.sys_item_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                             var getcort = Gamedata.sys_item_names.indexOf(getname);
                             amount = RandomMinMax(1,amount);
                             if(itembagnames[getcort]==""){
                             itembagnames[getcort] = getname;}
                             itembagdata[getcort] += amount;
                             monsterdefeatembed.addField(":test_tube: "+getname," "+amount+" ("+User.name+")");
                         }
                         else if(Gamedata.sys_crystal_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                            var getname = Gamedata.sys_crystal_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                            var getcort = Gamedata.sys_crystal_names.indexOf(getname);
                           var table = getcort*4;
                            var num=table+1;
                            var num2=table+2;
                            var num3=table+3;
                            var getrandom=0;
                            var getmini;
                            var checkresult = crystalnames.indexOf("");
                            if(checkresult!=-1){
                                var bagtable = 4*checkresult;
                                var bagphy = 1+bagtable;
                                var bagper = 2+bagtable;
                                var bagdur = 3+bagtable;
                                var bagdurdmg = 4+bagtable;
                                crystalnames[checkresult]= getname;
                                if(Gamedata.sys_crystalset_dataset[table]!=0){getmini=Math.round(Gamedata.sys_crystalset_dataset[table]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_crystalset_dataset[table])};
                                crystaldata[bagtable]= getrandom;
                                if(Gamedata.sys_crystalset_dataset[num]!=0){getmini=Math.round(Gamedata.sys_crystalset_dataset[num]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_crystalset_dataset[num])};
                                crystaldata[bagphy]= getrandom;
                                if(Gamedata.sys_crystalset_dataset[num2]!=0){getmini=Math.round(Gamedata.sys_crystalset_dataset[num2]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_crystalset_dataset[num2])};
                                crystaldata[bagper]= getrandom;
                                if(Gamedata.sys_crystalset_dataset[num3]!=0){getmini=Math.round(Gamedata.sys_crystalset_dataset[num3]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_crystalset_dataset[num3])}
                                crystaldata[bagdur]= getrandom;
                                User.Ary_Crystalnames = crystalnames.join("<:>");
                                User.Ary_Crystaldata = crystaldata.join("<:>");
                                monsterdefeatembed.addField(":gem: "+getname,"1");
                            }
                            else{
                                monsterdefeatembed.addField(":x: You do not have enough bag space to obtain anymore crystals","To make more room, equip a crystal or gem")
                            }
                        }
                        else if(Gamedata.sys_gem_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                            var getname = Gamedata.sys_gem_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                            var getcort = Gamedata.sys_gem_names.indexOf(getname);
                           var table = getcort*4;
                            var num=table+1;
                            var num2=table+2;
                            var num3=table+3;
                            var getrandom=0;
                            var getmini;
                            var checkresult = crystalnames.indexOf("");
                            if(checkresult!=-1){
                                var bagtable = 4*checkresult;
                                var bagphy = 1+bagtable;
                                var bagper = 2+bagtable;
                                var bagdur = 3+bagtable;
                                var bagdurdmg = 4+bagtable;
                                crystalnames[checkresult]= getname;
                                if(Gamedata.sys_gemset_dataset[table]!=0){getmini=Math.round(Gamedata.sys_gemset_dataset[table]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_gemset_dataset[table])};
                                crystaldata[bagtable]= getrandom;
                                if(Gamedata.sys_gemset_dataset[num]!=0){getmini=Math.round(Gamedata.sys_gemset_dataset[num]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_gemset_dataset[num])};
                                crystaldata[bagphy]= getrandom;
                                if(Gamedata.sys_gemset_dataset[num2]!=0){getmini=Math.round(Gamedata.sys_gemset_dataset[num2]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_gemset_dataset[num2])};
                                crystaldata[bagper]= getrandom;
                                if(Gamedata.sys_gemset_dataset[num3]!=0){getmini=Math.round(Gamedata.sys_gemset_dataset[num3]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_gemset_dataset[num3])}
                                crystaldata[bagdur]= getrandom;
                                User.Ary_Crystalnames = crystalnames.join("<:>");
                                User.Ary_Crystaldata = crystaldata.join("<:>");
                                monsterdefeatembed.addField(":gem: "+getname,"1");
                            }
                            else{
                                monsterdefeatembed.addField(":x: You do not have enough bag space to obtain anymore crystals","To make more room, equip a crystal or gem")
                            }
                        }
                         else if(Gamedata.sys_sword_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                             var getname = Gamedata.sys_sword_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                             var getcort = Gamedata.sys_sword_names.indexOf(getname);
                             var tablecort =3*getcort;
                             var percent = 1+tablecort;
                             var durdmg = 2+tablecort;
                             var checkresult = equipnames.indexOf("");
                             if(checkresult!=-1){
                                 var bagtable = 5*checkresult;
                                 var bagphy = 1+bagtable;
                                 var bagper = 2+bagtable;
                                 var bagdur = 3+bagtable;
                                 var bagdurdmg = 4+bagtable;
                                 equipnames[checkresult]= getname;
                                 equipmentdata[bagtable]= 1;
                                 equipmentdata[bagphy]= Gamedata.sys_sword_dataset[tablecort];
                                 equipmentdata[bagper]= Gamedata.sys_sword_dataset[percent];
                                 equipmentdata[bagdur]= RandomMinMax(30,100);
                                 equipmentdata[bagdurdmg]= Gamedata.sys_sword_dataset[durdmg];
                                 User.Ary_Equipmentnames = equipnames.join("<:>");
                                 User.Ary_Equipmentdata = equipmentdata.join("<:>");
                                 var displaydrop = Gamedata.sys_sword_dataset[percent]*100;
                                 displaydrop = Math.round(displaydrop);
                                 monsterdefeatembed.addField(":dagger: "+getname,"Atk:"+Gamedata.sys_sword_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]+" ("+User.name+")");
                             }
                             else{
                                 monsterdefeatembed.addField(":x: "+User.name+" do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                             }
                         }
                         else if(Gamedata.sys_wand_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                             var getname = Gamedata.sys_wand_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                             var getcort = Gamedata.sys_wand_names.indexOf(getname);
                             var tablecort =3*getcort;
                             var percent = 1+tablecort;
                             var durdmg = 2+tablecort;
                             var checkresult = equipnames.indexOf("");
                             if(checkresult!=-1){
                                 var bagtable = 5*checkresult;
                                 var bagphy = 1+bagtable;
                                 var bagper = 2+bagtable;
                                 var bagdur = 3+bagtable;
                                 var bagdurdmg = 4+bagtable;
                                 equipnames[checkresult]= getname;
                                 equipmentdata[bagtable]= 2;
                                 equipmentdata[bagphy]= Gamedata.sys_wand_dataset[tablecort];
                                 equipmentdata[bagper]= Gamedata.sys_wand_dataset[percent];
                                 equipmentdata[bagdur]= RandomMinMax(30,100);
                                 equipmentdata[bagdurdmg]= Gamedata.sys_wand_dataset[durdmg];
                                 User.Ary_Equipmentnames = equipnames.join("<:>");
                                 User.Ary_Equipmentdata = equipmentdata.join("<:>");
                                 var displaydrop = Gamedata.sys_wand_dataset[percent]*100;
                                 displaydrop = Math.round(displaydrop);
                                 monsterdefeatembed.addField(":magic_wand: "+getname,"Atk:"+Gamedata.sys_wand_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]+" ("+User.name+")");
                             }
                             else{
                                 monsterdefeatembed.addField(":x: "+User.name+" do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                             }
                         }
                         else if(Gamedata.sys_bow_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                             var getname = Gamedata.sys_bow_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                             var getcort = Gamedata.sys_bow_names.indexOf(getname);
                             var tablecort =3*getcort;
                             var percent = 1+tablecort;
                             var durdmg = 2+tablecort;
                             var checkresult = equipnames.indexOf("");
                             if(checkresult!=-1){
                                 var bagtable = 5*checkresult;
                                 var bagphy = 1+bagtable;
                                 var bagper = 2+bagtable;
                                 var bagdur = 3+bagtable;
                                 var bagdurdmg = 4+bagtable;
                                 equipnames[checkresult]= getname;
                                 equipmentdata[bagtable]= 3;
                                 equipmentdata[bagphy]= Gamedata.sys_bow_dataset[tablecort];
                                 equipmentdata[bagper]= Gamedata.sys_bow_dataset[percent];
                                 equipmentdata[bagdur]= RandomMinMax(30,100);
                                 equipmentdata[bagdurdmg]= Gamedata.sys_bow_dataset[durdmg];
                                 User.Ary_Equipmentnames = equipnames.join("<:>");
                                 User.Ary_Equipmentdata = equipmentdata.join("<:>");
                                 var displaydrop = Gamedata.sys_bow_dataset[percent]*100;
                                 displaydrop = Math.round(displaydrop);
                                 monsterdefeatembed.addField(":bow_and_arrow: "+getname,"Atk:"+Gamedata.sys_bow_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]+" ("+User.name+")");
                             }
                             else{
                                 monsterdefeatembed.addField(":x: "+User.name+" do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                             }
                         }
                         else if(Gamedata.sys_armor_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                             var getname = Gamedata.sys_armor_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                             var getcort = Gamedata.sys_armor_names.indexOf(getname);
                             var tablecort =3*getcort;
                             var percent = 1+tablecort;
                             var durdmg = 2+tablecort;
                             var checkresult = equipnames.indexOf("");
                             if(checkresult!=-1){
                                 var bagtable = 5*checkresult;
                                 var bagphy = 1+bagtable;
                                 var bagper = 2+bagtable;
                                 var bagdur = 3+bagtable;
                                 var bagdurdmg = 4+bagtable;
                                 equipnames[checkresult]= getname;
                                 equipmentdata[bagtable]= 0;
                                 equipmentdata[bagphy]= Gamedata.sys_armor_dataset[tablecort];
                                 equipmentdata[bagper]= Gamedata.sys_armor_dataset[percent];
                                 equipmentdata[bagdur]= RandomMinMax(30,100);
                                 equipmentdata[bagdurdmg]= Gamedata.sys_armor_dataset[durdmg];
                                 User.Ary_Equipmentnames = equipnames.join("<:>");
                                 User.Ary_Equipmentdata = equipmentdata.join("<:>");
                                 var displaydrop = Gamedata.sys_armor_dataset[percent]*100;
                                 displaydrop = Math.round(displaydrop);
                                 monsterdefeatembed.addField(":coat: "+getname,"Def:"+Gamedata.sys_armor_dataset[tablecort]+" AddDef:"+displaydrop+"\nDurability"+equipmentdata[bagdur]+" ("+User.name+")");
                             }
                             else{
                                 monsterdefeatembed.addField(":x: "+User.name+" do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                             }
                         }
                         else{
                             monsterdefeatembed.addField(":x: Item not found","This will be patched soon");
                    }
                 }
                 itemdropnames = arrayRemove(itemdropnames,itemdropnames[items]);
                 itemdropnums = arrayRemove(itemdropnums,itemdropnums[items]);
             }
             if(itemdropnamesII==[]){itemdropnamesII=itemdropnames;itemdropnumsII=itemdropnums};
                 for(var item = 0; item < 3; item++){
                     var items = RandomMax(itemdropnamesII.length);
                     if(Math.random()<itemdropnumsII[items]){
                        if(itemdropnamesII[items].includes("x")){
                            var splititem = itemdropnamesII[items].split("x");
                            splititem[0].trimEnd();
                            splititem[1].trimStart();
                            itemdropnamesII[items]=splititem[0];
                           var amount=Number(splititem[1]);
                        }
                         if(Gamedata.sys_material_names.some(a=>IgnoringCase(a,itemdropnamesII[items]))){
                             var getname = Gamedata.sys_material_names.find(a=>IgnoringCase(a,itemdropnamesII[items]));
                             var getcort = Gamedata.sys_material_names.indexOf(getname);
                             amount = RandomMinMax(1,amount);
                             getcrot = getcort+=11;
                             if(itembagnamesA[getcort]==""){
                             itembagnamesA[getcort] = getname;}
                             itembagdataA[getcort] += amount;
                             monsterdefeatembed.addField(":moneybag: "+getname," "+amount+" ("+UserII.name+")");
                         }
                         else if(Gamedata.sys_item_names.some(a=>IgnoringCase(a,itemdropnamesII[items]))){
                             var getname = Gamedata.sys_item_names.find(a=>IgnoringCase(a,itemdropnamesII[items]));
                             var getcort = Gamedata.sys_item_names.indexOf(getname);
                             amount = RandomMinMax(1,amount);
                             if(itembagnamesA[getcort]==""){
                             itembagnamesA[getcort] = getname;}
                             itembagdataA[getcort] += amount;
                             monsterdefeatembed.addField(":test_tube: "+getname," "+amount+" ("+UserII.name+")");
                         }
                         else if(Gamedata.sys_crystal_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                            var getname = Gamedata.sys_crystal_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                            var getcort = Gamedata.sys_crystal_names.indexOf(getname);
                           var table = getcort*4;
                            var num=table+1;
                            var num2=table+2;
                            var num3=table+3;
                            var getrandom=0;
                            var getmini;
                            var checkresult = crystalnamesA.indexOf("");
                            if(checkresult!=-1){
                                var bagtable = 4*checkresult;
                                var bagphy = 1+bagtable;
                                var bagper = 2+bagtable;
                                var bagdur = 3+bagtable;
                                var bagdurdmg = 4+bagtable;
                                crystalnamesA[checkresult]= getname;
                                if(Gamedata.sys_crystalset_dataset[table]!=0){getmini=Math.round(Gamedata.sys_crystalset_dataset[table]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_crystalset_dataset[table])};
                                crystaldataA[bagtable]= getrandom;
                                if(Gamedata.sys_crystalset_dataset[num]!=0){getmini=Math.round(Gamedata.sys_crystalset_dataset[num]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_crystalset_dataset[num])};
                                crystaldataA[bagphy]= getrandom;
                                if(Gamedata.sys_crystalset_dataset[num2]!=0){getmini=Math.round(Gamedata.sys_crystalset_dataset[num2]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_crystalset_dataset[num2])};
                                crystaldataA[bagper]= getrandom;
                                if(Gamedata.sys_crystalset_dataset[num3]!=0){getmini=Math.round(Gamedata.sys_crystalset_dataset[num3]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_crystalset_dataset[num3])}
                                crystaldataA[bagdur]= getrandom;
                                UserII.Ary_Crystalnames = crystalnames.join("<:>");
                                UserII.Ary_Crystaldata = crystaldataA.join("<:>");
                                monsterdefeatembed.addField(":gem: "+getname,"1");
                            }
                            else{
                                monsterdefeatembed.addField(":x: You do not have enough bag space to obtain anymore crystals","To make more room, equip a crystal or gem")
                            }
                        }
                        else if(Gamedata.sys_gem_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                            var getname = Gamedata.sys_gem_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                            var getcort = Gamedata.sys_gem_names.indexOf(getname);
                           var table = getcort*4;
                            var num=table+1;
                            var num2=table+2;
                            var num3=table+3;
                            var getrandom=0;
                            var getmini;
                            var checkresult = crystalnamesA.indexOf("");
                            if(checkresult!=-1){
                                var bagtable = 4*checkresult;
                                var bagphy = 1+bagtable;
                                var bagper = 2+bagtable;
                                var bagdur = 3+bagtable;
                                var bagdurdmg = 4+bagtable;
                                crystalnamesA[checkresult]= getname;
                                if(Gamedata.sys_gemset_dataset[table]!=0){getmini=Math.round(Gamedata.sys_gemset_dataset[table]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_gemset_dataset[table])};
                                crystaldataA[bagtable]= getrandom;
                                if(Gamedata.sys_gemset_dataset[num]!=0){getmini=Math.round(Gamedata.sys_gemset_dataset[num]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_gemset_dataset[num])};
                                crystaldataA[bagphy]= getrandom;
                                if(Gamedata.sys_gemset_dataset[num2]!=0){getmini=Math.round(Gamedata.sys_gemset_dataset[num2]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_gemset_dataset[num2])};
                                crystaldataA[bagper]= getrandom;
                                if(Gamedata.sys_gemset_dataset[num3]!=0){getmini=Math.round(Gamedata.sys_gemset_dataset[num3]*0.50);getrandom=RandomMinMax(getmini,Gamedata.sys_gemset_dataset[num3])}
                                crystaldataA[bagdur]= getrandom;
                                UserII.Ary_Crystalnames = crystalnamesA.join("<:>");
                                UserII.Ary_Crystaldata = crystaldataA.join("<:>");
                                monsterdefeatembed.addField(":gem: "+getname,"1");
                            }
                            else{
                                monsterdefeatembed.addField(":x: You do not have enough bag space to obtain anymore crystals","To make more room, equip a crystal or gem")
                            }
                        }
                         else if(Gamedata.sys_sword_names.some(a=>IgnoringCase(a,itemdropnamesII[items]))){
                             var getname = Gamedata.sys_sword_names.find(a=>IgnoringCase(a,itemdropnamesII[items]));
                             var getcort = Gamedata.sys_sword_names.indexOf(getname);
                             var tablecort =3*getcort;
                             var percent = 1+tablecort;
                             var durdmg = 2+tablecort;
                             var checkresult = equipnames.indexOf("");
                             if(checkresult!=-1){
                                 var bagtable = 5*checkresult;
                                 var bagphy = 1+bagtable;
                                 var bagper = 2+bagtable;
                                 var bagdur = 3+bagtable;
                                 var bagdurdmg = 4+bagtable;
                                 equipnamesA[checkresult]= getname;
                                 equipmentdataA[bagtable]= 1;
                                 equipmentdataA[bagphy]= Gamedata.sys_sword_dataset[tablecort];
                                 equipmentdataA[bagper]= Gamedata.sys_sword_dataset[percent];
                                 equipmentdataA[bagdur]= RandomMinMax(30,100);
                                 equipmentdataA[bagdurdmg]= Gamedata.sys_sword_dataset[durdmg];
                                 UserII.Ary_Equipmentnames = equipnamesA.join("<:>");
                                 UserII.Ary_Equipmentdata = equipmentdataA.join("<:>");
                                 var displaydrop = Gamedata.sys_sword_dataset[percent]*100;
                                 displaydrop = Math.round(displaydrop);
                                 monsterdefeatembed.addField(":dagger: "+getname,"Atk:"+Gamedata.sys_sword_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]+" ("+UserII.name+")");
                             }
                             else{
                                 monsterdefeatembed.addField(":x: "+UserII.name+" do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                             }
                         }
                         else if(Gamedata.sys_wand_names.some(a=>IgnoringCase(a,itemdropnamesII[items]))){
                             var getname = Gamedata.sys_wand_names.find(a=>IgnoringCase(a,itemdropnamesII[items]));
                             var getcort = Gamedata.sys_wand_names.indexOf(getname);
                             var tablecort =3*getcort;
                             var percent = 1+tablecort;
                             var durdmg = 2+tablecort;
                             var checkresult = equipnames.indexOf("");
                             if(checkresult!=-1){
                                 var bagtable = 5*checkresult;
                                 var bagphy = 1+bagtable;
                                 var bagper = 2+bagtable;
                                 var bagdur = 3+bagtable;
                                 var bagdurdmg = 4+bagtable;
                                 equipnamesA[checkresult]= getname;
                                 equipmentdataA[bagtable]= 2;
                                 equipmentdataA[bagphy]= Gamedata.sys_wand_dataset[tablecort];
                                 equipmentdataA[bagper]= Gamedata.sys_wand_dataset[percent];
                                 equipmentdataA[bagdur]= RandomMinMax(30,100);
                                 equipmentdataA[bagdurdmg]= Gamedata.sys_wand_dataset[durdmg];
                                 UserII.Ary_Equipmentnames = equipnamesA.join("<:>");
                                 UserII.Ary_Equipmentdata = equipmentdataA.join("<:>");
                                 var displaydrop = Gamedata.sys_wand_dataset[percent]*100;
                                 displaydrop = Math.round(displaydrop);
                                 monsterdefeatembed.addField(":magic_wand: "+getname,"Atk:"+Gamedata.sys_wand_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]+" ("+UserII.name+")");
                             }
                             else{
                                 monsterdefeatembed.addField(":x: "+UserII.name+" do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                             }
                         }
                         else if(Gamedata.sys_bow_names.some(a=>IgnoringCase(a,itemdropnamesII[items]))){
                             var getname = Gamedata.sys_bow_names.find(a=>IgnoringCase(a,itemdropnamesII[items]));
                             var getcort = Gamedata.sys_bow_names.indexOf(getname);
                             var tablecort =3*getcort;
                             var percent = 1+tablecort;
                             var durdmg = 2+tablecort;
                             var checkresult = equipnames.indexOf("");
                             if(checkresult!=-1){
                                 var bagtable = 5*checkresult;
                                 var bagphy = 1+bagtable;
                                 var bagper = 2+bagtable;
                                 var bagdur = 3+bagtable;
                                 var bagdurdmg = 4+bagtable;
                                 equipnamesA[checkresult]= getname;
                                 equipmentdataA[bagtable]= 3;
                                 equipmentdataA[bagphy]= Gamedata.sys_bow_dataset[tablecort];
                                 equipmentdataA[bagper]= Gamedata.sys_bow_dataset[percent];
                                 equipmentdataA[bagdur]= RandomMinMax(30,100);
                                 equipmentdataA[bagdurdmg]= Gamedata.sys_bow_dataset[durdmg];
                                 UserII.Ary_Equipmentnames = equipnamesA.join("<:>");
                                 UserII.Ary_Equipmentdata = equipmentdataA.join("<:>");
                                 var displaydrop = Gamedata.sys_bow_dataset[percent]*100;
                                 displaydrop = Math.round(displaydrop);
                                 monsterdefeatembed.addField(":bow_and_arrow: "+getname,"Atk:"+Gamedata.sys_bow_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]+" ("+UserII.name+")");
                             }
                             else{
                                 monsterdefeatembed.addField(":x: "+UserII.name+" do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                             }
                         }
                         else if(Gamedata.sys_armor_names.some(a=>IgnoringCase(a,itemdropnamesII[items]))){
                             var getname = Gamedata.sys_armor_names.find(a=>IgnoringCase(a,itemdropnamesII[items]));
                             var getcort = Gamedata.sys_armor_names.indexOf(getname);
                             var tablecort =3*getcort;
                             var percent = 1+tablecort;
                             var durdmg = 2+tablecort;
                             var checkresult = equipnames.indexOf("");
                             if(checkresult!=-1){
                                 var bagtable = 5*checkresult;
                                 var bagphy = 1+bagtable;
                                 var bagper = 2+bagtable;
                                 var bagdur = 3+bagtable;
                                 var bagdurdmg = 4+bagtable;
                                 equipnamesA[checkresult]= getname;
                                 equipmentdataA[bagtable]= 0;
                                 equipmentdataA[bagphy]= Gamedata.sys_armor_dataset[tablecort];
                                 equipmentdataA[bagper]= Gamedata.sys_armor_dataset[percent];
                                 equipmentdataA[bagdur]= RandomMinMax(30,100);
                                 equipmentdataA[bagdurdmg]= Gamedata.sys_armor_dataset[durdmg];
                                 UserII.Ary_Equipmentnames = equipnamesA.join("<:>");
                                 UserII.Ary_Equipmentdata = equipmentdataA.join("<:>");
                                 var displaydrop = Gamedata.sys_armor_dataset[percent]*100;
                                 displaydrop = Math.round(displaydrop);
                                 monsterdefeatembed.addField(":coat: "+getname,"Def:"+Gamedata.sys_armor_dataset[tablecort]+" AddDef:"+displaydrop+"\nDurability"+equipmentdata[bagdur]+" ("+UserII.name+")");
                             }
                             else{
                                 monsterdefeatembed.addField(":x: "+UserII.name+" do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                             }
                         }
                         else{
                             monsterdefeatembed.addField(":x: Item not found","This will be patched soon");
                    }
                 }
                 itemdropnamesII = arrayRemove(itemdropnamesII,itemdropnamesII[items]);
                 itemdropnumsII = arrayRemove(itemdropnumsII,itemdropnumsII[items]);
             };
             var checkmonster = Number(temdatanumbers[9].toString().charAt(0));
             if(checkmonster>19&temdatanumbers[46]==1){
                var getskill = [];
                var theskill="";
                for(var skillsetm=0;skillsetm<3;skillsetm++){
                var set=skillsetm+1;
                if(temdatanames[set]!=""){
                    getskill[skillsetm]= temdatanames[set];
                }else break;
                    }
                theskill= getskill[RandomMax(getskill.length)];
                if(!skillslearned.includes(theskill)&temdatanumbers[46]==1){
                    skillslearned[skillslearned.length] =theskill;
                    User.skillslearned = skillslearned.join("<:>");
                    monsterdefeatembed.addField(":ledger: "+User.name+" have Learned `"+theskill+"`!","command: `skill tree` for full decription");
                }
               else if(!skillslearnedA.includes(theskill)){
                    skillslearnedA[skillslearnedA.length] =theskill;
                    UserII.skillslearned = skillslearnedA.join("<:>");
                    monsterdefeatembed.addField(":ledger: "+UserII.name+" have Learned `"+theskill+"`!","command: `skill tree` for full decription");
                }
                }
             if(kepname==Gamedata.sys_monsternames_boss[9]&temdatanumbers[46]==1){
            profiledata[8]=1; profilenames[8]="Master Key"; monsterdefeatembed.addField("Master Key ("+User.name+")",1);monsterdefeatembed.setFooter("Congratulations\nYou have beaten part I of the game!\nYou can now use the Master Key to go on any floor.\nCommand: -floor < number >\nTo replay from the start again\nCommand: -restart\nGo to the Basement to continue Part II")}
            else if(kepname==Gamedata.sys_monsternames_boss[9]&temdatanumbersA[46]==1){
            profiledataA[8]=1; profilenamesA[8]="Master Key"; monsterdefeatembed.addField("Master Key ("+UserII.name+")",1);monsterdefeatembed.setFooter("Congratulations\nYou have beaten part I of the game!\nYou can now use the Master Key to go on any floor.\nCommand: -floor < number >\nTo replay from the start again\nCommand: -restart\nGo to the Basement to continue Part II")}
            else if(kepname==Gamedata.sys_monsternames_bossA[2]&temdatanumbers[46]==1){monsterdefeatembed.setFooter("Congratulations\nYou have beaten part II of the game!\nNew Side Stories coming soon!\n`stories`\nThanks for playing!").setFooter("`Restart` `Floor <number>`")}
            else if(kepname==Gamedata.sys_monsternames_bossA[2]&temdatanumbersA[46]==1){monsterdefeatembed.setFooter("Congratulations\nYou have beaten part II of the game!\nNew Side Stories coming soon!\n`stories`\nThanks for playing!").setFooter("`Restart` `Floor <number>`")};
             if(monstertype==3&temdatanumbers[46]==1){hh3funset1[9]++;User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>")}
             else if(monstertype==3&temdatanumbersA[46]==1){hh3funset1A[9]++;UserII.Ary_HH3FunctionSet1 = hh3funset1A.join("<:>")};
             User.Ary_HH3ProfileNames= profilenames.join("<:>");
             User.Ary_HH3ProfileData = profiledata.join("<:>");
             User.Ary_Equipmentnames = equipnames.join("<:>");
             User.Ary_Equipmentdata = equipmentdata.join("<:>");
             User.Ary_itembagnames = itembagnames.join("<:>");
             User.Ary_itembagdata = itembagdata.join("<:>");
             UserII.Ary_HH3ProfileNames= profilenamesA.join("<:>");
             UserII.Ary_Equipmentnames = equipnamesA.join("<:>");
             UserII.Ary_Equipmentdata = equipmentdataA.join("<:>");
             UserII.Ary_itembagnames = itembagnamesA.join("<:>");
             UserII.Ary_itembagdata = itembagdataA.join("<:>");
             if(defeatimg=="")defeatimg=Imgset[1];
             monsterdefeatembed.setAuthor(defeatxt,defeatimg);
         }
         if(hh3funset1[16]>0)User.Skillenergy=0;
         var victory = false;
         if(temdatanumbers[0]<=0&temdatanumbers[32]<=0)victory=true;
         if(profilenames[1]!=""&profiledata[3]<4&profiledata[3]>0&!herotxt.includes("fled")&heroatkcrit.some(a=>a>0)||profilenames[2]!=""&profiledata[14]==0&!herotxt.includes("fled")&foeatkcrit>0){
            var wepdmg = profiledata[7];
            var armdmg = profiledata[11];
            if(profilenames[1]!=""&profiledata[3]<10&profiledata[6]>0){profiledata[6]-=wepdmg;}
            else if(profilenames[1]!=""&profiledata[3]<4&profiledata[3]>0){
                warnembed.setColor("#FFFE00");
                warnembed.setDescription(":warning: "+ profilenames[1]+" has been broken\nTo repair command: -repair (You can use this command outside of combat)");
                profiledata[3]+=10;
                profiledata[6]=0;
                message.channel.send(warnembed);
            }
            if(profilenames[2]!=""&profiledata[14]!=10&profiledata[10]>0){profiledata[10]-=armdmg;}
            else if(profilenames[2]!=""&profiledata[14]==0){
                warnembed2.setColor("#FFFE00");
                warnembed2.setDescription(":warning: "+ profilenames[2]+" has been broken\nTo repair command: -repair (You can use this command outside of combat)");
                profiledata[14]=10;
                profiledata[10]=0;
                message.channel.send(warnembed2);
            }
        }
    if(temdatanumbers[54]!=temdatanumbers[47]&teamdefeated==false&victory==false&User.CombatMode==2&UserII.CombatMode==2){
    if(User.HP==0&temdatanumbers[46]==1)temdatanumbersA[57]--;
    else if(User.HP==0&temdatanumbers[46]==2)temdatanumbersA[58]--;
    else if(UserII.HP==0&temdatanumbersA[46]==1)temdatanumbersA[57]--;
    else if(UserII.HP==0&temdatanumbersA[46]==2)temdatanumbersA[58]--;
    if(User.HP==0&temdatanumbers[46]==1&temdatanumbersA[57]==0&temdatanumbers[57]>0||User.HP==0&temdatanumbers[46]==2&temdatanumbersA[58]==0&temdatanumbers[58]>0){
        User.HP=Math.round(User.MaxHP/2);
        heroembed.addField(":sparkling_heart: "+User.name+" have revive","recover 50% of their HP");
     }
    else if(UserII.HP==0&temdatanumbersA[46]==1&temdatanumbersA[57]==0||UserII.HP==0&temdatanumbersA[46]==2&temdatanumbersA[58]==0){
         UserII.HP=Math.round(UserII.MaxHP/2);
        heroembed.addField(":sparkling_heart: "+UserII.name+" have revive","recover 50% of their HP");
        }
                if(temdatanumbers[20]>0){
                    temdatanumbers[20]--;
                    herospd+= Gamedata.sys_potion_effect[2];
                    if(temdatanumbers[20]==0){
                        extraembed.setColor("#FFFE00");
                        extraembed.addField(":clock1:",User.name+"'s Speed potion effects has run out");
                        extraembedkey=true;
                        }
                            }
                            if(temdatanumbers[49]>0){
                                temdatanumbers[49]--;
                                herospd+= Gamedata.sys_potion_effect[2];
                                if(temdatanumbers[49]==0){
                                    extraembed.setColor("#FFFE00");
                                    extraembed.addField(":clock1:",UserII.name+"'s Speed potion effects has run out");
                                    extraembedkey=true;
                                }
                            }
                            herospd+=temdatanumbers[14];
                            herospd-=temdatanumbers[15];
                            herospd+=temdatanumbersA[14];
                            herospd-=temdatanumbersA[15];
                            if(monstercheatype==1&profiledata[15]==5){
                                herospd-=0.10
                                if(herospd<0)herospd=0;
                                profiledata[15]=0;
                            }
                            if(monstercheatype==1&profiledataA[15]==5){
                                herospdII-=0.10
                                if(herospdII<0)herospdII=0;
                                profiledataA[15]=0;
                            }
                            if(monstercheatype==7){
                                herospd-=0.20
                                herospdII-=0.20
                                if(herospd<0)herospd=0;
                                if(herospdII<0)herospdII=0;
                            }
                            for(var sp = 0; sp<6;sp++){
                                if(Math.random()<herospd){
                                    if(sp>=5){
                                        herospkey+=3;
                                    }
                                    else{
                                        herospkey+=sp;
                                    }
                                }
                                if(Math.random()<herospdII){
                                    if(sp>=5){
                                        herospkeyII+=3;
                                    }
                                    else{
                                        herospkeyII+=sp;
                                    }
                                }
                            }
                            if(herospkey==herospkeyII){
                                var picked = RandomMinMax(1,2);
                                if(picked==1){herospkey++}
                               else if(picked==2){herospkeyII++};
                            }
                            if(herospkey>herospkeyII){temdatanumbersA[47]=temdatanumbers[46];temdatanumbersA[54]=temdatanumbersA[47];}
                                      else if(herospkey<herospkeyII) {temdatanumbersA[47]=temdatanamesA[46];temdatanumbersA[54]=temdatanumbersA[47];}
                                      else{var sd = RandomMax(temdatanumbers[46],temdatanumbersA[46]);temdatanumbersA[47]=sd;temdatanumbersA[54]=temdatanumbersA[47];}
                                      if(temdatanumbersA[57]>1)temdatanumbersA[47]=2;temdatanumbersA[54]=temdatanumbersA[47];
                                      if(temdatanumbersA[58]>1)temdatanumbersA[47]=1;temdatanumbersA[54]=temdatanumbersA[47];
                                      temdatanumbersA[52]=0;
                                      temdatanumbersA[53]=0;
                        if(temdatanumbersA[47]==temdatanumbersA[46]) heroembed.addField("Turn","`"+UserII.name+"`"); else heroembed.addField("Turn","`"+User.name+"`");
                        }
                       else if(temdatanumbers[54]==temdatanumbers[47]&temdatanumbersA[57]==0&temdatanumbersA[58]==0&teamdefeated==false&victory==false&User.CombatMode==2&UserII.CombatMode==2){
                            temdatanumbersA[54]= temdatanumbersA[46];
                            temdatanumbersA[52] = temdatanumbers[52];
                            temdatanumbersA[53] = temdatanumbers[53];heroembed.addField("Turn","`"+User.multiname+"`");}
                            else if(temdatanumbers[54]==temdatanumbers[47]&temdatanumbersA[57]>0&teamdefeated==false&victory==false&User.CombatMode==2&UserII.CombatMode==2||
                                temdatanumbers[54]==temdatanumbers[47]&temdatanumbersA[58]>0&teamdefeated==false&victory==false&User.CombatMode==2&UserII.CombatMode==2){
                            temdatanumbersA[52] = temdatanumbers[52];
                            temdatanumbersA[53] = temdatanumbers[53];
                                if(temdatanumbersA[57]>1)temdatanumbersA[47]=2;temdatanumbersA[54]=temdatanumbersA[47];
                                if(temdatanumbersA[58]>1)temdatanumbersA[47]=1;temdatanumbersA[54]=temdatanumbersA[47];
                            }
                            if(teamdefeated==false&victory==false){
                        temdatanumbersA[0] = temdatanumbers[0];
                        temdatanumbersA[12] = temdatanumbers[46];
                        temdatanumbersA[13] = temdatanumbers[13];
                        temdatanumbersA[20] = temdatanumbers[49];
                        temdatanumbersA[32] = temdatanumbers[32];
                        temdatanumbersA[33] = temdatanumbers[33];
                        temdatanumbersA[49] = temdatanumbers[20];
                        temdatanumbersA[50] = foespdkey;
                        temdatanumbersA[51] = foespdkeyII;
                        UserII.Ary_HH3ProfileData = profiledataA.join("<:>");
                        UserII.TemdataNumbers = temdatanumbersA.join("<:>");
                          if(temdatanumbers[54]!=temdatanumbers[47]){
                          temdatanumbers[52] = temdatanumbersA[52];
                          temdatanumbers[53] = temdatanumbersA[53];
                          temdatanumbers[57] = temdatanumbersA[57];
                          temdatanumbers[58] = temdatanumbersA[58];
                          temdatanumbers[47] = temdatanumbersA[47];
                        };
                        if(temdatanumbers[47]!=temdatanumbersA[47])temdatanumbers[47]=temdatanumbersA[47];
                          temdatanumbers[54]= temdatanumbersA[54];
                          User.Ary_HH3ProfileData = profiledata.join("<:>");
                          User.TemdataNumbers = temdatanumbers.join("<:>");}
                          User.save().catch(err => console.log(err));
                          UserII.save().catch(err => console.log(err));
                        message.channel.send(heroembed);
                        if(extraembedkey==true)message.channel.send(extraembed);
                        if(foecheatxt!=undefined)message.channel.send(monstercheatembed);
                        if(foeffect!=undefined)message.channel.send(monstereffectembed);
                        if(mdefeated==true) message.channel.send(monsterdefeatembed);
    }
    else{
    warnembed.setDescription(":x: you can only use act with attack, defend, skill <skill name>, potion, or flee")
    message.channel.send(warnembed);
        }
                    });});}else return message.channel.send(warnembed.setDescription(":x: You are not in combat"))
}
module.exports.key = {
    name: "act_multi",
    description: "battle in multi."
}