import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import styles from './CustomCarousel.module.css';

function CustomCarousel() {
  const allArts = useSelector((state) => state.allArts);

  const currentArts = allArts.slice(8, 11);

  return (
    <div className={styles.carouselContainer}>
      {currentArts.length > 0 && (
        <Carousel className={styles.carousel}>
          <Carousel.Item>
            <div className={styles.imgContainer}>
              <img className={styles.carouselImage} src={currentArts[0].image} alt='First slide' />
            </div>
            <Carousel.Caption className={styles.captionContainer}>
              <h3>{currentArts[0].title}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.imgContainer}>
              <img className={styles.carouselImage} src={currentArts[1].image} alt='Second slide' />
            </div>

            <Carousel.Caption className={styles.captionContainer}>
              <h3>{currentArts[1].title}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.imgContainer}>
              <img className={styles.carouselImage} src={currentArts[2].image} alt='Third slide' />
            </div>

            <Carousel.Caption className={styles.captionContainer}>
              <h3>{currentArts[2].title}</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
}

export default CustomCarousel;
