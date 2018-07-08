import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#auth-comps",
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      axios
        .post("http://webdev-api.loftschool.com/login", this.user)
        .then(Response => {
          if (Response.status === 200) {
            const ttl = Math.floor(Date.now() / 1000 + Response.data.ttl);
            localStorage.setItem("token", Response.data.token);
            localStorage.setItem("ttl", ttl);
            window.location.href = "/admin";
          }
        });
    }
  },
  template: "#auth-component"
});
