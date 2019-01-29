<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Cartecommande;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 * Cartecommande controller.
 *
 */
class CartecommandeController extends Controller
{
    /**
     * Lists all cartecommande entities.
     *
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $cartecommandes = $em->getRepository('AppBundle:Cartecommande')->findAll();

        return $this->render('cartecommande/index.html.twig', array(
            'cartecommandes' => $cartecommandes,
        ));
    }

    /**
     * Creates a new cartecommande entity.
     *
     */
    public function newAction(Request $request)
    {
        $cartecommande = new Cartecommande();
        $form = $this->createForm('AppBundle\Form\CartecommandeType', $cartecommande);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($cartecommande);
            $em->flush();

            return $this->redirectToRoute('cartecommande_show', array('id' => $cartecommande->getId()));
        }

        return $this->render('cartecommande/new.html.twig', array(
            'cartecommande' => $cartecommande,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a cartecommande entity.
     *
     */
    public function showAction(Cartecommande $cartecommande)
    {
        $deleteForm = $this->createDeleteForm($cartecommande);

        return $this->render('cartecommande/show.html.twig', array(
            'cartecommande' => $cartecommande,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing cartecommande entity.
     *
     */
    public function editAction(Request $request, Cartecommande $cartecommande)
    {
        $deleteForm = $this->createDeleteForm($cartecommande);
        $editForm = $this->createForm('AppBundle\Form\CartecommandeType', $cartecommande);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('cartecommande_edit', array('id' => $cartecommande->getId()));
        }

        return $this->render('cartecommande/edit.html.twig', array(
            'cartecommande' => $cartecommande,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a cartecommande entity.
     *
     */
    public function deleteAction(Request $request, Cartecommande $cartecommande)
    {
        $form = $this->createDeleteForm($cartecommande);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($cartecommande);
            $em->flush();
        }

        return $this->redirectToRoute('cartecommande_index');
    }

    /**
     * Creates a form to delete a cartecommande entity.
     *
     * @param Cartecommande $cartecommande The cartecommande entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Cartecommande $cartecommande)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('cartecommande_delete', array('id' => $cartecommande->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
