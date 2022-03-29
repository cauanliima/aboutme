'use strict'
const app = new Vue({
    el: '#app',
    data() { 
        return {
            subpag: "Pessoal",


    }}, // --- End of data --- //

    computed: {

    }, // --- End of computed --- //

    methods: {
    }, // --- End of methods --- //

    /** Called after the Vue app has been created. A good place to put startup code */
    created: function() {
        app.subpage="TOOP"
    }, // --- End of created hook --- //

    /** Called once all Vue component instances have been loaded and the virtual DOM built */
    mounted: function(){
        const app = this  // Reference to `this` in case we need it for more complex functions

    }, // --- End of mounted hook --- //

}) // --- End of app definition --- //

// EOF