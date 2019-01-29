<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Carte;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 * Carte controller.
 *
 */
class CarteController extends Controller
{
    /**
     * Lists all carte entities.
     *
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $cartes = $em->getRepository('AppBundle:Carte')->findAll();

        return $this->render('carte/index.html.twig', array(
            'cartes' => $cartes,
        ));
    }


    public function indexClientAction()
    {
        $em = $this->getDoctrine()->getManager();

        $cartes = $em->getRepository('AppBundle:Carte')->findAll();

        return $this->render('carte/public.index.html.twig', array(
            'cartes' => $cartes,
        ));
    }


    /**
     * Creates a new carte entity.
     *
     */
    public function newAction(Request $request)
    {
      $carte = new Carte();
      $form = $this->createForm('AppBundle\Form\CarteType', $carte);
      $form->handleRequest($request);

      if ($form->isSubmitted() && $form->isValid()) {

        $file = $carte->getImage();

        $fileName = $file->getClientOriginalName();

        try {
          $file->move(
            $this->getParameter('images_directory'),
            $fileName
          );
        } catch (FileException $e) {
          // ... handle exception if something happens during file upload
        }

        $carte->setImage($fileName);

        $em = $this->getDoctrine()->getManager();
        $em->persist($carte);
        $em->flush();

        return $this->redirectToRoute('carte_show', array('id' => $carte->getId()));
      } else {
        return $this->render('carte/new.html.twig', array(
          'carte' => $carte,
            'form' => $form->createView(),
          ));
        }

    }

    /**
     * Finds and displays a carte entity.
     *
     */
    public function showAction(Carte $carte)
    {
        $deleteForm = $this->createDeleteForm($carte);

        return $this->render('carte/show.html.twig', array(
            'carte' => $carte,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing carte entity.
     *
     */
    public function editAction(Request $request, Carte $carte)
    {
        $deleteForm = $this->createDeleteForm($carte);
        $editForm = $this->createForm('AppBundle\Form\CarteType', $carte);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {

          $file = $carte->getImage();

          $fileName = $file->getClientOriginalName();

          try {
            $file->move(
              $this->getParameter('images_directory'),
              $fileName
            );
          } catch (FileException $e) {
            // ... handle exception if something happens during file upload
          }

          $carte->setImage($fileName);



            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('carte_edit', array('id' => $carte->getId()));
        }

        return $this->render('carte/edit.html.twig', array(
            'carte' => $carte,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a carte entity.
     *
     */
    public function deleteAction(Request $request, Carte $carte)
    {
        $form = $this->createDeleteForm($carte);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($carte);
            $em->flush();
        }

        return $this->redirectToRoute('carte_index');
    }

    /**
     * Creates a form to delete a carte entity.
     *
     * @param Carte $carte The carte entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Carte $carte)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('carte_delete', array('id' => $carte->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }

    /**
     * Add an item in the basket
     *
     *
     */
    public function addBasketAction($id)
    {
      $_SESSION['basket'][$id]=1;
      return $this->redirectToRoute('carte_public_index');
    }


    public function basketAction()
    {


      return $this->render('carte/basket.html.twig', array(
      'cartes'=>$_SESSION['basket']
    ));
  }

}
