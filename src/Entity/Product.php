<?php
namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Validator\Constraints as Assert;
use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;

/**
 *
 * @ApiResource()
 */
class Product
{

	/**
	 *
	 * @ApiProperty(
	 * 	identifier=true,
	 * 	openapiContext={"example"="1"}
	 * )
	 * @Assert\NotNull()
	 * @Assert\NotBlank()
	 * @Assert\Range(
	 *      min = 1,
	 *      max = 999999999999,
	 * )
	 */
	private $productID;

	/**
	 *
	 * @var string
	 *
	 * @ApiProperty(
	 * 	openapiContext={"example"="Potato"}
	 * )
	 * @Assert\NotNull()
	 * @Assert\NotBlank()
	 * @Assert\Length(
	 *     min = 1,
	 *     max = 50
	 * )
	 */
	private $productName;

	/**
	 *
	 * @var string
	 *
	 * @ApiProperty(
	 * 	openapiContext={"example"="Manager"}
	 * )
	 * @Assert\Length(
	 *     min = 0,
	 *     max = 30
	 * )
	 */
	private $productManager;
	
	/**
	 *
	 * @var \DateTimeInterface
	 *
	 * @ApiProperty(
	 * 	openapiContext={"example"="2020-10-20"}
	 * )
	 *
	 * @Assert\NotNull()
	 */
	private $salesStartDate;
	
	public function getProductID(): ?int
	{
		return $this->productID;
	}

	public function setProductID(int $productID): self
	{
		$this->productID = $productID;

		return $this;
	}

	public function getProductName(): ?string
	{
		return $this->productName;
	}

	public function setProductName(string $productName): self
	{
		$this->productName = $productName;

		return $this;
	}

	public function getProductManager(): ?string
	{
		return $this->productManager;
	}

	public function setProductManager(string $productManager): self
	{
		$this->productManager = $productManager;

		return $this;
	}

	public function getSalesStartDate(): ?\DateTimeInterface
	{
		return $this->salesStartDate;
	}

	public function setSalesStartDate(\DateTimeInterface $salesStartDate): self
	{
		$this->salesStartDate = $salesStartDate;

		return $this;
	}
}
