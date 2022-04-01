<template>
<section id="projects">
  <h1 class="section-heading">Projects</h1><br>
    <!-- <div class="row">
      <div v-for = "project in projects" :key="project.id" class="col-6 col-md-6 col-sm-12 border border-dark">
        <img :src="project.image" style="width:100%" height="300">
        <h1>
          {{ project.title }}            
        </h1>
        <p> {{ project.description }}</p>
        <a class="btn" id="project-links" target="_blank" :href="project.repo">Repository link</a>
        <a v-if="project.netlify !== ''" class="btn" :class="{ active: isActive }" id="project-links" target="_blank" :href="project.netlify">Netlify link</a>
      </div>
    </div>
     -->
                 <!-- Carousel -->
            <div id="carousel">
              <!-- Carousel Container -->
              <div id="carousel-container">
                <div v-for = "project in projects" :key="project.id" :class= "[project.modalActive ? 'carousel-slide active' : 'carousel-slide']">
                  <div class="carousel-content">
                    <h3>{{project.title}}</h3>
                    <h4>Made with: {{project.program}}</h4>
                    <p>{{project.desc}}</p>
                    <div class="carousel-btns">
                      <a v-if="project.netlify !== ''" class="btn" id="project-links" target="_blank" :href="project.netlify">Live</a>
                      <a class="btn" id="project-links" target="_blank" :href="project.repo">Repo Link</a>
                    </div>
                  </div>
                  <img class="carousel-img" :src="project.image" :alt="project.image_alt"/>
                </div>
              </div>
              <!-- Carousel Bullets -->
              <div id="carousel-bullets">
                <button v-for = "project in projects" :key="project.id" :class = "carousel-bullet" @click = "bulletSlider(project.id)">
                  <i :class="[project.modalActive ? 'fas fa-circle active' : 'fas fa-circle']"></i>
                </button>
              </div>
              <!-- Carousel Buttons -->
              <button id="carousel-left" @click="changeSlide(-1)">
                <i class="fas fa-angle-left"></i>
              </button>
              <button id="carousel-right" @click="changeSlide(1)">
                <i class="fas fa-angle-right"></i>
              </button>
            </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      projects:[
    {
        "title": "Calculator",
        "image": "https://i.postimg.cc/D0C6G2TL/Screenshot-from-2022-03-30-08-31-00.png",
        "program": "Javascript",
        "id": 1,
        "repo": "https://github.com/Noshieee/Calculator",
        "netlify": "https://my-calculator-noshieee.netlify.app/",
        "description": "lorem"    },
    {
        "title": "Point of Sale",
        "image": "https://i.postimg.cc/y85VP9Pr/Screenshot-from-2022-03-30-08-29-28.png",
        "program": "Javascript", 
        "id": 2,
        "repo": "https://github.com/Noshieee/POS-JavaScript-project",
        "netlify": "https://kicking-n-screaming-36674.netlify.app/",
        "description": "lorem"
    },
    {
        "title": "Reaction Test",
        "image": "https://i.postimg.cc/htCnGm6t/Screenshot-from-2022-03-30-08-31-16.png",
        "program": "Vue.JS", 
        "id": 3,
        "repo": "https://github.com/Noshieee/Reaction-test-main_VueJS",
        "netlify": "https://noshieees-reaction-timer-vue.netlify.app/",
        "description": "lorem"    
    },
    {
        "title": "Kanye Quote Fetch api",
        "image": "https://i.postimg.cc/5tqtpyRc/Screenshot-from-2022-03-30-08-32-23.png",
        "program": "Codepen", 
        "id": 4,
        "repo": "https://codepen.io/Noshieee/pen/LYzmmbd?editors=0010",
        "netlify": "",
        "description": "lorem"
    }
  ],
  mounted() {
    fetch('http://localhost:3000/Projects')
    .then (res => res.json())
    .then (data => this.projects = data)
    .catch (err => console.log(err.message))
  },
  name: 'Projects',
  components: {
  }
}
}
}
</script>

<style scoped>
#project-links{
  background-color: cyan;
  padding: 10px 20px;
  margin: 10px 10px 40px;
  font-size: 25px;
}

#project-links:hover{
  background-color:black;
  box-shadow: 2px 2px 20px cyan;
  color: cyan;
  /* padding: 10px 20px;
  margin: 10px; */
}
/* .row {
  gap: 0px 0px;
}

.border{
  width: 50%;
} */
/* carousel */
#projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  object-fit: cover;
}
/* Carousel Element */
#carousel {
  display: grid;
  grid-template-columns: 30px 70vw 30px;
  grid-template-rows: 15fr 1fr;
  grid-template-areas:
    "leftCaret content rightCaret"
    "......... bullets ..........";
  justify-items: center;
  align-items: center;
  text-align: center;
}
/* Carousel Carets */
#carousel #carousel-left,
#carousel #carousel-right {
  background: none;
  border: none;
  outline: none;
  font-size: 4em;
  color: grey;
  transition: all 0.2s linear;
}
#carousel #carousel-left:hover,
#carousel #carousel-right:hover {
  color: var(--blueGray1);
}
/* Carousel Grid Item Positioning */
#carousel #carousel-left {
  grid-area: leftCaret;
}
#carousel #carousel-right {
  grid-area: rightCaret;
}
#carousel #carousel-container {
  grid-area: content;
  /* position: relative; */
  width: 100%;
  height: 100%;
  padding: 2%;
}
#carousel #carousel-bullets {
  grid-area: bullets;
}
/* Carousel Bullet Styles */
#carousel-bullets .carousel-bullet {
  background: none;
  border: none;
  outline: none;
  color: inherit;
  padding: 2px;
  cursor: pointer;
}
#carousel #carousel-bullets .fas.fa-circle {
  transition: all 0.2s linear;
}
#carousel #carousel-bullets .fas.fa-circle.active {
  color: grey;
}
/* Carousel Slide Styles */
.carousel-slide {
  opacity: 0;
  z-index: -2;
  transition: opacity 0.4s linear;
  position: fixed;
  top: -100%;
  padding: 15%;
}
.carousel-slide.active {
  opacity: 1;
  z-index: 1;
  position: relative;
  top: 0;
  height: 100%;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  /* max-height: 80vh; */
}

.carousel-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.4;
}

.carousel-content {
  height: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
}

.carousel-content h3 {
  text-transform: uppercase;
  font-size: 1.5em;
}

.carousel-content a {
  text-decoration: none;
}

.carousel-btns {
  width: 100%;
}

@media screen and (max-width: 720px) {
  #carousel {
    grid-template-columns: 1fr;
    grid-template-rows: 90% 10%;
    grid-template-areas:
      "content"
      "carets";
  }

  #carousel #carousel-left {
    grid-area: carets;
    justify-self: start;
  }
  #carousel #carousel-right {
    grid-area: carets;
    justify-self: end;
  }
  #carousel #carousel-bullets {
    grid-area: carets;
    /* display: none; */
  }
  .carousel-slide {
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 30px;
  }
  .carousel-slide.active {
    height: fit-content;
  }
  .carousel-img {
    position: relative;
    top: unset;
    right: unset;
    bottom: unset;
    left: unset;
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
    opacity: 1;
  }

  .carousel-content {
    height: fit-content;
    align-items: center;
    text-align: center;
  }
}
</style>