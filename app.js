'use strict';
const oni=document.getElementById('oni'),button=document.getElementById('ar'),status=document.getElementById('status');
const loadTimeout=setTimeout(()=>{if(button.disabled)status.textContent='読み込みに時間がかかっています。通信状態を確認してください。'},20000);
oni.addEventListener('load',()=>{clearTimeout(loadTimeout);button.disabled=false;button.textContent='床に鬼を置く';status.textContent='';});
oni.addEventListener('error',()=>{clearTimeout(loadTimeout);status.textContent='3Dデータを読み込めません。ファイルの配置と通信を確認してください。';});
oni.addEventListener('ar-status',e=>{if(e.detail.status==='failed')status.textContent='ARを開始できませんでした。iPhoneはSafari、AndroidはAR対応のChromeでお試しください。';});
customElements.whenDefined('model-viewer').then(()=>{if(!window.isSecureContext)status.textContent='ARを使うにはHTTPSのサイトで開いてください。';});
document.getElementById('help').onclick=()=>document.getElementById('guide').showModal();document.getElementById('close').onclick=()=>document.getElementById('guide').close();
