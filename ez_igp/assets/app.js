'use strict';
const tasks = [
  ['dmc','dog_stand',0,'Dog · Stand'], ['dmc','dog_walk',1,'Dog · Walk'],
  ['dmc','dog_trot',2,'Dog · Trot'], ['dmc','dog_run',3,'Dog · Run'],
  ['dmc','humanoid_stand',0,'Humanoid · Stand'], ['dmc','humanoid_walk',1,'Humanoid · Walk'],
  ['dmc','humanoid_run',2,'Humanoid · Run'], ['hb','h1hand-stand',0,'H1-Hand · Stand'],
  ['hb','h1hand-walk',1,'H1-Hand · Walk'], ['hb','h1hand-run',2,'H1-Hand · Run']
].map(([suite,id,episode,title]) => ({suite,id,episode,title}));
const $ = id => document.getElementById(id);
const pair = [$('gaussian'), $('igp')];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let mode = 'compare', playing = false, wallPlaying = false, generation = 0;
const path = (task,policy) => `assets/videos/${task.suite}/${policy}/${task.id}_epi_${task.episode}_1000.mp4`;
const filtered = () => tasks.filter(t => $('benchmark').value === 'all' || t.suite === $('benchmark').value);
const selected = () => tasks.find(t => t.id === $('task').value);
const status = text => { $('video-status').textContent = text; };
function pausePair() { generation++; playing = false; pair.forEach(v => v.pause()); $('play').textContent = 'Play pair'; }
async function playPair() {
  const ticket = ++generation;
  try {
    await Promise.all(pair.map(v => v.play()));
    if (ticket !== generation) return;
    playing = true; $('play').textContent = 'Pause pair'; status('');
  } catch {
    if (ticket !== generation) return;
    pausePair(); status('Playback could not start. Try the individual video controls.');
  }
}
function showTask() {
  pausePair(); const task = selected(); if (!task) return;
  $('task-title').textContent = `${task.suite === 'dmc' ? 'DMControl' : 'HumanoidBench'} / ${task.title}`;
  const list = filtered(); $('task-position').textContent = `${list.indexOf(task)+1} / ${list.length}`;
  pair.forEach((v,i) => {v.src = path(task,i ? 'igp' : 'gaussian'); v.playbackRate = Number($('speed').value); v.setAttribute('aria-label',`${task.title}: ${i ? 'factorized policy with IGP' : 'Gaussian policy'}`); v.load();});
  status('');
}
function populateTasks() {
  const previous = $('task').value;
  $('task').replaceChildren(...filtered().map(t => new Option(t.title,t.id)));
  if (filtered().some(t => t.id === previous)) $('task').value = previous;
  showTask();
}
pair.forEach(v => {
  v.addEventListener('error',() => status('A video could not load. Please check the connection or try another task.'));
  v.addEventListener('ended',() => { if(pair.every(x => x.ended)) {playing = false; $('play').textContent = 'Play pair';} });
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(({target,isIntersecting}) => {
    target.dataset.visible = String(isIntersecting);
    if (isIntersecting && mode === 'wall' && wallPlaying && !document.hidden) {
      target.querySelectorAll('video').forEach(v => { if(!v.src){v.src=v.dataset.src;v.load();} v.play().catch(()=>{}); });
    } else target.querySelectorAll('video').forEach(v=>v.pause());
  });
},{threshold:0.15});
function refreshWallPlayback() {
  document.querySelectorAll('.wall-card').forEach(card => {
    card.querySelectorAll('video').forEach(v => {
      if(mode === 'wall' && wallPlaying && card.dataset.visible === 'true' && !document.hidden){
        if(!v.src){v.src=v.dataset.src;v.load();} v.play().catch(()=>{});
      } else v.pause();
    });
  });
}
function renderWall() {
  observer.disconnect(); $('wall').querySelectorAll('video').forEach(v=>v.pause()); $('wall').replaceChildren();
  filtered().forEach(task => {
    const card = document.createElement('article'); card.className='wall-card';
    const heading = document.createElement('h3'); heading.textContent=`${task.suite === 'dmc' ? 'DMC' : 'HB'} / ${task.title}`; card.append(heading);
    const grid = document.createElement('div'); grid.className='pair';
    ['gaussian','igp'].forEach(policy => {
      const figure = document.createElement('figure'); figure.className=`video-frame ${policy}`;
      const caption = document.createElement('figcaption');
      const dot = document.createElement('span'); dot.className='dot'; caption.append(dot,policy==='igp'?'Factorized + IGP':'Gaussian');
      const v = document.createElement('video'); v.muted=true;v.loop=true;v.playsInline=true;v.controls=true;v.preload='none';v.dataset.src=path(task,policy);v.playbackRate=Number($('speed').value);v.setAttribute('aria-label',`${task.title}: ${policy}`);
      // Load on visibility even when reduced-motion disables autoplay, so controls remain usable.
      v.addEventListener('error',()=>status(`Unable to load ${task.title} (${policy}).`));
      figure.append(caption,v);grid.append(figure);
    });
    const open = document.createElement('button');open.textContent='Compare this task ↗';
    open.onclick=()=>{$('task').value=task.id;setMode('compare');showTask();$('rollouts').scrollIntoView({behavior:reducedMotion?'instant':'smooth'});};
    card.append(grid,open);$('wall').append(card);observer.observe(card);
  });
}
// Lazy-load visible wall videos independently of autoplay preferences.
const loader = new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
  if(isIntersecting){if(!target.src){target.src=target.dataset.src;target.load();}loader.unobserve(target);}
}),{rootMargin:'150px'});
function setMode(next) {
  pausePair(); mode=next;
  $('compare-mode').setAttribute('aria-pressed',String(mode==='compare'));
  $('wall-mode').setAttribute('aria-pressed',String(mode==='wall'));
  $('comparison').hidden=mode!=='compare';$('wall').hidden=mode!=='wall';$('task-label').hidden=mode!=='compare';
  if(mode==='wall') {
    wallPlaying=!reducedMotion;renderWall();loader.disconnect();$('wall').querySelectorAll('video').forEach(v=>loader.observe(v));
    $('play').textContent=wallPlaying?'Pause wall':'Play wall';
  } else {wallPlaying=false;refreshWallPlayback();}
  status('');
}
$('compare-mode').onclick=()=>setMode('compare');$('wall-mode').onclick=()=>setMode('wall');
$('benchmark').onchange=()=>{populateTasks();if(mode==='wall')setMode('wall');};
$('task').onchange=showTask;
$('play').onclick=()=>{
  if(mode==='wall'){wallPlaying=!wallPlaying;$('play').textContent=wallPlaying?'Pause wall':'Play wall';refreshWallPlayback();}
  else if(playing || pair.some(v=>!v.paused))pausePair();else {pair.forEach(v=>{if(v.ended)v.currentTime=0;});playPair();}
};
$('restart').onclick=()=>{
  if(mode==='compare'){pausePair();pair.forEach(v=>{v.currentTime=0;});playPair();}
  else {$('wall').querySelectorAll('video').forEach(v=>{if(v.readyState)v.currentTime=0;});refreshWallPlayback();}
};
$('speed').onchange=()=>document.querySelectorAll('video').forEach(v=>v.playbackRate=Number($('speed').value));
function step(delta){const list=filtered();const index=list.findIndex(t=>t.id===$('task').value);$('task').value=list[(index+delta+list.length)%list.length].id;showTask();}
$('previous').onclick=()=>step(-1);$('next').onclick=()=>step(1);
document.addEventListener('visibilitychange',()=>{if(document.hidden){pausePair();document.querySelectorAll('#wall video').forEach(v=>v.pause());}else if(mode==='wall'){refreshWallPlayback();$('play').textContent=wallPlaying?'Pause wall':'Play wall';}});
populateTasks();
