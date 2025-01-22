<template>
    <div class="logout-page">
        <h1>You are logged out. Have a nice day from Summafy.</h1>
        <button @click="login">Login</button>
    </div>
</template>

<script>
import { logout } from '../auth';

export default {
    // The mounted hook is called after the component is inserted into the DOM, 
    // making it a good place to perform actions such as fetching data or calling functions.
    mounted() {
        logout();
    },
    methods: {
        login() {
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
.logout-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>