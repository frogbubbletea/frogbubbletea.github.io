const colorschemes = [
    {
        "name": "Everforest Light Medium",
        "base_bg": "#fdf6e3",
        "sec_bg": "#efebd4",
        "dark_bg": "#2d353b",
        "base_fg": "#5c6a72",
        "dark_fg": "#d3c6aa",
        "url": "#8da101"
    },
    {
        "name": "Catppuccin Latte",
        "base_bg": "#eff1f5",
        "sec_bg": "#dce0e8",
        "dark_bg": "#1e2030",
        "base_fg": "#4c4f69",
        "dark_fg": "#cad3f5",
        "url": "#40a02b"
    }
];

// Change the color scheme of the webpage
function changeColorscheme() {
    // Select the drop down list
    options = document.querySelectorAll("#front-page-color-select option");

    var idx = document.getElementById("front-page-color-select").value;
    var picked = colorschemes[idx];
    // Save the setting
    Cookies.set('colorscheme', idx, {path: '/'});

    document.documentElement.style.setProperty("--base-bg", picked.base_bg);
    document.documentElement.style.setProperty("--sec-bg", picked.sec_bg);
    document.documentElement.style.setProperty("--dark-bg", picked.dark_bg);
    document.documentElement.style.setProperty("--base-fg", picked.base_fg);
    document.documentElement.style.setProperty("--dark-fg", picked.dark_fg);
    document.documentElement.style.setProperty("--url", picked.url);

    // Revert drop down list to default option
    options[idx].selected = false;
    options[0].selected = true;
}

// Load list of color schemes into webpage
function loadColorschemes() {
    // Select the drop down list to load color schemes into
    select = document.getElementById("front-page-color-select");

    // Set default color scheme
    var defaultOpt = new Option("🎨 Theme", -1);
    defaultOpt.selected = true;
    defaultOpt.disabled = true;
    select.add(defaultOpt);

    for (var i = 0; i < colorschemes.length; i++) {
        var opt = new Option(colorschemes[i].name, i);
        select.add(opt);
    }
}

// Load current color scheme
function loadCurrentColorscheme() {
    var idx = Number(Cookies.get('colorscheme'));
    if (!idx) {  // Load default color scheme if user hasn't set one
        idx = 0;
    }
    var picked = colorschemes[idx];

    document.documentElement.style.setProperty("--base-bg", picked.base_bg);
    document.documentElement.style.setProperty("--sec-bg", picked.sec_bg);
    document.documentElement.style.setProperty("--dark-bg", picked.dark_bg);
    document.documentElement.style.setProperty("--base-fg", picked.base_fg);
    document.documentElement.style.setProperty("--dark-fg", picked.dark_fg);
    document.documentElement.style.setProperty("--url", picked.url);
}

// Load current color scheme and initialize color scheme menu
$(document).ready(function() {
    // Load current color scheme
    loadCurrentColorscheme();

    // Load list of color schemes
    loadColorschemes();
});