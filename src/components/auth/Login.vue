<template>
    <div>
        <b-form v-if="show">
            <b-form-group
                    id="input-group-1"
                    label="Matricula:"
                    label-for="input-1"
            >
                <b-form-input
                        id="input-1"
                        v-model="form.username"
                        type="text"
                        required
                        placeholder="Matricula"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="form.password"
                        required
                        placeholder="Contraseña"
                        type="password"
                ></b-form-input>
            </b-form-group>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'LoginComponent',
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                },
                show: true
            }
        },
        methods: {
            async onSubmit() {
                try {
                    await this.$store.dispatch('getUser', this.form);
                    let userId = this.user.id;
                    this.$router.push({name: 'Profile', params: {userId}});
                } catch (error) {
                    console.error(error)
                }
            }
        },
        created() {
            this.$parent.$on('submit', this.onSubmit);
        },
        computed: {
            user() {
                return this.$store.state.user;
            }
        }
    }
</script>
