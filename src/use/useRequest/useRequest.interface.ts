export type TProps = {
  url: string,
}

export type TState = {
  isFetching: boolean,
  responseData: any,
  error: Error | null,
}
