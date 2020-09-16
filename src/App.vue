<template>
  <section id="app" class="section">
          <div class="section has-text-centered">
            <h1 class="title">Contact Form </h1>
          </div>
          <ContactForm>
          </ContactForm>
    
  </section>
</template>

<script>
import ContactForm from './components/ContactForm.vue'

export default {
  name: 'App',
  components: {
    ContactForm
  }
}
</script>

<style>
#app {
  height: 100vh;
  /* background-image: url('~@/assets/contact-form-background.jpg'); */
}
</style>
