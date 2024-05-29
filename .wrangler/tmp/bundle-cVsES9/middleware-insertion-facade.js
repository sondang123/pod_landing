				import worker, * as OTHER_EXPORTS from "/Users/godhitech/Documents/God/godhitech.com/.wrangler/tmp/pages-9HeKRq/functionsWorker-0.39187492869963503.mjs";
				import * as __MIDDLEWARE_0__ from "/Users/godhitech/Documents/God/godhitech.com/node_modules/.pnpm/wrangler@3.50.0_@cloudflare+workers-types@4.20240405.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/Users/godhitech/Documents/God/godhitech.com/node_modules/.pnpm/wrangler@3.50.0_@cloudflare+workers-types@4.20240405.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "/Users/godhitech/Documents/God/godhitech.com/.wrangler/tmp/pages-9HeKRq/functionsWorker-0.39187492869963503.mjs";
				export default worker;