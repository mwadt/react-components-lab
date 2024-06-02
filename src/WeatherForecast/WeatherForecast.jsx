import App from '../App.jsx';
import './WeatherForecast.css';

const WeatherForecast = ({ weatherForecasts} ) => {

    return (

        weatherForecasts.map((weatherForecast, index) => {
            return (
            <div key={weatherForecast._id} className='weather'>
                
                <p>Day: {weatherForecast.day}</p>
                <img src={weatherForecast.img} alt={weatherForecasts.imgAlt} /> 
                <p>Conditions: {weatherForecast.conditions}</p>
                <p>Time: {weatherForecast.time}</p>

            </div>
            )
            }
        )
    )
}


export default WeatherForecast;