import { mount } from '@vue/test-utils'
import Select from '../../src/components/select/index.vue'
import flashPromises from 'flush-promises'
// import List from '../../src/components/select/list.vue'

// import { IUser, IPhoto } from '../../src/utils/interfaces'
// import * as api from '../../src/utils/api'

// const users: IUser[] = [
//     { id: 1, name: 'Test', username: 'test' },
//     { id: 2, name: 'Test2', username: 'test2' },
// ]
// const photos = [
//     {id: 1, url: '32'},
//     {id: 2, url: '32'},
// ]

// jest.mock('../../src/utils/api'/*, () => ({
//     users: {
//         get: Promise.resolve({ data: users }),
//         photos: Promise.resolve({ data: photos }),
//     }
// })*/)

describe('Тестирование компонента Select', () => {
    it('Нажать на поле и ввести что-то', async () => {
        const wrapper = mount(Select)
        const text = 'l'

        expect(wrapper.vm.$data.field).toBe('')
        wrapper.find('.select__field input').setValue(text)
        expect(wrapper.vm.$data.field).toBe(text)
        // await wrapper.vm.$nextTick()
        await flashPromises()
        console.log(wrapper.vm.$data.users)
    })
    it('Проверить наличие дочернего компонента v-ist', () => {
        // const wrapper = mount(Select, {
        //     // data: {
        //     //     show: true,
        //     // }
        // })
        // expect(wrapper.find(List)).toBe(true)
    })
})
