import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import about1 from '@sections/about1';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';



const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Faq />
    <Team />
    
    <Footer />
  </Layout>
);

export default IndexPage;
