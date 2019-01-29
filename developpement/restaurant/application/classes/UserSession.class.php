<?php
class UserSession
{
	public function __construct()
	{
		if(session_status() == PHP_SESSION_NONE)
		{
            // Démarrage du module PHP de gestion des sessions.
			session_start();
		}
	}
    public function create($userId, $pseudo)
    {
        // Construction de la session utilisateur.
        $_SESSION['user'] =
        [
            'UserId'    => $userId,
            'Pseudo' => $pseudo,

        ];
    }
    public function destroy()
    {
        // Destruction de l'ensemble de la session.
        $_SESSION = array();
        session_destroy();
    }
    public function getEmail()
    {
        if($this->isAuthenticated() == false)
        {
            return null;
        }
        return $_SESSION['user']['Email'];
    }
    public function getFirstName()
    {
        if($this->isAuthenticated() == false)
        {
            return null;
        }
        return $_SESSION['user']['FirstName'];
    }
    public function getFullName()
    {
        if($this->isAuthenticated() == false)
        {
            return null;
        }
        return $_SESSION['user']['FirstName'].' '.$_SESSION['user']['LastName'];
    }
    public function getLastName()
    {
        if($this->isAuthenticated() == false)
        {
            return null;
        }
        return $_SESSION['user']['LastName'];
    }
    public function getUserId()
    {
        if($this->isAuthenticated() == false)
        {
            return null;
        }
        return $_SESSION['user']['UserId'];
    }

		/**
		 * Récupération du pseudo dans la session
		 * @return [type] [description]
		 */
		public function getPseudo()
    {
        if($this->isAuthenticated() == false)
        {
            return null;
        }
        return $_SESSION['user']['Pseudo'];
    }
		
	public function isAuthenticated()
	{
		if(array_key_exists('user', $_SESSION) == true)
		{
			if(empty($_SESSION['user']) == false)
			{
				return true;
			}
		}
		return false;
	}
}
