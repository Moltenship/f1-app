export type PropsWithParams<Params, Props = unknown> = Props & {
  readonly params: Params;
};
