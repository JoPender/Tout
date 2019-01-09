<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'ilayoga');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'troiswa');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'M#f_T#Cc)6>yWn|*W)Y`[91iz>&)V$+/@-kP`_>wGRRX]&nyM^EoZ$M[+LhzMuT~');
define('SECURE_AUTH_KEY',  '$V ]%|-UV_P5j/o4$:_B}`h63+yBUDHO*!Y2tE1RA-,Z[J3[~*wIB: 0JacQq/hU');
define('LOGGED_IN_KEY',    'Z3b!qFb0?<)+/8u@?L 4H(~$G{aB4~>yOFcofri4fE!^E_rei<{FQ#w?IThruBd[');
define('NONCE_KEY',        'Mf&Y.q-QA.`R7&|CC(7JS3q5_1Dn&BeZK~JNGs%B0J.Nh73[<s9HI*fml+TdA-.7');
define('AUTH_SALT',        'Hu|nV>UovpLu.9~9F&uw ^(+h Whna|c-CkMQ:?Iv_RZYf35(XX(rca6[cSom2%P');
define('SECURE_AUTH_SALT', '.3,ji6|^~[EHJ0n1^=wwKp*U9rBc6]DPk+KZS3xKUxGld<,9ZzWGQ+KPG7W,=Pks');
define('LOGGED_IN_SALT',   'UtwL$7iXgW%f0%<^nG^b+#oEgow>8:vH6=viFKB9wXb6]hZk?@$nUGFQadNSpQNW');
define('NONCE_SALT',       '2bgPJk U Rj_;#e=HfI(7>Omw}S!Me-^pvf%mO6wR+H?nd_/y*H#(l,]HvuK%r<*');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
