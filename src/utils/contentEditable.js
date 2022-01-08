export const selectAllInlineText = (e) => {
  e.target.focus();
  e.target.select();
  // document.execCommand("selectAll", false, null);
};
