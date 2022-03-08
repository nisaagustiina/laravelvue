<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <br>
                <h1>Update data</h1>
                <br>
                <form @submit.prevent="updateData()">
                    <div class="form-group">
                        <label for="">First Name</label>
                        <input type="text" class="form-control" 
                        v-model="form.first_name" required>
                    </div>
                    <div class="form-group">
                        <label for="">Last Name</label>
                        <input type="text" class="form-control" 
                        v-model="form.last_name" required>
                    </div>
                    <br>
                    <button class="btn btn-success" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form: {
                first_name: '',
                last_name: ''
            }
        }
    },
    created(){
        this.loadData()
    },
    methods: {
        loadData(){
            axios.get('http://localhost:8000/api/person/'+this.$route.params.id)
            .then(response => {
                this.form.first_name = response.data.first_name;
                this.form.last_name = response.data.last_name;
            })
        },
        updateData(){
            axios.put('http://localhost:8000/api/person/'+this.$route.params.id, {
                first_name: this.form.first_name,
                last_name: this.form.last_name,
            })
            .then(response => {
                this.$router.push('/')
            })
        }
    }
}
</script>