import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Topics() {
    const { siteConfig } = useDocusaurusContext();
    return (

        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Topics of 2026
                </Heading>
            </div>
        </header>
    );
}

function Content() {
  return (
    <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
            }}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
  )
}

export default function Home(): ReactNode {
    return (
        <Layout
            title={`Explore Topics :)`}
            description="Description will go into a meta tag in <head />">

            <main>
                <Topics />
                <Content />
            </main>
        </Layout>
    );
}
