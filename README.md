function displayTextOnAvailableSpace(divId, text) {
  const div = document.getElementById(divId);
  const divWidth = div.clientWidth;
  let content = text;

  while (div.scrollWidth > divWidth && content.length > 0) {
    content = content.substring(0, content.length - 1);
  }

  div.innerText = content;
}
