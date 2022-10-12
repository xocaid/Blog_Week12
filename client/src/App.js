import './App.css';
import AllBlogPosts from './components/allPosts';
import Footer from './components/margins/footer'
import Header from './components/margins/header';


function App() {
  return (
    <div className="App">
      <h1>Blog Project</h1>
      <Header />
      <AllBlogPosts />
      <Footer />
    </div>
  );
}

export default App;
