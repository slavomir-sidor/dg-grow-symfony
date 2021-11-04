<?php
namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Attribute\AsController;
use App\Entity\Sales;

# [AsController]
class SalesController extends AbstractController
{

	public function __construct()
	{}

	public function __invoke(): Sales
	{
		$path = $this->getParameter('kernel.project_dir') . implode(DIRECTORY_SEPARATOR, [
			'',
			'assets',
			'products',
			'potato_sales.json'
		]);
		$json = json_decode(file_get_contents($path), true);
		$data=new Sales();
		$data->setColumn($json["column"]);
		$data->setData($json["data"]);
		return $data;
	}
}