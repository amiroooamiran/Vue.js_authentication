<template>
    <div class="container  py-md-5 py-xl-8">
            <div class="row gy-4 align-items-center">
            <div class="col-12 col-md-6 col-xl-7">
                <div class="d-flex justify-content-center">
                <div class="col-12 col-xl-9">
                    <h1>Welcome to Authentication</h1>
                    <hr class="border-primary-subtle mb-4">
                    <p class="lead mb-5">
                        Thank you for using our authentication system. We're dedicated to providing secure and reliable solutions for your authentication needs.

                        If you find this project useful, please consider visiting our GitHub repository for more information and updates. You can find us at <a href="https://github.com/amiroooamiran">GitHub</a>. <br>

                        <hr>

                        As the creator of this project, I'm committed to its ongoing development and improvement. If you require the expertise of a senior programmer for your projects, I would be delighted to collaborate with you. Feel free to reach out for any inquiries or potential collaborations.
                        <br>
                    </p>
                    <div class="text-start">Thank you for choosing Authentication Project!</div>

                    <div class="text-endx">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-grip-horizontal" viewBox="0 0 16 16">
                        <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    </div>
                    <div class="d-flex bg-white py-1 justify-content-center align-items-center">
                        <div class="d-flex justify-content-between" style="width: 250px;">
                            <a href="https://twitter.com/amirhos_amiran" target="_blank" class="text-decoration-none">
                                <img src="https://img.icons8.com/color/48/twitterx--v1.png" alt="Twitter Icon" width="48" height="48">
                            </a>
                            <a href="https://github.com/amiroooamiran" target="_blank" class="text-decoration-none">
                                <img src="https://img.icons8.com/glyph-neue/48/000000/github.png" alt="GitHub Icon" width="48" height="48">
                            </a>
                            <a href="https://mastodon.social/@amiroamiran" target="_blank" class="text-decoration-none">
                                <img src="https://img.icons8.com/windows/48/mastodon.png" alt="Mastodon Icon" width="48" height="48">
                            </a>
                        </div>
                    </div>

                </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-5">
                <div class="card border-0 rounded-2">
                <div class="card-body p-3 p-md-4 p-xl-5">

                    <div class="row">
                    <div class="col-12">
                        <div class="mb-4">
                        <h3>Sign in</h3>
                        <p>Don't have an account? <router-link to="/singup">Click</router-link></p>
                        </div>
                    </div>
                    </div>

                    <!-- start Form of login -->
                    <form @submit.prevent="submitForm">
                    <div class="row gy-3 overflow-hidden">
                        <div class="col-12">
                        <div class="form-floating mb-3 text-start">
                            <small v-if="errors.wrong_credentials" class="text-danger">{{ errors.wrong_credentials }}</small>
                        </div>
                        <div class="form-floating mb-3 text-start">
                            <input type="username" class="form-control" name="username" id="email" placeholder="name@example.com" v-model="username">
                            <label for="email" class="form-label">Username</label>
                            <small v-if="errors.username" class="text-danger">{{ errors.username }}</small>
                        </div>
                        </div>
                        <div class="col-12">
                        <div class="form-floating mb-3 text-start">
                            <input type="password" class="form-control" name="password" id="password"  placeholder="Password" v-model="password">
                            <label for="password" class="form-label">Password</label>
                            <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>
                        </div>
                        </div>
                        <div class="col-12">
                        </div>
                        <div class="col-12">
                        <div class="d-grid">
                            <button class="btn btn-dark btn-lg" type="submit">Log in now</button>
                        </div>
                        </div>
                    </div>
                    
                    </form>
                    <div class="row">
                    <div class="col-12">
                        <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                        <a href="#!">Forgot password</a>
                        </div>
                    </div>
                    </div>
                    <hr>
                    <div class="row">
                    <div class="col-12">
                        <div class="d-flex gap-2 gap-sm-3 justify-content-center">
                        <a href="#!" class="btn btn-outline-danger bsb-btn-circle bsb-btn-circle-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                            continue with Gmail
                        </a>

                        <a href="#!" class="btn btn-outline-primary bsb-btn-circle bsb-btn-circle-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            continue with facebook
                        </a>
                    </div>



                    </div>
                    </div>
                    <!-- End form of login -->

                </div>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data() {
    return{
        username: "",
        password: "",
        errors:{
            username: "",
            password: "",
            wrong_credentials: ""
        }
    }
  },
  methods: {
    isValidForm(){
        let valid = true;
        if(!this.username) {
            this.errors.username = "The field cannot to blank";
        }
        else {
            this.errors.username = "";
        }

        if(!this.password) {
            this.errors.password = "this field cannot be blank";
        }
        else {
            this.errors.password = "";
        }

        if(this.errors.username || this.errors.password) {
            valid = false;
        }
        return valid;
    },
    submitForm() {
        if(this.isValidForm()){
            const url = '/login/';
            axios.post(url, {username: this.username, password: this.password})
            .then(response =>{
                this.$router.push('/profile')
                this.$store.commit('setToken', response.data);
                this.username = "";
                this.password = "";
            })
            .catch(error => {
                if(error.response.data.non_field_errors) {
                    this.errors.wrong_credentials = error.response.data.non_field_errors.join('');
                }
                else{
                    this.errors.wrong_credentials = "";
                }
            })
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
