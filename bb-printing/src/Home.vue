<script setup>
    import infoFooter from './components/Footer.vue'
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination } from 'vue3-carousel'
    import { ref, onMounted, onUnmounted } from 'vue'

    // Dynamically import all images from img-slider folder
    const modules = import.meta.glob('/src/assets/imgs/img-slider/*.jpg', { eager: true })
    const images = Object.values(modules).map(m => m.default)
    
    // Responsive itemsToShow
    const itemsToShow = ref(window.innerWidth <= 768 ? 1.1 : 3.05) // Mobile view

    function handleResize() {
    itemsToShow.value = window.innerWidth <= 768 ? 1.1 : 3.05
    }

    onMounted(() => {
        window.addEventListener('resize', handleResize)
    })  
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize)
    })

    const carouselConfig = {
      wrapAround: true,
      autoplay: false,
      autoplayTimeout: 50000
    }

    // Use computed to merge itemsToShow with config
    import { computed } from 'vue'
    const responsiveConfig = computed(() => ({
        ...carouselConfig,
        itemsToShow: itemsToShow.value
    }))

</script>

<template>
  <div class="home-wrapper">
    <div class="service-intro">
        <div class="service-wrapper">
            <h2>Who Are We?</h2>
            <p>
                Welcome to Bumi Borneo T-Shirt Printing, your trusted partner for high-quality and affordable custom 
                apparel in Sibu, Sarawak. Whether you need t-shirts for corporate events, sports teams, family gatherings, 
                schools, or personal projects, we provide top-notch printing services with fast turnaround 
                and excellent customer support. 
            </p>
            <img src="" alt="about-us img"></img>
        </div>
    </div>
    <!--Image Carousel-->
    <section class="image-slider">
        <h2>Our Designs</h2>
        <Carousel v-bind="responsiveConfig">
            <Slide v-for="(img, idx) in images" :key="idx">
                <div class="carousel__item">
                    <img :src="img" alt="slider image" />
                </div>
            </Slide>
            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </section>

    <!--Main contents-->
    <section class="landing-page">
        <div class="why-us">
            <h2>Why Choose Us?</h2>
            <ul>
                <li><b>VARIETY OF STYLES</b></li>
                <li><b>VARIOUS PRINTING OPTIONS</b></li>
                <li><b>FREE GRAPHIC DESIGN SERVICE</b></li>
                <li><b>VARIETY OF STYLES</b></li>
                <li><b>AFFORDABLE & NEGOTIABLE PRICING</b></li>
                <li><b>QUALITY CUSTOMER SERVICE IN SIBU</b></li>
            </ul>
            <img id="why-us-img" alt="Why Choose Us Img"></img>
        </div>
        <div class="perfect-for">
            <h2>Perfect for</h2>
            <div class="corpo">
                <p>Corporate Uniform & Event</p>
                <img id="corpo" alt="corpo-img"></img>
            </div>
            <div class="clubs">
                <p>School & College Club</p>
                <img id="clubs" alt="club-img"></img>
            </div>
            <div class="sports">
                <p>Sport Teams & Tournaments</p>
                <img id="sports" alt="sports-img"></img>
            </div>
            <div class="family">
                <p>Family Day shirts & Reunions</p>
                <img id="family" alt="family-img"></img>
            </div>
            <div class="merch">
                <p>Merchandise & Business Branding</p>
                <img id="merch" alt="merch-img"></img>
            </div>
        </div>
    </section>
    <!--Ending-->
    <infoFooter />
  </div>
</template>


<style scoped>
    .why-us, .perfect-for, .service-wrapper{
        background-color: white;
        border-radius: 0.7rem;
    }
    
    .service-intro {
        padding-top: 12rem;
    }
    
    .landing-page, .why-us, .perfect-for, .service-wrapper{
        display:block;

        margin: 2rem;
        padding: 3.5rem;
        padding-top: 0.6rem;
    }

    .image-slider {
        margin-top: 2rem;
    }

    .image-slider img {
        width: 500px;
        height: 350px;
    }

        /* Positioning */
    :deep(.carousel__pagination) {
        position: static !important; /* Removes absolute positioning */
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 2.5rem;
        margin-left:50%;
    }

    /* Dots */
    :deep(.carousel__pagination-button) {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #d1d5db; /* Tailwind gray-300 */
      border: none;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    /* Active dot */
    :deep(.carousel__pagination-button--active) {
      background-color: #111827; /* Tailwind gray-900 */
      transform: scale(1.2);
    }

    @media (max-width: 768px) {
    :deep(.carousel__pagination) {
        position: static !important; /* Removes absolute positioning */
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 1.8rem;
        margin-left:50%;
        }
    
    /* Dots */
    :deep(.carousel__pagination-button) {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #d1d5db; /* Tailwind gray-300 */
      border: none;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    /* Active dot */
    :deep(.carousel__pagination-button--active) {
      background-color: #111827; /* Tailwind gray-900 */
      transform: scale(1.2);
    }

    .image-slider img {
        width: 350px;
        height: 350px;
    } 
    }

    @media (max-width:480px) {
        .image-slider img {
        width: 350px;
        height: 350px;
    }
    }
</style>
