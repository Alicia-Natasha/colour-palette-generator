document.getElementById('randomPaletteBtn').addEventListener('click', generateRandomPalette);
document.getElementById('baseColorBtn').addEventListener('click', generateFromBaseColor);
document.getElementById('imageColorBtn').addEventListener('click', extractColorsFromImage);

async function generateRandomPalette() {
    const response = await fetch('https://www.thecolorapi.com/scheme?hex=000000&mode=monochrome&count=5');
    const data = await response.json();
    displayPalette(data.colors.map(color => color.hex.value));
}

function generateFromBaseColor() {
    const baseColor = document.getElementById('baseColor').value.substring(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=analogic&count=5`)
        .then(response => response.json())
        .then(data => displayPalette(data.colors.map(color => color.hex.value)));
}

