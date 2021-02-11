<template>
  <main>
    Hello Blogs
    <b-row cols="1" v-if="blogData">
      <b-row v-for="(blog, i) in blogData" :key="i">
        <b-col>
          <b-row no-gutters>Blog ID</b-row>
          <b-alert variant="danger">{{ blog._id }}</b-alert>
        </b-col>
        <b-col>
          <b-row no-gutters>Blog Title</b-row>
          <b-alert variant="danger">{{ blog.title }}</b-alert>
        </b-col>
      </b-row>
    </b-row>
  </main>
</template>

<script>
export default {
  name: "blogs-page",
  data() {
    return {
      blogData: null,
    };
  },
  mounted() {
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      const { data: blogData } = await this.axios.get(
        `https://blogdb-43dc.restdb.io/rest/blogdata?h={"$fields":{"title":1,"_id":1}}`
      );
      this.$set(this, "blogData", blogData);
    },
  },
};
</script>

<style>
</style>