export const notgate = {
  categories: ['Input', 'Output'],
  values: [
    ['true', 'false'],
    ['false', 'true'],
  ] 
}

export const andgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['true', 'true', 'true'],
    ['true', 'false', 'false'],
    ['false', 'true', 'false'],
    ['false', 'false', 'false'],
  ]
}

export const orgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['true', 'true', 'true'],
    ['true', 'false', 'true'],
    ['false', 'true', 'true'],
    ['false', 'false', 'false'],
  ]
}

export const nandgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['true', 'true', 'false'],
    ['true', 'false', 'true'],
    ['false', 'true', 'true'],
    ['false', 'false', 'true'],
  ]
}

export const norgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['true', 'true', 'false'],
    ['true', 'false', 'false'],
    ['false', 'true', 'false'],
    ['false', 'false', 'true'],
  ]
}

export const xorgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['true', 'true', 'false'],
    ['true', 'false', 'true'],
    ['false', 'true', 'true'],
    ['false', 'false', 'false'],
  ]
}

export const xnorgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['true', 'true', 'true'],
    ['true', 'false', 'false'],
    ['false', 'true', 'false'],
    ['false', 'false', 'true'],
  ]
}
