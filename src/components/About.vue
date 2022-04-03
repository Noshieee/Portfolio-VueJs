<template>
    <section id="About">
    <div class="About">
        <h1>About Me</h1>
        <div class="about-box">
            <div class="about-box-left">
                <img src="https://i.postimg.cc/C55wj67F/closeup-bg.jpg" alt="">
            </div>
            <div class="about-box-right">
                <p align="justify">I am servant-hearted, so I'm always looking to help those in need. I'm a people's person and also love working with children. When I set my mind to something, I never give up on it, regardless of how challenging it is. I have a bubbly personality and can often bring life and positive energy to the environments I'm placed in. </p>
                <p align="justify">I was always inquisitive as a child, so naturally I wanted to know how everything works, and that's where my interest in building websites and seeing how every function works visually and practically grew from. I also know that technology is the future, as it will always be the most dominant industry, as almost everything in this world revolves around technology.
                </p>
            </div>
        </div>
        <!-- <div class="education-bio">
            <div class="education">

            </div>
            <div class="bio">
                <ul>
                    <li>Full Name: Enosh Elliott</li>
                    <li>Age: 20</li>
                    <li>Email: enoshelliott14@gmail.com</li>
                    <li></li>
                </ul>
            </div>
        </div> -->
    </div>
    </section>
</template>

<script>
export default {
  name: 'About',
  components: {

  }
}
</script>

<style scoped>
#About {
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://i.postimg.cc/Xqj4zddk/work-bg-joke.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  /* color: white; */
  background-position-y: bottom;
   
}

.About {
    border: 1px solid black;
    border-radius: 25px;
    padding: 20px 20px;
    background-color: rgba(255, 255, 255, 0.75);
}

.About h1{
    padding-bottom: 20px;
    font-weight: 600;
}

.about-box{
    display: flex;
    flex-wrap: wrap ;
}

.about-box-left{
    width: 50%;
    text-align: center;
}

.about-box-left img{
    width: 500px;
    height: 480px;
    clip-path: polygon(0 2%, 48% 33%, 3% 0, 31% 0, 58% 26%, 35% 0, 67% 0, 66% 23%, 71% 0, 97% 0, 76% 24%, 100% 0, 100% 20%, 77% 33%, 100% 23%, 100% 53%, 75% 48%, 100% 54%, 100% 77%, 71% 56%, 100% 80%, 100% 100%, 68% 64%, 97% 100%, 69% 100%, 64% 66%, 66% 100%, 42% 100%, 51% 74%, 39% 100%, 10% 100%, 44% 67%, 5% 100%, 0 100%, 0 73%, 42% 55%, 0 70%, 0 33%, 43% 40%, 0 31%);
    /* object-position: 0px 10px; */
    border-radius: 360px;
}

.about-box-right {
    width: 50%;
    text-align: left;
    font-size: 25px;
    font-weight: 600;
}
</style>