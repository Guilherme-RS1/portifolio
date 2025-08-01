import Home from './sections/Home';
import Header from './sections/Header';
import Projetos from './sections/Projetos';
import Contato from './sections/Contato';
import Footer from './sections/Footer';

import '../styles/globals.css';
import '../styles/header.css';
import '../styles/home.css';
import '../styles/projects.css';
import '../styles/contato.css';

export default function HomePage() {
  return (
    <main className='main'>
      <Header />
      <Home />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  )
}
