import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import "./index.css";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: '/cart',
        //   element: (
        //     <ProtectedRoute>
        //       <CartItems />
        //     </ProtectedRoute>
        //   )
        // }
      ],
    },
    // {
    //   path: '/admin',
    //   element: (
    //     <ProtectedRoute>
    //       <Dashboard />
    //     </ProtectedRoute>
    //   ),
    //   children: [
    //     {
    //       path: '/admin/products/add',
    //       element: (
    //         <ProtectedRoute>
    //           <AddProduct />
    //         </ProtectedRoute>
    //       ),
    //     },
    //   ],
    // }

  ]);

  return <RouterProvider router={router} />;
}

export default App;