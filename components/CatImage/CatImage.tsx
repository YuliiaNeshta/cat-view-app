import { useGetPhotosQuery } from '@/redux/apiRequest/breedsApi';
import { FC } from 'react';
import styles from './CatImage.module.scss';

interface CatImageProps {
  isLiked: boolean;
  breedId: string;
  breedName: string;
}

const CatImage: FC<CatImageProps> = ({ isLiked, breedId, breedName }) => {
  const { data: dataPhotos = [], isLoading } = useGetPhotosQuery({
    breedId,
    limit: '1',
  });

  console.log(dataPhotos);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      {dataPhotos.map(item => (
        <div className={styles.wrapper}>
          <div className={styles.overlay}>
            {isLiked ? <button className={styles.like}>Like</button> : <h5 className={styles.breed}>{breedName}</h5>}
          </div>
          <img className={styles.picture} width="200" key={item.id} src={item.url} alt={`Порода ${breedName}`} />
        </div>
      ))}
    </div>
  );
};

export default CatImage;
