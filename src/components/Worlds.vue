<template>
  <div class="worlds">
    <div
      v-for="world in worlds"
      :key="world.id"
      :id="world.id"
      class="world"
      :style="getWorldStyle(world)"
      @click="zoomToWorld(world.id)"
    >
      <p>{{ world.title }}</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Worlds",
  data() {
    return {
      worlds: [
        {
          id: "frontend-world",
          title: "Front-End Programming",
          content: "Explora mis proyectos interactivos y funcionales.",
          image: null,
          position: { top: "13%", left: "9%" },
        },
        {
          id: "realestate-world",
          title: "Real Estate",
          content: "Proyectos de propiedades y desarrollo inmobiliario.",
          image: "./assets/realestate.jpg",
          position: { top: "10%", right: "17%" },
        },
        {
          id: "plaza-world",
          title: "Hostal Plaza de Armas",
          content: "Hostal ubicado en el corazón de la ciudad.",
          image: "./assets/plaza.jpg",
          position: { bottom: "20%", left: "10%" },
        },
        {
          id: "rolling-world",
          title: "Rolling Hostel",
          content: "Un hostal móvil e innovador en la Patagonia.",
          image: "./assets/rolling.jpg",
          position: { bottom: "20%", right: "10%" },
        },
        {
          id: "about-world",
          title: "Sobre mí",
          content: "Reseña personal con más detalles próximamente.",
          image: "./assets/FotoPablo.jpg",
          position: { top: "50%", left: "50%" }, // Mundo central
        },
      ],
    };
  },
  methods: {
    zoomToWorld(worldId) {
      const element = document.getElementById(worldId);

      if (!element) {
        console.error(`Elemento con ID ${worldId} no encontrado.`);
        return;
      }

      gsap.to(".world", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.to(element, { scale: 2, duration: 1 });
          this.$router.push(`/world/${worldId}`);
        },
      });
    },
    getWorldStyle(world) {
      // Configura posiciones absolutas basadas en la propiedad `position`
      const positionStyle = {
        position: "absolute",
        top: world.position?.top || "auto",
        left: world.position?.left || "auto",
        right: world.position?.right || "auto",
        bottom: world.position?.bottom || "auto",
        transform: world.id === "about-world" ? "translate(-50%, -50%)" : "none",
      };

      if (world.image) {
        return {
          ...positionStyle,
          backgroundImage: `url(${world.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
      }

      return {
        ...positionStyle,
        backgroundColor: "rgba(0, 204, 255, 0.7)",
      };
    },
  },
};
</script>

<style scoped>
.worlds {
  position: relative;
  width: 100%;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  background: url("./assets/fondo.jpg") no-repeat center center fixed; /* Fondo */
  background-size: cover; /* Ajusta el fondo a la ventana */
  overflow: hidden; /* Asegura que los mundos no se salgan del contenedor */
}

.world {
  position: absolute; /* Habilita posiciones personalizadas */
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.world:hover {
  transform: scale(1.1);
}

.world p {
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
