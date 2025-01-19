function App() {
  return (
    <article className="
      h-dvh px-2 py-4
      prose prose-gray max-w-3xl
      prose-h1:mt-0 prose-h1:mb-4 prose-h1:text-5xl
      prose-h2:mt-0 prose-h2:mb-1 prose-h2:font-extrabold
      prose-h3:mt-0 prose-h3:mb-0 prose-h3:font-bold
      prose-p:my-0 prose-p:leading-normal
      prose-ul:my-0 prose-ul:pl-5 prose-ul:leading-normal prose-ul:list-outside
      prose-li:my-0 prose-li:p-0 
      text-gray-900
    ">
      <section className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
        <div>
          <h1>GJ Tiquia</h1>
          <p className="text-xl font-extrabold">Software Engineer</p>
        </div>

        <div className="not-prose">
          <ul className="flex flex-col gap-0">
            <li><a href="https://gjtiquia.com" target="_blank" className="flex items-center gap-2"><GlobeIcon />gjtiquia.com</a></li>
            <li><a href="mailto:gjtiquia@gmail.com" target="_blank" className="flex items-center gap-2"><MailIcon />gjtiquia@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/gjtiquia/" target="_blank" className="flex items-center gap-2"><LinkedinIcon />linkedin.com/in/gjtiquia</a></li>
          </ul>
        </div>
      </section>

      <section className="mt-3 mb-3">
        <p>Passionate in creating unique experiences through games, web apps and mobile apps. Regardless of the frontend or backend, I find satisfaction in solving problems creatively. I am an engineer, I solve real-world problems. I am an artist, code is my canvas. I am human, passion is my drive.</p>
      </section>

      <section className="my-3">
        <h2>Professional Work Experience</h2>
        <Item
          title="Game Developer & Code Architect"
          subtitle="Daytech HK Limited"
          date="Jun 2023 - Present"
          descriptions={[
            "Developed and deployed a co-op multiplayer top-down isometric shooter game for mobile",
            "Designed and implemented the architectures for different multiplayer systems",
            "Enforce coding standards, best practices and maintainability, ensuring software robustness",
            "Worked tightly with game designers, providing them with tools for rapid prototyping and iteration",
          ]}
        />
        <Item
          title="Junior Game Developer"
          subtitle="Daytech HK Limited"
          date="Jun 2022 - Jul 2023"
          descriptions={[
            "Migrated singleplayer desktop PC game to a realtime co-op multiplayer mobile game",
            "Researched and developed procedural map generation systems, increasing game replayability",
          ]}
        />
        {/* Freelance Web Developer */}
        <Item
          title="Freelance Software Engineer"
          subtitle="Binary Tree Studio"
          date="Aug 2024 - Jan 2025"
          descriptions={[
            "Developed interactive 360-degree cinematic experiences for the City University of Hong Kong",
            "Worked on the integration between generative AI backend and Unity frontend",
            "Ported application across different platforms while ensuring robustness and maintainability",
          ]}
        />
        <Item
          title="Freelance Game Developer"
          subtitle="HKAHSS"
          date="Oct 2023 - Jun 2024"
          descriptions={[
            "Developed an interactive and educational web game using Unity for secondary students",
            "Worked on the integration between a separate web frontend and the Unity web frontend",
          ]}
        />
      </section>

      <section className="my-3">
        <h2>Education</h2>
        <Item
          title="Bachelor of Mechanical Engineering"
          subtitle="The University of Hong Kong"
          date="Sep 2018 - Jul 2022"
          descriptions={[
            "First Class Honours | 3x Dean's Honour List | Highest Semester GPA : 3.80 / 4.30",
            "Focuses in Product Development and Manufacturing, Unmanned Aerial Systems",
            "Minor in Computer Science. Courses in Game and Mobile App Development, Artificial Intelligence",
            "Team Captain of HKU Unmanned Aerial Systems Team, leading 30+ people in overseas competitions",
          ]}
        />
      </section>

      <section className="my-3">
        <h2>Skills</h2>
        <ul className="marker:text-gray-800">
          <li>Programming Languages: C#, JavaScript/TypeScript, C++, Python, HTML, CSS</li>
          <li>Web Technologies: React, Tailwind CSS, Express.js, Deno Fresh, HTMX, Postgres</li>
          <li>Game Development: Unity, Multiplayer Development, AI Behaviour Development</li>
        </ul>
      </section>

      <section className="my-3">
        <h2>Hobbies</h2>
        <ul className="marker:text-gray-800">
          <li>Music, Gaming, Reading, Coding, Basketball, Photography</li>
        </ul>
      </section>

      <div className="py-1"></div>
    </article>
  )
}

export default App

function Item(props: {
  title: string,
  subtitle: string,
  date: string,
  descriptions: string[],
}) {
  return (
    <div className="my-1">
      <div className="flex flex-col md:flex-row justify-between text-nowrap">
        <div className="flex flex-col md:flex-row md:items-center">
          <h3>{props.title}</h3>
          <p><span className="hidden md:inline md:px-2">|</span><span className="md:italic">{props.subtitle}</span></p>
        </div>
        <div>
          <i>{props.date}</i>
        </div>
      </div>
      <ul className="marker:text-gray-800">
        {props.descriptions.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </div>
  )
}

function GlobeIcon() {
  return (
    <svg
      className="size-5 fill-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      className="size-5 fill-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg
      className="size-5 fill-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      ></path>
    </svg>
  )
}