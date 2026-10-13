(() => {
  if (!baseProject) return;
  const originalRender = render;
  render = () => {
    const project = window.PORTFOLIO_CURRENT.projects[baseProject.id];
    if (!project?.concise) { originalRender(); return; }
    const lang = getLang(), tr = lang === 'tr';
    const choose = value => value?.[lang] || value?.en || value || '';
    const title = choose(project.title);
    titleEl.textContent = title; companyEl.textContent = choose(project.company);
    descEl.textContent = choose(project.description); crumbTitle.textContent = title;
    periodChip.textContent = choose(project.period); locChip.textContent = choose(project.location);
    document.title = `${title} — Mehmet Selman Yılmaz`;
    techEl.innerHTML = ''; project.tech.forEach(t => techEl.appendChild(createTechTag(t)));
    contentEl.innerHTML = '';
    const summary = document.createElement('section'); summary.className = 'case-facts'; summary.lang = tr ? 'tr' : 'en';
    const features = tr ? project.concise.features_tr || project.concise.features : project.concise.features;
    const result = tr ? project.concise.result_tr ?? project.concise.result : project.concise.result;
    summary.innerHTML = `<h2>${tr ? 'Özellikler' : 'Features'}</h2><ul>${features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}</ul>${result ? `<div class="recorded-result"><h2>${tr ? 'Kayıtlı sonuç' : 'Recorded result'}</h2><p>${escapeHtml(result)}</p></div>` : ''}`;
    contentEl.appendChild(summary);
    if (project.url) {
      const a = document.createElement('a'); a.href = project.url; a.target = '_blank'; a.rel = 'noopener';
      a.className = 'source-link'; a.textContent = tr ? 'Kaynak / referans ↗' : 'Source / reference ↗'; contentEl.appendChild(a);
    }
    if (['polieco','tbmm'].includes(project.id)) {
      const related = document.createElement('a');
      related.href = `project.html?project=${project.id === 'polieco' ? 'tbmm' : 'polieco'}&lang=${lang}`;
      related.className = 'source-link related-case';
      related.textContent = project.id === 'polieco' ? (tr ? 'TBMM veri derlemi ve model değerlendirmesi ↗' : 'TBMM corpus & model evaluation ↗') : (tr ? 'Politik ekonomi ağları ↗' : 'Political-economy networks ↗');
      contentEl.appendChild(related);
    }
    const gallery = document.createElement('section'); gallery.className = project.id === 'atcha' ? 'case-gallery phone-gallery' : 'case-gallery';
    (project.images || []).forEach((item,index) => {
      const src = item.src || imagePath(project.id,index+1), caption = choose(item.title);
      const figure = document.createElement('figure'); figure.className = 'image-section';
      figure.innerHTML = `<div class="${project.id === 'atcha' ? 'phone-viewport' : 'image-viewport'}"><img class="project-image" src="${escapeHtml(src)}" data-src="${escapeHtml(src)}" alt="${escapeHtml(title+' — '+caption)}" loading="lazy" decoding="async" tabindex="0" role="button" aria-label="${escapeHtml(caption+' — enlarge image')}"></div><figcaption>${escapeHtml(caption)}</figcaption>`;
      const image = figure.querySelector('img'); image.addEventListener('click',() => openLightbox(src,image.alt));
      image.addEventListener('keydown',event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openLightbox(src,image.alt); } });
      gallery.appendChild(figure);
    });
    contentEl.appendChild(gallery);
    if (project.id === 'atcha' || project.id === 'advisu') {
      const note = document.createElement('p'); note.className = 'screen-note'; note.lang = 'en';
      note.textContent = project.id === 'atcha' ? 'Actual visual-test screens with sample content. Long renders are clipped to a standard phone viewport.' : 'Actual application screens with official curriculum and section data, an isolated sample student and illustrative grades.';
      contentEl.appendChild(note);
    }
    if (project.details?.length) {
      const detail = document.createElement('details'); detail.className = 'technical-notes';
      const heading = document.createElement('summary'); heading.textContent = tr ? 'Teknik ayrıntılar ve değerlendirme kapsamı' : 'Technical details & evaluation scope'; detail.appendChild(heading);
      project.details.forEach(section => detail.appendChild(createDetailSection(section)));
      detail.addEventListener('toggle',() => { if (detail.open && window.MathJax?.typesetPromise) window.MathJax.typesetPromise([detail]).catch(() => {}); });
      contentEl.appendChild(detail);
    }
  };
  let returnFocus;
  const originalOpen = openLightbox, originalClose = closeLightbox;
  openLightbox = (src,alt) => {
    returnFocus = document.activeElement; originalOpen(src,alt);
    lightbox.classList.toggle('phone-lightbox', /atcha[1-6]\.png$/.test(src));
    lightbox.setAttribute('role','dialog'); lightbox.setAttribute('aria-modal','true'); lightbox.setAttribute('aria-label',alt); lightboxClose.focus();
  };
  closeLightbox = () => { originalClose(); returnFocus?.focus(); };
  lightboxClose.addEventListener('click',closeLightbox);
  lightbox.addEventListener('keydown',event => { if (event.key === 'Tab') { event.preventDefault(); lightboxClose.focus(); } });
  render();
})();
