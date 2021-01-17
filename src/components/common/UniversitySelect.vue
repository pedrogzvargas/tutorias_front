<template>
    <div>
        <b-form-select
                v-model="selected"
                :options="universities"
                @change="emitSelected"
                value-field="id"
                text-field="name"
        ></b-form-select>
<!--    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>-->
    </div>
</template>

<script>
    import UniversityService from "../../services/common/academy/UniversityService";
    export default {
        name: "University",
        props: ['defaultSelected', ],
        data() {
            return {
                selected: this.defaultSelected,
                universities: [
                    { id: null, name: 'Seleccione' }
                ]
            }
        },
        methods: {
            emitSelected() {
                console.log("cambiado");
                console.log(this.selected);
                this.$emit('SelectedItem', this.selected)
            }
        },
        created() {
            UniversityService.get().then(
                universities => universities.data.data.forEach(
                    element => this.universities.push(element)
                )
            )
        }
    }
</script>

<style scoped>

</style>