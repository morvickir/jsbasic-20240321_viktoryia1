function toggleText() {
  const textDiv = document.getElementById('text');
  const button = document.querySelector('.toggle-text-button');
  
  button.addEventListener('click', () => {
    if (textDiv.hidden) {
      textDiv.hidden = false;
    } else {
      textDiv.hidden = true;
    }
  });
}