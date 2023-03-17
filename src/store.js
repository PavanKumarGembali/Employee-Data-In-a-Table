import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
    state:{
        data:[]
    },
    mutations:{
        setData(state,payload){
            state.data = payload
        },
        removeRow:(state,id)=>
        (state.data=state.data.filter(item=>item.id!==id)),

        //update method mutation
        updateData(state,{id,newData}){
            state.data[id]=newData;
        }
    },
    actions:{
        async fetchData({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            commit('setData',response.data)
            console.log(response.data)
        },
        
        async deleteRow({commit}, id){
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            commit('removeRow',id);
        },

        //update method action
        async updateData({commit}, {id, newData}) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
              method: 'PUT',
              body: JSON.stringify(newData)
            });
            const updatedData = await response.json();
            commit('updateData', {id, newData: updatedData});
        },
        
    },
    getters:{
        getData(state){
            return state.data
        }
    },
    
})