import Link from 'next/link';

export default function ZonerMCPPage() {
  return (
    <div className="space-y-8">
      <section className="card p-8 md:p-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-400 hover:text-white transition-colors mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        
        <div className="flex items-start gap-4 mb-6">
          <span className="text-3xl mt-1">◇</span>
          <div>
            <p className="section-title">Project</p>
            <h1 className="section-heading mt-2">Zoner MCP</h1>
          </div>
        </div>
        
        <p className="text-lg leading-relaxed text-muted-300 max-w-3xl">
          A Model Context Protocol server that powers zoning lookups for AI agents. 
          Transform street addresses into zoning data for Lebanon, NH, and plug into 
          any OpenAI Agent Builder or ChatKit workflow.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href="https://github.com/melbamorph/zonerMCP"
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>
          <a
            href="https://zoner.melaniemcd.ai"
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </section>

      <section className="card scroll-fade-in p-8 md:p-10">
        <h2 className="text-lg font-semibold text-white">What It Does</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-300">
          <p>
            ZonerMCP is a minimal, reusable MCP server template designed for use with 
            OpenAI Agent Builder and other MCP-compatible AI platforms. It uses Streamable 
            HTTP transport for broad compatibility.
          </p>
          <p>
            The server takes a street address and returns zoning information, enabling AI 
            agents to answer questions like &quot;What zone is 123 Main Street in?&quot; or 
            &quot;Can I build a duplex at this address?&quot;
          </p>
        </div>
      </section>

      <section className="card scroll-fade-in p-8 md:p-10">
        <h2 className="text-lg font-semibold text-white">Design Philosophy</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-300">
          <p>
            This template is intentionally <strong className="text-white">minimal and UI-agnostic</strong>. 
            It provides only the MCP server infrastructure, allowing you to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Connect it to any AI interface (OpenAI Agent Builder, Claude, custom UIs)</li>
            <li>Build your own frontend or use existing AI chat interfaces</li>
            <li>Focus on your business logic without UI constraints</li>
            <li>Deploy as a standalone microservice</li>
          </ul>
        </div>
      </section>

      <section className="card scroll-fade-in p-8 md:p-10">
        <h2 className="text-lg font-semibold text-white">Tech Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="tag tag-draft">Node.js 18+</span>
          <span className="tag tag-draft">MCP Protocol</span>
          <span className="tag tag-draft">Express</span>
          <span className="tag tag-draft">ArcGIS REST API</span>
          <span className="tag tag-draft">Streamable HTTP</span>
        </div>
      </section>

      <section className="card scroll-fade-in p-8 md:p-10">
        <h2 className="text-lg font-semibold text-white">Key Features</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="p-4 rounded-xl bg-surface-200/30 border border-white/[0.05]">
            <h3 className="font-medium text-white mb-2">Streamable HTTP Transport</h3>
            <p className="text-sm text-muted-400">Works with OpenAI Agent Builder and MCP Inspector</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-200/30 border border-white/[0.05]">
            <h3 className="font-medium text-white mb-2">Stateless Client Support</h3>
            <p className="text-sm text-muted-400">Auto-initializes sessions for clients that don&apos;t handle the MCP handshake</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-200/30 border border-white/[0.05]">
            <h3 className="font-medium text-white mb-2">CORS Enabled</h3>
            <p className="text-sm text-muted-400">Ready for cross-origin requests out of the box</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-200/30 border border-white/[0.05]">
            <h3 className="font-medium text-white mb-2">Health Check Endpoint</h3>
            <p className="text-sm text-muted-400">Built-in monitoring and load balancer support</p>
          </div>
        </div>
      </section>

      <section className="card scroll-fade-in p-8 md:p-10">
        <h2 className="text-lg font-semibold text-white">API Endpoints</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.1]">
                <th className="text-left py-3 px-4 text-muted-400 font-medium">Endpoint</th>
                <th className="text-left py-3 px-4 text-muted-400 font-medium">Method</th>
                <th className="text-left py-3 px-4 text-muted-400 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-muted-300">
              <tr className="border-b border-white/[0.05]">
                <td className="py-3 px-4 font-mono text-accent-400">/mcp</td>
                <td className="py-3 px-4">POST</td>
                <td className="py-3 px-4">Main MCP endpoint (initialize, tools/list, tools/call)</td>
              </tr>
              <tr className="border-b border-white/[0.05]">
                <td className="py-3 px-4 font-mono text-accent-400">/mcp</td>
                <td className="py-3 px-4">GET</td>
                <td className="py-3 px-4">Server info or SSE stream (with session)</td>
              </tr>
              <tr className="border-b border-white/[0.05]">
                <td className="py-3 px-4 font-mono text-accent-400">/mcp</td>
                <td className="py-3 px-4">DELETE</td>
                <td className="py-3 px-4">Session termination</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-accent-400">/health</td>
                <td className="py-3 px-4">GET</td>
                <td className="py-3 px-4">Health check</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="card scroll-fade-in p-8 md:p-10">
        <h2 className="text-lg font-semibold text-white">License</h2>
        <p className="mt-4 text-sm text-muted-300">
          ISC License - Open source and free to use, modify, and distribute.
        </p>
      </section>
    </div>
  );
}
