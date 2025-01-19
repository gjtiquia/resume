import { Card } from "./components/Card"
import { GlobeIcon } from "./components/GlobeIcon"
import { LinkedinIcon } from "./components/LinkedinIcon"
import { MailIcon } from "./components/MailIcon"

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
                <Card
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
                <Card
                    title="Junior Game Developer"
                    subtitle="Daytech HK Limited"
                    date="Jun 2022 - Jul 2023"
                    descriptions={[
                        "Migrated singleplayer desktop PC game to a realtime co-op multiplayer mobile game",
                        "Researched and developed procedural map generation systems, increasing game replayability",
                    ]}
                />
                {/* Freelance Web Developer */}
                <Card
                    title="Freelance Software Engineer"
                    subtitle="Binary Tree Studio"
                    date="Aug 2024 - Jan 2025"
                    descriptions={[
                        "Developed interactive 360-degree cinematic experiences for the City University of Hong Kong",
                        "Worked on the integration between generative AI backend and Unity frontend",
                        "Ported application across different platforms while ensuring robustness and maintainability",
                    ]}
                />
                <Card
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
                <Card
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
