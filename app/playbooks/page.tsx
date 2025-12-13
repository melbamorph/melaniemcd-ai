const playbooks = [
  {
    title: 'Rapid discovery sprints',
    detail: 'Lightweight research and mapping kits to align teams in the first two weeks.'
  },
  {
    title: 'Pilot launch kit',
    detail: 'Checklists for governance, risk, and communications to start testing with real users.'
  },
  {
    title: 'Service measurement basics',
    detail: 'Plain-language dashboards and cadences so teams can watch signals early.'
  }
];

export default function PlaybooksPage() {
  return (
    <div className="space-y-8">
      <div className="card p-8">
        <p className="section-title">Playbooks</p>
        <h2 className="section-heading">Reusable guides for lean civic teams</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Adaptable playbooks to help teams move from idea to action. Each is meant to be copy/paste-ready and easy to tailor
          to different service areas.
        </p>
      </div>

      <div className="space-y-4">
        {playbooks.map((playbook) => (
          <div key={playbook.title} className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">{playbook.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{playbook.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
