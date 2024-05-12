import { Human } from '$/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class HumanService {
    data: Human;
    constructor() {
        this.data = {
            name: 'Arijit Kundu',
            organization: 'NIC',
            designation: 'Full Stack Developer (in .NET & Angular) at NIC',
            address: 'Kestopur, Kolkata, West Bengal 700101',
            qr: 'BEGIN:VCARD\
            VERSION:3.0\
            N:ARIJIT KUNDU;\
            ORG:NIC\
            TITLE:Software Developer\
            EMAIL;TYPE=INTERNET:arikundu9@gmail.com\
            TEL;TYPE=CELL:+919734606012\
            ADR:;;AB-47/2, Prafulla Kanan, Kestopur;Kolkata;West Bengal;700101;India\
            END:VCARD',
            summary: "Innovative Full Stack Developer with a proven track record of designing and delivering scalable & robust software solutions that enhance user experiences and drive seamless workflow. With a solid foundation in .NET core and Angular frameworks, coupled with SQLserver, PostgreSQL & mongodb databases, AWS environment, and standerd API development.",
            email: {
                text: 'arikundu9@gmail.com',
                hyperLink: 'mailto:arikundu9@gmail.com',
            },
            linkedin: {
                text: '/in/arikundu9/',
                hyperLink: 'https://www.linkedin.com/in/arikundu9/',
            },
            phone: {
                text: '9734606012',
                hyperLink: 'tel:+919734606012',
            },
            github: {
                text: '/arikundu9',
                hyperLink: 'https://github.com/arikundu9',
            },
            leetcode: {
                text: '/arikundu9',
                hyperLink: 'https://leetcode.com/arikundu9/',
            },
            hackerrank: {
                text: '/arikundu9',
                hyperLink: 'https://github.com/arikundu9',
            },
            experience: [
                {
                    heading: 'Software Developer at National Informatics Centre (NIC)',
                    duration: `March 2022 - Present`,
                    projects: [
                        {
                            title: 'Kalimpong Tourism',
                            description: 'A content management system for Department of Tourism, Kalimpong District',
                            liveLinks: ['https://tourism.kalimpong.gov.in/', 'https://play.google.com/store/apps/details?id=com.kalimpong.tourism&pcampaignid=web_sharehttps://play.google.com/store/apps/details?id=com.kalimpong.tourism&pcampaignid=web_share'],
                            responsibility: ['Development of crud apis to manage places to visit, local cuisine, transpotaion info between places.', 'Development of a featureful admin panel to manage above resources. Development of an Android app for end users.'],
                            techstack: ['.NET6', 'Flutter', 'PostgreSQL'],
                            modules: [],
                        },
                        {
                            title: 'Lakshmir Bhandar',
                            description: 'A government initiative in WB that offers financial support to women.',
                            liveLinks: ['https://socialsecurity.wb.gov.in/'],
                            responsibility: ['API and database improvement.'],
                            techstack: ['.NET', 'Bootstrap', 'HTML', 'CSS', 'jQuery', 'PostgreSQL'],
                            modules: [],
                        },
                        {
                            title: 'iFMS WB (Under Development)',
                            description: 'Integrated finance management system, is a collection of software solutions designed to do, Distribution of state budget, managing of bills, collection of payments, taxs, managing stamp papers and many more mission critical financial operations.',
                            liveLinks: ['http://ifmswbuat.nic.in/'],
                            responsibility: ['Leadership, Team Building, Development, Code Review.', 'In house GIT setup, In house build pipeline management.'],
                            techstack: [],
                            modules: [
                                {
                                    name: 'SSO',
                                    description: 'Single Sign On',
                                    challenges: 'Inspite of a sso system, role management responsibilities has to be distributed among departments on demand.',
                                    responsibility: 'Database design and API development.',
                                    contributions: 'Improved database performence by eleminating a inevitable join operation in database using bitfields.',
                                    techstack: ['PostgreSQL', '.NET', 'Angular', 'Material Design'],
                                },
                                {
                                    name: 'eBantan',
                                    description: 'Designed to Distribution states whole budget down to root level.',
                                    challenges: 'Purpose wise Distribution, widthdral, reapproprition of fund with consistency.',
                                    responsibility: 'Designing of acid safe database, developing apis, designing of complex forms in angular.',
                                    contributions: 'Facelitated with features to distribute fund of different purpose to multiple authority in a single go (with robust db,backend & frontend support.) thus made complex financial transaction easy to do.',
                                    techstack: ['Angular', '.NET', 'SQLserver', 'PrimeNG'],
                                },
                                {
                                    name: 'eBilling',
                                    description: 'Allows DDOs to submit bills electronically to Treasuries with 28 different TR Forms.',
                                    challenges: 'Management of 28 different types of bill internally intregated with more then 10 foreign systems throught apis.',
                                    responsibility: 'DB design to store data of 28 semi heterogeneous forms in one place, building apis & frontend froms.',
                                    contributions: 'Carefully saperated out common parts among 28 TR forms and developed featurefull common compoenets. Developed full-fledged CRUD apis to manage 28 TR forms with varying as well as common part.',
                                    techstack: ['Angular', '.NET', 'PostgreSQL', 'Material Design'],
                                },
                                {
                                    name: 'CTS',
                                    description: 'Centralised Treasury System provides stamp management and Treasury Accounts facility.',
                                    challenges: 'This module handles sensitive financial data, as it is at the very end of the paymemt processes. The spotlight is focused on security for this module.',
                                    responsibility: 'Database design, API development,bank api integration, forms and datatable design.',
                                    contributions: 'Improved api loading time by 30% by developing paginated api and compression.',
                                    techstack: ['.NET', 'PostgreSQL'],
                                },
                                {
                                    name: 'GRIPS',
                                    description: 'This module is used to collect payments from general public.',
                                    challenges: 'Amoung all modules this module going to have much more user and much more transaction per time unit.',
                                    responsibility: 'Database design and api development.',
                                    contributions: 'Managed all the services and sub-services using a n-ary tree structure in the Database resulting in efficient access.',
                                    techstack: ['PostgreSQL'],
                                },
                            ],
                        },
                    ],
                },
                {
                    heading: 'Freelance Web Developer',
                    duration: 'March 2021 - November 2022',
                    projects: [
                        {
                            title: 'Zillion Strings',
                            description: 'A Real Estate consulting services',
                            liveLinks: ['https://zillionstrings.com/'],
                            responsibility: ['Backend development, magicbricks, 99acres API integration & DB development'],
                            techstack: ['.NET', 'Angular', 'Ionic', 'Bootstrap'],
                            modules: [],
                        },
                    ],
                },
            ],
            skills: [
                {
                    title: 'Frontend',
                    skills: [
                        {
                            title: 'Angular14',
                            rating: 0.9,
                        },
                        {
                            title: 'TypeScript4.7',
                            rating: 0.9,
                        },
                        {
                            title: 'HTML5',
                            rating: 0.9,
                        },
                        {
                            title: 'JavaScript',
                            rating: 0.9,
                        },
                        {
                            title: 'CSS3',
                            rating: 0.9,
                        },
                        {
                            title: 'ECMAScript',
                            rating: 0.9,
                        },
                    ],
                },
                {
                    title: 'Backend',
                    skills: [
                        {
                            title: '.NET',
                            rating: 0.8,
                        },
                        {
                            title: 'C#',
                            rating: 0.8,
                        },
                        {
                            title: 'LINQ',
                            rating: 0.8,
                        },
                        {
                            title: 'RESTful API',
                            rating: 0.8,
                        },
                        {
                            title: 'Kafka',
                            rating: 0.8,
                        },
                        {
                            title: 'Microservice',
                            rating: 0.8,
                        },
                        {
                            title: 'Redis cache',
                            rating: 0.8,
                        },
                        {
                            title: 'System Architecture',
                            rating: 0.8,
                        },
                        {
                            title: 'xUnit',
                            rating: 0.8,
                        },
                        {
                            title: 'NUnit',
                            rating: 0.8,
                        },
                    ],
                },
                {
                    title: 'Source Control',
                    skills: [
                        {
                            title: 'GIT',
                            rating: 1,
                        },
                        {
                            title: 'GitHub',
                            rating: 1,
                        },
                        {
                            title: 'GitLab',
                            rating: 1,
                        },
                        {
                            title: 'Gitflow',
                            rating: 1,
                        },
                        {
                            title: 'Git Hooks',
                            rating: 1,
                        },
                    ],
                },
                {
                    title: 'DATABASE',
                    skills: [
                        {
                            title: 'MySQL',
                            rating: 0.9,
                        },
                        {
                            title: 'SQLServer',
                            rating: 0.9,
                        },
                        {
                            title: 'PostgreSQL',
                            rating: 0.9,
                        },
                        {
                            title: 'MongoDB',
                            rating: 0.9,
                        },
                        {
                            title: 'T-SQL',
                            rating: 0.9,
                        },
                        {
                            title: 'PLPGSQL',
                            rating: 0.9,
                        },
                        {
                            title: 'Stored Procedure',
                            rating: 0.9,
                        },
                    ],
                },
                {
                    title: 'Leadership',
                    skills: [
                        {
                            title: 'Qaulity Code',
                            rating: 1,
                        },
                        {
                            title: 'Team Management',
                            rating: 1,
                        },
                        {
                            title: 'Project Planning',
                            rating: 1,
                        },
                        // {
                        //     title: 'Code Review',
                        //     rating: 1,
                        // },
                        // {
                        //     title: 'Software Development Environment',
                        //     rating: 1,
                        // },
                        // {
                        //     title: 'Time Management',
                        //     rating: 1,
                        // },
                        // {
                        //     title: 'Project Lifecycle Management',
                        //     rating: 1,
                        // },
                        // {
                        //     title: 'Technical Documentation',
                        //     rating: 1,
                        // },
                    ],
                },
                {
                    title: 'Problem Solving',
                    skills: [
                        {
                            title: 'Data Structure',
                            rating: 1,
                        },
                        {
                            title: 'Algorithms',
                            rating: 1,
                        },
                    ],
                },
                {
                    title: 'Frameworks',
                    skills: [
                        {
                            title: '.NET',
                            rating: 0.9,
                        },
                        {
                            title: 'Angular',
                            rating: 0.9,
                        },
                        {
                            title: 'Entity Framework',
                            rating: 0.9,
                        },
                    ],
                },
                {
                    title: 'IDE',
                    skills: [
                        {
                            title: 'VS Code',
                            rating: 0.9,
                        },
                        {
                            title: 'Visual Studio',
                            rating: 0.9,
                        },
                        {
                            title: 'DBeaver',
                            rating: 0.9,
                        },
                        {
                            title: 'SSMS',
                            rating: 0.9,
                        },
                        {
                            title: 'PGadmin',
                            rating: 0.9,
                        },
                    ],
                },
                {
                    title: 'DevOps Tools',
                    skills: [
                        {
                            title: 'Trello',
                            rating: 0.9,
                        },
                        {
                            title: 'Jira',
                            rating: 0.9,
                        },
                        {
                            title: 'Slack',
                            rating: 0.9,
                        },
                        {
                            title: 'CI/CD',
                            rating: 0.9,
                        },
                        {
                            title: 'Unit Test',
                            rating: 0.9,
                        },
                    ],
                },
                {
                    title: 'Buils System',
                    skills: [
                        {
                            title: 'Jenkins',
                            rating: 0.9,
                        },
                    ],
                },
                {
                    title: 'Operating System',
                    skills: [
                        {
                            title: 'Fedora 38',
                            rating: 0.9,
                        },
                        {
                            title: 'Linux',
                            rating: 0.9,
                        },
                        {
                            title: 'Ubuntu',
                            rating: 0.9,
                        },
                        {
                            title: 'Windows',
                            rating: 0.9,
                        },
                    ],
                },
                {
                    title: 'Cloud',
                    skills: [
                        {
                            title: 'aws',
                            rating: 0.9,
                        },
                    ],
                },
            ],
        };
    }
}
