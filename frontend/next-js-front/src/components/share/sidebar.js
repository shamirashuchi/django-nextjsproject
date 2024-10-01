// "use client";
// import React from "react";
// import Link from "next/link";

// const Sidebar = () => {
//   return (
//     <aside className="w-64 bg-white shadow-md h-full">
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//         <nav>
//           <ul>
//             <li className="mb-2">
//               <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600">
//                 Home
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link href="/dashboard/profile" className="text-gray-700 hover:text-indigo-600">
//                 Profile
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link href="/dashboard/settings" className="text-gray-700 hover:text-indigo-600">
//                 Settings
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link href="/dashboard/reports" className="text-gray-700 hover:text-indigo-600">
//                 Reports
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link href="/dashboard/help" className="text-gray-700 hover:text-indigo-600">
//                 Help
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserRole = () => {
      fetch("http://127.0.0.1:8000/api/account/account", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
          return response.json();
        })
        .then((data) => {
            console.log(data[1]);
          setRole(data[0].role_name);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchUserRole();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Define routes based on role_name
  const routes = {
    "job-seeker": [
      { path: "/dashboard", name: "Home" },
      { path: "/dashboard/users", name: "Manage Users" },
      { path: "/dashboard/reports", name: "Reports" },
      { path: "/dashboard/settings", name: "Settings" },
    ],
    employer: [
      { path: "/dashboard", name: "Home" },
      { path: "/dashboard/profile", name: "Profile" },
      { path: "/dashboard/jobs", name: "My Jobs" },
      { path: "/dashboard/applications", name: "Applications" },
    ],
    // Add more roles as needed
  };

  const userRoutes = routes[role] || [];
  const sidebarColorClasses = {
    "job-seeker": "bg-blue-500",
    employer: "bg-green-500",
    // Add more role colors as needed
  };

  const sidebarClass = sidebarColorClasses[role] || "bg-gray-200"; 

  return (
    <aside className={`w-64 ${sidebarClass} shadow-md h-full`}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <nav>
          <ul>
            {userRoutes.map((route) => (
              <li className="mb-2" key={route.path}>
                <Link href={route.path} className="text-gray-700 hover:text-indigo-600">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
