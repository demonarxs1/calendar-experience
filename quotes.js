fetch('./quotes.json').then(it => it.json()).then(it => {

  const renderQuote = () => {
    const quoteEl = document.querySelector('#quote');
    const authorEl = document.querySelector('#author');
    const random = Math.floor(Math.random() * it.length);

    const quote = it[random];
    quoteEl.innerHTML = quote.quote.trim();
    authorEl.innerHTML = `—${quote.author}`;
  };

  renderQuote();
  setInterval(() => renderQuote(), 300000)
});
