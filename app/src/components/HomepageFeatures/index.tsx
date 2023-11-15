import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Section({
  children,
  className,
  background = 'light',
}) {
  return (
    <section
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }>
      {children}
    </section>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div> */}
        <div className="row">
          <div className={clsx('col col--6', styles.row)}>
            <div className="text--center padding-horiz--md">
              <Heading as="h1">Nhimmeo for NextJS</Heading>
              <p>Nhimmeo的Nextjs版本，外带可能存在的API服务</p>
              <p>项目地址：未开源</p>
              <p>演示服务：<Link href='https://n.koroneko.co/'>N.koroneko.co</Link></p>
            </div>
          </div>
          <div className={clsx('col col--6', styles.row)}>
            <div className="text--center padding-horiz--md">
              <img src='/img/0.png' />
            </div>
          </div>
          <div className={clsx('col col--12')} style={{ height: "5vh" }}></div>
          <div className={clsx('col col--6', styles.row)}>
            <div className="text--center padding-horiz--md">
              <img src='/img/1.png' />
            </div>
          </div>
          <div className={clsx('col col--6', styles.row)}>
            <div className="text--center padding-horiz--md">
              <Heading as="h1">EX Mirror</Heading>
              <p>一个没啥用的项目</p>
              <p>项目地址：<Link href='https://github.com/KoronekoCorp/EXMirror'>https://github.com/KoronekoCorp/EXMirror</Link></p>
              <p>演示服务：<Link href='https://ex.koroneko.co/'>EX.koroneko.co</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
