
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
 * Model IllnessSurgery
 * 
 */
export type IllnessSurgery = $Result.DefaultSelection<Prisma.$IllnessSurgeryPayload>
/**
 * Model IllnessType
 * 
 */
export type IllnessType = $Result.DefaultSelection<Prisma.$IllnessTypePayload>
/**
 * Model PolicyType
 * 
 */
export type PolicyType = $Result.DefaultSelection<Prisma.$PolicyTypePayload>
/**
 * Model ClaimTransection
 * 
 */
export type ClaimTransection = $Result.DefaultSelection<Prisma.$ClaimTransectionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more IllnessSurgeries
 * const illnessSurgeries = await prisma.illnessSurgery.findMany()
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
   * // Fetch zero or more IllnessSurgeries
   * const illnessSurgeries = await prisma.illnessSurgery.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.illnessSurgery`: Exposes CRUD operations for the **IllnessSurgery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IllnessSurgeries
    * const illnessSurgeries = await prisma.illnessSurgery.findMany()
    * ```
    */
  get illnessSurgery(): Prisma.IllnessSurgeryDelegate<ExtArgs>;

  /**
   * `prisma.illnessType`: Exposes CRUD operations for the **IllnessType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IllnessTypes
    * const illnessTypes = await prisma.illnessType.findMany()
    * ```
    */
  get illnessType(): Prisma.IllnessTypeDelegate<ExtArgs>;

  /**
   * `prisma.policyType`: Exposes CRUD operations for the **PolicyType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolicyTypes
    * const policyTypes = await prisma.policyType.findMany()
    * ```
    */
  get policyType(): Prisma.PolicyTypeDelegate<ExtArgs>;

  /**
   * `prisma.claimTransection`: Exposes CRUD operations for the **ClaimTransection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClaimTransections
    * const claimTransections = await prisma.claimTransection.findMany()
    * ```
    */
  get claimTransection(): Prisma.ClaimTransectionDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    IllnessSurgery: 'IllnessSurgery',
    IllnessType: 'IllnessType',
    PolicyType: 'PolicyType',
    ClaimTransection: 'ClaimTransection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "illnessSurgery" | "illnessType" | "policyType" | "claimTransection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      IllnessSurgery: {
        payload: Prisma.$IllnessSurgeryPayload<ExtArgs>
        fields: Prisma.IllnessSurgeryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IllnessSurgeryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IllnessSurgeryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          findFirst: {
            args: Prisma.IllnessSurgeryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IllnessSurgeryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          findMany: {
            args: Prisma.IllnessSurgeryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>[]
          }
          create: {
            args: Prisma.IllnessSurgeryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          createMany: {
            args: Prisma.IllnessSurgeryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IllnessSurgeryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>[]
          }
          delete: {
            args: Prisma.IllnessSurgeryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          update: {
            args: Prisma.IllnessSurgeryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          deleteMany: {
            args: Prisma.IllnessSurgeryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IllnessSurgeryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IllnessSurgeryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          aggregate: {
            args: Prisma.IllnessSurgeryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIllnessSurgery>
          }
          groupBy: {
            args: Prisma.IllnessSurgeryGroupByArgs<ExtArgs>
            result: $Utils.Optional<IllnessSurgeryGroupByOutputType>[]
          }
          count: {
            args: Prisma.IllnessSurgeryCountArgs<ExtArgs>
            result: $Utils.Optional<IllnessSurgeryCountAggregateOutputType> | number
          }
        }
      }
      IllnessType: {
        payload: Prisma.$IllnessTypePayload<ExtArgs>
        fields: Prisma.IllnessTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IllnessTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IllnessTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          findFirst: {
            args: Prisma.IllnessTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IllnessTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          findMany: {
            args: Prisma.IllnessTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>[]
          }
          create: {
            args: Prisma.IllnessTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          createMany: {
            args: Prisma.IllnessTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IllnessTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>[]
          }
          delete: {
            args: Prisma.IllnessTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          update: {
            args: Prisma.IllnessTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          deleteMany: {
            args: Prisma.IllnessTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IllnessTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IllnessTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          aggregate: {
            args: Prisma.IllnessTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIllnessType>
          }
          groupBy: {
            args: Prisma.IllnessTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IllnessTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IllnessTypeCountArgs<ExtArgs>
            result: $Utils.Optional<IllnessTypeCountAggregateOutputType> | number
          }
        }
      }
      PolicyType: {
        payload: Prisma.$PolicyTypePayload<ExtArgs>
        fields: Prisma.PolicyTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          findFirst: {
            args: Prisma.PolicyTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          findMany: {
            args: Prisma.PolicyTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>[]
          }
          create: {
            args: Prisma.PolicyTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          createMany: {
            args: Prisma.PolicyTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>[]
          }
          delete: {
            args: Prisma.PolicyTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          update: {
            args: Prisma.PolicyTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          deleteMany: {
            args: Prisma.PolicyTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PolicyTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          aggregate: {
            args: Prisma.PolicyTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicyType>
          }
          groupBy: {
            args: Prisma.PolicyTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyTypeCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyTypeCountAggregateOutputType> | number
          }
        }
      }
      ClaimTransection: {
        payload: Prisma.$ClaimTransectionPayload<ExtArgs>
        fields: Prisma.ClaimTransectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimTransectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimTransectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimTransectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimTransectionPayload>
          }
          findFirst: {
            args: Prisma.ClaimTransectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimTransectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimTransectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimTransectionPayload>
          }
          findMany: {
            args: Prisma.ClaimTransectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimTransectionPayload>[]
          }
          create: {
            args: Prisma.ClaimTransectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimTransectionPayload>
          }
          createMany: {
            args: Prisma.ClaimTransectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimTransectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimTransectionPayload>[]
          }
          delete: {
            args: Prisma.ClaimTransectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimTransectionPayload>
          }
          update: {
            args: Prisma.ClaimTransectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimTransectionPayload>
          }
          deleteMany: {
            args: Prisma.ClaimTransectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimTransectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClaimTransectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimTransectionPayload>
          }
          aggregate: {
            args: Prisma.ClaimTransectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaimTransection>
          }
          groupBy: {
            args: Prisma.ClaimTransectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimTransectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimTransectionCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimTransectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Models
   */

  /**
   * Model IllnessSurgery
   */

  export type AggregateIllnessSurgery = {
    _count: IllnessSurgeryCountAggregateOutputType | null
    _avg: IllnessSurgeryAvgAggregateOutputType | null
    _sum: IllnessSurgerySumAggregateOutputType | null
    _min: IllnessSurgeryMinAggregateOutputType | null
    _max: IllnessSurgeryMaxAggregateOutputType | null
  }

  export type IllnessSurgeryAvgAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
  }

  export type IllnessSurgerySumAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
  }

  export type IllnessSurgeryMinAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
    ISCode: string | null
    ISDescription: string | null
  }

  export type IllnessSurgeryMaxAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
    ISCode: string | null
    ISDescription: string | null
  }

  export type IllnessSurgeryCountAggregateOutputType = {
    id: number
    InsurerCode: number
    ISCode: number
    ISDescription: number
    _all: number
  }


  export type IllnessSurgeryAvgAggregateInputType = {
    id?: true
    InsurerCode?: true
  }

  export type IllnessSurgerySumAggregateInputType = {
    id?: true
    InsurerCode?: true
  }

  export type IllnessSurgeryMinAggregateInputType = {
    id?: true
    InsurerCode?: true
    ISCode?: true
    ISDescription?: true
  }

  export type IllnessSurgeryMaxAggregateInputType = {
    id?: true
    InsurerCode?: true
    ISCode?: true
    ISDescription?: true
  }

  export type IllnessSurgeryCountAggregateInputType = {
    id?: true
    InsurerCode?: true
    ISCode?: true
    ISDescription?: true
    _all?: true
  }

  export type IllnessSurgeryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IllnessSurgery to aggregate.
     */
    where?: IllnessSurgeryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessSurgeries to fetch.
     */
    orderBy?: IllnessSurgeryOrderByWithRelationInput | IllnessSurgeryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IllnessSurgeryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessSurgeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessSurgeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IllnessSurgeries
    **/
    _count?: true | IllnessSurgeryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IllnessSurgeryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IllnessSurgerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IllnessSurgeryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IllnessSurgeryMaxAggregateInputType
  }

  export type GetIllnessSurgeryAggregateType<T extends IllnessSurgeryAggregateArgs> = {
        [P in keyof T & keyof AggregateIllnessSurgery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIllnessSurgery[P]>
      : GetScalarType<T[P], AggregateIllnessSurgery[P]>
  }




  export type IllnessSurgeryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IllnessSurgeryWhereInput
    orderBy?: IllnessSurgeryOrderByWithAggregationInput | IllnessSurgeryOrderByWithAggregationInput[]
    by: IllnessSurgeryScalarFieldEnum[] | IllnessSurgeryScalarFieldEnum
    having?: IllnessSurgeryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IllnessSurgeryCountAggregateInputType | true
    _avg?: IllnessSurgeryAvgAggregateInputType
    _sum?: IllnessSurgerySumAggregateInputType
    _min?: IllnessSurgeryMinAggregateInputType
    _max?: IllnessSurgeryMaxAggregateInputType
  }

  export type IllnessSurgeryGroupByOutputType = {
    id: number
    InsurerCode: number
    ISCode: string
    ISDescription: string | null
    _count: IllnessSurgeryCountAggregateOutputType | null
    _avg: IllnessSurgeryAvgAggregateOutputType | null
    _sum: IllnessSurgerySumAggregateOutputType | null
    _min: IllnessSurgeryMinAggregateOutputType | null
    _max: IllnessSurgeryMaxAggregateOutputType | null
  }

  type GetIllnessSurgeryGroupByPayload<T extends IllnessSurgeryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IllnessSurgeryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IllnessSurgeryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IllnessSurgeryGroupByOutputType[P]>
            : GetScalarType<T[P], IllnessSurgeryGroupByOutputType[P]>
        }
      >
    >


  export type IllnessSurgerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    InsurerCode?: boolean
    ISCode?: boolean
    ISDescription?: boolean
  }, ExtArgs["result"]["illnessSurgery"]>

  export type IllnessSurgerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    InsurerCode?: boolean
    ISCode?: boolean
    ISDescription?: boolean
  }, ExtArgs["result"]["illnessSurgery"]>

  export type IllnessSurgerySelectScalar = {
    id?: boolean
    InsurerCode?: boolean
    ISCode?: boolean
    ISDescription?: boolean
  }


  export type $IllnessSurgeryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IllnessSurgery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      InsurerCode: number
      ISCode: string
      ISDescription: string | null
    }, ExtArgs["result"]["illnessSurgery"]>
    composites: {}
  }

  type IllnessSurgeryGetPayload<S extends boolean | null | undefined | IllnessSurgeryDefaultArgs> = $Result.GetResult<Prisma.$IllnessSurgeryPayload, S>

  type IllnessSurgeryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IllnessSurgeryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IllnessSurgeryCountAggregateInputType | true
    }

  export interface IllnessSurgeryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IllnessSurgery'], meta: { name: 'IllnessSurgery' } }
    /**
     * Find zero or one IllnessSurgery that matches the filter.
     * @param {IllnessSurgeryFindUniqueArgs} args - Arguments to find a IllnessSurgery
     * @example
     * // Get one IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IllnessSurgeryFindUniqueArgs>(args: SelectSubset<T, IllnessSurgeryFindUniqueArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IllnessSurgery that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IllnessSurgeryFindUniqueOrThrowArgs} args - Arguments to find a IllnessSurgery
     * @example
     * // Get one IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IllnessSurgeryFindUniqueOrThrowArgs>(args: SelectSubset<T, IllnessSurgeryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IllnessSurgery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryFindFirstArgs} args - Arguments to find a IllnessSurgery
     * @example
     * // Get one IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IllnessSurgeryFindFirstArgs>(args?: SelectSubset<T, IllnessSurgeryFindFirstArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IllnessSurgery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryFindFirstOrThrowArgs} args - Arguments to find a IllnessSurgery
     * @example
     * // Get one IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IllnessSurgeryFindFirstOrThrowArgs>(args?: SelectSubset<T, IllnessSurgeryFindFirstOrThrowArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IllnessSurgeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IllnessSurgeries
     * const illnessSurgeries = await prisma.illnessSurgery.findMany()
     * 
     * // Get first 10 IllnessSurgeries
     * const illnessSurgeries = await prisma.illnessSurgery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const illnessSurgeryWithIdOnly = await prisma.illnessSurgery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IllnessSurgeryFindManyArgs>(args?: SelectSubset<T, IllnessSurgeryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IllnessSurgery.
     * @param {IllnessSurgeryCreateArgs} args - Arguments to create a IllnessSurgery.
     * @example
     * // Create one IllnessSurgery
     * const IllnessSurgery = await prisma.illnessSurgery.create({
     *   data: {
     *     // ... data to create a IllnessSurgery
     *   }
     * })
     * 
     */
    create<T extends IllnessSurgeryCreateArgs>(args: SelectSubset<T, IllnessSurgeryCreateArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IllnessSurgeries.
     * @param {IllnessSurgeryCreateManyArgs} args - Arguments to create many IllnessSurgeries.
     * @example
     * // Create many IllnessSurgeries
     * const illnessSurgery = await prisma.illnessSurgery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IllnessSurgeryCreateManyArgs>(args?: SelectSubset<T, IllnessSurgeryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IllnessSurgeries and returns the data saved in the database.
     * @param {IllnessSurgeryCreateManyAndReturnArgs} args - Arguments to create many IllnessSurgeries.
     * @example
     * // Create many IllnessSurgeries
     * const illnessSurgery = await prisma.illnessSurgery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IllnessSurgeries and only return the `id`
     * const illnessSurgeryWithIdOnly = await prisma.illnessSurgery.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IllnessSurgeryCreateManyAndReturnArgs>(args?: SelectSubset<T, IllnessSurgeryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IllnessSurgery.
     * @param {IllnessSurgeryDeleteArgs} args - Arguments to delete one IllnessSurgery.
     * @example
     * // Delete one IllnessSurgery
     * const IllnessSurgery = await prisma.illnessSurgery.delete({
     *   where: {
     *     // ... filter to delete one IllnessSurgery
     *   }
     * })
     * 
     */
    delete<T extends IllnessSurgeryDeleteArgs>(args: SelectSubset<T, IllnessSurgeryDeleteArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IllnessSurgery.
     * @param {IllnessSurgeryUpdateArgs} args - Arguments to update one IllnessSurgery.
     * @example
     * // Update one IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IllnessSurgeryUpdateArgs>(args: SelectSubset<T, IllnessSurgeryUpdateArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IllnessSurgeries.
     * @param {IllnessSurgeryDeleteManyArgs} args - Arguments to filter IllnessSurgeries to delete.
     * @example
     * // Delete a few IllnessSurgeries
     * const { count } = await prisma.illnessSurgery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IllnessSurgeryDeleteManyArgs>(args?: SelectSubset<T, IllnessSurgeryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IllnessSurgeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IllnessSurgeries
     * const illnessSurgery = await prisma.illnessSurgery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IllnessSurgeryUpdateManyArgs>(args: SelectSubset<T, IllnessSurgeryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IllnessSurgery.
     * @param {IllnessSurgeryUpsertArgs} args - Arguments to update or create a IllnessSurgery.
     * @example
     * // Update or create a IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.upsert({
     *   create: {
     *     // ... data to create a IllnessSurgery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IllnessSurgery we want to update
     *   }
     * })
     */
    upsert<T extends IllnessSurgeryUpsertArgs>(args: SelectSubset<T, IllnessSurgeryUpsertArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IllnessSurgeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryCountArgs} args - Arguments to filter IllnessSurgeries to count.
     * @example
     * // Count the number of IllnessSurgeries
     * const count = await prisma.illnessSurgery.count({
     *   where: {
     *     // ... the filter for the IllnessSurgeries we want to count
     *   }
     * })
    **/
    count<T extends IllnessSurgeryCountArgs>(
      args?: Subset<T, IllnessSurgeryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IllnessSurgeryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IllnessSurgery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IllnessSurgeryAggregateArgs>(args: Subset<T, IllnessSurgeryAggregateArgs>): Prisma.PrismaPromise<GetIllnessSurgeryAggregateType<T>>

    /**
     * Group by IllnessSurgery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryGroupByArgs} args - Group by arguments.
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
      T extends IllnessSurgeryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IllnessSurgeryGroupByArgs['orderBy'] }
        : { orderBy?: IllnessSurgeryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IllnessSurgeryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIllnessSurgeryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IllnessSurgery model
   */
  readonly fields: IllnessSurgeryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IllnessSurgery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IllnessSurgeryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the IllnessSurgery model
   */ 
  interface IllnessSurgeryFieldRefs {
    readonly id: FieldRef<"IllnessSurgery", 'Int'>
    readonly InsurerCode: FieldRef<"IllnessSurgery", 'Int'>
    readonly ISCode: FieldRef<"IllnessSurgery", 'String'>
    readonly ISDescription: FieldRef<"IllnessSurgery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IllnessSurgery findUnique
   */
  export type IllnessSurgeryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Filter, which IllnessSurgery to fetch.
     */
    where: IllnessSurgeryWhereUniqueInput
  }

  /**
   * IllnessSurgery findUniqueOrThrow
   */
  export type IllnessSurgeryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Filter, which IllnessSurgery to fetch.
     */
    where: IllnessSurgeryWhereUniqueInput
  }

  /**
   * IllnessSurgery findFirst
   */
  export type IllnessSurgeryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Filter, which IllnessSurgery to fetch.
     */
    where?: IllnessSurgeryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessSurgeries to fetch.
     */
    orderBy?: IllnessSurgeryOrderByWithRelationInput | IllnessSurgeryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IllnessSurgeries.
     */
    cursor?: IllnessSurgeryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessSurgeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessSurgeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IllnessSurgeries.
     */
    distinct?: IllnessSurgeryScalarFieldEnum | IllnessSurgeryScalarFieldEnum[]
  }

  /**
   * IllnessSurgery findFirstOrThrow
   */
  export type IllnessSurgeryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Filter, which IllnessSurgery to fetch.
     */
    where?: IllnessSurgeryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessSurgeries to fetch.
     */
    orderBy?: IllnessSurgeryOrderByWithRelationInput | IllnessSurgeryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IllnessSurgeries.
     */
    cursor?: IllnessSurgeryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessSurgeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessSurgeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IllnessSurgeries.
     */
    distinct?: IllnessSurgeryScalarFieldEnum | IllnessSurgeryScalarFieldEnum[]
  }

  /**
   * IllnessSurgery findMany
   */
  export type IllnessSurgeryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Filter, which IllnessSurgeries to fetch.
     */
    where?: IllnessSurgeryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessSurgeries to fetch.
     */
    orderBy?: IllnessSurgeryOrderByWithRelationInput | IllnessSurgeryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IllnessSurgeries.
     */
    cursor?: IllnessSurgeryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessSurgeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessSurgeries.
     */
    skip?: number
    distinct?: IllnessSurgeryScalarFieldEnum | IllnessSurgeryScalarFieldEnum[]
  }

  /**
   * IllnessSurgery create
   */
  export type IllnessSurgeryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * The data needed to create a IllnessSurgery.
     */
    data: XOR<IllnessSurgeryCreateInput, IllnessSurgeryUncheckedCreateInput>
  }

  /**
   * IllnessSurgery createMany
   */
  export type IllnessSurgeryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IllnessSurgeries.
     */
    data: IllnessSurgeryCreateManyInput | IllnessSurgeryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IllnessSurgery createManyAndReturn
   */
  export type IllnessSurgeryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IllnessSurgeries.
     */
    data: IllnessSurgeryCreateManyInput | IllnessSurgeryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IllnessSurgery update
   */
  export type IllnessSurgeryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * The data needed to update a IllnessSurgery.
     */
    data: XOR<IllnessSurgeryUpdateInput, IllnessSurgeryUncheckedUpdateInput>
    /**
     * Choose, which IllnessSurgery to update.
     */
    where: IllnessSurgeryWhereUniqueInput
  }

  /**
   * IllnessSurgery updateMany
   */
  export type IllnessSurgeryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IllnessSurgeries.
     */
    data: XOR<IllnessSurgeryUpdateManyMutationInput, IllnessSurgeryUncheckedUpdateManyInput>
    /**
     * Filter which IllnessSurgeries to update
     */
    where?: IllnessSurgeryWhereInput
  }

  /**
   * IllnessSurgery upsert
   */
  export type IllnessSurgeryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * The filter to search for the IllnessSurgery to update in case it exists.
     */
    where: IllnessSurgeryWhereUniqueInput
    /**
     * In case the IllnessSurgery found by the `where` argument doesn't exist, create a new IllnessSurgery with this data.
     */
    create: XOR<IllnessSurgeryCreateInput, IllnessSurgeryUncheckedCreateInput>
    /**
     * In case the IllnessSurgery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IllnessSurgeryUpdateInput, IllnessSurgeryUncheckedUpdateInput>
  }

  /**
   * IllnessSurgery delete
   */
  export type IllnessSurgeryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Filter which IllnessSurgery to delete.
     */
    where: IllnessSurgeryWhereUniqueInput
  }

  /**
   * IllnessSurgery deleteMany
   */
  export type IllnessSurgeryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IllnessSurgeries to delete
     */
    where?: IllnessSurgeryWhereInput
  }

  /**
   * IllnessSurgery without action
   */
  export type IllnessSurgeryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
  }


  /**
   * Model IllnessType
   */

  export type AggregateIllnessType = {
    _count: IllnessTypeCountAggregateOutputType | null
    _avg: IllnessTypeAvgAggregateOutputType | null
    _sum: IllnessTypeSumAggregateOutputType | null
    _min: IllnessTypeMinAggregateOutputType | null
    _max: IllnessTypeMaxAggregateOutputType | null
  }

  export type IllnessTypeAvgAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
  }

  export type IllnessTypeSumAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
  }

  export type IllnessTypeMinAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
    IllnessTypeCode: string | null
    IllnessTypeDesc: string | null
  }

  export type IllnessTypeMaxAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
    IllnessTypeCode: string | null
    IllnessTypeDesc: string | null
  }

  export type IllnessTypeCountAggregateOutputType = {
    id: number
    InsurerCode: number
    IllnessTypeCode: number
    IllnessTypeDesc: number
    _all: number
  }


  export type IllnessTypeAvgAggregateInputType = {
    id?: true
    InsurerCode?: true
  }

  export type IllnessTypeSumAggregateInputType = {
    id?: true
    InsurerCode?: true
  }

  export type IllnessTypeMinAggregateInputType = {
    id?: true
    InsurerCode?: true
    IllnessTypeCode?: true
    IllnessTypeDesc?: true
  }

  export type IllnessTypeMaxAggregateInputType = {
    id?: true
    InsurerCode?: true
    IllnessTypeCode?: true
    IllnessTypeDesc?: true
  }

  export type IllnessTypeCountAggregateInputType = {
    id?: true
    InsurerCode?: true
    IllnessTypeCode?: true
    IllnessTypeDesc?: true
    _all?: true
  }

  export type IllnessTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IllnessType to aggregate.
     */
    where?: IllnessTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessTypes to fetch.
     */
    orderBy?: IllnessTypeOrderByWithRelationInput | IllnessTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IllnessTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IllnessTypes
    **/
    _count?: true | IllnessTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IllnessTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IllnessTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IllnessTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IllnessTypeMaxAggregateInputType
  }

  export type GetIllnessTypeAggregateType<T extends IllnessTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateIllnessType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIllnessType[P]>
      : GetScalarType<T[P], AggregateIllnessType[P]>
  }




  export type IllnessTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IllnessTypeWhereInput
    orderBy?: IllnessTypeOrderByWithAggregationInput | IllnessTypeOrderByWithAggregationInput[]
    by: IllnessTypeScalarFieldEnum[] | IllnessTypeScalarFieldEnum
    having?: IllnessTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IllnessTypeCountAggregateInputType | true
    _avg?: IllnessTypeAvgAggregateInputType
    _sum?: IllnessTypeSumAggregateInputType
    _min?: IllnessTypeMinAggregateInputType
    _max?: IllnessTypeMaxAggregateInputType
  }

  export type IllnessTypeGroupByOutputType = {
    id: number
    InsurerCode: number
    IllnessTypeCode: string
    IllnessTypeDesc: string | null
    _count: IllnessTypeCountAggregateOutputType | null
    _avg: IllnessTypeAvgAggregateOutputType | null
    _sum: IllnessTypeSumAggregateOutputType | null
    _min: IllnessTypeMinAggregateOutputType | null
    _max: IllnessTypeMaxAggregateOutputType | null
  }

  type GetIllnessTypeGroupByPayload<T extends IllnessTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IllnessTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IllnessTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IllnessTypeGroupByOutputType[P]>
            : GetScalarType<T[P], IllnessTypeGroupByOutputType[P]>
        }
      >
    >


  export type IllnessTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    InsurerCode?: boolean
    IllnessTypeCode?: boolean
    IllnessTypeDesc?: boolean
  }, ExtArgs["result"]["illnessType"]>

  export type IllnessTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    InsurerCode?: boolean
    IllnessTypeCode?: boolean
    IllnessTypeDesc?: boolean
  }, ExtArgs["result"]["illnessType"]>

  export type IllnessTypeSelectScalar = {
    id?: boolean
    InsurerCode?: boolean
    IllnessTypeCode?: boolean
    IllnessTypeDesc?: boolean
  }


  export type $IllnessTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IllnessType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      InsurerCode: number
      IllnessTypeCode: string
      IllnessTypeDesc: string | null
    }, ExtArgs["result"]["illnessType"]>
    composites: {}
  }

  type IllnessTypeGetPayload<S extends boolean | null | undefined | IllnessTypeDefaultArgs> = $Result.GetResult<Prisma.$IllnessTypePayload, S>

  type IllnessTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IllnessTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IllnessTypeCountAggregateInputType | true
    }

  export interface IllnessTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IllnessType'], meta: { name: 'IllnessType' } }
    /**
     * Find zero or one IllnessType that matches the filter.
     * @param {IllnessTypeFindUniqueArgs} args - Arguments to find a IllnessType
     * @example
     * // Get one IllnessType
     * const illnessType = await prisma.illnessType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IllnessTypeFindUniqueArgs>(args: SelectSubset<T, IllnessTypeFindUniqueArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IllnessType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IllnessTypeFindUniqueOrThrowArgs} args - Arguments to find a IllnessType
     * @example
     * // Get one IllnessType
     * const illnessType = await prisma.illnessType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IllnessTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, IllnessTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IllnessType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeFindFirstArgs} args - Arguments to find a IllnessType
     * @example
     * // Get one IllnessType
     * const illnessType = await prisma.illnessType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IllnessTypeFindFirstArgs>(args?: SelectSubset<T, IllnessTypeFindFirstArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IllnessType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeFindFirstOrThrowArgs} args - Arguments to find a IllnessType
     * @example
     * // Get one IllnessType
     * const illnessType = await prisma.illnessType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IllnessTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, IllnessTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IllnessTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IllnessTypes
     * const illnessTypes = await prisma.illnessType.findMany()
     * 
     * // Get first 10 IllnessTypes
     * const illnessTypes = await prisma.illnessType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const illnessTypeWithIdOnly = await prisma.illnessType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IllnessTypeFindManyArgs>(args?: SelectSubset<T, IllnessTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IllnessType.
     * @param {IllnessTypeCreateArgs} args - Arguments to create a IllnessType.
     * @example
     * // Create one IllnessType
     * const IllnessType = await prisma.illnessType.create({
     *   data: {
     *     // ... data to create a IllnessType
     *   }
     * })
     * 
     */
    create<T extends IllnessTypeCreateArgs>(args: SelectSubset<T, IllnessTypeCreateArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IllnessTypes.
     * @param {IllnessTypeCreateManyArgs} args - Arguments to create many IllnessTypes.
     * @example
     * // Create many IllnessTypes
     * const illnessType = await prisma.illnessType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IllnessTypeCreateManyArgs>(args?: SelectSubset<T, IllnessTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IllnessTypes and returns the data saved in the database.
     * @param {IllnessTypeCreateManyAndReturnArgs} args - Arguments to create many IllnessTypes.
     * @example
     * // Create many IllnessTypes
     * const illnessType = await prisma.illnessType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IllnessTypes and only return the `id`
     * const illnessTypeWithIdOnly = await prisma.illnessType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IllnessTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, IllnessTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IllnessType.
     * @param {IllnessTypeDeleteArgs} args - Arguments to delete one IllnessType.
     * @example
     * // Delete one IllnessType
     * const IllnessType = await prisma.illnessType.delete({
     *   where: {
     *     // ... filter to delete one IllnessType
     *   }
     * })
     * 
     */
    delete<T extends IllnessTypeDeleteArgs>(args: SelectSubset<T, IllnessTypeDeleteArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IllnessType.
     * @param {IllnessTypeUpdateArgs} args - Arguments to update one IllnessType.
     * @example
     * // Update one IllnessType
     * const illnessType = await prisma.illnessType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IllnessTypeUpdateArgs>(args: SelectSubset<T, IllnessTypeUpdateArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IllnessTypes.
     * @param {IllnessTypeDeleteManyArgs} args - Arguments to filter IllnessTypes to delete.
     * @example
     * // Delete a few IllnessTypes
     * const { count } = await prisma.illnessType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IllnessTypeDeleteManyArgs>(args?: SelectSubset<T, IllnessTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IllnessTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IllnessTypes
     * const illnessType = await prisma.illnessType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IllnessTypeUpdateManyArgs>(args: SelectSubset<T, IllnessTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IllnessType.
     * @param {IllnessTypeUpsertArgs} args - Arguments to update or create a IllnessType.
     * @example
     * // Update or create a IllnessType
     * const illnessType = await prisma.illnessType.upsert({
     *   create: {
     *     // ... data to create a IllnessType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IllnessType we want to update
     *   }
     * })
     */
    upsert<T extends IllnessTypeUpsertArgs>(args: SelectSubset<T, IllnessTypeUpsertArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IllnessTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeCountArgs} args - Arguments to filter IllnessTypes to count.
     * @example
     * // Count the number of IllnessTypes
     * const count = await prisma.illnessType.count({
     *   where: {
     *     // ... the filter for the IllnessTypes we want to count
     *   }
     * })
    **/
    count<T extends IllnessTypeCountArgs>(
      args?: Subset<T, IllnessTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IllnessTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IllnessType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IllnessTypeAggregateArgs>(args: Subset<T, IllnessTypeAggregateArgs>): Prisma.PrismaPromise<GetIllnessTypeAggregateType<T>>

    /**
     * Group by IllnessType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeGroupByArgs} args - Group by arguments.
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
      T extends IllnessTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IllnessTypeGroupByArgs['orderBy'] }
        : { orderBy?: IllnessTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IllnessTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIllnessTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IllnessType model
   */
  readonly fields: IllnessTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IllnessType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IllnessTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the IllnessType model
   */ 
  interface IllnessTypeFieldRefs {
    readonly id: FieldRef<"IllnessType", 'Int'>
    readonly InsurerCode: FieldRef<"IllnessType", 'Int'>
    readonly IllnessTypeCode: FieldRef<"IllnessType", 'String'>
    readonly IllnessTypeDesc: FieldRef<"IllnessType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IllnessType findUnique
   */
  export type IllnessTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Filter, which IllnessType to fetch.
     */
    where: IllnessTypeWhereUniqueInput
  }

  /**
   * IllnessType findUniqueOrThrow
   */
  export type IllnessTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Filter, which IllnessType to fetch.
     */
    where: IllnessTypeWhereUniqueInput
  }

  /**
   * IllnessType findFirst
   */
  export type IllnessTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Filter, which IllnessType to fetch.
     */
    where?: IllnessTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessTypes to fetch.
     */
    orderBy?: IllnessTypeOrderByWithRelationInput | IllnessTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IllnessTypes.
     */
    cursor?: IllnessTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IllnessTypes.
     */
    distinct?: IllnessTypeScalarFieldEnum | IllnessTypeScalarFieldEnum[]
  }

  /**
   * IllnessType findFirstOrThrow
   */
  export type IllnessTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Filter, which IllnessType to fetch.
     */
    where?: IllnessTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessTypes to fetch.
     */
    orderBy?: IllnessTypeOrderByWithRelationInput | IllnessTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IllnessTypes.
     */
    cursor?: IllnessTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IllnessTypes.
     */
    distinct?: IllnessTypeScalarFieldEnum | IllnessTypeScalarFieldEnum[]
  }

  /**
   * IllnessType findMany
   */
  export type IllnessTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Filter, which IllnessTypes to fetch.
     */
    where?: IllnessTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessTypes to fetch.
     */
    orderBy?: IllnessTypeOrderByWithRelationInput | IllnessTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IllnessTypes.
     */
    cursor?: IllnessTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessTypes.
     */
    skip?: number
    distinct?: IllnessTypeScalarFieldEnum | IllnessTypeScalarFieldEnum[]
  }

  /**
   * IllnessType create
   */
  export type IllnessTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * The data needed to create a IllnessType.
     */
    data: XOR<IllnessTypeCreateInput, IllnessTypeUncheckedCreateInput>
  }

  /**
   * IllnessType createMany
   */
  export type IllnessTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IllnessTypes.
     */
    data: IllnessTypeCreateManyInput | IllnessTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IllnessType createManyAndReturn
   */
  export type IllnessTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IllnessTypes.
     */
    data: IllnessTypeCreateManyInput | IllnessTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IllnessType update
   */
  export type IllnessTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * The data needed to update a IllnessType.
     */
    data: XOR<IllnessTypeUpdateInput, IllnessTypeUncheckedUpdateInput>
    /**
     * Choose, which IllnessType to update.
     */
    where: IllnessTypeWhereUniqueInput
  }

  /**
   * IllnessType updateMany
   */
  export type IllnessTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IllnessTypes.
     */
    data: XOR<IllnessTypeUpdateManyMutationInput, IllnessTypeUncheckedUpdateManyInput>
    /**
     * Filter which IllnessTypes to update
     */
    where?: IllnessTypeWhereInput
  }

  /**
   * IllnessType upsert
   */
  export type IllnessTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * The filter to search for the IllnessType to update in case it exists.
     */
    where: IllnessTypeWhereUniqueInput
    /**
     * In case the IllnessType found by the `where` argument doesn't exist, create a new IllnessType with this data.
     */
    create: XOR<IllnessTypeCreateInput, IllnessTypeUncheckedCreateInput>
    /**
     * In case the IllnessType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IllnessTypeUpdateInput, IllnessTypeUncheckedUpdateInput>
  }

  /**
   * IllnessType delete
   */
  export type IllnessTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Filter which IllnessType to delete.
     */
    where: IllnessTypeWhereUniqueInput
  }

  /**
   * IllnessType deleteMany
   */
  export type IllnessTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IllnessTypes to delete
     */
    where?: IllnessTypeWhereInput
  }

  /**
   * IllnessType without action
   */
  export type IllnessTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
  }


  /**
   * Model PolicyType
   */

  export type AggregatePolicyType = {
    _count: PolicyTypeCountAggregateOutputType | null
    _avg: PolicyTypeAvgAggregateOutputType | null
    _sum: PolicyTypeSumAggregateOutputType | null
    _min: PolicyTypeMinAggregateOutputType | null
    _max: PolicyTypeMaxAggregateOutputType | null
  }

  export type PolicyTypeAvgAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
  }

  export type PolicyTypeSumAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
  }

  export type PolicyTypeMinAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
    PolicyTypeCode: string | null
    PolicyTypeDesc: string | null
  }

  export type PolicyTypeMaxAggregateOutputType = {
    id: number | null
    InsurerCode: number | null
    PolicyTypeCode: string | null
    PolicyTypeDesc: string | null
  }

  export type PolicyTypeCountAggregateOutputType = {
    id: number
    InsurerCode: number
    PolicyTypeCode: number
    PolicyTypeDesc: number
    _all: number
  }


  export type PolicyTypeAvgAggregateInputType = {
    id?: true
    InsurerCode?: true
  }

  export type PolicyTypeSumAggregateInputType = {
    id?: true
    InsurerCode?: true
  }

  export type PolicyTypeMinAggregateInputType = {
    id?: true
    InsurerCode?: true
    PolicyTypeCode?: true
    PolicyTypeDesc?: true
  }

  export type PolicyTypeMaxAggregateInputType = {
    id?: true
    InsurerCode?: true
    PolicyTypeCode?: true
    PolicyTypeDesc?: true
  }

  export type PolicyTypeCountAggregateInputType = {
    id?: true
    InsurerCode?: true
    PolicyTypeCode?: true
    PolicyTypeDesc?: true
    _all?: true
  }

  export type PolicyTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyType to aggregate.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolicyTypes
    **/
    _count?: true | PolicyTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicyTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyTypeMaxAggregateInputType
  }

  export type GetPolicyTypeAggregateType<T extends PolicyTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicyType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicyType[P]>
      : GetScalarType<T[P], AggregatePolicyType[P]>
  }




  export type PolicyTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyTypeWhereInput
    orderBy?: PolicyTypeOrderByWithAggregationInput | PolicyTypeOrderByWithAggregationInput[]
    by: PolicyTypeScalarFieldEnum[] | PolicyTypeScalarFieldEnum
    having?: PolicyTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyTypeCountAggregateInputType | true
    _avg?: PolicyTypeAvgAggregateInputType
    _sum?: PolicyTypeSumAggregateInputType
    _min?: PolicyTypeMinAggregateInputType
    _max?: PolicyTypeMaxAggregateInputType
  }

  export type PolicyTypeGroupByOutputType = {
    id: number
    InsurerCode: number
    PolicyTypeCode: string
    PolicyTypeDesc: string | null
    _count: PolicyTypeCountAggregateOutputType | null
    _avg: PolicyTypeAvgAggregateOutputType | null
    _sum: PolicyTypeSumAggregateOutputType | null
    _min: PolicyTypeMinAggregateOutputType | null
    _max: PolicyTypeMaxAggregateOutputType | null
  }

  type GetPolicyTypeGroupByPayload<T extends PolicyTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyTypeGroupByOutputType[P]>
        }
      >
    >


  export type PolicyTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    InsurerCode?: boolean
    PolicyTypeCode?: boolean
    PolicyTypeDesc?: boolean
  }, ExtArgs["result"]["policyType"]>

  export type PolicyTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    InsurerCode?: boolean
    PolicyTypeCode?: boolean
    PolicyTypeDesc?: boolean
  }, ExtArgs["result"]["policyType"]>

  export type PolicyTypeSelectScalar = {
    id?: boolean
    InsurerCode?: boolean
    PolicyTypeCode?: boolean
    PolicyTypeDesc?: boolean
  }


  export type $PolicyTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PolicyType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      InsurerCode: number
      PolicyTypeCode: string
      PolicyTypeDesc: string | null
    }, ExtArgs["result"]["policyType"]>
    composites: {}
  }

  type PolicyTypeGetPayload<S extends boolean | null | undefined | PolicyTypeDefaultArgs> = $Result.GetResult<Prisma.$PolicyTypePayload, S>

  type PolicyTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PolicyTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PolicyTypeCountAggregateInputType | true
    }

  export interface PolicyTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PolicyType'], meta: { name: 'PolicyType' } }
    /**
     * Find zero or one PolicyType that matches the filter.
     * @param {PolicyTypeFindUniqueArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyTypeFindUniqueArgs>(args: SelectSubset<T, PolicyTypeFindUniqueArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PolicyType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PolicyTypeFindUniqueOrThrowArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PolicyType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeFindFirstArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyTypeFindFirstArgs>(args?: SelectSubset<T, PolicyTypeFindFirstArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PolicyType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeFindFirstOrThrowArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PolicyTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolicyTypes
     * const policyTypes = await prisma.policyType.findMany()
     * 
     * // Get first 10 PolicyTypes
     * const policyTypes = await prisma.policyType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyTypeWithIdOnly = await prisma.policyType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyTypeFindManyArgs>(args?: SelectSubset<T, PolicyTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PolicyType.
     * @param {PolicyTypeCreateArgs} args - Arguments to create a PolicyType.
     * @example
     * // Create one PolicyType
     * const PolicyType = await prisma.policyType.create({
     *   data: {
     *     // ... data to create a PolicyType
     *   }
     * })
     * 
     */
    create<T extends PolicyTypeCreateArgs>(args: SelectSubset<T, PolicyTypeCreateArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PolicyTypes.
     * @param {PolicyTypeCreateManyArgs} args - Arguments to create many PolicyTypes.
     * @example
     * // Create many PolicyTypes
     * const policyType = await prisma.policyType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyTypeCreateManyArgs>(args?: SelectSubset<T, PolicyTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PolicyTypes and returns the data saved in the database.
     * @param {PolicyTypeCreateManyAndReturnArgs} args - Arguments to create many PolicyTypes.
     * @example
     * // Create many PolicyTypes
     * const policyType = await prisma.policyType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PolicyTypes and only return the `id`
     * const policyTypeWithIdOnly = await prisma.policyType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PolicyType.
     * @param {PolicyTypeDeleteArgs} args - Arguments to delete one PolicyType.
     * @example
     * // Delete one PolicyType
     * const PolicyType = await prisma.policyType.delete({
     *   where: {
     *     // ... filter to delete one PolicyType
     *   }
     * })
     * 
     */
    delete<T extends PolicyTypeDeleteArgs>(args: SelectSubset<T, PolicyTypeDeleteArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PolicyType.
     * @param {PolicyTypeUpdateArgs} args - Arguments to update one PolicyType.
     * @example
     * // Update one PolicyType
     * const policyType = await prisma.policyType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyTypeUpdateArgs>(args: SelectSubset<T, PolicyTypeUpdateArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PolicyTypes.
     * @param {PolicyTypeDeleteManyArgs} args - Arguments to filter PolicyTypes to delete.
     * @example
     * // Delete a few PolicyTypes
     * const { count } = await prisma.policyType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyTypeDeleteManyArgs>(args?: SelectSubset<T, PolicyTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolicyTypes
     * const policyType = await prisma.policyType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyTypeUpdateManyArgs>(args: SelectSubset<T, PolicyTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PolicyType.
     * @param {PolicyTypeUpsertArgs} args - Arguments to update or create a PolicyType.
     * @example
     * // Update or create a PolicyType
     * const policyType = await prisma.policyType.upsert({
     *   create: {
     *     // ... data to create a PolicyType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolicyType we want to update
     *   }
     * })
     */
    upsert<T extends PolicyTypeUpsertArgs>(args: SelectSubset<T, PolicyTypeUpsertArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PolicyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeCountArgs} args - Arguments to filter PolicyTypes to count.
     * @example
     * // Count the number of PolicyTypes
     * const count = await prisma.policyType.count({
     *   where: {
     *     // ... the filter for the PolicyTypes we want to count
     *   }
     * })
    **/
    count<T extends PolicyTypeCountArgs>(
      args?: Subset<T, PolicyTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolicyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicyTypeAggregateArgs>(args: Subset<T, PolicyTypeAggregateArgs>): Prisma.PrismaPromise<GetPolicyTypeAggregateType<T>>

    /**
     * Group by PolicyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeGroupByArgs} args - Group by arguments.
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
      T extends PolicyTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyTypeGroupByArgs['orderBy'] }
        : { orderBy?: PolicyTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PolicyTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PolicyType model
   */
  readonly fields: PolicyTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolicyType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PolicyType model
   */ 
  interface PolicyTypeFieldRefs {
    readonly id: FieldRef<"PolicyType", 'Int'>
    readonly InsurerCode: FieldRef<"PolicyType", 'Int'>
    readonly PolicyTypeCode: FieldRef<"PolicyType", 'String'>
    readonly PolicyTypeDesc: FieldRef<"PolicyType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PolicyType findUnique
   */
  export type PolicyTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType findUniqueOrThrow
   */
  export type PolicyTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType findFirst
   */
  export type PolicyTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyTypes.
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyTypes.
     */
    distinct?: PolicyTypeScalarFieldEnum | PolicyTypeScalarFieldEnum[]
  }

  /**
   * PolicyType findFirstOrThrow
   */
  export type PolicyTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyTypes.
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyTypes.
     */
    distinct?: PolicyTypeScalarFieldEnum | PolicyTypeScalarFieldEnum[]
  }

  /**
   * PolicyType findMany
   */
  export type PolicyTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Filter, which PolicyTypes to fetch.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolicyTypes.
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    distinct?: PolicyTypeScalarFieldEnum | PolicyTypeScalarFieldEnum[]
  }

  /**
   * PolicyType create
   */
  export type PolicyTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * The data needed to create a PolicyType.
     */
    data: XOR<PolicyTypeCreateInput, PolicyTypeUncheckedCreateInput>
  }

  /**
   * PolicyType createMany
   */
  export type PolicyTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PolicyTypes.
     */
    data: PolicyTypeCreateManyInput | PolicyTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolicyType createManyAndReturn
   */
  export type PolicyTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PolicyTypes.
     */
    data: PolicyTypeCreateManyInput | PolicyTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolicyType update
   */
  export type PolicyTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * The data needed to update a PolicyType.
     */
    data: XOR<PolicyTypeUpdateInput, PolicyTypeUncheckedUpdateInput>
    /**
     * Choose, which PolicyType to update.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType updateMany
   */
  export type PolicyTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PolicyTypes.
     */
    data: XOR<PolicyTypeUpdateManyMutationInput, PolicyTypeUncheckedUpdateManyInput>
    /**
     * Filter which PolicyTypes to update
     */
    where?: PolicyTypeWhereInput
  }

  /**
   * PolicyType upsert
   */
  export type PolicyTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * The filter to search for the PolicyType to update in case it exists.
     */
    where: PolicyTypeWhereUniqueInput
    /**
     * In case the PolicyType found by the `where` argument doesn't exist, create a new PolicyType with this data.
     */
    create: XOR<PolicyTypeCreateInput, PolicyTypeUncheckedCreateInput>
    /**
     * In case the PolicyType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyTypeUpdateInput, PolicyTypeUncheckedUpdateInput>
  }

  /**
   * PolicyType delete
   */
  export type PolicyTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Filter which PolicyType to delete.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType deleteMany
   */
  export type PolicyTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyTypes to delete
     */
    where?: PolicyTypeWhereInput
  }

  /**
   * PolicyType without action
   */
  export type PolicyTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
  }


  /**
   * Model ClaimTransection
   */

  export type AggregateClaimTransection = {
    _count: ClaimTransectionCountAggregateOutputType | null
    _avg: ClaimTransectionAvgAggregateOutputType | null
    _sum: ClaimTransectionSumAggregateOutputType | null
    _min: ClaimTransectionMinAggregateOutputType | null
    _max: ClaimTransectionMaxAggregateOutputType | null
  }

  export type ClaimTransectionAvgAggregateOutputType = {
    ClaimTranId: number | null
  }

  export type ClaimTransectionSumAggregateOutputType = {
    ClaimTranId: number | null
  }

  export type ClaimTransectionMinAggregateOutputType = {
    ClaimTranId: number | null
    RefId: string | null
    TransactionNo: string | null
    HN: string | null
    VN: string | null
    CreateAt: Date | null
  }

  export type ClaimTransectionMaxAggregateOutputType = {
    ClaimTranId: number | null
    RefId: string | null
    TransactionNo: string | null
    HN: string | null
    VN: string | null
    CreateAt: Date | null
  }

  export type ClaimTransectionCountAggregateOutputType = {
    ClaimTranId: number
    RefId: number
    TransactionNo: number
    HN: number
    VN: number
    CreateAt: number
    _all: number
  }


  export type ClaimTransectionAvgAggregateInputType = {
    ClaimTranId?: true
  }

  export type ClaimTransectionSumAggregateInputType = {
    ClaimTranId?: true
  }

  export type ClaimTransectionMinAggregateInputType = {
    ClaimTranId?: true
    RefId?: true
    TransactionNo?: true
    HN?: true
    VN?: true
    CreateAt?: true
  }

  export type ClaimTransectionMaxAggregateInputType = {
    ClaimTranId?: true
    RefId?: true
    TransactionNo?: true
    HN?: true
    VN?: true
    CreateAt?: true
  }

  export type ClaimTransectionCountAggregateInputType = {
    ClaimTranId?: true
    RefId?: true
    TransactionNo?: true
    HN?: true
    VN?: true
    CreateAt?: true
    _all?: true
  }

  export type ClaimTransectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaimTransection to aggregate.
     */
    where?: ClaimTransectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimTransections to fetch.
     */
    orderBy?: ClaimTransectionOrderByWithRelationInput | ClaimTransectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimTransectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimTransections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimTransections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClaimTransections
    **/
    _count?: true | ClaimTransectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimTransectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimTransectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimTransectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimTransectionMaxAggregateInputType
  }

  export type GetClaimTransectionAggregateType<T extends ClaimTransectionAggregateArgs> = {
        [P in keyof T & keyof AggregateClaimTransection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaimTransection[P]>
      : GetScalarType<T[P], AggregateClaimTransection[P]>
  }




  export type ClaimTransectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimTransectionWhereInput
    orderBy?: ClaimTransectionOrderByWithAggregationInput | ClaimTransectionOrderByWithAggregationInput[]
    by: ClaimTransectionScalarFieldEnum[] | ClaimTransectionScalarFieldEnum
    having?: ClaimTransectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimTransectionCountAggregateInputType | true
    _avg?: ClaimTransectionAvgAggregateInputType
    _sum?: ClaimTransectionSumAggregateInputType
    _min?: ClaimTransectionMinAggregateInputType
    _max?: ClaimTransectionMaxAggregateInputType
  }

  export type ClaimTransectionGroupByOutputType = {
    ClaimTranId: number
    RefId: string
    TransactionNo: string
    HN: string
    VN: string
    CreateAt: Date | null
    _count: ClaimTransectionCountAggregateOutputType | null
    _avg: ClaimTransectionAvgAggregateOutputType | null
    _sum: ClaimTransectionSumAggregateOutputType | null
    _min: ClaimTransectionMinAggregateOutputType | null
    _max: ClaimTransectionMaxAggregateOutputType | null
  }

  type GetClaimTransectionGroupByPayload<T extends ClaimTransectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimTransectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimTransectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimTransectionGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimTransectionGroupByOutputType[P]>
        }
      >
    >


  export type ClaimTransectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClaimTranId?: boolean
    RefId?: boolean
    TransactionNo?: boolean
    HN?: boolean
    VN?: boolean
    CreateAt?: boolean
  }, ExtArgs["result"]["claimTransection"]>

  export type ClaimTransectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ClaimTranId?: boolean
    RefId?: boolean
    TransactionNo?: boolean
    HN?: boolean
    VN?: boolean
    CreateAt?: boolean
  }, ExtArgs["result"]["claimTransection"]>

  export type ClaimTransectionSelectScalar = {
    ClaimTranId?: boolean
    RefId?: boolean
    TransactionNo?: boolean
    HN?: boolean
    VN?: boolean
    CreateAt?: boolean
  }


  export type $ClaimTransectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClaimTransection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ClaimTranId: number
      RefId: string
      TransactionNo: string
      HN: string
      VN: string
      CreateAt: Date | null
    }, ExtArgs["result"]["claimTransection"]>
    composites: {}
  }

  type ClaimTransectionGetPayload<S extends boolean | null | undefined | ClaimTransectionDefaultArgs> = $Result.GetResult<Prisma.$ClaimTransectionPayload, S>

  type ClaimTransectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClaimTransectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClaimTransectionCountAggregateInputType | true
    }

  export interface ClaimTransectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClaimTransection'], meta: { name: 'ClaimTransection' } }
    /**
     * Find zero or one ClaimTransection that matches the filter.
     * @param {ClaimTransectionFindUniqueArgs} args - Arguments to find a ClaimTransection
     * @example
     * // Get one ClaimTransection
     * const claimTransection = await prisma.claimTransection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimTransectionFindUniqueArgs>(args: SelectSubset<T, ClaimTransectionFindUniqueArgs<ExtArgs>>): Prisma__ClaimTransectionClient<$Result.GetResult<Prisma.$ClaimTransectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ClaimTransection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClaimTransectionFindUniqueOrThrowArgs} args - Arguments to find a ClaimTransection
     * @example
     * // Get one ClaimTransection
     * const claimTransection = await prisma.claimTransection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimTransectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimTransectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimTransectionClient<$Result.GetResult<Prisma.$ClaimTransectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ClaimTransection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimTransectionFindFirstArgs} args - Arguments to find a ClaimTransection
     * @example
     * // Get one ClaimTransection
     * const claimTransection = await prisma.claimTransection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimTransectionFindFirstArgs>(args?: SelectSubset<T, ClaimTransectionFindFirstArgs<ExtArgs>>): Prisma__ClaimTransectionClient<$Result.GetResult<Prisma.$ClaimTransectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ClaimTransection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimTransectionFindFirstOrThrowArgs} args - Arguments to find a ClaimTransection
     * @example
     * // Get one ClaimTransection
     * const claimTransection = await prisma.claimTransection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimTransectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimTransectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimTransectionClient<$Result.GetResult<Prisma.$ClaimTransectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ClaimTransections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimTransectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClaimTransections
     * const claimTransections = await prisma.claimTransection.findMany()
     * 
     * // Get first 10 ClaimTransections
     * const claimTransections = await prisma.claimTransection.findMany({ take: 10 })
     * 
     * // Only select the `ClaimTranId`
     * const claimTransectionWithClaimTranIdOnly = await prisma.claimTransection.findMany({ select: { ClaimTranId: true } })
     * 
     */
    findMany<T extends ClaimTransectionFindManyArgs>(args?: SelectSubset<T, ClaimTransectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimTransectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ClaimTransection.
     * @param {ClaimTransectionCreateArgs} args - Arguments to create a ClaimTransection.
     * @example
     * // Create one ClaimTransection
     * const ClaimTransection = await prisma.claimTransection.create({
     *   data: {
     *     // ... data to create a ClaimTransection
     *   }
     * })
     * 
     */
    create<T extends ClaimTransectionCreateArgs>(args: SelectSubset<T, ClaimTransectionCreateArgs<ExtArgs>>): Prisma__ClaimTransectionClient<$Result.GetResult<Prisma.$ClaimTransectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ClaimTransections.
     * @param {ClaimTransectionCreateManyArgs} args - Arguments to create many ClaimTransections.
     * @example
     * // Create many ClaimTransections
     * const claimTransection = await prisma.claimTransection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimTransectionCreateManyArgs>(args?: SelectSubset<T, ClaimTransectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClaimTransections and returns the data saved in the database.
     * @param {ClaimTransectionCreateManyAndReturnArgs} args - Arguments to create many ClaimTransections.
     * @example
     * // Create many ClaimTransections
     * const claimTransection = await prisma.claimTransection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClaimTransections and only return the `ClaimTranId`
     * const claimTransectionWithClaimTranIdOnly = await prisma.claimTransection.createManyAndReturn({ 
     *   select: { ClaimTranId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimTransectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimTransectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimTransectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ClaimTransection.
     * @param {ClaimTransectionDeleteArgs} args - Arguments to delete one ClaimTransection.
     * @example
     * // Delete one ClaimTransection
     * const ClaimTransection = await prisma.claimTransection.delete({
     *   where: {
     *     // ... filter to delete one ClaimTransection
     *   }
     * })
     * 
     */
    delete<T extends ClaimTransectionDeleteArgs>(args: SelectSubset<T, ClaimTransectionDeleteArgs<ExtArgs>>): Prisma__ClaimTransectionClient<$Result.GetResult<Prisma.$ClaimTransectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ClaimTransection.
     * @param {ClaimTransectionUpdateArgs} args - Arguments to update one ClaimTransection.
     * @example
     * // Update one ClaimTransection
     * const claimTransection = await prisma.claimTransection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimTransectionUpdateArgs>(args: SelectSubset<T, ClaimTransectionUpdateArgs<ExtArgs>>): Prisma__ClaimTransectionClient<$Result.GetResult<Prisma.$ClaimTransectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ClaimTransections.
     * @param {ClaimTransectionDeleteManyArgs} args - Arguments to filter ClaimTransections to delete.
     * @example
     * // Delete a few ClaimTransections
     * const { count } = await prisma.claimTransection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimTransectionDeleteManyArgs>(args?: SelectSubset<T, ClaimTransectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClaimTransections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimTransectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClaimTransections
     * const claimTransection = await prisma.claimTransection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimTransectionUpdateManyArgs>(args: SelectSubset<T, ClaimTransectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClaimTransection.
     * @param {ClaimTransectionUpsertArgs} args - Arguments to update or create a ClaimTransection.
     * @example
     * // Update or create a ClaimTransection
     * const claimTransection = await prisma.claimTransection.upsert({
     *   create: {
     *     // ... data to create a ClaimTransection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClaimTransection we want to update
     *   }
     * })
     */
    upsert<T extends ClaimTransectionUpsertArgs>(args: SelectSubset<T, ClaimTransectionUpsertArgs<ExtArgs>>): Prisma__ClaimTransectionClient<$Result.GetResult<Prisma.$ClaimTransectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ClaimTransections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimTransectionCountArgs} args - Arguments to filter ClaimTransections to count.
     * @example
     * // Count the number of ClaimTransections
     * const count = await prisma.claimTransection.count({
     *   where: {
     *     // ... the filter for the ClaimTransections we want to count
     *   }
     * })
    **/
    count<T extends ClaimTransectionCountArgs>(
      args?: Subset<T, ClaimTransectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimTransectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClaimTransection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimTransectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaimTransectionAggregateArgs>(args: Subset<T, ClaimTransectionAggregateArgs>): Prisma.PrismaPromise<GetClaimTransectionAggregateType<T>>

    /**
     * Group by ClaimTransection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimTransectionGroupByArgs} args - Group by arguments.
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
      T extends ClaimTransectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimTransectionGroupByArgs['orderBy'] }
        : { orderBy?: ClaimTransectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaimTransectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimTransectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClaimTransection model
   */
  readonly fields: ClaimTransectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClaimTransection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimTransectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ClaimTransection model
   */ 
  interface ClaimTransectionFieldRefs {
    readonly ClaimTranId: FieldRef<"ClaimTransection", 'Int'>
    readonly RefId: FieldRef<"ClaimTransection", 'String'>
    readonly TransactionNo: FieldRef<"ClaimTransection", 'String'>
    readonly HN: FieldRef<"ClaimTransection", 'String'>
    readonly VN: FieldRef<"ClaimTransection", 'String'>
    readonly CreateAt: FieldRef<"ClaimTransection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClaimTransection findUnique
   */
  export type ClaimTransectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelect<ExtArgs> | null
    /**
     * Filter, which ClaimTransection to fetch.
     */
    where: ClaimTransectionWhereUniqueInput
  }

  /**
   * ClaimTransection findUniqueOrThrow
   */
  export type ClaimTransectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelect<ExtArgs> | null
    /**
     * Filter, which ClaimTransection to fetch.
     */
    where: ClaimTransectionWhereUniqueInput
  }

  /**
   * ClaimTransection findFirst
   */
  export type ClaimTransectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelect<ExtArgs> | null
    /**
     * Filter, which ClaimTransection to fetch.
     */
    where?: ClaimTransectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimTransections to fetch.
     */
    orderBy?: ClaimTransectionOrderByWithRelationInput | ClaimTransectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimTransections.
     */
    cursor?: ClaimTransectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimTransections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimTransections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimTransections.
     */
    distinct?: ClaimTransectionScalarFieldEnum | ClaimTransectionScalarFieldEnum[]
  }

  /**
   * ClaimTransection findFirstOrThrow
   */
  export type ClaimTransectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelect<ExtArgs> | null
    /**
     * Filter, which ClaimTransection to fetch.
     */
    where?: ClaimTransectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimTransections to fetch.
     */
    orderBy?: ClaimTransectionOrderByWithRelationInput | ClaimTransectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimTransections.
     */
    cursor?: ClaimTransectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimTransections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimTransections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimTransections.
     */
    distinct?: ClaimTransectionScalarFieldEnum | ClaimTransectionScalarFieldEnum[]
  }

  /**
   * ClaimTransection findMany
   */
  export type ClaimTransectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelect<ExtArgs> | null
    /**
     * Filter, which ClaimTransections to fetch.
     */
    where?: ClaimTransectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimTransections to fetch.
     */
    orderBy?: ClaimTransectionOrderByWithRelationInput | ClaimTransectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClaimTransections.
     */
    cursor?: ClaimTransectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimTransections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimTransections.
     */
    skip?: number
    distinct?: ClaimTransectionScalarFieldEnum | ClaimTransectionScalarFieldEnum[]
  }

  /**
   * ClaimTransection create
   */
  export type ClaimTransectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelect<ExtArgs> | null
    /**
     * The data needed to create a ClaimTransection.
     */
    data: XOR<ClaimTransectionCreateInput, ClaimTransectionUncheckedCreateInput>
  }

  /**
   * ClaimTransection createMany
   */
  export type ClaimTransectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClaimTransections.
     */
    data: ClaimTransectionCreateManyInput | ClaimTransectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClaimTransection createManyAndReturn
   */
  export type ClaimTransectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ClaimTransections.
     */
    data: ClaimTransectionCreateManyInput | ClaimTransectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClaimTransection update
   */
  export type ClaimTransectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelect<ExtArgs> | null
    /**
     * The data needed to update a ClaimTransection.
     */
    data: XOR<ClaimTransectionUpdateInput, ClaimTransectionUncheckedUpdateInput>
    /**
     * Choose, which ClaimTransection to update.
     */
    where: ClaimTransectionWhereUniqueInput
  }

  /**
   * ClaimTransection updateMany
   */
  export type ClaimTransectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClaimTransections.
     */
    data: XOR<ClaimTransectionUpdateManyMutationInput, ClaimTransectionUncheckedUpdateManyInput>
    /**
     * Filter which ClaimTransections to update
     */
    where?: ClaimTransectionWhereInput
  }

  /**
   * ClaimTransection upsert
   */
  export type ClaimTransectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelect<ExtArgs> | null
    /**
     * The filter to search for the ClaimTransection to update in case it exists.
     */
    where: ClaimTransectionWhereUniqueInput
    /**
     * In case the ClaimTransection found by the `where` argument doesn't exist, create a new ClaimTransection with this data.
     */
    create: XOR<ClaimTransectionCreateInput, ClaimTransectionUncheckedCreateInput>
    /**
     * In case the ClaimTransection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimTransectionUpdateInput, ClaimTransectionUncheckedUpdateInput>
  }

  /**
   * ClaimTransection delete
   */
  export type ClaimTransectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelect<ExtArgs> | null
    /**
     * Filter which ClaimTransection to delete.
     */
    where: ClaimTransectionWhereUniqueInput
  }

  /**
   * ClaimTransection deleteMany
   */
  export type ClaimTransectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaimTransections to delete
     */
    where?: ClaimTransectionWhereInput
  }

  /**
   * ClaimTransection without action
   */
  export type ClaimTransectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimTransection
     */
    select?: ClaimTransectionSelect<ExtArgs> | null
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


  export const IllnessSurgeryScalarFieldEnum: {
    id: 'id',
    InsurerCode: 'InsurerCode',
    ISCode: 'ISCode',
    ISDescription: 'ISDescription'
  };

  export type IllnessSurgeryScalarFieldEnum = (typeof IllnessSurgeryScalarFieldEnum)[keyof typeof IllnessSurgeryScalarFieldEnum]


  export const IllnessTypeScalarFieldEnum: {
    id: 'id',
    InsurerCode: 'InsurerCode',
    IllnessTypeCode: 'IllnessTypeCode',
    IllnessTypeDesc: 'IllnessTypeDesc'
  };

  export type IllnessTypeScalarFieldEnum = (typeof IllnessTypeScalarFieldEnum)[keyof typeof IllnessTypeScalarFieldEnum]


  export const PolicyTypeScalarFieldEnum: {
    id: 'id',
    InsurerCode: 'InsurerCode',
    PolicyTypeCode: 'PolicyTypeCode',
    PolicyTypeDesc: 'PolicyTypeDesc'
  };

  export type PolicyTypeScalarFieldEnum = (typeof PolicyTypeScalarFieldEnum)[keyof typeof PolicyTypeScalarFieldEnum]


  export const ClaimTransectionScalarFieldEnum: {
    ClaimTranId: 'ClaimTranId',
    RefId: 'RefId',
    TransactionNo: 'TransactionNo',
    HN: 'HN',
    VN: 'VN',
    CreateAt: 'CreateAt'
  };

  export type ClaimTransectionScalarFieldEnum = (typeof ClaimTransectionScalarFieldEnum)[keyof typeof ClaimTransectionScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type IllnessSurgeryWhereInput = {
    AND?: IllnessSurgeryWhereInput | IllnessSurgeryWhereInput[]
    OR?: IllnessSurgeryWhereInput[]
    NOT?: IllnessSurgeryWhereInput | IllnessSurgeryWhereInput[]
    id?: IntFilter<"IllnessSurgery"> | number
    InsurerCode?: IntFilter<"IllnessSurgery"> | number
    ISCode?: StringFilter<"IllnessSurgery"> | string
    ISDescription?: StringNullableFilter<"IllnessSurgery"> | string | null
  }

  export type IllnessSurgeryOrderByWithRelationInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrderInput | SortOrder
  }

  export type IllnessSurgeryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IllnessSurgeryWhereInput | IllnessSurgeryWhereInput[]
    OR?: IllnessSurgeryWhereInput[]
    NOT?: IllnessSurgeryWhereInput | IllnessSurgeryWhereInput[]
    InsurerCode?: IntFilter<"IllnessSurgery"> | number
    ISCode?: StringFilter<"IllnessSurgery"> | string
    ISDescription?: StringNullableFilter<"IllnessSurgery"> | string | null
  }, "id">

  export type IllnessSurgeryOrderByWithAggregationInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrderInput | SortOrder
    _count?: IllnessSurgeryCountOrderByAggregateInput
    _avg?: IllnessSurgeryAvgOrderByAggregateInput
    _max?: IllnessSurgeryMaxOrderByAggregateInput
    _min?: IllnessSurgeryMinOrderByAggregateInput
    _sum?: IllnessSurgerySumOrderByAggregateInput
  }

  export type IllnessSurgeryScalarWhereWithAggregatesInput = {
    AND?: IllnessSurgeryScalarWhereWithAggregatesInput | IllnessSurgeryScalarWhereWithAggregatesInput[]
    OR?: IllnessSurgeryScalarWhereWithAggregatesInput[]
    NOT?: IllnessSurgeryScalarWhereWithAggregatesInput | IllnessSurgeryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IllnessSurgery"> | number
    InsurerCode?: IntWithAggregatesFilter<"IllnessSurgery"> | number
    ISCode?: StringWithAggregatesFilter<"IllnessSurgery"> | string
    ISDescription?: StringNullableWithAggregatesFilter<"IllnessSurgery"> | string | null
  }

  export type IllnessTypeWhereInput = {
    AND?: IllnessTypeWhereInput | IllnessTypeWhereInput[]
    OR?: IllnessTypeWhereInput[]
    NOT?: IllnessTypeWhereInput | IllnessTypeWhereInput[]
    id?: IntFilter<"IllnessType"> | number
    InsurerCode?: IntFilter<"IllnessType"> | number
    IllnessTypeCode?: StringFilter<"IllnessType"> | string
    IllnessTypeDesc?: StringNullableFilter<"IllnessType"> | string | null
  }

  export type IllnessTypeOrderByWithRelationInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrderInput | SortOrder
  }

  export type IllnessTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IllnessTypeWhereInput | IllnessTypeWhereInput[]
    OR?: IllnessTypeWhereInput[]
    NOT?: IllnessTypeWhereInput | IllnessTypeWhereInput[]
    InsurerCode?: IntFilter<"IllnessType"> | number
    IllnessTypeCode?: StringFilter<"IllnessType"> | string
    IllnessTypeDesc?: StringNullableFilter<"IllnessType"> | string | null
  }, "id">

  export type IllnessTypeOrderByWithAggregationInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrderInput | SortOrder
    _count?: IllnessTypeCountOrderByAggregateInput
    _avg?: IllnessTypeAvgOrderByAggregateInput
    _max?: IllnessTypeMaxOrderByAggregateInput
    _min?: IllnessTypeMinOrderByAggregateInput
    _sum?: IllnessTypeSumOrderByAggregateInput
  }

  export type IllnessTypeScalarWhereWithAggregatesInput = {
    AND?: IllnessTypeScalarWhereWithAggregatesInput | IllnessTypeScalarWhereWithAggregatesInput[]
    OR?: IllnessTypeScalarWhereWithAggregatesInput[]
    NOT?: IllnessTypeScalarWhereWithAggregatesInput | IllnessTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IllnessType"> | number
    InsurerCode?: IntWithAggregatesFilter<"IllnessType"> | number
    IllnessTypeCode?: StringWithAggregatesFilter<"IllnessType"> | string
    IllnessTypeDesc?: StringNullableWithAggregatesFilter<"IllnessType"> | string | null
  }

  export type PolicyTypeWhereInput = {
    AND?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    OR?: PolicyTypeWhereInput[]
    NOT?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    id?: IntFilter<"PolicyType"> | number
    InsurerCode?: IntFilter<"PolicyType"> | number
    PolicyTypeCode?: StringFilter<"PolicyType"> | string
    PolicyTypeDesc?: StringNullableFilter<"PolicyType"> | string | null
  }

  export type PolicyTypeOrderByWithRelationInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrderInput | SortOrder
  }

  export type PolicyTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    OR?: PolicyTypeWhereInput[]
    NOT?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    InsurerCode?: IntFilter<"PolicyType"> | number
    PolicyTypeCode?: StringFilter<"PolicyType"> | string
    PolicyTypeDesc?: StringNullableFilter<"PolicyType"> | string | null
  }, "id">

  export type PolicyTypeOrderByWithAggregationInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrderInput | SortOrder
    _count?: PolicyTypeCountOrderByAggregateInput
    _avg?: PolicyTypeAvgOrderByAggregateInput
    _max?: PolicyTypeMaxOrderByAggregateInput
    _min?: PolicyTypeMinOrderByAggregateInput
    _sum?: PolicyTypeSumOrderByAggregateInput
  }

  export type PolicyTypeScalarWhereWithAggregatesInput = {
    AND?: PolicyTypeScalarWhereWithAggregatesInput | PolicyTypeScalarWhereWithAggregatesInput[]
    OR?: PolicyTypeScalarWhereWithAggregatesInput[]
    NOT?: PolicyTypeScalarWhereWithAggregatesInput | PolicyTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PolicyType"> | number
    InsurerCode?: IntWithAggregatesFilter<"PolicyType"> | number
    PolicyTypeCode?: StringWithAggregatesFilter<"PolicyType"> | string
    PolicyTypeDesc?: StringNullableWithAggregatesFilter<"PolicyType"> | string | null
  }

  export type ClaimTransectionWhereInput = {
    AND?: ClaimTransectionWhereInput | ClaimTransectionWhereInput[]
    OR?: ClaimTransectionWhereInput[]
    NOT?: ClaimTransectionWhereInput | ClaimTransectionWhereInput[]
    ClaimTranId?: IntFilter<"ClaimTransection"> | number
    RefId?: StringFilter<"ClaimTransection"> | string
    TransactionNo?: StringFilter<"ClaimTransection"> | string
    HN?: StringFilter<"ClaimTransection"> | string
    VN?: StringFilter<"ClaimTransection"> | string
    CreateAt?: DateTimeNullableFilter<"ClaimTransection"> | Date | string | null
  }

  export type ClaimTransectionOrderByWithRelationInput = {
    ClaimTranId?: SortOrder
    RefId?: SortOrder
    TransactionNo?: SortOrder
    HN?: SortOrder
    VN?: SortOrder
    CreateAt?: SortOrderInput | SortOrder
  }

  export type ClaimTransectionWhereUniqueInput = Prisma.AtLeast<{
    ClaimTranId?: number
    AND?: ClaimTransectionWhereInput | ClaimTransectionWhereInput[]
    OR?: ClaimTransectionWhereInput[]
    NOT?: ClaimTransectionWhereInput | ClaimTransectionWhereInput[]
    RefId?: StringFilter<"ClaimTransection"> | string
    TransactionNo?: StringFilter<"ClaimTransection"> | string
    HN?: StringFilter<"ClaimTransection"> | string
    VN?: StringFilter<"ClaimTransection"> | string
    CreateAt?: DateTimeNullableFilter<"ClaimTransection"> | Date | string | null
  }, "ClaimTranId">

  export type ClaimTransectionOrderByWithAggregationInput = {
    ClaimTranId?: SortOrder
    RefId?: SortOrder
    TransactionNo?: SortOrder
    HN?: SortOrder
    VN?: SortOrder
    CreateAt?: SortOrderInput | SortOrder
    _count?: ClaimTransectionCountOrderByAggregateInput
    _avg?: ClaimTransectionAvgOrderByAggregateInput
    _max?: ClaimTransectionMaxOrderByAggregateInput
    _min?: ClaimTransectionMinOrderByAggregateInput
    _sum?: ClaimTransectionSumOrderByAggregateInput
  }

  export type ClaimTransectionScalarWhereWithAggregatesInput = {
    AND?: ClaimTransectionScalarWhereWithAggregatesInput | ClaimTransectionScalarWhereWithAggregatesInput[]
    OR?: ClaimTransectionScalarWhereWithAggregatesInput[]
    NOT?: ClaimTransectionScalarWhereWithAggregatesInput | ClaimTransectionScalarWhereWithAggregatesInput[]
    ClaimTranId?: IntWithAggregatesFilter<"ClaimTransection"> | number
    RefId?: StringWithAggregatesFilter<"ClaimTransection"> | string
    TransactionNo?: StringWithAggregatesFilter<"ClaimTransection"> | string
    HN?: StringWithAggregatesFilter<"ClaimTransection"> | string
    VN?: StringWithAggregatesFilter<"ClaimTransection"> | string
    CreateAt?: DateTimeNullableWithAggregatesFilter<"ClaimTransection"> | Date | string | null
  }

  export type IllnessSurgeryCreateInput = {
    InsurerCode: number
    ISCode: string
    ISDescription?: string | null
  }

  export type IllnessSurgeryUncheckedCreateInput = {
    id?: number
    InsurerCode: number
    ISCode: string
    ISDescription?: string | null
  }

  export type IllnessSurgeryUpdateInput = {
    InsurerCode?: IntFieldUpdateOperationsInput | number
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessSurgeryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    InsurerCode?: IntFieldUpdateOperationsInput | number
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessSurgeryCreateManyInput = {
    id?: number
    InsurerCode: number
    ISCode: string
    ISDescription?: string | null
  }

  export type IllnessSurgeryUpdateManyMutationInput = {
    InsurerCode?: IntFieldUpdateOperationsInput | number
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessSurgeryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    InsurerCode?: IntFieldUpdateOperationsInput | number
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessTypeCreateInput = {
    InsurerCode: number
    IllnessTypeCode: string
    IllnessTypeDesc?: string | null
  }

  export type IllnessTypeUncheckedCreateInput = {
    id?: number
    InsurerCode: number
    IllnessTypeCode: string
    IllnessTypeDesc?: string | null
  }

  export type IllnessTypeUpdateInput = {
    InsurerCode?: IntFieldUpdateOperationsInput | number
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    InsurerCode?: IntFieldUpdateOperationsInput | number
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessTypeCreateManyInput = {
    id?: number
    InsurerCode: number
    IllnessTypeCode: string
    IllnessTypeDesc?: string | null
  }

  export type IllnessTypeUpdateManyMutationInput = {
    InsurerCode?: IntFieldUpdateOperationsInput | number
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    InsurerCode?: IntFieldUpdateOperationsInput | number
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyTypeCreateInput = {
    InsurerCode: number
    PolicyTypeCode: string
    PolicyTypeDesc?: string | null
  }

  export type PolicyTypeUncheckedCreateInput = {
    id?: number
    InsurerCode: number
    PolicyTypeCode: string
    PolicyTypeDesc?: string | null
  }

  export type PolicyTypeUpdateInput = {
    InsurerCode?: IntFieldUpdateOperationsInput | number
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    InsurerCode?: IntFieldUpdateOperationsInput | number
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyTypeCreateManyInput = {
    id?: number
    InsurerCode: number
    PolicyTypeCode: string
    PolicyTypeDesc?: string | null
  }

  export type PolicyTypeUpdateManyMutationInput = {
    InsurerCode?: IntFieldUpdateOperationsInput | number
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    InsurerCode?: IntFieldUpdateOperationsInput | number
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimTransectionCreateInput = {
    RefId: string
    TransactionNo: string
    HN: string
    VN: string
    CreateAt?: Date | string | null
  }

  export type ClaimTransectionUncheckedCreateInput = {
    ClaimTranId?: number
    RefId: string
    TransactionNo: string
    HN: string
    VN: string
    CreateAt?: Date | string | null
  }

  export type ClaimTransectionUpdateInput = {
    RefId?: StringFieldUpdateOperationsInput | string
    TransactionNo?: StringFieldUpdateOperationsInput | string
    HN?: StringFieldUpdateOperationsInput | string
    VN?: StringFieldUpdateOperationsInput | string
    CreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClaimTransectionUncheckedUpdateInput = {
    ClaimTranId?: IntFieldUpdateOperationsInput | number
    RefId?: StringFieldUpdateOperationsInput | string
    TransactionNo?: StringFieldUpdateOperationsInput | string
    HN?: StringFieldUpdateOperationsInput | string
    VN?: StringFieldUpdateOperationsInput | string
    CreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClaimTransectionCreateManyInput = {
    ClaimTranId?: number
    RefId: string
    TransactionNo: string
    HN: string
    VN: string
    CreateAt?: Date | string | null
  }

  export type ClaimTransectionUpdateManyMutationInput = {
    RefId?: StringFieldUpdateOperationsInput | string
    TransactionNo?: StringFieldUpdateOperationsInput | string
    HN?: StringFieldUpdateOperationsInput | string
    VN?: StringFieldUpdateOperationsInput | string
    CreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClaimTransectionUncheckedUpdateManyInput = {
    ClaimTranId?: IntFieldUpdateOperationsInput | number
    RefId?: StringFieldUpdateOperationsInput | string
    TransactionNo?: StringFieldUpdateOperationsInput | string
    HN?: StringFieldUpdateOperationsInput | string
    VN?: StringFieldUpdateOperationsInput | string
    CreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IllnessSurgeryCountOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrder
  }

  export type IllnessSurgeryAvgOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
  }

  export type IllnessSurgeryMaxOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrder
  }

  export type IllnessSurgeryMinOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrder
  }

  export type IllnessSurgerySumOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IllnessTypeCountOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrder
  }

  export type IllnessTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
  }

  export type IllnessTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrder
  }

  export type IllnessTypeMinOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrder
  }

  export type IllnessTypeSumOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
  }

  export type PolicyTypeCountOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrder
  }

  export type PolicyTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
  }

  export type PolicyTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrder
  }

  export type PolicyTypeMinOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrder
  }

  export type PolicyTypeSumOrderByAggregateInput = {
    id?: SortOrder
    InsurerCode?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClaimTransectionCountOrderByAggregateInput = {
    ClaimTranId?: SortOrder
    RefId?: SortOrder
    TransactionNo?: SortOrder
    HN?: SortOrder
    VN?: SortOrder
    CreateAt?: SortOrder
  }

  export type ClaimTransectionAvgOrderByAggregateInput = {
    ClaimTranId?: SortOrder
  }

  export type ClaimTransectionMaxOrderByAggregateInput = {
    ClaimTranId?: SortOrder
    RefId?: SortOrder
    TransactionNo?: SortOrder
    HN?: SortOrder
    VN?: SortOrder
    CreateAt?: SortOrder
  }

  export type ClaimTransectionMinOrderByAggregateInput = {
    ClaimTranId?: SortOrder
    RefId?: SortOrder
    TransactionNo?: SortOrder
    HN?: SortOrder
    VN?: SortOrder
    CreateAt?: SortOrder
  }

  export type ClaimTransectionSumOrderByAggregateInput = {
    ClaimTranId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use IllnessSurgeryDefaultArgs instead
     */
    export type IllnessSurgeryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IllnessSurgeryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IllnessTypeDefaultArgs instead
     */
    export type IllnessTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IllnessTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PolicyTypeDefaultArgs instead
     */
    export type PolicyTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PolicyTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaimTransectionDefaultArgs instead
     */
    export type ClaimTransectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaimTransectionDefaultArgs<ExtArgs>

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