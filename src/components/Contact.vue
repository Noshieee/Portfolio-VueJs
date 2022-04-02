<template>
<section id="Contact">
    <h1>Contact Me!</h1>
<div class="contact-box">
    <div class="contact-box-left">
        <form @submit.prevent="handleSubmit">
           
            <input type="email" placeholder="enter email..." required v-model="email">
            
            <input type="text" placeholder="enter name..." required v-model="name">
            
            <textarea name="message" placeholder="message?..." required v-model="message"></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>
    <div class="contact-box-right">
        <div class="socials">
            <p>
            Github
            </p>
            <p>
            Codepen
            </p>
            <p>
            Linkdin
            </p>
        </div>
    </div>
</div>
</section>
</template>

<script>
export default {
    name: 'Contact' ,
    components: {
    },
    data() {
        return{
            name: "",
            email: "",
            message: "",
        }
    },
    methods: {
        handleSubmit() {
            console.log("Form has been submitted")
            console.log(this.name)
            console.log(this.email)
            console.log(this.message);

            fetch('http://localhost:2005/contact', {
                method: 'POST',
                body: JSON.stringify({
                  name: this.name,
                  email: this.email,
                  message: this.message,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((json) => console.log(json))
                .catch((e) => alert({ msg: 'please fill in everything' }));
                
        }
    },
}
</script>

<style scoped>
#contact{
    height: 100vh;
}
.contact-box{
    display: flex;
    flex-wrap: wrap;
}   
.contact-box-left {
    width: 60%;
    padding: 5px;
    border: 1px solid black;
    border-radius: 25px;
    text-align: center;
}
.contact-box-right {
    width: 40%;
    border: 1px solid black;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.socials {
    display: flex;
    flex-direction: column;

}

form {
    font-size: 25px;
    max-width: 420px;
    margin: 30px auto;
    text-align: center;
    padding: 10px;
    border-radius: 25px;
}

input {
    border:1px solid black;
    border-radius: 50px;
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    color: #555;
    margin: 25px 0;
}
textarea {
    border:1px solid black;
    border-radius: 50px;
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    color: #555;
    margin: 25px 0;
}

form button {
   border-radius: 30px;
   padding: 5px
}

/* .contact-box{
    width: 500px;
    box-shadow: 0 0 20px 0 rgb(10, 253, 213);
    position: relative;
    background-image: url();
}

form{
    margin:35px;
}

.input-field{
    width: 400px;
    height: 40px;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border:1px solid #777;
    border-radius: 14px;
    outline: none;
    background-color:rgb(255, 255, 255);
}

.textarea-field{
    height:150px;
    padding-top: 10px;
}

.btn{
    border-radius: 20px;
    color: rgb(8, 255, 234);
    margin-top: 18px;
    padding: 10px;
    background-color: rgb(5, 5, 5);
    font-size: 12px;
    border: none;
    cursor: pointer;
    margin-bottom: 18px;
}

.btn:hover{
    color: rgb(12, 12, 12);
    background-color: rgb(7, 243, 223);
    transition: ease-in;
    transition-delay: 25ms;
} */
</style>