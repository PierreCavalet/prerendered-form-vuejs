Vue.component('my-form', {
  data: function () {
    return {
      email: '',
      firstName: '',
      lastName: '',
      previousFocusId: null
    }
  },
  created: function () {
    // retrieve previous values and previous focus
    var firstNameElement = document.getElementById('firstName')
    var lastNameElement = document.getElementById('lastName')
    var emailElement = document.getElementById('email')
    this.previousFocusId = document.activeElement.id

    // set previous values in the new fields before mounting the component, so there is no glitch
    if (firstNameElement) {
      this.firstName = firstNameElement.value
    }
    if (lastNameElement) {
      this.lastName = lastNameElement.value
    }
    if (emailElement) {
      this.email = emailElement.value
    }
  },
  mounted: function () {
    // set the focus on the previously captured focus
    if (this.previousFocusId) {
      document.getElementById(this.previousFocusId).focus()
    }
  },
  template: `
    <div>
      <h1>Vue component form</h1>
      <form>
        <div>
          <label for="firstName">First name</label>
          <input v-model="firstName" id="firstName" name="firstName" />
        </div>
        <div>
          <label for="lastName">Last name</label>
          <input v-model="lastName" id="lastName" name="lastName" />
        </div>
        <div>
          <label for="email">Email</label>
          <input v-model="email" id="email" name="email" />
        </div>
      </form>
    </div>
  `
})

new Vue({
  el: '#app',
  template: '<my-form></my-form>'
})