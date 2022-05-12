import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter, Phone, MailOutline } from "@material-ui/icons"


const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;  
`;
const Title = styled.h3`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;s
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

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Nic Babineaux</Logo>
        <Description>This is my eCommerce portfolio project</Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Mens Fashion</ListItem>
            <ListItem>Womens Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem><MailOutline style={{marginRight:"10px"}}/>nickpbab@gmail.com</ContactItem>
          <ContactItem><Phone style={{marginRight:"10px"}}/>337 257-9202</ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
