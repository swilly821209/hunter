const app = new Vue({
    el: '#app',
    data: {
        month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec"]
    },
    computed: {
        newtime() {
            var dates = new Date();
            var m = dates.getMonth();
            let mon = this.month[m]
            var date = dates.getDate() + 1;
            return `${mon} ${date}`
        },
    }
})

