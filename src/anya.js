const pic = {
    uniform: "https://spy-family.net/assets/img/common/header_bottomimg_3.png",
    icecream: "https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://spy-family.net/assets/img/top/chara_anya_2.png",
    avatars: [],
};

for (let i = 1; i <= 40; i++) {
    pic.avatars[i] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}
pic.avatars.push(
    "https://spy-family.net/assets/img/special/episode4/02.png",
    "https://spy-family.net/assets/img/special/episode4/05.png",
    "https://spy-family.net/assets/img/special/episode5/01.png",
    "https://spy-family.net/assets/img/special/episode5/02.png",
    "https://spy-family.net/assets/img/special/episode6/03.png",
    "https://spy-family.net/assets/img/special/episode6/05.png",
    "https://spy-family.net/assets/img/special/episode7/01.png",
    "https://spy-family.net/assets/img/special/episode7/03.png",
    "https://spy-family.net/assets/img/special/episode7/04.png",
    "https://spy-family.net/assets/img/special/episode8/01.png",
    "https://spy-family.net/assets/img/special/episode9/04.png",
    "https://spy-family.net/assets/img/special/episode10/02.png",
    "https://spy-family.net/assets/img/special/episode10/03.png",
    "https://spy-family.net/assets/img/special/episode10/04.png",
    "https://spy-family.net/assets/img/special/episode11/01.png",
    "https://spy-family.net/assets/img/special/episode11/02.png",
    "https://spy-family.net/assets/img/special/episode11/03.png",
    "https://spy-family.net/assets/img/special/episode11/04.png",
    "https://spy-family.net/assets/img/special/episode11/06.png",
    "https://spy-family.net/assets/img/special/episode12/03.png",
    "https://spy-family.net/assets/img/special/episode12/06.png",
);

const titles = ["GUITAR PLAYER", "MUSIC LOVER"];

const about = [
    "My name is Evan Mao. I am 16 years old now!",
    "I am studing in CKSH in Hsinchu.",
    "",
    "This summer I went to NTNU CSIE Camp to learn how to code.",
    "and I found it very interesting ",
    "I really enjoys typing code",
    "Although sometimes we got stuck for so long",
    "But the moment we fix the bug feels GREAT "
    
].join("\n");

const projects = [
    {
        name: "Intelliegence GoBang",
        description: "An AI that can handle any kinds of situation in GoBang",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzksocO-XsgoC4qdKQIbUw0YepocWD2bDLew&usqp=CAU",
        skills: ["python coding"],
        url: "https://github.com/anya-forger/anya-forger.github.io",
    },
    {
        name: "Making our own tablecloth",
        description: "COOL TABLE,GOOD MOOD",
        image: "https://imgur.com/ZsTkLs5.jpg",
        skills: ["honeycomb"],
        url: "",
    },
    {
        name: "Get RickRolled LOL",
        description: ":)",
        image: "https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif",
        skills: [""],
        url: "https://youtu.be/dQw4w9WgXcQ",
    },
];

export { pic, titles, about, projects };
