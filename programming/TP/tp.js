function buildTOC() {
  var s='', t, lvl=0, c=1, a=document.createElement('a');
  for (let k of document.querySelectorAll('[inToc], h1, h2, h3, h4')) {
    let L=parseInt(k.tagName[1]), n=k.attributes.name;
    t= (t=k.firstElementChild) && (t=t.attributes.name) && (t.value),
      txt= (txt=k.attributes.tname) && (txt.value);
    n=t || (n && n.value) || 'to'+(c++);
    if (!L) L=1;
    if ((L==1) && txt) L=2;

    if (lvl<L) s+='<ul>';
    else if (lvl>L) s+='</ul>';

    s+='<li><a href="#'+n+'">'+(txt || k.innerText)+'</a>';
    lvl=L;
console.info({t})
    if (!t) {
      a.name=n;
      a.href='#'+n;
      k.insertBefore(a.cloneNode(true),k.firstChild);
      }
    }
  if (lvl) s+='</ul>';
  var e=document.getElementById('toc');
  e.classList.add('flt');
  if (t=e.querySelector('ul')) t.outerHTML='';
  e.innerHTML+=s;
  // auto-scroll to hash (anchors added)
  if (location.hash) {
    setTimeout( function(){document.querySelector('a[name="'+location.hash.substr(1)+'"]').scrollIntoView();sel();}, 0 );
    setTimeout( function(){document.querySelector('a[name="'+location.hash.substr(1)+'"]').scrollIntoView();sel();}, 300 );
    }
}

var curSel;
function sel() {
  var l=toc.querySelector('a[href="'+location.hash+'"],a[href2="'+location.hash+'"]');
  //console.info({curSel,l});
  if (curSel) curSel.classList.remove('cur');
  if (l) {
    l.classList.add('cur');
    }
  curSel=l;
  }

window.onhashchange=sel;
