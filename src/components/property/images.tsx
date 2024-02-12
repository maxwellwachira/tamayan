import { Container } from "@mantine/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const createCarouselItemImage = (index: number, options = {}) => (
    <div key={index}>
        <img src={`/assets/${index}.jpg`} style={{borderRadius: 10}}/>
        <p className="legend">Image {index}</p>
    </div>
);

const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;


const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: true,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 2000,
    transitionTime: 500,
    swipeScrollTolerance: 5,
    ariaLabel: undefined
});




const PropertyImages = () => {
    return (
        <Container>
        <Carousel {...getConfigurableProps()} animationHandler="fade" swipeable={false}>
            {baseChildren.props.children}
        </Carousel>
        </Container>
    )
}

export default PropertyImages;