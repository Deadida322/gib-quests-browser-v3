export default (el, binding) => {
    let defaultBackground = "";
    const setGradient = (el, { degrees, color }) => {
        defaultBackground = el.style.background;
        if (color == "default") {
            el.style.background = `linear-gradient(${degrees}deg, rgb(252 249 196 / 100%) 0%, rgb(239 126 92 / 100%) 17%, rgb(128 49 172 / 100%) 39%, rgb(95 75 200 / 100%) 52%, rgb(195 185 245 / 100%) 77%, rgb(3 9 33 / 100%) 100%)`;
        } else if (color == "error") {
            el.style.background = `linear-gradient(${degrees}deg, #5C6BC0 0%, #1565C0 15%, #004087 30%, #C62828 50%, #FF8A80 65%, #C62828 90%)`;
        } else if (color == "warning") {
            el.style.background = `linear-gradient(${degrees}deg, #6222a0 10%, #7600e7 30%, #d2be18 60%, #fff38b 75%, #be9528 90%)`;
        }
        el.style["-webkit-background-clip"] = "text";
        el.style["-webkit-text-fill-color"] = "transparent";
    };

    const removeGradient = (el) => {
        el.style.background = defaultBackground;
        el.style["-webkit-background-clip"] = "none";
        el.style["-webkit-text-fill-color"] = "";
    };

    if (binding.value === false) {
        if (el.tagName === "I") {
            removeGradient(el);
        } else {
            removeGradient(el.querySelector(".mdi"));
        }
        return;
    }
    const degrees = +binding?.value?.degrees || 135;
    const color = binding?.value?.color || "default";
    console.log(color);

    if (el.tagName === "I") {
        setGradient(el, { degrees, color });
    } else {
        setGradient(el.querySelector(".mdi"), { degrees, color });
    }
};
