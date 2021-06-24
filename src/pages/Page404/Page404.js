import React from 'react';
import {
  Image,
  Container,
  Menu,
  Header,
  Button,
} from 'semantic-ui-react';
import notfound from '../../assets/NotFound/notfound.jpg.jpg';

function Page404() {
  return (
    <Container style={pageContainer} textAlign="center">
      <p className="notfound">
        <Image src={notfound} alt="NotFound" size="large" centered />
      </p>
      <Header as="h5">The page you are looking for has been moved or deleted, go back to home page</Header>
      <Menu.Item as="a" href="/">
        <Button color="brown">Go To Home page</Button>
      </Menu.Item>
    </Container>

  );
}
export default Page404;

const pageContainer = {
  marginTop: '15em',
  marginBottom: '4em',
};
