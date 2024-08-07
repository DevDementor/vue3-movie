import axios from "axios";

export default {

    //module
    namespaced: true, //data!
    state: () => ({
        movies: [],
        message: '',
        loading: false
    }), //computed!
    getters: {
    }, //methods
    //데이터 변경 담당 함수
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies(state) {
            state.movies = []
        }
    }, //비동기
    actions: {
        async searchMovies({commit}, payload) {
            const {title, type, number, year} = payload;
            //검색
            const OMDB_API_KEY = '7035c60c';
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${number}`);
            console.log(res.data);
            const {Search, totalResults} = res.data
            commit('updateState', {
                movies: Search
            })
        }
    },
}