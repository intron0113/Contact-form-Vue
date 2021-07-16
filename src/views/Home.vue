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
              v-model="picked"
            />男性</label
          >
          <label
            ><input
              type="radio"
              name="sex"
              value="女性"
              v-model="picked"
            />女性</label
          >
          <p>-生年月日-</p>
          <div>
            <select
              id="select_year"
              name="year"
              :value="year"
              @change="selectYear"
              v-model="selected"
            >
              <option
                :value="option.value"
                v-for="option in yearOptions"
                :key="option.value"
              >
                {{ option.text }}
              </option>
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
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selected: { text: '1990(平成2年)', value: '1990' },
      yearOptions: [
        { text: '1945(昭和20年)', value: '1945' },
        { text: '1946(昭和21年)', value: '1946' },
        { text: '1947(昭和22年)', value: '1947' },
        { text: '1948(昭和23年)', value: '1948' },
        { text: '1949(昭和24年)', value: '1949' },
        { text: '1950(昭和25年)', value: '1950' },
        { text: '1951(昭和26年)', value: '1951' },
        { text: '1952(昭和27年)', value: '1952' },
        { text: '1953(昭和28年)', value: '1953' },
        { text: '1954(昭和29年)', value: '1954' },
        { text: '1955(昭和30年)', value: '1955' },
        { text: '1956(昭和31年)', value: '1956' },
        { text: '1957(昭和32年)', value: '1957' },
        { text: '1958(昭和33年)', value: '1958' },
        { text: '1959(昭和34年)', value: '1959' },
        { text: '1960(昭和35年)', value: '1960' },
        { text: '1961(昭和36年)', value: '1961' },
        { text: '1962(昭和37年)', value: '1962' },
        { text: '1963(昭和38年)', value: '1963' },
        { text: '1964(昭和39年)', value: '1964' },
        { text: '1965(昭和40年)', value: '1965' },
        { text: '1966(昭和41年)', value: '1966' },
        { text: '1967(昭和42年)', value: '1967' },
        { text: '1968(昭和43年)', value: '1968' },
        { text: '1969(昭和44年)', value: '1969' },
        { text: '1970(昭和45年)', value: '1970' },
        { text: '1971(昭和46年)', value: '1971' },
        { text: '1972(昭和47年)', value: '1972' },
        { text: '1973(昭和48年)', value: '1973' },
        { text: '1974(昭和49年)', value: '1974' },
        { text: '1975(昭和50年)', value: '1975' },
        { text: '1976(昭和51年)', value: '1976' },
        { text: '1977(昭和52年)', value: '1977' },
        { text: '1978(昭和53年)', value: '1978' },
        { text: '1979(昭和54年)', value: '1979' },
        { text: '1980(昭和55年)', value: '1980' },
        { text: '1981(昭和56年)', value: '1981' },
        { text: '1982(昭和57年)', value: '1982' },
        { text: '1983(昭和58年)', value: '1983' },
        { text: '1984(昭和59年)', value: '1984' },
        { text: '1985(昭和60年)', value: '1985' },
        { text: '1986(昭和61年)', value: '1986' },
        { text: '1987(昭和62年)', value: '1987' },
        { text: '1988(昭和63年)', value: '1988' },
        { text: '1989(平成1年)', value: '1989' },
        { text: '1990(平成2年)', value: '1990' },
        { text: '1991(平成3年)', value: '1991' },
        { text: '1992(平成4年)', value: '1992' },
        { text: '1993(平成5年)', value: '1993' },
        { text: '1994(平成6年)', value: '1994' },
        { text: '1995(平成7年)', value: '1995' },
        { text: '1996(平成8年)', value: '1996' },
        { text: '1997(平成9年)', value: '1997' },
        { text: '1998(平成10年)', value: '1998' },
        { text: '1999(平成11年)', value: '1999' },
        { text: '2000(平成12年)', value: '2000' },
      ],
    };
  },
  computed: {
    // ...mapGetters({
    //   year:state => state.getters.year
    // }),
    picked: {
      get() {
        return this.$store.getters.picked;
      },
      set(value) {
        this.$store.dispatch('pickedSex', value);
      },
    },
    // year: {
    //   get() {
    //     return this.$store.getters.year;
    //   },
    //   set(value) {
    //     this.$store.dispatch('selectYear', value);
    //   },
    // },
    month: {
      get() {
        return this.$store.getters.month;
      },
      set(number) {
        this.$store.dispatch('selectMonth', number);
      },
    },
    day: {
      get() {
        return this.$store.getters.day;
      },
      set(number) {
        this.$store.dispatch('selectDay', number);
      },
    },
  },
  methods: {
    toUsers() {
      this.$router.push('users');
    },
    selectYear(e) {
      this.$store.dispatch('selectYear', e.target.value);
    },
  },
};
</script>
