const quoteBtn = document.querySelector(`.quote-btn`);
const text = document.querySelector(`.card-text`);
const authorName = document.querySelector(`.author`);
const soundBtn = document.querySelector(`.sound`);
const copyBtn = document.querySelector(`.copy`);


function showQuote(){
  quoteBtn.classList.add('Loading');
  quoteBtn.textContent = `Loading Quote...`
    fetch('https://quotes-api-self.vercel.app/quote')
  .then(response => response.json())
  .then(data => {
  
    text.textContent = data.quote;
    authorName.innerHTML = `<h6 class="author"><span>—–</span> ${data.author}</h6>`
    quoteBtn.textContent = `New quote`;
    quoteBtn.classList.remove('Loading');
  })
  .catch(error => {
    text.textContent = error;
  });

}


copyBtn.addEventListener('click', ()=>{
  navigator.clipboard.writeText(text.textContent);
})

soundBtn.addEventListener('click', ()=>{
  let utterance = new SpeechSynthesisUtterance(`${text.textContent} by ${data.author}`);
  speechSynthesis.speak(utterance)
})
quoteBtn.addEventListener('click', showQuote);