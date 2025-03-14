import { Outlet } from "react-router-dom"
import Sidebar from "./AdminComponent/Sidebar"

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar className="h-full" />
      <div className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </div>
    </div>
  )
}
export default AdminLayout