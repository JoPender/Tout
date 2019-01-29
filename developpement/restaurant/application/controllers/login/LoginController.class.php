<?php
class LoginController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
      $session = new UserSession();

    return[
        'pseudo' => $session->getPseudo()
      ];
    }


    public function httpPostMethod(Http $http, array $formFields)
    {
      $m = new LoginModel();
      $login = $m -> loginUser($formFields['pseudo']);

      $isPwCorrect = password_verify($formFields['pw'],substr($login['mdp'],0,60));

      if(!$login){
        echo 'Mauvais identifiant';
      }else{
        if($isPwCorrect){
          $session = new UserSession();
          $connected = $session->create($login['id'], $login['pseudo']);
          echo 'Vous êtes connecté '.$login['pseudo']. '!';
          //header('Location: http://localhost/developpement/restaurant/index.php');
        }else{
          echo 'Mauvais identifiant ou mot de passe!';
        }
      }

      /*if (isset($session['id']) AND isset($session['pseudo']))
      {
        echo 'BonJour '.$session['pseudo'];
        $session['connect'] = true;
        //header('Location: ../../index.php');
      }*/
    }
}
