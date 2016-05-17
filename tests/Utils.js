const isHidden = (el) => {
  const style = window.getComputedStyle(el);

  return (style.display === `none` || style.visibility === `hidden`);
};

export const Utils = {
  isHidden,
};
