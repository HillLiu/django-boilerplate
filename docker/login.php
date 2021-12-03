<?php

/** Check IP address and allow empty password
* @link https://www.adminer.org/plugins/#use
* @author Jakub Vrana, https://www.vrana.cz/
* @license https://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
* @license https://www.gnu.org/licenses/gpl-2.0.html GNU General Public License, version 2 (one or other)
*/
class AdminerLoginIp {
	/** @access protected */
	var $ips;
	/** @access protected */
	var $forwarded_for;
	
	/** Set allowed IP addresses
	* @param array IP address prefixes
	* @param array X-Forwarded-For prefixes if IP address matches, empty array means anything
	*/
	function __construct() {
	}

	function login($login, $password) {
		return true;
	}

}

return new AdminerLoginIp();
