import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

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
              <img className={styles.anime} src='/img/0.png'/>
            </div>
          </div>
          <div className={clsx('col col--12')} style={{ height: "10vh" }}></div>
          <div className={clsx('col col--6', styles.row)}>
            <div className="text--center padding-horiz--md">
              <img className={styles.anime} src='/img/1.png'/>
            </div>
          </div>
          <div className={clsx('col col--6', styles.row)}>
            <div className="text--center padding-horiz--md">
              <Heading as="h1">EX Mirror</Heading>
              <p>一个没啥用的项目</p>
              <p>项目地址：<Link href='https://github.com/KoronekoCorp/EXMirror'>https://github.com/KoronekoCorp/EXMirror</Link></p>
              <p>演示服务：<Link href='https://mex.koroneko.co/'>MEX.koroneko.co</Link></p>
              <p>演示服务：<Link href='https://ex.koroneko.co/'>EX.koroneko.co</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
