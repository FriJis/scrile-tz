import { mount } from '@vue/test-utils'
import Select from '../../src/components/select/index.vue'
import flashPromises from 'flush-promises'
import List from '../../src/components/select/list.vue'
import App from '../../src/App.vue'
import { IUser, IPhoto } from '../../src/utils/interfaces'

jest.mock('../../src/utils/api', () => ({
    user: {
        get() {
            return Promise.resolve({
                data: [
                    { id: 1, name: 'Test', username: 'test' },
                    { id: 2, name: 'Test2', username: 'test2' },
                ] as IUser[],
            })
        },
        photos() {
            return Promise.resolve({
                data: [
                    { id: 1, url: '32' },
                    { id: 2, url: '32' },
                ] as IPhoto[],
            })
        },
    },
}))

describe('Тестирование компонента Select', () => {
    it('Ввести что-то в поле и проверить массив на пустоту', async () => {
        const wrapper = mount(Select)
        const text = 't'

        expect(wrapper.vm.$data.field).toBe('')
        wrapper.find('.select__field input').setValue(text)
        expect(wrapper.vm.$data.field).toBe(text)

        await flashPromises()
        expect(wrapper.vm.$data.users.length).not.toBe(0)
    })
    it('Проверить наличие дочернего компонента v-list', async () => {
        const wrapper = mount(Select)
        expect(wrapper.findComponent(List).exists()).toBe(true)
    })
    it('Запустить компонент App, ввести значение, выбрать первое и проверить объект user', async () => {
        const wrapper = mount(App)
        const text = 't'
        const input = wrapper.find('.select__field input')
        input.setValue(text)
        await flashPromises()
        const item = wrapper.find('.select__item')
        item.trigger('click')

        expect(wrapper.vm.$data.user).toEqual({
            id: 1,
            name: 'Test',
            username: 'test',
        })
    })
})
