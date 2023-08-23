import ImageViewer from '@/src/app/products/[id]/ImageViewer';
import Details from '@/src/app/products/[id]/Details';

export default async function Products() {
  return (
    <>
      <ImageViewer />
      <Details />
    </>
  );
}
