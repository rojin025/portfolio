import "../assets/styles/Project.scss";

import mock04 from "../assets/images/mock04.png";
import rental from "../assets/images/Rental.gif";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <div>
            <a
              href="https://react-side-project-rentals.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={rental} className="zoom" alt="thumbnail" width="100%" />
            </a>
          </div>
          <div>
            <a
              href="https://react-side-project-rentals.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Rental Web App</h2>
            </a>
            <p>
              The AirBnB is a house rental platform built with Next.js,
              Supabase, and REST APIs, offering a seamless experience for
              renters and landlords. Users can easily browse detailed property
              listings, apply filters, and securely manage bookings. Whether
              you're searching for a cozy apartment or listing a home, our
              platform simplifies the entire process.
            </p>
          </div>
        </div>
        <div className="project">
          <div>
            <a
              href="https://github.com/rojin025/angular-side-project/tree/main/Drugs-App"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
            </a>
          </div>

          <div>
            <a
              href="https://github.com/rojin025/angular-side-project/tree/main/Drugs-App"
              target="_blank"
              rel="noreferrer"
            >
              <h2> Medication Web App</h2>
            </a>
            <p>
              A secure web app using Angular and JWT for user authentication.
              Guests can browse medications and read reviews, while logged-in
              users can add, update, or delete reviews.
            </p>
            <ul>
              <li>
                Key Features: JWT Authentication: Login-based access for
                protected actions. Lazy Loading: User-protected components are
                lazy-loaded for performance. State Management: Signals for all
                state properties in components/services. Reactive Forms: Use
                ReactiveFormsModule exclusively for forms. Angular Material: UI
                built with Angular Material, adhering to web standards.
              </li>
              <li>
                Development Guidelines: Leverage the latest Angular features
                (e.g., standalone components, signals). Ensure clean
                architecture, strong type-checking, and modularity. Optimize
                performance with lazy loading and OnPush change detection. This
                app prioritizes security, efficiency, and modern design.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
