import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./Pages/Loading";
const AppLayout = lazy(() => import("./AppLayout"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Project = lazy(() => import("./Pages/Project"));

const ErrorPage = lazy(() => import("./Pages/ErrorPage"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}
