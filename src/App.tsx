import './App.css';
import InfoCard from './common/component/info-card/info-card.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import MenuPage from './pages/menu/menu.component';
import { Container, Box } from '@mui/material';
import FormPage from './pages/form-page/form-page.component';

function App() {
  return (
    <div className="App">
      <Container >
        <Box sx={{ height: '100vh' }}>
          <Header />
          <HomePage />
          <FormPage />
          <MenuPage />
          <Footer />
        </Box>
      </Container>
    </div>
  );
}

export default App;
