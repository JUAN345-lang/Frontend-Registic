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
                      class="form-control rounded-pill border-0 shadow-sm px-4"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      id="inputPassword"
                      type="password"
                      placeholder="Password"
                      required=""
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>
                  <div class="form-check">
                    <input
                      id="customCheck1"
                      type="checkbox"
                      checked
                      class="form-check-input"
                    />
                    <label for="customCheck1" class="form-check-label"
                      >Remember password</label
                    >
                  </div>
                  <div class="d-grid gap-2 mt-2">
                    <button
                      type="submit"
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
