import React from 'react';
import './featuredStyles.css';
import { itemData } from '../../items-MOCK_DATA';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class FeaturedStyles extends React.Component {

  render() {
    return(
      <div className="featureContainer">

            <CarouselProvider
              totalSlides={2}
              naturalSlideWidth={100}
              naturalSlideHeight={125}
            >
              <Slider>
                  <Slide index={0}>
                    <Image
                      className="featureImage"
                      src={itemData[0].img} />
                  </Slide>
                  <Slide index={1}>
                    <Image
                      className="featureImage"
                      src={itemData[1].img} />
                  </Slide>
              </Slider>

            </CarouselProvider>



      </div>
    )
  }
}


export default FeaturedStyles;
