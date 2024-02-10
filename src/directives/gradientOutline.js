export default (el, binding) => {
    el.classList.add("g-border-gradient");

    if (binding.value === false) return;
};
