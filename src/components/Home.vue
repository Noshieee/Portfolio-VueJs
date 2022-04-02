<template>
<section id="Home">
    <div class="Home">
        <h1>Hi I am Enosh</h1>
        <p>an Aspiring Fullstack Web Developer</p>
    </div>
</section>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
#Home {
    padding: 0;
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75)), url('https://i.postimg.cc/zfSVkWMp/stage-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.Home{
    border: solid 2px white;
}
.Home h1{
    color: antiquewhite;
}
.Home p{
    color: antiquewhite;
    font-size: 150%;
}
</style>