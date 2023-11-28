<template>
    <main class="Login">
        <header>Welcome Huskies!</header>
        <h1>
            Please select one of the following options
        </h1>
        <form>
            <div class="user_role">
                <h2>I am a:</h2>
                <!-- input label for each user_role
                    order: Student, Professor, Admin -->
                <label>
                    <input type="radio" value="Student" v-model="user_selected_role">
                    Student
                </label>

                <label>
                    <input type="radio" value="Professor" v-model="user_selected_role">
                    Professor
                </label>

                <label>
                    <input type="radio" value="Admin" v-model="user_selected_role">
                    Admin
                </label>
            </div>
            <div class="user_uconn_login">
                <h1>Please login using your Uconn netID and password</h1>
                <label for="NetID">
                    <input type="text" v-model="user_NetID" placeholder="Enter NetID" autofocus>
                </label>

                <label for="Password">
                    <input type="password" v-model="user_Pwd" placeholder="Enter Password">
                </label>
            </div>
            <div class="Login_button">
                <button @click="Login">Login</button>
            </div>
        </form>
    </main>
</template>

<script>
    export default{
        name:'Login',
        data() {
            return {
                user_selected_role: null,
                user_NetID: null,
                user_Pwd: null
            }
        }
    }
</script>
