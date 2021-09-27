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
                      id="inputEmail"
                      type="email"
                      placeholder="Email address"
                      required=""
                      autofocus=""
                      class="form-control rounded-pill border-0 shadow-sm px-4"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      id="inputPassword"
                      type="text"
                      placeholder="Name"
                      required=""
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>
                 
                  <div class="mb-3">
                    <input
                      id="inputPassword"
                      type="text"
                      placeholder="Cellphone"
                      required=""
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>
                <div class="mb-3">
                    <input
                      id="inputPassword"
                      type="text"
                      placeholder="Rol"
                      required=""
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>



                  <div class="d-grid gap-2 mt-2">
                    <button
                      type="submit"
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
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
