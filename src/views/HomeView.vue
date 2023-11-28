<script setup>
    import Login from 'C:/Users/patel/OneDrive/Documents/College_Courses/CS_Classes/CSE_2102/Proj/CSE2102-Fall-2023/vue.example/src/components/Login.vue'
</script>

<template>
    <div class="Login_page">
        <Login/>
    </div>
</template>

<style>
body {
    background: url("uconn_spring_fog.jpg");
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
}

.Login {
    margin: auto;
    margin-block: 150px;
    align-items: center;
    background-color: white;
    inline-size: 500px;
    border: solid black 1.25px;
    padding: 0px 0px 20px 0px;
    border-radius: 0px 0px 30px 30px
}

.Login header {
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
    color: aliceblue;
    font-size: 2.2rem;
    margin-bottom: 40px;
    background-color: #1877ca;
    padding-top: 15px;
    padding-bottom: 30px;
    border-radius: 1px 1px 100px 100px;
}

.Login h1 {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 10px;
}

.Login .user_role {
    text-align: center;
    font-size: 1rem;
    padding-top: 5px;
    padding-bottom: 15px;
}

.Login .user_role label {
    padding-right: 3px;
    text-align: center;
}

.Login h2 {
    padding-bottom: 5px;
}

.Login .user_uconn_login {
    padding-bottom: 12px;
}

.Login form{
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
}

.Login .user_uconn_login input{
    background-color: #dddddd;
    border: solid #616161 1px;
    margin: 8px 0;
    padding: 8px 20px;
    font-size: 13px;
    border-radius: 15px;
    width: 100%;
    outline: none;
}

.Login .Login_button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
}
 
.Login .Login_button button {
    color: white;
    background-color: rgb(35, 34, 34);
    padding: 2px;
    border-radius: 8px;
    border: solid #616161 1px;
}

</style>