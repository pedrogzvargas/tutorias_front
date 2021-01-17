<template>
    <div>
        <b-row class="row-space">
            <b-col>
                <label class="label-form">Nombre</label>
                <p>{{ this.userInformation.first_name }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Segundo nombre</label>
                <p>{{ this.userInformation.second_name }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Apellido paterno</label>
                <p>{{ this.userInformation.last_name }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Apellido materno</label>
                <p>{{ this.userInformation.second_last_name }}</p>
            </b-col>
        </b-row>

        <b-row class="row-space">
            <b-col>
                <label class="label-form">Username</label>
                <p>{{ this.userInformation.username }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Email</label>
                <p>{{ this.userInformation.email }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Fecha de registro</label>
                <p>{{ this.userInformation.date_joined | moment("dddd, MMMM Do YYYY") }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Estatus</label>
                <p>
                    <b-badge v-if="this.userInformation.is_active" pill variant="success">Activo</b-badge>
                    <b-badge v-else pill variant="danger">Inactivo</b-badge>
                </p>
            </b-col>
        </b-row>
        <div>
            <update-profile :user-object="userInformation"></update-profile>
        </div>
        <div class="right-side">
            <b-button @click="$bvModal.show('edit-profile')" variant="success">Editar</b-button>
        </div>
    </div>
</template>

<script>
    // import UserService from "../../services/user/UserService";
    import UpdateProfile from "./modals/UpdateProfile";

    export default {
        name: "PersonalInformation",
        props: ['userId'],
        components: {
            UpdateProfile
        },
        data() {
            return {
                userInformation: null
            }
        },
        mounted() {
            // console.log(this.userId);
            // UserService.get(this.userId).then(
            //     userInformation => this.userInformation = userInformation.data.data
            // );
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