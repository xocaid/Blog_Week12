import './App.css';
import BlogPost from './components/allPosts';
import Footer from './components/margins/footer'
import Header from './components/margins/header';

function App() {
  return (
    <div className="App">
<h1>Blog Project</h1>
<Header />
<BlogPost />
<Footer />
    </div>
  );
}

export default App;
