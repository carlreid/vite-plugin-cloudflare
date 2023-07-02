import { renderPage } from 'vite-plugin-ssr'

export default {
	async fetch(request: Request): Promise<Response> {
        const { url } = request;
        const uriUrl = new URL(url);
        if(uriUrl.pathname.startsWith("/api/")){
          return new Response(`TODO: Handle API calls for; ${uriUrl.pathname}`, { status: 500 });
        }
        return await handleSsr(url, "");
	}
};

async function handleSsr(url: string, userAgent: string) : Promise<Response> {
    console.log("handleSsr", url, userAgent);
    const pageContextInit = {
      urlOriginal: url,
      fetch: (...args: Parameters<typeof fetch>) => fetch(...args),
      userAgent
    }
    const pageContext = await renderPage(pageContextInit)
    return new Response("Issue above, can't call renderPage. Causes ERR_MODULE_DYNAMIC_SPEC", { status: 500 });
  }