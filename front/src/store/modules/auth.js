export default ({
    devtools: true,
    namespaced: true,
    state: {
        loggedIn: false,
    },
    mutations: {
        stateChange (state, authState) {
            state.loggedIn = authState;
        },
    },
    actions: {
        login (context) {
            context.commit('stateChange', true);
        },
        logout (context) {
            context.commit('stateChange', false);
        },
    },
})