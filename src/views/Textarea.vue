<template>
  <div>
    <div class="form">
      <div class="form-header">
        <span class="form-step">step3</span>
        <p>ご相談内容をご記入ださい</p>
      </div>
      <div class="form-main">
        <form action="#">
          <div>
            <p>-ご相談内容-</p>
          </div>
          <textarea
            name="text"
            rows="50"
            cols="100"
            wrap="soft"
            :value="message"
            @input="updateMessage"
          ></textarea>
        </form>
      </div>
    </div>
    <div class="next-button">
      <button @click="toUsers" class="btn" type="reset">前へ戻る ></button>
      <button class="btn" type="submit">次に進む ></button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    updateMessage(e) {
      this.$store.dispatch('updateMessage', e.target.value);
    },
    toUsers() {
      this.$router.push('users');
    },
    toSending() {
      this.$router.push('sending');
    },
  },
};
</script>
<style scope>
textarea {
  margin: 5px 10px;
  height: 500px;
  width: 700px;
  font-size: 18px;
}
</style>
