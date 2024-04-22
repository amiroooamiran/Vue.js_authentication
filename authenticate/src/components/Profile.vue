<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div v-if="profile" class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-dark"
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
              <img :src="profile.profile_pic" alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
              <h5 v-if="!editingUsername">{{ profile.user.username }}</h5>
              <input v-if="editingUsername" v-model="newUsername" type="text" class="form-control mb-3" placeholder="Enter new username">
              <p v-if="!editingBio">{{ profile.bio }}</p>
              <textarea v-if="editingBio" v-model="newBio" class="form-control mb-3" rows="3" placeholder="Enter new bio"></textarea>
              <button v-if="!editingUsername" @click="toggleEdit('username')" class="btn btn-secondary">Edit Username</button>
              <button v-if="editingUsername" @click="updateUsername" class="btn btn-primary">Save Username</button>
              <button v-if="!editingBio" @click="toggleEdit('bio')" class="btn btn-secondary">Edit Bio</button>
              <button v-if="editingBio" @click="updateBio" class="btn btn-primary">Save Bio</button>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{{ profile.user.email }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Phone</h6>
                    <p class="text-muted">123 456 789</p>
                  </div>
                </div>
                <h6>Projects</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Recent</h6>
                    <p class="text-muted">Lorem ipsum</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Most Viewed</h6>
                    <p class="text-muted">Dolor sit amet</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start">
                  <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <p>You Don't Have profile here</p>
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
      profile: null,
      error: null,
      editingUsername: false,
      editingBio: false,
      newUsername: '',
      newBio: ''
    }
  },
  methods: {
    fetchProfile() {
      axios.defaults.headers['Authorization'] = `Token ${this.$store.state.token}`;
      const url = '/profile/';
      axios.get(url)
        .then(response =>{
          console.log(response.data)
          this.profile = response.data;
        })
        .catch(error =>{
          console.error('Error fetching profile:', error);
          this.error = 'Failed to fetch profile data';
        });
    },
    toggleEdit(field) {
      if (field === 'username') {
        this.editingUsername = !this.editingUsername;
        if (this.editingUsername) {
          this.newUsername = this.profile.user.username;
        }
      } else if (field === 'bio') {
        this.editingBio = !this.editingBio;
        if (this.editingBio) {
          this.newBio = this.profile.bio;
        }
      }
    },
    updateUsername() {
      axios.defaults.headers['Authorization'] = `Token ${this.$store.state.token}`;
      const url = '/profile/';
      axios.patch(url, { user: { username: this.newUsername } })
        .then(response =>{
          console.log(response.data)
          this.profile.user.username = this.newUsername;
          this.editingUsername = false;
        })
        .catch(error =>{
          console.error('Error updating username:', error);
        });
    },
    updateBio() {
      axios.defaults.headers['Authorization'] = `Token ${this.$store.state.token}`;
      const url = '/profile/';
      axios.patch(url, { bio: this.newBio })
        .then(response =>{
          console.log(response.data)
          this.profile.bio = this.newBio;
          this.editingBio = false;
        })
        .catch(error =>{
          console.error('Error updating bio:', error);
        });
    }
  },
  mounted() {
    this.fetchProfile();
  }
}
</script>

<style scoped lang="scss">

</style>
