import { SubscribeCTA } from '@/components/SubscribeCTA';

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div className="card p-8 space-y-3">
        <p className="section-title">Contact</p>
        <h2 className="section-heading">Connect on LinkedIn</h2>
        <p className="max-w-3xl text-sm text-slate-700">
          This portfolio runs on a publish-first cadence. For collaboration questions or quick context, please use LinkedIn
          instead of a contact form.
        </p>
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 underline-offset-4 hover:underline"
          href="https://www.linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          Connect on LinkedIn
          <span aria-hidden>↗</span>
        </a>
      </div>

      <SubscribeCTA />
    </div>
  );
}
