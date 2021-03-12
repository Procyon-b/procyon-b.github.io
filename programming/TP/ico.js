// browser action icon

const a48=48 * Math.PI / 180, dc='#cc4400', pi2=Math.PI * 2;
function drw(c,sx,sy,ctx) {
//console.info('drw',c);
  ctx=ctx || document.createElement('canvas');
  ctx=ctx.getContext('2d');

  if (sx && sx.indexOf && sx.indexOf('px')) sx=parseFloat(sx)/128;
  if (sy && sy.indexOf && sy.indexOf('px')) sy=parseFloat(sy)/128;

  c=c||{};
  ctx.setTransform(sx || 1, 0, 0, sy || 1, 0, 0);

  ctx.strokeStyle=c.h||dc;
  ctx.lineWidth=20;
  ctx.lineCap='round';
  ctx.beginPath();
  ctx.translate(64,64);
  ctx.moveTo(28, 0);
  ctx.lineTo(54, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle=c.L4||dc;
  ctx.rotate(a48);
  ctx.moveTo(28, 0);
  ctx.lineTo(54, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle=c.L9||dc;
  ctx.rotate(a48);
  ctx.moveTo(28, 0);
  ctx.lineTo(54, 0);
  ctx.stroke();

  ctx.setTransform(sx || 1, 0, 0, sy || 1, 0, 0);
  ctx.translate(64,64);
  ctx.beginPath();
  ctx.strokeStyle=c.U4||dc;
  ctx.rotate(-a48);
  ctx.moveTo(28, 0);
  ctx.lineTo(54, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle=c.U9||dc;
  ctx.rotate(-a48);
  ctx.moveTo(28, 0);
  ctx.lineTo(54, 0);
  ctx.stroke();

  ctx.setTransform(sx||1, 0, 0, sy||1, 0, 0);

  ctx.fillStyle=c.r||dc;
  ctx.fillRect(4, 54, 40, 20);

  ctx.beginPath();
  ctx.strokeStyle=c.c||dc;
  ctx.lineWidth=12;
  ctx.arc(64,64,23,0,pi2);
  ctx.stroke();
  if (c.cf) {
    ctx.fillStyle=c.cf;
    ctx.fill();
    }

  if (c.w) {
    ctx.beginPath();
    ctx.arc(21,21,19,0,pi2);
    ctx.fillStyle=c.w;
    ctx.fill();
    }
  if (c.wI) {
    ctx.beginPath();
    ctx.arc(21,107,19,0,pi2);
    ctx.fillStyle=c.wI;
    ctx.fill();
    }
  return ctx;
}
var curIcon;
function setIcon(c,noCW) {
  if (c.reload) c=curIcon;
  else if (!c.ignore) curIcon=c;
  if (extTT && prxTT) chrome.browserAction.setTitle({title:extTT+'\ncurrent proxy: '+prxTT+''+(sTT||'')});
  if (noCtrl && !noCW) return;
  if (inco && noCtrl && (noCtrl!=3) ) c=Object.assign({},c, {w:noCtrl&1?R:'', wI:noCtrl&2?R:''} )
  //console.info('%c setIcon ','background-color:red;color:white;',c,arguments);
  chrome.browserAction.setIcon( { imageData: drw(c).getImageData(0, 0, 128, 128) } );
}

var T='transparent', B='blue', G='darkgray',R='red',P='#c61aff',O='#ff9933',
  drct={r:B,c:B,ocf:B,h:B,U4:G,U9:T,L4:G,L9:T},
  sstm={r:B,c:B,h:B,U4:B,U9:T,L4:B,L9:T},
  sstmOP={w:B,r:B,c:B,h:B,U4:B,U9:T,L4:B,L9:T},
  sstmNS={r:P,c:P,h:P,U4:P,U9:O,L4:P,L9:T},
  srvr={U9:T,L9:T,U4:G,L4:G},
  swt={U9:G,L9:G},
  pool={U9:T,L9:T,U4:B,L4:B},
  pac={U9:T,L9:T,U4:B,L4:T,h:B},
  tmpSv={U9:O,L9:O,r:G,h:G,c:G,L4:G,U4:G},
  sall={U9:'blue', oL9:'blue', U4:G, L4:G},
  notProx={cf:R,U4:T,U9:T,L4:T,L9:T,h:T,ignore:1},
  dotN={w:R,cf:R,U4:T,U9:T,L4:T,L9:T,h:T},
  dotI={wI:R,cf:R,U4:T,U9:T,L4:T,L9:T,h:T};

