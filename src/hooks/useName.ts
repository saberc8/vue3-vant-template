export const useName = () => {
  const name = ref('useName')
  const setName = (v) => {
    name.value = v
  }
  return {
    name,
    setName,
  }
}
