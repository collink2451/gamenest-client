export const addWindowClass = (classList) => {
  const window = document?.getElementById("root");
  if (window) {
    window.classList.add(classList);
  }
};

export const removeWindowClass = (classList) => {
  const window = document?.getElementById("root");
  if (window) {
    window.classList.remove(classList);
  }
};