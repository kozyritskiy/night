import Vue from "vue";

let sliderLeft = {
  template: "#slider-left",
  props: {
    work: Object
  }
};

let sliderRight = {
  template: "#slider-right",
  props: {
    work: Object
  }
};

let sliderDown = {
  template: "#slider-down",
  props: {
    works: Array,
    currentIndex: Number
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    },
    getImageDown() {
      let worksArray = [...this.works];
      let lastItem = worksArray[worksArray.length - 1];
      worksArray.unshift(lastItem);
      worksArray.pop();

      return worksArray[this.currentIndex];
    }
  }
};

let sliderUp = {
  template: "#slider-up",
  props: {
    works: Array,
    currentIndex: Number
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    },
    getImageUp() {
      let worksArray = [...this.works];
      worksArray.push(worksArray[0]);
      worksArray.shift();

      return worksArray[this.currentIndex];
    }
  }
};

new Vue({
  el: "#slider-component",
  components: {
    sliderLeft,
    sliderRight,
    sliderDown,
    sliderUp
  },
  data: {
    works: [],
    currentWork: {},
    currentIndex: 0
  },
  watch: {
    currentIndex(value) {
      let worksAmount = this.works.length - 1;
      if (value > worksAmount) {
        this.currentIndex = 0;
      }
      if (value < 0) {
        this.currentIndex = worksAmount;
      }
      console.log(value);
      this.currentWork = this.works[value];
    }
  },
  created() {
    this.works = require("../../../data/works.json");
    this.currentWork = this.works[0];
  },
  methods: {
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex = this.currentIndex + 1;
          break;
        case "prev":
          this.currentIndex = this.currentIndex - 1;
          break;
      }
      console.log(direction);
    }
  },
  template: "#slider"
});
