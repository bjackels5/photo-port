import React, { useState } from 'react'; // this line was not supplied, but the module (20.1.5) shows it in App.js
// import logo from './logo.svg'; 20.1.5 does not show this line in App.js
// import './App.css';20.1.5 does not show this line in App.js
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
    const [categories] = useState([
        {
            name: "commercial",
            description: "Photos of grocery stores, food trucks, and other commercial projects"
        },
        {
            name: "portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "food",
            description: "Delicious delicacies"
        },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature"
        }
    ]);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
            <main>
                <ContactForm></ContactForm>
                <Gallery
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                ></Gallery>
                <About></About>
            </main>
        </div>
    );
}

export default App;
