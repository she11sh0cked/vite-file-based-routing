import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export interface IIndexProps {}

const Index: FC<IIndexProps> = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Root</a> &rarr; <a href="#/page1">Page 1</a>
            </li>
            <li>
              <a href="#/page2">Page 2</a>
            </li>
            <li>
              <a href="/file.txt">file.txt</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          Hello Outlet Routing! (I am from <code>src/index.tsx</code>)
        </p>

        {location.pathname === "/" ? (
          <Navigate to="/page1" replace state={{ location }} />
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
};

export default Index;
