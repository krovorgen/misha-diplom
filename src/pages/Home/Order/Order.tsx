import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { Select } from '@alfalab/core-components/select';
import styles from './Order.module.scss';
import { v4 } from 'uuid';
import { CarType } from '../../../redux/features/carsSlice';
import { Button } from '@alfalab/core-components/button';
import { api } from '../../../api';
import { catchHandler } from '../../../helpers/catchHandler';
import { toast } from 'react-toastify';
import { Input } from '@alfalab/core-components/input';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { useAppSelector } from '../../../hooks';

type Props = { cars: CarType[] };

export const Order: FC<Props> = ({ cars }) => {
  const user = useAppSelector((state) => state.auth.user);

  const options = cars.map((item) => ({ ...item, content: item.model, key: v4() }));
  const [selectedCar, setSelectedCar] = useState(options[0]);

  const [needMechanic, setNeedMechanic] = useState(false);
  const handleChangeMechanic = () => setNeedMechanic(!needMechanic);

  const [clientName, setClientName] = useState('');
  const onChangeClientName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setClientName(e.currentTarget.value);
  }, []);

  const handleChange = useCallback(({ selectedMultiple }: any) => {
    if (selectedMultiple.length > 0) {
      setSelectedCar(selectedMultiple[0]);
    }
  }, []);

  const createOrder = useCallback(async () => {
    try {
      const data = await api.createOrder(selectedCar.id, clientName, Number(needMechanic));
      if (data.data.id) toast('Заказ создан');
    } catch ({ response }) {
      catchHandler(response);
    }
  }, [selectedCar.id, clientName, needMechanic]);

  return (
    <div className={styles.root}>
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
      {user && (
        <>
          <Input
            className={styles.select}
            block
            label="Имя клиента"
            value={clientName}
            onChange={onChangeClientName}
          />
          <Checkbox
            className={styles.checkbox}
            block={true}
            size="m"
            onChange={handleChangeMechanic}
            checked={needMechanic}
            label="Нужен ли сразу механик?"
          />
        </>
      )}
      <div className={styles.text}>
        <p>Мощность: {selectedCar.enginePower}</p>
        <p>Цена: {selectedCar.price}</p>
        <p>Год выпуска: {selectedCar.year}</p>
        <p>Коробка передач: {selectedCar.transmission}</p>
        <p>Максимальная скорость: {selectedCar.speedMax}</p>
        <p>
          Фото:
          <img className={styles.img} src={selectedCar.image} alt={selectedCar.model} />
        </p>
      </div>
      {localStorage.getItem('token') && (
        <Button view="accent" onClick={createOrder} size="xs" block className={styles.btn}>
          Заказать
        </Button>
      )}
    </div>
  );
};
