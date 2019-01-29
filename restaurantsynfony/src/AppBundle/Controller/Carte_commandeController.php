<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Carte_commande;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Carte_commande controller.
 *
 * @Route("carte_commande")
 */
class Carte_commandeController extends Controller
{
    /**
     * Lists all carte_commande entities.
     *
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $carte_commandes = $em->getRepository('AppBundle:Carte_commande')->findAll();

        return $this->render('carte_commande/index.html.twig', array(
            'carte_commandes' => $carte_commandes,
        ));
    }

    public function indexClientAction()
    {
        $em = $this->getDoctrine()->getManager();

        $carte_commandes = $em->getRepository('AppBundle:Carte_commande')->findAll();

        return $this->render('carte_commande/public.index.html.twig', array(
            'carte_commandes' => $carte_commandes,
        ));
    }

    /**
     * Creates a new carte_commande entity.
     *
     * @Route("/new", name="carte_commande_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $carte_commande = new Carte_commande();
        $form = $this->createForm('AppBundle\Form\Carte_commandeType', $carte_commande);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($carte_commande);
            $em->flush();

            return $this->redirectToRoute('carte_commande_show', array('id' => $carte_commande->getId()));
        }

        return $this->render('carte_commande/new.html.twig', array(
            'carte_commande' => $carte_commande,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a carte_commande entity.
     *
     * @Route("/{id}", name="carte_commande_show")
     * @Method("GET")
     */
    public function showAction(Carte_commande $carte_commande)
    {
        $deleteForm = $this->createDeleteForm($carte_commande);

        return $this->render('carte_commande/show.html.twig', array(
            'carte_commande' => $carte_commande,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing carte_commande entity.
     *
     * @Route("/{id}/edit", name="carte_commande_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Carte_commande $carte_commande)
    {
        $deleteForm = $this->createDeleteForm($carte_commande);
        $editForm = $this->createForm('AppBundle\Form\Carte_commandeType', $carte_commande);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('carte_commande_edit', array('id' => $carte_commande->getId()));
        }

        return $this->render('carte_commande/edit.html.twig', array(
            'carte_commande' => $carte_commande,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a carte_commande entity.
     *
     * @Route("/{id}", name="carte_commande_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Carte_commande $carte_commande)
    {
        $form = $this->createDeleteForm($carte_commande);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($carte_commande);
            $em->flush();
        }

        return $this->redirectToRoute('carte_commande_index');
    }

    /**
     * Creates a form to delete a carte_commande entity.
     *
     * @param Carte_commande $carte_commande The carte_commande entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Carte_commande $carte_commande)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('carte_commande_delete', array('id' => $carte_commande->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
