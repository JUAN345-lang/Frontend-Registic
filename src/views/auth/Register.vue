<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"></div>

      <div class="col-md-6 bg-light">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">
                <h3 class="display-4">Registrate !</h3>
               
                <form>
                  <div class="mb-3">
                    <input
                      id="inputName"
                      type="text"
                      placeholder="Name"
                      required=""
                      autofocus=""
                      v-model="form.name"
                      class="form-control rounded-pill border-0 shadow-sm px-4"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      id="inputEmail"
                      type="email"
                      placeholder="Email address"
                      required=""
                      autofocus=""
                      v-model="form.email"
                      class="form-control rounded-pill border-0 shadow-sm px-4"
                    />
                  </div>
                  
                 
                  <div class="mb-3">
                    <input
                      id="inputRol"
                      type="text"
                      placeholder="Cellphone"
                      required=""
                      v-model="form.cellphone"
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>
                <div class="mb-3">
                    <input
                      id="inputRol"
                      type="text"
                      placeholder="Rol"
                      required=""
                      v-model="form.role"
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>
                 <div class="mb-3">
                    <input
                      id="inputPass"
                      type="password"
                      placeholder="Password"
                      required=""
                      v-model="form.password"
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>



                  <div class="d-grid gap-2 mt-2">
                    <button
                      @click="signup"
                      class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Sign up
                    </button>
                  </div>

                  <div class="text-center d-flex justify-content-between mt-4">
                   
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.login,
.image {
  min-height: 100vh;
}
.bg-image {
  background-image: url("https://media.istockphoto.com/photos/college-students-with-books-smiling-to-camera-over-grey-wall-picture-id1167992655?k=20&m=1167992655&s=612x612&w=0&h=zXHk2mrnzH2traDJAtVejJRXOfnEPxB7UHiYuhx0wuk=");
  background-size: cover;
  background-position: center center;
}
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form:{
        email:null,
        password:null,
        name:null,
        role:null,
        cellphone:null,
      }
     
    };
  },
   methods: {
    signup() {
      let formData = new URLSearchParams()
      formData.append('email', this.form.email)
      formData.append('password', this.formpassword)
      formData.append('name', this.formname)
      formData.append('cellphone', this.formcellphone)
      formData.append('role', this.formrole)

      axios.post('http://localhost:3000/register', formData, {
                headers: {
                    "Access-Control-Allow-Methods":"POST"
                }
            })
            .then((response)=>{
               localStorage.setItem('token', response.data.token);
                this.$router.push('/home');
            }).catch((error)=>{console.log(error)})
    },
  },
};
</script>
