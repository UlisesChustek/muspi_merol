<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'muspi_merol' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'K!_5XEj4JO$poQ)^c(j+(Pn#P#][M]4?N*8k4o4At:l70/q=2 4_Z6?$Ss1K.Fc_' );
define( 'SECURE_AUTH_KEY',  'zo@i Z479gOGdD?dObiB}(1;Pe4:VW2eG.#&FNkcu.Te8kT0PbSf%kP{&[VZ:]q#' );
define( 'LOGGED_IN_KEY',    ':*=;uCMX$,eP:I.jK+wF0`{hYXg_cSg&XEIc)nDj>.$DCwQ^oLy9vGw7FfE<Mh-j' );
define( 'NONCE_KEY',        '9Q+t,{D$3/Vb*^t]RahZQ_9WRST<@M|b[KRt.dT(o,*d(-*h#(;++SU3V~q3HX1Q' );
define( 'AUTH_SALT',        'ydL%;XXxHOI>({uum:{`KS||@$x+N:z1!FN]>j4dPplEM{SX8~hS_5kj&RL-6bn|' );
define( 'SECURE_AUTH_SALT', 'Z9X9zhJs}om3HZ[^}N_`V#+X}5lXx&(?#:=n-f<$+Jc1[e.=3Sa)D]}^;!Q3jL]6' );
define( 'LOGGED_IN_SALT',   '/GA;_FVJ(LEyY1G,|l8}QjI3*0MIqz1.~=Zt4 +w$e~<BFKhi9 uJRfZ*<AP,84@' );
define( 'NONCE_SALT',       'O$1}|Ml,IQmxV#W7n LK/9WtMo}{n,Twg-~SzB:VRBj=I?v*<xZe.%vD, ?{ymX@' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
