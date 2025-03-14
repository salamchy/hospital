import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home"
import "./index.css";
import About from "./pages/About";
import AboutLayout from "./components/AboutLayout";
import ServicesLayout from "./components/ServicesLayout";
import Service from "./pages/Service";
import DoctorLayout from "./components/DoctorLayout";
import Doctors from "./pages/Doctors";
import NewsLayout from "./components/NewsLayout";
import NewsPage from "./pages/News";
import ContactLayout from "./components/ContactLayout";
import Contact from "./pages/Contact";
import AppointmentLayout from "./components/AppointmentLayout";
import Appointment from "./pages/Appointment";
import AdminLogin from "./admin/AdminComponent/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import AllAppointment from "./admin/AdminComponent/AllAppointment";
import Contacts from "./admin/AdminComponent/Contacts";
import CreateDoctor from "./admin/AdminComponent/CreateDoctor";
import DoctorsList from "./admin/AdminComponent/AllDoctors";
import CreateNews from "./admin/AdminComponent/CreateNews";
import NewsList from "./admin/AdminComponent/NewsList";
import NewsDetail from "./components/NewsDetail";
import CreateService from "./admin/AdminComponent/CreateService";
import ServiceList from "./admin/AdminComponent/ServiceList";
import ServiceDetail from "./components/ServiceDetail";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        }
      ],
    },
    {
      path: '/admin',
      element: <AdminLogin />,
    },
    {
      path: '/admin/dashboard',
      element: (
        <AdminLayout />
      ),
      children: [
        {
          path: '/admin/dashboard/appointment',
          element: (
            <AllAppointment />
          ),
        },
        {
          path: '/admin/dashboard/contact',
          element: (
            <Contacts />
          ),
        },
        {
          path: '/admin/dashboard/create',
          element: (
            <CreateDoctor />
          ),
        },
        {
          path: '/admin/dashboard/all',
          element: (
            <DoctorsList />
          ),
        },
        {
          path: '/admin/dashboard/news',
          element: (
            <CreateNews />
          ),
        },
        {
          path: '/admin/dashboard/news-list',
          element: (
            <NewsList />
          ),
        },
        {
          path: '/admin/dashboard/add-service',
          element: (
            <CreateService />
          ),
        },
        {
          path: '/admin/dashboard/service-list',
          element: (
            <ServiceList />
          ),
        },
      ],
    },
    {
      path: "/aboutus",
      element: <AboutLayout />,
      children: [
        {
          index: true,
          element: <About />,
        },
      ]
    },
    {
      path: "/service",
      element: <ServicesLayout />,
      children: [
        {
          index: true,
          element: <Service />,
        },
        {
          path: "/service/:id",
          element: <ServiceDetail />,
        }
      ]
    },
    {
      path: "/doctors",
      element: <DoctorLayout />,
      children: [
        {
          index: true,
          element: <Doctors />,
        },
      ]
    },
    {
      path: "/news",
      element: <NewsLayout />,
      children: [
        {
          index: true,
          element: <NewsPage />,
        },
        {
          path: "/news/:id",
          element: <NewsDetail />,
        },
      ]
    },
    {
      path: "/contact",
      element: <ContactLayout />,
      children: [
        {
          index: true,
          element: <Contact />,
        },
      ]
    },
    {
      path: "/appointment",
      element: <AppointmentLayout />,
      children: [
        {
          index: true,
          element: <Appointment />,
        },
      ]
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
