<script setup></script>

<template>
    <header>
        <nav class="nav-bar">
            <img src="@/assets/imgs/bb-printing.jpg" alt="BB Printing Logo" width="150" height="150" />
            <ul>
                <li><router-link to="/"><i class="fa fa-home" aria-hidden="true"></i>home</router-link></li>
                <li><router-link to="/catalogue"><i class="fa fa-archive" aria-hidden="true"></i>catalogue</router-link></li>
                <li><router-link to="/gallery"><i class="fa fa-camera" aria-hidden="true"></i>gallery</router-link></li>
                <li><router-link to="/contact"><i class="fa fa-commenting" aria-hidden="true"></i>contact</router-link></li>    
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    .nav-bar {
        display: flex;
        background-color: white;
        justify-content: center;
        width: 100%;
        box-shadow: 0px 2px 4px rgba(15,15,39);
    }

    .nav-bar img{
        padding-right: 7rem;
    }

    .nav-bar ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        margin: 0px;
        padding: 0px;
        align-items: center;
    }
    
    .nav-bar ul li {
        margin: 0 0.5rem;
        padding: 0px;
    }
    
    
    .nav-bar ul li a{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 900;
        color: #080f55  ;
        text-transform:uppercase;
        text-decoration: none;
        line-height: 40px;
        padding: 1rem 3rem;
        transition: transform 0.3s ease; /*Always remember to add transition if you're using transform */
        transform-origin: center;
    }

    .nav-bar ul li a:hover{
        transform:scale( 1.15);
    }

    @media (max-width:480px) {
        .nav-bar ul {
            margin-left: 1rem;
            margin-right: 1rem;
        }

        .nav-bar ul li a {
            font-size: 8px;
        }
        .nav-bar img {
            display: none;
        }
    }

    @media (max-width:768px) {
        .nav-bar ul {
            margin-left: 2rem;
            margin-right: 2rem;
        }
        .nav-bar ul li a {
            padding: 0px;
            margin-top: 1rem;
            margin-bottom: 1rem;
            padding-left: 0px;
            font-size: 14px;
            font-weight: 600;
        }

        .nav-bar img {
            width: 100px;
            height: 100px;
            padding-left: 1.5rem;
            padding-right: 0rem;
        }
    }
</style>
