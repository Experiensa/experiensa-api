import 'jquery';
import 'babel-polyfill';
import countryAutocomplete from './modules/countryAutocomplete';
import AdminMenuStyle from './modules/extras';

jQuery(document).ready(function(){
    countryAutocomplete();
    AdminMenuStyle();
});