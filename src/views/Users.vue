<template>
  <div>
    <div class="form">
      <div class="form-header">
        <span class="form-step">step2</span>
        <p>以下の生命保険に加入されていますか?</p>
      </div>
      <div class="form-main">
        <form action="">
          <div>
            <p>現在生命保険に加入されていますか?</p>
            <label
              ><input
                v-on:change="q2 = !q2"
                type="radio"
                name="insurance-1"
                value="はい"
                v-model="insurance1"
              />はい</label
            >
            <label
              ><input
                v-on:change="q2 = !q2"
                type="radio"
                name="insurance-1"
                value="いいえ"
                v-model="insurance1"
              />いいえ</label
            >
          </div>
          <transition name="fade">
            <div v-if="q2">
              <p>
                現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか?
              </p>
              <label
                ><input
                  v-on:change="q3 = !q3"
                  type="radio"
                  name="insurance-2"
                  value="はい"
                  v-model="insurance2"
                />はい</label
              >
              <label
                ><input
                  v-on:change="q3 = !q3"
                  type="radio"
                  name="insurance-2"
                  value="いいえ"
                  v-model="insurance2"
                />いいえ</label
              >
            </div>
          </transition>
          <transition name="fade">
            <div v-if="q3">
              <p>
                過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をした事がありますか?
              </p>
              <label
                ><input
                  type="radio"
                  name="insurance-3"
                  value="はい"
                  v-model="insurance3"
                />はい</label
              >
              <label
                ><input
                  type="radio"
                  name="insurance-3"
                  value="いいえ"
                  v-model="insurance3"
                />いいえ</label
              >
            </div>
          </transition>
        </form>
      </div>
    </div>
    <div class="next-button">
      <button @click="toHome" class="btn" type="reset">前へ戻る ></button>
      <button @click="toTextarea" class="btn" type="submit">次に進む ></button>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      q2: false,
      q3: false,
    };
  },
  computed: {
    insurance1: {
      get() {
        return this.$store.getters.insurance1;
      },
      set(value) {
        this.$store.dispatch('setInsurance1', value);
      },
    },
    insurance2: {
      get() {
        return this.$store.getters.insurance2;
      },
      set(value) {
        this.$store.dispatch('setInsurance2', value);
      },
    },
    insurance3: {
      get() {
        return this.$store.getters.insurance3;
      },
      set(value) {
        this.$store.dispatch('setInsurance3', value);
      },
    },
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
    toTextarea() {
      this.$router.push('textarea');
    },
  },
};
</script>
<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
