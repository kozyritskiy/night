import Vue from "vue";

const skill = {
  template: "#skill",
  data: function() {
    return {
      dash: 251
    };
  },
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const persents = (251 / 100) * (100 - this.skillPercents);

      circle.style.strokeDashoffset = persents;
      // this.dash = 100;
      console.log(persents);
      console.log(this.dash);
    },
    handleScroll() {
      const height = document.documentElement.clientHeight / 2;
      const el = document.getElementById("myskill");
      console.log("scroll: " + window.pageYOffset);

      console.log("positionTop: " + el.getBoundingClientRect().top);
      console.log("visota: " + height);
      if (height > el.getBoundingClientRect().top) {
        this.dash = 100;
        this.drawCircle();
      }
    }
  },
  mounted() {
    // this.drawCircle();
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../../data/skills.json");
    this.skills = data;
  },
  template: "#skills-list"
});
