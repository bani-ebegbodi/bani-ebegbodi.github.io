var computed = new Vue({
el: '#compute',
data: {
firstName: "Banibe",
lastName: "Ebegbodi"
},
computed: {
    fullName() {
        return this.firstName + ' ' + this.lastName
    }
}
})