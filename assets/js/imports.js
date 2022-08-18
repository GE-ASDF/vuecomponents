import WeatherComponent from "./components/weather.js";
import FinancialComponent from "./components/financial.js";
import UsdBrl from "./components/usd-brl.js";

Vue.component("WeatherComponent", WeatherComponent);
Vue.component("FinancialComponent", FinancialComponent);
Vue.component("UsdBrl", UsdBrl);

new Vue({
    el: "#app",
    data:{
        
    }
})