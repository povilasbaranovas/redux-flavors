import { Link } from "react-router-dom";

export enum Routes {
  manualReducer = "/manual",
  useReducer = "/useReducer",
  plainRedux = "/redux",
  reduxSagas = "/reduxSagas",
  reduxToolkit = "/toolkit",
}

export function Nav() {
  return (
    <aside className="navigation">
      <nav>
        <ul>
          {Object.keys(Routes).map((route, idx) => {
            return (
              <li key={route}>
                <Link to={Routes[route as keyof typeof Routes]}>
                  {idx + 1}. {route}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
