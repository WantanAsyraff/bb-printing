<script setup>
    import infoFooter from './components/Footer.vue'
</script>

<template>
    <!--Main content-->
    <h1>Get In Touch!</h1>
    <div class="contact-wrapper">
        <div class="contact-card">
            <div class="whatsapp">
                <h3>whatsapp</h3>

            </div>
            <div class="email">
                <h3>email</h3>
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
        display: flex;
    }
</style>