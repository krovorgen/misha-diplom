import React, { FC, useCallback, useState } from 'react';
import { Select } from '@alfalab/core-components/select';
import styles from './Order.module.scss';
import { v4 } from 'uuid';
import { CarType } from '../../../redux/features/carsSlice';

type Props = { cars: CarType[] };

export const Order: FC<Props> = ({ cars }) => {
  const options = cars.map((item) => ({ ...item, content: item.model, key: v4() }));
  const [selectedCar, setSelectedCar] = useState(options[0]);

  const handleChange = useCallback(({ selectedMultiple }: any) => {
    setSelectedCar(selectedMultiple[0]);
  }, []);

  return (
    <div>
      <Select
        className={styles.select}
        allowUnselect={true}
        selected={selectedCar}
        onChange={handleChange}
        size="s"
        options={options}
        placeholder="Выберите машину"
        block={true}
      />
      <div className={styles.text}>
        <p>Мощность: {selectedCar.enginePower}</p>
        <p>Цена: {selectedCar.price}</p>
        <p>Год выпуска: {selectedCar.year}</p>
        <p>Коробка передач: {selectedCar.transmission}</p>
        <p>Максимальная скорость: {selectedCar.speedMax}</p>
      </div>
    </div>
  );
};
