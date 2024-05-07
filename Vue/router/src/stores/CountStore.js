import { defineStore } from "pinia";

export const useCountStore = defineStore('CountStore', {
    //data
    state: () => ({
        count: 0,
        incrementAmount: 50,
        decrementAmount:30,
    }),
    //computed
    getters: {
        doubleCount() {
            return this.count * 2
        }
    },
    actions: {
        increment() {
            this.count+=this.incrementAmount
        },
        decrement() {
            this.count-=this.decrementAmount
        }
    }
});