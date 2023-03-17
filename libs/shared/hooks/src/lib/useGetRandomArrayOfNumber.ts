import { useCallback } from 'react'

interface ReturnsType {
  array: number[]
}

interface Props {
  amount: number,
  maxRange: number
}

export function useGetRandomArrayOfNumber({ amount, maxRange }: Props): ReturnsType {
  const _generate = useCallback(() => {
    let ids: number[] = []

    while (ids.length < amount) {
      let randomNum = Math.floor(Math.random() * maxRange) + 1
      if (ids.indexOf(randomNum) === -1) {
        ids.push(randomNum)
      }
    }

    return ids
  }, [ amount, maxRange ])

  return { array: _generate() }
}
