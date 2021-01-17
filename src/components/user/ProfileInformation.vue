<template>
    <div>
        <b-row class="row-space">
            <b-col>
                <label class="label-form">Nombre</label>
                <p>{{ this.profileInformation.first_name }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Segundo nombre</label>
                <p>{{ this.profileInformation.second_name }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Apellido paterno</label>
                <p>{{ this.profileInformation.last_name }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Apellido materno</label>
                <p>{{ this.profileInformation.second_last_name }}</p>
            </b-col>
        </b-row>

        <b-row class="row-space">
            <b-col>
                <label class="label-form">Username</label>
                <p>{{ this.profileInformation.username }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Email</label>
                <p>{{ this.profileInformation.email }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Fecha de registro</label>
                <p>{{ this.profileInformation.date_joined | moment("dddd, MMMM Do YYYY") }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Estatus</label>
                <p>
                    <b-badge v-if="this.profileInformation.is_active" pill variant="success">Activo</b-badge>
                    <b-badge v-else pill variant="danger">Inactivo</b-badge>
                </p>
            </b-col>
        </b-row>
        <div>
            <update-profile :user-object="this.profileInformation"></update-profile>
        </div>
        <div class="right-side">
            <b-button @click="$bvModal.show('edit-profile')" variant="success">Editar</b-button>
        </div>
    </div>
</template>

<script>
    import ProfileService from "../../services/user/ProfileService";
    import UpdateProfile from "./modals/UpdateProfile";

    export default {
        name: "ProfileInformation",
        props: ['userId'],
        components: {
            UpdateProfile
        },
        data() {
            return {
                profileInformation: null
            }
        },
        mounted() {
            console.log(this.userId);
            ProfileService.get(this.userId).then(
                profileInformation => this.profileInformation = profileInformation.data.data
            );
        }
    }
</script>

<style scoped>
    .label-form {
        display: block;
        margin-bottom: 0.3125rem;
        font-size: 0.875rem;
        line-height: 1.125rem;
        font-weight: 500;
        color: #818181;
    }
    .row-space {
        margin-top: 12px;
        margin-bottom: 12px;
        border-bottom: 1px solid #ededed;
    }
    .right-side {
        float: right;
    }
</style>