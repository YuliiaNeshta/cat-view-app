import Slider from '@/components/Slider/Slider';
import { FC } from 'react';
import styles from './CatInfoCard.module.scss';

interface CatInfoCardProps {
  id: string;
  breedName?: string;
  description?: string;
  temperament?: string;
  origin?: string;
  weight?: string;
  life?: string;
  url?: string;
}

const CatInfoCard: FC<CatInfoCardProps> = ({ id, breedName, description, temperament, origin, weight, life, url }) => {
  return (
    <div className={styles.card}>
      <Slider />
      <div className={styles.slider}>SLIDER</div>
      <div className={styles.breedId}>{id}</div>
      <h1 className={styles.breed}>{breedName}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.grid}>
        <p className={styles.category}>
          <span className={styles.categoryName}>Temperament:</span>
          {temperament}
        </p>
        <p className={styles.category}>
          <span className={styles.categoryName}>Origin:</span>
          {origin}
        </p>
        <p className={styles.category}>
          <span className={styles.categoryName}>Weight:</span>
          {weight} kgs
        </p>
        <p className={styles.category}>
          <span className={styles.categoryName}>Life span:</span>
          {life} years
        </p>
      </div>
    </div>
  );
};

export default CatInfoCard;
