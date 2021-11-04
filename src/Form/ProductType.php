<?php
namespace App\Form;

use App\Entity\Product;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ResetType;
use ApiPlatform\Core\Api\UrlGeneratorInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class ProductType extends AbstractType
{

	private $router;

	public function __construct(UrlGeneratorInterface $router)
	{
		$this->router = $router;
	}

	public function buildForm(FormBuilderInterface $builder, array $options): void
	{
		$action = $this->router->generate('api_products_post_collection');

		$builder->setAction($action)
			->add('productID', IntegerType::class, [
			'label' => 'Product ID',
			'attr' => array(
				'min' => '1',
				'max' => '999999999999'
			)
		])
			->add('productName', null, [
			'label' => 'Product Name'
		])
			->add('productManager', null, [
			'required' => false,
			'label' => 'Product manager'
		])
		->add('salesStartDate',DateType::class, [
			'widget' => 'single_text'])
			->add('save', SubmitType::class, [
			'label' => 'Save',
			'row_attr' => [
				'class' => 'mb-3 buttons'
			]
		])
			->add('clear', ResetType::class, [
			'label' => 'Clear',
			'row_attr' => [
				'class' => 'mb-3 buttons'
			]
		]);
	}

	public function configureOptions(OptionsResolver $resolver): void
	{
		$resolver->setDefaults([
			'data_class' => Product::class
		]);
	}
}
