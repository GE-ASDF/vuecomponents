export default{
    name:"WeatherComponent",
    data(){
        return {
            temperaturaMaxima: {},
        }
    }
    ,
    template: `
    <div class="card weather">
        <div>
            <div class="image-container">
                <img src="./assets/img/weather.png"></img>
            </div>
            <p> Rio de Janeiro, máxima de: {{temperaturaMaxima}}° </p>
        </div>
    </div>
    `,
    methods:{
        weather(){
            fetch("https://api.origamid.dev/weather/rio")
            .then(r => r.json())
            .then(r => this.temperaturaMaxima = r.consolidated_weather[0].max_temp.toFixed(0));
        }
    },
    created(){
        this.weather();
    }
}