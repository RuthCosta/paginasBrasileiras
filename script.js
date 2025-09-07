
const AUTHORS = Object.freeze([
{name:'Machado de Assis',birth:1839,death:1908,bio:'O maior nome do Realismo brasileiro e da literatura nacional. Profunda análise psicológica, ironia e narrativa inovadora.',works:[{title:'Memórias Póstumas de Brás Cubas',year:1881,summary:'Marco inicial do Realismo no Brasil; sátira da elite carioca narrada por um defunto.'},{title:'Quincas Borba',year:1891,summary:'Crítica à filosofia do "Humanitismo"; explora loucura, ambição e herança.'},{title:'Dom Casmurro',year:1899,summary:'Romance psicológico centrado na dúvida sobre a fidelidade de Capitu.'},{title:'Esaú e Jacó',year:1904,summary:'Parte da sequência final da produção realista de Machado.'},{title:'Memorial de Aires',year:1908,summary:'Fecho da sua produção, com tom reflexivo e melancólico.'}]},
{name:'Aluísio Azevedo',birth:1857,death:1913,bio:'Principal representante do Naturalismo brasileiro; foca na influência do meio sobre o indivíduo e em patologias sociais.',works:[{title:'O Mulato',year:1881,summary:'Denúncia do preconceito racial no Maranhão.'},{title:'Casa de Pensão',year:1884,summary:'Crítica à exploração e vida nos subúrbios cariocas.'},{title:'O Cortiço',year:1890,summary:'Obra-prima naturalista: o cortiço como organismo social que determina destinos.'}]},
{name:'Raul Pompeia',birth:1863,death:1895,bio:'Autor entre o Realismo e o Naturalismo; estilo impressionista e psicológico.',works:[{title:'O Ateneu',year:1888,summary:'Crítica à instituição escolar: corrupção, violência e hipocrisia na elite.'}]},
{name:'Visconde de Taunay',birth:1843,death:1899,bio:'Autor mais conhecido por obras românticas, mas com contribuições realistas relevantes.',works:[{title:'Inocência',year:1872,summary:'Transição ao Realismo: descrição documental do sertão, costumes e linguagem.'}]}]);


const mapToHtml = (fn) => (arr) => arr.map(fn);
const formatDates = a => `${a.birth} — ${a.death}`;
const listComprehension = (arr, mapFn, filterFn = () => true) => arr.filter(filterFn).map(mapFn);
const makeHoverHandler = (works) => (ev) => { const pop = ev.currentTarget.querySelector('.popover'); if(pop) pop.style.display='block'; };
const makeLeaveHandler = (works) => (ev) => { const pop = ev.currentTarget.querySelector('.popover'); if(pop) pop.style.display='none'; };
const createElement = (tag, attrs={}, children=[]) => { const el=document.createElement(tag); Object.entries(attrs).forEach(([k,v])=>{ if(k==='class')el.className=v; else if(k==='html')el.innerHTML=v; else if(k==='text')el.textContent=v; else el.setAttribute(k,v); }); (Array.isArray(children)?children:[children]).forEach(c=>c&&el.appendChild(c)); return el; };
const workToNode = w => { const div=createElement('div',{class:'work'}); div.appendChild(createElement('b',{text:`${w.title} (${w.year})`})); div.appendChild(createElement('small',{text:w.summary})); return div; };
const authorToNode = author => {
const item=createElement('div',{class:'item'});
const left=createElement('div',{style:'display:flex;align-items:center;gap:12px;'});
const dates=createElement('div',{class:'dates',text:formatDates(author)});
const authorLabel=createElement('div',{class:'author',tabindex:0});
authorLabel.appendChild(createElement('div',{html:`<strong>${author.name}</strong><div style="font-size:.9rem;color:#556">${author.bio}</div>`}));
const pop=createElement('div',{class:'popover'});
pop.appendChild(createElement('h4',{text:'Principais obras (estilo realista)'}));
listComprehension(author.works,w=>workToNode(w)).forEach(n=>pop.appendChild(n));
authorLabel.appendChild(pop);
authorLabel.addEventListener('mouseenter', makeHoverHandler(author.works));
authorLabel.addEventListener('mouseleave', makeLeaveHandler(author.works));
authorLabel.addEventListener('focus', makeHoverHandler(author.works));
authorLabel.addEventListener('blur', makeLeaveHandler(author.works));
left.appendChild(dates);
left.appendChild(authorLabel);
const toggleBtn=createElement('button',{class:'toggle',text:'Detalhes'});
const makeToggleHandler = (createDetailNode) => { let open=false; return () => { open=!open; if(open){ const detail=createDetailNode(); toggleBtn.textContent='Fechar'; toggleBtn._detail=detail; item.appendChild(detail); } else { toggleBtn.textContent='Detalhes'; if(toggleBtn._detail)item.removeChild(toggleBtn._detail); toggleBtn._detail=null; } }; };
const createDetailNode = () => { const d=createElement('div',{style:'margin-top:12px;padding:12px;border-top:1px solid #eef;border-radius:8px;background:#fbfdff;'}); d.appendChild(createElement('div',{html:`<strong>${author.name} — ${author.birth}–${author.death}</strong>`})); d.appendChild(createElement('p',{text:author.bio})); const worksList=createElement('div'); mapToHtml(workToNode)(author.works).forEach(n=>worksList.appendChild(n)); d.appendChild(worksList); return d; };
toggleBtn.addEventListener('click', makeToggleHandler(createDetailNode));
item.appendChild(left);
item.appendChild(toggleBtn);
return item;
};
const container=document.querySelector('.timeline');
AUTHORS.slice().sort((a,b)=>a.birth-b.birth).map(authorToNode).forEach(n=>container.appendChild(n));