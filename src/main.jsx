import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/Home/Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicTacToeRedirect from "./routes/Redirect/TicTacToeRedirect.jsx";
import SnakeRedirect from "./routes/Redirect/SnakeRedirect.jsx";
import ForcaRedirect from "./routes/Redirect/ForcaRedirect.jsx";
import HanoiRedirect from "./routes/Redirect/HanoiRedirect.jsx";
import GhostRedirect from "./routes/Redirect/GhostRedirect.jsx";
import Quiz from "./routes/Quiz/Quiz.jsx";
import HanoiDetailRedirect from "./routes/GameDetails/HanoiDetailsRedirect.jsx"
import SnakeDetailsRedirect from "./routes/GameDetails/SnakeDetailsRedirect.jsx"
import { QuizProvider } from "./context/quiz.jsx";
import ForcaDetails from "./routes/GameDetails/ForcaDetailsRedirect.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/velha",
        element: <TicTacToeRedirect />,
      },
      {
        path: "/snake",
        element: <SnakeRedirect />,
      },
      {
        path: "/forca",
        element: <ForcaRedirect />,
      },
      {
        path: "/hanoi",
        element: <HanoiRedirect />,
      },
      {
        path: "/ghost",
        element: <GhostRedirect/>
      },
      {
        path: "/quiz",
        element: (
          <QuizProvider>
            <Quiz />
          </QuizProvider>
        ),
      },
      {
        path:"hanoidetails",
        element: <HanoiDetailRedirect/>
      },
      {
        path: "snakedetails",
        element: <SnakeDetailsRedirect/>
      },
      {
        path: "forcadetails",
        element: <ForcaDetails/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
