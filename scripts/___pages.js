window.loadPage = async () =>
{
  const highlight = (str, lang) =>
  {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
  
  var relative = location.href.split('#')[1].toLowerCase() + '.md';
  var publicFolder = './public';
  var e = document.getElementById('content');
  request(publicFolder + relative)
    .then(text => {
      e.innerHTML = marked(text);
      
      $('a').each((index, item) => {
        if (!item.href.startsWith(window.location.origin + window.location.pathname + '#/'))
        {
          var href = item.href;
          item.href = location.href;
          
          item.onclick = event =>
          {
            window.open(href, '_blank')
          }
        }
      });
      
      $('pre code').each(function(i, block) {
        block.innerHTML = Prism.highlight(block.innerText, Prism.languages[block.getAttribute('class').substring('lang-'.length)]);
        // block.innerHTML = hljs.highlightAuto(block.innerText).value;
      });
      
    })
    .catch(text => {
      e.innerHTML = marked('# This page does not exist!\nYou might have to try something else bad boy ;)');
    })
}

loadPage();