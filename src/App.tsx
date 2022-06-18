import './App.css';
import InfoCard from './common/component/info-card/info-card.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import MenuPage from './pages/menu/menu.component';
import { Container, Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      {/* <div style={{ width: 300 }}>
        <InfoCard
          imageUrl="/assets/images/Calendar.png"
          titleText="Trail End Road United states"
          subtitleText="Working Hours"
          bgColor="#ffcf33" />
      </div> */}
      <Container >
        <Box sx={{ height: '100vh' }}>
          <Header />
          <HomePage />
          <MenuPage />
          <Footer />
        </Box>
      </Container>


    </div>
  );
}

export default App;
