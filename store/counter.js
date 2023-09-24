export const state = () => ({
    counter: 0
})
export const getters = {
    getCounter(state){
        return state.counter
    }
}

export const mutations = {
    increaseCount(state){
        state.counter++
    },
    decreaseCount(state){
        state.counter--
    },
    increaseBy(state,payload){
        state.counter += payload.amount
    },
    changeCounter(state,payload){
        state.counter += payload.amount
    }
}

export const actions = {
    changeNumber({commit}){
        commit('increaseCount')
    },
    incrementRandom({commit},payload){
        commit('changeCounter',payload)
    }

}

