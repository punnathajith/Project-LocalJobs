import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import { Outlet } from "react-router-dom";
import Container from "@/components/user/Container";

const Layout = () => {
  return (
    <div className="bg-gradient-to-b from-white via-cyan-100 to-white min-h-screen pb-5">
      <Navbar />
        <Container>
          <Outlet/>
        </Container>
      <Footer/>
    </div>
  )
}

export default Layout