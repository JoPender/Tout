<?php
class RegisterController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	return ['message' => ''];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
      $m = new RegisterModel();

      $newUser = $m -> insertUser($formFields);

      header('Location: register');
    }
}
