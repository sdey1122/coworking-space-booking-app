import {
  Facebook,
  Instagram,
  MailOutline,
  Pinterest,
  Phone,
  Room,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: black;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1`
  color: white;
`;

const Description = styled.p`
  margin: 20px 0px;
  color: white;
`;

const SMContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  text-decoration: none;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  color: white;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
`;

const Footer = () => {
  const openGoogleMaps = () => {
    window.open("https://maps.google.com?q=Bangalore, Karnataka, India");
  };

  const openEmail = () => {
    window.location.href = "mailto:johndoe007@gmail.com";
  };

  return (
    <Container>
      <Left>
        <Logo> FLIQA </Logo>
        <Description>
          lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus lorem
          ipsum dolor sit amet consectetur adipisicing elit
        </Description>
        <SMContainer>
          <SocialIcon
            href="https://www.facebook.com/"
            target="_blank"
            color="3B5999"
          >
            <Facebook />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com/"
            target="_blank"
            color="E4405F"
          >
            <Instagram />
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com/"
            target="_blank"
            color="55ACEE"
          >
            <Twitter />
          </SocialIcon>
          <SocialIcon
            href="https://www.pinterest.com/"
            target="_blank"
            color="E60023"
          >
            <Pinterest />
          </SocialIcon>
          <SocialIcon
            href="https://web.whatsapp.com/"
            target="_blank"
            color="25D366"
          >
            <WhatsApp />
          </SocialIcon>
        </SMContainer>
      </Left>
      <Center>
        <Title> USEFUL LINKS </Title>
        <List>
          <ListItem>
            <StyledLink to="/">Home</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/products">Workspaces</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/auth/register">Register</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/auth/login">Login</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/account">My Account</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/cart">Cart</StyledLink>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title> CONTACT INFO. </Title>
        <ContactItem onClick={openGoogleMaps}>
          <Room style={{ marginRight: "10px" }} /> Bangalore, Karnataka, India
        </ContactItem>
        <ContactItem onClick={openEmail}>
          <MailOutline style={{ marginRight: "10px" }} /> johndoe007@gmail.com
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 999999999
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
