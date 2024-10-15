
let slider = [
    {
        name: "- Apj abdul kalam",
        photoUrl:"https://c8.alamy.com/zooms/9/04a2e8c914344c4aa6df76323112880c/p5tthh.jpg",
        text:"Let us sacrifice our today so that our children can have a better tomorrow.",
    },
    {
        name: " -William James",
        photoUrl:"https://cdn.britannica.com/10/10710-004-76C3C341/William-James.jpg",
        text:"If you can change your mind, you can change your life.",
    },
    {
        name: "- Carlo Burnett",
        photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1hHPzfdYdeKJr-tZi5iKxKFyidbaN1e8Yg&s",
        text:"When you have a dream,you've got to grab it and never let go.",
    },
    {
        name: "- Oprah Winfrey",
        photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCCuux-IenYc9WT54ymtPfROJR2eSrS80Zg&s",
        text:"You define your own life. Don't let other prople write your script.",
    },
    {
        name: "- Audrey Hepburn",
        photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Psf0acYNLHRm9tiFPzc-rzSKBoBmlOX4lg&s",
        text:"Nothing is impossible,The word itself says 'I'm possible.",
    },
    {
        name: "- Albert Einstein",
        photoUrl:"https://cdn.britannica.com/77/142177-050-4E8010A9/Albert-Einstein-1947.jpg",
        text:"Everything should be made as simple as possible,but not similer.",
    },
    {
        name: "- Georage Bernard Shaw",
        photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyShsAcJVWax-aR0zvhD-WLiTrizWRQjxMPw&s",
        text:"Life isn't about finding yourself. Life is about creating yourself.,"
    },
    {
        name: "- Albert Einstein",
        photoUrl:"https://cdn.britannica.com/77/142177-050-4E8010A9/Albert-Einstein-1947.jpg",
        text:"You never fail until you stop trying.",
    },
    {
        name: "- Joe E.Lewis",
        photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcxoQDLffA6yGBfyoYRuGFWuGJrfwbMQb0g&s",
        text:"You only live once,But is you work it right,once is enough",
    },
    {
        name: "- Harsh Baghele",
        photoUrl:"harsh11.jpg",
        text:"If you work hard,God will give you everything you want.",
    },
];

let img = document.querySelector("img");
let username = document.querySelector(".username");
let thought = document.querySelector(".text");
let button = document.querySelector("#button");

let idx = 0;

button.addEventListener("click",() => {
    let{ name,photoUrl,text } = slider[idx];
    img.src = photoUrl;
    thought.innerText = text;
    username.innerText = name;
    idx++;
    
    if(idx === slider.length) {
        idx = 0;
    }
});