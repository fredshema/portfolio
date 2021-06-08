<template>
  <div class="login-page">
    <div class="container">
      <div id="login">
        <b-row no-gutters align-h="center" align-v="center">
          <b-img :src="logo" class="image" />
        </b-row>
        <b-form @submit.prevent="check">
          <fieldset class="clearfix">
            <!-- <p>
              <span>
                <b-icon-person-fill />
              </span>
              <b-input
                v-model="username"
                @blur="checkBlur('username')"
                @focus="checkFocus('username')"
                required
              />
            </p>
            <p>
              <span> <b-icon-lock-fill /> </span
              ><b-input
                :type="revealPassword ? 'text' : 'password'"
                v-model="password"
                @blur="checkBlur('password')"
                @focus="checkFocus('password')"
                required
              />
            </p> -->
            <b-row no-gutters class="pt-2" v-if="!$auth.isLoading">
              <b-button variant="danger" type="submit" class="w-100 small">
                SIGN YOUR ACCOUNT
              </b-button>
            </b-row>
          </fieldset>
        </b-form>
      </div>
      <!-- end login -->
    </div>
  </div>
</template>

<script>
import info from "../../../info";
export default {
  name: "login",
  data() {
    return {
      username: "username",
      password: "password",
      logo: info.large_logo,
    };
  },
  computed: {
    disableLoggin() {
      if (!this.username || this.username == "username") return true;
      if (!this.password || this.password == "password") return true;
      return false;
    },
    revealPassword() {
      if (this.password == "password") return true;
      return false;
    },
  },
  mounted() {},
  methods: {
    check() {
      if (this.$auth.loading) return;
      if (!this.$auth.isAuthenticated) this.login();
    },
    async login() {
      this.$auth.loginWithRedirect();
    },
    checkBlur(val) {
      if (!this[val]) this.$set(this, val, val);
    },
    checkFocus(val) {
      if (this[val] == val) this.$set(this, val, "");
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  border: none;
  font-size: 14px;
  line-height: 1.5em;
  padding: 0;
  -webkit-appearance: none;
}

.image {
  max-width: 200px;
}

.clearfix {
  *zoom: 1;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}

.container {
  left: 50%;
  position: fixed;
  top: 42%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: auto;
}

#login {
  width: 300px;
}

#login form {
  span {
    background-color: #363b41;
    border-radius: 3px 0px 0px 3px;
    color: #eee;
    display: block;
    float: left;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 50px;
  }

  input[type="text"],
  input[type="password"] {
    background-color: #3b4148;
    border-radius: 0px 3px 3px 0px;
    color: #eee;
    margin-bottom: 1em;
    padding: 0 16px;
    width: 250px;
    height: 50px;
  }
}
</style>