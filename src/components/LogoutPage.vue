<template>
    <div class="logout-page">
        <h1>You are logged out. Have a nice day from Summafy.</h1>
        <button @click="login">Login</button>
    </div>
</template>

<script>
import { logout } from '../auth';
logout();
export default {
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
    height: 100vh;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>