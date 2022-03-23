let quotes = [
  {
    source:  'Reshma Saujani, Founder of Girls Who Code',
    quote: 'I also say to my team: Do 10% of your job shittily. Its okay to do something shittily. Perfectionism prevents us from taking double steps in our career. We think we have to be perfect, but we dont.',
    citation:'Brave Not Perfect',
    year: '2019',
    hashtag:'#ilooklikeanengineer'
  },
  {
    source: 'Sarah Friar, Chief Financial Officer at Square',
    quote: 'A diversity of thought, perspective and culture is important in any field, not just engineering. Surround yourself with people who support you and get involved in [coding] programs.',
    hashtag:'#womensupportwomen'
  },
  {
    source: 'Vanessa Hurst, Co-Founder of Girl Develop It',
    quote: 'Feeling a little uncomfortable with your skills is a sign of learning, and continuous learning is what the tech industry thrives on! It’s important to seek out environments where you are supported, but where you have the chance to be uncomfortable and learn new things.',
    hashtag:'#womenempowerment'
  },
  {
    source: 'Amber Gordon, Founder of Femsplain',
    quote: 'Trust in yourself, believe that your voice matters, and know that your words are good enough.',
    hashtag:'#womeninbusiness'
  },
  {
    source: 'Ara Katz, Chief Marketing Officer at Spring:',
    quote: 'There is no recipe, there is no one way to do things — there is only your way. And if you can recognize that in yourself and accept and appreciate that in others, you can make magic.',
    hashtag:'#womeninbusiness'
  },

];



/***
 * `getRandomQuote` function that will retrun a random object from the quotes array
***/
const getRandomQuote = () =>{
   const randomIndex = Math.floor(Math.random()* quotes.length);
   return randomObject = quotes[randomIndex];
}
console.log(getRandomQuote());

/***
 * `printQuote` function will call getRandomQuote() It will also create a template literal placing information in html tags.
***/
const printQuote = () => {
  getRandomQuote();
  const randomQuote = randomObject.quote;
  const randomSource = randomObject.source;
  const randomCitation = randomObject.citation;
  const randomHashtag = randomObject.hashtag;
  const randomYear = randomObject.year;

  const html =
  `<p calss="hashtag">${randomHashtag}</p>
  <p class= "quote">${randomQuote}</p>
  <p class="source">${randomSource}</p>`;

  document.getElementById('quote-box').innerHTML = html;
  return html;
}

printQuote();
console.log(printQuote());

/***
 * Adds event listener to button to generate new quote
 * 
***/
const button = document.getElementById('load-quote');
 button.addEventListener('click',()=>{
   printQuote();
 });


/***
 * `printQuote` function will call getRandomQuote() and getRandomColor(). It will also create a template literal placing information in html tags.
***/


// document.getElementById('load-quote').addEventListener('click',() => {    
//   printQuote();   
// });
