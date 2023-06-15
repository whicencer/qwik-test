import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { IUser } from './users.typings';

export const useGetUsers = routeLoader$(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return (await response.json()) as IUser[];
})

export default component$(() => {
  const users = useGetUsers();

  return <div>{users.value.map(el => {
    return <a style={{ display: 'block', margin: '10px' }} href={`/users/${el.id}`} key={el.id}>{el.name}</a>;
  })}</div>;
});