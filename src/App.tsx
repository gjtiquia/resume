function App() {
  return (
    <article className="
      h-dvh bg-slate-900 p-6 
      prose prose-invert max-w-none
      prose-h1:mt-0 prose-h1:mb-4 prose-h1:text-5xl
      prose-h2:mt-0 prose-h2:mb-1 prose-h2:font-extrabold
      prose-h3:mt-0 prose-h3:mb-0 prose-h3:font-bold
      prose-p:my-0 prose-p:leading-normal
      prose-ul:my-0 prose-ul:pl-5 prose-ul:leading-normal prose-ul:list-outside
      prose-li:my-0 prose-li:p-0
    ">
      <section className="flex justify-between items-end">
        <div>
          <h1>GJ Tiquia</h1>
          <p className="text-xl font-extrabold">Software Engineer</p>
        </div>

        <div className="not-prose">
          <ul className="flex flex-col gap-0">
            <li>gjtiquia.com</li>
            <li>gjtiquia@gmail.com</li>
            <li>linkedin.com/in/gjtiquia</li>
          </ul>
        </div>
      </section>

      <section className="mt-3 mb-3">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nulla illo necessitatibus itaque ipsum dolores, earum dignissimos, recusandae ipsam quibusdam eos aliquid vel impedit commodi esse error architecto explicabo vero.</p>
      </section>

      <section className="my-3">
        <h2>Professional Work Experience</h2>
        <Item
          title="Game Developer & Code Architect"
          subtitle="Daytech HK Limited"
          date="June 2023 - Present"
          descriptions={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores optio eos.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores optio eos.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores optio eos.",
          ]}
        />
        <Item
          title="Junior Game Developer"
          subtitle="Daytech HK Limited"
          date="June 2022 - July 2023"
          descriptions={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores optio eos.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores optio eos.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores optio eos.",
          ]}
        />
      </section>

      <section className="my-3">
        <h2>Education</h2>
        <Item
          title="Bachelor of Mechanical Engineering"
          subtitle="The University of Hong Kong"
          date="Sept 2018 - July 2022"
          descriptions={[
            "First Class Honours | 3x Dean's Honour List | Highest Semester GPA : 3.80 / 4.30",
            "Focus in Product Development and Manufacturing, as well as Unmanned Aerial Systems",
            "Minor in Computer Science, with courses in Game and Mobile App Development, Artificial Intelligence",
            "Team Captain of HKU Unmanned Aerial Systems Team, leading 30+ people to participate in the AUVSI SUAS 2022 competition in the US",
          ]}
        />
      </section>
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
      <div className="flex justify-between text-nowrap">
        <div className="flex items-center gap-2">
          <h3>{props.title}</h3>
          <p>| {props.subtitle}</p>
        </div>
        <div>
          <i>{props.date}</i>
        </div>
      </div>
      <ul>
        {props.descriptions.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </div>
  )
}