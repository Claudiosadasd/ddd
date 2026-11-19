(function(){
var NUM='351930592465';
var gate=document.currentScript&&document.currentScript.getAttribute('data-gate');
var css='#nxc-b{position:fixed;right:16px;bottom:16px;z-index:900;display:flex;align-items:center;gap:8px;background:#25D366;color:#06260f;border:0;border-radius:99px;padding:12px 18px;font:600 15px Inter,system-ui,sans-serif;cursor:pointer;box-shadow:0 6px 22px rgba(0,0,0,.28)}#nxc-b svg{width:22px;height:22px}'+
'#nxc-p{position:fixed;right:16px;bottom:76px;z-index:900;width:min(340px,calc(100vw - 32px));background:#fff;color:#0B1630;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.35);overflow:hidden;font:15px/1.45 Inter,system-ui,sans-serif}#nxc-p[hidden]{display:none}'+
'#nxc-p header{background:#0B1630;color:#fff;padding:14px 16px;display:flex;justify-content:space-between;align-items:center}#nxc-p header b{display:block;font-size:16px}#nxc-p header span{font-size:12px;color:#9fb0d0}#nxc-x{background:none;border:0;color:#fff;font-size:22px;cursor:pointer;line-height:1}'+
'#nxc-p form{padding:14px 16px 16px}#nxc-p .m{background:#F2EFE8;border-radius:12px;padding:10px 12px;margin-bottom:10px;font-size:14px}#nxc-p label{display:block;font-size:12px;color:#5b6578;margin:8px 0 3px}#nxc-p input,#nxc-p textarea{width:100%;border:1px solid #d9d4c8;border-radius:8px;padding:9px 10px;font:inherit;color:#0B1630;background:#fff}'+
'#nxc-p button[type=submit]{width:100%;margin-top:12px;background:#25D366;color:#06260f;border:0;border-radius:10px;padding:11px;font:700 15px Inter,system-ui,sans-serif;cursor:pointer}#nxc-p small{display:block;margin-top:8px;color:#5b6578;font-size:11.5px}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var b=document.createElement('button');b.id='nxc-b';b.type='button';b.setAttribute('aria-label','Falar connosco no WhatsApp');
b.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4z"/></svg><span>Fale connosco</span>';
var p=document.createElement('div');p.id='nxc-p';p.hidden=true;p.setAttribute('role','dialog');p.setAttribute('aria-label','Chat de atendimento');
p.innerHTML='<header><div><b>NEXORA · Atendimento</b><span>Responde-lhe no WhatsApp</span></div><button id="nxc-x" type="button" aria-label="Fechar">×</button></header>'+
'<form><div class="m">Olá! Diga-nos o seu nome e a sua pergunta. Abrimos o WhatsApp com a mensagem pronta a enviar.</div>'+
'<label for="nxc-n">O seu nome</label><input id="nxc-n" maxlength="60" autocomplete="name" required>'+
'<label for="nxc-t">A sua pergunta</label><textarea id="nxc-t" rows="3" maxlength="500" required placeholder="Ex.: Quero saber os preços dos planos"></textarea>'+
'<button type="submit">Continuar no WhatsApp</button><small>Ao continuar, a conversa passa para o WhatsApp e fica sujeita às regras dessa aplicação.</small></form>';
document.body.appendChild(p);document.body.appendChild(b);
function tog(o){p.hidden=!(o===undefined?p.hidden:!o)?true:false}
b.onclick=function(){p.hidden=!p.hidden;if(!p.hidden)document.getElementById('nxc-n').focus()};
document.getElementById('nxc-x').onclick=function(){p.hidden=true};
p.querySelector('form').onsubmit=function(e){e.preventDefault();
 var n=document.getElementById('nxc-n').value.trim(),t=document.getElementById('nxc-t').value.trim();if(!n||!t)return;
 var msg='Olá! Sou '+n+'. '+t+'\n\n(Enviado através do site NEXORA)';
 window.open('https://wa.me/'+NUM+'?text='+encodeURIComponent(msg),'_blank','noopener');p.hidden=true;e.target.reset()};
if(gate==='login'){var chk=function(){var f=document.getElementById('formLogin');var vis=!!(f&&f.offsetParent);b.style.display=vis?'':'none';if(!vis)p.hidden=true};chk();setInterval(chk,800)}
})();
