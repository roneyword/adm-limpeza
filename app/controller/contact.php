<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require (__DIR__.'/../vendor/autoload.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	list($input, $errors) = validateInput($_POST);

	if (!empty($errors)) :
		$messageError = '<ol><li>'.implode('</li><li>', $errors).'</li></ol>';
		$messageAlert = "swal(
		  'Oops! Corrija seus dados',
		  '".$messageError."',
		  'error'
		)";
	else:
		proccessInput($input);
		$messageAlert = "swal(
		  'Sucesso!',
		  'Olá ".$input['name']." recebemos sua mensagem. Em breve iremos te responder. Agradecemos seu contato!',
		  'success'
		)";
	endif;

	print '<script>'.$messageAlert.'</script>';
}

function validateInput($input = []) {
	$errors = [];

	foreach ($input['required'] as $key => $value) :
		if (empty($value)) :
			$errors[] = 'Preencha todos os campos!';
			break;
		endif;
		if (empty($errors)) :
			$input[$key] = $input['required'][$key];
		endif;
	endforeach;
	unset($input['required']);

	foreach ($input as $key => $value) {
		switch ($key) {
			case 'name':
				$name = filter_var(trim($value), FILTER_SANITIZE_STRING);
				if (!strstr($name, ' ')):
					$errors[] = 'Informe um nome e sobrenome!';
				endif;
				break;

			case 'email':
				$email = filter_var($value, FILTER_VALIDATE_EMAIL);
				if (!$email):
					$errors[] = 'Informe um endereço de e-mail válido!';
				endif;
				break;

			case 'phone':
				$phone = filter_var($value, FILTER_SANITIZE_STRING);
				if (!preg_match('#^\(\d{2}\) (9|)[4-9]\d{4}-\d{4}$#', $phone)):
					$errors[] = 'Informe o número de telefone no formato correto!';
				endif;
				break;

			case 'message':
				$message = filter_var($value, FILTER_SANITIZE_STRING);
				if (strlen($message) < 20) :
					$errors[] = 'Você precisa deixar uma mensagem com no mínimo 20 caracteres!';
				endif;
				break;
		}
	}
	return array($input, $errors);
}

function proccessInput($input = []) {
	$mailBody = file_get_contents(__DIR__.'/../view/mail-body.tpl.php');
	$mailBody = str_replace(array('{name}', '{email}', '{phone}', '{message}'), array($input['name'], $input['email'], $input['phone'], $input['message']), $mailBody);
	
	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->isSMTP();
	$mail->SMTPAuth = true;
	$mail->Username = 'contato@admterceirizacao.com.br';
	$mail->Password = 'R@&lly!23';
	$mail->SMTPSecure = 'ssl';
	$mail->Host = 'br628.hostgator.com.br';
	$mail->Port = 465;
	$mail->SMTPOptions = array('ssl' => array('verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true));

	// Define o remetente
	$mail->setFrom('contato@admterceirizacao.com.br', 'Admin, ADM Terceirização');
	// Define o destinatário
	$mail->addAddress('contato@admterceirizacao.com.br', 'Equipe Comercial ADM Terceirização');
	
	$mail->isHTML(true);
	$mail->Subject = 'Mensagem do site "ADM Terceirização"';
	$mail->Body = $mailBody;
	$mail->send();
}
