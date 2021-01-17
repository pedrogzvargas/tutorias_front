<template>
    <div>
        <b-row class="row-space">
            <b-col>
                <label class="label-form">Instituto</label>
                <p>{{ this.academicInformation.university }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Carrera</label>
                <p>{{ this.academicInformation.major }}</p>
            </b-col>
        </b-row>

        <b-row class="row-space">
            <b-col>
                <label class="label-form">Periodo</label>
                <p>{{ this.academicInformation.period }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Número de periodo</label>
                <p>{{ this.academicInformation.period_number }}</p>
            </b-col>

            <b-col>
                <label class="label-form">Grupo</label>
                <p>{{ this.academicInformation.group }}</p>
            </b-col>
        </b-row>
        <div>
            <update-academic-information :academic-object="academicInformation"></update-academic-information>
        </div>
        <div class="right-side">
            <b-button @click="$bvModal.show('edit-academic-info')" variant="success">Editar</b-button>
        </div>
    </div>
</template>

<script>
    import AcademicInformation from "../../services/student/AcademicInformation";
    import UpdateAcademicInformation from "./modals/UpdateAcademicInformation";

    export default {
        name: "AcademicInformation",
        props: ['studentId'],
        data() {
            return {
                academicInformation: null
            }
        },
        created() {
            AcademicInformation.get(this.studentId).then(
                academicInformation => this.academicInformation = academicInformation.data.data
            )
        },
        components: {
            UpdateAcademicInformation
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