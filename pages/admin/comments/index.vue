<template>
  <commentTable :thead="['Name', 'Text', 'Status', 'Change status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span>{{ comment.name }}</span></td>
        <td><span>{{ comment.text }}</span></td>
        <td>
          <span v-if="comment.status" class="status true">Publish</span>
          <span v-else class="status false">Hidden</span>
        </td>
        <td><span @click="changeComment(comment.id)" class="link">Change status</span></td>
        <td><span @click="deleteComment(comment.id)"  class="link">Delete</span></td>
      </tr>
    </tbody>
  </commentTable>
</template>
<script>
import commentTable from '~/components/admin/CommentTable.vue'
export default {
  components: {
    commentTable
  },
  layout: 'admin',
  data() {
    return {
      comments: [
        {
          id: 1,
          name: 'Franclin',
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
          status: true
        },
        {
          id: 2,
          name: 'Dolly',
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
          status: false
        },
      ]
    }
  },
  methods: {
    changeComment(id) {
      console.log(`Change comment id - ${id}`)
    },
    deleteComment(id) {
      console.log(`delete comment id - ${id}`)
    }
  }
}
</script>
