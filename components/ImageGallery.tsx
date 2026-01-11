
import React, { useState, useEffect } from 'react';

export interface GalleryImage {
    src: string;
    alt: string;
    caption?: string;
}

interface ImageGalleryProps {
    images: GalleryImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'auto';
    };

    const goToNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    const goToPrevious = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (selectedImageIndex === null) return;

            if (event.key === 'Escape') {
                closeModal();
            } else if (event.key === 'ArrowRight') {
                goToNext();
            } else if (event.key === 'ArrowLeft') {
                goToPrevious();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [selectedImageIndex]);

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="group cursor-pointer overflow-hidden rounded-lg shadow-md" onClick={() => openModal(index)}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>

            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-[70] flex justify-center items-center p-4 transition-opacity duration-300 animate-fadeIn"
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                >
                    <style>{`
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        .animate-fadeIn {
                            animation: fadeIn 0.2s ease-in-out;
                        }
                    `}</style>
                    <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={images[selectedImageIndex].src}
                            alt={images[selectedImageIndex].alt}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                        />
                        {images[selectedImageIndex].caption && (
                            <p className="text-center text-white mt-2 text-sm md:text-base">{images[selectedImageIndex].caption}</p>
                        )}
                    </div>

                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white text-4xl hover:text-orange-500 transition-colors"
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
                        aria-label="Previous image"
                    >
                        &#10094;
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
                        aria-label="Next image"
                    >
                        &#10095;
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
