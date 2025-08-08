const regexp = /^(?:\d{2}[/-]\d{2}[/-]\d{4}|\d{2}[/-]\d{2}[/-]\d{2})$/

export default function parseDate(value: string | number | Date): Date {
    if (value instanceof Date) {
        return value
    }

    if (typeof value === 'number') {
        return new Date(value)
    }

    if (regexp.test(value)) {
        const [day, mounth, year] = value.replace(/[-/]/g, '-').split('-')

        return new Date(parseInt(year), parseInt(mounth) - 1, parseInt(day), 0, 0, 0, 0)
    }

    throw new Error(`Invalid Date: ${value}`)
}
