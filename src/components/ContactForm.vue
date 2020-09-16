<template>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-centered is-4">
            <b-field>
                <b-input type="email" placeholder="Email" v-model="email" required></b-input>
            </b-field>
            <b-field>
                <b-input placeholder="First Name" v-model="first_name" required></b-input>
            </b-field>
            <b-field>
                <b-input placeholder="Last Name" v-model="last_name" required></b-input>
            </b-field>
            <b-field>
                <b-input placeholder="Linkedin" v-model="linkedin"></b-input>
            </b-field>
            <b-field>
                <b-input placeholder="Twitter" v-model="twitter"></b-input>
            </b-field>
            <b-field>
                <b-input placeholder="Subject" v-model="subject" required></b-input>
            </b-field>
            <b-field>
                <b-input placeholder="Message" maxlength="200" type="textarea"></b-input>
            </b-field>
            <b-field>
                <b-button native-type="submit" class="is-fullwidth" size="is-medium" type="is-primary" :disabled="!disabled" v-on:click="submit">
                    <b-icon icon="send"></b-icon>
                </b-button>
            </b-field>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>

<script>
    import gql from "graphql-tag";
    import { InMemoryCache } from "apollo-cache-inmemory";

    const ADD_CONTACT = gql`
        mutation addContact(
            $email: String!
            $first_name: String!
            $last_name: String!
            $linkedin: String!
            $twitter: String!
            $subject: String!
            $message: String!
        ) {
            insert_contacts(
            objects: [
                {
                    email: $email
                    first_name: $first_name
                    last_name: $last_name
                    linkedin: $linkedin
                    twitter: $twitter
                    subject: $subject
                    message: $message
                }
            ]
            ) {
            returning {
                id
            }
            }
        }
        `;

    export default {
        computed: {
            disabled: function() {
                return this.email && this.first_name && this.last_name && this.subject
            }
        },
        data() {
            return {
                email: '',
                first_name: '',
                last_name: '',
                linkedin: '',
                twitter: '',
                subject: '',
                message: ''
            }
        },
        appolo: {},
        methods: {
            submit() {
                console.log("clicked")
                 const { email, first_name, last_name, linkedin, twitter, subject, message } = this.$data;
                 this.$apollo.mutate({
                    mutation: ADD_CONTACT,
                    variables: {
                        email,
                        first_name,
                        last_name,
                        linkedin,
                        twitter,
                        subject,
                        message
                    }
                });
            }
        }
    }
</script>