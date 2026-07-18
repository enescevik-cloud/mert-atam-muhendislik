import { Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BizKimizPage from "../pages/BizKimizPage";
import VisionPage from "../pages/VisionPage";
import MissionPage from "../pages/MissionPage";
import ServicesPage from "../pages/ServicesPage";
import ServiceDetailPage from "../pages/services/ServiceDetailPage";
import PartnersPage from "../pages/PartnersPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },

      /* ==============================================
         KURUMSAL
      ============================================== */

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

      /* ==============================================
         HİZMETLER
      ============================================== */

      {
        path: "hizmetler",
        element: <ServicesPage />,
      },

      {
        path: "hizmetler/:serviceSlug",
        element: <ServiceDetailPage />,
      },

      /* ==============================================
         REFERANSLAR
      ============================================== */

      {
        path: "referanslar",
        element: <PartnersPage />,
      },

      {
        path: "cozum-ortaklarimiz",
        element: (
          <Navigate
            to="/referanslar"
            replace
          />
        ),
      },

      /* ==============================================
         İLETİŞİM
      ============================================== */

      {
        path: "iletisim",
        element: <ContactPage />,
      },

      /* ==============================================
         ESKİ / ALTERNATİF ADRES YÖNLENDİRMELERİ
      ============================================== */

      {
        path: "kurumsal",
        element: (
          <Navigate
            to="/hakkinda/biz-kimiz"
            replace
          />
        ),
      },

      {
        path: "biz-kimiz",
        element: (
          <Navigate
            to="/hakkinda/biz-kimiz"
            replace
          />
        ),
      },

      {
        path: "vizyon",
        element: (
          <Navigate
            to="/hakkinda/vizyon"
            replace
          />
        ),
      },

      {
        path: "misyon",
        element: (
          <Navigate
            to="/hakkinda/misyon"
            replace
          />
        ),
      },

      /* ==============================================
         404
      ============================================== */

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;