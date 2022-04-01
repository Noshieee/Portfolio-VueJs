<template>
<section id="Skills">
    <div class="row text-center">
    <h1 class="fw-bold mb-5">Programming Skills</h1><br>
    <div class="col-md-12 col-sm-12">
        <div class="programming-area">
            <div class="row">
                <div id="icon-container" class="col-md-6 col-sm-12 col-xs-12">
                    <div class="single-program mt-3">
                      <h3>HTML</h3>
                      <div class="level"><span><i class="fas fa-code"></i></span></div> <!--edit here-->
                    </div>
                </div>
                <div id="icon-container" class="col-md-6 col-sm-12 col-xs-12">
                  <div class="single-program mt-3">
                    <h3>CSS</h3>
                    <div class="level"><span><i class="fab fa-css3-alt"></i></span></div> <!--edit here-->
                  </div>
                </div>
                <div id="icon-container" class="col-md-6 col-sm-12 col-xs-12">
                    <div class="single-program mt-3">
                      <h3>Bootstrap</h3> 
                      <div class="level"><span><i class="fab fa-bootstrap"></i></span></div> <!--edit here-->
                    </div>
                  </div>
                  <div id="icon-container" class="col-md-6 col-sm-12 col-xs-12">
                    <div class="single-program mt-3">
                      <h3>Javascript</h3>
                      <div class="level "><span><i class="fab fa-js"></i></span></div> <!--edit here-->
                    </div>
                </div>
                <div id="icon-container" class="col-md-6 col-sm-12 col-xs-12">
                    <div class="single-program mt-3">
                      <h3>VueJS</h3>
                      <div class="level "><span><i class="fab fa-vuejs"></i></span></div> <!--edit here-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Skills',
  components: {

  }
}
</script>

<style>
#Skills{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://i.postimg.cc/8cmt2cJm/Skills.png);
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    background-position-y: bottom;
}
#icon-container{
    border: 4px solid rgb(255, 255, 255);
    width: 10%;
    height: 10%;
    padding: 10px 0 20px;
    transition: 0.3s ease-in;
    text-align: center;
}

#icon-container:hover{
    color:rgb(0, 0, 0);
    background:rgb(255, 255, 255);
    box-shadow: 0px 5px 15px rgb(2, 223, 193);
}

.row{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0px 20px;
  margin-top: -10px;
}

i{
  font-size: 300%;
}
</style>