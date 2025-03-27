//Event Listeners
document.getElementById('randomPaletteBtn').addEventListener('click', generateRandomPalette);
document.getElementById('baseColorBtn').addEventListener('click', generateFromBaseColor);

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

        // Create label for hex code
        const label = document.createElement('p');
        label.textContent = color;
        label.style.margin = '5px 0 0';
        label.style.fontSize = '12px';
        label.style.color = '#333';

        // Wrap box and label
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.appendChild(div);
        container.appendChild(label);

        palette.appendChild(container);
    });
}
