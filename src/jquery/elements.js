import { API_KEY } from '../constants'
import { getAverageArrayValue } from '../utils/math'

export const attachHandlers = () => {

    // Get data through AJAX call to an endpoint
    const readData = (city) => {
        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast",
            data: {
                q: city,
                units: 'metric',
                appid: API_KEY,
            }
        })
        .done(function( response ) {
            const avgTemp = calculateAvgTemp(response)
            const avtTempText = `${avgTemp.toFixed(2)}°C`
            $('#avg-temp-value').text(avtTempText)
        })
        .fail(function( msg ) {
            console.log('failed', msg)
        })
        .always(function( msg ) {
            console.log('always', msg)
        })
    }

    // Attach click event listener and a handler
    const attachClick = () => {
        $('.toggle-list-group-item').click((event) => {
            console.log(event)
            $('.toggle-list-group-item').removeClass('active')
            $(event.currentTarget).addClass('active')
        })
    }

    // Attach select on change listener and a handler
    const attachCitySelect = () => {
        $('#select-city').change(function() {
            const city = $(this).val()
            readData(city)
        });
    }

    //Document ready function
    $(function() {
        attachClick()
        attachCitySelect()
        const city = $('#select-city').val()
        readData(city)
    });


    const calculateAvgTemp = (response) => {
        const tempArr = response.list.map(el => el.main.temp)
        const avgTemp = getAverageArrayValue(tempArr)
        return avgTemp
    }

}


