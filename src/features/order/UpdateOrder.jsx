import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

export const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="POST" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
};

export const action = async ({ request, params }) => {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};
