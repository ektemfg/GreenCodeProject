# Grønnskalle

Grønnskalle is a resource platform built to help developers optimize their code for sustainability and reduce the environmental impact of software development. This project is built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org), with content powered by [Sanity](https://www.sanity.io).

## Mission

Our mission is to educate and empower developers to create more sustainable software through:

- Efficient algorithm design and implementation
- Sustainable cloud infrastructure practices
- Resource-conscious development workflows
- Metrics and monitoring for environmental impact

## Getting started

To get started with this project, first install the npm dependencies:

```bash
npm install
```

Next, create a new Sanity project to power the content:

```bash
npm create sanity@latest -- --env=.env.local --create-project "Grønnskalle Content" --dataset production
```

This will prompt you to create a new Sanity account if you don't have one already. When asked "Would you like to add configuration files for a Sanity project in this Next.js folder?", choose "n".

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

To manage your content, visit the embedded Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Sanity](https://www.sanity.io) - the Sanity website
