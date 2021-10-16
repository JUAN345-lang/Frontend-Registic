<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"></div>

      <div class="col-md-6 bg-light">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">
                <h3 class="display-4">Welcome !</h3>               
                <form>
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
                      id="inputPassword"
                      type="password"
                      placeholder="Password"
                      required=""
                      v-model="form.password"
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>
                
                  <div class="d-grid gap-2 mt-2">
                    <button
                      @click="signin"
                      class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Sign in
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
  background-image: url("https://st.depositphotos.com/1743476/1265/i/600/depositphotos_12658160-stock-photo-smiling-group-of-students-in.jpg");
  background-size: cover;
  background-position: center center;
}
</style>

<script>
import axios from 'axios'
export default {

  data: function() {
      return {
        form : {
          email:null,
          password:null,
        }
        
      };
}
  ,
  methods: {
    signin() {
      let formData = new URLSearchParams()
      formData.append('email', this.form.email)
      formData.append('password', this.form.password)
      axios.post('http://localhost:3000/login', formData, {
                headers: {
                    "Access-Control-Allow-Methods":"POST"
                }
            })
            .then( ( response ) => {
                localStorage.setItem('token', response.data.token);
                this.$router.push('/home');
            }).catch((error)=>{console.log(error)})
    },
  },
};
</script>
