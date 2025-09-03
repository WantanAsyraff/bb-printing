<script setup></script>

<template>
    <footer>
        <section class="contact-us-today">
            <div class="direct-contacts">
                <div class="phone-num">
                    <h4>Contacts</h4>
                    <p>(Zx): +6010886 5575</p>
                    <p>(Liz): +6011001 8587</p>
                </div>
            </div>
            <!--Social Media-->
            <div class="other-contacts">
                <h4>Other Contacts</h4>
                <div class="email">
                    <p>Email: wanzx@gmail.com</p>
                </div>
                <div class="socials">
                    <p><a href="https://www.facebook.com/bbwearprinting/photos?locale=ms_MY">Facebook: Bumi Borneo T-Shirt Printing</a></p>
                </div>
            </div>
    </section>
    </footer>
</template>


<style scoped>
    p {
        font-size: 16px;
        font-weight: 400;
    }

    footer {
        display:block;
        background-color: white;
        padding: 2rem;
    }

    .contact-us-today {
    display: flex;
    flex-wrap: nowrap;
    gap: 40px; /* more space between the two sections */
    align-items: flex-start; /* aligns the tops nicely */
    }

    .direct-contacts,
    .other-contacts {
        flex: 1; /* makes them take equal space */
    }
</style>
