const Discord = require('discord.js');
module.exports.run = async (message, arg, User) => {
    function RandomMax(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const embed = new Discord.MessageEmbed();
    var questions = ["Can this Anime character beat Minecraft?", "Can this Anime Character be a wifu?", "Can this Anime Character swim?", "Can this Anime Character swim in lava?", "Can this Anime Character do your homework?", "Can this Anime Character defeat CV19?", "Can this Anime Character read?", "Can you marry this Anime Character?", "Can you push this Anime Character off a cliff?", "Can you shelter this Anime Character?", "Can this Anime Character stare at the sun?", "Can this Anime Character get A+ in Math?", "Can this Anime Character get A+ in Histroy?", "Can this Anime Character get A+ in Science?"];
    var pics = ["https://media.distractify.com/brand-img/5MRBZ-GG5/480x252/dragonball-z-1572039726922.jpg", "https://pbs.twimg.com/media/EcA2XPiUYAA7Q0S.jpg", "https://justicesoultuna.files.wordpress.com/2013/09/tag_163819.jpg?w=790&h=400&crop=1", "https://i1.wp.com/anitrendz.net/news/wp-content/uploads/2019/02/Kazuma-Satou.png", "https://i.redd.it/ock6i5drreq21.png", "https://danbooru.donmai.us/data/__power_chainsaw_man_drawn_by_st_youx1119__8526c6135d47940f3209f12835422c50.jpg", "https://i.pinimg.com/originals/7e/83/67/7e8367cc85ce38c156e8aef6c0befd48.jpg", "https://img-9gag-fun.9cache.com/photo/aR0OK9M_460s.jpg", "https://cdn.wccftech.com/wp-content/uploads/2020/03/dragon-ball-z-kakarot-patch-1.06-future-trunks.jpg.jpeg", "https://cdn.vox-cdn.com/thumbor/ZdyOORNOvCHm5lYljrcjYAbNlLY=/0x0:1920x1080/1400x1050/filters:focal(807x387:1113x693):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/53851593/death_note.0.jpg", "https://i.ytimg.com/vi/5OL_Sa2RZ9E/maxresdefault.jpg", "https://i.pinimg.com/564x/45/19/7d/45197d2610e5f54dcf4eeec2c8470358.jpg", "https://images.discordapp.net/avatars/352596653989167105/6ad8ee92cdf7c6836edbad9075556b97.png?size=512", "https://static.zerochan.net/Kamina.%28Tengen.Toppa.Gurren-Lagann%29.full.288124.jpg", "https://www.gematsu.com/wp-content/uploads/2019/02/Kill-la-Kill-Gameplay_02-10-19.jpg", "https://www.anime-evo.net/wp-content/uploads/2016/04/ReZero_04_4.jpg", "https://i.kym-cdn.com/entries/icons/original/000/015/559/It_Was_Me__Dio!.jpg", "https://noisypixel.net/wp-content/uploads/2019/11/Kill-la-Kill-IF.jpg", "https://media.comicbook.com/2016/08/ash-ketchum-194535-1280x0.jpg", "https://i.pinimg.com/originals/36/f9/c4/36f9c4b5813cb22aba08466fda544e27.png", "https://img1.looper.com/img/gallery/my-hero-academia-the-reason-all-might-is-the-most-powerful-teacher/intro-1596067346.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/AmazonOriginals/Dororo-S1-heroimage._CB1546004695_SX1080_.jpg"];
    var trueorfalse = ["true","false"];
    if(User.TemdataNames==undefined)User.TemdataNames="";
    var temdatanames = User.TemdataNames.split("<:>");
    embed.setColor(User.colortheme);
    if (temdatanames[3] == "true" || temdatanames[3] == "false") {
        if (arg == temdatanames[3]) {
            embed.setDescription(":clap: Wow that was right!");
            temdatanames[3] = "";
            User.TemdataNames = temdatanames.join("<:>");
            message.channel.send(embed);
        }
        else {
            embed.setDescription(":x: that was actually " + temdatanames[3] + ", blame Anime logic");
            temdatanames[3] = "";
            User.TemdataNames = temdatanames.join("<:>");
            message.channel.send(embed);
        }
    }
    else {
        embed.setDescription(questions[RandomMax(questions.length)]);
        embed.setImage(pics[RandomMax(pics.length)]);
        embed.setFooter("command: -animehunt true / false");
        temdatanames[3] = trueorfalse[RandomMax(trueorfalse.length)];
        User.TemdataNames = temdatanames.join("<:>");
        message.channel.send(embed);
    }
}
module.exports.key = {
    name: "animehunt",
    description: "answer true or false questions of anime."
}