<template>
    <div>
        <b-img rounded="circle" center src="https://picsum.photos/150/150/?image=58" alt="Center image"></b-img>
        <br>
        <div class="name">
            <h2>Pedro Jesús González Vargas</h2>
        </div>
        <b-container fluid="lg">
            <b-tabs content-class="mt-3" justified>
                <b-tab title="Datos generales" active>
                    <b-row class="row-space">
                        <b-col>
                            <label class="label-form">Correo electrónico</label>
                            <p>pedro.gzvargas@gmail.com</p>
                        </b-col>

                        <b-col>
                            <label class="label-form">Teléfono fijo</label>
                            <p>74610082</p>
                        </b-col>

                        <b-col>
                            <label class="label-form">Celular</label>
                            <p>7461084362</p>
                        </b-col>
                    </b-row>

                    <b-row class="row-space">
                        <b-col>
                            <label class="label-form">Fecha de nacimiento</label>
                            <p>06/04/1993</p>
                        </b-col>

                        <b-col>
                            <label class="label-form">Lugar de nacimiento</label>
                            <p>Puebla</p>
                        </b-col>

                        <b-col>
                            <label class="label-form">Sexo</label>
                            <p>Masculino</p>
                        </b-col>
                    </b-row>

                    <b-row class="row-space">
                        <b-col>
                            <label class="label-form">Estado civil</label>
                            <p>Soltero</p>
                        </b-col>

                        <b-col>
                            <label class="label-form">Descripción</label>
                            <p>XX</p>
                        </b-col>

                        <b-col>
                            <label class="label-form">Tienes hijos</label>
                            <p>No</p>
                        </b-col>

                        <b-col>
                            <label class="label-form">Número de hijos</label>
                            <p>No</p>
                        </b-col>
                    </b-row>

                    <b-row class="row-space">
                        <b-col>
                            <label class="label-form">Estatura</label>
                            <p>1.70</p>
                        </b-col>
                        <b-col>
                            <label class="label-form">Peso</label>
                            <p>70</p>
                        </b-col>
                    </b-row>

                </b-tab>
                <b-tab title="Datos médicos">
                    <p>
                        Si cuentas con alguna prescripción médica de alguna deficiencia sensorial
                        o funcional que te obligue a llevar aparatos o controlar tu actividad
                        física registrala aquí.</p>
                </b-tab>
                <b-tab title="Datos económicos">
                    <b-row class="row-space">
                        <b-col>
                            <label class="label-form">¿A cuánto ascienden los ingresos mensuales de tu familia?</label>
                            <p>5000</p>
                        </b-col>
                    </b-row>
                    <b-row class="row-space">
                        <b-col>
                            <label class="label-form">¿En caso de ser económicamente independiente a cuánto asciende tu
                                ingreso?</label>
                            <p>10000</p>
                        </b-col>
                    </b-row>
                </b-tab>
            </b-tabs>
            <div class="right-side">
                <b-button @click="$bvModal.show('edit-profile')" variant="success">Editar</b-button>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "GeneralInformation"
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
    .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 50px;
    }
    .right-side {
        float: right;
    }
</style>