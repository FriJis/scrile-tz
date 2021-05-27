<template>
    <div class="select__block select__block-list" v-if="options.length">
        <div
            class="select__item"
            v-for="o in options"
            :key="o.id"
            @click="clickItem(o)"
        >
            <div class="select__photo">
                <img :src="o.photo" />
            </div>
            <div class="select__info">
                <div class="select__name">{{ o.name }}</div>
                <div class="select__username">@{{ o.username }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IUser } from '../../utils/interfaces'

export default Vue.extend({
    props: {
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        clickItem(u: IUser): void {
            this.$emit('selected', u)
        },
    },
})
</script>
