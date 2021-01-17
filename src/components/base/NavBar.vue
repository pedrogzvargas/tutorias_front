<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Tutorías</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <div class="mb-2">
                    <b-avatar src="https://placekitten.com/300/300"></b-avatar>
                </div>
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>Pedro Jesús González Vargas</em>
                    </template>
                    <b-dropdown-item
                            :to="{
                               name: 'Profile',
                               params: {
                                   userId: user.id
                               }
                             }">Perfil
                    </b-dropdown-item>
                    <b-dropdown-item href="#">Cerrar sesión</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "NavBar",
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>
<style scoped>
    .bg-info {
        background-color: #285c4d !important;
    }
</style>