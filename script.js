    const projects = [
    {
        t:"ParroSoft - Sistema de Gestion parroquial",tags:"C# · MongoDB . SQLite . MailKit", img:"proyectos/parrosoft_Login.png", repo: "https://github.com/GomezMatias123/sistema-parroquial"
    },
    {
        t:"Parroquia Nuestra Señora de Fátima - web",tags:"HTML · CSS · JavaScript · PHP", img:"proyectos/parroquia_Web.png", repo: "https://github.com/GomezMatias123/parroquia_web_Virgen_Fatima", live: "https://gomezmatias123.github.io/parroquia_web_Virgen_Fatima/"  
    },
    {
        t:"Correlativas - LSI",tags:"HTML · CSS · JavaScript", img:"proyectos/correlativas_LSI.png",
        repo: "https://github.com/1Hagi/correlativas_lsi", live: "https://1hagi.github.io/correlativas_lsi/plan_estudio_nuevo.html"
    },
    {
        t:"L&A Amplificadores Valvulares",tags:"HTML · CSS · JavaScript", img:"proyectos/lya_amplificadores.png",
        repo: "https://github.com/GomezMatias123/lya-amplificadores", live: "https://gomezmatias123.github.io/lya-amplificadores/"
    
    },
    {
        t:"Invitación de Boda digital",tags:"HTML · CSS · JavaScript · Firebase", img:"proyectos/invitacion_Boda.png", repo: "#", live: "https://invitacion-boda-belen-y-emilio.web.app/"
    },
    ];

    const themes = {
    classic:{eye:"Desarrollador de software"}, 
    abstergo:{eye:"Desarrollador de software", freq:440},
    };

    let currentLang = 'es';

const i18n = {
es: {
    eyebrow: "Desarrollador de software",
    lead: "Desarrollador de software con experiencia en C#/.NET, PHP y JavaScript. Elaboré aplicaciones de escritorio, sitios web completos para clientes (backend, frontend y despliegue). Soy un estudiante avanzado de la carrera Licenciatura en Sistemas de la Información, con formación en bases de datos, programación funcional y programación orientada a objetos.",
    tabProyectos: "Proyectos", tabFormacion: "Formación", tabCV: "Curriculum Vitae",
    counter: " 5 registros ·",
    verRepo:"Ver repositorio", entrarSitio:"Entrar al sitio",
    chipEdad: "27 años", chipUbi: "Corrientes, Argentina",
    chipRemoto: "Disponible remoto — cualquier huso horario",
    chipIdiomas: "Español e inglés fluidos"
    },
en: {
    eyebrow: "Software developer",
    lead: "Software developer with experience in C#/.NET, PHP and JavaScript. I've built desktop applications and full websites for clients (backend, frontend and deployment). I'm an advanced student of the Information Systems degree, with training in databases, functional programming and object-oriented programming.",
    tabProyectos: "Projects", tabFormacion: "Education", tabCV: "Resume",
    counter: " 5 records ·",
    verRepo:"View repository", entrarSitio:"Visit site",
    chipEdad: "27 years old", chipUbi: "Corrientes, Argentina",
    chipRemoto: "Available remote — any timezone",
    chipIdiomas: "Fluent in Spanish and English"
    }
};

const langToggle = document.getElementById('langToggle');

function applyLang(lang){
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
    });
    langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    langToggle.setAttribute('aria-label', lang==='es' ? 'Switch to English' : 'Cambiar a español');
}

langToggle.addEventListener('click', ()=>{
    applyLang(currentLang === 'es' ? 'en' : 'es');
    const t = document.body.className.replace('theme-','');
    beep(themes[t].freq);
});

    const grid = document.getElementById('grid');
    projects.forEach((p)=>{
    const el = document.createElement('div');
    el.className='mem pixel-target';
    el.innerHTML=`
    <span class="corner tl"></span><span class="corner tr"></span>
    <span class="corner bl"></span><span class="corner br"></span>
    <div class="pixel-core">
    <img class="thumb" src="${p.img}" alt="Captura de ${p.t}">
    <h3>${p.t}</h3>
    <div class="tags">${p.tags}</div>
    </div>
    <div class="card-actions">
    ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
    <circle cx="6" cy="6" r="2.2"></circle>
    <circle cx="6" cy="18" r="2.2"></circle>
    <circle cx="18" cy="9" r="2.2"></circle>
    <path d="M6 8.2V15.8"></path>
    <path d="M6 12c0-3 3-4.5 6-4.8h3.5"></path>
    </svg>
    <span data-i18n="verRepo">Ver repositorio</span></a>` : ''}
    ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M14 4h6v6"></path>
    <path d="M20 4 10 14"></path>
    <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"></path>
    </svg>
    <span data-i18n="entrarSitio">Entrar al sitio</span></a>` : ''}
    </div>`;
    el.addEventListener('mouseenter',()=>resync(el));
    el.addEventListener('click',(e)=>{
    if(e.target.closest('.card-actions')) return; // dejá que el link del botón navegue normal
    if(el.classList.contains('open')){
    el.classList.remove('open');
    } else {
    document.querySelectorAll('.mem.open').forEach(c=>c.classList.remove('open'));
    el.classList.add('open');
    resync(el);
}
});
    grid.appendChild(el);
    });

