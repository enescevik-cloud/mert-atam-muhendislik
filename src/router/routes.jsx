import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BizKimizPage from "../pages/BizKimizPage";
import VisionPage from "../pages/VisionPage";
import MissionPage from "../pages/MissionPage";

import ServicesPage from "../pages/ServicesPage";
import ServiceDetailPage from "../pages/services/ServiceDetailPage";

import PartnersPage from "../pages/PartnersPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "hakkinda",
        element: <AboutPage />,
      },
      {
        path: "hakkinda/biz-kimiz",
        element: <BizKimizPage />,
      },
      {
        path: "hakkinda/vizyon",
        element: <VisionPage />,
      },
      {
        path: "hakkinda/misyon",
        element: <MissionPage />,
      },
      {
        path: "hizmetler",
        element: <ServicesPage />,
      },
      {
        path: "hizmetler/:slug",
        element: <ServiceDetailPage />,
      },
      {
        path: "cozum-ortaklarimiz",
        element: <PartnersPage />,
      },
      {
        path: "projeler",
        element: <ProjectsPage />,
      },
      {
        path: "iletisim",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;