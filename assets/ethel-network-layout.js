/* Canon cluster membership is supplied unchanged by ethel-nodes-data.js.
 * Motion is an interpretation of pressure, not a new personal-contact claim.
 * Sources: THE_NETWORK_DEFINITIVE parts 2–4; UpdatedCannon_oneFilePerCharacter
 * (especially Marcus Vane, Lachlan Sterling and Ross Kinley); primary Isla/Ethel.
 */
window.ETHEL_NETWORK_LAYOUT = (() => {
 const colours=['#b99a6a','#b08260','#809e9c','#9d8caa','#889b76','#b49980'];
 // Spud's accidental disclosures exert the same pull in either direction.
 const spudPull=.38;
 const pressureOnDominic={
  'Spud':spudPull,'Ethel Ryker':.55,'Isla':.68,
  'Det. Insp. Macready':.55,'Agent Allie Miller':.5,"'Iron' Irene":.62,
  'Dr. Al-Fayed':.45,"Jack 'The Shiv' Hennessy":.5,'Frau Edelstein':.55,
  "Captain 'Sully' Sullivan":.45,'Mara Quinn':.5
 };
 function arrange(graph){
  const people=graph.nodes.filter(n=>n.kind!=='group'),hubs=graph.nodes.filter(n=>n.kind==='group');
  const clusters=hubs.map((hub,i)=>{const members=people.filter(n=>n.cluster===hub.name||n.cluster.toLowerCase()===hub.name.toLowerCase());return {id:hub.id,name:members[0]?.cluster||hub.name,hub,members,colour:colours[i%colours.length],radius:Math.max(460,205*Math.sqrt(members.length)+190)};});
  // Variable-width shelves leave a clear corridor between complete clusters.
  const area=clusters.reduce((a,c)=>a+(c.radius*2+500)*(c.radius*2+600),0),width=Math.sqrt(area*1.65);
  let x=200,y=200,rowHeight=0;
  for(const c of clusters){const size=c.radius*2;if(x+size>width&&x>200){x=200;y+=rowHeight+420;rowHeight=0;}c.x=x+c.radius;c.y=y+c.radius+180;
   c.members.forEach((n,j)=>{const theta=j*2.399963229728653,r=200*Math.sqrt(j+.5);n.x=c.x+Math.cos(theta)*r;n.y=c.y+Math.sin(theta)*r;n.clusterColour=c.colour;});
   c.hub.x=c.x;c.hub.y=c.y-c.radius-110;c.hub.role='Canon grouping';c.hub.note='These records share a thread or function. That does not mean everyone here knows one another.';c.hub.clusterColour=c.colour;
   x+=size+480;rowHeight=Math.max(rowHeight,size+260);
  }
  // Dominic belongs to the family cast, but anchors the pressure map beside the Board.
  const dominic=people.find(n=>n.name==='Dominic Ryker'),board=clusters.find(c=>c.name==='THE BOARD');
  if(dominic&&board){dominic.x=board.x;dominic.y=board.y+board.radius+270;}
  const by=Object.fromEntries(graph.nodes.map(n=>[n.id,n]));
  graph.edges.forEach(e=>{e.rest=Math.hypot(by[e.a].x-by[e.b].x,by[e.a].y-by[e.b].y);e.pull=e.kind==='group'?.12:e.kind==='resists'?-.23:e.kind==='alias'?.65:.4;});
  graph.clusters=clusters;
  return graph;
 }
 function influence(graph,id){
  const ns=graph.nodes,source=ns.find(n=>n.id===id),weights=new Map();if(!source)return weights;
  if(source.name==='Dominic Ryker'){
   for(const n of ns){let w=0;
    if(n.cluster==='THE RUSSIANS')w=.98;
    else if(n.cluster==='THE BOARD')w=n.name==='Marcus Vane'?.6:.86;
    else if(n.cluster==='THE SYDNEY HUB')w=n.name==='Lachlan Sterling'?.76:n.name==='Spud'?spudPull:.22;
    else if(n.cluster==='GLOBAL OPERATIONS'&&n.name!=='Dr. Kovac')w=.16;
    else if(n.cluster==='THE FRONTS')w=.18;
    else if(n.cluster==='THE RESISTANCE')w=-.10;
    if(n.name==='Isla')w=-.68;
    if(n.name==='Ethel Ryker')w=-.32;
    if(n.name==='Gran (Dr. Elizabeth Ryker)'||n.name==='Pop')w=-.2;
    if(n.name==='Keep It Real Bro Podcast')w=.08;
    if(w)weights.set(n.id,w);
   }
  }else{
   // A local tug carries through named relationships, with attenuated second hops.
   weights.set(id,1);let front=[id];
   for(let depth=0;depth<2;depth++){const next=[];for(const a of front)for(const e of graph.edges){if(e.kind==='group')continue;const b=e.a===a?e.b:e.b===a?e.a:null;if(!b||b===id)continue;const w=weights.get(a)*e.pull;if(Math.abs(w)>Math.abs(weights.get(b)||0)){weights.set(b,w);next.push(b);}}front=next;}
   for(const n of ns)if(n.id!==id&&n.cluster===source.cluster&&!weights.has(n.id))weights.set(n.id,.14);
   if(source.kind==='group'){const c=graph.clusters.find(c=>c.id===id);c?.members.forEach(n=>weights.set(n.id,.82));}
   const dominic=ns.find(n=>n.name==='Dominic Ryker');
   if(dominic&&pressureOnDominic[source.name]!==undefined){
    const pressure=pressureOnDominic[source.name];weights.set(dominic.id,pressure);
    // Pressure on him reaches his close associates, at reduced strength.
    for(const n of ns){const passed=n.cluster==='THE RUSSIANS'?pressure*.45:n.cluster==='THE BOARD'?pressure*.3:0;
     if(n.id!==id&&passed>Math.abs(weights.get(n.id)||0))weights.set(n.id,passed);
    }
   }
  }
  weights.delete(id);return weights;
 }
 function tug(graph,ns,id,dx,dy){
  const weights=influence(graph,id);for(const n of ns){const w=weights.get(n.id)||0;if(!w)continue;n.x+=dx*w*.8;n.y+=dy*w*.8;n.vx+=Math.max(-6,Math.min(6,dx*w*.025));n.vy+=Math.max(-6,Math.min(6,dy*w*.025));}
 }
 function step(ns,edges,dragged){
  const by=Object.fromEntries(ns.map(n=>[n.id,n]));
  for(const n of ns){n.vx+=(n.ax-n.x)*.00013;n.vy+=(n.ay-n.y)*.00013;}
  for(let i=0;i<ns.length;i++)for(let j=i+1;j<ns.length;j++){const a=ns[i],b=ns[j];if(a.kind==='group'||b.kind==='group')continue;let dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1;if(d<420){const f=(420-d)*.012;dx=dx/d*f;dy=dy/d*f;a.vx-=dx;a.vy-=dy;b.vx+=dx;b.vy+=dy;}}
  for(const e of edges){const a=by[e.a],b=by[e.b];if(!a||!b)continue;const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1;const strength=e.kind==='group'?.0005:e.kind==='resists'?.00003:.00012;const f=(d-e.rest)*strength;a.vx+=dx/d*f;a.vy+=dy/d*f;b.vx-=dx/d*f;b.vy-=dy/d*f;}
  for(const n of ns){if(n.id===dragged){n.vx=n.vy=0;continue;}n.vx*=.82;n.vy*=.82;n.x+=Math.max(-14,Math.min(14,n.vx));n.y+=Math.max(-14,Math.min(14,n.vy));}
 }
 return {arrange,influence,tug,step};
})();
