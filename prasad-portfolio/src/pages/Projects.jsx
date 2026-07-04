import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <PageWrapper>
      <p className="eyebrow mb-3">Projects</p>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
        A collection of data analysis work
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-2xl">
        Real datasets, real tools — from Python and SQL notebooks to Power BI and Tableau dashboards.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </PageWrapper>
  );
}
