import React, {useState, useEffect, lazy, Suspense}from 'react';
import getSlideInfo from './carousel/api';

const Carousel = lazy(()=> import('./carousel/Carousel'))

function App() {  
  let [showItems, setShowItems] = useState(4)

  let [Images, setImages] = useState([]);

  

  useEffect(() => {
    getSlideInfo().then(
    (data) => {
      let imageData = data.map(item => item)
      setImages(imageData);
    }
    )
  window.addEventListener('resize', ()=>{
    setShowItems(window.innerWidth < 545 ? 1 : 4)
  })
  setShowItems(window.innerWidth < 545 ? 1 : 4)
}, [])



  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel images={Images} // pass images and text content objects nested in array
          imagesToShow={showItems} // enter how many images you want to show to the user in the slide
        />
      </Suspense>
    </div>
  );
}

export default App;
