import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const categories = [
    {
        title: 'Life, Personal & Social Science',
        events: [
            {
                name: 'Anatomy and Physiology',
                desc: 'Learn about the structures & functions of various body systems.'
            },
            {
                name: 'Designer Genes',
                desc: 'classic, evolutionary, and molecular genetics.'
            },
            {
                name: 'Disease Detectives', desc: 'Investigate outbreaks and learn how organizations track epidemics.'
            },
            {
                name: 'Entomology',
                desc: 'bug'
            },
            {
                name: 'Water Quality',
                desc: 'mmmmm'
            },
        ],
    },
    {
        title: 'Earth and Space Science',
        events: [
            {
                name: 'Astronomy',
                desc: 'too much math',
            },
            {
                name: 'Dynamic Planet',
                desc: 'mmmmm',
            },
            {
                name: 'Remote Sensing',
                desc: 'mmmmm',
            },
            {
                name: 'Rocks and Minerals',
                desc: 'mmmmm',
            },
        ],
    },

    {
        title: 'Physical Science & Chemistry',
        events: [
            {
                name: 'Chemistry Lab',
                desc: 'mmmmm',
            },
            {
                name: 'Circuit Lab',
                desc: 'mmmmm',
            },
            {
                name: 'Forensics',
                desc: 'mmmmm',
            },
            {
                name: 'Hovercraft',
                desc: 'mmmmm',
            },
            {
                name: 'Machines',
                desc: 'mmmmm'
            },
            {
                name: 'Materials Science',
                desc: 'mmmmm',
            },
        ],
    },
    {
        title: 'Technology & Engineering',
        events: [
            {
                name: 'Boomilever',
                desc: 'mmmmm',
            },
            {
                name: 'Electric Vehicle',
                desc: 'mmmmm',
            },
            {
                name: 'Helicopter',
                desc: 'mmmmm',
            },
            {
                name: 'Robot Tour',
                desc: 'mmmmm',
            },
        ],
    },
    {
        title: 'Inquiry & Nature of Science',
        events: [
            {
                name: 'Bungee Drop',
                desc: 'mmmmm',
            },
            {
                name: 'Codebusters',
                desc: 'mmmmm',
            },
            {
                name: 'Engineering CAD',
                desc: 'mmmmm',
            },
            {
                name: 'Experimental Design',
                desc: 'mmmmm',
            },
        ],
    },
];


function TopicCard({ topicName, topicLink, description }) {
    return (
        <div className="relative bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition cursor-pointer h-52">
            <h3 className="text-xl font-semibold mb-2">{topicName}</h3>
            <p className="text-gray-700 text-sm mb-10">{description}</p>
            <a
                href={topicLink}
                className="absolute bottom-4 right-4 text-blue-600 font-medium hover:text-blue-800 hover:underline"
            >
                Let's go &rarr;
            </a>
        </div>
    );
}

function TopicsGrid() {
    return (
        <div className="p-8 max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">2026 C Events</h1>

            {categories.map((category) => (
                <div key={category.title} className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {category.events.map((event) => (
                            <TopicCard
                                key={event.name}
                                topicName={event.name}
                                topicLink="#"
                                description={event.desc}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}


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

export default function Home(): ReactNode {
    return (
        <Layout
            title={`Explore Topics :)`}
            description="Description will go into a meta tag in <head />">

            <main>
                <Topics />
                <TopicsGrid />
            </main>
        </Layout>
    );
}
