import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledHeader = styled("header")`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100vw;
  overflow-x: hidden;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #000945;
`;

export const Title = styled(Typography)<{ component: string }>`
  font-weight: 600;
  letter-spacing: 2px;
`;

export default { StyledHeader, Title };
