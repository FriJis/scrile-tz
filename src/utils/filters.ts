/**
 *
 * @param name Искомое значение
 * @param field Что искать
 * @returns Истина или ложь
 */
export function hasByName(name: string, field: string): boolean {
    return !!(name.toLowerCase().match(new RegExp(field.toLowerCase())) || [])
        .length
}
