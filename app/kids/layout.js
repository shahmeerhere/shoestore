import SidebarLayout from "./SidebarLayout"

export const metadata = {
  title: "Kids",
}

export default function Layout({ children }) {
  return <SidebarLayout>{children}</SidebarLayout>
}
