// script.js — load GitHub repos (public) and render project cards
const username = 'sushmitassathe25';
const grid = document.getElementById('projects-grid');
const loading = document.getElementById('projects-loading');
const errorEl = document.getElementById('projects-error');

function escapeHtml(s){
  return String(s || '').replace(/[&<>"']/g, (m)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function createCard(repo){
  const a = document.createElement('a');
  a.className = 'project';
  a.href = repo.html_url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  const name = escapeHtml(repo.name);
  const desc = escapeHtml(repo.description || 'No description');
  const lang = escapeHtml(repo.language || '—');
  const stars = repo.stargazers_count || 0;

  a.innerHTML = `
    <h3 class="title">${name}</h3>
    <p class="desc">${desc}</p>
    <div class="meta-row">
      <span class="pill">${lang}</span>
      <span class="pill">★ ${stars}</span>
      <span class="pill">Updated ${new Date(repo.updated_at).toLocaleDateString()}</span>
    </div>
  `;
  return a;
}

async function fetchRepos(){
  loading.style.display = '';
  errorEl.style.display = 'none';
  try{
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`);
    if(!res.ok) throw new Error('GitHub API error');
    const data = await res.json();
    const publicRepos = data.filter(r => !r.fork);
    if(publicRepos.length === 0) throw new Error('No repos found');
    grid.innerHTML = '';
    publicRepos.forEach(r => grid.appendChild(createCard(r)));
  }catch(e){
    console.warn('GitHub fetch failed:', e);
    // fallback to projects.json if present
    try{
      const fb = await fetch('projects.json');
      if(!fb.ok) throw new Error('fallback missing');
      const list = await fb.json();
      grid.innerHTML = '';
      list.forEach(r => grid.appendChild(createCard(r)));
    }catch(_){
      loading.style.display = 'none';
      errorEl.style.display = '';
    }
  } finally {
    loading.style.display = 'none';
    document.getElementById('year').textContent = new Date().getFullYear();
  }
}

fetchRepos();

