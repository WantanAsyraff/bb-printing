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
        :moq="10.0"
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