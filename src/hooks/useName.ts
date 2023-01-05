export const useName = () => {
  const name = ref('useName')
  const setName = (v: string) => {
    name.value = v
  }
  return {
    name,
    setName,
  }
}
