import { defineStore } from "pinia";

export const useCreateQuestStore = defineStore("create-quest", {
    state: () => ({
        currentQuest: {}
    })
});
