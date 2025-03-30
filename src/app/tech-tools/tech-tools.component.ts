import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  standalone: true,
  imports: [],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {

  tools: string = `I actively use a diverse set of cutting-edge technologies and tools in my daily work. From
                modern frameworks and
                languages to powerful platforms, my toolkit ensures high-quality and efficient development. 🚀 🌟`
  items: Array<any> = [
    {
      name: "Angular",
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      link: 'https://angular.io',
      image: 'assets/img/angular17.svg'
    },
    {
      name: "Tailwind CSS",
      description: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.',
      link: 'https://tailwindcss.com/',
      image: 'assets/img/tailwindcss.svg'
    },
    {
      name: "Bootstrap",
      description: 'Bootstrap is a popular open-source CSS framework for developing responsive and mobile-first websites.',
      link: 'https://getbootstrap.com/',
      image: 'assets/img/bootstrap.svg'
    },
    {
      name: "HTML5",
      description: 'HTML5 is the latest version of HyperText Markup Language, the standard for creating web pages and applications.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      image: 'assets/img/html5.svg'
    },
    {
      name: "CSS3",
      description: 'CSS3 is the latest standard for Cascading Style Sheets, adding new features and improvements over previous versions.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      image: 'assets/img/css3.svg'
    },
    {
      name: "JavaScript",
      description: 'JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, and much more.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      image: 'assets/img/js.svg'
    },
    {
      name: "jQuery",
      description: 'jQuery is a fast, small, and feature-rich JavaScript library that simplifies things like HTML document traversal and manipulation.',
      link: 'https://jquery.com/',
      image: 'assets/img/jquery.svg'
    },
    {
      name: "MySQL",
      description: 'MySQL is an open-source relational database management system based on SQL (Structured Query Language).',
      link: 'https://www.mysql.com/',
      image: 'assets/img/mysql.svg'
    },
    {
      name: "GitHub",
      description: 'GitHub is a platform for version control and collaboration, allowing multiple people to work on projects simultaneously.',
      link: 'https://github.com/',
      image: 'assets/img/github.svg'
    },
    {
      name: "Postman",
      description: 'Postman is a powerful tool for API development, testing, and monitoring, used by developers to streamline their workflow.',
      link: 'https://www.postman.com/',
      image: 'assets/img/postman.svg'
    },
    {
      name: "Linux",
      description: 'Linux is a free and open-source operating system kernel used in many distributions for servers, desktops, and embedded systems.',
      link: 'https://www.kernel.org/',
      image: 'assets/img/linux.svg'
    },
    {
      name: "Visual Studio Code",
      description: 'Visual Studio Code is a source-code editor developed by Microsoft with support for debugging, syntax highlighting, and version control.',
      link: 'https://code.visualstudio.com/',
      image: 'assets/img/vscode.svg'
    },
    {
      name: "OpenAI",
      description: 'OpenAI is an AI research lab that aims to ensure that artificial general intelligence benefits all of humanity.',
      link: 'https://www.openai.com/',
      image: 'assets/img/openai.svg'
    }, 
    {
      name: "Vercel",
      description: 'Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web',
      link: 'https://vercel.com',
      image: 'assets/img/vercel-icon-dark.svg'
    },
    {
      name: "TypeScript",
      description: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript and provides static types.',
      link: 'https://www.typescriptlang.org/',
      image: 'assets/img/typescript.svg'
    },
  ];
}
