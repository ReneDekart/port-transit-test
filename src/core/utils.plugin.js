export default {
    install(Vue) {
        Vue.prototype.$utils = Vue.utils = this
    },
    parseLocation(value){
        return `/${ value.country }/\n${value.street.number} ${value.street.name}, ${value.city}, ${value.state} ${value.postcode}`
    },
}
