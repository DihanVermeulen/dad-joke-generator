import InstallPWAButton from "../../components/PwaInstallButton";
import { Typography } from "@mui/material";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader className="main__header">
      <Typography variant="h6" component="h1">
        Dad Joke Generator
      </Typography>
      <InstallPWAButton />
    </StyledHeader>
  );
};

export { Header };
