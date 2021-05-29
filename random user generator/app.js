const app = Vue.createApp({ //:class="gender" here applies the css class "male" or "female" to the elements based on the gender value returned from data()
    template: `<img :class="gender" v-bind:src="picture" alt="img could not load"/>
    <h1>Hello {{firstName}} {{lastName}}</h1>
    <h2>Email: {{email}}
    <button v-on:click="getNewUser" :class="gender">Get Random User</button>`,
    data(){
        return {
            firstName: 'Mark',
            lastName: 'Kifflom',
            email: 'mark@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/14.jpg'
        }
    },
    methods: {
        async getNewUser(){
            const res = await fetch('https://randomuser.me/api/')
            const {results}= await res.json(); //pulls the "results" object out of this response json
            let user = results[0]
            this.firstName = user.name.first
            this.lastName = user.name.last
            this.email = user.email
            this.gender =   user.gender
            this.picture = user.picture.large
        }
    }
})

app.mount('#app');