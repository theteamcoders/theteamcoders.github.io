async function start ()
{
  request('./imports/navigation.md')
    .then(text => {
      document.getElementById('navbar').innerHTML = marked(text);
    })
    .catch(code => console.error);
}
start();

window.addEventListener('hashchange', loadPage);