<?php

namespace AppBundle\Entity;

/**
 * Carte_commande
 */
class Carte_commande
{
    /**
     * @var int
     */
    private $id;


    /**
     * @var \stdClass
     */
    private $commandeId;

    /**
     * @var \stdClass
     */
    private $carteId;

    /**
     * @var int
     */
    private $quantite;


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
     * Set commandeId
     *
     * @param \stdClass $commandeId
     *
     * @return Carte_commande
     */
    public function setCommandeId($commandeId)
    {
        $this->commandeId = $commandeId;

        return $this;
    }

    /**
     * Get commandeId
     *
     * @return \stdClass
     */
    public function getCommandeId()
    {
        return $this->commandeId;
    }

    /**
     * Set carteId
     *
     * @param \stdClass $carteId
     *
     * @return Carte_commande
     */
    public function setCarteId($carteId)
    {
        $this->carteId = $carteId;

        return $this;
    }

    /**
     * Get carteId
     *
     * @return \stdClass
     */
    public function getCarteId()
    {
        return $this->carteId;
    }

    /**
     * Set quantite
     *
     * @param integer $quantite
     *
     * @return Carte_commande
     */
    public function setQuantite($quantite)
    {
        $this->quantite = $quantite;

        return $this;
    }

    /**
     * Get quantite
     *
     * @return int
     */
    public function getQuantite()
    {
        return $this->quantite;
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
