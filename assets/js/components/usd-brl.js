export default{
    name:"UsdBrl",
    data(){
        return {
            UsdBrl: {},
        }
    }
    ,
    template: `
    <div class="card usd_brl">
        <div>
            <div class="image-container">
                <img src="./assets/img/usd.png"></img>
            </div>
            <p> 1 dólar em reais: {{UsdBrl}}</p>
        </div>
    </div>
    `,
    methods:{
        usdBrl(){
            fetch("https://api.origamid.dev/exchange/usd")
            .then(r => r.json())
            .then(r => this.UsdBrl = r.rates.BRL.toLocaleString("pt-Br", {
                style:"currency",
                currency:"BRL"
            }));
            }
    },
    created(){
        this.usdBrl();
    }
}