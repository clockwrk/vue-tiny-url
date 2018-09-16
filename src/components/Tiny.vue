<template>
  <form id="tiny-form" class="tiny" @submit="onSubmit" >
    <div class="input-group mb-3">
      <b-form-input v-model="form.longURL"
                    type="text"
                    placeholder="Enter a long url"
                    class="form-control"></b-form-input>
      <div class="input-group-append">
        <b-button class="btn btn-outline-secondary"
                  type="submit">SUBMIT</b-button>
      </div>
    </div>
  </form>
</template>

<script>
// import Vue from 'vue'
// import Component from 'vue-class-component'
//
// export default Component({})(
//   class Tiny extends Vue {
//     longURL = '';
//
//     onSubmit () {
//       console.log('Clicked form')
//     }
//   }
// )

var tiny = {
  // el: '#tiny-form',
  name: 'tiny',
  data: function () {
    return {
      form: {
        longURL: '' }
    }
  },
  methods: {
    onSubmit: function (evt) {
      evt.preventDefault()
      console.log('Clicked form', this.form.longURL)
    }
  }
}
export default tiny
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.tiny{
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="text"]{
  width: 70%;
}

button[type="submit"]{
  display: block;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #35495E;
}
</style>
