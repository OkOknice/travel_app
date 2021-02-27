export default {
    change(state, city) {
        state.city = city
        localStorage.city = city
    }
}