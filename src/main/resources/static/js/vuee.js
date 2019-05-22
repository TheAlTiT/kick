

Vue.component('topLeagues',{
    props:['tops','sport','idsh','go','top'],
    template:
`<div>
  <div v-bind:tops="tops" v-bind:idsh="idsh" v-bind:top="top" v-bind:sport="sport" v-for="league in tops" v-bind:key="league.leagueName" v-bind:id="idsh">
  <li scope="row" v-if="league.sportId==sport" v-on:click="$emit('click',$event)" > {{league.leagueName}}</li>
    </div>   
   <slot></slot>
</div>
`,        
        
        
    data:function () {
        return{
            tops:this.tops,
            sport:this.sport,
            idsh:this.idsh,
            top:this.top
           
        }
    }
})


var vm=new Vue({
    el:'#app',
    data(){
        return{
        topLeagues:[],
            notTopLeagues:[],
            objectSportIdLeagueName:{
            sportId:"",
            leagueName:"",
                leagueId:""
            },
            json:"",
            sports:{//29-soccer,3-baseball,4-basketball,39-ausfoo,18-handball,33-tennis,19-hockey
                soccer:29,
                baseball:3,
                basketball:4,
                handball:18,
                tennis:33,
                hockey:19
            },
            ids:{
            soccTop: 'soccTop',
            soccMore:'soccMore',
            basTop: 'basTop',
            basMore: 'basMore',
              hockTop: 'hockTop',
           hockMore: 'hockMore',
           baseTop: 'baseTop',
           handTop: 'handTop',
           handkMore: 'handMore' 
            },
            forClickLeague:{
            leagueName:"",
                sportId:"",
                leagueId:""
            },
            isActive:{
            sport:true,
                socc:false,
                soccMore:true,
                display:true,
                bas:false,
                basMore:true,
                 hock:false,
                hockMore:true,
                base:false,
                hand:false,
                handMore:true
            }
        }
    }, methods:{
        topLeaguesArrTrue:function(trfal){
         //  fetch("http://localhost:8000/api/topLeague/"+trfal+"/").then(response=>response.json())
           fetch("https://mysidebets.herokuapp.com/api/topLeague/"+trfal+"/").then(response=>response.json())
                .then((myJson)=> {
                    let bool=false;
                    this.json = JSON.stringify(myJson);
                    let obj = JSON.parse(this.json);
                    this.topLeagues = [];
                    for (let i = 0; i < obj.length; i++) {
                        this.objectSportIdLeagueName = new Object();
                        this.objectSportIdLeagueName.sportId = obj[i].sportId;
                        this.objectSportIdLeagueName.leagueName = obj[i].leagueName;
                        this.objectSportIdLeagueName.leagueId = obj[i].leagueId;
                        if(trfal==true)
                        this.topLeagues.push(this.objectSportIdLeagueName);
                        else if(trfal==false)
                       this.notTopLeagues.push(this.objectSportIdLeagueName);
                    }
                })
        },
        go:function (event,topNotTop) {
        this.forClickLeague.leagueName=event.target.innerText;
        if(topNotTop=='top'){
        this.topLeagues.forEach(entry=>{
            if(entry.leagueName==this.forClickLeague.leagueName){
                this.forClickLeague.leagueId=entry.leagueId;
                this.forClickLeague.sportId=entry.sportId;
            }
        })}
        else if(topNotTop=='notTop'){
         this.notTopLeagues.forEach(entry=>{
                if(entry.leagueName==this.forClickLeague.leagueName){
                    this.forClickLeague.leagueId=entry.leagueId;
                    this.forClickLeague.sportId=entry.sportId;
                }
            })}
         //   window.open("http://localhost:8000/Sport/"+this.forClickLeague.sportId+"/League/"+this.forClickLeague.leagueId+"/", '_self');
           window.open("https://mysidebets.herokuapp.com/Sport/"+this.forClickLeague.sportId+"/League/"+this.forClickLeague.leagueId+"/", '_self');

        //window.open("http://localhost:8000/Sport/"+this.topLeagues.length);
  },
    unhide:function (sports) {
        if(sports=='soc'){
            if(this.isActive.socc==true)
            this.isActive.socc=false;
            else
                this.isActive.socc=true;
                }
        else if(sports=='socMore'){
                if(this.isActive.soccMore==true)
                this.isActive.soccMore=false;
            else
                this.isActive.soccMore=true;
                }
        else if(sports=='bas'){
            if(this.isActive.bas==true)
            this.isActive.bas=false;
            else
                this.isActive.bas=true;
                }
        else if(sports=='basMore'){
                if(this.isActive.basMore==true)
                this.isActive.basMore=false;
            else
                this.isActive.basMore=true;
                }
        else if(sports=='hock'){
            if(this.isActive.hock==true)
            this.isActive.hock=false;
            else
                this.isActive.hock=true;
                }
        else if(sports=='hockMore'){
                if(this.isActive.hockMore==true)
                this.isActive.hockMore=false;
            else
                this.isActive.hockMore=true;
                }
        else if(sports=='base'){
            if(this.isActive.base==true)
            this.isActive.base=false;
            else
                this.isActive.base=true;
                }
         else if(sports=='hand'){
            if(this.isActive.hand==true)
            this.isActive.hand=false;
            else
                this.isActive.hand=true;
                }
        else if(sports=='handMore'){
                if(this.isActive.handMore==true)
                this.isActive.handMore=false;
            else
                this.isActive.handMore=true;
                }        
        }
       
      },
    created:function () {
        //setTimeout(()=>{this.topLeaguesArrTrue(true)},250);
        setTimeout(()=>{this.topLeaguesArrTrue(false)},350);
        setTimeout(()=>{this.topLeaguesArrTrue(true)},450);
      }

})

