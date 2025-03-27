//Event Listeners
document.getElementById('randomPaletteBtn').addEventListener('click', generateRandomPalette);
document.getElementById('baseColorBtn').addEventListener('click', generateFromBaseColor);
document.getElementById('imageColorBtn').addEventListener('click', extractColorsFromImage);

//Random Palette Generator
async function generateRandomPalette() {
    const response = await fetch('https://www.thecolorapi.com/scheme?hex=000000&mode=monochrome&count=5');
    const data = await response.json();
    displayPalette(data.colors.map(color => color.hex.value));
}

//Base Colour Palette Generator
function generateFromBaseColor() {
    const baseColor = document.getElementById('baseColor').value.substring(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=analogic&count=5`)
        .then(response => response.json())
        .then(data => displayPalette(data.colors.map(color => color.hex.value)));
}

// Display Palette
function displayPalette(colors) {
    const palette = document.getElementById('palette');
    palette.innerHTML = '';
    colors.forEach(color => {
        const div = document.createElement('div');
        div.className = 'color-box';
        div.style.backgroundColor = color;
        palette.appendChild(div);
    });
}
