import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      let abc = this.$root.find();
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const persents = (dashOffset / 100) * (100 - this.skillPercents);
      window.addEventListener("scroll", function() {
        const posTop = abc.foo.getBoundingClientRect().top;
        const exactTop = posTop.toFixed();
        console.log(exactTop);
        if (exactTop > 100 && exactTop < 320) {
          circle.style.strokeDashoffset = persents;
        }
      });
    }
  },
  mounted() {
    this.drawCircle();
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
  methods: {
    find() {
      let circle = this.$refs["skills-list"];
      return {
        foo: circle
      };
    }
  },
  template: "#skills-list"
});
