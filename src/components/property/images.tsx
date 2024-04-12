import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Image } from "@/utils/interfaces";
import { urls } from "@/constants/urls";

interface PropertyImagesProps {
  images: Image[];
}

const PropertyImages: React.FC<PropertyImagesProps> = ({ images }) => {
  const createCarouselItemImage = (image: Image) => (
    <div key={image.id} style={{backgroundColor: " rgba(0, 0, 0, 0.9)", borderRadius: 12, width: "100%"}}>
      <img src={`${urls.strapiBaseUrl}${image.attributes.url}`} alt={`Image ${image.id}`} width="auto" style={{ borderRadius: 10, objectFit: "contain"}}/>
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
    dynamicHeight: false,
    emulateTouch: true,
    autoFocus: true,
    thumbWidth: 100,
    //thumbHeight: 80,
    selectedItem: 0,
    interval: 5000,
    transitionTime: 500,
    swipeScrollTolerance: 5,
    ariaLabel: undefined,
  });

  return (
      <Carousel {...getConfigurableProps()} animationHandler="fade" swipeable={false} > 
        {baseChildren.props.children}
      </Carousel>
  );
};

export default PropertyImages;
