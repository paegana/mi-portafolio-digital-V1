<template>
  <div class="detail" v-if="detail">
    <button @click="goBack">Volver</button>
    <h2>{{ detail.title }}</h2>
    <p>{{ detail.content }}</p>
    <ul v-if="detail.projects">
      <li v-for="project in detail.projects" :key="project.name">
        <a :href="project.link" target="_blank">{{ project.name }}</a>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Cargando detalles...</p>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    id: {
      type: String,
      required: true, // Asegura que el ID sea obligatorio
    },
  },
  data() {
    return {
      detail: null, // Inicializa como null
      worlds: [
        {
          id: "frontend-world",
          title: "Front-End Programming",
          content: "Explora mis proyectos interactivos y funcionales.",
          projects: [
            { name: "Carro de Compras", link: "https://paegana.github.io/proyectoCarrodeCompras/" },
            { name: "Games Opinion V2", link: "https://paegana.github.io/games-opinion-V2/" },
            { name: "Open Music", link: "https://paegana.github.io/proyect-open-music/" },
            { name: "Horas Alrededor del Mundo", link: "https://paegana.github.io/HorasAlRededorDelMundo/" },
          ],
        },
        {
          id: "realestate-world",
          title: "Real Estate",
          content: "Proyectos de propiedades y desarrollo inmobiliario.",
          projects: null,
        },
        {
          id: "plaza-world",
          title: "Hostal Plaza de Armas",
          content: "Hostal ubicado en el corazón de la ciudad, ofreciendo comodidad y una experiencia inolvidable.",
          projects: null,
        },
        {
          id: "rolling-world",
          title: "Rolling Hostel",
          content: "Un hostal móvil e innovador en la Patagonia, perfecto para viajeros aventureros.",
          projects: null,
        },
        {
          id: "about-world",
          title: "Sobre mí",
          content: "Ingeniero Comercial Universidad de Chile, Mención Administración con basta experiencia empresarial en el mercado de gestión inmobiliaria, hotelería y turismo, con más de 130 proyectos individuales de inversión, creación y venta de productos. Con alta capacidad analítica y ejecutiva, con experiencia en coordinación, planificación y control de gestión; desempeñando cargos en el área financiera, administrativa y comercial.",
          projects: null,
        },
      ],
    };
  },
  methods: {
    fetchDetail() {
      // Busca el mundo correspondiente al ID
      const found = this.worlds.find((world) => world.id === this.id);
      if (found) {
        this.detail = found;
      } else {
        console.error(`No se encontró el mundo con ID: ${this.id}`);
        this.detail = {
          title: "No encontrado",
          content: "Lo sentimos, no se pudo cargar la información de este mundo.",
        };
      }
    },
    goBack() {
      gsap.to(".detail", {
        scale: 0,
        duration: 0.5,
        onComplete: () => {
          this.$router.push("/"); // Regresa al inicio
        },
      });
    },
  },
  mounted() {
    this.fetchDetail(); // Carga los detalles al montar el componente
  },
};
</script>

<style scoped>
.detail {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 600px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
  margin-bottom: 15px;
}

button:hover {
  background: #0056b3;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin: 10px 0;
}

a {
  color: #00d4ff;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: #0099cc;
  text-decoration: underline;
}
</style>
