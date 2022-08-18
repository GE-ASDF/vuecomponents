export default{
    name:"FinancialComponent",
    data(){
        return {
            financialApple: {},
        }
    }
    ,
    template: `
    <div class="card financial">
        <div>
            <div class="image-container">
                <img src="./assets/img/market.png">
            </div>
            <p> Valor de mercado da Apple: {{financialApple}}</p>
        </div>
    </div>
    `,
    methods:{
        financial(){
            fetch("https://api.origamid.dev/stock/aapl/quote")
            .then(r => r.json())
            .then(r => this.financialApple = r.marketCap.toLocaleString("pt-Br", {
                style:"currency",
                currency:"BRL"
            }));
        }
    },
    created(){
        this.financial();
    }
}