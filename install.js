let installEvent;
const installButton=document.getElementById('btn-instalar');
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installEvent=event;installButton.hidden=false;});
installButton.addEventListener('click',async()=>{if(!installEvent)return;try{await installEvent.prompt();await installEvent.userChoice;}finally{installEvent=null;installButton.hidden=true;}});
window.addEventListener('appinstalled',()=>{installEvent=null;installButton.hidden=true;});
if('serviceWorker' in navigator)window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js').catch(()=>{});});
