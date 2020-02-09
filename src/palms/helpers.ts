export const publicUrl =
  process.env.NODE_ENV === 'development'
    ? ''
    : 'https://manneredboor.github.io/webgl-vapor-journey/'

export const random = (min: number, max: number) =>
  Math.random() * (max - min) + min

export const minmax = (min: number, value: number, max: number) =>
  Math.max(min, Math.min(max, value))

export const normalize = (start: number, end: number, value: number) =>
  (value - start) / (end - start)

export const narrow = (start: number, end: number, value: number) =>
  minmax(0, normalize(start, end, value), 1)
