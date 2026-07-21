document.addEventListener("DOMContentLoaded", function () {
  const formationPages = [
    "h0", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "Quiz%20final"
  ];

  let viewedPages = JSON.parse(localStorage.getItem("wiki_viewed_pages") || "[]");
  const currentPath = window.location.pathname;

  // 1. GESTION DU TEMPS DE LECTURE DE LA PAGE ACTUELLE
  const article = document.querySelector(".md-content__inner");
  if (article && currentPath.includes("/formation/")) {
    const text = article.innerText || "";
    const wordCount = text.trim().split(/\s+/).length;
    const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

    // Insertion d'un petit badge "Temps de lecture" sous le titre H1
    const h1 = article.querySelector("h1");
    if (h1) {
      const timeBadge = document.createElement("div");
      timeBadge.style.cssText = "display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: #1a5fb4; background: #eef4fb; padding: 4px 10px; border-radius: 12px; margin-top: 8px; margin-bottom: 16px;";
      timeBadge.innerHTML = `⏱️ Temps de lecture estimé : ~${readingTimeMinutes} min (${wordCount} mots)`;
      h1.insertAdjacentElement('afterend', timeBadge);
    }
  }

  // 2. AJOUT DU BOUTON EN BAS DE PAGE
  if (article && currentPath.includes("/formation/")) {
    const btnContainer = document.createElement("div");
    btnContainer.style.cssText = "margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;";
    
    const isAlreadyViewed = viewedPages.some(p => currentPath.includes(p));

    const statusText = document.createElement("span");
    statusText.style.cssText = "font-size: 13px; color: #666; font-weight: 500;";
    statusText.textContent = isAlreadyViewed ? "Statut : Leçon validée ✅" : "Statut : Non terminée ⚪";

    const btn = document.createElement("button");
    btn.className = "md-button md-button--primary";
    btn.style.cssText = "cursor: pointer; font-size: 13px;";
    btn.textContent = isAlreadyViewed ? "✅ Leçon terminée" : "⚪ Marquer comme lue";

    btn.addEventListener("click", function () {
      const pageKey = formationPages.find(p => currentPath.includes(p));
      if (pageKey && !viewedPages.includes(pageKey)) {
        viewedPages.push(pageKey);
        localStorage.setItem("wiki_viewed_pages", JSON.stringify(viewedPages));
        btn.textContent = "✅ Leçon terminée";
        statusText.textContent = "Statut : Leçon validée ✅";
        updateAll();
      }
    });

    btnContainer.appendChild(statusText);
    btnContainer.appendChild(btn);
    article.appendChild(btnContainer);
  }

  // 3. BARRE DE PROGRESSION GLOBALE (DANS LE HEADER OU LA SIDEBAR)
  function renderProgressBar() {
    let progressBar = document.getElementById("global-progress-bar");
    if (!progressBar) {
      const sidebar = document.querySelector(".md-sidebar--primary .md-sidebar__scrollwrap");
      if (sidebar) {
        const progressBox = document.createElement("div");
        progressBox.id = "global-progress-box";
        progressBox.style.cssText = "padding: 14px; margin: 10px; background: #f5f7fa; border: 1px solid #d5d9de; border-radius: 8px;";
        
        progressBox.innerHTML = `
          <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: #444; margin-bottom: 6px;">
            <span>Progression globale</span>
            <span id="progress-percent">0%</span>
          </div>
          <div style="width: 100%; background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
            <div id="global-progress-bar" style="width: 0%; height: 100%; background: #4a9b5e; transition: width 0.3s ease;"></div>
          </div>
        `;
        sidebar.insertBefore(progressBox, sidebar.firstChild);
      }
    }

    const percent = Math.round((viewedPages.length / formationPages.length) * 100);
    const percentEl = document.getElementById("progress-percent");
    const barEl = document.getElementById("global-progress-bar");

    if (percentEl) percentEl.textContent = `${percent}%`;
    if (barEl) barEl.style.width = `${percent}%`;
  }

  // 4. MISE A JOUR DES COCHES DANS LE MENU
  function markMenuLinks() {
    document.querySelectorAll(".md-nav__link").forEach(link => {
      const href = link.getAttribute("href") || "";
      formationPages.forEach(p => {
        if (href.includes(p) && viewedPages.includes(p)) {
          if (!link.querySelector(".check-mark")) {
            const check = document.createElement("span");
            check.className = "check-mark";
            check.style.cssText = "margin-left: auto; color: #4a9b5e; font-weight: bold; font-size: 12px;";
            check.textContent = " ✓";
            link.appendChild(check);
          }
        }
      });
    });
  }

  function updateAll() {
    renderProgressBar();
    markMenuLinks();
  }

  updateAll();
});
