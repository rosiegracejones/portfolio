var colors = ['--orange', '--violet', '--lilac', '--palelilac', '--green', '--yellow', '--white', '--navy'];

function changeColours () {
    var root = document.documentElement;
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    root.style.setProperty('--color', 'var(' + randomColor + ')');
}

