<?php

class LogoutController {
  public function httpGetMethod(Http $http, array $queryFields)
  {
    $session = new UserSession();
    $session -> destroy();
    header('Location: http://localhost/developpement/restaurant/index.php');

  }
}
