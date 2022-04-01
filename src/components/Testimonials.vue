<template>
<section id="Testimonials">
    <h1>Testimonials</h1>
    <div class="container pt-5">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="our-team">
                <div class="team">
                    <div class="pic">
                        <img src="images/img-1.jpg">
                        <ul class="social-links">
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="team-info">
                    <h3 class="title">Williamson</h3>
                    <span class="post">web developer</span>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum id enim sit.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
</template>

<script>
export default {
  name: 'Testimonials',
  components: {
  }
}
</script>

<style>

.our-team .team{
    position: relative;
    padding: 10px 0 10px 20px;
}
.our-team .team:before{
    content: "";
    width: 40px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #011627;
}
.our-team .pic{
    position: relative;
    overflow: hidden;
}
.our-team .pic:after{
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s ease 0s;
}
.our-team:hover .pic:after{
    opacity: 1;
}
.our-team .pic img{
    width: 100%;
    height: auto;
}
.our-team .social-links{
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    position: absolute;
    bottom: -40%;
    left: 0;
    text-align: center;
    z-index: 1;
    transition: all 0.5s ease 0s;
}
.our-team:hover .social-links{
    bottom: 20px;
}
.our-team .social-links li{
    display: inline-block;
    margin-right: 5px;
}
.our-team .social-links li a{
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    border: 1px solid #fdfffc;
    font-size: 18px;
    color: #fdfffc;
    transition: all 0.5s ease 0s;
}
.our-team .social-links li a:hover{
    background: #2ec4b6;
    border: 1px solid #2ec4b6;
}
.our-team .team-info{
    padding: 20px;
    background: #2ec4b6;
    color: #011627;
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.5s ease 0s;
}
.our-team .team-info:before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    background: #011627;
    z-index: -1;
    transition: all 0.5s ease 0s;
}
.our-team:hover .team-info:before{
    left: 0;
}
.our-team .title{
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 5px;
    text-transform: uppercase;
    transition: all 0.5s ease 0s;
}
.our-team:hover .title{
    color: #2ec4b6;
}
.our-team .post{
    display: block;
    font-size: 13px;
    font-weight: 700;
    color: #e71d36;
    text-transform: uppercase;
    margin-bottom: 12px;
}
.our-team:hover .team-info,
.our-team:hover .post{
    color: #fdfffc;
}
.our-team .description{
    font-size: 14px;
    line-height: 22px;
}
@media screen and (max-width: 990px){
    .our-team{ margin-bottom: 20px; }
}

</style>