<?php

class BookingModel
{
	public function create(
		$userId,
		$bookingDate,
    $bookingTime,
		$numberOfSeats)
	{
		$sql = "INSERT INTO reservation
        (
			id_client,
			date_reservation,
			heure_reservation,
			CreationTimestamp,
			nb_clients
		) VALUES (?, ?, ?, NOW(), ?)";
        // Insertion de la réservation dans la base de données.
        $database = new Database();
		$database->executeSql($sql,
		[
            $userId,
            $bookingDate,
            $bookingTime,
            $numberOfSeats
		]);

        // Ajout d'un message de notification.
        $flashBag = new FlashBag();
        $flashBag->add('Votre réservation est bien enregistrée, nous vous en remercions.');
	}
}
