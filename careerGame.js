function display() {
  let name = document.getElementById("name").value;
  let messageDiv = document.getElementById("message");
  let arrayOne = [
    "Cat",
    "Dog",
    "Frog",
    "Mangoose",
    "Panda",
    "Monkey",
    "Gorilla",
    "Horse",
    "Hamster",
    "Lab",
    "Poo",
    "Grand",
    "Zombie",
    "Teddy Bear"
  ];
  let arrayTwo = [
    "Trainer",
    "Cleaner",
    "Catcher",
    "Dude",
    "Milker",
    "Boiler",
    "Overlord",
    "Jedi",
    "Surgeon"
  ];

  let vowels = ["a", "e", "i", "o", "u"];
  let isVowel = false;

  let option1 = arrayOne[Math.floor(Math.random() * 14)];
  let option2 = arrayTwo[Math.floor(Math.random() * 9)];

  if (name === "") {
    alert("Now come on! You have to enter your name");
  } else {
    for (let i = 0; i < vowels.length; i++) {
      if (option1[0] === vowels[i]) {
        isVowel = true;
      }
    }
    if (isVowel) {
      new Typed("#message", {
        strings: [
          `${name}^800, you are ... ^1000 </br> umm well ah ... </br> ^1000 you are ... </br> ^1000 you are going to become an <span class="change-color">${option1} ${option2}</span>`
        ],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 10,
        showCursor: false
      });
    } else {
      new Typed("#message", {
        strings: [
          `${name}^800, you are ... ^1000 </br> umm ... well ah ... </br> ^1000 you are ... </br> ^1000 you are going to become a <span class="change-color">${option1} ${option2}</span>`
        ],
        typeSpeed: 100,
        smartBackspace: true,
        backSpeed: 10,
        showCursor: false
      });
    }
  }
  window.scrollTo(0, document.body.scrollHeight);
}
