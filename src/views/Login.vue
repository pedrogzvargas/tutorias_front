<template>
    <div class="main-div">
        <login-component ref="loginComponent"></login-component>
        <b-button @click="onSubmit">Iniciar</b-button>
    </div>
</template>

<script>
    // @ is an alias to /src
    import LoginComponent from "../components/auth/Login";
    export default {
        name: 'Login',
        components: {
            'login-component': LoginComponent
        },
        methods: {
            onSubmit: function () {
                this.$emit('submit');
            }
        }
    }
</script>
<style>
    .main-div {
        width: 50%;
        margin: 0 auto;
    }
</style>
