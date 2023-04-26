
const fontSizeControlRef = document.getElementById('font-size-control');
const textSizeRef = document.getElementById('text');

fontSizeControlRef.addEventListener('input', onSizeChange);

function onSizeChange(event) {
  textSizeRef.style.fontSize = `${event.currentTarget.value}px`
};