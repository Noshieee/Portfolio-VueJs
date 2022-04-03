<template>
<section id="Home">
    <div class="Home">
        <h1>Hi I am Enosh Elliott</h1>
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
    border: solid 2px rgb(0, 0, 0);
    margin-top: 20vh;
    padding: 10px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
}
.Home:hover{
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 5px 15px rgb(2, 223, 193);
    border: solid 2px rgb(255, 255, 255);
    color: black;
}
.Home p{
    font-size: 150%;
}
</style>