import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mathématiques',
    link: 'docs/math/intro',
  },
  {
    title: 'Informatique',
    link: 'docs/computer_science/intro',
  },
  {
    title: 'Histoire',
    link: 'docs/history/intro',
  },
];

function Feature({title, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a
          href={link}
          style={{
            fontSize: '1.8rem',
            padding: '20px 40px',
            borderRadius: '12px',
            background: '#a128f2',
            color: 'white',
            textDecoration: 'none',
            display: 'inline-block',
            fontWeight: 'bold',
          }}
        >
          {title}
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
