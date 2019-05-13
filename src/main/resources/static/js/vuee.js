var vm = new Vue({
    el: '#app',
    data() {
        return {
            info: "click pidr",
            dat: "10",
            countW: "",
            countL: 0,
            datka:"",
            save:{
                igrok1:"Player1",
                igrok2:"Player2",
                zabil1:"GF",
                propustil: "GA"
            },
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
          // fetch('http://localhost:8000/api/get/' + this.user.name + '?kolvo=' + this.dat + '&oppoName=' + this.oppo+'&datka='+this.datka)
           fetch('https://kickhard.herokuapp.com/api/get/' + this.obje.name + '?kolvo=' + this.dat + '&oppoName=' + this.oppo+'&datka='+this.datka)
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
        },
        sav:function () {
          fetch('https://kickhard.herokuapp.com/ap/save?name1=' + this.save.igrok1 + '&win1=' + this.save.zabil1 + '&lose1=' + this.save.propustil+'&name2='+this.save.igrok2)
        //  fetch('http://localhost:8000/ap/save?name1=' + this.save.igrok1 + '&win1=' + this.save.zabil1 + '&lose1=' + this.save.propustil+'&name2='+this.save.igrok2)





        }
    }
});