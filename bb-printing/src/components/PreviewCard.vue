<script setup>
    defineProps({
        /*Display data for new card entries */
        title: String,
        desc: String,
        image: String,
        itemName: String,
        price: Number
    })
</script>

<template>
    <div class="item-card">
        <img :src="image" alt="Item image" class="item-card__image"/>
        <div class="item-card__info">
            <h2 class="item-card__title">{{ title }}</h2>
            <p class="item-card___desc">{{ desc }}</p>
            <p class="item-card__price">RM {{ price.toFixed(2) }}</p>
        </div>
    </div>
</template>

<style scoped>
    .item-card__info {
        flex-direction: column;
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 500;
    }
    .item-card {
        display: inline-block;
        background-color: antiquewhite;
        border-radius: 0.5rem;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
        margin: 0.8rem;
        padding: 0.5rem;
        overflow: hidden;
        width: 250px;
        height: 350px;
        transition: all 2.3s cubic-bezier(0.075, 0.82, 0.165, 1); /*Defines a default transition for your class*/
    }

    .item-card img {
        height: 60%;
        width: 100%;

    }

    .item-card:hover{
        transform: scale(1.05);
    }

    @media (max-width:768px) {
        .item-card {
            font-size: 12px;
             width: 200px;
            height: 300px;
        }
    }
</style>