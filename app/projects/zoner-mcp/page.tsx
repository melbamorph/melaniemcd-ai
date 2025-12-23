import Link from 'next/link';

export default function ZonerMCPPage() {
  return (
    <div className="px-2 py-8 md:py-10">
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 text-sm text-muted-400 hover:text-white transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>
      
      <div className="flex items-start gap-4 mb-6">
        <span className="text-3xl mt-1">✿</span>
        <div>
          <p className="section-title">Project</p>
          <h1 className="section-heading mt-2">Zoner MCP</h1>
        </div>
      </div>
      
      <p className="text-lg leading-relaxed text-muted-300 max-w-3xl">
        A Model Context Protocol server that powers zoning lookups for AI agents. Transform street addresses into zoning data for Lebanon, NH, and plug into any OpenAI Agent Builder or ChatKit workflow.
      </p>

      

<br></br>
      <section className="mb-10">
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
    
    </div>
  );
}
