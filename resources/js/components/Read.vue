<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <br>
                <div class="row">
                    <div class="col-md-10">
                        <h4>Person</h4>
                    </div>
                    <div class="col-md-2">
                        <router-link to="/create" class="btn btn-primary">Add</router-link>
                    </div>
                </div>
                <br>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(person,index) in persons" :key="person.id">
                            <td>{{++index}}</td>
                            <td>{{person.first_name}}</td>
                            <td>{{person.last_name}}</td>
                            <td>
                                <div style="display:flex">
                                <router-link :to="'/update/'+person.id" class="btn btn-warning" style="margin-right: 5px">Update</router-link>
                                <button class="btn btn-danger" @click="deleteData(person.id)">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            persons: []
        }
    },
    created(){
        this.loadData()
    },
    methods: {
        loadData(){
            axios.get('http://localhost:8000/api/person').then(response => {
                this.persons = response.data
            })
        },
        deleteData(id){
            axios.delete('http://localhost:8000/api/person/'+id).then(response => {
                this.loadData()
            })
        }
    }
}
</script>