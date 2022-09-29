import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Intro } from "./components/Intro";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer, ToastContainerStyled } from "./styles";

export function HomePage() {
  return(
    <HomeContainer>
      <Intro />
      <OurCoffees />
      <ToastContainerStyled />
    </HomeContainer>
  )
}