var vm = new Vue({
    el: '#app',
    data() {
        return {
            info: "click pidr",
            dat: "10",
            countW: "",
            countL: 0,
            datka: "",
            vi:"vi",
            dimas:"dimas",
            slavik:"slavik",
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
                himsel:"",
                name: "Choose",
                zabil: "",
                propustil: "",
                opponent: "",

            },
            total:{
              viW:"",
              viL:"",
              viGF:"",
              viGA:"",
              dimasW:"",
              dimasL:"",
              dimasGF:"",
              dimasGA:"",
              slavikW:"",
              slavikL:"",
              slavikGF:"",
              slavikGA:"",
            },
            vidimas:{
                result:"",
                vi:"",
                dimas:"",
                viGF:"",
                viGA:""
            },
            vislavik:{
                result:"",
                vi:"",
                slavik:"",
                viGF:"",
                viGA:""
            },
            dimasslavik:{
                result:"",
                dimas:"",
                slavik:"",
                dimasGF:"",
                dimasGA:""
            },
            ob:{},
            count: "",
            oppo: "Vse",
            selected: '10'

        }
    },
    methods: {
        fet: function () {
           fetch('https://kickhard.herokuapp.com/api/get/' + this.obje.name + '?kolvo=' + this.dat + '&oppoName=' + this.oppo + '&datka=' + this.datka)
          //  fetch('http://localhost:8000/api/get/' + this.obje.name + '?kolvo=' + this.dat + '&oppoName=' + this.oppo+'&datka='+this.datka)
                .then(response => response.json())
                .then((myJson) => {
                    this.info = JSON.stringify(myJson);
                    this.countW = 0;
                    this.countL = 0;
                    let obj = JSON.parse(this.info);
                    this.user = [];
                    for (let i = 0; i < obj.length; i++) {
                        this.obje = new Object();
                        this.obje.name = obj[i].himsel;
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
        cli:function(nam1){

          fetch('https://kickhard.herokuapp.com/api/get/' + nam1 + '?kolvo=Vse&oppoName=a&datka=Vse')
           // fetch('http://localhost:8000/api/get/' + nam1 + '?kolvo=Vse&oppoName=a&datka=Vse')
                .then(response => response.json())
                .then((myJson) => {
                    this.info = JSON.stringify(myJson);
                    if(nam1==='vi'){
                    this.vidimas.vi=0;
                    this.vidimas.dimas=0;
                    this.vislavik.vi=0;
                    this.vislavik.slavik=0;
                    this.vidimas.viGF=0;
                    this.vidimas.viGA=0;
                    this.vislavik.viGF=0;
                    this.vislavik.viGA=0;
                    }
                    if(nam1==='dimas'){
                    this.dimasslavik.dimas=0;
                    this.dimasslavik.slavik=0;
                    this.dimasslavik.dimasGF=0;
                    this.dimasslavik.dimasGA=0;
                    this.total.dimasW=0;
                    this.total.dimasL=0;
                    this.total.dimasGF=0;
                    this.total.dimasGA=0;
                        this.total.viW=0;
                        this.total.viL=0;
                        this.total.viGF=0;
                        this.total.viGA=0;
                        this.total.slavikW=0;
                        this.total.slavikL=0;
                        this.total.slavikGF=0;
                        this.total.slavikGA=0;
                    }
                    let obj = JSON.parse(this.info);
                    for (let i = 0; i < obj.length; i++) {
                        this.cliObj = new Object();
                        this.cliObj.name = obj[i].himsel;
                        this.cliObj.opponent = obj[i].opponent;
                        this.cliObj.zabil = obj[i].zabil;
                        this.cliObj.propustil = obj[i].propustil;
                        this.cliObj.result = obj[i].result;
                        if(this.cliObj.name==="vi"&&this.cliObj.opponent==="dimas"){
                        this.vidimas.viGF = this.vidimas.viGF + this.cliObj.zabil;
                        this.vidimas.viGA = this.vidimas.viGA + this.cliObj.propustil;
                    if (this.cliObj.result === "W") {
                        this.vidimas.vi++;
                    }
                    if (this.cliObj.result === "L") {
                            this.vidimas.dimas++;
                    }
                        }
                       else  if(this.cliObj.name==="vi"&&this.cliObj.opponent==="slavik"){
                            this.vislavik.viGF = this.vislavik.viGF + this.cliObj.zabil;
                            this.vislavik.viGA = this.vislavik.viGA + this.cliObj.propustil;
                            if (this.cliObj.result === "W") {
                                this.vislavik.vi++;
                            }
                            if (this.cliObj.result === "L") {
                                this.vislavik.slavik++;
                            }
                        }
                        else  if(this.cliObj.name==="dimas"&&this.cliObj.opponent==="slavik"){
                            this.dimasslavik.dimasGF = this.dimasslavik.dimasGF + this.cliObj.zabil;
                            this.dimasslavik.dimasGA=this.dimasslavik.dimasGA+this.cliObj.propustil;
                            if (this.cliObj.result === "W") {
                                this.dimasslavik.dimas++;
                            }
                            if (this.cliObj.result === "L") {
                                this.dimasslavik.slavik++;
                            }
                        }
                    }

                })
        },
        tot:function(){
            this.total.viW+=this.vidimas.vi+this.vislavik.vi;
            this.total.viL+=this.vidimas.dimas+this.vislavik.slavik;
            this.total.viGF+=this.vidimas.viGF+this.vislavik.viGF;
            this.total.viGA+=this.vidimas.viGA+this.vislavik.viGA;
            this.total.dimasW+=this.vidimas.dimas+this.dimasslavik.dimas;
            this.total.dimasL+=this.vidimas.vi+this.dimasslavik.slavik;
            this.total.dimasGF+=this.vidimas.viGA+this.dimasslavik.dimasGF;
            this.total.dimasGA+=this.vidimas.viGF+this.dimasslavik.dimasGA;
            this.total.slavikW+=this.vislavik.slavik+this.dimasslavik.slavik;
            this.total.slavikL+=this.vislavik.vi+this.dimasslavik.dimas;
            this.total.slavikGF+=this.vislavik.viGA+this.dimasslavik.dimasGA;
            this.total.slavikGA+=this.vislavik.viGF+this.dimasslavik.dimasGF;
      },
        sav: function () {
          fetch('https://kickhard.herokuapp.com/ap/save?name1=' + this.save.igrok1 + '&win1=' + this.save.zabil1 + '&lose1=' + this.save.propustil + '&name2=' + this.save.igrok2)
            //   fetch('http://localhost:8000/ap/save?name1=' + this.save.igrok1 + '&win1=' + this.save.zabil1 + '&lose1=' + this.save.propustil+'&name2='+this.save.igrok2)
            setTimeout(()=>{this.cli(this.vi)},200);
            setTimeout(()=>{this.cli(this.dimas)},200);
            setTimeout(()=>{this.tot()},500);
        }
    },
    created:function() {
        setTimeout(()=>{this.cli(this.vi)},10);
      setTimeout(()=>{this.cli(this.dimas)},10);
        setTimeout(()=>{this.tot()},500);
    }
});