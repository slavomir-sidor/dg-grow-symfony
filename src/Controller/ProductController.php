<?php
// src/Controller/ProductController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Product;
use Symfony\Component\HttpFoundation\Request;
use App\Form\ProductType;

class ProductController extends AbstractController
{

	public function new(Request $request): Response
	{
		return $this->renderForm('products/new.html.twig', [
			'form' => $this->createForm(ProductType::class, new Product())
		]);
	}

	public function sales(): Response
	{
		$path = $this->getParameter('kernel.project_dir') . implode(DIRECTORY_SEPARATOR, [
			'',
			'assets',
			'products',
			'potato_sales.json'
		]);
		$table = json_decode(file_get_contents($path), true);
		return $this->render('products/sales.html.twig', [
			'path' => $path,
			'table' => $table
		]);
	}
}