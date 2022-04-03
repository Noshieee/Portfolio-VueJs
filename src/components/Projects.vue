<template>
<section id="projects">
  <h1 class="section-heading">Projects</h1><br>
    <div class="row">
      <div v-for = "project in projects" :key="project.id" class="container">
        <img :src="project.image" style="width:100%" height="300">
        <h1>
          {{ project.title }}            
        </h1>
        <p> {{ project.description }}</p>
        <a class="btn" id="project-links" target="_blank" :href="project.repo">Repository link</a>
        <a v-if="project.netlify !== ''" class="btn" :class="{ active: isActive }" id="project-links" target="_blank" :href="project.netlify">Netlify link</a>
      </div>
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
  // mounted() {
  //   fetch('http://localhost:3000/Projects')
  //   .then (res => res.json())
  //   .then (data => this.projects = data)
  //   .catch (err => console.log(err.message))
  // },
  name: 'Projects',
  components: {
  },
}
}
}
</script>

<style scoped>

#project-links{
  background-color: cyan;
  padding: 10px 20px;
  margin-bottom: 12px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 25px;
}

#project-links:hover{
  background-color:black;
  box-shadow: 2px 2px 20px cyan;
  color: cyan;
  /* padding: 10px 20px;
  margin: 10px; */
}
.row {
  gap: 50px 30px;
}

.container{
  width: 46%;
  border-radius: 25px;
  border: 1px solid black;
  background-color: black;
  background-image: url(https://i.postimg.cc/KcCV1Z3Z/comic-bg-main.jpg);
}

.container img{
  margin-top: 12px;
  border-radius: 25px;
  /* width: 100%; */
}

</style>