const formacion = [

    { img:"IMG/unne.png", t:"Licenciatura en Sistemas de Información", tags:"En curso", desc:"Formación técnica y analítica en desarrollo de software, bases de datos, ingeniería de sistemas y gestión de proyectos tecnológicos. <br> La formación combina aspectos tecnológicos y organizacionales, lo que me permite comprender tanto la parte técnica del desarrollo como la visión integral de los sistemas dentro de una empresa. Esto me prepara para desempeñarme como desarrollador, aportando no solo código funcional, sino también una mirada estructurada sobre la calidad, escalabilidad y mantenimiento de los sistemas." },
    { img:"IMG/logoArgPrograma.png", t:"Argentina programa 4.0", tags:"Edicion 2022 . Completo",desc:"Formación en programación y desarrollo de software a través del programa nacional Argentina Programa. La capacitación abordó fundamentos de programación, resolución de problemas, programación imperativa y orientación a objetos, utilizando tecnologías como Gobstones, JavaScript y Ruby. El trayecto permitió desarrollar una base sólida en lógica de programación y adquirir conocimientos aplicables al desarrollo de software" },

    {img:"IMG/logoFolAcademy.png", t:"Folcademy", tags:"2023 . Completo", desc:"Curso: Capacitacion en programacion Backend. <br><br> Se completaron desafios que permitieron desarrollar el uso de herramientas para lograr la creacion de API con spring framework, se utilizó repositorios en Bitbucket, se enfoco en Mappes y manejo de excepciones. Para el final del curso se adquirio todas las herramientas y conocimientos necesarios para crear, gestionar e implementar correctamente una base de datos <br><br> Herramientas: JAVA . XAMPP . POSTMAN . IDE: intelliJ"} 

];

const gridFormacion = document.getElementById('gridFormacion');
formacion.forEach((p)=>{
    const el = document.createElement('div');
    el.className='mem pixel-target';
    el.innerHTML=`
    <span class="corner tl"></span><span class="corner tr"></span>
    <span class="corner bl"></span><span class="corner br"></span>
    <div class="pixel-core">
    <div class="content-formacion">
    <img class="thumb" src="${p.img}" alt="Imagen de ${p.t}">
    <p>${p.desc}</p>
    </div>
    <h3>${p.t}</h3>
    <div class="tags">${p.tags}</div>
    </div>`;
    el.addEventListener('mouseenter',()=>resync(el));
        gridFormacion.appendChild(el);
});

document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
    const target = btn.dataset.view;
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.view-panel').forEach(panel=>{
    panel.classList.remove('active','entering');
    });
    const next = document.getElementById('view-'+target);
    next.classList.add('active','entering');
    setTimeout(()=>next.classList.remove('entering'), 460);

    const t=document.body.className.replace('theme-','');
    beep(themes[t].freq);
    });
});

    let audioCtx=null, soundOn=false;
    function beep(freq,dur=0.1){
    if(!soundOn) return;
    if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)();
    const o=audioCtx.createOscillator(),g=audioCtx.createGain();
    o.type='sine';o.frequency.value=freq;
    g.gain.setValueAtTime(0.0001,audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.15,audioCtx.currentTime+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001,audioCtx.currentTime+dur);
    o.connect(g);g.connect(audioCtx.destination);
    o.start();o.stop(audioCtx.currentTime+dur);
    }

    function resync(el){
    const t=document.body.className.replace('theme-','');
    el.classList.add('flicker');
    beep(themes[t].freq);
    setTimeout(()=>el.classList.remove('flicker'),280);
    }

    const iconSun = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <circle cx="12" cy="12" r="4.2"></circle>
    <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"></path>
    </svg>`;

    const iconMoon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z"></path>
    </svg>`;

    const modeIcon = document.getElementById('modeIcon');

    function updateModeUI(dark){
    modeToggle.setAttribute('aria-pressed', dark);
    modeToggle.setAttribute('aria-label', dark ? 'Modo oscuro' : 'Modo claro');
    modeIcon.innerHTML = dark ? iconMoon : iconSun;
    }
    const flash=document.getElementById('flash');
    let currentTheme='abstergo';
    function setTheme(t){
    const r=document.documentElement.style;
    const map={classic:'t1',abstergo:'t2'};
    const p=map[t];
    ['bg','bg2','ink','accent','accent2','line','panel'].forEach(k=>
    r.setProperty(`--${k}`,getComputedStyle(document.documentElement).getPropertyValue(`--${p}-${k}`)));
    document.body.className='theme-'+t;
    flash.classList.add('on');setTimeout(()=>flash.classList.remove('on'),90);
    beep(themes[t].freq*0.75,0.12);
    }
    modeToggle.addEventListener('click',()=>{
    currentTheme = currentTheme==='classic' ? 'abstergo':'classic';
    const dark = currentTheme==='abstergo';
    updateModeUI(dark);
    setTheme(currentTheme)
    });
    const iconNote = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M9 17V5l10-2v12" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="7" cy="17" r="2.2"/>
    <circle cx="17" cy="15" r="2.2"/>
    </svg>`;

    const iconNoteOff = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M9 17V5l10-2v12" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="7" cy="17" r="2.2"/>
    <circle cx="17" cy="15" r="2.2"/>
    <path d="M3 3 L21 21" stroke-linecap="round"/>
    </svg>`;

    const soundIcon = document.getElementById('soundIcon');
    soundIcon.innerHTML = iconNoteOff;

    document.getElementById('soundBtn').addEventListener('click',function(){
    soundOn=!soundOn;
    soundIcon.innerHTML = soundOn ? iconNote : iconNoteOff;
    this.setAttribute('aria-pressed', soundOn);
    this.setAttribute('aria-label', soundOn ? 'Sonido activado' : 'Sonido desactivado');
    this.classList.toggle('active',soundOn);
    if(soundOn){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();beep(660);}
    });
applyLang('es');
updateModeUI(currentTheme==='abstergo');
setTheme(currentTheme);