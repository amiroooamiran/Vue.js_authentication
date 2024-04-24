<template>
    <div class="container py-md-5 py-xl-8">
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
                    <h3>Reset Password</h3>
                    <p>Don't have an account? <router-link to="/signup">Click here to sign up</router-link></p>
                  </div>
                </div>
              </div>
  
              <!-- Password reset form -->
              <form @submit.prevent="resetPassword">
                <div class="row gy-3 overflow-hidden">
                  <div class="col-12">
                    <div class="form-floating mb-3 text-start">
                      <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
                    </div>
                    <div class="form-floating mb-3 text-start">
                      <input type="email" class="form-control" name="email" id="email" placeholder="mail@example.com" v-model="email">
                      <label for="email" class="form-label">Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <!-- Additional fields if needed -->
                  </div>
                  <div class="col-12">
                    <div class="d-grid">
                      <button class="btn btn-dark btn-lg" type="submit">Reset Password</button>
                    </div>
                  </div>
                </div>
              </form>
              <!-- End of password reset form -->
  
              <!-- Success message -->
              <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
                {{ successMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: 'ResetPassword',
    data() {
      return {
        email: '',
        errors: {},
        successMessage: '' // New variable to store success message
      }
    },
    methods: {
      resetPassword() {
        this.errors = {}; // Reset errors before submitting
        axios.post('/reset_password/', { email: this.email })
          .then(response => {
            this.successMessage = response.data.message; // Set success message
            this.email = ''; // Clear the email field
          })
          .catch(error => {
            if (error.response && error.response.data) {
              this.errors = error.response.data;
            } else {
              console.error(error);
              // Handle error, display error message to the user
            }
          });
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  /* Add your CSS styles here if needed */
  </style>
  