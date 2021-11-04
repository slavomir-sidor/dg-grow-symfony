<?php
namespace App\OpenApi;

use ApiPlatform\Core\OpenApi\Factory\OpenApiFactoryInterface;
use ApiPlatform\Core\OpenApi\OpenApi;
use ApiPlatform\Core\OpenApi\Model\PathItem;
use ApiPlatform\Core\OpenApi\Model\Operation;
use ApiPlatform\Core\OpenApi\Model\RequestBody;

final class JwtDecorator implements OpenApiFactoryInterface
{

	private $decorated;

	public function __construct(OpenApiFactoryInterface $decorated)
	{
		$this->decorated = $decorated;
	}

	public function __invoke(array $context = []): OpenApi
	{
		$openApi = ($this->decorated)($context);
		$schemas = $openApi->getComponents()->getSchemas();

		$schemas['Token'] = new \ArrayObject([
			'type' => 'object',
			'properties' => [
				'token' => [
					'type' => 'string',
					'readOnly' => true
				]
			]
		]);

		$schemas['Credentials'] = new \ArrayObject(
			[
				'type' => 'object',
				'properties' => [
					'username' => [
						'type' => 'string',
						'example' => 'admin'
					],
					'password' => [
						'type' => 'string',
						'example' => 'Passw0rd'
					]
				]
			]);

		$pathItem = new PathItem('JWT Token', "", // $summary
		"", // $description
		null, // Operation $get
		null, // Operation $put
			new Operation('postCredentialsItem', // operationId:
			[
				'Token'
			], // tags:
				[ // responses
					'200' => [
						'description' => 'Get JWT token',
						'content' => [
							'application/json' => [
								'schema' => [
									'$ref' => '#/components/schemas/Token'
								]
							]
						]
					]
				],
				'Get JWT token to login.', // summary:
				"", // $description
				null, // xternalDocumentation $externalDocs
				[], // array $parameters = [],
				new RequestBody('Generate new JWT Token',
					new \ArrayObject([
						'application/json' => [
							'schema' => [
								'$ref' => '#/components/schemas/Credentials'
							]
						]
					]))));
		$openApi->getPaths()->addPath('/token', $pathItem);

		return $openApi;
	}
}