import { createError, defineEventHandler, getRequestHeader, getRequestURL } from 'h3'

const BLOCKED_PATHS = [
	/^\/\.env(?:\..*)?$/i,
	/^\/\.git(?:\/|$)/i,
	/^\/\.svn(?:\/|$)/i,
	/^\/\.hg(?:\/|$)/i,

	/^\/\.idea(?:\/|$)/i,
	/^\/\.vscode(?:\/|$)/i,
	/^\/.*\.bak$/i,
	/^\/.*\.old$/i,
	/^\/.*\.backup$/i,
	/^\/.*\.swp$/i,

	/^\/wp-admin(?:\/|$)/i,
	/^\/wp-login\.php$/i,
	/^\/wp-content(?:\/|$)/i,
	/^\/wp-includes(?:\/|$)/i,
	/^\/xmlrpc\.php$/i,
	/^\/wp-config\.php$/i,

	/^\/phpmyadmin(?:\/|$)/i,
	/^\/pma(?:\/|$)/i,
	/^\/adminer\.php$/i,
	/^\/config\.php$/i,

	/^\/docker-compose(?:\..*)?$/i,
	/^\/Dockerfile$/i,
	/^\/\.docker(?:\/|$)/i,
	/^\/\.github(?:\/|$)/i,

	/^\/server-status$/i,
	/^\/server-info$/i,
	/^\/cgi-bin(?:\/|$)/i,
]

const SUSPICIOUS_PATH_PATTERNS = [

	/\.\.(?:\/|\\)/i,

	/%00/i,


	/\.(?:sql|sqlite|sqlite3|db)$/i,

	/\.(?:ini|conf|config|yml|yaml)$/i,

	/\.(?:pem|key|p12|pfx)$/i,
]

const SUSPICIOUS_QUERY_PATTERNS = [
	/(?:union\s+select)/i,
	/(?:or\s+1\s*=\s*1)/i,
	/(?:and\s+1\s*=\s*1)/i,
	/(?:drop\s+table)/i,
	/(?:information_schema)/i,

	/<script[\s>]/i,
	/javascript:/i,
	/onerror\s*=/i,
	/onload\s*=/i,

	/\.\.\//i,
	/\.\.\\/i,
]

const SUSPICIOUS_USER_AGENTS = [
	/sqlmap/i,
	/nikto/i,
	/nmap/i,
	/masscan/i,
	/acunetix/i,
	/nessus/i,
	/openvas/i,
	/wpscan/i,
	/nuclei/i,
	/dirbuster/i,
	/gobuster/i,
	/ffuf/i,
	/zgrab/i,
]

function matchesAny(
	value: string,
	patterns: RegExp[],
): boolean {
	return patterns.some(pattern => pattern.test(value))
}

export default defineEventHandler((event) => {
	const requestUrl = getRequestURL(event)

	const pathname = requestUrl.pathname
	const query = requestUrl.search
	const userAgent = getRequestHeader(event, 'user-agent') || ''

	if (matchesAny(pathname, BLOCKED_PATHS)) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Not Found',
		})
	}

	if (matchesAny(pathname, SUSPICIOUS_PATH_PATTERNS)) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Not Found',
		})
	}

	if (matchesAny(query, SUSPICIOUS_QUERY_PATTERNS)) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Bad Request',
		})
	}

	if (matchesAny(userAgent, SUSPICIOUS_USER_AGENTS)) {
		throw createError({
			statusCode: 403,
			statusMessage: 'Forbidden',
		})
	}
})