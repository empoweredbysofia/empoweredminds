(()=>{const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
const details={
 'from-survival-to-self.html':{label:'From Survival to Self™',category:'For individuals',categoryHref:'programmes.html#individuals'},
 'late2adhd.html':{label:'Late2ADHD™',category:'For individuals',categoryHref:'programmes.html#individuals'},
 'one-to-one.html':{label:'1:1 with Sofia',category:'For individuals',categoryHref:'programmes.html#individuals'},
 'becoming-the-parent-they-need.html':{label:'Becoming the Parent They Need™',category:'Parents & communities',categoryHref:'programmes.html#parents'},
 'girl-code-compass.html':{label:'Girl Code Compass®',category:'For schools',categoryHref:'programmes.html#schools'},
 'adhd-understood.html':{label:'ADHD Understood™',category:'For schools',categoryHref:'programmes.html#schools'},
 'from-behaviour-to-understanding.html':{label:'From Behaviour to Understanding™',category:'For schools',categoryHref:'programmes.html#schools'},
 'my-adhd-and-me.html':{label:'My ADHD and Me™',category:'For schools',categoryHref:'programmes.html#schools'}
};
const pages={'programmes.html':'Programmes','schools.html':'For Schools','contact.html':'Help Me Choose','about.html':'About Sofia','individuals.html':'For Me','communities.html':'Communities','speaking.html':'Speaking','commission.html':'Commission / Book'};
function activeFor(file){if(file==='index.html')return'home';if(file==='contact.html')return'help';if(file==='schools.html'||['girl-code-compass.html','adhd-understood.html','from-behaviour-to-understanding.html','my-adhd-and-me.html'].includes(file))return'schools';if(file==='individuals.html'||['from-survival-to-self.html','late2adhd.html','one-to-one.html'].includes(file))return'individual';if(file==='about.html')return'about';if(file==='programmes.html'||file==='communities.html'||file==='becoming-the-parent-they-need.html')return'programmes';return''}
const active=activeFor(current);
const header=document.createElement('header');header.className='em-site-header';header.innerHTML='<div class="em-nav-wrap"><a class="em-brand" href="index.html" aria-label="EmpowerED Minds home">Empower<strong>ED</strong> Minds™<small>by Sofia</small></a><button class="em-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="em-main-nav">☰</button><nav class="em-main-nav" id="em-main-nav" aria-label="Main navigation"><a href="index.html" data-key="home">Home</a><a href="individuals.html" data-key="individual">For Me</a><a href="schools.html" data-key="schools">For Schools</a><a href="programmes.html" data-key="programmes">Programmes</a><a href="about.html" data-key="about">About Sofia</a><a class="em-nav-cta" href="contact.html" data-key="help">Help Me Choose</a></nav></div>';
document.body.insertBefore(header,document.body.firstChild);
const backdrop=document.createElement('button');backdrop.className='em-menu-backdrop';backdrop.type='button';backdrop.setAttribute('aria-label','Close menu');header.appendChild(backdrop);
if(active){const item=header.querySelector('[data-key="'+active+'"]');if(item)item.setAttribute('aria-current','page')}
const toggle=header.querySelector('.em-menu-toggle');const nav=header.querySelector('.em-main-nav');
function setMenu(open){nav.classList.toggle('em-open',open);backdrop.classList.toggle('em-open',open);document.body.classList.toggle('em-menu-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');toggle.textContent=open?'×':'☰'}
function close(){setMenu(false)}
toggle.addEventListener('click',()=>setMenu(!nav.classList.contains('em-open')));
backdrop.addEventListener('click',close);nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
const main=document.querySelector('main');if(!main)return;
if(current!=='index.html'){const path=document.createElement('div');path.className='em-path-wrap';let trail='<a href="index.html">Home</a><span aria-hidden="true">›</span>';
if(details[current])trail+='<a href="programmes.html">Programmes</a><span aria-hidden="true">›</span><a href="'+details[current].categoryHref+'">'+details[current].category+'</a><span aria-hidden="true">›</span><span class="em-current" aria-current="page">'+details[current].label+'</span>';
else trail+='<span class="em-current" aria-current="page">'+(pages[current]||document.title.split('|')[0].trim())+'</span>';
path.innerHTML='<nav class="em-path" aria-label="Breadcrumb">'+trail+'</nav>';main.parentNode.insertBefore(path,main)}
const onPage={
 'from-survival-to-self.html':[['is-this-you','Is this you?'],['programme','Programme'],['investment','Investment'],['sofia','About Sofia'],['join','Join']],
 'late2adhd.html':[['about','Is this you?'],['format','Format'],['programme','Six weeks']],
 'girl-code-compass.html':[['challenge','The challenge'],['how','How it works'],['outcomes','Outcomes'],['pricing','Pricing'],['faq','FAQs'],['contact','Enquire']],
 'becoming-the-parent-they-need.html':[['is-this-you','Is this you?'],['journey','11 sessions']]
};
const items=(onPage[current]||[]).filter(([id])=>document.getElementById(id));if(items.length){const quick=document.createElement('nav');quick.className='em-onpage';quick.setAttribute('aria-label','On this page');quick.innerHTML='<strong>On this page</strong>'+items.map(([id,label])=>'<a href="#'+id+'">'+label+'</a>').join('');const path=document.querySelector('.em-path-wrap');(path||main).insertAdjacentElement(path?'afterend':'beforebegin',quick)}
if(details[current]){const back=document.createElement('div');back.className='em-back-wrap';back.innerHTML='<a class="em-back-link" href="programmes.html">← Back to all programmes</a>';main.insertAdjacentElement('afterend',back)}
if(!['index.html','contact.html'].includes(current)){const help=document.createElement('section');help.className='em-help-strip';help.setAttribute('aria-label','Help choosing support');help.innerHTML='<div class="em-help-inner"><div><strong>Not sure which route fits?</strong><span>Tell Sofia what is happening and receive a clear next step.</span></div><div class="em-help-actions"><a href="contact.html">Help me choose</a><a href="mailto:empoweredbysofia@gmail.com">Email Sofia</a></div></div>';const footer=document.querySelector('footer');if(footer)footer.parentNode.insertBefore(help,footer)}
})();
