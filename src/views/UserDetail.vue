<template>
    <div>
        <div v-if="loaded">
            <img :src="user.picture" alt="">
            <h2>{{ user.name }}</h2>
        </div>
        <div v-else>
            <b-spinner variant="primary"></b-spinner>
        </div>
    </div>
</template>

<script>
import api from '@/api';
export default {
    data(){
        return {
            user:{},
            loaded: false
        }
    },
    created(){
        this.getUser(this.$route.params.id);
    },
    methods:{
        getUser(id){
            console.log(this.$route.params.id);
            ( async ()=>{
                this.user = await api.getUserData(id);
                this.loaded = true;
            } )();
        },

       

    }
    
}
</script>