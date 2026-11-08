document.addEventListener('DOMContentLoaded',()=>{
 const directory=document.getElementById('rating-directory');
 if(!directory)return;
 const search=document.getElementById('company-search'),sort=document.getElementById('company-sort');
 function render(){let list=getCompanies().filter(c=>(c.name+' '+c.sector).toLowerCase().includes(search.value.trim().toLowerCase()));const score=c=>calculateDDI(c.ads,c.ows,c.rvs);if(sort.value!=='original')list.sort((a,b)=>sort.value==='low'?score(a)-score(b):score(b)-score(a));document.getElementById('results-count').textContent=list.length+' / '+getCompanies().length+' companies';directory.innerHTML=list.length?list.map(c=>`<a class="directory-link" style="--score-color:${score(c)>=8?'#ff936e':score(c)>=5?'#e7ca91':'#65dfcc'}" href="${reportURL(c)}"><img src="${escapeHTML(c.logo)}" alt=""><span>${escapeHTML(c.name)}<small>${getState(score(c)).label}</small></span><b>${score(c).toFixed(1)}</b></a>`).join(''):'<p class="directory-empty">No companies match. Try another name or sector.</p>';}
 search.addEventListener('input',render);sort.addEventListener('change',render);render();
 const keys=['ads','ows','rvs'];function update(){const values=keys.map(k=>{const v=Number(document.getElementById('lab-'+k).value);document.getElementById(k+'-value').textContent=v;return v});const score=calculateDDI(...values);document.getElementById('lab-score').textContent=score.toFixed(1);document.getElementById('lab-state').textContent=getState(score).label;}keys.forEach(k=>document.getElementById('lab-'+k).addEventListener('input',update));update();
});

document.addEventListener('DOMContentLoaded',()=>{
 const field=document.querySelector('.signal-art');
 if(!field)return;
 document.querySelectorAll('[data-blob-choice]').forEach(button=>button.addEventListener('click',()=>{
  field.dataset.blob=button.dataset.blobChoice;
  document.querySelectorAll('[data-blob-choice]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 }));
});
