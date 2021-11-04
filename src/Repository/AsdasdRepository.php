<?php

namespace App\Repository;

use App\Entity\Asdasd;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Asdasd|null find($id, $lockMode = null, $lockVersion = null)
 * @method Asdasd|null findOneBy(array $criteria, array $orderBy = null)
 * @method Asdasd[]    findAll()
 * @method Asdasd[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AsdasdRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Asdasd::class);
    }

    // /**
    //  * @return Asdasd[] Returns an array of Asdasd objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Asdasd
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
