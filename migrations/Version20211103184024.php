<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211103184024 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__product AS SELECT product_id, product_name, product_manager, sales_start_date FROM product');
        $this->addSql('DROP TABLE product');
        $this->addSql('CREATE TABLE product (product_id INTEGER NOT NULL, product_name VARCHAR(50) NOT NULL COLLATE BINARY, product_manager VARCHAR(30) NOT NULL COLLATE BINARY, sales_start_date DATE NOT NULL, PRIMARY KEY(product_id))');
        $this->addSql('INSERT INTO product (product_id, product_name, product_manager, sales_start_date) SELECT product_id, product_name, product_manager, sales_start_date FROM __temp__product');
        $this->addSql('DROP TABLE __temp__product');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__product AS SELECT product_id, product_name, product_manager, sales_start_date FROM product');
        $this->addSql('DROP TABLE product');
        $this->addSql('CREATE TABLE product (product_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, product_name VARCHAR(50) NOT NULL, product_manager VARCHAR(30) NOT NULL, sales_start_date DATE NOT NULL)');
        $this->addSql('INSERT INTO product (product_id, product_name, product_manager, sales_start_date) SELECT product_id, product_name, product_manager, sales_start_date FROM __temp__product');
        $this->addSql('DROP TABLE __temp__product');
    }
}
