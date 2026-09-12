import HelpBox from './HelpBox';
import './HelpArea.css';

const HELP_ITEMS = [
  {
    id: 'h1',
    title: 'What is Git?',
    text: 'Git is a version control system, helping you to manage your code and create code snapshots.',
  },
  {
    id: 'h2',
    title: 'What is GitHub?',
    text: 'GitHub is a company and online offering, providing you with tons of Git-related services (e.g., cloud repositories).',
  },
  {
    id: 'h3',
    title: 'What is GitHub Actions?',
    text: 'GitHub Actions is an automation service (or CI / CD service) that helps you automate repository-related workflows and processes.',
  },
];

//This component is responsible for rendering the help area, which contains multiple HelpBox components. Each HelpBox displays a title and text related to Git, GitHub, and GitHub Actions. The HELP_ITEMS array holds the data for each HelpBox, and the HelpArea component maps over this array to render each HelpBox with its corresponding title and text.


function HelpArea() {
  return (
    <section data-testid="help-area" id="help-area">
      {HELP_ITEMS.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

export default HelpArea;
