<template>
  <section>
    <header class="header">
      <img
        v-if="currentPost.fields.heroImage"
        :src="currentPost.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
        :srcset="`${currentPost.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${currentPost.fields.heroImage.fields.file.url}?w=1000&h=250&fit=fill 1000w, ${currentPost.fields.heroImage.fields.file.url}?w=2000&h=500&fit=fill 2000w`"
        size="100vw"
        :alt="currentPost.fields.heroImage.fields.description"
      />
    </header>
    <article class="section">
      <div class="headline">
        <h1 class="title has-text-centered">{{ currentPost.fields.title }}</h1>
        <p
          class="headline__date has-text-right"
        >{{ ( new Date(currentPost.fields.publishDate)).toDateString() }}</p>
      </div>
      <vue-markdown class="content">{{ currentPost.fields.body }}</vue-markdown>
    </article>
  </section>
</template>

<script>
import VueMarkdown from "vue-markdown";
import { createClient } from "~/plugins/contentful.js";
const client = createClient();
export default {
  head() {
    return {
      title: this.currentPost.fields.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.currentPost.fields.description
        }
      ]
    };
  },
  data() {
    return {
      allPosts: [],
      currentPost: []
    };
  },
  components: {
    VueMarkdown
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.publishDate"
      })
      .then(entries => {
        const posts = entries.items;
        const current = posts.filter(function(item) {
          return item.sys.id === params.id;
        });
        return {
          allPosts: posts,
          currentPost: current[0]
        };
      })
      .catch(console.error);
  },
  computed: {
    dateOrder: function() {
      for (let i = 0; i < this.allPosts.length; i++) {
        if (
          this.allPosts[i].fields.publishDate ===
          this.currentPost.fields.publishDate
        ) {
          return i;
        }
      }
    },
  }
};
</script>

<style scoped>
.headline {
  margin-bottom: 1.5rem;
}
.headline__date {
  font-size: 0.8rem;
}
.content {
  margin-bottom: 3rem;
}
</style>