const text =
  "Dear Bestfriend, saw you for the first time in 2nd year, and was completely mesmerized by your beauty and cuteness. Its been a year of our being best friends. We have talked soo much in this short period of time and got to know quite a lot about each other. Every time I talk to you it brings huge smile on my face and deep satisfaction to my heart and I want a never ending talk with you always. There has been something I wanted you to know from a long time but couldn't gather much courage until now and also feared loosing our friendship. So meri long time crush Jaanvi Singh I want to tell you that I really really love you. And today I want to ask you that 'Khushi kya tum meri life ki khushiyo ka kaaran banna chahogi, kya tum meri phone gallery ki permanent photo banna chahogi, kya tum mere downs me meri support pillar aur ups ko enjoy karne wali partner banna chahogi, kya tum meri family member banna chahogi, will you be my girlfriend, my lucky charm of life, my best friend and better half for life, the beautiful bahu of my mother in future ❤️❤️❤️";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
