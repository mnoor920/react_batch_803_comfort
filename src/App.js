import HomePage from "./pages/homePage";
import Layout from "./global/layout";
import AboutPage from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/about-us' exact element={<AboutPage />} />
          <Route path='/contact-us' exact element={<ContactUs />} />
        </Routes>
        {/* <HomePage />
        <AboutPage />
        <ContactUs /> */}
      </Layout>
    </div>
  );
}

export default App;
