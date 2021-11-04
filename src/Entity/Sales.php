<?php
namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiProperty;

/**
 *
 * @ApiResource(
 * )
 */
class Sales
{
	/**
	 *
	 * @ApiProperty(
	 *  identifier=true
	 * )
	 */
	private $column;

	/**
	 *
	 * @var array
	 * @ApiProperty()
	 */
	private $data;

	/**
	 *
	 * @return array
	 */
	public function getColumn()
	{
		return $this->column;
	}

	/**
	 *
	 * @return array
	 */
	public function getData()
	{
		return $this->data;
	}

	/**
	 *
	 * @param array $column
	 */
	public function setColumn($column)
	{
		$this->column = $column;
	}

	/**
	 *
	 * @param array $data
	 */
	public function setData($data)
	{
		$this->data = $data;
	}

}