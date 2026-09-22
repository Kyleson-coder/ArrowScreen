let selectedMode = 'phone';

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => {
    selectedMode = button.dataset.mode;
    document.querySelectorAll('.choice').forEach(item => item.classList.toggle('selected', item === button));
  });
});

document.getElementById('create').addEventListener('click', async () => {
  const response = await fetch('/api/room');
  const data = await response.json();
  const shareUrl = `${data.shareUrl}?mode=${selectedMode}`;
  document.getElementById('share').value = shareUrl;
  document.getElementById('view').value = data.viewUrl;
  document.getElementById('links').classList.remove('hidden');
});

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const input = document.getElementById(button.dataset.copy);
    if (!input) return;
    try {
      await navigator.clipboard.writeText(input.value);
    } catch {
      const temp = document.createElement('input');
      temp.value = input.value;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
    }
  });
});
