<template>
    <div>
        <b-modal id="edit-profile" title="Editar perfil" size="lg">
            <template>
                <div>
                    <b-form @submit="onSubmit" v-if="show">
                        <b-row>
                            <b-col class="col-6">
                                <b-form-group
                                        id="input-group-1"
                                        label="Nombre:"
                                        label-for="input-1"
                                >
                                    <b-form-input
                                            id="input-1"
                                            v-model="form.first_name"
                                            type="text"
                                            required
                                            placeholder="Nombre"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col class="col-6">
                                <b-form-group id="input-group-2" label="Segundo nombre:" label-for="input-2">
                                    <b-form-input
                                            id="input-2"
                                            v-model="form.second_name"
                                            required
                                            placeholder="Segundo nombre"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="col-6">
                                <b-form-group
                                        id="input-group-3"
                                        label="Apellido paterno:"
                                        label-for="input-1"
                                >
                                    <b-form-input
                                            id="input-1"
                                            v-model="form.last_name"
                                            type="text"
                                            required
                                            placeholder="Apellido paterno"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col class="col-6">
                                <b-form-group id="input-group-4" label="Apellido materno:" label-for="input-2">
                                    <b-form-input
                                            id="input-2"
                                            v-model="form.second_last_name"
                                            required
                                            placeholder="Apellido materno"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="col-12">
                                <b-form-group id="input-group-5" label="Email:" label-for="input-2">
                                    <b-form-input
                                            id="input-2"
                                            v-model="form.email"
                                            required
                                            placeholder="Email"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-form>
                </div>
            </template>

            <template #modal-footer="{ ok, cancel }">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" @click="cancel()">
                    Cancelar
                </b-button>
                <b-button @click="onSubmit" size="sm" variant="success">
                    Guardar cambios
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import ProfileService from "../../../services/user/ProfileService";

    export default {
        name: "UpdateProfile",
        props: ['userObject'],
        data() {
            return {
                form: {
                    userId: this.userObject.id,
                    first_name: this.userObject.first_name,
                    second_name: this.userObject.second_name,
                    last_name: this.userObject.last_name,
                    second_last_name: this.userObject.second_last_name,
                    email: this.userObject.email,
                    username: this.userObject.username
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                ProfileService.put(this.form.userId, this.form).then(
                    () => location.reload()
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>