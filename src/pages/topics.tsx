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
                desc: 'Learn about the structures & functions of various body systems.',
                page: 'anatomy',
            },
            {
                name: 'Designer Genes',
                desc: 'An event based on using genetics, biotech, and data analysis to identify and treat diseases.',
                page: 'anatomy',
            },
            {
                name: 'Disease Detectives', desc: 'Investigate outbreaks and learn how organizations track epidemics.',
                page: 'anatomy',
            },
            {
                name: 'Entomology',
                desc: 'Identifying bugs of all sizes from North America.',
                page: 'anatomy',
            },
            {
                name: 'Water Quality',
                desc: 'The inner workings of freshwater aquatic environments and the impact of human activities on water systems. ',
                page: 'anatomy',
            },
        ],
    },
    {
        title: 'Earth and Space Science',
        events: [
            {
                name: 'Astronomy',
                desc: 'Stellar evolution, space physics, and exoplanets.',
                page: 'anatomy',
            },
            {
                name: 'Dynamic Planet',
                desc: 'Dynamic Planet focuses on the Earth\'s cryosphere (frozen water), specially, the role of glaciers in the environment. ',
                page: 'anatomy',
            },
            {
                name: 'Remote Sensing',
                desc: 'Participants use satellite imagery to analyze data related to climate change & Earth systems.',
                page: 'anatomy',
            },
            {
                name: 'Rocks and Minerals',
                desc: 'Participants identify and classify rocks & minerals and tie them to geologic processes.',
                page: 'anatomy',
            },
        ],
    },

    {
        title: 'Physical Science & Chemistry',
        events: [
            {
                name: 'Chemistry Lab',
                desc: 'All about chemical reactions: This event specifically focuses on stoichiometry and equilibrium, and involves calculations and lab skills.',
                page: 'anatomy',
            },
            {
                name: 'Circuit Lab',
                desc: 'Focuses on various components and properties of direct current (DC) circuits, and related physics.',
                page: 'anatomy',
            },
            {
                name: 'Forensics',
                desc: 'Becoming a detective: Use concepts of chemistry to solve a fictional crime.',
                page: 'anatomy',
            },
            {
                name: 'Hovercraft',
                desc: 'Participants construct a hovercraft with a downward propelling fan.',
                page: 'anatomy',
            },
            {
                name: 'Machines',
                desc: 'ok I\'m not that sure',
                page: 'anatomy',
            },
            {
                name: 'Materials Science',
                desc: 'really painful.',
                page: 'anatomy',
            },
        ],
    },
    {
        title: 'Technology & Engineering',
        events: [
            {
                name: 'Boomilever',
                desc: 'mmmmm',
                page: 'anatomy',
            },
            {
                name: 'Electric Vehicle',
                desc: 'mmmmm',
                page: 'anatomy',
            },
            {
                name: 'Helicopter',
                desc: 'mmmmm',
                page: 'anatomy',
            },
            {
                name: 'Robot Tour',
                desc: 'mmmmm',
                page: 'anatomy',
            },
        ],
    },
    {
        title: 'Inquiry & Nature of Science',
        events: [
            {
                name: 'Bungee Drop',
                desc: 'mmmmm',
                page: 'anatomy',
            },
            {
                name: 'Codebusters',
                desc: 'mmmmm',
                page: 'anatomy',
            },
            {
                name: 'Engineering CAD',
                desc: 'mmmmm',
                page: 'anatomy',
            },
            {
                name: 'Experimental Design',
                desc: 'mmmmm',
                page: 'anatomy',
            },
        ],
    },
];


function TopicCard({ topicName, topicLink, description }) {
    return (
        <div className="relative bg-slate-50 border border-solid border-slate-300 rounded-lg shadow-md p-6 hover:shadow-xl transition cursor-pointer h-52">
            <h3 className="text-xl font-semibold mb-2">{topicName}</h3>
            <p className="text-gray-700 text-sm mb-10">{description}</p>
            <a
                href={topicLink+"/intro"}
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
            <h1 className="text-3xl font-bold mb-6 text-center">
                2026 C Events
            </h1>

            {categories.map((category) => (
                <div key={category.title} className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {category.events.map((event) => (
                            <TopicCard
                                key={event.name}
                                topicName={event.name}
                                topicLink={event.page}
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
                    Events for 2026
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
