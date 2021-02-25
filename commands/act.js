const Discord = require('discord.js');
const Gamedata = require('../data/hh3data.json');
module.exports.run = async (message, arg, User) => {
    // temnum : [11] heroatkper [12] speed increase by [13] monster status effect [14] blank [15] speed decrease by [16] hero def decrease by
    // [17] defper [18] critical timer [19] defense timer [20] speed timer [21] hero's acy decreased by [22] critical rate increase by [23] boss cheat check
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
    var temdatanames = User.TemdataNames.split("<:>");
    var profilenames = User.Ary_HH3ProfileNames.split("<:>");
    var equipnames = User.Ary_Equipmentnames.split("<:>");
    var itembagnames = User.Ary_itembagnames.split("<:>");
    var Imgset = User.Ary_Imgset.split("<:>");
    var rawtemdatanumbers= User.TemdataNumbers.split("<:>");
      var temdatanumbers = [];
      for(var index=0; index<rawtemdatanumbers.length;index++){
        temdatanumbers[index]= Number(rawtemdatanumbers[index])
      }
      var rawprofiledata = User.Ary_HH3ProfileData.split("<:>");var profiledata = [];
    for(var index=0; index<rawprofiledata.length;index++){
        profiledata[index]= Number(rawprofiledata[index])
    }
    var rawequipmentdata = User.Ary_Equipmentdata.split("<:>");var equipmentdata = [];
    for(var index=0; index<rawequipmentdata.length;index++){
        equipmentdata[index]= Number(rawequipmentdata[index])
    }
    var rawitembagdata = User.Ary_itembagdata.split("<:>");var itembagdata = [];
    for(var index=0; index<rawitembagdata.length;index++){
        itembagdata[index]= Number(rawitembagdata[index])
    }
    var rawhh3funset1 = User.Ary_HH3FunctionSet1.split("<:>");
      var hh3funset1 = [];
      for(var index=0; index<rawhh3funset1.length;index++){
          hh3funset1[index]= Number(rawhh3funset1[index])
      }
      var rawdata = User.Metadata.split("<:>");var mdata = [];
    for(var index=0; index<rawdata.length;index++){
        mdata[index]= Number(rawdata[index])
    }
    function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    const heroembed = new Discord.MessageEmbed();
    const monstercheatembed = new Discord.MessageEmbed();
    const monstereffectembed = new Discord.MessageEmbed();
    const heroeffectembed = new Discord.MessageEmbed();
    const warnembed = new Discord.MessageEmbed();
    const warnembed2 = new Discord.MessageEmbed();
    const extraembed = new Discord.MessageEmbed();
    const herodefeatembed = new Discord.MessageEmbed();
    const monsterdefeatembed = new Discord.MessageEmbed();
    heroembed.setColor(User.colortheme);
    herodefeatembed.setColor(User.colortheme);
    monstercheatembed.setColor("#FF0000");
    monsterdefeatembed.setColor("#FF0000");
    warnembed.setColor("#FFFE00");
    warnembed2.setColor("#FFFE00")
    arg = arg.toLowerCase();
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
    var foetxt;
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
    var skillnums=0;
    var skillname="";
    var skillcost =0;
    var skillkey = false;
    var displayper;
    var foeatkey = true;
    var heroeftkey = false;
    var itemdropnames = [];
    var itemdropnums = [];
    var exp;
    var currency;
    var effects = "";
    if(User.CombatMode>0){
        if(User.HP>0){
    if(User.CombatMode==1){
        var extraembedkey=false;
        if(temdatanumbers[10]>0.0){
            // add monster effect
            var intstring = temdatanumbers[10].toString();
            var monstercheatype = intstring.charAt(0);
            var monstereffectype = intstring.charAt(2);
            monstercheatype = Number(monstercheatype);
            monstereffectype = Number(monstereffectype);
                if(profiledata[15]==-1){
                herospd-=0.20;
                profiledata[15]=0;
                }
        }
        //Hero or Foe turn
        if(temdatanumbers[20]>0){
            temdatanumbers[20]--;
            herospd+= Gamedata.sys_potion_effect[2];
            if(temdatanumbers[20]==0){
                extraembed.setColor("#FFFE00");
                extraembed.addField(":clock1:","Speed potion effects has run out");
                extraembedkey=true;
            }
        }
        herospd+=temdatanumbers[12];
        herospd-=temdatanumbers[15];
        if(monstercheatype==1&profiledata[15]==5){
            herospd-=0.10
            if(herospd<0)herospd=0;
            profiledata[15]=0;
        }
       else if(monstercheatype==7){
            herospd-=0.20
            if(herospd<0)herospd=0;
        }
        for(var sp = 0; sp<6;sp++){
            if(Math.random()<herospd){
                if(sp>=5){
                    herospkey+=3;
                }
                else{
                    herospd+=sp;
                }
            }
            if(Math.random()<foespd){
                if(sp>=5){
                   foespdkey+=3;
                }
                else{
                    foespdkey+=sp;
                }
            }
        }
        if(herospkey==foespdkey){
            var picked = RandomMinMax(1,2);
            if(picked==1){herospkey++}
           else if(picked==2){foespdkey++};
        }
        //Monster AI
        if(Math.random()<temdatanumbers[8]){
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
        var o = foephyatk/2;
        var oa = 52 - o; o = oa/100;
        oa = o * foephyatk; o = foephyatk-oa;
        var tem = Math.round(o);
        foephyatk = RandomMinMax(tem,foephyatk);}
        else{
            foeatkcrit=0;
            foephyatk=0;
        }
    }
    else if(User.CombatMode==2){
        //player 2 status update
    }
    if( temdatanumbers[18]>0){
        temdatanumbers[18]--;
    }
    if(profiledata[15]!=2){
        if(arg.includes("skill")&!arg.includes("potion")&arg!="skill"){
        // use skills
        var type = arg.split("skill");
        type[1] = type[1].trimStart().trimEnd();
        var skillname = Gamedata.sys_skill_names.find(a=>IgnoringCase(a,type[1]))
        var skildex = Gamedata.sys_skill_names.indexOf(skillname);
        var getweptype = profiledata[3]-1;
        var sktype = 3*getweptype;
        var skilcompare= [];
        skilcompare[0] = sktype;
        skilcompare[1] = 1+sktype;
        skilcompare[2] = 2+sktype;
        skillnums = Gamedata.sys_skill_data[skildex];
        skillcost = Gamedata.sys_skill_data1[skildex];
        if(skilcompare.some(a=>a==skildex)&!profilenames[1].includes("Stick")){
            if(User.Skillenergy>=skillcost){
            skillkey = true;
            if(skillcost==1){
                 displayper = skillnums*100;
                 displayper = Math.round(displayper);
                herotxt= User.name+" uses "+skillname+"\n";
            }}
            else{
                herotxt = ":x: You do not have SkillEnergy to use this skill";
            }
        }
        else{
            herotxt = ":x: You do not have the weapon requird to use this";
        }
        }
    if(arg=="attack"&!arg.includes("potion")||skillkey==true&!arg.includes("potion")&skillcost>1){
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
                hand = 3;
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
                }
                var addmg = profiledata[5]*heroatk[a];
                addmg = heroatk[a]+addmg;
                addmg = Math.round(addmg);
                addmg2 = temdatanumbers[16]*addmg;
                addmg = addmg+addmg2+profiledata[16];
                heroatk[a] = Math.round(addmg);
                var o = heroatk[a]/2;
                var oa = 52 - o; o = oa/100;
                oa = o * heroatk[a]; o = heroatk[a]-oa;
                var tem = Math.round(o);
                if(skillkey==true&heroatkcrit[a]>0){
                var rawdmg = tem+skillnums;
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
        if(profiledata[3]==1){
            if(herospkey>foespdkey){
            temdatanumbers[17] = Gamedata.sys_combat_def[0];
            var tem = temdatanumbers[17]*100;
            tem= Math.round(tem);
            }
            else{
                defendload = Gamedata.sys_combat_def[0];
                var tem = defendload*100;
                tem= Math.round(tem);
            }
            herotxt = User.name+" has defend\n:shield: "+tem+"%";
        }
        else if(profiledata[3]==2){
           if(temdatanumbers[17]<=0.6){
               if(temdatanumbers[17]>0.3){
               if(Skillenergy>0){
            if(herospkey>foespdkey){
                User.Skillenergy--;
                temdatanumbers[17] = Gamedata.sys_combat_def[1];
                var tem = temdatanumbers[17]*100;
                tem= Math.round(tem);
                }
                else{
                    User.Skillenergy--;
                    defendload = Gamedata.sys_combat_def[1];
                    var tem = defendload*100;
                    tem= Math.round(tem);
                }
                herotxt = User.name+" has defend\n+:shield: "+tem+"%";
            }
            else{
                herotxt = ":x: You need skill energy to strengthen defense further";
            }
            }
            else{
                if(herospkey>foespdkey){
                    temdatanumbers[17] = Gamedata.sys_combat_def[1];
                    var tem = temdatanumbers[17]*100;
                    tem= Math.round(tem);
                    }
                    else{
                        defendload = Gamedata.sys_combat_def[1];
                        var tem = defendload*100;
                        tem= Math.round(tem);
                    }
                    herotxt = User.name+" has defend\n+:shield: "+tem+"%";
                }
            }
            else{
                herotxt = ":shield: Your defense has reached max";
            }
            }
           else{
                if(herospkey>foespdkey){
                temdatanumbers[17] = Gamedata.sys_combat_def[2];
                var tem = temdatanumbers[17]*100;
                tem= Math.round(tem);
                }
                else{
                    defendload = Gamedata.sys_combat_def[2];
                    var tem = defendload*100;
                    tem= Math.round(tem);
                }
                herotxt = User.name+" has defend\n:shield: "+tem+"%";
            }
            
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
                herotxt = User.name+" has fled from"+temdatanames[0]+"\n-**"+chance+"** steps";
            }
            else{
                herotxt = User.name+" **cannot escape**";
            }
        }}
        else{temkey = profiledata[15];profiledata[15]=0;herotxt=":zap: You are stunned\ntry act command again."}
        if(arg!=""&herotxt!=undefined){
            if(User.HP>0&temkey!=2){
                if(arg.includes("attack")||skillkey==true&skillcost>1){
                    for(var atkdex =0; atkdex<heroatk.length;atkdex++){
                        if(temdatanumbers[13]==3){
                            defeffected = temdatanumbers[5]*.50;
                            temdatanumbers[5]-=defeffected
                        }
                        var newatk = temdatanumbers[5]*heroatk[atkdex];
                        newatk = heroatk[atkdex]-=newatk;
                        newatk = Math.round(newatk);
                        if(temdatanumbers[11]<0){
                            var newatk3 = temdatanumbers[11]*newatk;
                            newatk = newatk-=newatk3;
                            newatk = Math.round(newatk);
                        }
                        else if(temdatanumbers[11]>0){
                            var newatk3 = temdatanumbers[11]*newatk;
                            newatk = newatk+=newatk3;
                            newatk = Math.round(newatk);
                        }
                        newatk= newatk-=temdatanumbers[4];
                        if(newatk<0)newatk=0;
                        if(monstercheatype==9&&herospkey<foespdkey&Math.random()<0.20){ effects=":warning: Your Attack has fallen into the void\n";newatk=0;}
                        newatk= Math.round(newatk);
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
                    else if(arg.includes("attack")){
                        herotxt= User.name+" attack"+herotxteft
                    }
                    else if(skillkey==true){
                        if(skillcost>1&herotxteft.includes(":boom:")){
                        herotxt = User.name+" uses "+skillname+herotxteft;
                    }
                    else if(skillcost>1){
                        herotxt = User.name+" uses "+skillname+herotxteft;
                    }
                    else{
                        herotxt = User.name+" uses "+skillname+"\nyour has increased"+skillnums+"%";
                    }
                    }
                }
            }
            if(User.CombatMode==1& temdatanumbers[0]>0){
                if(monstercheatype==7){
                    defeffected= profiledata[9]*.30;
                    profiledef = profiledef-= defeffected;
                 }
                var profiledef = profiledata[9];
                if(profiledata[15]==3){
                   defeffected= profiledata[9]*.50;
                   profiledef = profiledef-= defeffected;
                }
                var netatk = foephyatk*temdatanumbers[17];
                netatk = foephyatk-=netatk;
                netatk= Math.round(netatk);
               var netatk2 = profiledef*netatk;
               netatk = netatk-=netatk2;
               netatk=Math.round(netatk-profiledata[8]);
               if(foeattack<0)foeattack=0;
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
               if(foeatkcrit==2){
               foetxt= temdatanames[0]+" attack with critical!\n**"+foeattack+"**:boom: dmg";}
               else if(foeatkcrit==1){
                foetxt= temdatanames[0]+" attack\n**"+foeattack+"** dmg";
               }
               else if(foeatkcrit==0){
                foetxt= temdatanames[0]+" attack\nbut **Missed**";
               }
            }
                if(herospkey>foespdkey){
                    // hero turn
                    if(profiledata[3]==1){
                        if(defendload==0){
                        temdatanumbers[17]==0;}
                        else{
                            temdatanumbers[17]=defendload;
                        }
                    }
                    if(profiledata[3]==3){
                        if(defendload==0){
                            temdatanumbers[17]==0;}
                            else{
                                temdatanumbers[17]=defendload;
                            }
                    }
                    if(arg.includes("skill")&skillkey==true){
                        if(User.CombatMode==1){
                            if(skillcost>1){
                            temdatanumbers[0]-= attack;
                            if(mdata[6]<attack){
                                mdata[6]=attack;
                                User.Metadata = mdata.join("<:>");
                            }
                            User.Skillenergy -= skillcost;
                            for(var skilcount = 0;skilcount<heroatkcrit.length;skilcount++){
                            if(heroatkcrit[skilcount]>0){
                                if(skillname==Gamedata.sys_skill_names[0]&temdatanumbers[13]==0){
                                    if(Math.random()<Gamedata.sys_skill_data2[0]){
                                        //monster defense decreases
                                        temdatanumbers[13]=3;
                                        heroeffectembed.setColor("#FFFE00");
                                        heroeffectembed.setDescription(":shield: "+temdatanames[0]+" defense has defeased!");
                                        heroeftkey = true;
                                    }
                                }
                                else if(skillname==Gamedata.sys_skill_names[2]&temdatanumbers[13]==0){
                                    if(Math.random()<Gamedata.sys_skill_data2[1]){
                                       // stun
                                       temdatanumbers[13] = 2;
                                       User.Skillenergy++;
                                       if(User.Skillenergy>User.Maxskillenergy) User.Skillenergy=User.Maxskillenergy;
                                       heroeffectembed.setColor("#FFFE00");
                                        heroeffectembed.setDescription(":zap: "+temdatanames[0]+" has been stunned!");
                                        heroeftkey = true;
                                    }
                                }
                                else if(skillname==Gamedata.sys_skill_names[3]&temdatanumbers[13]==0){
                                    if(Math.random()<Gamedata.sys_skill_data2[2]){
                                         //monster defense decreases
                                         temdatanumbers[13]=3;
                                        heroeffectembed.setColor("#FFFE00");
                                        heroeffectembed.setDescription(":shield: "+temdatanames[0]+" defense has defeased!");
                                        heroeftkey = true;
                                    }
                                }
                                else if(skillname==Gamedata.sys_skill_names[5]&temdatanumbers[13]==0){
                                    if(Math.random()<Gamedata.sys_skill_data2[3]){
                                        // curruption
                                        temdatanumbers[13] = 4;
                                        temdatanumbers[11]-= 0.05;
                                        heroeffectembed.setColor("#0F0F0F");
                                        heroeffectembed.setDescription(":broken_heart: "+temdatanames[0]+" has been corrupted!");
                                        heroeftkey = true;
                                    }
                                }
                                else if(skillname==Gamedata.sys_skill_names[6]&temdatanumbers[13]==0){
                                    if(Math.random()<Gamedata.sys_skill_data2[4]){
                                        // poison
                                        temdatanumbers[13] = 1;
                                        heroeffectembed.setColor("#01FF00");
                                        heroeffectembed.setDescription(":green_heart: "+temdatanames[0]+" has been poisoned!");
                                        heroeftkey = true;
                                    }
                                }
                                else if(skillname==Gamedata.sys_skill_names[8]&temdatanumbers[13]==0){
                                    if(Math.random()<Gamedata.sys_skill_data2[5]){
                                        // stun
                                        temdatanumbers[13] = 2;
                                        heroeffectembed.setColor("#FFFE00");
                                        heroeffectembed.setDescription(":zap: "+temdatanames[0]+" has been stunned!");
                                        heroeftkey = true;
                                    }
                                }
                            }}
                        }
                        else{
                            if(skillname==Gamedata.sys_skill_names[1]){
                                if(temdatanumbers[11]<0.25){
                                temdatanumbers[11]+=skillnums;
                                herotxt = herotxt+"AddAtk has increased +"+displayper+"%";
                                User.Skillenergy -= skillcost;}
                                else{
                                    herotxt= herotxt+"AddAtk has maxed out";
                                }
                            }
                           else if(skillname==Gamedata.sys_skill_names[4]){
                            if(temdatanumbers[22]<0.25){
                                temdatanumbers[22]+=skillnums;
                                herotxt = herotxt+"CriticalRate has increased +"+displayper+"%";
                                User.Skillenergy -= skillcost;}
                                else{
                                    herotxt= herotxt+"CriticalRate has maxed out";
                                }
                            }
                            else if(skillname==Gamedata.sys_skill_names[7]){
                                if(temdatanumbers[12]<0.25){
                                temdatanumbers[12]+=skillnums;
                                herotxt = herotxt+"Speed has increased +"+displayper+"%";
                                User.Skillenergy -= skillcost;}
                                else{
                                    herotxt= herotxt+"Speed has maxed out";
                                }
                            }
                        }
                        }
                    }
                   else if(arg=="attack"){
                        if(User.CombatMode==1){
                            temdatanumbers[0]-= attack;
                        }
                        User.Skillenergy++;
                        if(User.Skillenergy>User.Maxskillenergy){
                            User.Skillenergy=User.Maxskillenergy;
                        }
                    }
                    else if(arg=="defend"&profiledata[3]!=2){
                        User.Skillenergy++;
                        if(User.Skillenergy>User.Maxskillenergy){
                            User.Skillenergy=User.Maxskillenergy;
                        }
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
                            }
                            Imgset[1] = "";
                        User.Ary_Imgset = Imgset.join("<:>");
                        User.TemdataNames="";
                        User.TemdataNumbers="";
                        User.CombatMode=0;
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
                    heroembed.setTitle("*"+herotxt+"*");
                    if(temdatanumbers[0]>0&!herotxt.includes("fled")){
                        // monster turn
                        if(temdatanumbers[13]==1){
                            // poison
                            var foepoisoneffect = temdatanumbers[1]*0.08;
                    foepoisoneffect = Math.round(foepoisoneffect);
                   temdatanumbers[0]-=foepoisoneffect;
                effects="\n"+temdatanames[0]+" is poisoned! "+foepoisoneffect+" dmg";
                        }
                        else if(temdatanumbers[13]==4){
                            // stun
                            monstereffectembed.setColor("#FFFE00");
                            foetxt = temdatanames[0]+" is stunned!";
                            temdatanumbers[13]=0;
                            foeatkey = false;
                        }
                        else if(temdatanumbers[13]==4){
                            // corruption
                            var foepoisoneffect = temdatanumbers[1]*0.06;
                    foepoisoneffect = Math.round(foepoisoneffect);
                    temdatanumbers[0]-=foepoisoneffect;
                    effects="\n"+temdatanames[0]+" is corrupted! "+foepoisoneffect+" dmg";
                        }
                        if(foeatkey==true){
                            User.HP-=foeattack;
                            if(User.HP<0) User.HP=0;
                            if(User.HP>User.MaxHP)User.HP = User.MaxHP;
                            if(mdata[7]<foeattack){
                                mdata[7]=foeattack;
                                User.Metadata = mdata.join("<:>");
                            }
                        }
                    heroembed.setDescription("*"+foetxt+"*");
                }
                heroembed.setFooter(effects);
                message.channel.send(heroembed);
                if(heroeftkey==true){
                    message.channel.send(heroeffectembed);
                }
                }
                    else {
                        // monster turn
                        if(temdatanumbers[13]==1){
                            // poison
                            var foepoisoneffect = temdatanumbers[1]*0.08;
                    foepoisoneffect = Math.round(foepoisoneffect);
                   temdatanumbers[0]-=foepoisoneffect;
                   effects=temdatanames[0]+" is poisoned! "+foepoisoneffect+" dmg";
                        }
                        else if(temdatanumbers[13]==2){
                            // stun
                            monstereffectembed.setColor("#FFFE00");
                            foetxt = temdatanames[0]+" is stunned!";
                            temdatanumbers[13]=0;
                            foeatkey = false;
                        }
                        else if(temdatanumbers[13]==4){
                            // corruption
                            var foepoisoneffect = temdatanumbers[1]*0.06;
                    foepoisoneffect = Math.round(foepoisoneffect);
                    temdatanumbers[0]-=foepoisoneffect;
                    effects=temdatanames[0]+" is corrupted! "+foepoisoneffect+" dmg";
                        }
                        if(foeatkey==true){
                            User.HP-=foeattack;
                            if(User.HP<0) User.HP=0;
                            if(User.HP>User.MaxHP)User.HP = User.MaxHP;
                            if(mdata[7]<foeattack){
                                mdata[7]=foeattack;
                                User.Metadata = mdata.join("<:>");
                            }
                        }
                    heroembed.setTitle("*"+foetxt+"*");
                    if(User.HP>0){
                        // hero turn
                        if(profiledata[3]==1){
                            if(defendload==0){
                            temdatanumbers[17]==0;}
                            else{
                                temdatanumbers[17]=defendload;
                            }
                        }
                        if(profiledata[3]==3){
                            if(defendload==0){
                                temdatanumbers[17]==0;}
                                else{
                                    temdatanumbers[17]=defendload;
                                }
                        }
                        if(arg.includes("skill")&skillkey==true){
                            if(User.CombatMode==1){
                                if(skillcost>1){
                                temdatanumbers[0]-= attack;
                                if(mdata[6]<attack){
                                    mdata[6]=attack;
                                    User.Metadata = mdata.join("<:>");
                                }
                                User.Skillenergy -= skillcost;
                                for(var skilcount = 0;skilcount<heroatkcrit.length;skilcount++){
                                if(heroatkcrit[skilcount]>0){
                                    if(skillname==Gamedata.sys_skill_names[0]&temdatanumbers[13]==0){
                                        if(Math.random()<Gamedata.sys_skill_data2[0]){
                                            //monster defense decreases
                                            temdatanumbers[13]=3;
                                            heroeffectembed.setColor("#FFFE00");
                                            heroeffectembed.setDescription(":shield: "+temdatanames[0]+" defense has defeased!");
                                            heroeftkey = true;
                                        }
                                    }
                                    else if(skillname==Gamedata.sys_skill_names[2]&temdatanumbers[13]==0){
                                        if(Math.random()<Gamedata.sys_skill_data2[1]){
                                           // stun
                                           temdatanumbers[13] = 2;
                                           User.Skillenergy++;
                                           if(User.Skillenergy>User.Maxskillenergy) User.Skillenergy=User.Maxskillenergy;
                                           heroeffectembed.setColor("#FFFE00");
                                            heroeffectembed.setDescription(":zap: "+temdatanames[0]+" has been stunned!");
                                            heroeftkey = true;
                                        }
                                    }
                                    else if(skillname==Gamedata.sys_skill_names[3]&temdatanumbers[13]==0){
                                        if(Math.random()<Gamedata.sys_skill_data2[2]){
                                             //monster defense decreases
                                             temdatanumbers[13]=3;
                                            heroeffectembed.setColor("#FFFE00");
                                            heroeffectembed.setDescription(":shield: "+temdatanames[0]+" defense has defeased!");
                                            heroeftkey = true;
                                        }
                                    }
                                    else if(skillname==Gamedata.sys_skill_names[5]&temdatanumbers[13]==0){
                                        if(Math.random()<Gamedata.sys_skill_data2[3]){
                                            // curruption
                                            temdatanumbers[13] = 4;
                                            temdatanumbers[11]-= 0.05;
                                            heroeffectembed.setColor("#0F0F0F");
                                            heroeffectembed.setDescription(":broken_heart: "+temdatanames[0]+" has been corrupted!");
                                            heroeftkey = true;
                                        }
                                    }
                                    else if(skillname==Gamedata.sys_skill_names[6]&temdatanumbers[13]==0){
                                        if(Math.random()<Gamedata.sys_skill_data2[4]){
                                            // poison
                                            temdatanumbers[13] = 1;
                                            heroeffectembed.setColor("#01FF00");
                                            heroeffectembed.setDescription(":green_heart: "+temdatanames[0]+" has been poisoned!");
                                            heroeftkey = true;
                                        }
                                    }
                                    else if(skillname==Gamedata.sys_skill_names[8]&temdatanumbers[13]==0){
                                        if(Math.random()<Gamedata.sys_skill_data2[5]){
                                            // stun
                                            temdatanumbers[13] = 2;
                                            heroeffectembed.setColor("#FFFE00");
                                            heroeffectembed.setDescription(":zap: "+temdatanames[0]+" has been stunned!");
                                            heroeftkey = true;
                                        }
                                    }
                                }}
                            }
                            else{
                                if(skillname==Gamedata.sys_skill_names[1]){
                                    if(temdatanumbers[11]<0.25){
                                    temdatanumbers[11]+=skillnums;
                                    herotxt = herotxt+"AddAtk has increased +"+displayper+"%";
                                    User.Skillenergy -= skillcost;}
                                    else{
                                        herotxt= herotxt+"AddAtk has maxed out";
                                    }
                                }
                               else if(skillname==Gamedata.sys_skill_names[4]){
                                if(temdatanumbers[22]<0.25){
                                    temdatanumbers[22]+=skillnums;
                                    herotxt = herotxt+"CriticalRate has increased +"+displayper+"%";
                                    User.Skillenergy -= skillcost;}
                                    else{
                                        herotxt= herotxt+"CriticalRate has maxed out";
                                    }
                                }
                                else if(skillname==Gamedata.sys_skill_names[7]){
                                    if(temdatanumbers[12]<0.25){
                                    temdatanumbers[12]+=skillnums;
                                    herotxt = herotxt+"Speed has increased +"+displayper+"%";
                                    User.Skillenergy -= skillcost;}
                                    else{
                                        herotxt= herotxt+"Speed has maxed out";
                                    }
                                }
                            }
                            }
                        }
                       else if(arg=="attack"){
                            if(User.CombatMode==1){
                                temdatanumbers[0]-= attack;
                            }
                            User.Skillenergy++;
                            if(User.Skillenergy>User.Maxskillenergy){
                                User.Skillenergy=User.Maxskillenergy;
                            }
                        }
                        else if(arg=="defend"&profiledata[3]!=2){
                            User.Skillenergy++;
                            if(User.Skillenergy>User.Maxskillenergy){
                                User.Skillenergy=User.Maxskillenergy;
                            }
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
                                }
                                Imgset[1] = "";
                            User.Ary_Imgset = Imgset.join("<:>");
                            User.TemdataNames="";
                            User.TemdataNumbers="";
                            User.CombatMode=0;
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
                    heroembed.setDescription("*"+herotxt+"*");
                }
                    heroembed.setFooter(effects);
                    message.channel.send(heroembed);
                    if(heroeftkey==true){
                        message.channel.send(heroeffectembed);
                    }
                }
                if(monstercheatype==1&foeatkcrit>1&temdatanumbers[0]>0){
                    profiledata[15]=-1;
                    monstercheatembed.setColor("#FF0000");
                    foecheatxt =  temdatanames[0]+"'s Ability: `Age of Ruin`\n Your speed has decreased";
                    monstercheatembed.setDescription(foecheatxt);
            }
               else if(monstercheatype==2&heroatkcrit>1&temdatanumbers[0]>0&Math.random()<0.30){
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
                    monstercheatembed.setColor("#FF0000");
                    foecheatxt = temdatanames[0]+"'s Ability: `Warrior's Fury`\n"+temdatanames[0]+"'s attack power has increases\nalso defense has decreases.";
                    monstercheatembed.setDescription(foecheatxt);
                }
                else if(monstercheatype==4& temdatanumbers[13]!=0){
                    temdatanumbers[13]=0;
                    monstercheatembed.setColor("#FF0000");
                    foecheatxt = temdatanames[0]+"'s Ability: `Natural Immunity`\nThis boss status cannot be changed.";
                    monstercheatembed.setDescription(foecheatxt);
                }
                else if(monstercheatype==5& temdatanumbers[0]< temdatanumbers[1]&temdatanumbers[0]<temdatanumbers[23]){
                    temdatanumbers[23] = temdatanumbers[0];
                    var rate = temdatanumbers[1] - temdatanumbers[0];
                    var ratelv = rate/temdatanumbers[1];
                    ratelv = Math.round(ratelv*100);
                    var critrate = ratelv*0.003
                    temdatanumbers[7] = temdatanumbers[7] =critrate;
                }
                else if(monstercheatype==6& temdatanumbers[0]< temdatanumbers[1]&temdatanumbers[0]<temdatanumbers[23]){
                    temdatanumbers[23] = temdatanumbers[0];
                    var rate = temdatanumbers[1] - temdatanumbers[0];
                    var ratelv = rate/temdatanumbers[1];
                    ratelv = Math.round(ratelv*100);
                    var debuffrate = ratelv*0.0012
                    temdatanumbers[15] +=debuffrate;
                    temdatanumbers[21] += debuffrate;
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
                    User.Ary_Imgset = Imgset.join("<:>");
                    monstercheatembed.setTitle("Lich: I have watched you ever since you have enter my home...\nLich: gain power as you progress...\nLich: killed my friends like their monsters...\nLich: You want to leave so bad?\nLich: try to take The Master Key from me!");
                    monstercheatembed.setImage(Imgset[1]);
                    foecheatxt="";
                }
                if(monstereffectype==1&foeatkcrit>0&profiledata[15]==0&Math.random()<0.23&temdatanumbers[0]>0){
                    profiledata[15]=1;
                    monstereffectembed.setColor("#01FF00");
                    monstereffectembed.setDescription(":green_heart: You have been Poisoned!\nYou will take additional dmg each round and your speed decreased");
                    monstereffectembed.setFooter("Tip: You can use a Pure Potion to remove the effects");
                    foeffect="";
                }
               else if(monstereffectype==2&foeatkcrit>0&profiledata[15]==0&Math.random()<0.12&temdatanumbers[0]>0){
                    profiledata[15]=2;
                    monstereffectembed.setColor("#FFFE00");
                    monstereffectembed.setDescription(":zap: You have been Stunned!\nYou must use any act command to fight the stun");
                    foeffect="";
                }
                else if(monstereffectype==3&foeatkcrit>0&profiledata[15]==0&Math.random()<0.15&temdatanumbers[0]>0){
                    profiledata[15]=3;
                    monstereffectembed.setColor("#FFFE00");
                    monstereffectembed.setDescription(":shield: Your Defense has decreased!");
                    foeffect="";
                }
                else if(monstereffectype==4&foeatkcrit>0&profiledata[15]==0&Math.random()<0.20&temdatanumbers[0]>0){
                    profiledata[15]=4;
                    monstereffectembed.setColor("#0F0F0F");
                    monstereffectembed.setDescription(":broken_heart: You have been Corrupted!\nYou will take additional dmg each round and your defense decreased");
                    monstereffectembed.setFooter("Tip: You can use a Pure Potion to remove the effects");
                    foeffect="";
                }
                if(extraembedkey==true){
                    message.channel.send(extraembed);
                }
                if(foecheatxt!=undefined){
                    message.channel.send(monstercheatembed);
                }
                if(foeffect!=undefined){
                    message.channel.send(monstereffectembed);
                }
                if(profilenames[1]!=""&profiledata[3]<4&profiledata[3]>0&!herotxt.includes("fled")&heroatkcrit>0||profilenames[2]!=""&profiledata[14]==0&!herotxt.includes("fled")&foeatkcrit>0){
                    var wepdmg = profiledata[7];
                    var armdmg = profiledata[11];
                    if(profilenames[1]!=""&profiledata[3]<10&profiledata[6]>0){profiledata[6]-=wepdmg;}
                    else if(profilenames[1]!=""){
                        warnembed.setColor("#FFFE00");
                        warnembed.setDescription(":warning: "+ profilenames[1]+" has been broken\nTo repair command: -repair (You can use this command outside of combat)");
                        profiledata[3]+=10;
                        profiledata[6]=0;
                        message.channel.send(warnembed);
                    }
                    if(profilenames[2]!=""&profiledata[14]!=10&profiledata[10]>0){profiledata[10]-=armdmg;}
                    else if(profilenames[2]!=""){
                        warnembed2.setColor("#FFFE00");
                        warnembed2.setDescription(":warning: "+ profilenames[2]+" has been broken\nTo repair command: -repair (You can use this command outside of combat)");
                        profiledata[14]=10;
                        profiledata[10]=0;
                        message.channel.send(warnembed2);
                    }
                }
                User.TemdataNames = temdatanames.join("<:>");
                User.TemdataNumbers = temdatanumbers.join("<:>");
                User.Ary_HH3ProfileData = profiledata.join("<:>");
                if(User.HP<=0){
                    mdata[4]++;
                    User.Metadata = mdata.join("<:>");
                    herodefeatembed.setAuthor(User.name+" has been defeated by "+temdatanames[0],message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }));
                    if(User.Fightagain>0){
                        herodefeatembed.setTitle("Do you wish to continue fighting?\n`cost 20 Energy`\nYou can use this command once daily");
                        herodefeatembed.setDescription("To continue fighting command: `-again`\nYou can use this command `once daily`")
                        herodefeatembed.setFooter("instead your hp will be fully recovered and your floor be reset to begining of current floor or back to the Check Point");
                        User.CombatMode=0;
                        User.HP = User.MaxHP;
                        hh3funset1[10]=1;
                        profiledata[15]=0;
                        User.Ary_HH3ProfileData = profiledata.join("<:>");
                        User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>");
                    }
                    else{
                    User.TemdataNames = "";
                    User.TemdataNumbers = "";
                    User.CombatMode=0;
                    profiledata[15]=0;
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    User.HP = User.MaxHP;
                   var newfix = User.floor-1;
                   var stepamount = 0;
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
                        }
                        else{
                        User.step=floormax-124;
                        if(User.step<=0)User.step=10;
                    }
                    }
                    else if(User.floor==10){
                        var halfloor = floormax -=70;
                        if(User.step>=halfloor){
                        User.step = halfloor;
                        }
                        else{
                        User.step=floormax-279;
                        if(User.step<=0)User.step=10;
                         }
                        }
                    else if(User.floor==3){
                        var halfloor = floormax -=33;
                        if(User.step>=halfloor){
                            User.step = halfloor;
                        }
                        else{
                        User.step-=floormax-69 ;
                        if(User.step<=0)User.step=10;
                    }}
                   else if(User.floor==2){
                    var halfloor = floormax -=30;
                    if(User.step>=halfloor){
                        User.step = halfloor;
                    }
                    else{
                    User.step-=floormax-50;
                    if(User.step<=0)User.step=10;
                }
                if(profilenames[1]==Gamedata.sys_sword_names[0]){
                    profiledata[3] =1;
                    profiledata[6]=100;
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                }
                   };
                    Imgset[1]="";
                    User.Ary_Imgset = Imgset.join("<:>");
                    }
                    message.channel.send(herodefeatembed);
                }
                else if(temdatanumbers[0]<=0&User.CombatMode==1){
                    monsterdefeatembed.setAuthor(temdatanames[0]+" has been defeated", Imgset[1]);
                    var kepname = temdatanames[0];
                    var rawdrop = ""+temdatanumbers[9];
                    var monstertype =Number(rawdrop.charAt(0));
                    var droptier =Number (rawdrop.substring(1));
                    Imgset[1]="";
                    User.Ary_Imgset = Imgset.join("<:>");
                    User.TemdataNames = "";
                    User.TemdataNumbers = "";
                    User.CombatMode=0;
                    mdata[3]++;
                    User.Metadata = mdata.join("<:>");
                    var balance = 0;
                    var expdrop = 0;
                    if(monstertype==1){
                     balance = droptier*6;
                     expdrop = droptier*15;
                    }
                    else if(monstertype==2){
                     balance = droptier*10;
                     expdrop = droptier*26;
                    }
                    else if(monstertype==3){
                     balance = droptier*15;
                     expdrop = droptier*35;
                    }
                    var minbalance = 0.30*balance;
                    var minexpdrop = 0.50*expdrop;
                    minbalance = Math.round(minbalance);
                    minexpdrop = Math.round(minexpdrop);
                    currency = RandomMinMax(minbalance,balance);
                    exp = RandomMinMax(minexpdrop,expdrop);
                    User.exp += exp;
                    User.currency += currency;
                    monsterdefeatembed.setTitle(":gift: Reward");
                    monsterdefeatembed.setDescription("EXP: "+exp+"\nCurrency: "+currency);
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
                    if(monstertype==1&droptier==5){
                        itemdropnames = Gamedata.sys_monsternormaldrop_tier5;
                        itemdropnums = Gamedata.sys_monsternormaldrop_tier4rate;
                    }
                    if(monstertype==1&droptier==6){
                        itemdropnames = Gamedata.sys_monsternormaldrop_tier6;
                        itemdropnums = Gamedata.sys_monsternormaldrop_tier4rate;
                    }
                    if(monstertype==1&droptier==7){
                        itemdropnames = Gamedata.sys_monsternormaldrop_tier7;
                        itemdropnums = Gamedata.sys_monsternormaldrop_tier4rate;
                    }
                    if(monstertype==1&droptier==8){
                        itemdropnames = Gamedata.sys_monsternormaldrop_tier8;
                        itemdropnums = Gamedata.sys_monsternormaldrop_tier4rate;
                    }
                    if(monstertype==1&droptier==9){
                        itemdropnames = Gamedata.sys_monsternormaldrop_tier9;
                        itemdropnums = Gamedata.sys_monsternormaldrop_tier4rate;
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
                        itemdropnums = Gamedata.sys_monsterbossdrop_tier4rate;
                    }
                    if(monstertype==3&droptier==6){
                        itemdropnames = Gamedata.sys_monsterbossdrop_tier6;
                        itemdropnums = Gamedata.sys_monsterbossdrop_tier4rate;
                    }
                    if(monstertype==3&droptier==7){
                        itemdropnames = Gamedata.sys_monsterbossdrop_tier7;
                        itemdropnums = Gamedata.sys_monsterbossdrop_tier4rate;
                    }
                    if(monstertype==3&droptier==8){
                        itemdropnames = Gamedata.sys_monsterbossdrop_tier8;
                        itemdropnums = Gamedata.sys_monsterbossdrop_tier4rate;
                    }
                    if(monstertype==3&droptier==9){
                        itemdropnames = Gamedata.sys_monsterbossdrop_tier9;
                        itemdropnums = Gamedata.sys_monsterbossdrop_tier4rate;
                    }
                        for(var item = 0; item < 3; item++){
                            var items = RandomMax(itemdropnames.length);
                            if(Math.random()<itemdropnums[items]){
                                if(Gamedata.sys_material_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                                    var getname = Gamedata.sys_material_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                                    var getcort = Gamedata.sys_material_names.indexOf(getname);
                                    var amount = RandomMinMax(1,3);
                                    getcrot = getcort+=10;
                                    if(itembagnames[getcort]==""){
                                    itembagnames[getcort] = getname;}
                                    itembagdata[getcort] += amount;
                                    monsterdefeatembed.addField(":moneybag: "+getname," "+amount);
                                }
                                else if(Gamedata.sys_item_names.some(a=>IgnoringCase(a,itemdropnames[items]))){
                                    var getname = Gamedata.sys_item_names.find(a=>IgnoringCase(a,itemdropnames[items]));
                                    var getcort = Gamedata.sys_item_names.indexOf(getname);
                                    var amount = RandomMinMax(1,3);
                                    if(itembagnames[getcort]==""){
                                    itembagnames[getcort] = getname;}
                                    itembagdata[getcort] += amount;
                                    monsterdefeatembed.addField(":test_tube: "+getname," "+amount);
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
                                        monsterdefeatembed.addField(":dagger: "+getname,"Atk:"+Gamedata.sys_sword_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]);
                                    }
                                    else{
                                        monsterdefeatembed.addField(":x: You do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
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
                                        monsterdefeatembed.addField(":magic_wand: "+getname,"Atk:"+Gamedata.sys_wand_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]);
                                    }
                                    else{
                                        monsterdefeatembed.addField(":x: You do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
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
                                        monsterdefeatembed.addField(":bow_and_arrow: "+getname,"Atk:"+Gamedata.sys_bow_dataset[tablecort]+" AddAtk:"+displaydrop+"\nDurability"+equipmentdata[bagdur]);
                                    }
                                    else{
                                        monsterdefeatembed.addField(":x: You do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
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
                                        monsterdefeatembed.addField(":coat: "+getname,"Def:"+Gamedata.sys_armor_dataset[tablecort]+" AddDef:"+displaydrop+"\nDurability"+equipmentdata[bagdur]);
                                    }
                                    else{
                                        monsterdefeatembed.addField(":x: You do not have enough bag space to obtain anymore equipment","To make more room, command: -sell, -discard, -equip <number>")
                                    }
                                }
                                else{
                                    monsterdefeatembed.addField(":x: Item not found","This will be patched soon");
                           }
                        }
                        itemdropnames = arrayRemove(itemdropnames,itemdropnames[items]);
                        itemdropnums = arrayRemove(itemdropnums,itemdropnums[items]);
                    }
                    if(kepname==Gamedata.sys_monsternames_boss[9]){profiledata[2]=1; profilenames[0]="Hunted House Master"; monsterdefeatembed.addField("Master Key",1);monsterdefeatembed.setFooter("Congratulations\nYou have beaten the game.\nYou can now use the Master Key to go on any floor.\nCommand: -floor < number >\nTo replay from the start again\nCommand: -restart\nThanks for playing~!")}
                    if(monstertype==3){hh3funset1[9]++;User.Ary_HH3FunctionSet1 = hh3funset1.join("<:>")};
                    User.Ary_HH3ProfileNames= profilenames.join("<:>");
                    User.Ary_HH3ProfileData = profiledata.join("<:>");
                    User.Ary_Equipmentnames = equipnames.join("<:>");
                    User.Ary_Equipmentdata = equipmentdata.join("<:>");
                    User.Ary_itembagnames = itembagnames.join("<:>");
                    User.Ary_itembagdata = itembagdata.join("<:>");
                    message.channel.send(monsterdefeatembed);
                }
            }
                else{
                    warnembed.setDescription(":x: you can only use act with attack, defend, skill <skill name>, potion, or flee")
                    message.channel.send(warnembed);
                }
            }
            else{
                warnembed.setDescription(":x: You are defeated");
                message.channel.send(warnembed);
            }
    }
    else{
        warnembed.setDescription(":x: You are not in combat");
        message.channel.send(warnembed);
    }
}
module.exports.key = {
    name: "act",
    description: "battlemode ready your weapon."
}