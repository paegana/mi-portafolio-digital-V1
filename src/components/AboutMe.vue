<template>
    <div class="about-me">
      <div class="about-photo">
        <img src="/assets/fotopablo.jpg" alt="Pablo Egaña" />
      </div>
      <div class="about-description">
        <h2>Sobre mí</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          placerat velit et lorem euismod, sit amet vehicula purus gravida.
        </p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about-me {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    color: white;
    width: 80%;
    max-width: 600px;
  }
  
  .about-photo img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
    border: 3px solid #00d4ff;
  }
  
  .about-description h2 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    margin-bottom: 10px;
    color: #00d4ff;
  }
  
  .about-description p {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: white;
  }
  </style>
  