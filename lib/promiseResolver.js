export async function promiseResolver(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    console.log(error, "from promise resolver");
    return [null, error];
  }
}

//usage example
//const [data, error] = await promiseResolver(whateverNeedsToBeAwaited);
