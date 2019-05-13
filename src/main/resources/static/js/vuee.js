var vm = new Vue({
    el: '#app',
    data() {
        return {
            info: "click pidr",
            dat: "10",
            countW: "",
            countL: 0,
            user: [],
            obje: {
                name: "Choose",
                zabil: "",
                propustil: "",
                opponent: "",
                result: ""
            },
            count: "",
            oppo: "Vse",
            selected: '10'

        }
    },
    methods: {
        fet: function () {
            fetch('http://localhost:9000/api/get/' + this.user.name + '?kolvo=' + this.dat + '&oppoName=' + this.oppo)
                .then(response => response.json())
                .then((myJson) => {
                    this.info = JSON.stringify(myJson);
                    this.countW = 0;
                    this.countL = 0;
                    var obj = JSON.parse(this.info);
                    this.user = [];
                    for (let i = 0; i < obj.length; i++) {
                        this.obje = new Object();
                        this.obje.name = obj[i].himself;
                        this.obje.zabil = obj[i].zabil;
                        this.obje.propustil = obj[i].propustil;
                        this.obje.opponent = obj[i].opponent;
                        this.obje.result = obj[i].result;
                        this.user.push(this.obje);
                        if (this.obje.result === "W") {
                            this.countW++;
                        }
                        if (this.obje.result === "L") {
                            this.countL++;
                        }
                    }

                })
        }
    }
});