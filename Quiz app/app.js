let quoteList = [
  `“I dream. Sometimes I think that's the only right thing to do.”`,
  `“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”`,
  `“The most important thing we learn at school is the fact that the most important things can't be learned at school."`,
  `“To go wrong in one's own way is better than to go right in someone else's.”`,
  `“Man only likes to count his troubles; he doesn't calculate his happiness.”`,
  `“War is peace. Freedom is slavery. Ignorance is strength.”`,
  `“Perhaps one did not want to be loved so much as to be understood.”`,
];

let gen = document.querySelector("#generate");
let quote = document.querySelector("#content h1");
let copybtn = document.querySelector("#copy");

copybtn.addEventListener("click", function () {
  let texttocopy = quote.innerText;

  navigator.clipboard.writeText(texttocopy)
  .then(() => {
      copybtn.disabled = true;
      copybtn.innerText = `Copied!`;
      setTimeout(() => {
        copybtn.innerHTML = `<i class="ri-clipboard-line"></i>`;
              copybtn.disabled = false;
      }, 1000);
    }).catch((err) => {
      console.error("Copy failed:", err);
    });
});

gen.addEventListener("click", function () {
  let randIdx = Math.floor(Math.random() * quoteList.length);
  quote.innerText = quoteList[randIdx];
});