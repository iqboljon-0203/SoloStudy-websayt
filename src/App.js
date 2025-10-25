import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Materials = lazy(() => import("./pages/Materials"));
const Videos = lazy(() => import("./pages/Videos"));
const Tests = lazy(() => import("./pages/Tests"));
const Assignments = lazy(() => import("./pages/Assignments"));
const AssignmentsByWeek = lazy(() => import("./pages/AssignmentsByWeek"));
const Library = lazy(() => import("./pages/Library"));
const News = lazy(() => import("./pages/News"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Help = lazy(() => import("./pages/Help"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-300">Yuklanmoqda...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route
              path="/assignments/by-week"
              element={<AssignmentsByWeek />}
            />
            <Route path="/library" element={<Library />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
