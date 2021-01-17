<template>
    <div>
        <b-modal id="edit-academic-info" title="Editar información académica" size="lg">
            <template>
                <div>
                    <b-form v-if="show">
                        <b-row>
                            <b-col class="col-12">
                                <b-form-group
                                        id="input-group-1"
                                        label="Instituto:"
                                        label-for="input-1"
                                >
                                    <university-select v-on:SelectedItem="updateMajors" :default-selected="universitySelected"></university-select>
                                </b-form-group>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col class="col-12">
                                <b-form-group
                                        id="input-group-2"
                                        label="Carrera:"
                                        label-for="input-1"
                                >
                                    <major-select :university-id="this.universitySelected" :default-selected="majorSelected" :key="universitySelected"></major-select>
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
                <b-button size="sm" variant="success">
                    Guardar cambios
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import UniversitySelect from "../../common/UniversitySelect";
    import MajorSelect from "../../common/MajorSelect";
    export default {
        name: "UpdateAcademicInformation",
        props: ['academicObject'],
        data() {
            return {
                universitySelected: this.academicObject.university_id,
                majorSelected: this.academicObject.major_id,
                show: true,
                majorKey: 0
            }
        },
        methods: {
          updateMajors(selected) {
              console.log("voy a actulizar");
              console.log(selected);
              this.majorSelected = null;
              this.universitySelected = selected
          }
        },
        components: {
            UniversitySelect,
            MajorSelect
        }
    }
</script>

<style scoped>

</style>