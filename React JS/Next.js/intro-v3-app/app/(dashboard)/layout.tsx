import NewToDoForm from "@/components/NewToDoForm"

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <div>
        <NewToDoForm/>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
