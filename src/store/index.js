import Vue from 'vue'
import Vuex from 'vuex'
import LoginService from "../services/user/LoginService";

Vue.use(Vuex);
export default new Vuex.Store({
    strict: true,
    state: {
        user: {
            id: null,
            authToken: null,
            roles: [],
            groups: []
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user.id = payload.user_id;
            state.user.authToken = payload.token;
            state.user.roles = payload.roles;
            state.user.groups = payload.groups;
        }
    },
    actions: {
        getUser({commit}, payload) {
            return new Promise(resolve => {
                LoginService.create(payload).then(
                    userInformation => {
                        commit('setUser', userInformation.data.data);
                        resolve();
                    }
                ).catch(
                    error => console.error(error)
                );
            })
        }
    },
    getters: {
        userRole(state){
            return state.user.roles.find(element => element.name = "studet")
            // se accede mediante this.$store.getters.userRole
        }
    },
    modules: {}
})
