<script setup>
    const modules = import.meta.glob("@/assets/imgs/gallery-img/*.jpg", { eager: true })
    const images = Object.values(modules).map(m => m.default)
</script>

<template>
    <h2>Our Collections</h2>
    <div class="gallery">
        <div v-for="(img, i) in images"
        :key="i"
        class="gallery-item"
        :style="{ gridRowEnd: `span ${Math.floor(Math.random() * 2) + 1}` }"
        >
        <img :src="img" alt="" />
    </div>
  </div>
</template>


<style scoped>
    .gallery {
    margin: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px;
}

.gallery-item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(15,15,39);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    
}
</style>