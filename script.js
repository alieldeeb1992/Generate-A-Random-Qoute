// Catch myElements
const myQuote = document.querySelector(".the-quote");
const myAuthor = document.querySelector(".author");
const myBtn = document.querySelector(".btn");
myAuthor.style.display = "none";
myQuote.style.display = "none";
//My Main Function
myBtn.addEventListener("click", async () => {
  try {
    myBtn.innerHTML = "Loading...";
    const myApiLink = "https://api.quotable.io/random";
    const fetchMyApi = await fetch(myApiLink);
    const getData = await fetchMyApi.json();
    let myAuthorApi = getData.author;
    let myQuoteApi = getData.content;
    myAuthor.innerHTML = `By : ${myAuthorApi}`;
    myAuthor.style.display = "block";
    myQuote.style.display = "block";
    myQuote.innerHTML = `<span>""</span>${myQuoteApi}<span>""</span>`;
    myBtn.innerHTML = "Generate A Random Quote";
  } catch (error) {
    myQuote.style.display = "block";
    myQuote.style.fontSize = "13px";
    myQuote.innerHTML = "There is Some thing Wrong ,Please Try Again Later";
    myBtn.innerHTML = "Generate A Random Quote";
  }
});
