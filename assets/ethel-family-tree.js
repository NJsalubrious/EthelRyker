const ETHEL_FAMILY = {
 gran:{id:'gran',name:'Gran',role:'Elizabeth Ryker · my grandmother',image:'library/images/family-tree/gran-older-elizabeth.jpg',note:'Gran left school early and came to science late. She earned two PhDs, built her own laboratory and did work people came from across the world to be part of. She was curious about people, too. Warm, impatient, funny. There was always something she wanted to try, and usually someone she wanted to show it to.',x:300,y:170},
 pop:{id:'pop',name:'Pop',role:'Jonah · the father who raised me',image:'library/images/family-tree/pop.jpg',note:'Pop wasn’t related to me by blood. He was my father in every way that mattered. The property, the bikes, coming home to him and Gran — that was my childhood.',x:780,y:170},
 dominic:{id:'dominic',name:'Dominic',role:'My father · Gran’s son',image:'library/images/family-tree/dominic.jpg',note:'My father gave me the bike. I loved it. That doesn’t change what he did, or make the good memories easy to place.',x:170,y:480},
 ethel:{id:'ethel',name:'Me',role:'Ethel Ryker',image:'library/images/family-tree/ethel-street.jpg',note:'Gran and Pop raised me. After they died, I was sent to my father. I still miss coming home to them.',x:540,y:480},
 isla:{id:'isla',name:'Isla',role:'My stepsister',image:'library/images/family-tree/isla.jpg',note:'Isla went back for the files. I made the index so the police could find the originals. Neither part happened without the other.',x:940,y:480},
 nepal:{id:'nepal',name:'Gran, before us',role:'Nepal · 1966',image:'library/images/family-tree/nepal.jpg',note:'This is Gran before I knew her. She travelled to Nepal in 1966. The man beside her was Dominic’s father. She came home without him.',x:540,y:300},
 loss:{id:'loss',name:'Their deaths',role:'The end of my childhood',image:'',note:'Their car had been crushed. Nobody could explain by what. Gran left records in a safety deposit box, and a number for an AFP contact.',x:540,y:190},
 trial:{id:'trial',name:'The trial',role:'2021 · the evidence',image:'',note:'People discussed the way I answered. The documents could be checked. That was where I wanted their attention.',x:540,y:180}
};

Object.assign(ETHEL_FAMILY,{
 father:{id:'father',name:'Dominic’s father',role:'Name unknown · Nepal, 1966',image:'library/images/family-tree/father.jpg',note:'He travelled with Gran in Nepal. The field notes describe someone quiet, quick with languages, attentive to people. What happened to him is not recorded.',x:540,y:160},
 mother:{id:'mother',name:'My mother',role:'Name unknown',image:'',mark:'?',note:'I haven’t put a name here. I won’t fill that space by guessing.',x:850,y:170},
 islamother:{id:'islamother',name:'Isla’s mother',role:'My father’s wife',image:'library/images/family-tree/mother-isla.jpg',note:'Isla’s song Memory Under Water makes me sad. Isla is still asking whether she was loved. What her mother failed to do for her doesn’t make that question go away.',url:'https://silenceisthetrauma.com/songs/isla-memory-under-water.html',x:540,y:160},
 judge:{id:'judge',name:'Isla’s father',role:'A High Court judge · her mother’s first husband',image:'library/images/family-tree/islas-father.png',mark:'?',note:'Her father was a judge. My father was her stepfather. They are different men. Isla’s account of that first house is hers to tell.',x:930,y:180},
 marj:{id:'marj',image:'library/images/family-tree/young-marj-kelso.jpg',name:'Marj Kelso',role:'Dominic’s foster mother · 1975',mark:'1975',note:'Marj says they gave him a good home. Her daughter stopped singing. Years later, she recorded what she had explained away at the time.',x:900,y:470},
 care:{id:'care',name:'Earlier foster homes',role:'Before 1975 · several placements',image:'',mark:'…',note:'There were other homes before Marj’s. One placement ended when the carer became ill. These gaps don’t tell us that those families hurt him.',x:900,y:150}
});


