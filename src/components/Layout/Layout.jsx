import { Outlet } from "react-router-dom";
import { Box, BoxContainer, Container, Link } from "./Layout.styled";

const Layout = () => {
  return (
    <Container>
      <BoxContainer>
        <Box>
          <nav>
            <Link to="/"> Home</Link>
            <Link to="todo">Todo List</Link>
          </nav>
        </Box>
        <main>
          <Outlet />
        </main>
      </BoxContainer>
    </Container>
  );
};

export default Layout;
