import { Container, Separator } from "@/components/Shared"
import { Footer, HeaderCart } from "@/components/Layout"

const CartLayout = (props) => {
    const { children } = props
  return (
    <>
        <HeaderCart />

        <Separator height={150} />

        <Container> {children} </Container>
        
        <Separator height={70} />

        <Footer />
    </>
  )
}

export { CartLayout }