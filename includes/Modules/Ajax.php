<?php namespace Experiensa\Plugin\Modules;

use Experiensa\Plugin\Modules\Request\Http;
use Experiensa\Plugin\Modules\Helpers;
use Experiensa\Plugin\Modules\Settings;

class Ajax{
  	public function __construct( ) {
		add_action('wp_ajax_requestCountryName', array( $this, 'requestCountryName' ));
		add_action('wp_ajax_nopriv_requestCountryName', array( $this, 'requestCountryName' ));
		add_action('wp_ajax_requestVoyageForm', array( $this, 'requestVoyageForm' ));
		add_action('wp_ajax_nopriv_requestVoyageForm', array( $this, 'requestVoyageForm' ));
  	}
  	public function requestCountryName() {
		$apiURL = $_POST['apiURL']; 
		$input = $_POST['input'];
		$key = Settings::getGoogleAPIKey();
		$regions = $_POST['regions'];
		$language = Helpers::getSiteLanguageCode();
		$apiURL .= '?input='.$input.'&regions='.$regions.'&key='.$key.'&language='.$language;
		$response = Http::getStandardApiResponse($apiURL);
		header('Content-Type: application/json');
		echo $response;
		die();
	}
	public function requestVoyageForm() {
		$error = false;
		$msg = 'Request sended';
		$data = $_POST['formData'];
		$mail_body = '';
		$fullname = isset($data['fullname'])?$data['fullname']:'';
		$mail_body .= isset($data['fullname'])?'<strong>Full name: </strong>'.$data['fullname'].'<br>':'';
		$email = isset($data['email'])?$data['email']:'';
		$mail_body .= isset($data['email'])?'<strong>Email: </strong>'.$data['email'].'<br>':'';
		$mail_body .= isset($data['phone'])?'<strong>Phone: </strong>'.$data['phone'].'<br>':'';
		$destination = isset($data['destination'])?$data['destination']:'';
		$mail_body .= isset($data['destination'])?'<strong>Destination: </strong>'.$data['destination'].'<br>':'';
		$min_budget = isset($data['min_budget'])?$data['min_budget'].' '.Settings::getCurrency():'';
		$max_budget = isset($data['max_budget'])?' - '.$data['max_budget'].' '.Settings::getCurrency():'';
		$mail_body .= '<strong>Budget: </strong>'.$min_budget.$max_budget.'<br>';
		$mail_body .= isset($data['departure'])?'<strong>Departure date: </strong>'.$data['departure'].'<br>':'';
		$mail_body .= isset($data['return'])?'<strong>Return date: </strong>'.$data['return'].'<br>':'';
		$mail_body .= isset($data['companion'])?'<strong>Companion: </strong>'.$data['companion'].'<br>':'';
		$mail_body .= isset($data['adults'])?'<strong>Adults: </strong>'.$data['adults'].'<br>':'';
		$mail_body .= isset($data['kids'])?'<strong>Kids: </strong>'.$data['kids'].'<br>':'';
		$mail_body .= isset($data['babies'])?'<strong>Babies: </strong>'.$data['babies'].'<br>':'';
		$mail_body .= isset($data['preferences'])?'<strong>Preferences: </strong>'.$data['preferences'].'<br>':'';
		// Flight
		$fclass = Helpers::arrayToString($data, 'fclass');
		$mail_body .= $fclass!=''?'<strong>Flight Class: </strong>'.$fclass.'<br>':'';
		$fseat = Helpers::arrayToString($data, 'fseat');
		$mail_body .= $fseat!=''?'<strong>Flight Seat: </strong>'.$fseat.'<br>':'';
		$fpreferences = Helpers::arrayToString($data, 'fpreferences');
		$mail_body .= $fpreferences!=''?'<strong>Flight Preferences: </strong>'.$fpreferences.'<br>':'';
		// Hosting
		$htypes = Helpers::arrayToString($data, 'htypes');
		$mail_body .= $htypes!=''?'<strong>Hosting Types: </strong>'.$htypes.'<br>':'';
		$hoptions = Helpers::arrayToString($data, 'hoptions');
		$mail_body .= $hoptions!=''?'<strong>Hosting Options: </strong>'.$hoptions.'<br>':'';
		// Themes
		$themeoptions = Helpers::arrayToString($data, 'themeoptions');
		$mail_body .= $themeoptions!=''?'<strong>Theme Options: </strong>'.$themeoptions.'<br>':'';
		// Transport
		$mail_body .= isset($data['trans_type'])?'<strong>Transport Type: </strong>'.$data['trans_type'].'<br>':'';
		$mail_body .= isset($data['trans_driver'])?'<strong>Driver Type: </strong>'.$data['trans_driver'].'<br>':'';

		$blog_email = Settings::getEmail();
		$blog_email = $blog_email == null ? 'gab.zambrano@gmail.com': $blog_email;
		$to = $email.','.$blog_email;
		$headers = array('Content-Type: text/html; charset=UTF-8');
		$captcha_value = isset($data['captcha_value']) && $data['captcha_value'] != '';
		if(!$captcha_value){
			$error = true;
			$msg = 'Invalid captcha validation';
		}else{
			if( wp_mail($to,'Request: '.$destination, $mail_body, $headers) === false ){
				$error = true;
				$msg = 'Error sending the request mail';
			}
		}
		wp_send_json(['error'=>$error, 'message'=>$msg, 'body'=>$mail_body]);
	}
}