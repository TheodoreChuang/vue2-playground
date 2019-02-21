new Vue({
  el: "#exercise",
  data: {
    value: "",
    valueEnter: ""
  },
  methods: {
    alert() {
      alert("Hello");
    },
    keydownOnlyEnter(event) {
      this.valueEnter = event.target.value;
    }
  }
});
