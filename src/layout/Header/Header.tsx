import InstallPWAButton from "../../components/PwaInstallButton";
import { StyledHeader, Title } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader className="main__header">
      <Title variant="h5" component="h1">
        Dad Joke Generator
      </Title>
      <InstallPWAButton />
    </StyledHeader>
  );
};

export { Header };
