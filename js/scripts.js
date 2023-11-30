const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

/*  Botton for change Dark and Light Mode*/
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes("moon.svg")) {
            toggleIcon.src = "assets/icons/sun.svg";    
            toggleText.textContent = "Light Mode";
    } else {
            toggleIcon.src = "assets/icons/moon.svg";
            toggleText.textContent = "Dark Mode";
    }
});

/* Logic for change the colors en Gradient Colors */
toggleColors.addEventListener("click", (e) => {
    const selectedColor = e.target.dataset.color;
    rootStyles.setProperty("--primary-color", selectedColor);

    // Verificar el color seleccionado y actualizar --palette-color según sea necesario
    if (e.target.classList.contains("colors__item--yellow")) {
        const yellowColorsArray = ["hsl(46, 84%, 56%)", "hsl(46, 67%, 43%)", "hsl(46, 65%, 30%)"];
        const yellowGradientColors = yellowColorsArray.join(", ");
        rootStyles.setProperty("--palette-color", `linear-gradient(to right, ${yellowGradientColors})`);
    } else if (e.target.classList.contains("colors__item--blue")) {
        const blueColorsArray = ["rgb(29, 99, 255)", "rgb(22, 66, 159)", "rgb(11, 39, 100)"];
        const blueGradientColors = blueColorsArray.join(", ");
        rootStyles.setProperty("--palette-color", `linear-gradient(to right, ${blueGradientColors})`);
    } else if (e.target.classList.contains("colors__item--green")) {
        const greenColorsArray = ["rgb(74, 209, 134)", "rgb(55, 154, 99)", "rgb(34, 97, 62)"];
        const greenGradientColors = greenColorsArray.join(", ");
        rootStyles.setProperty("--palette-color", `linear-gradient(to right, ${greenGradientColors})`);
    } else if (e.target.classList.contains("colors__item--purple")) {
        const purpleColorsArray = ["rgb(109, 16, 245)", "rgb(68, 12, 152)", "rgb(45, 8, 101)"];
        const purpleGradientColors = purpleColorsArray.join(", ");
        rootStyles.setProperty("--palette-color", `linear-gradient(to right, ${purpleGradientColors})`);
    }
    // Agrega más bloques "else if" para manejar otras paletas específicas si es necesario
});


/* Functions for open en close modal perfil photo */
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}


