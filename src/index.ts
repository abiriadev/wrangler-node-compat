import { Browser, launch } from '@cloudflare/puppeteer'

interface Env {
	TEST: Fetcher
}

export default {
	async fetch(request, env): Promise<Response> {
		return new Response('Hello, world!')
	},
} satisfies ExportedHandler<Env>
