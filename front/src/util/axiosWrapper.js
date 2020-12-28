const tryCatchWrapper = async (func) => {
  try {
    const res = await func()
    return res
  } catch (e) {
    return {
      error: e,
    }
  }
}

export default tryCatchWrapper
