import { SubscribeCTA } from '@/components/SubscribeCTA';

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <div className="card p-8 space-y-3">
        <p className="section-title">Contact</p>
        <h2 className="section-heading">Say hello</h2>
        <p className="max-w-3xl text-sm text-slate-700">
          Looking to collaborate, invite a workshop, or see a demo? Drop a note with a few lines on your goals. Response
          within two business days.
        </p>
        <form className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-800" htmlFor="name">
              Name
            </label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold text-slate-800" htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-slate-800" htmlFor="message">
              How can I help?
            </label>
            <textarea id="message" name="message" rows={4} placeholder="A sentence or two about your project" required />
          </div>
          <div className="sm:col-span-2">
            <button className="button-primary" type="submit">
              Send note
            </button>
          </div>
        </form>
      </div>

      <SubscribeCTA />
    </div>
  );
}
