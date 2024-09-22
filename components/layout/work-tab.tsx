import Image from "next/image";

function WorkTab() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="flex gap-3 items-center">
          <Image src="/qualification/chase.png" width={50} height={50} alt="Chase" className="rounded-full"/>
          <div>
            <div>Software Developer</div>
            <div>JPMorgan Chase, United States</div>
            <div>2023 - Present</div>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-1">
          <li>Made front-end microapps using React.js and Typescript</li>
          <li>Improved reusability using global state and custom hooks</li>
          <li>Consumed backed APIs and services using Axios, React Query and GraphQL</li>
          <li>Leveraged react router for routing and Jest for unit testing with more than 80% coverage</li>
          <li>Increased user engagement by introducing features and ensuring accessibility</li>
          <li>Flagged and tested new feature using split.io and wiremock</li>
          <li>Monitored user interactions using analytics events</li>
        </ul>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="space-y-2">
        <div className="flex gap-3 items-center">
          <Image src="/qualification/protek.jpeg" width={50} height={50} alt="Pro-Tek" className="rounded-full" />
          <div>
            <div>React Developer</div>
            <div>Pro-tek Consulting, United States</div>
            <div>2023 - 2023</div>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-1">
          <li>Developed Front-end application using React and Typescript</li>
          <li> Automated HR process increasing efficiency by 50%</li>
          <li> Utilized React Hooks, state and props to create reusable components</li>
          <li>Increased performance of applications by 70% by reducing number of API calls using memoization</li>
          <li> Used Redux to manage state and Redux-thunk as middleware to handle asynchronous application</li>
          <li> Controlled Race conditions in redux-based applications</li>
          <li> Implemented unit testing using Jest and RTL and authentication using Firebase</li>
        </ul>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="space-y-2">
        <div className="flex gap-3 items-center">
          <Image src="/qualification/stevens.gif" width={50} height={50} alt="Stevens" className="rounded-full" />
          <div>
            <div>Teaching Assistant</div>
            <div>Stevens Institute of Technology, United States</div>
            <div>2022 - 2022</div>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-1">
          <li>Conducted classes and doubt sessions for graduate-level course Data Structures and Algorithms</li>
          <li>Handled homework and exam paper grading, and coursework structuring</li>
        </ul>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="space-y-2">
        <div className="flex gap-3 items-center">
          <Image src="/qualification/compitek.png" width={50} height={50} alt="Compitek" className="rounded-full" />
          <div>
            <div>Software Developer</div>
            <div>Compitek IT services, India</div>
            <div>2017 - 2021</div>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-1">
          <li>Collaborated in developing web services using the MERN stack as a primary technology</li>
          <li>Developed single-page applications by employing React Lifecycle methods and React hooks</li>
          <li>
            Improved the response time of APIs by 100% by implementing in-memory cache using Redis, useMemo, and
            useCallback
          </li>
          <li>Performed Authentication and Authorization by using express session for Node.js applications</li>
          <li> Employed Jest for writing unit tests and Postman for testing Restful APIs endpoints</li>
        </ul>
      </div>
    </div>
  );
}
export default WorkTab;
