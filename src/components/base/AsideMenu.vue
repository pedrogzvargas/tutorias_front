<template>
    <div>
        <b-button v-b-toggle.sidebar-no-header>Menú</b-button>
        <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
            <template #default="{ hide }">
                <div class="p-3">
                    <h4 id="sidebar-no-header-title">Tutorias</h4>
                    <nav class="mb-3">
                        <b-nav vertical>
                            <b-nav-item href="/login">Login</b-nav-item>
                            <b-nav-item :to="{
                               name: 'Profile',
                               params: {
                                   userId: user.id
                               }
                             }">Perfil</b-nav-item>
                            <b-nav-item href="/login">Cursos</b-nav-item>
                            <b-nav-item href="/login">Tutores</b-nav-item>
                            <b-nav-item href="/login">Alumnos</b-nav-item>
                            <b-nav-item href="/login">Reportes</b-nav-item>
                            <b-nav-item href="/login">Datos académicos</b-nav-item>
                            <b-nav-item href="/general-information">Datos generales</b-nav-item>
                            <b-nav-item href="/address-information">Datos domiciliarios</b-nav-item>
                            <b-nav-item href="/family-information">Datos familiares</b-nav-item>
                            <b-nav-item href="/login">Canalizaciones</b-nav-item>
                        </b-nav>
                    </nav>
                    <b-button variant="primary" block @click="hide">Cerrar</b-button>
                </div>
            </template>
        </b-sidebar>
    </div>
</template>
<script>
    export default {
        name: "AsideMenu",
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>
