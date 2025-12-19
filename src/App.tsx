import { BulletPoints, Card } from "./components/Card"
import { GlobeIcon } from "./components/GlobeIcon"
import { LinkedinIcon } from "./components/LinkedinIcon"
import { MailIcon } from "./components/MailIcon"

function App() {
    return (
        <article className="
            h-dvh px-2 pt-4
            prose prose-gray max-w-3xl
            prose-h1:mt-0 prose-h1:mb-4 prose-h1:text-5xl
            prose-h2:mt-0 prose-h2:mb-1 prose-h2:font-extrabold
            prose-h3:mt-0 prose-h3:mb-0 prose-h3:font-bold
            prose-p:my-1 prose-p:leading-normal
            prose-ul:my-0 prose-ul:pl-5 prose-ul:leading-normal prose-ul:list-outside
            prose-li:my-0 prose-li:p-1
            text-gray-900
        ">
            <section className="flex flex-col gap-2 md:flex-row md:justify-between">
                <div>
                    <h1>GJ Tiquia</h1>
                    <p className="text-xl font-extrabold">{"Software Engineer & Game Developer"}</p>
                </div>

                <div className="not-prose">
                    <ul className="flex flex-col gap-0">
                        <li><a href="https://gjtiquia.com" target="_blank" className="flex items-center gap-2"><GlobeIcon />gjtiquia.com</a></li>
                        <li><a href="mailto:gjtiquia@gmail.com" target="_blank" className="flex items-center gap-2"><MailIcon />gjtiquia@gmail.com</a></li>
                        <li><a href="https://www.linkedin.com/in/gjtiquia/" target="_blank" className="flex items-center gap-2"><LinkedinIcon />linkedin.com/in/gjtiquia</a></li>
                    </ul>
                </div>
            </section>

            <section className="mt-2 mb-2">
                <p>
                    Just a regular guy doing things for fun, who also happens to be an engineer solving real world problems.
                </p>
                <p>
                    4 years of experience developing software and games, with a background in mechatronics engineering.
                </p>
                <p>
                    Experienced in leading people, nurturing growth, sharing knowledge, while bringing in business value.
                </p>
                <p>
                    A team player. Obsessed with product quality. Get things done, and get things done well.
                </p>
            </section>

            <section className="my-4">
                <h2>Professional Work Experience</h2>
                <Card
                    title="Game Developer & Code Architect"
                    subtitle="Daytech HK Limited"
                    date="Jun 2022 - Present"
                    descriptions={[
                        "Deployed **9Cat Saga**, a multiplayer 2D shooter game on mobile, built in **Unity**, reaching **over 100k downloads** across **Hong Kong** and globally across different countries such as **Japan** and **Taiwan**.",

                        "Architected **scalable abstractions** for **developers** to build features upon, making it **efficient**, **easy** and **fun** for developers to build various **game mechanics**, such as different **enemies**, **weapons** and **skills**, while simultaneously ensuring state is synchronized during **multiplayer** play.",

                        "Developed **internal tooling** for **game designers** to enable **rapid prototyping** and **real-time iteration** in areas including **level design**, **enemy design**, and **weapon** systems and **skill** systems.",

                        "Engineered a **custom level editor**, architecting a **content pipeline** for **external game studios** to create levels and stages, sharing assets and display code while protecting internal game logic.",

                        "Served as **primary point of contact** for **external game studios**, writing **documentation**, handling feature requests and bug fixes to **minimize friction** in their workflow, ensuring seamless integration.",

                        "Led **code reviews** to improve **code quality**, reduce bugs, and facilitate **knowledge sharing**.",

                        "Enforced **coding standards** and **best practices** through **build-time tooling** and **validation**, greatly **reducing runtime errors**, increasing **game stability**, leading to **better user experience**.",

                        "Represented the company at the **Tokyo Game Show (TGS)** during exhibitions and business meetings.",
                    ]}
                />

                <Card
                    title="Technical Lead"
                    subtitle="Binary Tree Studio & the City University of Hong Kong"
                    date="Aug 2024 - Dec 2025"
                    descriptions={[
                        "Developed **360-degree immersive cinematic experiences** for the **City University of Hong Kong**, which was put on **exhibition** for **over a week**, serving **more than 200 in-person visitors**.",

                        "Led critical **project rescue and delivery**, taking over an incomplete codebase and successfully transforming it into a **production-ready application** under **tight deadlines**.",

                        "**Fullstack development** with **Unity** as the frontend, and **FastAPI** as the **Python** backend, using third party APIs for **AI image generation** and an on-premise workstation for **speech-to-text** functionality, integrating with **360 cinema projectors** and **XR controllers** and other **hardware** at the university.",

                        "Migrated the entire project to be **deployed on the web** via **WebXR**, increasing the accessibility of the experience to run on both **desktops** and **consumer VR headsets** such as the **Meta Quest**.",

                        "Built **internal tooling** for researchers to **dynamically update contents** of the 360 cinematic experience, as well as **dashboards** to analyze the behaviors of users interacting with the app. Created with modern web technologies and **JavaScript** frameworks, **self-hosted** and deployed on a **VPS**.",
                    ]}
                />
            </section>

            <section className="my-4 print:break-before-page">
                <h2>Projects & Presentations</h2>
                <Card
                    title="Guest Speaker"
                    subtitle="Game Dev Happy Hour HK"
                    date="Jul 2024 - Sep 2024"
                    descriptions={[
                        "Gave two technical talks at a monthly meetup for game developers and industry professionals.",

                        "**Online Multiplayer 101: The Building Blocks of MMOs**: Covered networking fundamentals and demonstrated practical synchronization strategies for **real-time multiplayer games**.",

                        "**Building Intelligent NPCs: A Crash Course on NPC AI**: Demonstrated progression from **simple state machines** to **complex behavior trees**, balancing AI complexity with performance.",
                    ]}
                />
                <Card
                    title="Game Jam"
                    subtitle="Global Game Jam Hong Kong 2024"
                    date="Jan 2024"
                    descriptions={[
                        "Made **Chicken or the Egg** in **2 days**, a **party game** supporting **up to 30 players**, where players scan a **QR Code** and play with a **mobile web app** as the controller, with the game projected on a screen.",

                        "Won the award for **Best Dynamic Content Game**, by implementing **server configuraions** to support **over-the-air (OTA) updates** to the game, enabling **realtime updates** without redeploying the game.",

                        "Designed the **interface and architecture** for power-ups under a tight schedule, enabling all programmers to **simultaneously develop** different game mechanics **within 2 days**.",
                    ]}
                />
            </section>

            <section className="my-4">
                <h2>Education</h2>
                <Card
                    title="Bachelor of Mechanical Engineering"
                    subtitle="The University of Hong Kong"
                    date="Sep 2018 - Jul 2022"
                    descriptions={[
                        "**First Class Honours**   |   Dean's Honour List",

                        "Focus in **Product Development** and **Manufacturing**",

                        "Minor in **Computer Science**. Courses in **Game** and **Mobile App** Development, **AI**, **Computer Vision**",

                        "**Team Captain** of HKU Unmanned Aerial Systems Team, leading **30+ people** in **overseas competitions**, combining **mechanical**, **electronics engineering**, and **computer science** to build unmanned **drones** to complete various missions, such as **aerial mapping** and **package delivery**.",
                    ]}
                />
            </section>

            <section className="my-4">
                <h2>Skills</h2>
                <BulletPoints
                    points={[
                        "Programming Languages: **C#**, **JavaScript/TypeScript**, **Python**, C++, C, Java, HTML, CSS",

                        "Frontend Technologies: **Unity**, **React**, React Native, Astro, HTMX, **Tailwind CSS**",

                        "Backend Technologies: **Node.js**, Bun, Express.js, Hono, ElysiaJS, FastAPI, .NET, **Docker**",

                        "Database Technologies: **PostgreSQL**, SQLite, Drizzle, Firebase, Supabase",

                        "Tools & Workflow: **Neovim**, **Linux**, Git, Automation Scripts, CI/CD",

                        "Professional Skills: Project Management, Technical Team Leadership, Mentoring & Coaching, Hiring",

                        "Spoken Languages: English, Cantonese, Mandarin",
                    ]}
                />
            </section>

            <section className="my-4">
                <h2>Hobbies</h2>
                <ul className="marker:text-gray-800">
                    <li>Music, Gaming, Reading, Coding, Basketball, Photography</li>
                    <li><p className="text-sm">Spending wayyyyy too much time on my Neovim config and Linux rice in the name of developer productivity.</p></li>
                </ul>
            </section>

            <div className="pt-0.5 print:hidden"></div>
        </article >
    )
}

export default App
