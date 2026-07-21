document.addEventListener("DOMContentLoaded", function () {
  // Clé locale pour stocker les leçons vues
  const currentPath = window.location.pathname;
  let viewedPages = JSON.parse(localStorage.getItem("viewed_pages") || "[]");

  // Si on est sur une page de formation
  if (currentPath.includes("/formation/")) {
    const mainContent = document.querySelector(".md-content");
    if (mainContent) {
      const btnContainer = document.createElement("div");
      btnContainer.style.cssText = "margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: right;";
      
      const isAlreadyViewed = viewedPages.includes(currentPath);
      
      const btn = document.createElement("button");
      btn.className = "md-button md-button--primary";
      btn.textContent = isAlreadyViewed ? "✅ Leçon terminée" : "⚪ Marquer la leçon comme lue";
      
      btn.addEventListener("click", function () {
        if (!viewedPages.includes(currentPath)) {
          viewedPages.push(currentPath);
          localStorage.setItem("viewed_pages", JSON.stringify(viewedPages));
          btn.textContent = "✅ Leçon terminée";
          markMenu();
        }
      });

      btnContainer.appendChild(btn);
      mainContent.appendChild(btnContainer);
    }
  }

  // Fonction pour ajouter la coche dans le menu latéral
  function markMenu() {
    document.querySelectorAll(".md-nav__link").forEach(link => {
      const href = link.getAttribute("href");
      if (href && viewedPages.some(page => page.endsWith(href) || href.endsWith(page))) {
        if (!link.textContent.includes("✅")) {
          link.innerHTML = link.innerHTML + " <span style='font-size:11px; margin-left: auto;'>✅</span>";
        }
      }
    });
  }

  markMenu();
});
