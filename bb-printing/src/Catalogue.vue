<script setup>
    import shirt from './components/PreviewCard.vue'
    import infoFooter from './components/Footer.vue'
    
</script>

<template>
  <div class="catalog-section">
    <h1>STYLES WE OFFER</h1>
      <div class="catalog-wrapper">

        <!--NECKLINE STYLES-->
        <h2>Neckline Styles</h2>
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Crew Neck"
          itemName="Crew-Neck"
          desc="Classic round neckline, the most common everyday t-shirt."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="V-Neck"
          itemName="V-Neck"
          desc="Neckline dips into a 'V' shape, giving a sharper, slimming look."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Scoop Neck"
          itemName="Scoop-Neck"
          desc="A wider, deeper round neckline for a softer style."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Henley"
          itemName="Henley"
          desc="A crew neck with a short button placket, casual yet stylish."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Polo"
          itemName="Polo"
          desc="Features a collar and buttoned placket, often seen as smart-casual."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Mock Neck"
          itemName="Mock-Neck"
          desc="Short, slightly raised collar similar to a turtleneck."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Muslimah"
          itemName="Muslimah"
          desc="Modest t-shirt with a longer cut and higher neckline."
          :moq=10
        />

        <!-- SLEEVE STYLES-->
         <h2>Sleeve Style</h2>
         <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Short Sleeve/ Standard"
          itemName="standard"
          desc="The default length, ending at mid-arm."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Long Sleeve Crew"
          itemName="Long-Sleeve"
          desc="Full-length sleeves for a casual, layered look."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Dolman Sleeve"
          itemName="Dolman-Sleeve"
          desc="Loose Sleeves cut into one piece with the body, roomy & comfy."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Raglan/ Baseball Tee"
          itemName="Raglan"
          desc="Sleeves extend in one piece to the collar, usually in contrast color."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Cap Sleeve"
          itemName="Cap-Sleeve"
          desc="Very short sleeves, just covering the shoulder."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Sleeveless/Tank Tee"
          itemName="Sleeveless"
          desc="No sleeves, popular for sports & summer wear."
          :moq=10
        />

        <!--FIT & LENGTH STYLES-->
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Unisex Round Neck"
          itemName="unisex-round"
          desc="Standard fit designed for both men & women."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Oversized Tee"
          itemName="Oversized-Tee"
          desc="Baggy, relaxed fit for streetwear vibes."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Fitted/Slim Fit Tee"
          itemName="fitted"
          desc="Tailored close to the body for a sleek silhouette."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Crop Top Tee"
          itemName="Crop-Top"
          desc="Shorter cut ending around the midriff, trendy & youthful."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Longline Tee"
          itemName="Longline-Tee"
          desc="Extended length that goes past the hips for a modern style."
          :moq=10
        />

        <!--FUNCTION AND FABRIC STYLES-->
        <h2>FUNCTION AND FABRIC STYLES</h2>
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Pocket Tee"
          itemName="Pocket-Tee"
          desc="Features a small chest pocket, often for accent branding."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Ringer Tee"
          itemName="Ringer-Tee"
          desc="Crew neck and sleeve bands in contrasting colors for a retro look."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Graphic Tee"
          itemName="Graphic-Tee"
          desc="Defined by bold prints, designs, or branding."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Tie-Dye Tee"
          itemName="Tie-Dye-Tee"
          desc="Colorful, swirled dye patterns, very casual and fun."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Tie-Dye Tee"
          itemName="Tie-Dye-Tee"
          desc="Colorful, swirled dye patterns, very casual and fun."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Athletic Tee"
          itemName="Athletic-Tee"
          desc="Made from moisture-wicking fabric for sports."
          :moq=10
        />
        <shirt 
          image="https://i.pinimg.com/736x/77/2b/18/772b18a3d27199d97aaeb0d74f51e554.jpg"
          title="Eco-Friendly Tee"
          itemName="Eco-Tee"
          desc="Sustainable materials like organic cotton, bamboo, or recycled polyester."
          :moq=10
        />
        
      </div>
  </div>
  <infoFooter />
</template>

<style scoped>
  .catalog-section {
      padding: 1rem;
      padding-top: 10rem;
      margin: 1rem;
    }
    .catalog-section h1{
      font-weight: 800;
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

    .catalog-wrapper h2 {
    width: 100%; /* takes the full row */
    text-align: center; /* centers text */
    margin: 2rem 0 1rem 0; /* spacing above and below */
}
</style>