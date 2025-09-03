<script setup>
  import footerNote from './components/Footer.vue'
  import Gallery from './components/BentoBox.vue'
</script>

<template>
  <div class="gallery-section">
    <div class="gallery-wrapper">
      <h1>OUR PREVIOUS WORKS</h1>
      <Gallery />
    </div>
  </div>
  <footerNote />
</template>


<style scoped>
  .gallery-section {
      padding: 1rem;
      padding-top: 10rem;
      margin: 2rem;
      justify-content: center;
      
    }

    .gallery-wrapper {
      padding: 0.5rem;
      background-color: white;
      border-radius: 0.7rem;
    }
</style>
