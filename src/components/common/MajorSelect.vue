<template>
    <div>
        <b-form-select
                v-model="selected"
                :options="majors"
                value-field="id"
                text-field="name"
        ></b-form-select>
<!--    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>-->
    </div>
</template>

<script>
    import MajorService from "../../services/common/academy/MajorService";

    export default {
        name: "University",
        props: ['universityId', 'defaultSelected'],
        data() {
            return {
                selected: this.defaultSelected || null,
                majors: [
                    {id: null, name: 'Seleccione'}
                ]
            }
        },
        created() {
            if (this.universityId) {
                MajorService.get(this.universityId).then(
                    universities => universities.data.data.forEach(
                        element => this.majors.push(element)
                    )
                ).catch(
                    function (error) {
                        console.log('Show error notification!');
                        return Promise.reject(error)
                    }
                )
            }

        }
    }
</script>

<style scoped>

</style>