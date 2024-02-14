import axios from "axios";

export default {
    install(Vue) {
        const service = axios.create({
            baseURL: "https://randomuser.me/api/"
        });

        const api = async (options) =>
            await service(options)
                .then((response) => {
                    const {data, status} = response;
                    return {error: undefined, data, status};
                })
                .catch((error) => {
                    const {data, status} = error.response || {};
                    return {error, data, status};
                });

        Vue.prototype.$http = Vue.$http = {
            //common
            get: async (url, params, options) =>
                await api({...options, ...{method: "get", url, params}}),
            post: async (url, data, options) =>
                await api({...options, ...{method: "post", url, data}}),
            put: async (url, data, options) =>
                await api({...options, ...{method: "put", url, data}}),
            delete: async (url, data, options) =>
                await api({...options, ...{method: "delete", url, data}}),

            //
            getContacts: async (params) => {
                const {error, data, status} = await api({method: 'get', url: "/", params})
                return {error, data: data.results || [], status}
            }
        }
    }
}
