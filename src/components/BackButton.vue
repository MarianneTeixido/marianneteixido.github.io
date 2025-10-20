<template>
  <button class="back-button" @click="$router.back()">
    <span class="text-container">Volver</span>
  </button>
</template>

<style scoped>
.back-button {
  position: relative;
  display: flex;
  height: 50px;
  width: 10rem; 
  align-items: center;
  justify-content: center;
  overflow: hidden;

  background-color: var(--Blue-01); 
  color: white;

  font-weight: 500;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 

  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
}

.back-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 0 solid white;
  transition: border-width 100ms linear;
}

.back-button:hover {
  background-color: white;
  color:var(--Blue-01);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4), 0 4px 6px -2px rgba(37, 99, 235, 0.2);
}

.back-button:hover::before {
  border-width: 25px;
}

.text-container {
  position: relative;
  z-index: 10;
}
</style>
