<?php
// src/Controller/AuthenticationController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AuthenticationController extends AbstractController
{

	public function login(AuthenticationUtils $authenticationUtils): Response
	{
		$error = $authenticationUtils->getLastAuthenticationError();
		$lastUsername = $authenticationUtils->getLastUsername();

		return $this->renderForm('authentication/login.html.twig', [
			'last_username'=>$lastUsername,
			'error' => $error
		]);
	}

	public function logout(): Response
	{
		$this->redirectToRoute('app_authentication_login');
	}
}