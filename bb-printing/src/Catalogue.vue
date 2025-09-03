<script setup>
    import PreviewCard from './components/PreviewCard.vue'
</script>

<template>
  <div class="catalog-section">
    <h1>STYLES WE OFFER</h1>
      <div class="catalog-wrapper">
        <PreviewCard
        title="Round Neck"
        image="https://m.media-amazon.com/images/I/71BYZzlFEIL._UY1100_.jpg"
        desc="I'm a description"
        :price="40.0"
      />
      <PreviewCard
        title="Polo"
        image="https://contents.mediadecathlon.com/p2666529/k$2126a01f9dba5b96d66177a9b2a2ade7/men-s-short-sleeved-golf-polo-shirt-ww500-green-inesis-8785636.jpg"
        desc="I'm a description description description   "
        :price="40.0"
      />
      <PreviewCard
        title="Muslimah"
        image="https://www.aqeela-muslimah.com/wp-content/uploads/2022/03/d426e761eb28960f7020357956bed95d.jpeg"
        desc="I'm a description. I'm a description I'm a description I'm a description I'm a description I'm a description I'm a description  "
        :price="40.0"
      />

      <PreviewCard
        title="Unisex"
        image="https://i.pinimg.com/736x/ae/02/cd/ae02cdf1dbb0bc80f81f95ef174d0bd4.jpg"
        desc="I'm a description I'm a description I'm a description I'm a description I'm a description "
        :price="40.0"
      />
      <PreviewCard
        title="Lorem Ipsum"
        image="https://i.pinimg.com/736x/ae/02/cd/ae02cdf1dbb0bc80f81f95ef174d0bd4.jpg"
        desc="I'm a description description description   "
        :price="40.0"
      />
  </div>
  </div>
</template>

<style scoped>
  .catalog-section {
      padding: 1rem;
      padding-top: 10rem;
      margin: 1rem;
    }
    .catalog-section h1{
      font-size: 36px;
      padding-bottom: 1rem;
    }
    .catalog-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.2rem;
      background-color: white;
      border-radius: 0.7rem;
      padding: 3.5rem;
    }
</style>