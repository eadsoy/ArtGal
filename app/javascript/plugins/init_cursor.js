const initCursor = () => {
  window.onmousemove = function (e) {
    if (e.target.classList.contains("follow-mouse")) {
      // Content of dot which is hovered
      const target = e.target.nextElementSibling;

      // Only work with hovered target
      // Add visible class hovered elem to distinguish
      if (!target.classList.contains("visible")) {
        target.classList.add("visible");
      } else {
        // Get viewport offset of tooltip element
        const offset = target.parentElement.getBoundingClientRect();
        // Tooltip distance from mouse(px)
        const tipDist = 15;
        // Calc and set new tooltip location
        target.style.top = e.clientY - offset.top + tipDist + "px";
        target.style.left = e.clientX - offset.left + tipDist + "px";
      }
    } else {
      // Remove visible class
      const content = document.getElementsByClassName("content");
      for (let i = 0; i < content.length; i++) {
        content[i].classList.remove("visible");
      }
    }
  };
};

export { initCursor };
