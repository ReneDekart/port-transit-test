import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userRole: null,
        currentView: null,
        contacts: [],
        currentPage: 1,
        perPage: 10,
        genders: ["male", "female", "indeterminate"],
        nationalities: {
            AU: {
                color: "#d6dc35",
                count: 0
            },
            BR: {
                color: "#35dcbd",
                count: 0
            },
            CA: {
                color: "#dcbb35",
                count: 0
            },
            CH: {
                color: "#355cdc",
                count: 0
            },
            DE: {
                color: "rgba(53,220,81,0.8)",
                count: 0
            }, DK: {
                color: "#dc3545",
                count: 0
            }, ES: {
                color: "#8f82be",
                count: 0
            },
            FI: {
                color: "rgba(14,110,10,0.71)",
                count: 0
            },
            FR: {
                color: "#903d9d",
                count: 0
            },
            GB: {
                color: "rgba(229,115,34,0.7)",
                count: 0
            },
            IE: {
                color: "rgba(120,220,53,0.8)",
                count: 0
            },
            IN: {
                color: "#3591dc",
                count: 0
            },
            IR: {
                color: "rgba(42,89,33,0.8)",
                count: 0
            },
            MX: {
                color: "#42b996",
                count: 0
            },
            NL: {
                color: "#daa8ad",
                count: 0
            },
            NO: {
                color: "#2f65b6",
                count: 0
            },
            NZ: {
                color: "#d07756",
                count: 0
            },
            RS: {
                color: "#d94b59",
                count: 0
            },
            TR: {
                color: "#844f93",
                count: 0
            },
            UA: {
                color: "#a4dc35",
                count: 0
            },
            US: {
                color: "#3589dc",
                count: 0
            }, },
        filter: {
            gender: "",
            name: "",
            nat: ""
        },
    },
    getters: {
        GET_USER_ROLE: state => state.userRole,
        GET_CURRENT_VIEW: state => state.currentView,
        GET_PER_PAGE: state => state.perPage,
        GET_CURRENT_PAGE: state => state.currentPage,
        GET_COLLECTION_SIZE: state => state.contacts.length,
        GET_COLLECTION_NATIONALITIES: state => state.nationalities,
        GET_FILTERED_COLLECTION: state => {
            return state.contacts.filter(item =>
                (!state.filter.gender ? true : item.gender === state.filter.gender )&&
                (!state.filter.nat ? true : item.nat.includes(state.filter.nat)) &&
                (!state.filter.name ? true : item.name.includes(state.filter.name))
            )
        },
        GET_COLLECTION_STATISTIC: state => {
            let males = 0;
            let females = 0;
            let indeterminate = 0;
            state.contacts.forEach(contact => {
                switch (contact.gender){
                    case "male":
                        males++
                        break
                    case "female":
                        females++
                        break
                    default:
                        indeterminate++
                }
            })
            return {men: males, women: females, indeterminate: indeterminate}
        },
        GET_GENDERS: state => state.genders,
        GET_FILTER: state => state.filter
    },
    mutations: {
        SET_USER_ROLE: (state, payload) => state.userRole = payload,
        SET_CONTACTS: (state, payload) => {
            state.contacts = payload.map(item=>{
                return {...item,
                    name: `${item.name.title}, ${item.name.first} ${item.name.last}`,
                }
            })
            Object.keys(state.nationalities).forEach(key=>{
                state.nationalities[key].count = 0
            })
            state.contacts.forEach(contact=>{
                state.nationalities[contact.nat].count++
            })
        },
        SET_CURRENT_VIEW: (state, payload) => state.currentView = payload,
        SET_PER_PAGE: (state, payload) => state.perPage = payload,
        SET_CURRENT_PAGE: (state, payload) => state.currentPage = payload,
        SET_FILTER_NAME: (state, payload) => state.filter.name = payload,
        SET_FILTER_GENDER: (state, payload) => state.filter.gender = payload,
        SET_FILTER_NAT: (state, payload) => state.filter.nat = payload,
        SET_FILTER_CLEAR: (state) => {
            state.filter = {
                gender: "",
                name: "",
                nat: ""
            }
        },
    },
    actions: {
        STORE_USER: (context, payload) => {
            localStorage.userRole = payload
            localStorage.currentView = 'table'
            context.commit('SET_USER_ROLE', payload)
            context.commit('SET_CURRENT_VIEW', 'table')

        },
        STORE_CURRENT_VIEW: (context, payload) => {
            localStorage.currentView = payload
            context.commit('SET_CURRENT_VIEW', payload)
        },
        CLEAR_ALL: (context) => {
            localStorage.currentView = null
            localStorage.userRole = null
            context.commit("SET_CURRENT_VIEW", null)
            context.commit("SET_USER_ROLE", null)
        }
    },
    modules: {}
})

