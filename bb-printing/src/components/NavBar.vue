<script setup></script>

<template>
    <header>
        <nav class="nav-bar">
            <ul>
              <li><router-link to="/">home</router-link></li>
              <li><router-link to="/gallery">gallery</router-link></li>
              <li><router-link to="/catalogue">catalogue</router-link></li>
              <li><router-link to="/contact">contact</router-link></li>    
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    .nav-bar {
        display: flex;
        background-color: #f2f2f2;
        justify-content: center;
        width: 100%;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
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
        background-color: #f2f2f2;
        margin: 0 0.5rem;
        padding: 0px;
    }
    
    .nav-bar ul li a{
        display: inline-block;
        font-family: 'Arimo', sans-serif;
        color: black;
        text-transform: capitalize;
        text-decoration: none;
        line-height: 40px;
        padding: 1rem 3rem;
        transition: transform 0.3s ease; /*Always remember to add transition if you're using transform */
        transform-origin: center;
    }

    .nav-bar ul li a:hover{
        transform:scale( 1.15);
    }

    @media (max-width:768px) {
        .nav-bar ul li a {
            margin: 1rem;
            padding: 0.2rem;
            font-size: 16px;
            font-weight: 800;
        }
    }
</style>
