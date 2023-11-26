document.addEventListener("DOMContentLoaded", function () {
  fetch("./README.md")
    .then((response) => response.text())
    .then((text) => {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(text);
      const div = document.createElement("div");
      div.innerHTML = html;
      document.body.appendChild(div);
      div.id = "markdown-content";
      hljs.highlightAll();
    })
    .catch((err) => console.error(err));
});
