'use strict';
const el=id=>document.getElementById(id);
const list=(id,items)=>{el(id).replaceChildren(...items.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));};
async function release(){
  const response=await fetch('release.json',{cache:'no-store'});
  if(!response.ok)throw Error('Release metadata unavailable');
  const data=await response.json();
  el('version').textContent=`v${data.version} · ${data.channel==='stable'?'STABLE RELEASE':'DEVELOPMENT PREVIEW'}`;
  for(const platform of ['android','windows']){
    const artifact=data.artifacts[platform],url=new URL(artifact.url);
    if(url.protocol!=='https:'||!/^Car-Racing-Game-(Android|Windows)-v[\w.-]+\.(apk|zip)$/.test(artifact.file)||!/^[a-f0-9]{64}$/.test(artifact.sha256))throw Error('Invalid release artifact');
    el(platform).href=url.href;el(platform).classList.remove('disabled');el(platform).removeAttribute('aria-disabled');
    el(platform+'-size').textContent=`${(artifact.bytes/1048576).toFixed(1)} MB · ${platform==='android'?'Release signed APK · ARM64 + ARMv7':'Windows 64-bit · Portable ZIP'}`;
    const hash=document.createElement('div');hash.className='hash';const name=document.createElement('strong');name.textContent=artifact.file;hash.append(name,document.createTextNode(artifact.sha256));el('hashes').append(hash);
  }
  list('notes',data.release_notes||[]);list('limitations',data.limitations||[]);
  el('service').textContent=data.availability||'The multiplayer service has separate hosting.';
  try{const discovery=await fetch('service.json',{cache:'no-store'});const service=discovery.ok?await discovery.json():data;if(!service.service_url)throw Error('No public server configured');const status=await fetch(service.service_url+'/health',{signal:AbortSignal.timeout(7000)});if(!status.ok)throw Error('Server offline');const info=await status.json();el('service').textContent=`Service online · ${info.online} players · ${info.racing||0} racing · ${info.waiting||0} waiting`;}catch{el('service').textContent='Public multiplayer server offline / not configured. Offline races remain available.';}
}
release().catch(error=>{el('version').textContent=error.message;});
