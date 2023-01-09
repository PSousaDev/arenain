import { ArrowLeft, ArrowRight, GalleryContainer } from './styles'

const images = [
  {
    id: 1,
    src: '/images/IN 1.jpg',
    name: "Imagem 1"
  },
  {
    id: 2,
    src: '/images/IN 2.jpg',
    name: "Imagem 2"
  },
  {
    id: 4,
    src: '/images/IN 3.jpg',
    name: "Imagem 3"
  },
  {
    id: 5,
    src: '/images/IN 4.jpg',
    name: "Imagem 1"
  },
  
]

function Gallery() {
  return (
    <>
      <GalleryContainer>
        <ArrowLeft />
        {images.map(image => (<img src={image.src} key={image.id} alt={image.name} />))}
        <ArrowRight />
      </GalleryContainer>
    </>
  );
}

export default Gallery;