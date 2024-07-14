import './App.css';

// import Loading from './components/Loading';

import Header from './layout/Header';
import Footer from './layout/Footer';
import IntroduceMyself from './sections/IntroduceMyself';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import ContactMe from './sections/ContactMe';

function App() {
  return (
    <>
      <Header />
      <IntroduceMyself />
      <div id='about'>
        <About />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='experiences'>
        <Experiences />
      </div>
      <div id='contactMe'>
        <ContactMe />
      </div>
      <Footer />
    </>
    // <BrowserRouter>
    //   <ScrollToTop />
    //   <Header />
    //   <Routes>
    //     <Route
    //       path='/'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <IntroduceMyself />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path='/about'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <About />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path='/skills'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <Skills />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path='/projects'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <Projects />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path='/experiences'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <Experiences />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path='/contactMe'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <ContactMe />
    //         </Suspense>
    //       }
    //     />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>

    // <BrowserRouter>
    //   <ScrollToTop />
    //   <Header />
    //   <Routes>
    //     <Route
    //       path='/'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <IntroduceMyself />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path='/about'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <About />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path='/rooms'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <Skills />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path='/services'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <Projects />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path='/contactus'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <Experiences />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path='/booking'
    //       element={
    //         <Suspense fallback={<Loading />}>
    //           <ContactMe />
    //         </Suspense>
    //       }
    //     />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  );
}

export default App;
