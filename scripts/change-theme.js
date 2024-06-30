const colorschemes = [
    {
        "name": "Everforest Light Medium",
        "base_bg": "253, 246, 227",
        "sec_bg": "239, 235, 212",
        "dark_bg": "45, 53, 59",
        "base_fg": "92, 106, 114",
        "dark_fg": "211, 198, 170",
        "url": "141, 161, 1"
    },
    {
        "name": "Catppuccin Latte",
        "base_bg": "239, 241, 245",
        "sec_bg": "220, 224, 232",
        "dark_bg": "30, 32, 48",
        "base_fg": "76, 79, 105",
        "dark_fg": "202, 211, 245",
        "url": "64, 160, 43"
    },
    {
        "name": "Gruvbox Dark",
        "base_bg": "40, 40, 40",  // bg
        "sec_bg": "60, 56, 54",  // bg1
        "dark_bg": "251, 241, 199",  // Light bg
        "base_fg": "235, 219, 178",  // fg
        "dark_fg": "60, 56, 54",  // Light fg
        "url": "152, 151, 26"  // green
    },
    {
        "name": "Nord",
        "base_bg": "46, 52, 64",  // nord0
        "sec_bg": "59, 66, 82",  // nord1
        "dark_bg": "236, 239, 244",  // nord6
        "base_fg": "236, 239, 244",  // nord6
        "dark_fg": "46, 52, 64",  // nord0
        "url": "163, 190, 140"  // nord14
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