Object.assign(ETHEL_FAMILY,{
 greatgrandfather:{id:'greatgrandfather',image:'library/images/family-tree/elizabeths-father-engineer.jpg',name:'Elizabeth’s father',role:'Irish · aviation engineer',note:'Gran came from Ireland with her family. Her father’s engineering work brought them here. He died of cancer soon after they arrived. She was very close to him.'},
 greatgrandmother:{id:'greatgrandmother',image:'library/images/family-tree/elizabeths-mother.jpg',name:'Elizabeth’s mother',role:'Ireland → Australia',note:'Her husband died, then her son. Gran said her mother never recovered from those losses. The family was left in trouble.'},
 brother:{id:'brother',name:'Elizabeth’s brother',role:'Name not recorded',note:'Gran lost her brother to an autoimmune disease. I don’t have his name here.'},
 ray:{id:'ray',name:'Ray',role:'Dominic’s foster father · 1975',note:'He taught Dominic to solder. Marj remembered him coming home wanting to talk again. There was real good in that house, too.'},
 lynnie:{id:'lynnie',image:'library/images/family-tree/lynnie.jpg',name:'Lynnie',role:'Marj and Ray’s daughter',note:'She was six. She tried to say something was wrong, and the adults explained it away. Marj remembered when she stopped singing.'},
 kevin:{id:'kevin',name:'Kevin',role:'Marj and Ray’s son',note:'Kevin was thirteen when Dominic came to live with them. Marj’s account tells us very little about him.'}
});
ETHEL_FAMILY.father.url='https://silenceisthetrauma.com/library/loc_archives/field-notes-from-the-langtang-trail.html';
Object.assign(ETHEL_FAMILY,{
 popfather:{id:'popfather',name:'Pop’s father',role:'Cattle-station owner · Northern Territory',note:'Pop grew up on his parents’ station, near the country where the lab was built. After they died, the station was sold and the money divided between their three children.'},
 popmother:{id:'popmother',name:'Pop’s mother',role:'Māori · name not recorded',note:'Pop’s mother was Māori. He was the youngest child, much younger than his sisters.'},
 popsister1:{id:'popsister1',name:'Pop’s sister',role:'Hobart · name not recorded',note:'One of Pop’s two older sisters. About fifteen years separated him from them.'},
 popsister2:{id:'popsister2',name:'Pop’s sister',role:'Perth · name not recorded',note:'His other older sister lived in Perth. The station proceeds were shared three ways. Pop worked; he was comfortable, not wealthy.'}
});

const FAMILY_POS={"popfather":[250,160],"popmother":[600,160],"greatgrandfather":[1300,160],"greatgrandmother":[1650,160],"popsister1":[100,620],"popsister2":[440,620],"pop":[800,620],"gran":[1300,620],"father":[1800,620],"brother":[2180,620],"marj":[2700,620],"ray":[3100,620],"care":[3470,620],"mother":[1250,1130],"dominic":[1750,1130],"islamother":[2300,1130],"judge":[2800,1130],"lynnie":[3250,1130],"kevin":[3590,1130],"ethel":[1500,1640],"isla":[2550,1640]};
const FAMILY_LINKS=[["greatgrandfather","greatgrandmother","partners"],["greatgrandfather","gran","father"],["greatgrandmother","gran","mother"],["greatgrandfather","brother","father"],["greatgrandmother","brother","mother"],["gran","pop","partners"],["gran","father","Nepal · 1966"],["gran","dominic","mother"],["father","dominic","father"],["gran","ethel","adoptive mother"],["pop","ethel","adoptive father · no blood tie"],["dominic","ethel","biological father"],["mother","ethel","biological mother"],["dominic","islamother","married"],["islamother","judge","first marriage"],["islamother","isla","mother"],["judge","isla","father"],["ethel","isla","stepsisters"],["care","dominic","earlier foster placements"],["marj","dominic","foster mother · 1975"],["ray","dominic","foster father · 1975"],["marj","ray","married"],["marj","lynnie","mother"],["ray","lynnie","father"],["marj","kevin","mother"],["ray","kevin","father"],["popfather","popmother","partners"],["popfather","pop","father"],["popmother","pop","mother"],["popfather","popsister1","father"],["popmother","popsister1","mother"],["popfather","popsister2","father"],["popmother","popsister2","mother"]];
FAMILY_LINKS.push(['mother','dominic','Ethel’s biological parents']);
const FAMILY_UNIONS=[['popfather','popmother',['pop','popsister1','popsister2']],['greatgrandfather','greatgrandmother',['gran','brother']],['gran','father',['dominic']],['mother','dominic',['ethel']],['islamother','judge',['isla']],['marj','ray',['lynnie','kevin']]];
const familyKind=e=>e.label.includes('adoptive')?'adoption':e.label.includes('foster')?'foster':e.label==='stepsisters'?'step':'family';
const familyPath=(e,by)=>{
 const a=by[e.a],b=by[e.b];if(!a||!b)return '';
 const union=FAMILY_UNIONS.find(([p,q,children])=>(p===e.a||q===e.a)&&children.includes(e.b));
 if(union){const p=by[union[0]],q=by[union[1]],x=(p.x+q.x)/2,y=Math.max(p.y,q.y)+35,branch=y+(b.y-100-y)*.5;return 'M '+a.x+' '+(a.y+35)+' L '+x+' '+y+' L '+x+' '+branch+' L '+b.x+' '+branch+' L '+b.x+' '+(b.y-100);}
 const kind=familyKind(e);
 if(kind==='adoption'){const lane=550+(e.a==='gran'?80:0);return 'M '+a.x+' '+(a.y+100)+' L '+a.x+' '+(a.y+235)+' L '+lane+' '+(a.y+235)+' L '+lane+' '+b.y+' L '+(b.x-135)+' '+b.y;}
 if(kind==='foster'){const lane=910;return 'M '+a.x+' '+(a.y+100)+' L '+a.x+' '+lane+' L '+b.x+' '+lane+' L '+b.x+' '+(b.y-100);}
 if(kind==='step')return 'M '+(a.x+135)+' '+(a.y+65)+' L '+(b.x-135)+' '+(b.y+65);
 return 'M '+a.x+' '+a.y+' L '+b.x+' '+b.y;
};
window.ETHEL_FAMILY_TREE={people:ETHEL_FAMILY,positions:FAMILY_POS,links:FAMILY_LINKS,path:familyPath,kind:familyKind};
