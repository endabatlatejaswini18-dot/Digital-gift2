const steps = [
  {
    text: "lopala em undh ani aalochisthunnava👀",
    img: "images/2.gif",
    btn: "yessss 😌"
  },
  {
    text:"surprise💐",
    img: "images/3.gif",
    btn: "wowwwwww 🥳"
  },
  {
    text: "I loveee youuu and i really miss youuuu pottoda🤍",
    img: "images/4.gif",
    btn: "aweeeeeee 🫠😝"
  },
  {
    text: "jldi ocheyyu 🥺",
    img: "images/5.gif",
    btn: "okayy😒neek vere option ledu 😏",
  }
];

let i = 0;

function next() {
  if (i < steps.length) {
    document.getElementById("text").innerText = steps[i].text;
    document.getElementById("img").src = steps[i].img;
    document.getElementById("btn").innerText = steps[i].btn;
    i++;
  }
}