<script setup>
    import infoFooter from './components/Footer.vue'
    const phone = '60108865575'; /* Owner Contact */
    const msg = encodeURIComponent('Hello, I would like to inquire about your T-shirts.');
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${msg}`; // Whatsapp API call
</script>

<template>
    <!--Main content-->
    <h1>Get In Touch!</h1>
    <div class="contact-wrapper">
        <!--Whatsapp-->
        <div class="contact-card">
            <div class="whatsapp">
                <h3>whatsapp</h3>
                 <a :href="whatsappLink" target="_blank">Contact Us on WhatsApp!</a>
            </div>
        </div>
        <!--Email-->
        <div class="contact-card">
            <div class="facebook">
                <h3>FACEBOOK</h3>
                <a href="https://www.facebook.com/bbwearprinting/photos?locale=ms_MY">Check out our facebook</a>

            </div>
        </div>
    </div>
    <infoFooter />
</template>

<style scoped>
    h1 {
        padding-top: 10rem;
        font-weight: 900;
    }

    .contact-wrapper {
        text-align: center;
        display: flex;
        gap: 2rem;
    }

    .contact-card {
        margin: 4rem;
        padding: 8rem;
        border-radius: 3rem;
        background-color: white;
        transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1);
        box-shadow: 0px 2px 4px rgba(15,15,39);
    }

    .contact-card:hover {
        transform: scale(1.05);
    }

    @media (max-width:480px) {
    h3 {
        font-size: 20px;
        padding-bottom: 1rem;
    }

    .contact-wrapper {
        text-align: center;
        display: flex;
        gap: 0.3rem;
    }

    .contact-card {
        margin: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color: white;
    }
    }
</style>