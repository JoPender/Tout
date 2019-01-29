<?php

namespace AppBundle\Entity;

/**
 * Commande
 */
class Commande
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var \stdClass
     */
    private $userId;

    /**
     * @var float
     */
    private $montant;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }



    /**
     * Set userId
     *
     * @param \stdClass $userId
     *
     * @return Commande
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;

        return $this;
    }

    /**
     * Get userId
     *
     * @return \stdClass
     */
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * Set montant
     *
     * @param float $montant
     *
     * @return Commande
     */
    public function setMontant($montant)
    {
        $this->montant = $montant;

        return $this;
    }

    /**
     * Get montant
     *
     * @return float
     */
    public function getMontant()
    {
        return $this->montant;
    }

    /**
     * Retourne une information pour afficher une chaîne de caractère représentant
     * l'objet
     *
     * @return string [description]
     */
    public function __toString()
    {
      return $this->getNom();
    }
}
