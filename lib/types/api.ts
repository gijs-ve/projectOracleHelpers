export type Res<T> =
    | {
          ok: true;
          data: T;
      }
    | {
          ok: false;
          error: string;
      };
