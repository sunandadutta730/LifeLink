/* ===== LifeLink Notification Module ===== */

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = SVG_ICONS.sparkles(18, '#3b82f6');
  if (type === 'success') icon = SVG_ICONS.check(18, '#10b981');
  if (type === 'error') icon = SVG_ICONS.cross(18, '#ef4444');

  toast.innerHTML = `
    <span>${icon}</span>
    <span style="flex:1;">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 4500);
}
