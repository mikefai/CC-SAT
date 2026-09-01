(function(){
  var qs=[{q:"Q1 — meaning/operate?", opts:["A trap","B partial","C correct","D inference"], ans:"C"},
           {q:"Q2 — algebra/structure?", opts:["A trap","B correct","C error","D guess"], ans:"B"},
           {q:"Q3 — evidence/data?", opts:["A one point","B full trend","C misread","D out"], ans:"B"},
           {q:"Q4 — convention?", opts:["A comma splice","B correct","C fused","D redundancy"], ans:"B"}];
  var el=document.getElementById('qs'); qs.forEach(function(item,i){ var d=document.createElement('div'); d.className='q'; d.dataset.ans=item.ans; d.innerHTML='<div style="font-weight:700;margin-bottom:.4rem">'+item.q+'</div>' + item.opts.map(function(o,j){ var v=String.fromCharCode(65+j); return '<label style="display:block;margin:.3rem 0"><input type="radio" name="q'+i+'" value="'+v+'"> '+o+'</label>'; }).join(''); el.appendChild(d); });
  var timer=document.getElementById('timer'), start=document.getElementById('startBtn'), reset=document.getElementById('resetBtn');
  var sec=360, iv=null; function fmt(s){var m=Math.floor(s/60), r=s%60; return String(m).padStart(2,'0')+':'+String(r).padStart(2,'0')}
  function tick(){sec--; timer.textContent=fmt(sec); if(sec<=0){timer.classList.add('over'); clearInterval(iv); iv=null;}}
  timer.textContent=fmt(sec); start.addEventListener('click', function(){ if(iv){clearInterval(iv); iv=null; start.textContent='Start 6:00'; return;} sec=360; timer.textContent=fmt(sec); iv=setInterval(tick,1000); start.textContent='Pause';});
  reset.addEventListener('click', function(){clearInterval(iv); iv=null; sec=360; timer.textContent=fmt(sec); start.textContent='Start 6:00'; document.querySelectorAll('input[type=radio]').forEach(function(i){i.checked=false}); document.querySelectorAll('.q').forEach(function(q){q.classList.remove('correct','wrong')}); document.getElementById('score').textContent='';});
  document.getElementById('checkBtn').addEventListener('click', function(){ var s=0; document.querySelectorAll('.q').forEach(function(q){ var c=q.querySelector('input:checked'); var ok=c && c.value===q.dataset.ans; q.classList.toggle('correct', ok); q.classList.toggle('wrong', c && !ok); if(ok) s++; }); document.getElementById('score').textContent=s+' / '+qs.length; });
  document.getElementById('showBtn').addEventListener('click', function(){ var m=document.getElementById('models'); m.style.display=m.style.display==='none'?'block':'none'; });
})();