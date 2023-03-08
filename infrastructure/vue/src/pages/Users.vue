<script lang="ts" setup>
  import { useGetUsers } from "../hooks/get-users";

  const { users, error } = useGetUsers();
</script>

<template>
  <h1>Users</h1>
  <small v-if="error">{{ error.message }}</small>
  <button @click="getUsers">Reload</button>
  <table>
    <thead>
      <tr>
        <th>Identifier</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>
