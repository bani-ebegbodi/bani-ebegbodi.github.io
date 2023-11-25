Vue.component('toast', {
    props: {
        toastopinion: String,
        bgcolor: String
    },
    template: `<div><button v-on:click="checkToast">Check the Toast</button>
    <h3 :style="{backgroundColor: bgcolor}">The toast is {{toastState}}</h3>
    <h3>{{toastopinion}}</h3></div>`,
    data() {
        return {
            toastState: "burnt"
        }
    },
    methods: {
        checkToast() {
            this.toastState = "perfect"
        }
    }
}) //component

var co = new Vue({
    el: '#co',
    data: {
   toastState: "burnt"
    },
     methods: {
        checkToast(){
           this.toastState = "perfect"
        }
    }
}) //co