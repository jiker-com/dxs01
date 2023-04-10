// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useListStore = defineStore('list', {
  state: () => {
    return {
      listdata: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }
      ],
      count: 1
    }
  }
})

export { useListStore }
