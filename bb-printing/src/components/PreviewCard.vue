<script setup>
    defineProps({
        /*Display data for new card entries */
        title: String,
        desc: String,
        image: String,
        itemName: String,
        price: Number,
        forwardMsg: String        
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

    .item-card__info .item-card___desc {
        font-size: 12px;
        text-align: center;
    }

    .item-card__info .item-card___price {
        font-weight: 700;
        margin: 0.5rem 0;
    }

    .item-card__info {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 500;
    }
    .item-card {
        display: inline-block;
        background-color: #847c9d;
        color: #080f55;
        border-radius: 0.5rem;
        box-shadow: 0px 2px 4px rgba(15,15,39);
        margin: 0.8rem;
        padding: 0.5rem;
        overflow: hidden;
        min-width: 250px;
        min-height: 400px;
        max-width: 250px;
        max-height: 400px;
        text-overflow: hidden;
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
            min-width: 200px;
            min-height: 300px;
            max-width: 200px;
            max-height: 500px ;
        }
    }
</style>