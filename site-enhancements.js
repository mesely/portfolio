(() => {
  const updated = window.PORTFOLIO_CURRENT;
  const titles = {
    en: "B.Sc. Computer Science and Engineering · Sabancı University",
    tr: "Bilgisayar Bilimi ve Mühendisliği · Sabancı Üniversitesi",
    de: "B.Sc. Informatik und Ingenieurwissenschaften · Sabancı Universität",
    fr: "Licence en informatique et ingénierie · Université Sabancı",
    nl: "B.Sc. Computer Science and Engineering · Sabancı Universiteit",
    da: "B.Sc. Computer Science and Engineering · Sabancı Universitet",
    sv: "B.Sc. Computer Science and Engineering · Sabancı universitet",
    fi: "B.Sc. Computer Science and Engineering · Sabancı-yliopisto"
  };
  const graduation = { en:"Graduated June 2026", tr:"Haziran 2026 mezunu", de:"Abschluss Juni 2026", fr:"Diplômé en juin 2026", nl:"Afgestudeerd juni 2026", da:"Dimitteret juni 2026", sv:"Examen juni 2026", fi:"Valmistunut kesäkuussa 2026" };
  const experience = {en:"Experience",tr:"Deneyim",de:"Erfahrung",fr:"Expérience",nl:"Ervaring",da:"Erfaring",sv:"Erfarenhet",fi:"Kokemus"};
  for (const [lang, copy] of Object.entries(COPY)) {
    copy.heroSubtitle = titles[lang];
    copy.heroMetric = graduation[lang] + " · GPA 3.44 / 4.00";
    copy.skillsTitle = copy.navSkills;
    copy.researchTitle = lang === "tr" ? "Araştırma projeleri" : "Research projects";
    copy.researchLead = lang === "tr" ? "NLP, ağ bilimi ve insan odaklı yapay zekâ çalışmaları. Devam eden projelerin aşaması kartlarda belirtilir." : "Language models, parliamentary networks, music and AR.";
    copy.projectsTitle = lang === "tr" ? "AI ve NLP projeleri" : "AI and NLP projects";
    copy.projectsLead = lang === "tr" ? "Öneri, bilgi getirme, metin sınıflandırma ve ses modelleri." : "Recommendation, retrieval, text classification and audio models.";
    copy.engineeringTitle = lang === "tr" ? "Yazılım projeleri" : "Software projects";
    copy.engineeringLead = lang === "tr" ? "Mobil uygulamalar, web sistemleri ve C++ araştırması." : "Mobile apps, web systems and C++ research.";
    copy.skillsLead = lang === "tr" ? "Projelerde ve stajlarda kullandığım araçlar." : "Tools used in my projects and internships.";
    copy.recentTitle = lang === "tr" ? "Güncel çalışmalar" : "Recent work";
    copy.recentKicker = lang === "tr" ? "2026 · Seçilmiş çalışmalar" : "2026 · Selected work";
    copy.recentLead = lang === "tr" ? "Grafik muhakemesi, akademik danışmanlık ve ortak mobil deneyimler." : "Graph reasoning, academic advising and a shared mobile experience.";
    copy.experienceTitle = experience[lang];
    copy.navExperience = experience[lang];
    copy.portfolioButton = lang === "tr" ? "Portfolyoyu indir" : "Download Portfolio";
    copy.focusOne = lang === "tr" ? "Grafik muhakemesi ve LLM değerlendirmesi" : "Graph reasoning and LLM evaluation";
    copy.focusTwo = lang === "tr" ? "Bilgi getirme ve doğal dil işleme" : "Retrieval and NLP";
    copy.focusThree = lang === "tr" ? "Ağ bilimi ve hesaplamalı sosyal bilimler" : "Network science and computational social science";
    copy.focusFour = lang === "tr" ? "HCI ve yazılım mühendisliği" : "HCI and software engineering";
  }
  COPY.en.heroSummary = "I work on graph reasoning and NLP, and build the software around them. Recent work includes Llama graph experiments at KTH, retrieval-based academic advising and a Flutter product for shared questions, games and memories.";
  COPY.tr.heroSummary = "Grafik muhakemesi ve NLP üzerine çalışıyor, bunları kullanan yazılımlar geliştiriyorum. Güncel çalışmalarım arasında KTH’de Llama grafik deneyleri, akademik danışmanlık ve ortak sorular, oyunlar ve anılar için bir Flutter ürünü var.";

  const oldContent = contentFor;
  contentFor = lang => {
    const content = oldContent(lang);
    content.research = content.research.map(item => {
      if (item.id === "beme") return {...item,
        description: lang === "tr" ? "Bootstrap sınıflandırıcılarını sanal sermayeli ajanlara dönüştüren scikit-learn uyumlu ensemble framework’ü." : "A scikit-learn-compatible ensemble in which bootstrap classifiers act as agents with virtual capital and form a capital-weighted consensus.",
        achievement: lang === "tr" ? "Kayıtlı metin benchmark’ında Macro-F1 0.826’dan 0.864’e çıktı. Sonuçlar veri kümesine bağlı; tüm rejimlerde üstünlük iddiası yok." : "The recorded signal-rich text benchmark improved Macro-F1 from 0.826 to 0.864. Results are dataset-specific; the method did not win in every regime."};
      if (item.id === "echospace") return {...item, description: updated.projects.echospace.description[lang] || updated.projects.echospace.description.en,
        achievement: lang === "tr" ? "Ses çıkarımı ile AR sunumunu ayıran bağlama duyarlı görsel ipucu ve HUD akışları." : "Separated audio inference from the AR presentation loop and implemented contextual cue/HUD interactions."};
      return item;
    });
    content.aiProjects = content.aiProjects.map(item => item.id === "arastirma" ? {...item,description:lang === "tr" ? "SNIPS üzerinde Slot-Gated BiLSTM, FastText temsilleri ve klasik model karşılaştırması." : "Slot-Gated BiLSTM on SNIPS, FastText representations and comparison with classical models."} : item);
    content.engineeringProjects = content.engineeringProjects.map(item => item.id === "transporter" ? {...item,description:updated.projects.transporter.description[lang] || updated.projects.transporter.description.en} : item);
    content.engineeringProjects = [{id:"sparseviz", title:updated.projects.sparseviz.title[lang] || updated.projects.sparseviz.title.en,
      org:"Sabancı PURE Research", description:updated.projects.sparseviz.description[lang] || updated.projects.sparseviz.description.en,
      noImage:true, tags:updated.projects.sparseviz.tech.slice(0,4)}, ...content.engineeringProjects];
    const items = [["PyTorch / TensorFlow", "scikit-learn", "LSTM / BiLSTM", "Transformers / BERT / Llama", "RAG / Embeddings", "NetworkX"],
      ["Python / C++ / C#", "TypeScript", "React / Next.js", "NestJS / FastAPI", "Flutter / Dart", "Git / Testing"],
      ["SQL / PostgreSQL", "MongoDB / Supabase", "Docker / Kubernetes", "Azure / Slurm", "Pandas / Statsmodels"]];
    content.skills = content.skills.map((group,i) => ({...group,items:items[i]}));
    for (const key of ['research','aiProjects','engineeringProjects']) {
      content[key] = content[key].map(item => {
        const project = updated.projects[item.id];
        return project?.concise ? {...item,title:project.title[lang] || project.title.en,
          description:project.description[lang] || project.description.en,
          status:undefined,achievement:lang === 'tr' ? project.concise.result_tr ?? project.concise.result : project.concise.result,tags:project.tech.slice(0,4)} : item;
      });
    }
    return content;
  };
  const url = id => `project.html?project=${encodeURIComponent(id)}&lang=${languageSelect.value}`;
  const card = (item, copy, research=false) => `<article class="${research ? "research-card" : "engineering-card"}">
    ${item.id === "atcha" ? `<div class="phone-cover">${[1,2,3].map(i=>`<img src="images/atcha${i}.png" alt="Atcha interaction state ${i}" loading="lazy" />`).join("")}</div>` : item.noImage ? "" : `<img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}" loading="lazy" />`}
    <div class="card-body">${item.status ? `<span class="status">${escapeHtml(copy.statusLabel)} ${escapeHtml(item.status)}</span>` : ""}
      <h3><a class="card-title-link" href="${url(item.id)}" data-project-id="${escapeHtml(item.id)}">${escapeHtml(item.title)}</a></h3>
      ${item.org ? `<div class="project-org">${escapeHtml(item.org)}</div>` : ""}<p>${escapeHtml(item.description)}</p>
      ${item.achievement ? `<p class="achievement">${escapeHtml(item.achievement)}</p>` : ""}
      <div class="card-footer"><div class="keyword-row">${tagList(item.tags || item.keywords || [])}</div><span class="text-btn" aria-hidden="true">${escapeHtml(copy.detailsLabel)} ↗</span></div>
    </div></article>`;
  renderProjectGrid = (target, items, copy) => { target.innerHTML = items.map(item=>card(item,copy)).join(""); };
  renderResearch = (items, copy) => { researchGrid.innerHTML = items.map(item=>card(item,copy,true)).join(""); };
  const oldRender = render;
  render = lang => {
    oldRender(lang);
    const names = {kth:"KTH — LLM Graph Reasoning",advisu:"adviSU — Academic Advising",atcha:"Atcha — Questions, Games & Memories"};
    const recent = updated.recent.map(item=>({...item,title:updated.projects[item.id].title[lang] || updated.projects[item.id].title.en,
      description:updated.projects[item.id].description[lang] || updated.projects[item.id].description.en}));
    renderProjectGrid(document.getElementById("recentGrid"),recent,copyFor(lang));
    const entries = [["Jul - Sep 2026","KTH Royal Institute of Technology","NLP and Graph Reasoning Research Intern","Llama-3.1-8B experiments, benchmark reproduction and GPU evaluation under Prof. Aristides Gionis."],
      ["Aug - Sep 2025","Baykar","AI Software Engineering Intern","Two-Tower retrieval and Wide & Deep ranking across three social platforms; offline evaluation over 5,170 users."],
      ["Jul - Aug 2025","BMC","Software Engineering Intern","Natural-language SAP inventory access, ABAP material tracking and stock alerts."],
      ["Jun - Aug 2024","Intertech","Software Engineering Intern","Financial RAG, automated bulletin ingestion and CI/CD delivery on Kubernetes/Azure."],
      ["Jun 2023 - Jun 2024","Sabancı University","Learning Assistant — Programming Fundamentals","C++ teaching support for 500+ students and assignment/exam grading."]];
    document.getElementById("experienceGrid").innerHTML=entries.map(([date,org,role,body])=>`<article class="experience-item"><p class="experience-date">${escapeHtml(date)}</p><div><h3>${escapeHtml(org)}</h3><p class="project-org" lang="en">${escapeHtml(role)}</p><p lang="en">${escapeHtml(body)}</p></div></article>`).join("");
  };
  setLanguage(languageSelect.value);
})();
