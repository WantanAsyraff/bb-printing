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
            <div class="information">
                <h4>Information</h4>
                <li><router-link to="/"><i class="fa fa-home" aria-hidden="true"></i>home</router-link></li>
                <li><router-link to="/catalogue"><i class="fa fa-archive" aria-hidden="true"></i>catalogue</router-link></li>
                <li><router-link to="/gallery"><i class="fa fa-camera" aria-hidden="true"></i>gallery</router-link></li>
                <li><router-link to="/contact"><i class="fa fa-commenting" aria-hidden="true"></i>contact</router-link></li>   
            </div>
            <div class="working-hours">
                <h4>Location</h4>
                <p>No 1 Jalan Bandong, 96000, Sibu, Sarawak</p>
                <br>
                <h4>Working Hours</h4>
                <p>8:00am-9:00pm</p>
                
            </div>
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
        flex-direction: row;
        align-items: flex-start; /* aligns the tops nicely */
        text-align: center;
    }

    .information li {
    list-style: none;
    padding-top: 0.5rem;
    }

    .direct-contacts,
    .other-contacts, .information, .working-hours {
        flex: 1; /* makes them take equal space */
    }

    @media (max-width:480px){
        .contact-us-today p, .contact-us-today h4, .contact-us-today li{
            font-size: 10px;
        }
    }
</style>
