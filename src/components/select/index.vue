<template>
    <div class="select">
        <div class="select__field">
            <div class="select__icon">
                <img src="../../assets/img/zoom.png" />
            </div>
            <input
                type="text"
                v-model="field"
                placeholder="Search..."
                @input="inputHandler()"
            />
        </div>
        <div class="select__block select__block-loader" v-if="loading">
            <v-loader></v-loader>
        </div>
        <v-list
            :options="compUsers"
            v-else
            @selected="(e) => selecting(e)"
        ></v-list>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IUser, IPhoto } from '../../utils/interfaces'
import { user } from '../../utils/api'
import { AxiosResponse } from 'node_modules/axios'
import { hasByName } from '@/utils/filters'
import loader from '../loader.vue'
import list from './list.vue'

export default Vue.extend({
    components: {
        'v-list': list,
        'v-loader': loader,
    },
    data() {
        return {
            field: '' as string,
            users: [] as IUser[],
            loading: false as boolean,
            show: true,
        }
    },
    computed: {
        compUsers(): IUser[] {
            return this.field.length && this.show
                ? this.users.filter(({ name }) => hasByName(name, this.field))
                : []
        },
    },
    methods: {
        inputHandler(): void {
            !this.users.length ? this.getUsers() : ''
            this.show = true
        },
        selecting({ name }: IUser): void {
            this.field = name
            this.show = false
        },
        async getUsers(): Promise<void> {
            this.loading = true
            const { data: users }: AxiosResponse<IUser[]> = await user.get()

            const { data: photos }: AxiosResponse<IPhoto[]> =
                await user.photos()

            this.users = users?.map((u) => ({
                ...u,
                photo: photos?.find((p) => p.id == u.id)?.thumbnailUrl,
            }))

            this.loading = false
        },
    },
})
</script>
