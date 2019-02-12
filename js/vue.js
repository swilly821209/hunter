Vue.component('person-tooltip', {
  template:'#persontooltip'
});
const app = new Vue({
    el: '#app',
    data: {
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec']
    },
    computed: {
        newtime() {
            let dates = new Date();
            let m = dates.getMonth();
            let mon = this.month[m];
            let date = dates.getDate() + 1;
            return `${mon} ${date}`;
        },
    }
})

