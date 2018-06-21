import Vue from "vue";

new Vue({
  el: "#app",
  data: {
    show: false,
    isActive: false
  },
  methods: {
    change() {
      this.isActive = !this.isActive;
      this.show = !this.show;
    }
  }
});
