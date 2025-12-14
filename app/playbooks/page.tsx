const playbooks = [
  {
    title: 'Rapid discovery sprints',
    detail: 'Lightweight research and mapping kits to align teams in the first two weeks.',
    icon: '◆'
  },
  {
    title: 'Pilot launch kit',
    detail: 'Checklists for governance, risk, and communications to start testing with real users.',
    icon: '◇'
  },
  {
    title: 'Service measurement basics',
    detail: 'Plain-language dashboards and cadences so teams can watch signals early.',
    icon: '○'
  }
];

export default function PlaybooksPage() {
  return (
    <div className="space-y-10">
      <section className="card p-8 md:p-10">
        <p className="section-title">Playbooks</p>
        <h2 className="section-heading mt-2">Reusable guides for lean civic teams</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-300">
          Adaptable playbooks to help teams move from idea to action. 
          Each is meant to be copy/paste-ready and easy to tailor to different service areas.
        </p>
      </section>

      <div className="space-y-4">
        {playbooks.map((playbook, index) => (
          <article 
            key={playbook.title} 
            className="card scroll-fade-in p-6 glow-accent"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <span className="text-xl text-accent-400">{playbook.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-white">{playbook.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-400">{playbook.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
