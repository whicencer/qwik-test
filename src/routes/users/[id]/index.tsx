import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { IUser } from '../users.typings';

export const useGetUsers = routeLoader$(async (requestEvent) => {
  const id = requestEvent.params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return (await response.json()) as IUser;
})

export default component$(() => {
  const users = useGetUsers();

  return <div>
    <p>Name: {users.value.name}</p>
    <p>E-mail: {users.value.email}</p>
    <p>Username: {users.value.username}</p>
  </div>;
});