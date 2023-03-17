
<template>
  <center>
    <div class="titel">
      <h2>Employee Details</h2>
    </div>
	
	<div v-if="pointUser" class="overlay">
		<div class="model">
			<button @click="pointUser=null">X</button>
			
			<h3> {{ pointUser.name }} </h3>
			<p><strong>UserName : </strong> {{ pointUser.username }} </p>
			<p> <strong>Mail-ID :</strong> {{ pointUser.email }} </p>
			<p> <strong>Phone :</strong> {{ pointUser.phone }} </p>
			<p> <strong>Company :</strong> {{ pointUser.company.name }} </p>
			<p> <strong>Website :</strong> {{ pointUser.website }} </p>
			
		</div>
	</div>

	<div v-if="pointEditUser" class="editViewPopup">
		<form>
			<h3> {{ pointEditUser.name }} </h3>
			<label for="email">Mail-ID: </label>
			<input v-model="pointEditUser.email">
			<label for="username">UserName: </label>
			<input v-model="pointEditUser.username">
			<label for="city">City: </label>
			<input v-model="pointEditUser.address.city">
			<button @click="pointEditUser=null">save</button>
			
		</form>
	</div>

	<div class="table">
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mail-ID</th>
            <th>UserName</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.name">
            <td>{{item.name}}</td>
            <td>{{item.email}}</td> 
            <td>{{item.username}}</td>
            <td>{{item.address.city}}</td>
            <td class="buttons">
				<i @click="viewDetails(item)" class="fa fa-eye"></i>
				<i @click="editDetails(item)" class="fa fa-edit"></i>
				<i @click="deleteRow(item.id)" class="fa fa-trash" ></i>
            </td>	
          </tr>
        </tbody>
      </table>
	</div>
</center>
</template>

<script>

import { mapGetters,mapActions } from 'vuex';

export default{
  data(){
    return{
		pointUser:null,
		pointEditUser:null,
    }
  },
  computed:{
    ...mapGetters(['getData']),
    data(){
      return this.getData
    },
	selecteduser(){
		return this.$store.state.selecteduser;
	},
  },
  created(){
    this.$store.dispatch('fetchData')
  },
  methods:{
    ...mapActions(['deleteRow']),
	viewDetails(item){
		this.pointUser=item;
	},
	editDetails(item){
		this.pointEditUser=item;
		//console.log('updatedData',item)

	},
	close(){
		this.$emit('close')
		this.viewDetails = null
		this.editDetails=null
	},
  }
}
</script>

<style>

.table{
  display: inline-flex;
  color: black;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-color: gray;
  border-radius: 0%;
}

.buttons{
  font-size: 18px;
  cursor: pointer;
}
i{
  margin-right: 6px;
}
th , td{
  padding:15px;
  text-align: justify;
  
  
}
th{
  background-color: green;
  color: white;
}
tr:hover {background-color: coral;}

.popup{
	display: inline-flexbox;
	border: 2%;
}

.overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 100%;
    color: rgb(244, 242, 242);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.model{
    width: 600px;
    background-color: rgb(58, 44, 44);
    border-radius: 15px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
	align-items: flex-start;
	display: inline-flex;
  }
  .model button{
	margin-left: auto;
  }
</style>





