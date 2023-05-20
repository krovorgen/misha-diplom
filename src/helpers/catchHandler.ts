import { toast } from 'react-toastify';

export const catchHandler = (response: any) => {
  typeof response.data.non_field_errors === 'object' &&
    response.data.non_field_errors.map((item: string) => toast.error(item));
};
