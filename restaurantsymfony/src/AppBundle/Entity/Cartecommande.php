<?php

namespace AppBundle\Entity;

/**
 * Cartecommande
 */
class Cartecommande
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
     * @return Cartecommande
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
     * @return Cartecommande
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
     * @return Cartecommande
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

    public function __toString()
    {
      return $this->getNom();
    }
}
