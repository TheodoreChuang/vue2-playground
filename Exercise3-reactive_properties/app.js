new Vue({
  el: "#exercise",
  data: {
    value: 0
  },
  computed: {
    result() {
      return this.value <= 37 ? "not there yet" : "yay, you did it";
    }
  },
  watch: {
    result() {
      setTimeout(() => {
        this.value = 0;
      }, 1500);
    }
  }
});
