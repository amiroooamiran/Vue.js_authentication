<template>
    <div class="container py-md-5 py-xl-8">
      <div class="row gy-4 align-items-center">
        <div class="col-12 col-md-6 col-xl-7">
          <h1>User Profile</h1>
          <div v-if="profile">
            <p>Username: {{ profile.user.username }}</p>
            <p>Email: {{ profile.user.email }}</p>
            <!-- Display other profile fields as needed -->
          </div>
          <div v-else>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: 'Profile',
    data() {
      return {
        profile: null, // Initialize profile as null
        error: null,   // Initialize error as null
      }
    },
    methods: {
      fetchProfile() {
        axios.defaults.headers['Authorization'] = `Token ${this.$store.state.token}`;
        const url = '/profile/';
        axios.get(url)
          .then(response =>{
            console.log(response.data)
            this.profile = response.data; // Update profile data
          })
          .catch(error =>{
            console.error('Error fetching profile:', error);
            this.error = 'Failed to fetch profile data'; // Update error message
          });
      }
    },
    mounted() {
      this.fetchProfile();
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  
  </style>
  