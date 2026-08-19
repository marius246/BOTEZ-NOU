const photoInput = document.querySelector('#photoInput');
const couplePhoto = document.querySelector('#couplePhoto');
const photoPlaceholder = document.querySelector('#photoPlaceholder');

photoInput.addEventListener('change', (event) => {
  const [file] = event.target.files;
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    couplePhoto.src = reader.result;
    couplePhoto.hidden = false;
    photoPlaceholder.hidden = true;
  });
  reader.readAsDataURL(file);
});
