import React from "react";
import rain from '../assets/some_rain.png';
import sun from '../assets/some_sun.png';
import cloud from '../assets/some_clouds.png';
import cookie from '../assets/cookie.png'

const Weather = () => {

    const [cookies, setCookies] = useState("");

    const acceptCookies = () => {
        const element = document.querySelector("#cookies");
        element.remove();
        const newList = cookies.filter((todo) => todo.id !== id);
        setTodoList(newList);
    }
    
    const grads = [24, 18, 27, 19, 21, 16, 26, 21];
    
    const result = [
        document.querySelector("#grad1"),
        document.querySelector("#grad2"),
        document.querySelector("#grad3"),
        document.querySelector("#grad4"),
        document.querySelector("#grad5"),
        document.querySelector("#grad6"),
        document.querySelector("#grad7"),
        document.querySelector("#grad8"),
    ];
    
    
    const changeGrads=(...ids) => {
        for (let i = 0; i < ids.length; i++) {
            let id = ids[i];
        grads[id]= grads[id]*9/5+32;
        result[id].textContent = grads[id] + "°"
        }
    }

    return(
        <div>
            <div class="container">

{/* <!-- nav --> */}

<nav class="d-flex j-between">
    <h1>DojoWeather </h1>
    <div class="cities d-flex j-between">
        <h3 onclick="alert('Loading weather report...')">Burbank</h3>
        <h3 onclick="alert('Loading weather report...')">Chicago</h3>
        <h3 onclick="alert('Loading weather report...')">Dallas</h3>
    </div>
</nav>

{/* <!-- main --> */}

<main>

    <div class="city-displayed d-flex j-between">
        <h2>San Jose</h2>
        <div class="d-flex">
            <p>show temperature in</p>
            <select onchange="changeGrads(0,1,2,3,4,5,6,7)" >
                <option>°C</option>
                <option>°F</option>
            </select>
        </div>
    </div>

    {/* <!-- days displayed --> */}

    <div class="days d-flex j-between">

        <div class="column">
            <h2>Today</h2>
            <img src={rain} alt="rain"/>
            <p>some rain</p>
            <div class="grads d-flex j-between">
                <h3 id="grad1">24°</h3>
                <h3 id="grad2">18°</h3>
            </div>
        </div>

        <div class="column">
            <h2>Tomorrow</h2>
            <img src={sun} alt="sun"/>
            <p>some sun</p>
            <div class="grads d-flex j-between">
                <h3 id="grad3">27°</h3>
                <h3 id="grad4">19°</h3>
            </div>
        </div>

        <div class="column">
            <h2>Friday</h2>
            <img src={cloud} alt="clouds"/>
            <p>some clouds</p>
            <div class="grads d-flex j-between">
                <h3 id="grad5">21°</h3>
                <h3 id="grad6">16°</h3>
            </div>
        </div>

        <div class="column">
            <h2>Saturday</h2>
            <img src={sun} alt="sun"/>
            <p>some sun</p>
            <div class="grads d-flex j-between">
                <h3 id="grad7">26°</h3>
                <h3 id="grad8">21°</h3>
            </div>
        </div>

    </div>

    {/* <!-- cookies alert --> */}

    <div id="cookies" class="cookies d-flex j-between">
        <img src={cookie} alt="cookie"/>
        <div>
            <h3>Stop! Cookie time</h3>
            <p>We use cookies (sadly not edible ones) to personalize content and ads, to provide social media
                features and to analyse our traffic. <a href="#">Read more...</a></p>
        </div>
        <button onclick={() => acceptCookies()}>I accept</button>
    </div>

</main>
</div>
        </div>
    );
};

export default Weather;