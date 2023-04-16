import Footer from './Footer';
import Project from './Project';
import clsx from 'clsx';
import projects from './data/projects.json';

export default function App() {
  return (
    <div
      className={clsx({
        'p-2 grid md:grid-cols-[repeat(auto-fill,minmax(calc(100%_/_3),1fr))]': true,
        'xl:grid-cols-[repeat(auto-fill,minmax(calc(100%_/_4),1fr))] gap-2 pb-[100px]': true
      })}
    >
      {projects.map(project => (
        <Project {...project} />
      ))}
      <Footer />
    </div>
  );
}
