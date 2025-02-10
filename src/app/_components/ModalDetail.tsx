import { Carousel } from "./CarouselModalDetail";
import { Modal } from "./Modal";

interface ModalDetailProps {
  title: string;
  description: string;
  images: { url: string; alt: string }[];
  isOpen: boolean;
  onClose: () => void;
}

export const ModalDetail: React.FC<ModalDetailProps> = ({
  title,
  description,
  images,
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{title}</h2>
    <Carousel images={images} />
    <div className="mt-4 sm:mt-6 text-gray-300">
      <p className="text-sm sm:text-base whitespace-pre-line">{description}</p>
    </div>
  </Modal>
);
