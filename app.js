// Selección de elementos
const detail = document.getElementById("detail");
const detailContent = document.getElementById("detail-content");
const backButton = document.getElementById("back-button");
const projectsSection = document.getElementById("projects");
const backToWorldsButton = document.getElementById("back-to-worlds");
const projectDetailsSection = document.getElementById("project-details");
const backToProjectsButton = document.getElementById("back-to-projects");
const projectList = document.querySelector(".project-list");
const projectIframe = document.getElementById("project-iframe");

// Objeto que contiene los detalles de cada mundo
const worlds = {
  "frontend-world": {
    title: "Front-End Programming",
    content: "Detalles sobre tus habilidades y proyectos en Front-End.",
    projects: [
      { name: "Carro de Compras", link: "https://paegana.github.io/proyectoCarrodeCompras/" },
      { name: "Games Opinion V2", link: "https://paegana.github.io/games-opinion-V2/" },
      { name: "Rock Band", link: "https://paegana.github.io/rock" },
      { name: "Horas Alrededor del Mundo", link: "https://paegana.github.io/HorasAlrededorDelMundo/" },
    ],
  },
  "realestate-world": {
    title: "Real Estate",
    content: "Información sobre tus proyectos inmobiliarios.",
  },
  "plaza-world": {
    title: "Plaza de Armas Hostel",
    content: "Hostel ubicado en el centro histórico.",
  },
  "rolling-world": {
    title: "Rolling Hostel",
    content: "Hostel itinerante y moderno.",
  },
};

// Función para mostrar el detalle del mundo seleccionado
const showWorldDetail = (worldId) => {
  const worldData = worlds[worldId];
  if (!worldData) {
    console.error(`No se encontró información para el mundo con ID: ${worldId}`);
    return;
  }

  // Si el mundo tiene proyectos, mostrar la vista de proyectos
  if (worldData.projects) {
    document.querySelector(".worlds").classList.add("hidden");
    projectsSection.classList.remove("hidden");

    // Cargar proyectos dinámicamente
    projectList.innerHTML = worldData.projects
      .map(
        (project) => `
        <div class="project" data-link="${project.link}">
          <h3>${project.name}</h3>
        </div>
      `
      )
      .join("");
  } else {
    // Cargar contenido dinámico en el detalle
    detailContent.innerHTML = `
      <h2>${worldData.title}</h2>
      <p>${worldData.content}</p>
    `;

    // Mostrar la vista de detalle
    detail.classList.remove("hidden");
  }
};

// Evento para cada mundo
document.querySelectorAll(".world").forEach((world) => {
  world.addEventListener("click", () => {
    const worldId = world.id;
    showWorldDetail(worldId);
  });
});

// Volver a la vista general desde detalle
if (backButton) {
  backButton.addEventListener("click", () => {
    detail.classList.add("hidden");
    document.querySelector(".worlds").classList.remove("hidden");
  });
}

// Volver a la vista general desde la lista de proyectos
if (backToWorldsButton) {
  backToWorldsButton.addEventListener("click", () => {
    projectsSection.classList.add("hidden");
    document.querySelector(".worlds").classList.remove("hidden");
  });
}

// Mostrar detalles del proyecto al hacer clic en un proyecto de la lista
if (projectList) {
  projectList.addEventListener("click", (e) => {
    const projectElement = e.target.closest(".project");
    if (!projectElement) return;

    const projectLink = projectElement.dataset.link;

    // Mostrar el proyecto en un iframe
    projectIframe.src = projectLink;

    projectsSection.classList.add("hidden");
    projectDetailsSection.classList.remove("hidden");
  });
}

// Volver a la lista de proyectos desde la vista de detalles
if (backToProjectsButton) {
  backToProjectsButton.addEventListener("click", () => {
    projectDetailsSection.classList.add("hidden");
    projectsSection.classList.remove("hidden");
    projectIframe.src = ""; // Limpia el iframe
  });
}
