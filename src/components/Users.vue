<template>


  <div class="row">
    <div class="col-3" v-for="user in users" v-bind:key="user._id">
      <div class="card shadow mb-5">
        <a :href="'user/' + user._id">
          <img class="card-img-top" :src="user.picture" alt="" />
        </a>
        <h2>{{ user.name }}</h2>
        <h2>{{ user.cellphone | removingLine }}</h2>
        <h2>{{ user.address | uppering }}</h2>
        <b-row>
          <b-col>
            <b-button v-on:click="selectUser(user._id)"  v-b-modal.modal-prevent-closing class="buttons-actions" variant="primary">Edit</b-button>
          </b-col>
          <b-col>
            <b-button
              v-on:click="deleteUser(user._id)"
              class="buttons-actions"
              variant="primary"
              >Delete</b-button
            >
          </b-col>
        </b-row>
      </div>
    </div>


     <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @ok="handleOk"
    
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Address"
          label-for="address-input"
          invalid-feedback="Address is required"
        >
          <b-form-input
            id="name-input"
            v-model="address"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>

  
</template>
<style>
.buttons-actions {
  width: 100%;
}
</style>
<script>
import api from "@/api";
export default {
  data(){
    return {
          userSelected:null,
          name:null,
          address:null,
          userFound:null,
          userUpdated:null
    }

  },
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    deleteUser(id) {
      (async () => {
        this.user = await api.deleteUser(id);
        this.users = [...this.users].filter((user)=> !(user._id === id))
        this.loaded = true;
      })();
    },

    handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
     handleSubmit() {
     
        // Push the name to submitted names
        (async () => {
        this.userUpdated = await api.updateUser(this.userSelected,{name:this.name, address:this.address});
        this.userFound = this.users.filter((user)=> user._id === this.userSelected)
        this.users = [...this.users].filter((user)=> !(user._id === this.userSelected))
        this.$router.go()	// Refreshes page
        this.$bvModal.hide('modal-prevent-closing')
      })();
        // Hide the modal manually
       
      },
      selectUser(id){
        this.userSelected= id
     
      }

  },
};
</script>
