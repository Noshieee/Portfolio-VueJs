<template>
<section id="Contact">
    <h1>Contact Me!</h1>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <label>Email:</label>
            <input type="email" required v-model="email">
            <label>Name:</label>
            <input type="text" required v-model="name">
            <label>Message:</label>
            <textarea name="message" required v-model="message"></textarea>
            <button type="submit">Send Message</button>
        </form>
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
.container {
    margin: 0 auto;
    width: 50%;
    padding: 10px;
    border: 1px solid black;
    border-radius: 30px;
}

form {
    font-size: 30px;
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 50px;
    border-radius: 10px;
}
label {
    color: #aaa ;
    display: inline-block;
    margin: 25px o 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing:1px ;
    font-weight: bold;
}
input {
    border:1px solid black;
    border-radius: 50px;
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    color: #555
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