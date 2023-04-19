import React, { SyntheticEvent, useCallback } from 'react';
import styles from '../Registration/Registration.module.scss';
import { Input } from '@alfalab/core-components/input';
import { Button } from '@alfalab/core-components/button';

export const Auth = () => {
  const onSubmit = useCallback((e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      login: { value: login },
      password: { value: password },
    } = e.currentTarget.elements as typeof e.currentTarget.elements & {
      login: { value: string };
      password: { value: string };
    };

    console.log(login);
    console.log(password);
  }, []);
  return (
    <div>
      Auth
      <div>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input className={styles.input} block label="Логин" size="m" name="login" required />
          <Input className={styles.input} block label="Пароль" size="m" name="password" required />
          <Button className={styles.button} view="accent" block size="m" type="submit">
            Auth
          </Button>
        </form>
      </div>
    </div>
  );
};
