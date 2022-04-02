<template>
<div>
   <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid ms-5 me-5">
      <a class="navbar-brand fw-bold" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#Home">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#About">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#Projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link" href="#Testimonials">Testimonials</a></li>
            <li class="nav-item"><a class="nav-link" href="#Contact">Contact</a></li>
        </ul>
      </div>
    </div>
 </nav>
  <Home/>
  <About/>
  <Timeline/>
  <Skills/>
  <Projects/>
  <Testimonials/>
  <Contact/>
  <footer>
    <p class="mb-0">copyright created by Enosh Elliott</p>
  </footer>
  
</div>

</template>

<script>
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Timeline from '@/components/Timeline.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Testimonials from '@/components/Testimonials.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'App',
  components: {
    Home, About, Timeline, Skills, Projects, Testimonials, Contact
  }
}
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Comic Neue', cursive;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

section {
  padding: 5%;
}

.navbar-nav{
    font-size: 27px;
    padding-right: 5%;
}

 /* footer */
 footer {
    text-align: center;
    font-size: 25px;
    color:rgb(255, 255, 255);
    font-size: large;
    background-color: rgba(0, 0, 0,1);
}
</style>
