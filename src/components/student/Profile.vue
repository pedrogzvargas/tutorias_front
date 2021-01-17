<template>
    <div>
        <b-img rounded="circle" center src="https://picsum.photos/150/150/?image=58" alt="Center image"></b-img>
        <br>
        <div class="name">
            <h2>{{ this.user.fullName }}</h2>
        </div>
        <b-container fluid="lg">
            <b-tabs content-class="mt-3" justified>
                <b-tab title="Información personal" active>
                    <personal-information :user-id="this.userId"></personal-information>
                </b-tab>
                <b-tab title="Académica">
                    <academic-information :student-id="this.userId"></academic-information>
                </b-tab>
                <b-tab title="Ajustes"><p>I'm the tab with the very, very long title</p></b-tab>
            </b-tabs>
        </b-container>
    </div>
</template>

<script>
    import PersonalInformation from "./PersonalInformation";
    import AcademicInformation from "./AcademicInformation";
    export default {
        name: "ProfileComponent",
        data() {
            return {
                userId: this.$route.params.userId,
                studentId: 1
            }
        },
        components: {
            PersonalInformation,
            AcademicInformation
        },
        computed: {
            user () {
                return this.$store.state.user;
            }
        }
    }
</script>

<style scoped>
    .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 50px;
    }
</style>
