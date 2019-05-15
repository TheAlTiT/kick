var vm = new Vue({
    el: '#app',
    data() {
        return {
            info: "click pidr",
            dat: "10",
            countW: "",
            countL: 0,
            datka: "",
            cliObj:{
              result:"",
              zabil:"",
              propustil:""
            },
            save: {
                igrok1: "Player1",
                igrok2: "Player2",
                zabil1: "GF",
                propustil: "GA"
            },
            user: [],
            obje: {
                name: "Choose",
                zabil: "",
                propustil: "",
                opponent: "",

            },
            vidimas:{
                result:"",
              vi:"",
              dimas:"",
                viGF:"",
                viGA:""
            },
            count: "",
            oppo: "Vse",
            selected: '10'

        }
    },
    methods: {
        fet: function () {
            fetch('https://kickhard.herokuapp.com/api/get/' + this.obje.name + '?kolvo=' + this.dat + '&oppoName=' + this.oppo + '&datka=' + this.datka)
            // fetch('http://localhost:8000/api/get/' + this.obje.name + '?kolvo=' + this.dat + '&oppoName=' + this.oppo+'&datka='+this.datka)
                .then(response => response.json())
                .then((myJson) => {
                    this.info = JSON.stringify(myJson);
                    this.countW = 0;
                    this.countL = 0;
                    let obj = JSON.parse(this.info);
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
        cli:function(nam1,nam2){
            fetch('https://kickhard.herokuapp.com/api/get/' + nam1 + '?kolvo=Vse&oppoName=' + nam2 + '&datka=Vse')
                .then(response => response.json())
                .then((myJson) => {
                    this.info = JSON.stringify(myJson);
                    this.vidimas.vi=0;
                    this.vidimas.dimas=0;
                    let obj = JSON.parse(this.info);
                    this.user = [];
                    for (let i = 0; i < obj.length; i++) {
                        this.cliObj = new Object();
                        this.cliObj.zabil = obj[i].zabil;
                        this.cliObj.propustil = obj[i].propustil;
                        this.cliObj.result = obj[i].result;
                    if (this.cliObj.result === "W") {
                        this.vidimas.vi++;
                        this.vidimas.viGF++;
                    }
                    if (this.cliObj.result === "L") {
                        this.vidimas.dimas++;
                        this.vidimas.viGA++;
                    }

                    }
                })
        },
        sav: function () {
           // fetch('https://kickhard.herokuapp.com/ap/save?name1=' + this.save.igrok1 + '&win1=' + this.save.zabil1 + '&lose1=' + this.save.propustil + '&name2=' + this.save.igrok2)
               fetch('http://localhost:8000/ap/save?name1=' + this.save.igrok1 + '&win1=' + this.save.zabil1 + '&lose1=' + this.save.propustil+'&name2='+this.save.igrok2)
            cli('vi','dimas');

        }
    }
});