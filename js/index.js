Vue.component('person-tooltip', {
    template: '#persontooltip'
});
const app = new Vue({
    el: '#app',
    data: {
        toggle: false,
    },
    computed: {
        newtime() {
            let dates = new Date();
            let nowMonth = dates.getMonth();
            let enMonth = ['Jan', 'Feb', 'Mar', 'Apr',
                           'May', 'Jun', 'Jul', 'Aug',
                           'Spt', 'Oct', 'Nov', 'Dec'];
            let mon = enMonth[nowMonth];
            let date = dates.getDate() + 1;
            return `${mon} ${date}`;
        },
    },
    methods: {
        start() {
            this.toggle = !this.toggle;
        }
    },
})

