<script setup>
    import infoFooter from './components/Footer.vue'
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination } from 'vue3-carousel'
    import { ref, onMounted, onUnmounted } from 'vue'

    // Dynamically import all images from img-slider folder
    const modules = import.meta.glob('/src/assets/imgs/img-slider/*.jpg', { eager: true })
    const images = Object.values(modules).map(m => m.default)
    
    // Responsive itemsToShow
    const itemsToShow = ref(window.innerWidth <= 768 ? 1.2 : 3.05) // Mobile view

    function handleResize() {
    itemsToShow.value = window.innerWidth <= 768 ? 1.2 : 3.05
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
        <img src="@/assets/imgs/bb-printing.jpg" class="mobile-logo" alt="BB Printing Logo" width="150"/>
        <div class="service-wrapper">
            <h2>Who Are We?</h2>
            <p>
                Welcome to Bumi Borneo T-Shirt Printing, your trusted partner for high-quality and affordable custom 
                apparel in Sibu, Sarawak. Whether you need t-shirts for corporate events, sports teams, family gatherings, 
                schools, or personal projects, we provide top-notch printing services with fast turnaround 
                and excellent customer support. 
            </p>
            <img src="@/assets/imgs/about-us.jpg" alt="about-us img" width="330"/>
        </div>
        <h2 id="benefits-header">Benefits</h2>
        <div class="benefits-with-us">
            <div class="shipping">
                <i class="fa fa-ship" aria-hidden="true"></i>
                <p>We ship all across all of Malaysia!</p>
            </div>
            <div class="prices">
                <i class="fa fa-tag" aria-hidden="true"></i>
                <p>Negotiable prices</p>
            </div>
            <div class="quality">
                <i class="fa fa-scissors" aria-hidden="true"></i>
                <p>High quality prints</p>
            </div>
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
                <div class="perfect-grid">
                    <div class="perfect-card">
                        <li><b>VARIETY OF STYLES</b></li>
                    </div>
                    <div class="perfect-card">
                        <li><b>VARIOUS PRINTING OPTIONS</b></li>
                    </div>
                    <div class="perfect-card">
                        <li><b>FREE GRAPHIC DESIGN SERVICE</b></li>
                    </div>
                    <div class="perfect-card">
                        <li><b>VARIETY OF STYLES</b></li>
                    </div>
                    <div class="perfect-card">
                        <li><b>AFFORDABLE & NEGOTIABLE PRICING</b></li>
                    </div>
                    <div class="perfect-card">
                        <li><b>QUALITY CUSTOMER SERVICE IN SIBU</b></li>
                    </div>
                </div>
            </ul>
        </div>
        <div class="perfect-for">
    <h2>Perfect For</h2>
        <div class="perfect-grid">
            <div class="perfect-card">
                <p>Corporate Uniform & Event</p>
            </div>
            <div class="perfect-card">
                <p>School & College Club</p>
            </div>
            <div class="perfect-card">
                <p>Sport Teams & Tournaments</p>
            </div>
            <div class="perfect-card">
                <p>Family Day shirts & Reunions</p>
            </div>
            <div class="perfect-card">
                <p>Merchandise & Business Branding</p>
            </div>
        </div>
    </div>

    </section>
    <!--Ending-->
    <infoFooter />
  </div>
</template>


<style scoped>
    .shipping {
        padding-left: 3rem;
    }
    #benefits-header {
        font-weight: 800;
        padding-bottom: 3rem;
    }

    .benefits-with-us {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
    }
    .benefits-with-us div {
        flex: 1;
    }
    .benefits-with-us p{
        font-size: 30px;
        text-align: center;
    }

    .benefits-with-us i{
        display: block;
        font-size: 90px;
        margin: 0 auto 1rem;
        transition: 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    }

    .benefits-with-us i:hover {
        transform: scale(1.2);
    }

    .mobile-logo {
        display: none;
    }
    .why-us, .perfect-for, .service-wrapper{
        background-color: white;
        border-radius: 0.7rem;
    }
    
    .service-intro {
        padding-top: 12rem;
    }
    .perfect-card {
        list-style: none;
        background-color: #9cd7ff; /* soft highlight color */
        border-radius: 0.5rem;
        padding: 1rem;
        text-align: center;
        margin: 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }
    
    .landing-page, .why-us, .perfect-for, .service-wrapper{
        display:block;
        margin: 2rem;
        padding: 3rem;
        padding-top: 0.6rem;
    }
    
    .service-wrapper {
        display:flex;
        gap: 1rem;
        align-items: center;
        padding-top: 3rem;
    }

    .service-wrapper img {
        border-radius: 1rem;
    }

    .perfect-for h2 {
        font-size: 35px;
        padding-bottom: 1rem;
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

    /* Table view */
    @media (max-width: 768px) {
        #benefits-header {
        font-weight: 800;
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
    }
        
    .benefits-with-us p{
        font-size: 20px;
        text-align: center;
    }

    .benefits-with-us i{
        display: block;
        font-size: 60px;
        margin: 0 auto 1rem;
    }

    .mobile-logo {
        width: 150;
        height: 150;
    }

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

    .landing-page, .why-us, .perfect-for, .service-wrapper{
        display:block;
        margin: 0.0rem;
        margin-top: 1rem;
        padding: 3rem;
        padding-top: 0.6rem;
    }

    }

    /* Mobile View */
    @media (max-width:480px) {

    .mobile-logo {
        margin-left: 30%;
        margin-bottom: 4rem;
        display: flex;
        justify-content: center; /* horizontal centering */
        align-items: center;    /* vertical centering if needed */
        border-radius: 1rem;
        box-shadow: 0px 2px 4px rgba(15,15,39);
    }

    .landing-page, .why-us, .perfect-for, .service-wrapper{
        list-style: none;
        display:block;
        margin: 0.0rem;
        margin-top: 1rem;
        padding: 2rem;
        padding-top: 0.9rem;
        padding-bottom: 3rem;
    }

    .perfect-for {
        background-color: white;
        border-radius: 0.7rem;
        padding: 2rem;
        text-align: center;
    }

    .perfect-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .perfect-card {
        list-style: none;
        background-color: #9cd7ff; /* soft highlight color */
        border-radius: 0.5rem;
        padding: 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }
    
    .perfect-card:hover {
        transform: translateY(-5px);
    }
    
    .perfect-card p {
        font-weight: 600;
        margin: 0;
    }

    .service-wrapper h2, .service-wrapper p{
        text-align: center;
        padding-bottom: 2rem;
        font-weight: 900;
    }

    .shipping {
        padding-left: 0px;
    }
}
</style>
