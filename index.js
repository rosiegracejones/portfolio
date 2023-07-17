// var colors = ['--orange', '--violet', '--lilac', '--palelilac', '--green', '--yellow', '--white', '--navy'];

// function changeColours () {
//     var root = document.documentElement;
//     var randomColor = colors[Math.floor(Math.random() * colors.length)];
//     root.style.setProperty('--color', 'var(' + randomColor + ')');
// }

function toggleColour () {
    document.querySelector('body').style.backgroundColor = 'var(--grey)';
    document.querySelector('.navbar').style.backgroundColor = 'var(--grey)';
    document.querySelector('p').style.color = 'var(--white)';
    document.querySelector('a').style.color = 'var(--white)';
}