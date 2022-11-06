export const notgate = {
  categories: ['Input', 'Output'],
  values: [
    ['false', 'true'],
    ['true', 'false'],
  ] 
}

export const buffer = {
  categories: ['Input', 'Output'],
  values: [
    ['false', 'false'],
    ['true', 'true'],
  ]
}

export const andgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['false', 'false', 'false'],
    ['false', 'true', 'false'],
    ['true', 'false', 'false'],
    ['true', 'true', 'true'],
  ]
}

export const orgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['false', 'false', 'false'],
    ['false', 'true', 'true'],
    ['true', 'false', 'true'],
    ['true', 'true', 'true'],
  ]
}

export const nandgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['false', 'false', 'true'],
    ['false', 'true', 'true'],
    ['true', 'false', 'true'],
    ['true', 'true', 'false'],
  ]
}

export const norgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['false', 'false', 'true'],
    ['false', 'true', 'false'],
    ['true', 'false', 'false'],
    ['true', 'true', 'false'],
  ]
}

export const xorgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['false', 'false', 'false'],
    ['false', 'true', 'true'],
    ['true', 'false', 'true'],
    ['true', 'true', 'false'],
  ]
}

export const xnorgate = {
  categories: ['Input A', 'Input B', 'Output'],
  values: [
    ['false', 'false', 'true'],
    ['false', 'true', 'false'],
    ['true', 'false', 'false'],
    ['true', 'true', 'true'],
  ]
}

