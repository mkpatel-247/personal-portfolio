import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutme: string = `I’m an enthusiastic MEAN Stack Developer eager to leverage my expertise in MongoDB, Express.js, Angular, and Node.js to build innovative, scalable solutions. I’m passionate about turning complex problems into elegant outcomes, exploring how technology works, and continuously pushing my boundaries to learn and grow. Whether it’s integrating real-time features, collaborating on impactful projects, or contributing to open source, I’m driven by curiosity and a desire to make a meaningful difference.`;

  work: Array<any> = [
    {
      company: 'Webcodegenie Technology Pvt. Ltd.',
      position: 'Software Engineer',
      time_period: 'April 2024 - Present',
      place: 'Ahmedabad, Gujarat, India',
      projects: [
      ],
      tech: [
        {
          name: 'Angular',
          link: 'https://angular.dev/',
        },
        {
          name: 'mongoDB',
          link: 'https://www.mongodb.com/',
        },
        {
          name: 'Express',
          link: 'https://expressjs.com/',
        },
        {
          name: 'node.js',
          link: 'https://nodejs.org/en',
        },
        {
          name: 'JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'Typescript',
          link: 'https://www.typescriptlang.org/',
        },
      ],
    },
    {
      company: 'AOF Engineering Systems, LLC',
      position: 'Full Stack Developer Intern',
      time_period: 'Sep 2023 - Nov 2023',
      place: 'Remote',
      projects: [
        {
          name: 'Simple Invoice Generator',
          link: '#',
        },
      ],
      tech: [
        {
          name: 'Svelte',
          link: 'https://svelte.dev/',
        },
        {
          name: 'HTML',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          name: 'CSS',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
          name: 'JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'Github',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
      ],
    },
  ];

  education: Array<any> = [
    {
      studied_at: 'Marwadi University',
      qualified: 'Master of Computer Applications',
      time_period: '2022 - 2024',
      place: 'Rajkot, Gujarat, India',
    },
    {
      studied_at: 'Marwadi University',
      qualified: 'Bachelor of Computer Applications',
      time_period: '2019 - 2022',
      place: 'Rajkot, Gujarat, India',
    },
    {
      studied_at: 'Shri Swaminarayan Vidhyalay (Gurukul)',
      qualified: 'HSC - Commerce',
      time_period: '2017 - 2019',
      place: 'Gandhidham, Gujarat, India',
    },
  ];
}
