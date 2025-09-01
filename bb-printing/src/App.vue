<script setup>
  import Navbar from './components/NavBar.vue'
  import PreviewCard from './components/PreviewCard.vue';
</script>

<template>
  <Navbar />
  <PreviewCard
    title="Lorem Ipsum"
    image="https://i.pinimg.com/736x/ae/02/cd/ae02cdf1dbb0bc80f81f95ef174d0bd4.jpg"
    desc="I'm a description"
    :price="40.0"
  />
  <PreviewCard
    title="Lorem Ipsum"
    image="https://i.pinimg.com/736x/ae/02/cd/ae02cdf1dbb0bc80f81f95ef174d0bd4.jpg"
    desc="I'm a description description description   "
    :price="40.0"
  />
  <PreviewCard
    title="Lorem Ipsum"
    image="https://i.pinimg.com/736x/ae/02/cd/ae02cdf1dbb0bc80f81f95ef174d0bd4.jpg"
    desc="I'm a description. I'm a description I'm a description I'm a description I'm a description I'm a description I'm a description  "
    :price="40.0"
  />

  <PreviewCard
    title="Lorem Ipsum"
    image="https://i.pinimg.com/736x/ae/02/cd/ae02cdf1dbb0bc80f81f95ef174d0bd4.jpg"
    desc="I'm a description I'm a description I'm a description I'm a description I'm a description "
    :price="40.0"
  />
  <PreviewCard
    title="Lorem Ipsum"
    image="https://i.pinimg.com/736x/ae/02/cd/ae02cdf1dbb0bc80f81f95ef174d0bd4.jpg"
    desc="I'm a description description description   "
    :price="40.0"
  />
  <PreviewCard
    title="Lorem Ipsum"
    image="https://i.pinimg.com/736x/ae/02/cd/ae02cdf1dbb0bc80f81f95ef174d0bd4.jpg"
    desc="I'm a description. I'm a description I'm a description I'm a description I'm a description I'm a description I'm a description  "
    :price="40.0"
  />

  <PreviewCard
    title="Lorem Ipsum"
    image="https://i.pinimg.com/736x/ae/02/cd/ae02cdf1dbb0bc80f81f95ef174d0bd4.jpg"
    desc="I'm a description I'm a description I'm a description I'm a description I'm a description "
    :price="40.0"
  />
</template>


<style scoped>
  * {
    padding: 0px;
    margin: 0px;
    display: flex;
    list-style: none;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
  }
</style>
