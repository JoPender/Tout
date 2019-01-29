<?php

namespace AppBundle\Entity;

/**
 * Role
 */
class Role
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var \stdClass
     */
    private $nom;


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
     * Set nom
     *
     * @param \stdClass $nom
     *
     * @return Role
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return \stdClass
     */
    public function getNom()
    {
        return $this->nom;
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
