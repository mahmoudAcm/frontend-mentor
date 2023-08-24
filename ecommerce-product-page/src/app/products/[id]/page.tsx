import ImageViewer from '@/src/app/(ImageViewer)/ImageViewer';
import Details from '@/src/app/products/[id]/Details';
import ImageViewerDialog from '@/src/app/(ImageViewer)/ImageViewrDialog';

export default async function Products() {
  return (
    <>
      <ImageViewer activeImageIndex={0} />
      <ImageViewerDialog />
      <Details />
    </>
  );
}
