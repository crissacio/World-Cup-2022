import { Suspense } from "react"; // <-- Cambiamos 'import React, { Suspense }' por esto
import { createHashRouter } from "react-router-dom";

// El resto del código queda exactamente igual...
const Loader = () => (
  <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif'
  }}>
      <p>Cargando sección...</p>
  </div>
);

export const router = createHashRouter([
    {
        path: "/",
        lazy: async () => {
            const { default: Home } = await import("@/pages/Home");
            return { element: <Suspense fallback={<Loader />}><Home /></Suspense> };
        }
    },
    {
        path: "/mundial",
        lazy: async () => {
            const { default: Tournament } = await import("@/pages/Tournament");
            return { element: <Suspense fallback={<Loader />}><Tournament /></Suspense> };
        }
    }
]);
