import React, { SyntheticEvent, useCallback } from 'react';
import { Input } from '@alfalab/core-components/input';

import styles from './Registration.module.scss';
import { Button } from '@alfalab/core-components/button';

export const Registration = () => {
  const onSubmit = useCallback((e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      fio: { value: fio },
      login: { value: login },
      email: { value: email },
      password: { value: password },
    } = e.currentTarget.elements as typeof e.currentTarget.elements & {
      fio: { value: string };
      login: { value: string };
      email: { value: string };
      password: { value: string };
    };

    console.log(fio);
    console.log(login);
    console.log(email);
    console.log(password);
  }, []);
  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input className={styles.input} block label="ФИО" size="m" name="fio" required />
        <Input className={styles.input} block label="Логин" size="m" name="login" required />
        <Input
          className={styles.input}
          block
          label="Почта"
          size="m"
          type="email"
          name="email"
          required
        />
        <Input className={styles.input} block label="Пароль" size="m" name="password" required />
        <Input
          className={styles.input}
          block
          label="Повторите пароль"
          size="m"
          name="passwordRepeat"
          required
        />
        <Button className={styles.button} view="accent" block size="m" type="submit">
          Registration
        </Button>
      </form>
    </div>
  );
};
