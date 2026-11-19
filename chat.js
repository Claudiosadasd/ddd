(function(){
var SB='https://qpythmevcmyogvertqba.supabase.co',KEY='sb_publishable_RM3iti36Bxgl-gsX26tIoA_yTTImCzq',WA='351930592465';
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v)}catch(e){}return null}
function rpc(fn,body){return fetch(SB+'/rest/v1/rpc/'+fn,{method:'POST',headers:{apikey:KEY,Authorization:'Bearer '+KEY,'Content-Type':'application/json'},body:JSON.stringify(body)}).then(function(r){return r.text().then(function(t){var j=null;try{j=t?JSON.parse(t):null}catch(e){}if(!r.ok)throw new Error((j&&j.message)||'Erro '+r.status);return j})})}
var css='#nxc-b{position:fixed;right:16px;bottom:16px;z-index:900;width:60px;height:60px;border-radius:50%;background:#2A56E0;color:#fff;border:0;cursor:pointer;box-shadow:0 6px 22px rgba(0,0,0,.32);display:flex;align-items:center;justify-content:center}#nxc-b svg{width:28px;height:28px}'+
'#nxc-bd{position:absolute;top:-4px;right:-4px;min-width:20px;height:20px;border-radius:10px;background:#FF6A2B;color:#fff;font:700 12px/20px Inter,system-ui,sans-serif;text-align:center;padding:0 5px}#nxc-bd[hidden]{display:none}'+
'#nxc-p{position:fixed;right:16px;bottom:88px;z-index:900;width:min(360px,calc(100vw - 32px));height:min(480px,calc(100vh - 120px));background:#fff;color:#0B1630;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.35);overflow:hidden;font:15px/1.45 Inter,system-ui,sans-serif;display:flex;flex-direction:column}#nxc-p[hidden]{display:none}'+
'#nxc-p header{background:#0B1630;color:#fff;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;gap:8px}#nxc-p header b{display:block;font-size:16px}#nxc-p header span{font-size:12px;color:#9fb0d0}#nxc-x{background:none;border:0;color:#fff;font-size:24px;cursor:pointer;line-height:1}'+
'#nxc-w{color:#9fe8b8;font-size:12px;text-decoration:underline;white-space:nowrap}'+
'#nxc-l{flex:1;overflow:auto;padding:12px;background:#F2EFE8;display:flex;flex-direction:column;gap:8px}#nxc-l div{max-width:82%;padding:8px 11px;border-radius:12px;font-size:14.5px;white-space:pre-wrap;word-wrap:break-word}#nxc-l .c{align-self:flex-end;background:#2A56E0;color:#fff;border-bottom-right-radius:4px}#nxc-l .s{align-self:flex-start;background:#fff;border-bottom-left-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.1)}#nxc-l .i{align-self:center;background:none;color:#5b6578;font-size:12.5px;text-align:center;max-width:100%}'+
'#nxc-f{display:flex;gap:6px;padding:10px;border-top:1px solid #e3ded3;background:#fff}#nxc-f input,#nxc-f textarea{flex:1;border:1px solid #d9d4c8;border-radius:10px;padding:9px 10px;font:inherit;color:#0B1630;background:#fff;resize:none}#nxc-f button{background:#2A56E0;color:#fff;border:0;border-radius:10px;padding:0 14px;font:700 14px Inter,system-ui,sans-serif;cursor:pointer}#nxc-f button:disabled{opacity:.5}'+
'#nxc-s{padding:14px;overflow:auto}#nxc-s .m{background:#F2EFE8;border-radius:12px;padding:10px 12px;margin-bottom:8px;font-size:14px}#nxc-s label{display:block;font-size:12px;color:#5b6578;margin:8px 0 3px}#nxc-s input,#nxc-s textarea{width:100%;border:1px solid #d9d4c8;border-radius:8px;padding:9px 10px;font:inherit;color:#0B1630;background:#fff}#nxc-s button{width:100%;margin-top:12px;background:#2A56E0;color:#fff;border:0;border-radius:10px;padding:11px;font:700 15px Inter,system-ui,sans-serif;cursor:pointer}#nxc-s small{display:block;margin-top:8px;color:#5b6578;font-size:11.5px}#nxc-e{color:#b42318;font-size:12.5px;margin-top:6px}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var b=document.createElement('button');b.id='nxc-b';b.type='button';b.setAttribute('aria-label','Abrir chat de suporte');
b.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg><span id="nxc-bd" hidden>0</span>';
var p=document.createElement('div');p.id='nxc-p';p.hidden=true;p.setAttribute('role','dialog');p.setAttribute('aria-label','Chat de suporte');
p.innerHTML='<header><div><b>Suporte NEXORA</b><span>Falamos consigo aqui</span></div><div style="display:flex;gap:10px;align-items:center"><a id="nxc-w" target="_blank" rel="noopener">WhatsApp</a><button id="nxc-x" type="button" aria-label="Fechar">×</button></div></header><div id="nxc-body" style="display:flex;flex-direction:column;flex:1;min-height:0"></div>';
document.body.appendChild(p);document.body.appendChild(b);
var body=p.querySelector('#nxc-body'),badge=b.querySelector('#nxc-bd');
document.getElementById('nxc-w').href='https://wa.me/'+WA+'?text='+encodeURIComponent('Olá! Preciso de ajuda com a NEXORA.');
var token=ls('nxc_t'),seen=parseInt(ls('nxc_seen')||'0',10),last=0,unread=0,timer=null,inApp=false,msgs=[];
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function showStart(){
  body.innerHTML='<div id="nxc-s"><div class="m">Olá! Escreva a sua pergunta e a nossa equipa responde-lhe aqui mesmo, neste chat.</div><form id="nxc-sf"><label for="nxc-n">O seu nome</label><input id="nxc-n" maxlength="60" autocomplete="name" required><label for="nxc-t">A sua pergunta</label><textarea id="nxc-t" rows="3" maxlength="1000" required placeholder="Ex.: Preciso de ajuda com a minha conta"></textarea><button type="submit">Iniciar conversa</button><div id="nxc-e"></div><small>Não partilhe palavras-passe nem dados de pagamento neste chat.</small></form></div>';
  body.querySelector('#nxc-sf').onsubmit=function(e){e.preventDefault();var btn=e.target.querySelector('button');btn.disabled=true;
    rpc('chat_start',{p_name:document.getElementById('nxc-n').value,p_body:document.getElementById('nxc-t').value,p_source:inApp?'conta':'site'}).then(function(r){token=r.token;ls('nxc_t',token);seen=0;last=0;msgs=[];showChat();poll()}).catch(function(er){document.getElementById('nxc-e').textContent=er.message;btn.disabled=false})};
  setTimeout(function(){var n=document.getElementById('nxc-n');n&&n.focus()},50);
}
function showChat(){
  body.innerHTML='<div id="nxc-l" aria-live="polite"></div><form id="nxc-f"><input id="nxc-i" maxlength="1000" placeholder="Escreva uma mensagem" autocomplete="off"><button type="submit">Enviar</button></form>';
  draw();
  body.querySelector('#nxc-f').onsubmit=function(e){e.preventDefault();var i=document.getElementById('nxc-i'),t=i.value.trim();if(!t)return;i.value='';
    rpc('chat_send',{p_token:token,p_body:t}).then(poll).catch(function(er){msgs.push({id:'e'+Date.now(),sender:'info',body:'Não foi possível enviar: '+er.message});draw()})};
  setTimeout(function(){var i=document.getElementById('nxc-i');i&&i.focus()},50);
}
function draw(){
  var l=document.getElementById('nxc-l');if(!l)return;
  var h=msgs.map(function(m){return '<div class="'+(m.sender==='cliente'?'c':m.sender==='suporte'?'s':'i')+'">'+esc(m.body)+'</div>'}).join('');
  if(msgs.length&&!msgs.some(function(m){return m.sender==='suporte'}))h+='<div class="i">Recebemos a sua mensagem. Respondemos assim que possível. Se for urgente, use o WhatsApp.</div>';
  var atEnd=l.scrollHeight-l.scrollTop-l.clientHeight<60;l.innerHTML=h;if(atEnd||true)l.scrollTop=l.scrollHeight;
}
function poll(){
  if(!token)return Promise.resolve();
  return rpc('chat_fetch',{p_token:token,p_after:last}).then(function(r){
    if(r.status==='invalido'){token=null;ls('nxc_t',null);msgs=[];last=0;if(!p.hidden)showStart();return}
    var add=r.messages||[];if(add.length){add=add.filter(function(m){return !msgs.some(function(x){return x.id===m.id})});add.forEach(function(m){msgs.push(m);if(m.id>last)last=m.id});
      if(p.hidden){unread=msgs.filter(function(m){return m.sender==='suporte'&&m.id>seen}).length}else{seen=last;ls('nxc_seen',String(seen))}
      draw()}
    badge.textContent=unread;badge.hidden=!unread||!p.hidden;
  }).catch(function(){});
}
function sched(){clearTimeout(timer);if(token&&!document.hidden)poll();timer=setTimeout(sched,p.hidden?20000:4000)}
function open(){p.hidden=false;unread=0;badge.hidden=true;seen=last;ls('nxc_seen',String(seen));if(token){showChat();poll()}else showStart();sched()}
b.onclick=function(){if(p.hidden)open();else{p.hidden=true;sched()}};
document.getElementById('nxc-x').onclick=function(){p.hidden=true;sched()};
document.addEventListener('visibilitychange',function(){if(!document.hidden)sched()});
function sync(){var f=document.getElementById('formLogin');inApp=!!f&&!f.getClientRects().length;
 var bn=document.querySelector('.bnav'),low=!!(bn&&bn.getClientRects().length&&getComputedStyle(bn).visibility!=='hidden');
 b.style.bottom=low?'84px':'16px';p.style.bottom=low?'156px':'88px'}
sync();setInterval(sync,800);
if(token){msgs=[];poll().then(function(){unread=msgs.filter(function(m){return m.sender==='suporte'&&m.id>seen}).length;badge.textContent=unread;badge.hidden=!unread});sched()}
})();
