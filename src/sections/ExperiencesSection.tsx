import { Link } from 'react-router-dom';
import { Experience } from '../lib/types';

type ExperiencesSectionProps = {
  experiences: Experience[];
  loading?: boolean;
};

export default function ExperiencesSection({ experiences, loading }: ExperiencesSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="experiences">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-ocean-600">
            Experiences
          </div>
          <h2 className="font-display text-3xl text-slate-900">Designed for slow travel</h2>
          <p className="text-slate-600">
            Guided sails, atelier visits, and sunrise rituals to match your rhythm.
          </p>
        </div>
        <Link className="btn-ghost" to="/contact">
          Talk to concierge
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {loading
          ? new Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="card-surface h-40 animate-pulse bg-sand-50" />
              ))
          : experiences.map((experience) => (
              <article key={experience.id} className="card-surface flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{experience.title}</h3>
                  <span className="rounded-full bg-ocean-50 px-3 py-1 text-xs font-semibold text-ocean-600">
                    {experience.duration}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{experience.description}</p>
                <Link className="text-sm font-semibold text-ocean-600" to="/book">
                  Reserve a spot -&gt;
                </Link>
              </article>
            ))}
      </div>
    </section>
  );
}
