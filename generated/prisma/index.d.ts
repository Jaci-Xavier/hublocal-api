
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model Empresas
 * 
 */
export type Empresas = $Result.DefaultSelection<Prisma.$EmpresasPayload>
/**
 * Model Locais
 * 
 */
export type Locais = $Result.DefaultSelection<Prisma.$LocaisPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empresas`: Exposes CRUD operations for the **Empresas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresas.findMany()
    * ```
    */
  get empresas(): Prisma.EmpresasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locais`: Exposes CRUD operations for the **Locais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locais
    * const locais = await prisma.locais.findMany()
    * ```
    */
  get locais(): Prisma.LocaisDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuarios: 'Usuarios',
    Empresas: 'Empresas',
    Locais: 'Locais'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuarios" | "empresas" | "locais"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      Empresas: {
        payload: Prisma.$EmpresasPayload<ExtArgs>
        fields: Prisma.EmpresasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload>
          }
          findFirst: {
            args: Prisma.EmpresasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload>
          }
          findMany: {
            args: Prisma.EmpresasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload>[]
          }
          create: {
            args: Prisma.EmpresasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload>
          }
          createMany: {
            args: Prisma.EmpresasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload>[]
          }
          delete: {
            args: Prisma.EmpresasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload>
          }
          update: {
            args: Prisma.EmpresasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload>
          }
          deleteMany: {
            args: Prisma.EmpresasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpresasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload>[]
          }
          upsert: {
            args: Prisma.EmpresasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresasPayload>
          }
          aggregate: {
            args: Prisma.EmpresasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresas>
          }
          groupBy: {
            args: Prisma.EmpresasGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresasGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresasCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresasCountAggregateOutputType> | number
          }
        }
      }
      Locais: {
        payload: Prisma.$LocaisPayload<ExtArgs>
        fields: Prisma.LocaisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocaisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocaisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload>
          }
          findFirst: {
            args: Prisma.LocaisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocaisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload>
          }
          findMany: {
            args: Prisma.LocaisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload>[]
          }
          create: {
            args: Prisma.LocaisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload>
          }
          createMany: {
            args: Prisma.LocaisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocaisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload>[]
          }
          delete: {
            args: Prisma.LocaisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload>
          }
          update: {
            args: Prisma.LocaisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload>
          }
          deleteMany: {
            args: Prisma.LocaisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocaisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocaisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload>[]
          }
          upsert: {
            args: Prisma.LocaisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocaisPayload>
          }
          aggregate: {
            args: Prisma.LocaisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocais>
          }
          groupBy: {
            args: Prisma.LocaisGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocaisCountArgs<ExtArgs>
            result: $Utils.Optional<LocaisCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuarios?: UsuariosOmit
    empresas?: EmpresasOmit
    locais?: LocaisOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    empresas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | UsuariosCountOutputTypeCountEmpresasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountEmpresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresasWhereInput
  }


  /**
   * Count Type EmpresasCountOutputType
   */

  export type EmpresasCountOutputType = {
    locais: number
  }

  export type EmpresasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locais?: boolean | EmpresasCountOutputTypeCountLocaisArgs
  }

  // Custom InputTypes
  /**
   * EmpresasCountOutputType without action
   */
  export type EmpresasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresasCountOutputType
     */
    select?: EmpresasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresasCountOutputType without action
   */
  export type EmpresasCountOutputTypeCountLocaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocaisWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    senha: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    senha: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    email: number
    nome: number
    senha: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuariosMinAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    email: string
    nome: string | null
    senha: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empresas?: boolean | Usuarios$empresasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectScalar = {
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nome" | "senha" | "createdAt" | "updatedAt", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | Usuarios$empresasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      empresas: Prisma.$EmpresasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      nome: string | null
      senha: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresas<T extends Usuarios$empresasArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$empresasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'String'>
    readonly email: FieldRef<"Usuarios", 'String'>
    readonly nome: FieldRef<"Usuarios", 'String'>
    readonly senha: FieldRef<"Usuarios", 'String'>
    readonly createdAt: FieldRef<"Usuarios", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios createManyAndReturn
   */
  export type UsuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios updateManyAndReturn
   */
  export type UsuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios.empresas
   */
  export type Usuarios$empresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
    where?: EmpresasWhereInput
    orderBy?: EmpresasOrderByWithRelationInput | EmpresasOrderByWithRelationInput[]
    cursor?: EmpresasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpresasScalarFieldEnum | EmpresasScalarFieldEnum[]
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Model Empresas
   */

  export type AggregateEmpresas = {
    _count: EmpresasCountAggregateOutputType | null
    _min: EmpresasMinAggregateOutputType | null
    _max: EmpresasMaxAggregateOutputType | null
  }

  export type EmpresasMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: string | null
  }

  export type EmpresasMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: string | null
  }

  export type EmpresasCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    website: number
    createdAt: number
    updatedAt: number
    usuarioId: number
    _all: number
  }


  export type EmpresasMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type EmpresasMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type EmpresasCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    _all?: true
  }

  export type EmpresasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to aggregate.
     */
    where?: EmpresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresasOrderByWithRelationInput | EmpresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresasMaxAggregateInputType
  }

  export type GetEmpresasAggregateType<T extends EmpresasAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresas[P]>
      : GetScalarType<T[P], AggregateEmpresas[P]>
  }




  export type EmpresasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresasWhereInput
    orderBy?: EmpresasOrderByWithAggregationInput | EmpresasOrderByWithAggregationInput[]
    by: EmpresasScalarFieldEnum[] | EmpresasScalarFieldEnum
    having?: EmpresasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresasCountAggregateInputType | true
    _min?: EmpresasMinAggregateInputType
    _max?: EmpresasMaxAggregateInputType
  }

  export type EmpresasGroupByOutputType = {
    id: string
    nome: string
    cnpj: string
    website: string | null
    createdAt: Date
    updatedAt: Date
    usuarioId: string
    _count: EmpresasCountAggregateOutputType | null
    _min: EmpresasMinAggregateOutputType | null
    _max: EmpresasMaxAggregateOutputType | null
  }

  type GetEmpresasGroupByPayload<T extends EmpresasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresasGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresasGroupByOutputType[P]>
        }
      >
    >


  export type EmpresasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    locais?: boolean | Empresas$locaisArgs<ExtArgs>
    _count?: boolean | EmpresasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresas"]>

  export type EmpresasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresas"]>

  export type EmpresasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresas"]>

  export type EmpresasSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
  }

  export type EmpresasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cnpj" | "website" | "createdAt" | "updatedAt" | "usuarioId", ExtArgs["result"]["empresas"]>
  export type EmpresasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    locais?: boolean | Empresas$locaisArgs<ExtArgs>
    _count?: boolean | EmpresasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpresasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
  }
  export type EmpresasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
  }

  export type $EmpresasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresas"
    objects: {
      usuario: Prisma.$UsuariosPayload<ExtArgs>
      locais: Prisma.$LocaisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cnpj: string
      website: string | null
      createdAt: Date
      updatedAt: Date
      usuarioId: string
    }, ExtArgs["result"]["empresas"]>
    composites: {}
  }

  type EmpresasGetPayload<S extends boolean | null | undefined | EmpresasDefaultArgs> = $Result.GetResult<Prisma.$EmpresasPayload, S>

  type EmpresasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresasCountAggregateInputType | true
    }

  export interface EmpresasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresas'], meta: { name: 'Empresas' } }
    /**
     * Find zero or one Empresas that matches the filter.
     * @param {EmpresasFindUniqueArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresasFindUniqueArgs>(args: SelectSubset<T, EmpresasFindUniqueArgs<ExtArgs>>): Prisma__EmpresasClient<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresasFindUniqueOrThrowArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresasFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresasClient<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresasFindFirstArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresasFindFirstArgs>(args?: SelectSubset<T, EmpresasFindFirstArgs<ExtArgs>>): Prisma__EmpresasClient<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresasFindFirstOrThrowArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresasFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresasFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresasClient<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresas.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresasWithIdOnly = await prisma.empresas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresasFindManyArgs>(args?: SelectSubset<T, EmpresasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresas.
     * @param {EmpresasCreateArgs} args - Arguments to create a Empresas.
     * @example
     * // Create one Empresas
     * const Empresas = await prisma.empresas.create({
     *   data: {
     *     // ... data to create a Empresas
     *   }
     * })
     * 
     */
    create<T extends EmpresasCreateArgs>(args: SelectSubset<T, EmpresasCreateArgs<ExtArgs>>): Prisma__EmpresasClient<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresasCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresas = await prisma.empresas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresasCreateManyArgs>(args?: SelectSubset<T, EmpresasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresasCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresas = await prisma.empresas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id`
     * const empresasWithIdOnly = await prisma.empresas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresasCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresas.
     * @param {EmpresasDeleteArgs} args - Arguments to delete one Empresas.
     * @example
     * // Delete one Empresas
     * const Empresas = await prisma.empresas.delete({
     *   where: {
     *     // ... filter to delete one Empresas
     *   }
     * })
     * 
     */
    delete<T extends EmpresasDeleteArgs>(args: SelectSubset<T, EmpresasDeleteArgs<ExtArgs>>): Prisma__EmpresasClient<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresas.
     * @param {EmpresasUpdateArgs} args - Arguments to update one Empresas.
     * @example
     * // Update one Empresas
     * const empresas = await prisma.empresas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresasUpdateArgs>(args: SelectSubset<T, EmpresasUpdateArgs<ExtArgs>>): Prisma__EmpresasClient<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresasDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresasDeleteManyArgs>(args?: SelectSubset<T, EmpresasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresas = await prisma.empresas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresasUpdateManyArgs>(args: SelectSubset<T, EmpresasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresasUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresas = await prisma.empresas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id`
     * const empresasWithIdOnly = await prisma.empresas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmpresasUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpresasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresas.
     * @param {EmpresasUpsertArgs} args - Arguments to update or create a Empresas.
     * @example
     * // Update or create a Empresas
     * const empresas = await prisma.empresas.upsert({
     *   create: {
     *     // ... data to create a Empresas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresas we want to update
     *   }
     * })
     */
    upsert<T extends EmpresasUpsertArgs>(args: SelectSubset<T, EmpresasUpsertArgs<ExtArgs>>): Prisma__EmpresasClient<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresasCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresas.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresasCountArgs>(
      args?: Subset<T, EmpresasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpresasAggregateArgs>(args: Subset<T, EmpresasAggregateArgs>): Prisma.PrismaPromise<GetEmpresasAggregateType<T>>

    /**
     * Group by Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmpresasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresasGroupByArgs['orderBy'] }
        : { orderBy?: EmpresasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmpresasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresas model
   */
  readonly fields: EmpresasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locais<T extends Empresas$locaisArgs<ExtArgs> = {}>(args?: Subset<T, Empresas$locaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Empresas model
   */
  interface EmpresasFieldRefs {
    readonly id: FieldRef<"Empresas", 'String'>
    readonly nome: FieldRef<"Empresas", 'String'>
    readonly cnpj: FieldRef<"Empresas", 'String'>
    readonly website: FieldRef<"Empresas", 'String'>
    readonly createdAt: FieldRef<"Empresas", 'DateTime'>
    readonly updatedAt: FieldRef<"Empresas", 'DateTime'>
    readonly usuarioId: FieldRef<"Empresas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empresas findUnique
   */
  export type EmpresasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where: EmpresasWhereUniqueInput
  }

  /**
   * Empresas findUniqueOrThrow
   */
  export type EmpresasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where: EmpresasWhereUniqueInput
  }

  /**
   * Empresas findFirst
   */
  export type EmpresasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresasOrderByWithRelationInput | EmpresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresasScalarFieldEnum | EmpresasScalarFieldEnum[]
  }

  /**
   * Empresas findFirstOrThrow
   */
  export type EmpresasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresasOrderByWithRelationInput | EmpresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresasScalarFieldEnum | EmpresasScalarFieldEnum[]
  }

  /**
   * Empresas findMany
   */
  export type EmpresasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresasOrderByWithRelationInput | EmpresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresasScalarFieldEnum | EmpresasScalarFieldEnum[]
  }

  /**
   * Empresas create
   */
  export type EmpresasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresas.
     */
    data: XOR<EmpresasCreateInput, EmpresasUncheckedCreateInput>
  }

  /**
   * Empresas createMany
   */
  export type EmpresasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresasCreateManyInput | EmpresasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresas createManyAndReturn
   */
  export type EmpresasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresasCreateManyInput | EmpresasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Empresas update
   */
  export type EmpresasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresas.
     */
    data: XOR<EmpresasUpdateInput, EmpresasUncheckedUpdateInput>
    /**
     * Choose, which Empresas to update.
     */
    where: EmpresasWhereUniqueInput
  }

  /**
   * Empresas updateMany
   */
  export type EmpresasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresasUpdateManyMutationInput, EmpresasUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresasWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresas updateManyAndReturn
   */
  export type EmpresasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresasUpdateManyMutationInput, EmpresasUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresasWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Empresas upsert
   */
  export type EmpresasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresas to update in case it exists.
     */
    where: EmpresasWhereUniqueInput
    /**
     * In case the Empresas found by the `where` argument doesn't exist, create a new Empresas with this data.
     */
    create: XOR<EmpresasCreateInput, EmpresasUncheckedCreateInput>
    /**
     * In case the Empresas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresasUpdateInput, EmpresasUncheckedUpdateInput>
  }

  /**
   * Empresas delete
   */
  export type EmpresasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
    /**
     * Filter which Empresas to delete.
     */
    where: EmpresasWhereUniqueInput
  }

  /**
   * Empresas deleteMany
   */
  export type EmpresasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresasWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresas.locais
   */
  export type Empresas$locaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
    where?: LocaisWhereInput
    orderBy?: LocaisOrderByWithRelationInput | LocaisOrderByWithRelationInput[]
    cursor?: LocaisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocaisScalarFieldEnum | LocaisScalarFieldEnum[]
  }

  /**
   * Empresas without action
   */
  export type EmpresasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresas
     */
    select?: EmpresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresas
     */
    omit?: EmpresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresasInclude<ExtArgs> | null
  }


  /**
   * Model Locais
   */

  export type AggregateLocais = {
    _count: LocaisCountAggregateOutputType | null
    _min: LocaisMinAggregateOutputType | null
    _max: LocaisMaxAggregateOutputType | null
  }

  export type LocaisMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cep: string | null
    rua: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    createdAt: Date | null
    updatedAt: Date | null
    empresaId: string | null
  }

  export type LocaisMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cep: string | null
    rua: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    createdAt: Date | null
    updatedAt: Date | null
    empresaId: string | null
  }

  export type LocaisCountAggregateOutputType = {
    id: number
    nome: number
    cep: number
    rua: number
    numero: number
    bairro: number
    cidade: number
    estado: number
    createdAt: number
    updatedAt: number
    empresaId: number
    _all: number
  }


  export type LocaisMinAggregateInputType = {
    id?: true
    nome?: true
    cep?: true
    rua?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    empresaId?: true
  }

  export type LocaisMaxAggregateInputType = {
    id?: true
    nome?: true
    cep?: true
    rua?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    empresaId?: true
  }

  export type LocaisCountAggregateInputType = {
    id?: true
    nome?: true
    cep?: true
    rua?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    empresaId?: true
    _all?: true
  }

  export type LocaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locais to aggregate.
     */
    where?: LocaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locais to fetch.
     */
    orderBy?: LocaisOrderByWithRelationInput | LocaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locais
    **/
    _count?: true | LocaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocaisMaxAggregateInputType
  }

  export type GetLocaisAggregateType<T extends LocaisAggregateArgs> = {
        [P in keyof T & keyof AggregateLocais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocais[P]>
      : GetScalarType<T[P], AggregateLocais[P]>
  }




  export type LocaisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocaisWhereInput
    orderBy?: LocaisOrderByWithAggregationInput | LocaisOrderByWithAggregationInput[]
    by: LocaisScalarFieldEnum[] | LocaisScalarFieldEnum
    having?: LocaisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocaisCountAggregateInputType | true
    _min?: LocaisMinAggregateInputType
    _max?: LocaisMaxAggregateInputType
  }

  export type LocaisGroupByOutputType = {
    id: string
    nome: string
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    createdAt: Date
    updatedAt: Date
    empresaId: string
    _count: LocaisCountAggregateOutputType | null
    _min: LocaisMinAggregateOutputType | null
    _max: LocaisMaxAggregateOutputType | null
  }

  type GetLocaisGroupByPayload<T extends LocaisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocaisGroupByOutputType[P]>
            : GetScalarType<T[P], LocaisGroupByOutputType[P]>
        }
      >
    >


  export type LocaisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cep?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locais"]>

  export type LocaisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cep?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locais"]>

  export type LocaisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cep?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locais"]>

  export type LocaisSelectScalar = {
    id?: boolean
    nome?: boolean
    cep?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empresaId?: boolean
  }

  export type LocaisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cep" | "rua" | "numero" | "bairro" | "cidade" | "estado" | "createdAt" | "updatedAt" | "empresaId", ExtArgs["result"]["locais"]>
  export type LocaisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresasDefaultArgs<ExtArgs>
  }
  export type LocaisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresasDefaultArgs<ExtArgs>
  }
  export type LocaisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresasDefaultArgs<ExtArgs>
  }

  export type $LocaisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locais"
    objects: {
      empresa: Prisma.$EmpresasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cep: string
      rua: string
      numero: string
      bairro: string
      cidade: string
      estado: string
      createdAt: Date
      updatedAt: Date
      empresaId: string
    }, ExtArgs["result"]["locais"]>
    composites: {}
  }

  type LocaisGetPayload<S extends boolean | null | undefined | LocaisDefaultArgs> = $Result.GetResult<Prisma.$LocaisPayload, S>

  type LocaisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocaisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocaisCountAggregateInputType | true
    }

  export interface LocaisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locais'], meta: { name: 'Locais' } }
    /**
     * Find zero or one Locais that matches the filter.
     * @param {LocaisFindUniqueArgs} args - Arguments to find a Locais
     * @example
     * // Get one Locais
     * const locais = await prisma.locais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocaisFindUniqueArgs>(args: SelectSubset<T, LocaisFindUniqueArgs<ExtArgs>>): Prisma__LocaisClient<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locais that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocaisFindUniqueOrThrowArgs} args - Arguments to find a Locais
     * @example
     * // Get one Locais
     * const locais = await prisma.locais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocaisFindUniqueOrThrowArgs>(args: SelectSubset<T, LocaisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocaisClient<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaisFindFirstArgs} args - Arguments to find a Locais
     * @example
     * // Get one Locais
     * const locais = await prisma.locais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocaisFindFirstArgs>(args?: SelectSubset<T, LocaisFindFirstArgs<ExtArgs>>): Prisma__LocaisClient<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaisFindFirstOrThrowArgs} args - Arguments to find a Locais
     * @example
     * // Get one Locais
     * const locais = await prisma.locais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocaisFindFirstOrThrowArgs>(args?: SelectSubset<T, LocaisFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocaisClient<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locais
     * const locais = await prisma.locais.findMany()
     * 
     * // Get first 10 Locais
     * const locais = await prisma.locais.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locaisWithIdOnly = await prisma.locais.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocaisFindManyArgs>(args?: SelectSubset<T, LocaisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locais.
     * @param {LocaisCreateArgs} args - Arguments to create a Locais.
     * @example
     * // Create one Locais
     * const Locais = await prisma.locais.create({
     *   data: {
     *     // ... data to create a Locais
     *   }
     * })
     * 
     */
    create<T extends LocaisCreateArgs>(args: SelectSubset<T, LocaisCreateArgs<ExtArgs>>): Prisma__LocaisClient<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locais.
     * @param {LocaisCreateManyArgs} args - Arguments to create many Locais.
     * @example
     * // Create many Locais
     * const locais = await prisma.locais.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocaisCreateManyArgs>(args?: SelectSubset<T, LocaisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locais and returns the data saved in the database.
     * @param {LocaisCreateManyAndReturnArgs} args - Arguments to create many Locais.
     * @example
     * // Create many Locais
     * const locais = await prisma.locais.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locais and only return the `id`
     * const locaisWithIdOnly = await prisma.locais.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocaisCreateManyAndReturnArgs>(args?: SelectSubset<T, LocaisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locais.
     * @param {LocaisDeleteArgs} args - Arguments to delete one Locais.
     * @example
     * // Delete one Locais
     * const Locais = await prisma.locais.delete({
     *   where: {
     *     // ... filter to delete one Locais
     *   }
     * })
     * 
     */
    delete<T extends LocaisDeleteArgs>(args: SelectSubset<T, LocaisDeleteArgs<ExtArgs>>): Prisma__LocaisClient<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locais.
     * @param {LocaisUpdateArgs} args - Arguments to update one Locais.
     * @example
     * // Update one Locais
     * const locais = await prisma.locais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocaisUpdateArgs>(args: SelectSubset<T, LocaisUpdateArgs<ExtArgs>>): Prisma__LocaisClient<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locais.
     * @param {LocaisDeleteManyArgs} args - Arguments to filter Locais to delete.
     * @example
     * // Delete a few Locais
     * const { count } = await prisma.locais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocaisDeleteManyArgs>(args?: SelectSubset<T, LocaisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locais
     * const locais = await prisma.locais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocaisUpdateManyArgs>(args: SelectSubset<T, LocaisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locais and returns the data updated in the database.
     * @param {LocaisUpdateManyAndReturnArgs} args - Arguments to update many Locais.
     * @example
     * // Update many Locais
     * const locais = await prisma.locais.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locais and only return the `id`
     * const locaisWithIdOnly = await prisma.locais.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocaisUpdateManyAndReturnArgs>(args: SelectSubset<T, LocaisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locais.
     * @param {LocaisUpsertArgs} args - Arguments to update or create a Locais.
     * @example
     * // Update or create a Locais
     * const locais = await prisma.locais.upsert({
     *   create: {
     *     // ... data to create a Locais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locais we want to update
     *   }
     * })
     */
    upsert<T extends LocaisUpsertArgs>(args: SelectSubset<T, LocaisUpsertArgs<ExtArgs>>): Prisma__LocaisClient<$Result.GetResult<Prisma.$LocaisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaisCountArgs} args - Arguments to filter Locais to count.
     * @example
     * // Count the number of Locais
     * const count = await prisma.locais.count({
     *   where: {
     *     // ... the filter for the Locais we want to count
     *   }
     * })
    **/
    count<T extends LocaisCountArgs>(
      args?: Subset<T, LocaisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocaisAggregateArgs>(args: Subset<T, LocaisAggregateArgs>): Prisma.PrismaPromise<GetLocaisAggregateType<T>>

    /**
     * Group by Locais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocaisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocaisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocaisGroupByArgs['orderBy'] }
        : { orderBy?: LocaisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocaisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locais model
   */
  readonly fields: LocaisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocaisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresasDefaultArgs<ExtArgs>>): Prisma__EmpresasClient<$Result.GetResult<Prisma.$EmpresasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Locais model
   */
  interface LocaisFieldRefs {
    readonly id: FieldRef<"Locais", 'String'>
    readonly nome: FieldRef<"Locais", 'String'>
    readonly cep: FieldRef<"Locais", 'String'>
    readonly rua: FieldRef<"Locais", 'String'>
    readonly numero: FieldRef<"Locais", 'String'>
    readonly bairro: FieldRef<"Locais", 'String'>
    readonly cidade: FieldRef<"Locais", 'String'>
    readonly estado: FieldRef<"Locais", 'String'>
    readonly createdAt: FieldRef<"Locais", 'DateTime'>
    readonly updatedAt: FieldRef<"Locais", 'DateTime'>
    readonly empresaId: FieldRef<"Locais", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Locais findUnique
   */
  export type LocaisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
    /**
     * Filter, which Locais to fetch.
     */
    where: LocaisWhereUniqueInput
  }

  /**
   * Locais findUniqueOrThrow
   */
  export type LocaisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
    /**
     * Filter, which Locais to fetch.
     */
    where: LocaisWhereUniqueInput
  }

  /**
   * Locais findFirst
   */
  export type LocaisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
    /**
     * Filter, which Locais to fetch.
     */
    where?: LocaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locais to fetch.
     */
    orderBy?: LocaisOrderByWithRelationInput | LocaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locais.
     */
    cursor?: LocaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locais.
     */
    distinct?: LocaisScalarFieldEnum | LocaisScalarFieldEnum[]
  }

  /**
   * Locais findFirstOrThrow
   */
  export type LocaisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
    /**
     * Filter, which Locais to fetch.
     */
    where?: LocaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locais to fetch.
     */
    orderBy?: LocaisOrderByWithRelationInput | LocaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locais.
     */
    cursor?: LocaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locais.
     */
    distinct?: LocaisScalarFieldEnum | LocaisScalarFieldEnum[]
  }

  /**
   * Locais findMany
   */
  export type LocaisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
    /**
     * Filter, which Locais to fetch.
     */
    where?: LocaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locais to fetch.
     */
    orderBy?: LocaisOrderByWithRelationInput | LocaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locais.
     */
    cursor?: LocaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locais.
     */
    skip?: number
    distinct?: LocaisScalarFieldEnum | LocaisScalarFieldEnum[]
  }

  /**
   * Locais create
   */
  export type LocaisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
    /**
     * The data needed to create a Locais.
     */
    data: XOR<LocaisCreateInput, LocaisUncheckedCreateInput>
  }

  /**
   * Locais createMany
   */
  export type LocaisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locais.
     */
    data: LocaisCreateManyInput | LocaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Locais createManyAndReturn
   */
  export type LocaisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * The data used to create many Locais.
     */
    data: LocaisCreateManyInput | LocaisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locais update
   */
  export type LocaisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
    /**
     * The data needed to update a Locais.
     */
    data: XOR<LocaisUpdateInput, LocaisUncheckedUpdateInput>
    /**
     * Choose, which Locais to update.
     */
    where: LocaisWhereUniqueInput
  }

  /**
   * Locais updateMany
   */
  export type LocaisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locais.
     */
    data: XOR<LocaisUpdateManyMutationInput, LocaisUncheckedUpdateManyInput>
    /**
     * Filter which Locais to update
     */
    where?: LocaisWhereInput
    /**
     * Limit how many Locais to update.
     */
    limit?: number
  }

  /**
   * Locais updateManyAndReturn
   */
  export type LocaisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * The data used to update Locais.
     */
    data: XOR<LocaisUpdateManyMutationInput, LocaisUncheckedUpdateManyInput>
    /**
     * Filter which Locais to update
     */
    where?: LocaisWhereInput
    /**
     * Limit how many Locais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locais upsert
   */
  export type LocaisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
    /**
     * The filter to search for the Locais to update in case it exists.
     */
    where: LocaisWhereUniqueInput
    /**
     * In case the Locais found by the `where` argument doesn't exist, create a new Locais with this data.
     */
    create: XOR<LocaisCreateInput, LocaisUncheckedCreateInput>
    /**
     * In case the Locais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocaisUpdateInput, LocaisUncheckedUpdateInput>
  }

  /**
   * Locais delete
   */
  export type LocaisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
    /**
     * Filter which Locais to delete.
     */
    where: LocaisWhereUniqueInput
  }

  /**
   * Locais deleteMany
   */
  export type LocaisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locais to delete
     */
    where?: LocaisWhereInput
    /**
     * Limit how many Locais to delete.
     */
    limit?: number
  }

  /**
   * Locais without action
   */
  export type LocaisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locais
     */
    select?: LocaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locais
     */
    omit?: LocaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocaisInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nome: 'nome',
    senha: 'senha',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const EmpresasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usuarioId: 'usuarioId'
  };

  export type EmpresasScalarFieldEnum = (typeof EmpresasScalarFieldEnum)[keyof typeof EmpresasScalarFieldEnum]


  export const LocaisScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cep: 'cep',
    rua: 'rua',
    numero: 'numero',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    empresaId: 'empresaId'
  };

  export type LocaisScalarFieldEnum = (typeof LocaisScalarFieldEnum)[keyof typeof LocaisScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: StringFilter<"Usuarios"> | string
    email?: StringFilter<"Usuarios"> | string
    nome?: StringNullableFilter<"Usuarios"> | string | null
    senha?: StringNullableFilter<"Usuarios"> | string | null
    createdAt?: DateTimeFilter<"Usuarios"> | Date | string
    updatedAt?: DateTimeFilter<"Usuarios"> | Date | string
    empresas?: EmpresasListRelationFilter
  }

  export type UsuariosOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empresas?: EmpresasOrderByRelationAggregateInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    nome?: StringNullableFilter<"Usuarios"> | string | null
    senha?: StringNullableFilter<"Usuarios"> | string | null
    createdAt?: DateTimeFilter<"Usuarios"> | Date | string
    updatedAt?: DateTimeFilter<"Usuarios"> | Date | string
    empresas?: EmpresasListRelationFilter
  }, "id" | "email">

  export type UsuariosOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuarios"> | string
    email?: StringWithAggregatesFilter<"Usuarios"> | string
    nome?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    senha?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuarios"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuarios"> | Date | string
  }

  export type EmpresasWhereInput = {
    AND?: EmpresasWhereInput | EmpresasWhereInput[]
    OR?: EmpresasWhereInput[]
    NOT?: EmpresasWhereInput | EmpresasWhereInput[]
    id?: StringFilter<"Empresas"> | string
    nome?: StringFilter<"Empresas"> | string
    cnpj?: StringFilter<"Empresas"> | string
    website?: StringNullableFilter<"Empresas"> | string | null
    createdAt?: DateTimeFilter<"Empresas"> | Date | string
    updatedAt?: DateTimeFilter<"Empresas"> | Date | string
    usuarioId?: StringFilter<"Empresas"> | string
    usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    locais?: LocaisListRelationFilter
  }

  export type EmpresasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuariosOrderByWithRelationInput
    locais?: LocaisOrderByRelationAggregateInput
  }

  export type EmpresasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: EmpresasWhereInput | EmpresasWhereInput[]
    OR?: EmpresasWhereInput[]
    NOT?: EmpresasWhereInput | EmpresasWhereInput[]
    nome?: StringFilter<"Empresas"> | string
    website?: StringNullableFilter<"Empresas"> | string | null
    createdAt?: DateTimeFilter<"Empresas"> | Date | string
    updatedAt?: DateTimeFilter<"Empresas"> | Date | string
    usuarioId?: StringFilter<"Empresas"> | string
    usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    locais?: LocaisListRelationFilter
  }, "id" | "cnpj">

  export type EmpresasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    _count?: EmpresasCountOrderByAggregateInput
    _max?: EmpresasMaxOrderByAggregateInput
    _min?: EmpresasMinOrderByAggregateInput
  }

  export type EmpresasScalarWhereWithAggregatesInput = {
    AND?: EmpresasScalarWhereWithAggregatesInput | EmpresasScalarWhereWithAggregatesInput[]
    OR?: EmpresasScalarWhereWithAggregatesInput[]
    NOT?: EmpresasScalarWhereWithAggregatesInput | EmpresasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Empresas"> | string
    nome?: StringWithAggregatesFilter<"Empresas"> | string
    cnpj?: StringWithAggregatesFilter<"Empresas"> | string
    website?: StringNullableWithAggregatesFilter<"Empresas"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Empresas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Empresas"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Empresas"> | string
  }

  export type LocaisWhereInput = {
    AND?: LocaisWhereInput | LocaisWhereInput[]
    OR?: LocaisWhereInput[]
    NOT?: LocaisWhereInput | LocaisWhereInput[]
    id?: StringFilter<"Locais"> | string
    nome?: StringFilter<"Locais"> | string
    cep?: StringFilter<"Locais"> | string
    rua?: StringFilter<"Locais"> | string
    numero?: StringFilter<"Locais"> | string
    bairro?: StringFilter<"Locais"> | string
    cidade?: StringFilter<"Locais"> | string
    estado?: StringFilter<"Locais"> | string
    createdAt?: DateTimeFilter<"Locais"> | Date | string
    updatedAt?: DateTimeFilter<"Locais"> | Date | string
    empresaId?: StringFilter<"Locais"> | string
    empresa?: XOR<EmpresasScalarRelationFilter, EmpresasWhereInput>
  }

  export type LocaisOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empresaId?: SortOrder
    empresa?: EmpresasOrderByWithRelationInput
  }

  export type LocaisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocaisWhereInput | LocaisWhereInput[]
    OR?: LocaisWhereInput[]
    NOT?: LocaisWhereInput | LocaisWhereInput[]
    nome?: StringFilter<"Locais"> | string
    cep?: StringFilter<"Locais"> | string
    rua?: StringFilter<"Locais"> | string
    numero?: StringFilter<"Locais"> | string
    bairro?: StringFilter<"Locais"> | string
    cidade?: StringFilter<"Locais"> | string
    estado?: StringFilter<"Locais"> | string
    createdAt?: DateTimeFilter<"Locais"> | Date | string
    updatedAt?: DateTimeFilter<"Locais"> | Date | string
    empresaId?: StringFilter<"Locais"> | string
    empresa?: XOR<EmpresasScalarRelationFilter, EmpresasWhereInput>
  }, "id">

  export type LocaisOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empresaId?: SortOrder
    _count?: LocaisCountOrderByAggregateInput
    _max?: LocaisMaxOrderByAggregateInput
    _min?: LocaisMinOrderByAggregateInput
  }

  export type LocaisScalarWhereWithAggregatesInput = {
    AND?: LocaisScalarWhereWithAggregatesInput | LocaisScalarWhereWithAggregatesInput[]
    OR?: LocaisScalarWhereWithAggregatesInput[]
    NOT?: LocaisScalarWhereWithAggregatesInput | LocaisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Locais"> | string
    nome?: StringWithAggregatesFilter<"Locais"> | string
    cep?: StringWithAggregatesFilter<"Locais"> | string
    rua?: StringWithAggregatesFilter<"Locais"> | string
    numero?: StringWithAggregatesFilter<"Locais"> | string
    bairro?: StringWithAggregatesFilter<"Locais"> | string
    cidade?: StringWithAggregatesFilter<"Locais"> | string
    estado?: StringWithAggregatesFilter<"Locais"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Locais"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Locais"> | Date | string
    empresaId?: StringWithAggregatesFilter<"Locais"> | string
  }

  export type UsuariosCreateInput = {
    id?: string
    email: string
    nome?: string | null
    senha?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    empresas?: EmpresasCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUncheckedCreateInput = {
    id?: string
    email: string
    nome?: string | null
    senha?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    empresas?: EmpresasUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresas?: EmpresasUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresas?: EmpresasUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosCreateManyInput = {
    id?: string
    email: string
    nome?: string | null
    senha?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresasCreateInput = {
    id?: string
    nome: string
    cnpj: string
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuariosCreateNestedOneWithoutEmpresasInput
    locais?: LocaisCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresasUncheckedCreateInput = {
    id?: string
    nome: string
    cnpj: string
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
    locais?: LocaisUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuariosUpdateOneRequiredWithoutEmpresasNestedInput
    locais?: LocaisUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    locais?: LocaisUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresasCreateManyInput = {
    id?: string
    nome: string
    cnpj: string
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
  }

  export type EmpresasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type LocaisCreateInput = {
    id?: string
    nome: string
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
    empresa: EmpresasCreateNestedOneWithoutLocaisInput
  }

  export type LocaisUncheckedCreateInput = {
    id?: string
    nome: string
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
    empresaId: string
  }

  export type LocaisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresasUpdateOneRequiredWithoutLocaisNestedInput
  }

  export type LocaisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type LocaisCreateManyInput = {
    id?: string
    nome: string
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
    empresaId: string
  }

  export type LocaisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocaisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmpresasListRelationFilter = {
    every?: EmpresasWhereInput
    some?: EmpresasWhereInput
    none?: EmpresasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmpresasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuariosScalarRelationFilter = {
    is?: UsuariosWhereInput
    isNot?: UsuariosWhereInput
  }

  export type LocaisListRelationFilter = {
    every?: LocaisWhereInput
    some?: LocaisWhereInput
    none?: LocaisWhereInput
  }

  export type LocaisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type EmpresasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type EmpresasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type EmpresasScalarRelationFilter = {
    is?: EmpresasWhereInput
    isNot?: EmpresasWhereInput
  }

  export type LocaisCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empresaId?: SortOrder
  }

  export type LocaisMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empresaId?: SortOrder
  }

  export type LocaisMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empresaId?: SortOrder
  }

  export type EmpresasCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EmpresasCreateWithoutUsuarioInput, EmpresasUncheckedCreateWithoutUsuarioInput> | EmpresasCreateWithoutUsuarioInput[] | EmpresasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmpresasCreateOrConnectWithoutUsuarioInput | EmpresasCreateOrConnectWithoutUsuarioInput[]
    createMany?: EmpresasCreateManyUsuarioInputEnvelope
    connect?: EmpresasWhereUniqueInput | EmpresasWhereUniqueInput[]
  }

  export type EmpresasUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EmpresasCreateWithoutUsuarioInput, EmpresasUncheckedCreateWithoutUsuarioInput> | EmpresasCreateWithoutUsuarioInput[] | EmpresasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmpresasCreateOrConnectWithoutUsuarioInput | EmpresasCreateOrConnectWithoutUsuarioInput[]
    createMany?: EmpresasCreateManyUsuarioInputEnvelope
    connect?: EmpresasWhereUniqueInput | EmpresasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmpresasUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EmpresasCreateWithoutUsuarioInput, EmpresasUncheckedCreateWithoutUsuarioInput> | EmpresasCreateWithoutUsuarioInput[] | EmpresasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmpresasCreateOrConnectWithoutUsuarioInput | EmpresasCreateOrConnectWithoutUsuarioInput[]
    upsert?: EmpresasUpsertWithWhereUniqueWithoutUsuarioInput | EmpresasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EmpresasCreateManyUsuarioInputEnvelope
    set?: EmpresasWhereUniqueInput | EmpresasWhereUniqueInput[]
    disconnect?: EmpresasWhereUniqueInput | EmpresasWhereUniqueInput[]
    delete?: EmpresasWhereUniqueInput | EmpresasWhereUniqueInput[]
    connect?: EmpresasWhereUniqueInput | EmpresasWhereUniqueInput[]
    update?: EmpresasUpdateWithWhereUniqueWithoutUsuarioInput | EmpresasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EmpresasUpdateManyWithWhereWithoutUsuarioInput | EmpresasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EmpresasScalarWhereInput | EmpresasScalarWhereInput[]
  }

  export type EmpresasUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EmpresasCreateWithoutUsuarioInput, EmpresasUncheckedCreateWithoutUsuarioInput> | EmpresasCreateWithoutUsuarioInput[] | EmpresasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmpresasCreateOrConnectWithoutUsuarioInput | EmpresasCreateOrConnectWithoutUsuarioInput[]
    upsert?: EmpresasUpsertWithWhereUniqueWithoutUsuarioInput | EmpresasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EmpresasCreateManyUsuarioInputEnvelope
    set?: EmpresasWhereUniqueInput | EmpresasWhereUniqueInput[]
    disconnect?: EmpresasWhereUniqueInput | EmpresasWhereUniqueInput[]
    delete?: EmpresasWhereUniqueInput | EmpresasWhereUniqueInput[]
    connect?: EmpresasWhereUniqueInput | EmpresasWhereUniqueInput[]
    update?: EmpresasUpdateWithWhereUniqueWithoutUsuarioInput | EmpresasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EmpresasUpdateManyWithWhereWithoutUsuarioInput | EmpresasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EmpresasScalarWhereInput | EmpresasScalarWhereInput[]
  }

  export type UsuariosCreateNestedOneWithoutEmpresasInput = {
    create?: XOR<UsuariosCreateWithoutEmpresasInput, UsuariosUncheckedCreateWithoutEmpresasInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutEmpresasInput
    connect?: UsuariosWhereUniqueInput
  }

  export type LocaisCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<LocaisCreateWithoutEmpresaInput, LocaisUncheckedCreateWithoutEmpresaInput> | LocaisCreateWithoutEmpresaInput[] | LocaisUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: LocaisCreateOrConnectWithoutEmpresaInput | LocaisCreateOrConnectWithoutEmpresaInput[]
    createMany?: LocaisCreateManyEmpresaInputEnvelope
    connect?: LocaisWhereUniqueInput | LocaisWhereUniqueInput[]
  }

  export type LocaisUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<LocaisCreateWithoutEmpresaInput, LocaisUncheckedCreateWithoutEmpresaInput> | LocaisCreateWithoutEmpresaInput[] | LocaisUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: LocaisCreateOrConnectWithoutEmpresaInput | LocaisCreateOrConnectWithoutEmpresaInput[]
    createMany?: LocaisCreateManyEmpresaInputEnvelope
    connect?: LocaisWhereUniqueInput | LocaisWhereUniqueInput[]
  }

  export type UsuariosUpdateOneRequiredWithoutEmpresasNestedInput = {
    create?: XOR<UsuariosCreateWithoutEmpresasInput, UsuariosUncheckedCreateWithoutEmpresasInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutEmpresasInput
    upsert?: UsuariosUpsertWithoutEmpresasInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutEmpresasInput, UsuariosUpdateWithoutEmpresasInput>, UsuariosUncheckedUpdateWithoutEmpresasInput>
  }

  export type LocaisUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<LocaisCreateWithoutEmpresaInput, LocaisUncheckedCreateWithoutEmpresaInput> | LocaisCreateWithoutEmpresaInput[] | LocaisUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: LocaisCreateOrConnectWithoutEmpresaInput | LocaisCreateOrConnectWithoutEmpresaInput[]
    upsert?: LocaisUpsertWithWhereUniqueWithoutEmpresaInput | LocaisUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: LocaisCreateManyEmpresaInputEnvelope
    set?: LocaisWhereUniqueInput | LocaisWhereUniqueInput[]
    disconnect?: LocaisWhereUniqueInput | LocaisWhereUniqueInput[]
    delete?: LocaisWhereUniqueInput | LocaisWhereUniqueInput[]
    connect?: LocaisWhereUniqueInput | LocaisWhereUniqueInput[]
    update?: LocaisUpdateWithWhereUniqueWithoutEmpresaInput | LocaisUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: LocaisUpdateManyWithWhereWithoutEmpresaInput | LocaisUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: LocaisScalarWhereInput | LocaisScalarWhereInput[]
  }

  export type LocaisUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<LocaisCreateWithoutEmpresaInput, LocaisUncheckedCreateWithoutEmpresaInput> | LocaisCreateWithoutEmpresaInput[] | LocaisUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: LocaisCreateOrConnectWithoutEmpresaInput | LocaisCreateOrConnectWithoutEmpresaInput[]
    upsert?: LocaisUpsertWithWhereUniqueWithoutEmpresaInput | LocaisUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: LocaisCreateManyEmpresaInputEnvelope
    set?: LocaisWhereUniqueInput | LocaisWhereUniqueInput[]
    disconnect?: LocaisWhereUniqueInput | LocaisWhereUniqueInput[]
    delete?: LocaisWhereUniqueInput | LocaisWhereUniqueInput[]
    connect?: LocaisWhereUniqueInput | LocaisWhereUniqueInput[]
    update?: LocaisUpdateWithWhereUniqueWithoutEmpresaInput | LocaisUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: LocaisUpdateManyWithWhereWithoutEmpresaInput | LocaisUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: LocaisScalarWhereInput | LocaisScalarWhereInput[]
  }

  export type EmpresasCreateNestedOneWithoutLocaisInput = {
    create?: XOR<EmpresasCreateWithoutLocaisInput, EmpresasUncheckedCreateWithoutLocaisInput>
    connectOrCreate?: EmpresasCreateOrConnectWithoutLocaisInput
    connect?: EmpresasWhereUniqueInput
  }

  export type EmpresasUpdateOneRequiredWithoutLocaisNestedInput = {
    create?: XOR<EmpresasCreateWithoutLocaisInput, EmpresasUncheckedCreateWithoutLocaisInput>
    connectOrCreate?: EmpresasCreateOrConnectWithoutLocaisInput
    upsert?: EmpresasUpsertWithoutLocaisInput
    connect?: EmpresasWhereUniqueInput
    update?: XOR<XOR<EmpresasUpdateToOneWithWhereWithoutLocaisInput, EmpresasUpdateWithoutLocaisInput>, EmpresasUncheckedUpdateWithoutLocaisInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmpresasCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    cnpj: string
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locais?: LocaisCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresasUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    cnpj: string
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locais?: LocaisUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresasCreateOrConnectWithoutUsuarioInput = {
    where: EmpresasWhereUniqueInput
    create: XOR<EmpresasCreateWithoutUsuarioInput, EmpresasUncheckedCreateWithoutUsuarioInput>
  }

  export type EmpresasCreateManyUsuarioInputEnvelope = {
    data: EmpresasCreateManyUsuarioInput | EmpresasCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EmpresasUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EmpresasWhereUniqueInput
    update: XOR<EmpresasUpdateWithoutUsuarioInput, EmpresasUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EmpresasCreateWithoutUsuarioInput, EmpresasUncheckedCreateWithoutUsuarioInput>
  }

  export type EmpresasUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EmpresasWhereUniqueInput
    data: XOR<EmpresasUpdateWithoutUsuarioInput, EmpresasUncheckedUpdateWithoutUsuarioInput>
  }

  export type EmpresasUpdateManyWithWhereWithoutUsuarioInput = {
    where: EmpresasScalarWhereInput
    data: XOR<EmpresasUpdateManyMutationInput, EmpresasUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EmpresasScalarWhereInput = {
    AND?: EmpresasScalarWhereInput | EmpresasScalarWhereInput[]
    OR?: EmpresasScalarWhereInput[]
    NOT?: EmpresasScalarWhereInput | EmpresasScalarWhereInput[]
    id?: StringFilter<"Empresas"> | string
    nome?: StringFilter<"Empresas"> | string
    cnpj?: StringFilter<"Empresas"> | string
    website?: StringNullableFilter<"Empresas"> | string | null
    createdAt?: DateTimeFilter<"Empresas"> | Date | string
    updatedAt?: DateTimeFilter<"Empresas"> | Date | string
    usuarioId?: StringFilter<"Empresas"> | string
  }

  export type UsuariosCreateWithoutEmpresasInput = {
    id?: string
    email: string
    nome?: string | null
    senha?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuariosUncheckedCreateWithoutEmpresasInput = {
    id?: string
    email: string
    nome?: string | null
    senha?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuariosCreateOrConnectWithoutEmpresasInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutEmpresasInput, UsuariosUncheckedCreateWithoutEmpresasInput>
  }

  export type LocaisCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocaisUncheckedCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocaisCreateOrConnectWithoutEmpresaInput = {
    where: LocaisWhereUniqueInput
    create: XOR<LocaisCreateWithoutEmpresaInput, LocaisUncheckedCreateWithoutEmpresaInput>
  }

  export type LocaisCreateManyEmpresaInputEnvelope = {
    data: LocaisCreateManyEmpresaInput | LocaisCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosUpsertWithoutEmpresasInput = {
    update: XOR<UsuariosUpdateWithoutEmpresasInput, UsuariosUncheckedUpdateWithoutEmpresasInput>
    create: XOR<UsuariosCreateWithoutEmpresasInput, UsuariosUncheckedCreateWithoutEmpresasInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutEmpresasInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutEmpresasInput, UsuariosUncheckedUpdateWithoutEmpresasInput>
  }

  export type UsuariosUpdateWithoutEmpresasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuariosUncheckedUpdateWithoutEmpresasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocaisUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: LocaisWhereUniqueInput
    update: XOR<LocaisUpdateWithoutEmpresaInput, LocaisUncheckedUpdateWithoutEmpresaInput>
    create: XOR<LocaisCreateWithoutEmpresaInput, LocaisUncheckedCreateWithoutEmpresaInput>
  }

  export type LocaisUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: LocaisWhereUniqueInput
    data: XOR<LocaisUpdateWithoutEmpresaInput, LocaisUncheckedUpdateWithoutEmpresaInput>
  }

  export type LocaisUpdateManyWithWhereWithoutEmpresaInput = {
    where: LocaisScalarWhereInput
    data: XOR<LocaisUpdateManyMutationInput, LocaisUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type LocaisScalarWhereInput = {
    AND?: LocaisScalarWhereInput | LocaisScalarWhereInput[]
    OR?: LocaisScalarWhereInput[]
    NOT?: LocaisScalarWhereInput | LocaisScalarWhereInput[]
    id?: StringFilter<"Locais"> | string
    nome?: StringFilter<"Locais"> | string
    cep?: StringFilter<"Locais"> | string
    rua?: StringFilter<"Locais"> | string
    numero?: StringFilter<"Locais"> | string
    bairro?: StringFilter<"Locais"> | string
    cidade?: StringFilter<"Locais"> | string
    estado?: StringFilter<"Locais"> | string
    createdAt?: DateTimeFilter<"Locais"> | Date | string
    updatedAt?: DateTimeFilter<"Locais"> | Date | string
    empresaId?: StringFilter<"Locais"> | string
  }

  export type EmpresasCreateWithoutLocaisInput = {
    id?: string
    nome: string
    cnpj: string
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuariosCreateNestedOneWithoutEmpresasInput
  }

  export type EmpresasUncheckedCreateWithoutLocaisInput = {
    id?: string
    nome: string
    cnpj: string
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
  }

  export type EmpresasCreateOrConnectWithoutLocaisInput = {
    where: EmpresasWhereUniqueInput
    create: XOR<EmpresasCreateWithoutLocaisInput, EmpresasUncheckedCreateWithoutLocaisInput>
  }

  export type EmpresasUpsertWithoutLocaisInput = {
    update: XOR<EmpresasUpdateWithoutLocaisInput, EmpresasUncheckedUpdateWithoutLocaisInput>
    create: XOR<EmpresasCreateWithoutLocaisInput, EmpresasUncheckedCreateWithoutLocaisInput>
    where?: EmpresasWhereInput
  }

  export type EmpresasUpdateToOneWithWhereWithoutLocaisInput = {
    where?: EmpresasWhereInput
    data: XOR<EmpresasUpdateWithoutLocaisInput, EmpresasUncheckedUpdateWithoutLocaisInput>
  }

  export type EmpresasUpdateWithoutLocaisInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuariosUpdateOneRequiredWithoutEmpresasNestedInput
  }

  export type EmpresasUncheckedUpdateWithoutLocaisInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type EmpresasCreateManyUsuarioInput = {
    id?: string
    nome: string
    cnpj: string
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpresasUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locais?: LocaisUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresasUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locais?: LocaisUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresasUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocaisCreateManyEmpresaInput = {
    id?: string
    nome: string
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocaisUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocaisUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocaisUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}