import $ from 'jquery';
import 'jquery-ui/ui/widgets/autocomplete';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/autocomplete.css';
import 'jquery-ui/themes/base/theme.css';

const formatCountryResponse = function(response){
  var countries = [];
  response.map((elem,i)=>{
    if(typeof elem.types != 'undefined' && elem.types.indexOf('country') > -1 ){
      countries.push(elem.structured_formatting.main_text);
    }
  });
  return countries;
}
const Autocomplete = function(){
  var restcountries =  "https://maps.googleapis.com/maps/api/place/autocomplete/json";
  $('#newexp_country').autocomplete({
    source: function( request, response ) {
      $.ajax( {
        url: experiensa_vars.ajaxurl,
        type:"POST",
        data: {
          apiURL: restcountries,
          input: request.term,
          regions: 'country',
          action: 'requestCountryName'
        },
        success: function( data ) {
          // console.log('respuesta',data)
          var countries = [];
          if(data.status == 'OK'){
            countries = formatCountryResponse(data.predictions);
          }
          // console.log('paises',countries);
          response( countries );
        },
        error: function (xhr, status){
            console.error('xhr',xhr);
            console.error('status',status);
        }
      } );
    },
    minLength: 2,
    /*focus: function( event, ui ) {
      console.log('focus', ui);
      return false;
    },*/
    select: function( event, ui ) {
      $( "#newexp_country" ).val( ui.item.label );
      return false;
    }
  })
}
module.exports = {
  Autocomplete: Autocomplete
}