<template>
<section id="timeline">
     <h1>Education/Work experience</h1>
   <div class="timeline-container">
      <div class="timeline-line"></div>
      <div class="timeline-item item1" data-aos="fade-left">
        <h3>Job 1- Job Title</h3>
        <h4>2019-2021</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          voluptate autem numquam a saepe! Maiores voluptatum voluptatibus
          exercitationem omnis delectus nam repudiandae, consectetur vitae
          voluptate hic quis mollitia atque quam eveniet deserunt temporibus
          libero eum architecto nisi ipsam iste nemo. Autem tempore, illum
          aliquid ullam unde ipsa in a possimus?
        </p>
      </div>
      <div class="timeline-item item2" data-aos="fade-right">
        <h3>Job 1- Job Title</h3>
        <h4>2019-2021</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          exercitationem, doloremque saepe laudantium numquam reprehenderit
          corrupti nam non suscipit minus, fugiat est, tenetur quo nesciunt.
          Optio illum molestiae similique natus. Veritatis deleniti harum velit
          corrupti inventore exercitationem quos minus adipisci repellat debitis
          architecto voluptatum aspernatur, at possimus veniam, ipsa eos!
        </p>
      </div>
      <div class="timeline-item item3" data-aos="fade-left">
        <h3>Job 1- Job Title</h3>
        <h4>2019-2021</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          exercitationem, doloremque saepe laudantium numquam reprehenderit
          corrupti nam non suscipit minus, fugiat est, tenetur quo nesciunt.
          Optio illum molestiae similique natus. Veritatis deleniti harum velit
          corrupti inventore exercitationem quos minus adipisci repellat debitis
          architecto voluptatum aspernatur, at possimus veniam, ipsa eos!
        </p>
      </div>
      <div class="timeline-item item4" data-aos="fade-right">
        <h3>Job 1- Job Title</h3>
        <h4>2019-2021</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          tempora reiciendis laborum, at beatae distinctio consequuntur quaerat
          ipsam magni obcaecati quisquam, nesciunt labore commodi? Amet optio
          perferendis recusandae labore consectetur illo adipisci ipsam
          perspiciatis incidunt dolorem minus ad possimus, ratione
          exercitationem et deserunt nisi magnam asperiores. Veniam eos suscipit
          rerum.
        </p>
      </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Timeline',
  components: {
  }, 
  methods() {
     AOS.init({
        offset: 400,
        duration: 500,
     })
  }
}
</script>

<style scoped>
h1{
    padding-bottom: 20px;
}

body {
  display: grid;
}

.timeline-container {
  /* padding-left: 5%;
  padding-right: 5%; */
  display: grid;
  grid-template-columns: 1fr 10% 1fr;
  grid-template-rows: repeat(4, 1fr);
}

.text-wrapper {
  padding: 10px 40px;
  position: relative;
  background: rgba(64, 63, 63, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 50%;
  box-sizing: border-box;
  margin: 100px 0;
  justify-content: space-evenly;
}

.left {
  left: 0;
}

.right {
  left: 50%;
}

.text {
  padding: 15px 15px 17px;
  border-radius: 4px;
}
.timeline-line {
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 5;
  justify-self: center;
  padding: 5px;
  background: rgba(64, 63, 63, 0.35);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.item1 {
  grid-column-start: 3;
  grid-row-start: 1;
}
.item2 {
  grid-column-start: 1;
  grid-row-start: 2;
}

.item3 {
  grid-column-start: 3;
  grid-row-start: 3;
}

.item4 {
  grid-column-start: 1;
  grid-row-start: 4;
}

.timeline-item {
  padding: 10px;
  align-self: center;
  justify-self: center;
  margin: 10px;
  background: rgba(64, 63, 63, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>