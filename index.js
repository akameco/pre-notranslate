document.addEventListener("DOMContentLoaded", () => {
  for (const element of Array.from(document.getElementsByTagName("pre"))) {
    element.classList.add("notranslate");
  }
});
