document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.check a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // stop browser navigation
      const page = e.currentTarget.dataset.page;
      loadPage(page);
    });
  });
});

function loadPage(page) {
  fetch(`${page}.html`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(html => {
      document.querySelector('#app').innerHTML = html;
    })
    .catch(err => {
      console.error("Error loading page:", err);
      document.querySelector('#app').textContent = "Failed to load page.";
    });
}