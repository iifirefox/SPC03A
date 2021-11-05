const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytsh = require('youtube-sr');
const ytpl = require('ytpl');
const queue = new Map();
const Account = require("../data/tree");
module.exports.run = async (message, arg, commandname ,User,client) => {
    const vc = message.member.voice.channel;
    const playerembed = new Discord.MessageEmbed();
    const serverqueue = queue.get(message.guild.id);
    if (commandname=="play") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        subarg = arg.trim();
        if (subarg === "") {
            playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
            if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
            playerembed.setDescription(":x: Track already Playing.").setColor('#FF5BF2');
            if (serverqueue.playing) return message.channel.send(playerembed.setFooter("To add a track try command: -play with title or URL."));
            serverqueue.playing = true;
            serverqueue.connection.dispatcher.resume();
            playerembed.setDescription(":musical_note: Resuming " + serverqueue.songs[0].title + ".").setColor('#FF5BF2'); message.channel.send(playerembed);
            return undefined;
        }
        else {
            let newarg;
            if(arg.includes("https://")){
            if(arg.includes("https://www.youtube.com/watch?v=")||arg.includes("https://youtu.be")){newarg = arg}
            else{
                return message.channel.send(playerembed.setDescription(":x: That is not Youtube Link.").setColor('#FF5BF2'));
            }
        }
           else{ let video = await ytsh.search(arg);
            playerembed.setDescription(":x: Nothing was found.").setColor('#FF5BF2');
            var result=0;
            if(!video[result]){
            for(var result=0;video[result]!=undefined&result<video.length;result++){if(result>9){result=-1; break}}}
            if (result==-1||!video[result]) return message.channel.send(playerembed);
            newarg ="https://www.youtube.com/watch?v="+video[result].id;}
            const thesong = await ytdl.getInfo(newarg,{filter: 'audioandvideo', quality: 'lowestvideo'});
            var pic = thesong.videoDetails.thumbnails[3].url;
            var upload = thesong.videoDetails.publishDate;
            var getpic = await ytsh.search(thesong.videoDetails.title);
            if(getpic[0]){pic=getpic[0].thumbnail.url;upload=getpic[0].uploadedAt}
            const song = {
                title: Discord.escapeMarkdown(thesong.videoDetails.title),
                thumbnail:pic,
                Duration:fancyTimeFormat(thesong.videoDetails.lengthSeconds),
                uploaded:upload,
                requestedby:User.name,
                loop: false,
                url: thesong.videoDetails.video_url,
                info: thesong
            }
            if (!serverqueue||!serverqueue.connection.dispatcher) {
                const servermap = {
                    textChannel: message.channel,
                    voiceChanel: vc,
                    connection: null,
                    songs: [],
                    volume: 5,
                    playing: true
                }
                queue.set(message.guild.id, servermap);
                servermap.songs.push(song);
                if(newarg.includes("list=")){
                    var getplaylist = newarg.split("list=");
                    var playlist = await ytpl(getplaylist[1]);
                    var list = playlist.items
                    for(var que = 0; que<list.length&que<20;que++){
                        alt ="https://www.youtube.com/watch?v="+list[que].id;
                        const thesong = await ytdl.getInfo(alt);
                        var pic = thesong.videoDetails.thumbnails[3].url;
                        var upload = thesong.videoDetails.publishDate;
                        var getpic = await ytsh.search(thesong.videoDetails.title);
                        if(getpic[0]){pic=getpic[0].thumbnail.url;upload=getpic[0].uploadedAt}
                        const song = {
                            title: Discord.escapeMarkdown(thesong.videoDetails.title),
                            thumbnail:pic,
                            Duration:fancyTimeFormat(thesong.videoDetails.lengthSeconds),
                            uploaded:upload,
                            requestedby:User.name,
                            loop: false,
                            url: thesong.videoDetails.video_url,
                            info: thesong
                        }
                        console.log(song.url)
                        servermap.songs.push(song);
                    }
                }
                try {
                    var connection = await vc.join();
                    servermap.connection = connection;
                   await play(message.guild, servermap.songs[0]);
                } catch (error) {
                    queue.delete(message.guild.id);
                    console.log("-Error-: " + error);
                    playerembed.setDescription(":x: Player Error").setColor('#FF5BF2');
                    return message.channel.send(playerembed);
                }
            }
            else {
                serverqueue.songs.push(song);
                playerembed.setDescription(":arrow_forward: added to playlist " + song.title).setFooter("Command: -playlist to view playlist").setColor('#FF5BF2');
                return message.channel.send(playerembed);
            }
            return undefined;
        }
    }
    else if(commandname=="p"){
        if(User.Lastplay.includes("https://")){
        var newarg = User.Lastplay;
        const thesong = await ytdl.getInfo(newarg,{filter: 'audioandvideo', quality: 'lowestvideo'});
        var pic = thesong.videoDetails.thumbnails[3].url;
        var upload = thesong.videoDetails.publishDate;
        var getpic = await ytsh.search(thesong.videoDetails.title);
        if(getpic[0]){pic=getpic[0].thumbnail.url;upload=getpic[0].uploadedAt}
        const song = {
            title: Discord.escapeMarkdown(thesong.videoDetails.title),
            thumbnail:pic,
            Duration:fancyTimeFormat(thesong.videoDetails.lengthSeconds),
            uploaded:upload,
            requestedby:User.name,
            loop: false,
            url: thesong.videoDetails.video_url,
            info: thesong
        }
        if (!serverqueue) {
            const servermap = {
                textChannel: message.channel,
                voiceChanel: vc,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            }
            queue.set(message.guild.id, servermap);
            servermap.songs.push(song);
            try {
                var connection = await vc.join();
                servermap.connection = connection;
               await play(message.guild, servermap.songs[0]);
            } catch (error) {
                queue.delete(message.guild.id);
                console.log("-Error-: " + error);
                playerembed.setDescription(":x: Player Error").setColor('#FF5BF2');
                return message.channel.send(playerembed);
            }
        }
        else {
            serverqueue.songs.push(song);
            playerembed.setDescription(":arrow_forward: added to playlist " + song.title).setFooter("Command: -playlist to view playlist").setColor('#FF5BF2');
            return message.channel.send(playerembed);
        }
        return undefined;
    }
    else return message.channel.send(playerembed.setDescription(":x: no recent tracks \nTo Play a track command: `play [Youtube Video URL] or [Name of the video]`"));
    }
    else if (commandname == "fav"||commandname == "favorite"){
        if(User.Favtrack.includes("https://")){
            var newarg = User.Favtrack;
            const thesong = await ytdl.getInfo(newarg,{filter: 'audioandvideo', quality: 'lowestvideo'});
            var pic = thesong.videoDetails.thumbnails[3].url;
            var upload = thesong.videoDetails.publishDate;
            var getpic = await ytsh.search(thesong.videoDetails.title);
            if(getpic[0]){pic=getpic[0].thumbnail.url;upload=getpic[0].uploadedAt}
            const song = {
                title: Discord.escapeMarkdown(thesong.videoDetails.title),
                thumbnail:pic,
                Duration:fancyTimeFormat(thesong.videoDetails.lengthSeconds),
                uploaded:upload,
                requestedby:User.name,
                loop: false,
                url: thesong.videoDetails.video_url,
                info: thesong
            }
            if (!serverqueue) {
                const servermap = {
                    textChannel: message.channel,
                    voiceChanel: vc,
                    connection: null,
                    songs: [],
                    volume: 5,
                    playing: true
                }
                queue.set(message.guild.id, servermap);
                servermap.songs.push(song);
                try {
                    var connection = await vc.join();
                    servermap.connection = connection;
                   await play(message.guild, servermap.songs[0]);
                } catch (error) {
                    queue.delete(message.guild.id);
                    console.log("-Error-: " + error);
                    playerembed.setDescription(":x: Player Error").setColor('#FF5BF2');
                    return message.channel.send(playerembed);
                }
            }
            else {
                serverqueue.songs.push(song);
                playerembed.setDescription(":arrow_forward: added to playlist " + song.title).setFooter("Command: -playlist to view playlist").setColor('#FF5BF2');
                return message.channel.send(playerembed);
            }
            return undefined;
        }
        else return message.channel.send(playerembed.setDescription(":x: no Favorite tracks has been saved \nTo add a Favorite track: `play [Youtube Video URL] or [Name of the video]`\nthenreact with ❤️"));
    }
    else if (commandname == "stop") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
        serverqueue.songs = [];
        serverqueue.connection.dispatcher.end();
        playerembed.setDescription(":octagonal_sign:  Song has stopped.").setColor('#FF5BF2'); message.channel.send(playerembed);
    }
    else if (commandname == "skip") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
        if(serverqueue.songs[0]){
        if(serverqueue.songs[0].loop==true) serverqueue.songs[0].loop=false;}
        serverqueue.connection.dispatcher.end();
        playerembed.setDescription(":arrow_forward: Track has been skipped .").setColor('#FF5BF2'); message.channel.send(playerembed);
        return undefined;
    }
    else if (commandname == "vol") {
        playerembed.setDescription(":x: no voice channel").setColor('#FF5BF2');
        if (!message.member.voice.channel) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed);
        playerembed.setDescription(":x: volume is " + serverqueue.volume).setColor('#FF5BF2');
        if (!arg) return message.channel.send(playerembed);
        playerembed.setDescription(":x: volume can only be change from 1 - 5.").setColor('#FF5BF2');
        if (isNaN(arg)) return  message.channel.send(playerembed);
        serverqueue.connection.dispatcher.setVolumeLogarithmic(arg / 5)
        playerembed.setDescription(":loud_sound: Volume has been changed to " + arg + "/5").setColor('#FF5BF2'); message.channel.send(playerembed);
        return undefined;
    }
    else if (commandname == "playing") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed);
        playerembed.setColor('#FF5BF2');
        playerembed.setDescription(":minidisc: Currently playing: " + serverqueue.songs[0].title+"\nDuration: "+ serverqueue.songs[0].Duration+"\nUploaded: "+serverqueue.songs[0].uploaded+"\nRequested By: "+ serverqueue.songs[0].requestedby);
        playerembed.setImage(serverqueue.songs[0].thumbnail);
         message.channel.send(playerembed);
    }
    else if (commandname == "playlist") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: -play with title or URL."));
        const listembed = new Discord.MessageEmbed();
        var totalduration =0;
        var addback =serverqueue.songs[0];
        var first= convertdur(serverqueue.songs[0].Duration);
        totalduration+=first
        serverqueue.songs.shift();
        displaytext="";
        for(var index=0;index<serverqueue.songs.length&index<7;index++){
            var listed = index+1;
            displaytext+=listed+" "+serverqueue.songs[index].title+"\nDuration: "+fancyTimeFormat(totalduration)+"\nRequestedBy: "+serverqueue.songs[index].requestedby+"\n";
            totalduration+=convertdur(serverqueue.songs[index].Duration);
        }
        serverqueue.songs.unshift(addback);
        listembed.setDescription(`
        **Now playing:**\n${serverqueue.songs[0].title+"\n"+serverqueue.songs[0].Duration+"\nRequested By:"+serverqueue.songs[0].requestedby}
        __**Song queue:**__\n${displaytext}`
        )
        listembed.setColor('#FF5BF2');
        message.channel.send(listembed);

    }
    else if (commandname == "pause") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue.playing) return  message.channel.send(playerembed.setFooter("To play a track try command: `play` with title or URL."));
        serverqueue.playing = false;
        serverqueue.connection.dispatcher.pause();
        playerembed.setDescription(":pause_button: Track has been paused.").setColor('#FF5BF2'); message.channel.send(playerembed);
    }
    else if(commandname=="disconnect"){
        playerembed.setDescription(":x: Not connected to voice channel.").setColor('#FF5BF2');
        if (!message.guild.voice.channel) return message.channel.send(playerembed.setFooter("To play a track try command: `play` with title or URL."));
        playerembed.setDescription(":mobile_phone_off: The Music has stopped and left "+message.member.voice.channel.name +" (Voice Channel)").setColor('#FF5BF2');message.channel.send(playerembed);
        if(serverqueue){
        serverqueue.songs = [];
        serverqueue.connection.dispatcher.end();}
        message.guild.voice.channel.leave();
        queue.delete(message.guild.id);
    }
    else if (commandname == "loop") {
        playerembed.setDescription(":x: You must enter a voice chat to use this command.").setColor('#FF5BF2');
        if (!vc) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: `play` with title or URL."));
        serverqueue.songs[0].loop =true;
        serverqueue.songs[0].title+=" - :repeat:`REPEATED TRACK`"
        playerembed.setDescription(":repeat:  Current Song is looped").setColor('#FF5BF2');message.channel.send(playerembed);
    }
    else if (commandname == "unloop") {
        playerembed.setDescription(":x: no voice channel").setColor('#FF5BF2');
        if (!message.member.voice.channel) return message.channel.send(playerembed);
        playerembed.setDescription(":x: noththing playing.").setColor('#FF5BF2');
        if (!serverqueue) return message.channel.send(playerembed.setFooter("To play a track try command: `play` with title or URL."));
        serverqueue.songs[0].loop =false;
        serverqueue.songs[0].title=serverqueue.songs[0].title.replace(" - :repeat:`REPEATED TRACK`","");
        playerembed.setDescription(":musical_note: Current Song is unlooped").setColor('#FF5BF2');message.channel.send(playerembed);
    }
    function play(guild, song) {
        const serverqueue = queue.get(guild.id);
        if (!song) {
            queue.delete(guild.id);
            return 
        }
        const dispatcher = serverqueue.connection.play(ytdl(song.url/*,{filter: 'audioandvideo', quality: 'lowestvideo'},{quality:'lowestvideo',highWaterMark:1<<25,requestOptions:{headers:{cookie:"CgtNS05IeC1hdjRYNCiejr2LBg==",'x-youtube-identiy-token':"YSC=Ly3stE01E0M; VISITOR_INFO1_LIVE=MKNHx-av4X4; PREF=tz=Asia.Hong_Kong; GPS=1; CONSISTENCY=AGDxDeNY_TH3CfNsqHIMadxMksr7MpQOr7JmVI9IHC7A1SmAjeTeZQXfrnlV9bWZL2EWxLFzTuOUxOAz9DXX-UVlqvmQeQ1UVPsnTA7dQziYvZymgBPZb90nCuze_V6BPE501O6SKO83Lv3i1TVIysk"}}}*/))
        .on("progress", (chunkLength, downloaded, total) => {
            const percent = downloaded / total;
            const downloaded_minutes = (Date.now() - starttime) / 1000 / 60;
            const estimated_download_time = downloaded_minutes / percent - downloaded_minutes;
            if (estimated_download_time.toFixed(2) >= 1.5) {
              console.warn("Seems like YouTube is limiting our download speed, restarting the download to mitigate the problem..");
              stream.destroy();
              start();          
            }})
            .on('finish', () => {
                if(serverqueue.songs[0]){
               if(serverqueue.songs[0].loop==false)serverqueue.songs.shift();
                play(guild, serverqueue.songs[0]);}
            })
            .on('error', error => {
                playerembed.setDescription(":x: Cannot play " + song.title).setColor('#FF5BF2');
                console.log(error);
                if(serverqueue){
                serverqueue.songs = [];
                dispatcher.end();}
                 message.channel.send(playerembed);
            });
        dispatcher.setVolumeLogarithmic(serverqueue.volume / 5);
       if(!serverqueue.songs[0].title.includes(" - :repeat:`REPEATED TRACK`")){
        Account.findOne({
            id: User.id
        },async(err,User)=>{
          if(err)console.log(err);
          User.Lastplay=song.url;User.save().catch(err => console.log(err));});
          var txt =":musical_note:  Playing  " + serverqueue.songs[0].title
          if(newarg) txt+=" + Playlist"
           message.channel.send(playerembed.setDescription(txt).setColor('#FF5BF2'))
           .then((message)=>{message.react('🔁'),message.react('⏭️'),message.react('❤️')
           function sample(){
       const filter = (reaction,user) => {
        return ['🔁','⏭️','❤️'].includes(reaction.emoji.name) && user.id === User.id
    };
       message.awaitReactions(filter, { max: 1})
	.then(collected => {
		const reaction = collected.first();
 if (reaction.emoji.name === '🔁') {
            if (!vc) return message.edit(playerembed.setDescription(":x: You must enter a voice chat to use this command."));
            if (!serverqueue) return message.edit(playerembed.setDescription(":x: noththing playing.").setFooter("To play a track try command: `play` with title or URL."));
            if(serverqueue.songs[0].loop ==true) return message.edit(playerembed.setDescription(":x: This track is already looped.").setFooter("To unloop track command: `unloop`"));
            serverqueue.songs[0].loop =true;
            serverqueue.songs[0].title+=" - :repeat:`REPEATED TRACK`"
            message.edit(playerembed.setDescription(":repeat:  Current Song is looped")).then(message=>{message.reactions.resolve('🔁').users.remove(User.id);});
            sample();
		}
        else if (reaction.emoji.name === '⏭️'){
            if (!vc) return message.edit(playerembed.setDescription(":x: You must enter a voice chat to use this command."));;
            if (!serverqueue) return message.edit(playerembed.setDescription(":x: noththing playing.").setFooter("To play a track try command: `play` with title or URL."));
            if(serverqueue.songs[0]){
            if(serverqueue.songs[0].loop==true) serverqueue.songs[0].loop=false;}
            serverqueue.connection.dispatcher.end();
            message.edit(playerembed.setDescription(":arrow_forward: Track has been skipped .")).then(message=>{message.reactions.resolve('⏭️').users.remove(User.id);});
            return sample();
        }
        else if (reaction.emoji.name === '❤️') {
            Account.findOne({
                id: User.id
            },async(err,User)=>{
              if(err)console.log(err);
              User.Favtrack=song.url;User.save().catch(err => console.log(err));});
            message.edit(playerembed.setDescription(":heart:  This Track has been added as your favorite")).then(message=>{message.reactions.resolve('❤️').users.remove(User.id);});
            sample();
        }
	})}sample();
})}
    }
    function fancyTimeFormat(duration)
{
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
function convertdur(x){
   x= Number(x.replace(`:`,``))
    return x;
}
}
module.exports.key = {
    name: "music(play,stop,skip,volume,pause)",
    description: "play your music."
}