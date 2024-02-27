import React from "react";
import { Container } from "@mantine/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Image } from "@/utils/interfaces";
import { urls } from "@/constants/urls";

interface PropertyImagesProps {
  images: Image[];
}

const PropertyImages: React.FC<PropertyImagesProps> = ({ images }) => {
  const createCarouselItemImage = (image: Image) => (
    <div key={image.id}>
      <img src={`${urls.strapiBaseUrl}${image.attributes.url}`} style={{ borderRadius: 10 }} alt={`Image ${image.id}`} />
      {/* <p className="legend">{`Image ${image.attributes.name}`}</p> */}
    </div>
  );

  const baseChildren = <div>{images.map(createCarouselItemImage)}</div>;

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
    ariaLabel: undefined,
  });

  return (
    <Container>
      <Carousel {...getConfigurableProps()} animationHandler="fade" swipeable={false}>
        {baseChildren.props.children}
      </Carousel>
    </Container>
  );
};

export default PropertyImages;
