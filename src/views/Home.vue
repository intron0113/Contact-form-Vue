<template>
  <div>
    <div class="form">
      <div class="form-header">
        <span class="form-step">step1</span>
        <p>お客様の情報を入力してください</p>
      </div>
      <div class="form-main">
        <form action="">
          <p>-性別-</p>
          <label
            ><input
              type="radio"
              name="sex"
              value="男性"
              v-model="sex"
            />男性</label
          >
          <label
            ><input
              type="radio"
              name="sex"
              value="女性"
              v-model="sex"
            />女性</label
          >
          <p>-生年月日-</p>
          <div>
            <select id="year" v-model="year">
              <option v-for="i in 100" :value="i + 1920" :key="i">{{
                (i + 1920) | japaneseCalendar
              }}</option>
            </select>
            <span>年</span>

            <select id="select_month" name="month" v-model.number="month">
              <option v-for="n in 12" v-bind:key="n">{{ n }}</option>
            </select>
            <span>月</span>

            <select id="select_day" name="day" v-model.number="day">
              <option v-for="n in 31" v-bind:key="n">{{ n }}</option>
            </select>
            <span>日</span>
          </div>
        </form>
      </div>
    </div>
    <div class="next-button">
      <button @click="toUsers" class="btn" type="submit">次に進む ></button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    sex: {
      get() {
        return this.$store.getters.sex;
      },
      set(value) {
        this.$store.dispatch('setSex', value);
      },
    },
    year: {
      get() {
        return this.$store.getters.year;
      },
      set(value) {
        this.$store.dispatch('setYear', value);
      },
    },
    month: {
      get() {
        return this.$store.getters.month;
      },
      set(number) {
        this.$store.dispatch('setMonth', number);
      },
    },
    day: {
      get() {
        return this.$store.getters.day;
      },
      set(number) {
        this.$store.dispatch('setDay', number);
      },
    },
  },
  filters: {
    japaneseCalendar(y) {
      let result;
      if (y > 2018) {
        result = `${y} (令和${y - 2018}年)`;
      } else if (y > 1988) {
        result = `${y} (平成${y - 1988}年)`;
      } else if (y > 1925) {
        result = `${y} (昭和${y - 1925}年)`;
      } else if (y > 1911) {
        result = `${y} (大正${y - 1911}年)`;
      }
      return result;
    },
  },
  methods: {
    toUsers() {
      this.$router.push('users');
    },
  },
};
</script>
