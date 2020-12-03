<template>
  <Spinner v-if="isLoading" />
  <table v-else class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="category in categories" :key="category.id">
        <th scope="row">
          {{ category.id }}
        </th>

        <td>{{ category.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{
              name: 'admin-categories',
              params: { id: category.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button type="button" class="btn btn-link">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner";
export default {
  components: {
    Spinner,
  },
  data() {
    return {
      categories: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        this.isLoading = true;

        const { data } = await adminAPI.categories.get();
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.categories = data.categories;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法顯示分類,請稍後再試",
        });
      }
    },
  },
};
</script>

