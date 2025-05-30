
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model TransactionClassification
 * 
 */
export type TransactionClassification = $Result.DefaultSelection<Prisma.$TransactionClassificationPayload>
/**
 * Model BankTransaction
 * 
 */
export type BankTransaction = $Result.DefaultSelection<Prisma.$BankTransactionPayload>
/**
 * Model BankAccount
 * 
 */
export type BankAccount = $Result.DefaultSelection<Prisma.$BankAccountPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model AccountContract
 * 
 */
export type AccountContract = $Result.DefaultSelection<Prisma.$AccountContractPayload>
/**
 * Model StaffAccountAssignment
 * 
 */
export type StaffAccountAssignment = $Result.DefaultSelection<Prisma.$StaffAccountAssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ClassificationCode: {
  CD: 'CD',
  LCD: 'LCD',
  UCD: 'UCD',
  LD: 'LD',
  RET: 'RET',
  REV: 'REV',
  INT: 'INT',
  CW: 'CW',
  IT: 'IT',
  ET: 'ET',
  LR: 'LR',
  LNT: 'LNT',
  CO: 'CO',
  FEE: 'FEE',
  MC: 'MC',
  CAMF: 'CAMF',
  VAT: 'VAT'
};

export type ClassificationCode = (typeof ClassificationCode)[keyof typeof ClassificationCode]


export const Category: {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL',
  FEE: 'FEE'
};

export type Category = (typeof Category)[keyof typeof Category]


export const TransactionType: {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const AccountType: {
  CURRENT: 'CURRENT',
  SAVINGS: 'SAVINGS'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ClassificationCode = $Enums.ClassificationCode

export const ClassificationCode: typeof $Enums.ClassificationCode

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionClassification`: Exposes CRUD operations for the **TransactionClassification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionClassifications
    * const transactionClassifications = await prisma.transactionClassification.findMany()
    * ```
    */
  get transactionClassification(): Prisma.TransactionClassificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankTransaction`: Exposes CRUD operations for the **BankTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankTransactions
    * const bankTransactions = await prisma.bankTransaction.findMany()
    * ```
    */
  get bankTransaction(): Prisma.BankTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankAccount`: Exposes CRUD operations for the **BankAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccounts
    * const bankAccounts = await prisma.bankAccount.findMany()
    * ```
    */
  get bankAccount(): Prisma.BankAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountContract`: Exposes CRUD operations for the **AccountContract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountContracts
    * const accountContracts = await prisma.accountContract.findMany()
    * ```
    */
  get accountContract(): Prisma.AccountContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffAccountAssignment`: Exposes CRUD operations for the **StaffAccountAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffAccountAssignments
    * const staffAccountAssignments = await prisma.staffAccountAssignment.findMany()
    * ```
    */
  get staffAccountAssignment(): Prisma.StaffAccountAssignmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Permission: 'Permission',
    Token: 'Token',
    TransactionClassification: 'TransactionClassification',
    BankTransaction: 'BankTransaction',
    BankAccount: 'BankAccount',
    Client: 'Client',
    AccountContract: 'AccountContract',
    StaffAccountAssignment: 'StaffAccountAssignment'
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
      modelProps: "user" | "permission" | "token" | "transactionClassification" | "bankTransaction" | "bankAccount" | "client" | "accountContract" | "staffAccountAssignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      TransactionClassification: {
        payload: Prisma.$TransactionClassificationPayload<ExtArgs>
        fields: Prisma.TransactionClassificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionClassificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionClassificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload>
          }
          findFirst: {
            args: Prisma.TransactionClassificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionClassificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload>
          }
          findMany: {
            args: Prisma.TransactionClassificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload>[]
          }
          create: {
            args: Prisma.TransactionClassificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload>
          }
          createMany: {
            args: Prisma.TransactionClassificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionClassificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload>[]
          }
          delete: {
            args: Prisma.TransactionClassificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload>
          }
          update: {
            args: Prisma.TransactionClassificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload>
          }
          deleteMany: {
            args: Prisma.TransactionClassificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionClassificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionClassificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload>[]
          }
          upsert: {
            args: Prisma.TransactionClassificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionClassificationPayload>
          }
          aggregate: {
            args: Prisma.TransactionClassificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionClassification>
          }
          groupBy: {
            args: Prisma.TransactionClassificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionClassificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionClassificationCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionClassificationCountAggregateOutputType> | number
          }
        }
      }
      BankTransaction: {
        payload: Prisma.$BankTransactionPayload<ExtArgs>
        fields: Prisma.BankTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          findFirst: {
            args: Prisma.BankTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          findMany: {
            args: Prisma.BankTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>[]
          }
          create: {
            args: Prisma.BankTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          createMany: {
            args: Prisma.BankTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>[]
          }
          delete: {
            args: Prisma.BankTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          update: {
            args: Prisma.BankTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          deleteMany: {
            args: Prisma.BankTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>[]
          }
          upsert: {
            args: Prisma.BankTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          aggregate: {
            args: Prisma.BankTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankTransaction>
          }
          groupBy: {
            args: Prisma.BankTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<BankTransactionCountAggregateOutputType> | number
          }
        }
      }
      BankAccount: {
        payload: Prisma.$BankAccountPayload<ExtArgs>
        fields: Prisma.BankAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findFirst: {
            args: Prisma.BankAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findMany: {
            args: Prisma.BankAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          create: {
            args: Prisma.BankAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          createMany: {
            args: Prisma.BankAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          delete: {
            args: Prisma.BankAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          update: {
            args: Prisma.BankAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          deleteMany: {
            args: Prisma.BankAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          upsert: {
            args: Prisma.BankAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          aggregate: {
            args: Prisma.BankAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankAccount>
          }
          groupBy: {
            args: Prisma.BankAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankAccountCountArgs<ExtArgs>
            result: $Utils.Optional<BankAccountCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      AccountContract: {
        payload: Prisma.$AccountContractPayload<ExtArgs>
        fields: Prisma.AccountContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload>
          }
          findFirst: {
            args: Prisma.AccountContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload>
          }
          findMany: {
            args: Prisma.AccountContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload>[]
          }
          create: {
            args: Prisma.AccountContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload>
          }
          createMany: {
            args: Prisma.AccountContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload>[]
          }
          delete: {
            args: Prisma.AccountContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload>
          }
          update: {
            args: Prisma.AccountContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload>
          }
          deleteMany: {
            args: Prisma.AccountContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload>[]
          }
          upsert: {
            args: Prisma.AccountContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountContractPayload>
          }
          aggregate: {
            args: Prisma.AccountContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountContract>
          }
          groupBy: {
            args: Prisma.AccountContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountContractCountArgs<ExtArgs>
            result: $Utils.Optional<AccountContractCountAggregateOutputType> | number
          }
        }
      }
      StaffAccountAssignment: {
        payload: Prisma.$StaffAccountAssignmentPayload<ExtArgs>
        fields: Prisma.StaffAccountAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffAccountAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffAccountAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload>
          }
          findFirst: {
            args: Prisma.StaffAccountAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffAccountAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload>
          }
          findMany: {
            args: Prisma.StaffAccountAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload>[]
          }
          create: {
            args: Prisma.StaffAccountAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload>
          }
          createMany: {
            args: Prisma.StaffAccountAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffAccountAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload>[]
          }
          delete: {
            args: Prisma.StaffAccountAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload>
          }
          update: {
            args: Prisma.StaffAccountAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.StaffAccountAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffAccountAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffAccountAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.StaffAccountAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffAccountAssignmentPayload>
          }
          aggregate: {
            args: Prisma.StaffAccountAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffAccountAssignment>
          }
          groupBy: {
            args: Prisma.StaffAccountAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffAccountAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffAccountAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<StaffAccountAssignmentCountAggregateOutputType> | number
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
    user?: UserOmit
    permission?: PermissionOmit
    token?: TokenOmit
    transactionClassification?: TransactionClassificationOmit
    bankTransaction?: BankTransactionOmit
    bankAccount?: BankAccountOmit
    client?: ClientOmit
    accountContract?: AccountContractOmit
    staffAccountAssignment?: StaffAccountAssignmentOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
    BankTransaction: number
    StaffAccountAssignment: number
    permissions: number
    uploadedTransactions: number
    staffAssignments: number
    assignedStaffAccounts: number
    deactivatedUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    BankTransaction?: boolean | UserCountOutputTypeCountBankTransactionArgs
    StaffAccountAssignment?: boolean | UserCountOutputTypeCountStaffAccountAssignmentArgs
    permissions?: boolean | UserCountOutputTypeCountPermissionsArgs
    uploadedTransactions?: boolean | UserCountOutputTypeCountUploadedTransactionsArgs
    staffAssignments?: boolean | UserCountOutputTypeCountStaffAssignmentsArgs
    assignedStaffAccounts?: boolean | UserCountOutputTypeCountAssignedStaffAccountsArgs
    deactivatedUsers?: boolean | UserCountOutputTypeCountDeactivatedUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBankTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffAccountAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAccountAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAccountAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedStaffAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAccountAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeactivatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    users: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PermissionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type TransactionClassificationCountOutputType
   */

  export type TransactionClassificationCountOutputType = {
    transactions: number
  }

  export type TransactionClassificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | TransactionClassificationCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * TransactionClassificationCountOutputType without action
   */
  export type TransactionClassificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassificationCountOutputType
     */
    select?: TransactionClassificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionClassificationCountOutputType without action
   */
  export type TransactionClassificationCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankTransactionWhereInput
  }


  /**
   * Count Type BankTransactionCountOutputType
   */

  export type BankTransactionCountOutputType = {
    User: number
  }

  export type BankTransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | BankTransactionCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * BankTransactionCountOutputType without action
   */
  export type BankTransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransactionCountOutputType
     */
    select?: BankTransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankTransactionCountOutputType without action
   */
  export type BankTransactionCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type BankAccountCountOutputType
   */

  export type BankAccountCountOutputType = {
    staffAssignments: number
    transactions: number
  }

  export type BankAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffAssignments?: boolean | BankAccountCountOutputTypeCountStaffAssignmentsArgs
    transactions?: boolean | BankAccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountCountOutputType
     */
    select?: BankAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeCountStaffAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAccountAssignmentWhereInput
  }

  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankTransactionWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    accounts: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | ClientCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
  }


  /**
   * Count Type StaffAccountAssignmentCountOutputType
   */

  export type StaffAccountAssignmentCountOutputType = {
    User: number
  }

  export type StaffAccountAssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | StaffAccountAssignmentCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * StaffAccountAssignmentCountOutputType without action
   */
  export type StaffAccountAssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignmentCountOutputType
     */
    select?: StaffAccountAssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffAccountAssignmentCountOutputType without action
   */
  export type StaffAccountAssignmentCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    phone: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    refreshToken: string | null
    deactivatedAt: Date | null
    deactivatedById: string | null
    deactivationReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    phone: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    refreshToken: string | null
    deactivatedAt: Date | null
    deactivatedById: string | null
    deactivationReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    username: number
    phone: number
    email: number
    password: number
    avatarUrl: number
    role: number
    isActive: number
    refreshToken: number
    deactivatedAt: number
    deactivatedById: number
    deactivationReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    phone?: true
    email?: true
    password?: true
    avatarUrl?: true
    role?: true
    isActive?: true
    refreshToken?: true
    deactivatedAt?: true
    deactivatedById?: true
    deactivationReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    phone?: true
    email?: true
    password?: true
    avatarUrl?: true
    role?: true
    isActive?: true
    refreshToken?: true
    deactivatedAt?: true
    deactivatedById?: true
    deactivationReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    phone?: true
    email?: true
    password?: true
    avatarUrl?: true
    role?: true
    isActive?: true
    refreshToken?: true
    deactivatedAt?: true
    deactivatedById?: true
    deactivationReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    username: string
    phone: string | null
    email: string
    password: string
    avatarUrl: string
    role: $Enums.UserRole
    isActive: boolean
    refreshToken: string | null
    deactivatedAt: Date | null
    deactivatedById: string | null
    deactivationReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
    isActive?: boolean
    refreshToken?: boolean
    deactivatedAt?: boolean
    deactivatedById?: boolean
    deactivationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tokens?: boolean | User$tokensArgs<ExtArgs>
    BankTransaction?: boolean | User$BankTransactionArgs<ExtArgs>
    StaffAccountAssignment?: boolean | User$StaffAccountAssignmentArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    uploadedTransactions?: boolean | User$uploadedTransactionsArgs<ExtArgs>
    staffAssignments?: boolean | User$staffAssignmentsArgs<ExtArgs>
    assignedStaffAccounts?: boolean | User$assignedStaffAccountsArgs<ExtArgs>
    deactivatedBy?: boolean | User$deactivatedByArgs<ExtArgs>
    deactivatedUsers?: boolean | User$deactivatedUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
    isActive?: boolean
    refreshToken?: boolean
    deactivatedAt?: boolean
    deactivatedById?: boolean
    deactivationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deactivatedBy?: boolean | User$deactivatedByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
    isActive?: boolean
    refreshToken?: boolean
    deactivatedAt?: boolean
    deactivatedById?: boolean
    deactivationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deactivatedBy?: boolean | User$deactivatedByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
    isActive?: boolean
    refreshToken?: boolean
    deactivatedAt?: boolean
    deactivatedById?: boolean
    deactivationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "username" | "phone" | "email" | "password" | "avatarUrl" | "role" | "isActive" | "refreshToken" | "deactivatedAt" | "deactivatedById" | "deactivationReason" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | User$tokensArgs<ExtArgs>
    BankTransaction?: boolean | User$BankTransactionArgs<ExtArgs>
    StaffAccountAssignment?: boolean | User$StaffAccountAssignmentArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    uploadedTransactions?: boolean | User$uploadedTransactionsArgs<ExtArgs>
    staffAssignments?: boolean | User$staffAssignmentsArgs<ExtArgs>
    assignedStaffAccounts?: boolean | User$assignedStaffAccountsArgs<ExtArgs>
    deactivatedBy?: boolean | User$deactivatedByArgs<ExtArgs>
    deactivatedUsers?: boolean | User$deactivatedUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deactivatedBy?: boolean | User$deactivatedByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deactivatedBy?: boolean | User$deactivatedByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      BankTransaction: Prisma.$BankTransactionPayload<ExtArgs>[]
      StaffAccountAssignment: Prisma.$StaffAccountAssignmentPayload<ExtArgs>[]
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
      uploadedTransactions: Prisma.$BankTransactionPayload<ExtArgs>[]
      staffAssignments: Prisma.$StaffAccountAssignmentPayload<ExtArgs>[]
      assignedStaffAccounts: Prisma.$StaffAccountAssignmentPayload<ExtArgs>[]
      deactivatedBy: Prisma.$UserPayload<ExtArgs> | null
      deactivatedUsers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      username: string
      phone: string | null
      email: string
      password: string
      avatarUrl: string
      role: $Enums.UserRole
      isActive: boolean
      refreshToken: string | null
      deactivatedAt: Date | null
      deactivatedById: string | null
      deactivationReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BankTransaction<T extends User$BankTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$BankTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StaffAccountAssignment<T extends User$StaffAccountAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, User$StaffAccountAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends User$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploadedTransactions<T extends User$uploadedTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadedTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffAssignments<T extends User$staffAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$staffAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedStaffAccounts<T extends User$assignedStaffAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedStaffAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deactivatedBy<T extends User$deactivatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$deactivatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deactivatedUsers<T extends User$deactivatedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$deactivatedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly deactivatedAt: FieldRef<"User", 'DateTime'>
    readonly deactivatedById: FieldRef<"User", 'String'>
    readonly deactivationReason: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.BankTransaction
   */
  export type User$BankTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    where?: BankTransactionWhereInput
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    cursor?: BankTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * User.StaffAccountAssignment
   */
  export type User$StaffAccountAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    where?: StaffAccountAssignmentWhereInput
    orderBy?: StaffAccountAssignmentOrderByWithRelationInput | StaffAccountAssignmentOrderByWithRelationInput[]
    cursor?: StaffAccountAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffAccountAssignmentScalarFieldEnum | StaffAccountAssignmentScalarFieldEnum[]
  }

  /**
   * User.permissions
   */
  export type User$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * User.uploadedTransactions
   */
  export type User$uploadedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    where?: BankTransactionWhereInput
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    cursor?: BankTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * User.staffAssignments
   */
  export type User$staffAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    where?: StaffAccountAssignmentWhereInput
    orderBy?: StaffAccountAssignmentOrderByWithRelationInput | StaffAccountAssignmentOrderByWithRelationInput[]
    cursor?: StaffAccountAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffAccountAssignmentScalarFieldEnum | StaffAccountAssignmentScalarFieldEnum[]
  }

  /**
   * User.assignedStaffAccounts
   */
  export type User$assignedStaffAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    where?: StaffAccountAssignmentWhereInput
    orderBy?: StaffAccountAssignmentOrderByWithRelationInput | StaffAccountAssignmentOrderByWithRelationInput[]
    cursor?: StaffAccountAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffAccountAssignmentScalarFieldEnum | StaffAccountAssignmentScalarFieldEnum[]
  }

  /**
   * User.deactivatedBy
   */
  export type User$deactivatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.deactivatedUsers
   */
  export type User$deactivatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Permission$usersArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Permission$usersArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
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
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Permission$usersArgs<ExtArgs> = {}>(args?: Subset<T, Permission$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly name: FieldRef<"Permission", 'String'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.users
   */
  export type Permission$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresIn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresIn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresIn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresIn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresIn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresIn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresIn: Date
    createdAt: Date
    updatedAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresIn" | "createdAt" | "updatedAt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresIn: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly userId: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly expiresIn: FieldRef<"Token", 'DateTime'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly updatedAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model TransactionClassification
   */

  export type AggregateTransactionClassification = {
    _count: TransactionClassificationCountAggregateOutputType | null
    _min: TransactionClassificationMinAggregateOutputType | null
    _max: TransactionClassificationMaxAggregateOutputType | null
  }

  export type TransactionClassificationMinAggregateOutputType = {
    id: string | null
    code: $Enums.ClassificationCode | null
    category: $Enums.Category | null
    label: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionClassificationMaxAggregateOutputType = {
    id: string | null
    code: $Enums.ClassificationCode | null
    category: $Enums.Category | null
    label: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionClassificationCountAggregateOutputType = {
    id: number
    code: number
    category: number
    label: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionClassificationMinAggregateInputType = {
    id?: true
    code?: true
    category?: true
    label?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionClassificationMaxAggregateInputType = {
    id?: true
    code?: true
    category?: true
    label?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionClassificationCountAggregateInputType = {
    id?: true
    code?: true
    category?: true
    label?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionClassificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionClassification to aggregate.
     */
    where?: TransactionClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionClassifications to fetch.
     */
    orderBy?: TransactionClassificationOrderByWithRelationInput | TransactionClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionClassifications
    **/
    _count?: true | TransactionClassificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionClassificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionClassificationMaxAggregateInputType
  }

  export type GetTransactionClassificationAggregateType<T extends TransactionClassificationAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionClassification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionClassification[P]>
      : GetScalarType<T[P], AggregateTransactionClassification[P]>
  }




  export type TransactionClassificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionClassificationWhereInput
    orderBy?: TransactionClassificationOrderByWithAggregationInput | TransactionClassificationOrderByWithAggregationInput[]
    by: TransactionClassificationScalarFieldEnum[] | TransactionClassificationScalarFieldEnum
    having?: TransactionClassificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionClassificationCountAggregateInputType | true
    _min?: TransactionClassificationMinAggregateInputType
    _max?: TransactionClassificationMaxAggregateInputType
  }

  export type TransactionClassificationGroupByOutputType = {
    id: string
    code: $Enums.ClassificationCode
    category: $Enums.Category
    label: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionClassificationCountAggregateOutputType | null
    _min: TransactionClassificationMinAggregateOutputType | null
    _max: TransactionClassificationMaxAggregateOutputType | null
  }

  type GetTransactionClassificationGroupByPayload<T extends TransactionClassificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionClassificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionClassificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionClassificationGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionClassificationGroupByOutputType[P]>
        }
      >
    >


  export type TransactionClassificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    category?: boolean
    label?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | TransactionClassification$transactionsArgs<ExtArgs>
    _count?: boolean | TransactionClassificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionClassification"]>

  export type TransactionClassificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    category?: boolean
    label?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transactionClassification"]>

  export type TransactionClassificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    category?: boolean
    label?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transactionClassification"]>

  export type TransactionClassificationSelectScalar = {
    id?: boolean
    code?: boolean
    category?: boolean
    label?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionClassificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "category" | "label" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["transactionClassification"]>
  export type TransactionClassificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | TransactionClassification$transactionsArgs<ExtArgs>
    _count?: boolean | TransactionClassificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionClassificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransactionClassificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransactionClassificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionClassification"
    objects: {
      transactions: Prisma.$BankTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: $Enums.ClassificationCode
      category: $Enums.Category
      label: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transactionClassification"]>
    composites: {}
  }

  type TransactionClassificationGetPayload<S extends boolean | null | undefined | TransactionClassificationDefaultArgs> = $Result.GetResult<Prisma.$TransactionClassificationPayload, S>

  type TransactionClassificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionClassificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionClassificationCountAggregateInputType | true
    }

  export interface TransactionClassificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionClassification'], meta: { name: 'TransactionClassification' } }
    /**
     * Find zero or one TransactionClassification that matches the filter.
     * @param {TransactionClassificationFindUniqueArgs} args - Arguments to find a TransactionClassification
     * @example
     * // Get one TransactionClassification
     * const transactionClassification = await prisma.transactionClassification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionClassificationFindUniqueArgs>(args: SelectSubset<T, TransactionClassificationFindUniqueArgs<ExtArgs>>): Prisma__TransactionClassificationClient<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionClassification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionClassificationFindUniqueOrThrowArgs} args - Arguments to find a TransactionClassification
     * @example
     * // Get one TransactionClassification
     * const transactionClassification = await prisma.transactionClassification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionClassificationFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionClassificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClassificationClient<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionClassification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionClassificationFindFirstArgs} args - Arguments to find a TransactionClassification
     * @example
     * // Get one TransactionClassification
     * const transactionClassification = await prisma.transactionClassification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionClassificationFindFirstArgs>(args?: SelectSubset<T, TransactionClassificationFindFirstArgs<ExtArgs>>): Prisma__TransactionClassificationClient<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionClassification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionClassificationFindFirstOrThrowArgs} args - Arguments to find a TransactionClassification
     * @example
     * // Get one TransactionClassification
     * const transactionClassification = await prisma.transactionClassification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionClassificationFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionClassificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClassificationClient<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionClassifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionClassificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionClassifications
     * const transactionClassifications = await prisma.transactionClassification.findMany()
     * 
     * // Get first 10 TransactionClassifications
     * const transactionClassifications = await prisma.transactionClassification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionClassificationWithIdOnly = await prisma.transactionClassification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionClassificationFindManyArgs>(args?: SelectSubset<T, TransactionClassificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionClassification.
     * @param {TransactionClassificationCreateArgs} args - Arguments to create a TransactionClassification.
     * @example
     * // Create one TransactionClassification
     * const TransactionClassification = await prisma.transactionClassification.create({
     *   data: {
     *     // ... data to create a TransactionClassification
     *   }
     * })
     * 
     */
    create<T extends TransactionClassificationCreateArgs>(args: SelectSubset<T, TransactionClassificationCreateArgs<ExtArgs>>): Prisma__TransactionClassificationClient<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionClassifications.
     * @param {TransactionClassificationCreateManyArgs} args - Arguments to create many TransactionClassifications.
     * @example
     * // Create many TransactionClassifications
     * const transactionClassification = await prisma.transactionClassification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionClassificationCreateManyArgs>(args?: SelectSubset<T, TransactionClassificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionClassifications and returns the data saved in the database.
     * @param {TransactionClassificationCreateManyAndReturnArgs} args - Arguments to create many TransactionClassifications.
     * @example
     * // Create many TransactionClassifications
     * const transactionClassification = await prisma.transactionClassification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionClassifications and only return the `id`
     * const transactionClassificationWithIdOnly = await prisma.transactionClassification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionClassificationCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionClassificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionClassification.
     * @param {TransactionClassificationDeleteArgs} args - Arguments to delete one TransactionClassification.
     * @example
     * // Delete one TransactionClassification
     * const TransactionClassification = await prisma.transactionClassification.delete({
     *   where: {
     *     // ... filter to delete one TransactionClassification
     *   }
     * })
     * 
     */
    delete<T extends TransactionClassificationDeleteArgs>(args: SelectSubset<T, TransactionClassificationDeleteArgs<ExtArgs>>): Prisma__TransactionClassificationClient<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionClassification.
     * @param {TransactionClassificationUpdateArgs} args - Arguments to update one TransactionClassification.
     * @example
     * // Update one TransactionClassification
     * const transactionClassification = await prisma.transactionClassification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionClassificationUpdateArgs>(args: SelectSubset<T, TransactionClassificationUpdateArgs<ExtArgs>>): Prisma__TransactionClassificationClient<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionClassifications.
     * @param {TransactionClassificationDeleteManyArgs} args - Arguments to filter TransactionClassifications to delete.
     * @example
     * // Delete a few TransactionClassifications
     * const { count } = await prisma.transactionClassification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionClassificationDeleteManyArgs>(args?: SelectSubset<T, TransactionClassificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionClassifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionClassificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionClassifications
     * const transactionClassification = await prisma.transactionClassification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionClassificationUpdateManyArgs>(args: SelectSubset<T, TransactionClassificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionClassifications and returns the data updated in the database.
     * @param {TransactionClassificationUpdateManyAndReturnArgs} args - Arguments to update many TransactionClassifications.
     * @example
     * // Update many TransactionClassifications
     * const transactionClassification = await prisma.transactionClassification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionClassifications and only return the `id`
     * const transactionClassificationWithIdOnly = await prisma.transactionClassification.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionClassificationUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionClassificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionClassification.
     * @param {TransactionClassificationUpsertArgs} args - Arguments to update or create a TransactionClassification.
     * @example
     * // Update or create a TransactionClassification
     * const transactionClassification = await prisma.transactionClassification.upsert({
     *   create: {
     *     // ... data to create a TransactionClassification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionClassification we want to update
     *   }
     * })
     */
    upsert<T extends TransactionClassificationUpsertArgs>(args: SelectSubset<T, TransactionClassificationUpsertArgs<ExtArgs>>): Prisma__TransactionClassificationClient<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionClassifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionClassificationCountArgs} args - Arguments to filter TransactionClassifications to count.
     * @example
     * // Count the number of TransactionClassifications
     * const count = await prisma.transactionClassification.count({
     *   where: {
     *     // ... the filter for the TransactionClassifications we want to count
     *   }
     * })
    **/
    count<T extends TransactionClassificationCountArgs>(
      args?: Subset<T, TransactionClassificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionClassificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionClassification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionClassificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionClassificationAggregateArgs>(args: Subset<T, TransactionClassificationAggregateArgs>): Prisma.PrismaPromise<GetTransactionClassificationAggregateType<T>>

    /**
     * Group by TransactionClassification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionClassificationGroupByArgs} args - Group by arguments.
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
      T extends TransactionClassificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionClassificationGroupByArgs['orderBy'] }
        : { orderBy?: TransactionClassificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionClassificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionClassificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionClassification model
   */
  readonly fields: TransactionClassificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionClassification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClassificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends TransactionClassification$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, TransactionClassification$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TransactionClassification model
   */
  interface TransactionClassificationFieldRefs {
    readonly id: FieldRef<"TransactionClassification", 'String'>
    readonly code: FieldRef<"TransactionClassification", 'ClassificationCode'>
    readonly category: FieldRef<"TransactionClassification", 'Category'>
    readonly label: FieldRef<"TransactionClassification", 'String'>
    readonly description: FieldRef<"TransactionClassification", 'String'>
    readonly createdAt: FieldRef<"TransactionClassification", 'DateTime'>
    readonly updatedAt: FieldRef<"TransactionClassification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransactionClassification findUnique
   */
  export type TransactionClassificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionClassificationInclude<ExtArgs> | null
    /**
     * Filter, which TransactionClassification to fetch.
     */
    where: TransactionClassificationWhereUniqueInput
  }

  /**
   * TransactionClassification findUniqueOrThrow
   */
  export type TransactionClassificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionClassificationInclude<ExtArgs> | null
    /**
     * Filter, which TransactionClassification to fetch.
     */
    where: TransactionClassificationWhereUniqueInput
  }

  /**
   * TransactionClassification findFirst
   */
  export type TransactionClassificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionClassificationInclude<ExtArgs> | null
    /**
     * Filter, which TransactionClassification to fetch.
     */
    where?: TransactionClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionClassifications to fetch.
     */
    orderBy?: TransactionClassificationOrderByWithRelationInput | TransactionClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionClassifications.
     */
    cursor?: TransactionClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionClassifications.
     */
    distinct?: TransactionClassificationScalarFieldEnum | TransactionClassificationScalarFieldEnum[]
  }

  /**
   * TransactionClassification findFirstOrThrow
   */
  export type TransactionClassificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionClassificationInclude<ExtArgs> | null
    /**
     * Filter, which TransactionClassification to fetch.
     */
    where?: TransactionClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionClassifications to fetch.
     */
    orderBy?: TransactionClassificationOrderByWithRelationInput | TransactionClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionClassifications.
     */
    cursor?: TransactionClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionClassifications.
     */
    distinct?: TransactionClassificationScalarFieldEnum | TransactionClassificationScalarFieldEnum[]
  }

  /**
   * TransactionClassification findMany
   */
  export type TransactionClassificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionClassificationInclude<ExtArgs> | null
    /**
     * Filter, which TransactionClassifications to fetch.
     */
    where?: TransactionClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionClassifications to fetch.
     */
    orderBy?: TransactionClassificationOrderByWithRelationInput | TransactionClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionClassifications.
     */
    cursor?: TransactionClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionClassifications.
     */
    skip?: number
    distinct?: TransactionClassificationScalarFieldEnum | TransactionClassificationScalarFieldEnum[]
  }

  /**
   * TransactionClassification create
   */
  export type TransactionClassificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionClassificationInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionClassification.
     */
    data: XOR<TransactionClassificationCreateInput, TransactionClassificationUncheckedCreateInput>
  }

  /**
   * TransactionClassification createMany
   */
  export type TransactionClassificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionClassifications.
     */
    data: TransactionClassificationCreateManyInput | TransactionClassificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionClassification createManyAndReturn
   */
  export type TransactionClassificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionClassifications.
     */
    data: TransactionClassificationCreateManyInput | TransactionClassificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionClassification update
   */
  export type TransactionClassificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionClassificationInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionClassification.
     */
    data: XOR<TransactionClassificationUpdateInput, TransactionClassificationUncheckedUpdateInput>
    /**
     * Choose, which TransactionClassification to update.
     */
    where: TransactionClassificationWhereUniqueInput
  }

  /**
   * TransactionClassification updateMany
   */
  export type TransactionClassificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionClassifications.
     */
    data: XOR<TransactionClassificationUpdateManyMutationInput, TransactionClassificationUncheckedUpdateManyInput>
    /**
     * Filter which TransactionClassifications to update
     */
    where?: TransactionClassificationWhereInput
    /**
     * Limit how many TransactionClassifications to update.
     */
    limit?: number
  }

  /**
   * TransactionClassification updateManyAndReturn
   */
  export type TransactionClassificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * The data used to update TransactionClassifications.
     */
    data: XOR<TransactionClassificationUpdateManyMutationInput, TransactionClassificationUncheckedUpdateManyInput>
    /**
     * Filter which TransactionClassifications to update
     */
    where?: TransactionClassificationWhereInput
    /**
     * Limit how many TransactionClassifications to update.
     */
    limit?: number
  }

  /**
   * TransactionClassification upsert
   */
  export type TransactionClassificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionClassificationInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionClassification to update in case it exists.
     */
    where: TransactionClassificationWhereUniqueInput
    /**
     * In case the TransactionClassification found by the `where` argument doesn't exist, create a new TransactionClassification with this data.
     */
    create: XOR<TransactionClassificationCreateInput, TransactionClassificationUncheckedCreateInput>
    /**
     * In case the TransactionClassification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionClassificationUpdateInput, TransactionClassificationUncheckedUpdateInput>
  }

  /**
   * TransactionClassification delete
   */
  export type TransactionClassificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionClassificationInclude<ExtArgs> | null
    /**
     * Filter which TransactionClassification to delete.
     */
    where: TransactionClassificationWhereUniqueInput
  }

  /**
   * TransactionClassification deleteMany
   */
  export type TransactionClassificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionClassifications to delete
     */
    where?: TransactionClassificationWhereInput
    /**
     * Limit how many TransactionClassifications to delete.
     */
    limit?: number
  }

  /**
   * TransactionClassification.transactions
   */
  export type TransactionClassification$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    where?: BankTransactionWhereInput
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    cursor?: BankTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * TransactionClassification without action
   */
  export type TransactionClassificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionClassification
     */
    select?: TransactionClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionClassification
     */
    omit?: TransactionClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionClassificationInclude<ExtArgs> | null
  }


  /**
   * Model BankTransaction
   */

  export type AggregateBankTransaction = {
    _count: BankTransactionCountAggregateOutputType | null
    _avg: BankTransactionAvgAggregateOutputType | null
    _sum: BankTransactionSumAggregateOutputType | null
    _min: BankTransactionMinAggregateOutputType | null
    _max: BankTransactionMaxAggregateOutputType | null
  }

  export type BankTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type BankTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type BankTransactionMinAggregateOutputType = {
    id: string | null
    bankAccountId: string | null
    uploadedById: string | null
    transactionDate: Date | null
    valueDate: Date | null
    amount: number | null
    type: $Enums.TransactionType | null
    description: string | null
    reference: string | null
    chequeNo: string | null
    tellerNo: string | null
    currency: string | null
    classificationId: string | null
    user: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankTransactionMaxAggregateOutputType = {
    id: string | null
    bankAccountId: string | null
    uploadedById: string | null
    transactionDate: Date | null
    valueDate: Date | null
    amount: number | null
    type: $Enums.TransactionType | null
    description: string | null
    reference: string | null
    chequeNo: string | null
    tellerNo: string | null
    currency: string | null
    classificationId: string | null
    user: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankTransactionCountAggregateOutputType = {
    id: number
    bankAccountId: number
    uploadedById: number
    transactionDate: number
    valueDate: number
    amount: number
    type: number
    description: number
    reference: number
    chequeNo: number
    tellerNo: number
    currency: number
    classificationId: number
    user: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BankTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type BankTransactionSumAggregateInputType = {
    amount?: true
  }

  export type BankTransactionMinAggregateInputType = {
    id?: true
    bankAccountId?: true
    uploadedById?: true
    transactionDate?: true
    valueDate?: true
    amount?: true
    type?: true
    description?: true
    reference?: true
    chequeNo?: true
    tellerNo?: true
    currency?: true
    classificationId?: true
    user?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankTransactionMaxAggregateInputType = {
    id?: true
    bankAccountId?: true
    uploadedById?: true
    transactionDate?: true
    valueDate?: true
    amount?: true
    type?: true
    description?: true
    reference?: true
    chequeNo?: true
    tellerNo?: true
    currency?: true
    classificationId?: true
    user?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankTransactionCountAggregateInputType = {
    id?: true
    bankAccountId?: true
    uploadedById?: true
    transactionDate?: true
    valueDate?: true
    amount?: true
    type?: true
    description?: true
    reference?: true
    chequeNo?: true
    tellerNo?: true
    currency?: true
    classificationId?: true
    user?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BankTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankTransaction to aggregate.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankTransactions
    **/
    _count?: true | BankTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankTransactionMaxAggregateInputType
  }

  export type GetBankTransactionAggregateType<T extends BankTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateBankTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankTransaction[P]>
      : GetScalarType<T[P], AggregateBankTransaction[P]>
  }




  export type BankTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankTransactionWhereInput
    orderBy?: BankTransactionOrderByWithAggregationInput | BankTransactionOrderByWithAggregationInput[]
    by: BankTransactionScalarFieldEnum[] | BankTransactionScalarFieldEnum
    having?: BankTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankTransactionCountAggregateInputType | true
    _avg?: BankTransactionAvgAggregateInputType
    _sum?: BankTransactionSumAggregateInputType
    _min?: BankTransactionMinAggregateInputType
    _max?: BankTransactionMaxAggregateInputType
  }

  export type BankTransactionGroupByOutputType = {
    id: string
    bankAccountId: string
    uploadedById: string
    transactionDate: Date
    valueDate: Date
    amount: number
    type: $Enums.TransactionType
    description: string
    reference: string | null
    chequeNo: string | null
    tellerNo: string | null
    currency: string
    classificationId: string
    user: string | null
    createdAt: Date
    updatedAt: Date
    _count: BankTransactionCountAggregateOutputType | null
    _avg: BankTransactionAvgAggregateOutputType | null
    _sum: BankTransactionSumAggregateOutputType | null
    _min: BankTransactionMinAggregateOutputType | null
    _max: BankTransactionMaxAggregateOutputType | null
  }

  type GetBankTransactionGroupByPayload<T extends BankTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], BankTransactionGroupByOutputType[P]>
        }
      >
    >


  export type BankTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankAccountId?: boolean
    uploadedById?: boolean
    transactionDate?: boolean
    valueDate?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    reference?: boolean
    chequeNo?: boolean
    tellerNo?: boolean
    currency?: boolean
    classificationId?: boolean
    user?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    classification?: boolean | TransactionClassificationDefaultArgs<ExtArgs>
    User?: boolean | BankTransaction$UserArgs<ExtArgs>
    _count?: boolean | BankTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankTransaction"]>

  export type BankTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankAccountId?: boolean
    uploadedById?: boolean
    transactionDate?: boolean
    valueDate?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    reference?: boolean
    chequeNo?: boolean
    tellerNo?: boolean
    currency?: boolean
    classificationId?: boolean
    user?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    classification?: boolean | TransactionClassificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankTransaction"]>

  export type BankTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankAccountId?: boolean
    uploadedById?: boolean
    transactionDate?: boolean
    valueDate?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    reference?: boolean
    chequeNo?: boolean
    tellerNo?: boolean
    currency?: boolean
    classificationId?: boolean
    user?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    classification?: boolean | TransactionClassificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankTransaction"]>

  export type BankTransactionSelectScalar = {
    id?: boolean
    bankAccountId?: boolean
    uploadedById?: boolean
    transactionDate?: boolean
    valueDate?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    reference?: boolean
    chequeNo?: boolean
    tellerNo?: boolean
    currency?: boolean
    classificationId?: boolean
    user?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BankTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bankAccountId" | "uploadedById" | "transactionDate" | "valueDate" | "amount" | "type" | "description" | "reference" | "chequeNo" | "tellerNo" | "currency" | "classificationId" | "user" | "createdAt" | "updatedAt", ExtArgs["result"]["bankTransaction"]>
  export type BankTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    classification?: boolean | TransactionClassificationDefaultArgs<ExtArgs>
    User?: boolean | BankTransaction$UserArgs<ExtArgs>
    _count?: boolean | BankTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    classification?: boolean | TransactionClassificationDefaultArgs<ExtArgs>
  }
  export type BankTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    classification?: boolean | TransactionClassificationDefaultArgs<ExtArgs>
  }

  export type $BankTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankTransaction"
    objects: {
      bankAccount: Prisma.$BankAccountPayload<ExtArgs>
      uploadedBy: Prisma.$UserPayload<ExtArgs>
      classification: Prisma.$TransactionClassificationPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bankAccountId: string
      uploadedById: string
      transactionDate: Date
      valueDate: Date
      amount: number
      type: $Enums.TransactionType
      description: string
      reference: string | null
      chequeNo: string | null
      tellerNo: string | null
      currency: string
      classificationId: string
      user: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bankTransaction"]>
    composites: {}
  }

  type BankTransactionGetPayload<S extends boolean | null | undefined | BankTransactionDefaultArgs> = $Result.GetResult<Prisma.$BankTransactionPayload, S>

  type BankTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankTransactionCountAggregateInputType | true
    }

  export interface BankTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankTransaction'], meta: { name: 'BankTransaction' } }
    /**
     * Find zero or one BankTransaction that matches the filter.
     * @param {BankTransactionFindUniqueArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankTransactionFindUniqueArgs>(args: SelectSubset<T, BankTransactionFindUniqueArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankTransactionFindUniqueOrThrowArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, BankTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionFindFirstArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankTransactionFindFirstArgs>(args?: SelectSubset<T, BankTransactionFindFirstArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionFindFirstOrThrowArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, BankTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankTransactions
     * const bankTransactions = await prisma.bankTransaction.findMany()
     * 
     * // Get first 10 BankTransactions
     * const bankTransactions = await prisma.bankTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankTransactionWithIdOnly = await prisma.bankTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankTransactionFindManyArgs>(args?: SelectSubset<T, BankTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankTransaction.
     * @param {BankTransactionCreateArgs} args - Arguments to create a BankTransaction.
     * @example
     * // Create one BankTransaction
     * const BankTransaction = await prisma.bankTransaction.create({
     *   data: {
     *     // ... data to create a BankTransaction
     *   }
     * })
     * 
     */
    create<T extends BankTransactionCreateArgs>(args: SelectSubset<T, BankTransactionCreateArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankTransactions.
     * @param {BankTransactionCreateManyArgs} args - Arguments to create many BankTransactions.
     * @example
     * // Create many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankTransactionCreateManyArgs>(args?: SelectSubset<T, BankTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankTransactions and returns the data saved in the database.
     * @param {BankTransactionCreateManyAndReturnArgs} args - Arguments to create many BankTransactions.
     * @example
     * // Create many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankTransactions and only return the `id`
     * const bankTransactionWithIdOnly = await prisma.bankTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, BankTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankTransaction.
     * @param {BankTransactionDeleteArgs} args - Arguments to delete one BankTransaction.
     * @example
     * // Delete one BankTransaction
     * const BankTransaction = await prisma.bankTransaction.delete({
     *   where: {
     *     // ... filter to delete one BankTransaction
     *   }
     * })
     * 
     */
    delete<T extends BankTransactionDeleteArgs>(args: SelectSubset<T, BankTransactionDeleteArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankTransaction.
     * @param {BankTransactionUpdateArgs} args - Arguments to update one BankTransaction.
     * @example
     * // Update one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankTransactionUpdateArgs>(args: SelectSubset<T, BankTransactionUpdateArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankTransactions.
     * @param {BankTransactionDeleteManyArgs} args - Arguments to filter BankTransactions to delete.
     * @example
     * // Delete a few BankTransactions
     * const { count } = await prisma.bankTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankTransactionDeleteManyArgs>(args?: SelectSubset<T, BankTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankTransactionUpdateManyArgs>(args: SelectSubset<T, BankTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankTransactions and returns the data updated in the database.
     * @param {BankTransactionUpdateManyAndReturnArgs} args - Arguments to update many BankTransactions.
     * @example
     * // Update many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankTransactions and only return the `id`
     * const bankTransactionWithIdOnly = await prisma.bankTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends BankTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, BankTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankTransaction.
     * @param {BankTransactionUpsertArgs} args - Arguments to update or create a BankTransaction.
     * @example
     * // Update or create a BankTransaction
     * const bankTransaction = await prisma.bankTransaction.upsert({
     *   create: {
     *     // ... data to create a BankTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankTransaction we want to update
     *   }
     * })
     */
    upsert<T extends BankTransactionUpsertArgs>(args: SelectSubset<T, BankTransactionUpsertArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionCountArgs} args - Arguments to filter BankTransactions to count.
     * @example
     * // Count the number of BankTransactions
     * const count = await prisma.bankTransaction.count({
     *   where: {
     *     // ... the filter for the BankTransactions we want to count
     *   }
     * })
    **/
    count<T extends BankTransactionCountArgs>(
      args?: Subset<T, BankTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BankTransactionAggregateArgs>(args: Subset<T, BankTransactionAggregateArgs>): Prisma.PrismaPromise<GetBankTransactionAggregateType<T>>

    /**
     * Group by BankTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionGroupByArgs} args - Group by arguments.
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
      T extends BankTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankTransactionGroupByArgs['orderBy'] }
        : { orderBy?: BankTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BankTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankTransaction model
   */
  readonly fields: BankTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccount<T extends BankAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankAccountDefaultArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classification<T extends TransactionClassificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionClassificationDefaultArgs<ExtArgs>>): Prisma__TransactionClassificationClient<$Result.GetResult<Prisma.$TransactionClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends BankTransaction$UserArgs<ExtArgs> = {}>(args?: Subset<T, BankTransaction$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BankTransaction model
   */
  interface BankTransactionFieldRefs {
    readonly id: FieldRef<"BankTransaction", 'String'>
    readonly bankAccountId: FieldRef<"BankTransaction", 'String'>
    readonly uploadedById: FieldRef<"BankTransaction", 'String'>
    readonly transactionDate: FieldRef<"BankTransaction", 'DateTime'>
    readonly valueDate: FieldRef<"BankTransaction", 'DateTime'>
    readonly amount: FieldRef<"BankTransaction", 'Float'>
    readonly type: FieldRef<"BankTransaction", 'TransactionType'>
    readonly description: FieldRef<"BankTransaction", 'String'>
    readonly reference: FieldRef<"BankTransaction", 'String'>
    readonly chequeNo: FieldRef<"BankTransaction", 'String'>
    readonly tellerNo: FieldRef<"BankTransaction", 'String'>
    readonly currency: FieldRef<"BankTransaction", 'String'>
    readonly classificationId: FieldRef<"BankTransaction", 'String'>
    readonly user: FieldRef<"BankTransaction", 'String'>
    readonly createdAt: FieldRef<"BankTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"BankTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankTransaction findUnique
   */
  export type BankTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction findUniqueOrThrow
   */
  export type BankTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction findFirst
   */
  export type BankTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankTransactions.
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankTransactions.
     */
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankTransaction findFirstOrThrow
   */
  export type BankTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankTransactions.
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankTransactions.
     */
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankTransaction findMany
   */
  export type BankTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransactions to fetch.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankTransactions.
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankTransaction create
   */
  export type BankTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a BankTransaction.
     */
    data: XOR<BankTransactionCreateInput, BankTransactionUncheckedCreateInput>
  }

  /**
   * BankTransaction createMany
   */
  export type BankTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankTransactions.
     */
    data: BankTransactionCreateManyInput | BankTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankTransaction createManyAndReturn
   */
  export type BankTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many BankTransactions.
     */
    data: BankTransactionCreateManyInput | BankTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankTransaction update
   */
  export type BankTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a BankTransaction.
     */
    data: XOR<BankTransactionUpdateInput, BankTransactionUncheckedUpdateInput>
    /**
     * Choose, which BankTransaction to update.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction updateMany
   */
  export type BankTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankTransactions.
     */
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BankTransactions to update
     */
    where?: BankTransactionWhereInput
    /**
     * Limit how many BankTransactions to update.
     */
    limit?: number
  }

  /**
   * BankTransaction updateManyAndReturn
   */
  export type BankTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * The data used to update BankTransactions.
     */
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BankTransactions to update
     */
    where?: BankTransactionWhereInput
    /**
     * Limit how many BankTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankTransaction upsert
   */
  export type BankTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the BankTransaction to update in case it exists.
     */
    where: BankTransactionWhereUniqueInput
    /**
     * In case the BankTransaction found by the `where` argument doesn't exist, create a new BankTransaction with this data.
     */
    create: XOR<BankTransactionCreateInput, BankTransactionUncheckedCreateInput>
    /**
     * In case the BankTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankTransactionUpdateInput, BankTransactionUncheckedUpdateInput>
  }

  /**
   * BankTransaction delete
   */
  export type BankTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter which BankTransaction to delete.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction deleteMany
   */
  export type BankTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankTransactions to delete
     */
    where?: BankTransactionWhereInput
    /**
     * Limit how many BankTransactions to delete.
     */
    limit?: number
  }

  /**
   * BankTransaction.User
   */
  export type BankTransaction$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * BankTransaction without action
   */
  export type BankTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
  }


  /**
   * Model BankAccount
   */

  export type AggregateBankAccount = {
    _count: BankAccountCountAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  export type BankAccountMinAggregateOutputType = {
    id: string | null
    accountCode: string | null
    accountNumber: string | null
    accountName: string | null
    accountType: $Enums.AccountType | null
    currency: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankAccountMaxAggregateOutputType = {
    id: string | null
    accountCode: string | null
    accountNumber: string | null
    accountName: string | null
    accountType: $Enums.AccountType | null
    currency: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankAccountCountAggregateOutputType = {
    id: number
    accountCode: number
    accountNumber: number
    accountName: number
    accountType: number
    currency: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BankAccountMinAggregateInputType = {
    id?: true
    accountCode?: true
    accountNumber?: true
    accountName?: true
    accountType?: true
    currency?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankAccountMaxAggregateInputType = {
    id?: true
    accountCode?: true
    accountNumber?: true
    accountName?: true
    accountType?: true
    currency?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankAccountCountAggregateInputType = {
    id?: true
    accountCode?: true
    accountNumber?: true
    accountName?: true
    accountType?: true
    currency?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BankAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccount to aggregate.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccounts
    **/
    _count?: true | BankAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountMaxAggregateInputType
  }

  export type GetBankAccountAggregateType<T extends BankAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccount[P]>
      : GetScalarType<T[P], AggregateBankAccount[P]>
  }




  export type BankAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithAggregationInput | BankAccountOrderByWithAggregationInput[]
    by: BankAccountScalarFieldEnum[] | BankAccountScalarFieldEnum
    having?: BankAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountCountAggregateInputType | true
    _min?: BankAccountMinAggregateInputType
    _max?: BankAccountMaxAggregateInputType
  }

  export type BankAccountGroupByOutputType = {
    id: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    clientId: string
    createdAt: Date
    updatedAt: Date
    _count: BankAccountCountAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  type GetBankAccountGroupByPayload<T extends BankAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    accountType?: boolean
    currency?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | BankAccount$contractArgs<ExtArgs>
    staffAssignments?: boolean | BankAccount$staffAssignmentsArgs<ExtArgs>
    transactions?: boolean | BankAccount$transactionsArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    accountType?: boolean
    currency?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    accountType?: boolean
    currency?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectScalar = {
    id?: boolean
    accountCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    accountType?: boolean
    currency?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BankAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountCode" | "accountNumber" | "accountName" | "accountType" | "currency" | "clientId" | "createdAt" | "updatedAt", ExtArgs["result"]["bankAccount"]>
  export type BankAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | BankAccount$contractArgs<ExtArgs>
    staffAssignments?: boolean | BankAccount$staffAssignmentsArgs<ExtArgs>
    transactions?: boolean | BankAccount$transactionsArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type BankAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $BankAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankAccount"
    objects: {
      contract: Prisma.$AccountContractPayload<ExtArgs> | null
      staffAssignments: Prisma.$StaffAccountAssignmentPayload<ExtArgs>[]
      transactions: Prisma.$BankTransactionPayload<ExtArgs>[]
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountCode: string
      accountNumber: string
      accountName: string
      accountType: $Enums.AccountType
      currency: string
      clientId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bankAccount"]>
    composites: {}
  }

  type BankAccountGetPayload<S extends boolean | null | undefined | BankAccountDefaultArgs> = $Result.GetResult<Prisma.$BankAccountPayload, S>

  type BankAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankAccountCountAggregateInputType | true
    }

  export interface BankAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankAccount'], meta: { name: 'BankAccount' } }
    /**
     * Find zero or one BankAccount that matches the filter.
     * @param {BankAccountFindUniqueArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankAccountFindUniqueArgs>(args: SelectSubset<T, BankAccountFindUniqueArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankAccountFindUniqueOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, BankAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankAccountFindFirstArgs>(args?: SelectSubset<T, BankAccountFindFirstArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, BankAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany()
     * 
     * // Get first 10 BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankAccountFindManyArgs>(args?: SelectSubset<T, BankAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankAccount.
     * @param {BankAccountCreateArgs} args - Arguments to create a BankAccount.
     * @example
     * // Create one BankAccount
     * const BankAccount = await prisma.bankAccount.create({
     *   data: {
     *     // ... data to create a BankAccount
     *   }
     * })
     * 
     */
    create<T extends BankAccountCreateArgs>(args: SelectSubset<T, BankAccountCreateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankAccounts.
     * @param {BankAccountCreateManyArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankAccountCreateManyArgs>(args?: SelectSubset<T, BankAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankAccounts and returns the data saved in the database.
     * @param {BankAccountCreateManyAndReturnArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, BankAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankAccount.
     * @param {BankAccountDeleteArgs} args - Arguments to delete one BankAccount.
     * @example
     * // Delete one BankAccount
     * const BankAccount = await prisma.bankAccount.delete({
     *   where: {
     *     // ... filter to delete one BankAccount
     *   }
     * })
     * 
     */
    delete<T extends BankAccountDeleteArgs>(args: SelectSubset<T, BankAccountDeleteArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankAccount.
     * @param {BankAccountUpdateArgs} args - Arguments to update one BankAccount.
     * @example
     * // Update one BankAccount
     * const bankAccount = await prisma.bankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankAccountUpdateArgs>(args: SelectSubset<T, BankAccountUpdateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankAccounts.
     * @param {BankAccountDeleteManyArgs} args - Arguments to filter BankAccounts to delete.
     * @example
     * // Delete a few BankAccounts
     * const { count } = await prisma.bankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankAccountDeleteManyArgs>(args?: SelectSubset<T, BankAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankAccountUpdateManyArgs>(args: SelectSubset<T, BankAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts and returns the data updated in the database.
     * @param {BankAccountUpdateManyAndReturnArgs} args - Arguments to update many BankAccounts.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends BankAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, BankAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankAccount.
     * @param {BankAccountUpsertArgs} args - Arguments to update or create a BankAccount.
     * @example
     * // Update or create a BankAccount
     * const bankAccount = await prisma.bankAccount.upsert({
     *   create: {
     *     // ... data to create a BankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccount we want to update
     *   }
     * })
     */
    upsert<T extends BankAccountUpsertArgs>(args: SelectSubset<T, BankAccountUpsertArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountCountArgs} args - Arguments to filter BankAccounts to count.
     * @example
     * // Count the number of BankAccounts
     * const count = await prisma.bankAccount.count({
     *   where: {
     *     // ... the filter for the BankAccounts we want to count
     *   }
     * })
    **/
    count<T extends BankAccountCountArgs>(
      args?: Subset<T, BankAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BankAccountAggregateArgs>(args: Subset<T, BankAccountAggregateArgs>): Prisma.PrismaPromise<GetBankAccountAggregateType<T>>

    /**
     * Group by BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountGroupByArgs} args - Group by arguments.
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
      T extends BankAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankAccount model
   */
  readonly fields: BankAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends BankAccount$contractArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$contractArgs<ExtArgs>>): Prisma__AccountContractClient<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staffAssignments<T extends BankAccount$staffAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$staffAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends BankAccount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BankAccount model
   */
  interface BankAccountFieldRefs {
    readonly id: FieldRef<"BankAccount", 'String'>
    readonly accountCode: FieldRef<"BankAccount", 'String'>
    readonly accountNumber: FieldRef<"BankAccount", 'String'>
    readonly accountName: FieldRef<"BankAccount", 'String'>
    readonly accountType: FieldRef<"BankAccount", 'AccountType'>
    readonly currency: FieldRef<"BankAccount", 'String'>
    readonly clientId: FieldRef<"BankAccount", 'String'>
    readonly createdAt: FieldRef<"BankAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"BankAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankAccount findUnique
   */
  export type BankAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findUniqueOrThrow
   */
  export type BankAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findFirst
   */
  export type BankAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findFirstOrThrow
   */
  export type BankAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findMany
   */
  export type BankAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccounts to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount create
   */
  export type BankAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a BankAccount.
     */
    data: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
  }

  /**
   * BankAccount createMany
   */
  export type BankAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankAccount createManyAndReturn
   */
  export type BankAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount update
   */
  export type BankAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a BankAccount.
     */
    data: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
    /**
     * Choose, which BankAccount to update.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount updateMany
   */
  export type BankAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
  }

  /**
   * BankAccount updateManyAndReturn
   */
  export type BankAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount upsert
   */
  export type BankAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the BankAccount to update in case it exists.
     */
    where: BankAccountWhereUniqueInput
    /**
     * In case the BankAccount found by the `where` argument doesn't exist, create a new BankAccount with this data.
     */
    create: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
    /**
     * In case the BankAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
  }

  /**
   * BankAccount delete
   */
  export type BankAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter which BankAccount to delete.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount deleteMany
   */
  export type BankAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccounts to delete
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to delete.
     */
    limit?: number
  }

  /**
   * BankAccount.contract
   */
  export type BankAccount$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
    where?: AccountContractWhereInput
  }

  /**
   * BankAccount.staffAssignments
   */
  export type BankAccount$staffAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    where?: StaffAccountAssignmentWhereInput
    orderBy?: StaffAccountAssignmentOrderByWithRelationInput | StaffAccountAssignmentOrderByWithRelationInput[]
    cursor?: StaffAccountAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffAccountAssignmentScalarFieldEnum | StaffAccountAssignmentScalarFieldEnum[]
  }

  /**
   * BankAccount.transactions
   */
  export type BankAccount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    where?: BankTransactionWhereInput
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    cursor?: BankTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankAccount without action
   */
  export type BankAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    companyName: string | null
    email: string | null
    address: string | null
    phone: string | null
    country: string | null
    state: string | null
    city: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    companyName: string | null
    email: string | null
    address: string | null
    phone: string | null
    country: string | null
    state: string | null
    city: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    companyName: number
    email: number
    address: number
    phone: number
    country: number
    state: number
    city: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    companyName?: true
    email?: true
    address?: true
    phone?: true
    country?: true
    state?: true
    city?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    companyName?: true
    email?: true
    address?: true
    phone?: true
    country?: true
    state?: true
    city?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    companyName?: true
    email?: true
    address?: true
    phone?: true
    country?: true
    state?: true
    city?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    companyName: string
    email: string
    address: string | null
    phone: string | null
    country: string | null
    state: string | null
    city: string | null
    avatarUrl: string
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    companyName?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | Client$accountsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    companyName?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    companyName?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    companyName?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "companyName" | "email" | "address" | "phone" | "country" | "state" | "city" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Client$accountsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      accounts: Prisma.$BankAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      companyName: string
      email: string
      address: string | null
      phone: string | null
      country: string | null
      state: string | null
      city: string | null
      avatarUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends Client$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Client$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly firstName: FieldRef<"Client", 'String'>
    readonly lastName: FieldRef<"Client", 'String'>
    readonly companyName: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly country: FieldRef<"Client", 'String'>
    readonly state: FieldRef<"Client", 'String'>
    readonly city: FieldRef<"Client", 'String'>
    readonly avatarUrl: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.accounts
   */
  export type Client$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    cursor?: BankAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model AccountContract
   */

  export type AggregateAccountContract = {
    _count: AccountContractCountAggregateOutputType | null
    _avg: AccountContractAvgAggregateOutputType | null
    _sum: AccountContractSumAggregateOutputType | null
    _min: AccountContractMinAggregateOutputType | null
    _max: AccountContractMaxAggregateOutputType | null
  }

  export type AccountContractAvgAggregateOutputType = {
    returnChargeRate: number | null
    returnChargeLimit: number | null
    cotCovenantRate: number | null
    cotOffCoverRate: number | null
    cotOICRate: number | null
    turnoverLimit: number | null
    creditInterestRate: number | null
    debitRate: number | null
    excessRate: number | null
    vatRate: number | null
    whtRate: number | null
  }

  export type AccountContractSumAggregateOutputType = {
    returnChargeRate: number | null
    returnChargeLimit: number | null
    cotCovenantRate: number | null
    cotOffCoverRate: number | null
    cotOICRate: number | null
    turnoverLimit: number | null
    creditInterestRate: number | null
    debitRate: number | null
    excessRate: number | null
    vatRate: number | null
    whtRate: number | null
  }

  export type AccountContractMinAggregateOutputType = {
    id: string | null
    bankAccountId: string | null
    returnChargeRate: number | null
    returnChargeLimit: number | null
    cotCovenantRate: number | null
    cotOffCoverRate: number | null
    cotOICRate: number | null
    turnoverLimit: number | null
    cotCovenantFrequency: string | null
    chargeCOTOnShortfall: boolean | null
    creditInterestRate: number | null
    debitRate: number | null
    excessRate: number | null
    excessRateType: string | null
    vatRate: number | null
    whtRate: number | null
    rateType: string | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountContractMaxAggregateOutputType = {
    id: string | null
    bankAccountId: string | null
    returnChargeRate: number | null
    returnChargeLimit: number | null
    cotCovenantRate: number | null
    cotOffCoverRate: number | null
    cotOICRate: number | null
    turnoverLimit: number | null
    cotCovenantFrequency: string | null
    chargeCOTOnShortfall: boolean | null
    creditInterestRate: number | null
    debitRate: number | null
    excessRate: number | null
    excessRateType: string | null
    vatRate: number | null
    whtRate: number | null
    rateType: string | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountContractCountAggregateOutputType = {
    id: number
    bankAccountId: number
    returnChargeRate: number
    returnChargeLimit: number
    cotCovenantRate: number
    cotOffCoverRate: number
    cotOICRate: number
    turnoverLimit: number
    cotCovenantFrequency: number
    chargeCOTOnShortfall: number
    creditInterestRate: number
    debitRate: number
    excessRate: number
    excessRateType: number
    vatRate: number
    whtRate: number
    rateType: number
    effectiveFrom: number
    effectiveTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountContractAvgAggregateInputType = {
    returnChargeRate?: true
    returnChargeLimit?: true
    cotCovenantRate?: true
    cotOffCoverRate?: true
    cotOICRate?: true
    turnoverLimit?: true
    creditInterestRate?: true
    debitRate?: true
    excessRate?: true
    vatRate?: true
    whtRate?: true
  }

  export type AccountContractSumAggregateInputType = {
    returnChargeRate?: true
    returnChargeLimit?: true
    cotCovenantRate?: true
    cotOffCoverRate?: true
    cotOICRate?: true
    turnoverLimit?: true
    creditInterestRate?: true
    debitRate?: true
    excessRate?: true
    vatRate?: true
    whtRate?: true
  }

  export type AccountContractMinAggregateInputType = {
    id?: true
    bankAccountId?: true
    returnChargeRate?: true
    returnChargeLimit?: true
    cotCovenantRate?: true
    cotOffCoverRate?: true
    cotOICRate?: true
    turnoverLimit?: true
    cotCovenantFrequency?: true
    chargeCOTOnShortfall?: true
    creditInterestRate?: true
    debitRate?: true
    excessRate?: true
    excessRateType?: true
    vatRate?: true
    whtRate?: true
    rateType?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountContractMaxAggregateInputType = {
    id?: true
    bankAccountId?: true
    returnChargeRate?: true
    returnChargeLimit?: true
    cotCovenantRate?: true
    cotOffCoverRate?: true
    cotOICRate?: true
    turnoverLimit?: true
    cotCovenantFrequency?: true
    chargeCOTOnShortfall?: true
    creditInterestRate?: true
    debitRate?: true
    excessRate?: true
    excessRateType?: true
    vatRate?: true
    whtRate?: true
    rateType?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountContractCountAggregateInputType = {
    id?: true
    bankAccountId?: true
    returnChargeRate?: true
    returnChargeLimit?: true
    cotCovenantRate?: true
    cotOffCoverRate?: true
    cotOICRate?: true
    turnoverLimit?: true
    cotCovenantFrequency?: true
    chargeCOTOnShortfall?: true
    creditInterestRate?: true
    debitRate?: true
    excessRate?: true
    excessRateType?: true
    vatRate?: true
    whtRate?: true
    rateType?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountContract to aggregate.
     */
    where?: AccountContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountContracts to fetch.
     */
    orderBy?: AccountContractOrderByWithRelationInput | AccountContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountContracts
    **/
    _count?: true | AccountContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountContractMaxAggregateInputType
  }

  export type GetAccountContractAggregateType<T extends AccountContractAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountContract[P]>
      : GetScalarType<T[P], AggregateAccountContract[P]>
  }




  export type AccountContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountContractWhereInput
    orderBy?: AccountContractOrderByWithAggregationInput | AccountContractOrderByWithAggregationInput[]
    by: AccountContractScalarFieldEnum[] | AccountContractScalarFieldEnum
    having?: AccountContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountContractCountAggregateInputType | true
    _avg?: AccountContractAvgAggregateInputType
    _sum?: AccountContractSumAggregateInputType
    _min?: AccountContractMinAggregateInputType
    _max?: AccountContractMaxAggregateInputType
  }

  export type AccountContractGroupByOutputType = {
    id: string
    bankAccountId: string
    returnChargeRate: number | null
    returnChargeLimit: number | null
    cotCovenantRate: number | null
    cotOffCoverRate: number | null
    cotOICRate: number | null
    turnoverLimit: number | null
    cotCovenantFrequency: string | null
    chargeCOTOnShortfall: boolean | null
    creditInterestRate: number | null
    debitRate: number | null
    excessRate: number | null
    excessRateType: string | null
    vatRate: number | null
    whtRate: number | null
    rateType: string | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AccountContractCountAggregateOutputType | null
    _avg: AccountContractAvgAggregateOutputType | null
    _sum: AccountContractSumAggregateOutputType | null
    _min: AccountContractMinAggregateOutputType | null
    _max: AccountContractMaxAggregateOutputType | null
  }

  type GetAccountContractGroupByPayload<T extends AccountContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountContractGroupByOutputType[P]>
            : GetScalarType<T[P], AccountContractGroupByOutputType[P]>
        }
      >
    >


  export type AccountContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankAccountId?: boolean
    returnChargeRate?: boolean
    returnChargeLimit?: boolean
    cotCovenantRate?: boolean
    cotOffCoverRate?: boolean
    cotOICRate?: boolean
    turnoverLimit?: boolean
    cotCovenantFrequency?: boolean
    chargeCOTOnShortfall?: boolean
    creditInterestRate?: boolean
    debitRate?: boolean
    excessRate?: boolean
    excessRateType?: boolean
    vatRate?: boolean
    whtRate?: boolean
    rateType?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountContract"]>

  export type AccountContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankAccountId?: boolean
    returnChargeRate?: boolean
    returnChargeLimit?: boolean
    cotCovenantRate?: boolean
    cotOffCoverRate?: boolean
    cotOICRate?: boolean
    turnoverLimit?: boolean
    cotCovenantFrequency?: boolean
    chargeCOTOnShortfall?: boolean
    creditInterestRate?: boolean
    debitRate?: boolean
    excessRate?: boolean
    excessRateType?: boolean
    vatRate?: boolean
    whtRate?: boolean
    rateType?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountContract"]>

  export type AccountContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankAccountId?: boolean
    returnChargeRate?: boolean
    returnChargeLimit?: boolean
    cotCovenantRate?: boolean
    cotOffCoverRate?: boolean
    cotOICRate?: boolean
    turnoverLimit?: boolean
    cotCovenantFrequency?: boolean
    chargeCOTOnShortfall?: boolean
    creditInterestRate?: boolean
    debitRate?: boolean
    excessRate?: boolean
    excessRateType?: boolean
    vatRate?: boolean
    whtRate?: boolean
    rateType?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountContract"]>

  export type AccountContractSelectScalar = {
    id?: boolean
    bankAccountId?: boolean
    returnChargeRate?: boolean
    returnChargeLimit?: boolean
    cotCovenantRate?: boolean
    cotOffCoverRate?: boolean
    cotOICRate?: boolean
    turnoverLimit?: boolean
    cotCovenantFrequency?: boolean
    chargeCOTOnShortfall?: boolean
    creditInterestRate?: boolean
    debitRate?: boolean
    excessRate?: boolean
    excessRateType?: boolean
    vatRate?: boolean
    whtRate?: boolean
    rateType?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bankAccountId" | "returnChargeRate" | "returnChargeLimit" | "cotCovenantRate" | "cotOffCoverRate" | "cotOICRate" | "turnoverLimit" | "cotCovenantFrequency" | "chargeCOTOnShortfall" | "creditInterestRate" | "debitRate" | "excessRate" | "excessRateType" | "vatRate" | "whtRate" | "rateType" | "effectiveFrom" | "effectiveTo" | "createdAt" | "updatedAt", ExtArgs["result"]["accountContract"]>
  export type AccountContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }
  export type AccountContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }
  export type AccountContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }

  export type $AccountContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountContract"
    objects: {
      bankAccount: Prisma.$BankAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bankAccountId: string
      returnChargeRate: number | null
      returnChargeLimit: number | null
      cotCovenantRate: number | null
      cotOffCoverRate: number | null
      cotOICRate: number | null
      turnoverLimit: number | null
      cotCovenantFrequency: string | null
      chargeCOTOnShortfall: boolean | null
      creditInterestRate: number | null
      debitRate: number | null
      excessRate: number | null
      excessRateType: string | null
      vatRate: number | null
      whtRate: number | null
      rateType: string | null
      effectiveFrom: Date | null
      effectiveTo: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountContract"]>
    composites: {}
  }

  type AccountContractGetPayload<S extends boolean | null | undefined | AccountContractDefaultArgs> = $Result.GetResult<Prisma.$AccountContractPayload, S>

  type AccountContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountContractCountAggregateInputType | true
    }

  export interface AccountContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountContract'], meta: { name: 'AccountContract' } }
    /**
     * Find zero or one AccountContract that matches the filter.
     * @param {AccountContractFindUniqueArgs} args - Arguments to find a AccountContract
     * @example
     * // Get one AccountContract
     * const accountContract = await prisma.accountContract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountContractFindUniqueArgs>(args: SelectSubset<T, AccountContractFindUniqueArgs<ExtArgs>>): Prisma__AccountContractClient<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountContract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountContractFindUniqueOrThrowArgs} args - Arguments to find a AccountContract
     * @example
     * // Get one AccountContract
     * const accountContract = await prisma.accountContract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountContractFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountContractClient<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountContract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountContractFindFirstArgs} args - Arguments to find a AccountContract
     * @example
     * // Get one AccountContract
     * const accountContract = await prisma.accountContract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountContractFindFirstArgs>(args?: SelectSubset<T, AccountContractFindFirstArgs<ExtArgs>>): Prisma__AccountContractClient<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountContract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountContractFindFirstOrThrowArgs} args - Arguments to find a AccountContract
     * @example
     * // Get one AccountContract
     * const accountContract = await prisma.accountContract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountContractFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountContractClient<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountContracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountContracts
     * const accountContracts = await prisma.accountContract.findMany()
     * 
     * // Get first 10 AccountContracts
     * const accountContracts = await prisma.accountContract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountContractWithIdOnly = await prisma.accountContract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountContractFindManyArgs>(args?: SelectSubset<T, AccountContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountContract.
     * @param {AccountContractCreateArgs} args - Arguments to create a AccountContract.
     * @example
     * // Create one AccountContract
     * const AccountContract = await prisma.accountContract.create({
     *   data: {
     *     // ... data to create a AccountContract
     *   }
     * })
     * 
     */
    create<T extends AccountContractCreateArgs>(args: SelectSubset<T, AccountContractCreateArgs<ExtArgs>>): Prisma__AccountContractClient<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountContracts.
     * @param {AccountContractCreateManyArgs} args - Arguments to create many AccountContracts.
     * @example
     * // Create many AccountContracts
     * const accountContract = await prisma.accountContract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountContractCreateManyArgs>(args?: SelectSubset<T, AccountContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountContracts and returns the data saved in the database.
     * @param {AccountContractCreateManyAndReturnArgs} args - Arguments to create many AccountContracts.
     * @example
     * // Create many AccountContracts
     * const accountContract = await prisma.accountContract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountContracts and only return the `id`
     * const accountContractWithIdOnly = await prisma.accountContract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountContractCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountContract.
     * @param {AccountContractDeleteArgs} args - Arguments to delete one AccountContract.
     * @example
     * // Delete one AccountContract
     * const AccountContract = await prisma.accountContract.delete({
     *   where: {
     *     // ... filter to delete one AccountContract
     *   }
     * })
     * 
     */
    delete<T extends AccountContractDeleteArgs>(args: SelectSubset<T, AccountContractDeleteArgs<ExtArgs>>): Prisma__AccountContractClient<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountContract.
     * @param {AccountContractUpdateArgs} args - Arguments to update one AccountContract.
     * @example
     * // Update one AccountContract
     * const accountContract = await prisma.accountContract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountContractUpdateArgs>(args: SelectSubset<T, AccountContractUpdateArgs<ExtArgs>>): Prisma__AccountContractClient<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountContracts.
     * @param {AccountContractDeleteManyArgs} args - Arguments to filter AccountContracts to delete.
     * @example
     * // Delete a few AccountContracts
     * const { count } = await prisma.accountContract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountContractDeleteManyArgs>(args?: SelectSubset<T, AccountContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountContracts
     * const accountContract = await prisma.accountContract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountContractUpdateManyArgs>(args: SelectSubset<T, AccountContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountContracts and returns the data updated in the database.
     * @param {AccountContractUpdateManyAndReturnArgs} args - Arguments to update many AccountContracts.
     * @example
     * // Update many AccountContracts
     * const accountContract = await prisma.accountContract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountContracts and only return the `id`
     * const accountContractWithIdOnly = await prisma.accountContract.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountContractUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountContract.
     * @param {AccountContractUpsertArgs} args - Arguments to update or create a AccountContract.
     * @example
     * // Update or create a AccountContract
     * const accountContract = await prisma.accountContract.upsert({
     *   create: {
     *     // ... data to create a AccountContract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountContract we want to update
     *   }
     * })
     */
    upsert<T extends AccountContractUpsertArgs>(args: SelectSubset<T, AccountContractUpsertArgs<ExtArgs>>): Prisma__AccountContractClient<$Result.GetResult<Prisma.$AccountContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountContractCountArgs} args - Arguments to filter AccountContracts to count.
     * @example
     * // Count the number of AccountContracts
     * const count = await prisma.accountContract.count({
     *   where: {
     *     // ... the filter for the AccountContracts we want to count
     *   }
     * })
    **/
    count<T extends AccountContractCountArgs>(
      args?: Subset<T, AccountContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountContractAggregateArgs>(args: Subset<T, AccountContractAggregateArgs>): Prisma.PrismaPromise<GetAccountContractAggregateType<T>>

    /**
     * Group by AccountContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountContractGroupByArgs} args - Group by arguments.
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
      T extends AccountContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountContractGroupByArgs['orderBy'] }
        : { orderBy?: AccountContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountContract model
   */
  readonly fields: AccountContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountContract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccount<T extends BankAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankAccountDefaultArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AccountContract model
   */
  interface AccountContractFieldRefs {
    readonly id: FieldRef<"AccountContract", 'String'>
    readonly bankAccountId: FieldRef<"AccountContract", 'String'>
    readonly returnChargeRate: FieldRef<"AccountContract", 'Float'>
    readonly returnChargeLimit: FieldRef<"AccountContract", 'Float'>
    readonly cotCovenantRate: FieldRef<"AccountContract", 'Float'>
    readonly cotOffCoverRate: FieldRef<"AccountContract", 'Float'>
    readonly cotOICRate: FieldRef<"AccountContract", 'Float'>
    readonly turnoverLimit: FieldRef<"AccountContract", 'Float'>
    readonly cotCovenantFrequency: FieldRef<"AccountContract", 'String'>
    readonly chargeCOTOnShortfall: FieldRef<"AccountContract", 'Boolean'>
    readonly creditInterestRate: FieldRef<"AccountContract", 'Float'>
    readonly debitRate: FieldRef<"AccountContract", 'Float'>
    readonly excessRate: FieldRef<"AccountContract", 'Float'>
    readonly excessRateType: FieldRef<"AccountContract", 'String'>
    readonly vatRate: FieldRef<"AccountContract", 'Float'>
    readonly whtRate: FieldRef<"AccountContract", 'Float'>
    readonly rateType: FieldRef<"AccountContract", 'String'>
    readonly effectiveFrom: FieldRef<"AccountContract", 'DateTime'>
    readonly effectiveTo: FieldRef<"AccountContract", 'DateTime'>
    readonly createdAt: FieldRef<"AccountContract", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountContract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountContract findUnique
   */
  export type AccountContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
    /**
     * Filter, which AccountContract to fetch.
     */
    where: AccountContractWhereUniqueInput
  }

  /**
   * AccountContract findUniqueOrThrow
   */
  export type AccountContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
    /**
     * Filter, which AccountContract to fetch.
     */
    where: AccountContractWhereUniqueInput
  }

  /**
   * AccountContract findFirst
   */
  export type AccountContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
    /**
     * Filter, which AccountContract to fetch.
     */
    where?: AccountContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountContracts to fetch.
     */
    orderBy?: AccountContractOrderByWithRelationInput | AccountContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountContracts.
     */
    cursor?: AccountContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountContracts.
     */
    distinct?: AccountContractScalarFieldEnum | AccountContractScalarFieldEnum[]
  }

  /**
   * AccountContract findFirstOrThrow
   */
  export type AccountContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
    /**
     * Filter, which AccountContract to fetch.
     */
    where?: AccountContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountContracts to fetch.
     */
    orderBy?: AccountContractOrderByWithRelationInput | AccountContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountContracts.
     */
    cursor?: AccountContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountContracts.
     */
    distinct?: AccountContractScalarFieldEnum | AccountContractScalarFieldEnum[]
  }

  /**
   * AccountContract findMany
   */
  export type AccountContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
    /**
     * Filter, which AccountContracts to fetch.
     */
    where?: AccountContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountContracts to fetch.
     */
    orderBy?: AccountContractOrderByWithRelationInput | AccountContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountContracts.
     */
    cursor?: AccountContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountContracts.
     */
    skip?: number
    distinct?: AccountContractScalarFieldEnum | AccountContractScalarFieldEnum[]
  }

  /**
   * AccountContract create
   */
  export type AccountContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountContract.
     */
    data: XOR<AccountContractCreateInput, AccountContractUncheckedCreateInput>
  }

  /**
   * AccountContract createMany
   */
  export type AccountContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountContracts.
     */
    data: AccountContractCreateManyInput | AccountContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountContract createManyAndReturn
   */
  export type AccountContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * The data used to create many AccountContracts.
     */
    data: AccountContractCreateManyInput | AccountContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountContract update
   */
  export type AccountContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountContract.
     */
    data: XOR<AccountContractUpdateInput, AccountContractUncheckedUpdateInput>
    /**
     * Choose, which AccountContract to update.
     */
    where: AccountContractWhereUniqueInput
  }

  /**
   * AccountContract updateMany
   */
  export type AccountContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountContracts.
     */
    data: XOR<AccountContractUpdateManyMutationInput, AccountContractUncheckedUpdateManyInput>
    /**
     * Filter which AccountContracts to update
     */
    where?: AccountContractWhereInput
    /**
     * Limit how many AccountContracts to update.
     */
    limit?: number
  }

  /**
   * AccountContract updateManyAndReturn
   */
  export type AccountContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * The data used to update AccountContracts.
     */
    data: XOR<AccountContractUpdateManyMutationInput, AccountContractUncheckedUpdateManyInput>
    /**
     * Filter which AccountContracts to update
     */
    where?: AccountContractWhereInput
    /**
     * Limit how many AccountContracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountContract upsert
   */
  export type AccountContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountContract to update in case it exists.
     */
    where: AccountContractWhereUniqueInput
    /**
     * In case the AccountContract found by the `where` argument doesn't exist, create a new AccountContract with this data.
     */
    create: XOR<AccountContractCreateInput, AccountContractUncheckedCreateInput>
    /**
     * In case the AccountContract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountContractUpdateInput, AccountContractUncheckedUpdateInput>
  }

  /**
   * AccountContract delete
   */
  export type AccountContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
    /**
     * Filter which AccountContract to delete.
     */
    where: AccountContractWhereUniqueInput
  }

  /**
   * AccountContract deleteMany
   */
  export type AccountContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountContracts to delete
     */
    where?: AccountContractWhereInput
    /**
     * Limit how many AccountContracts to delete.
     */
    limit?: number
  }

  /**
   * AccountContract without action
   */
  export type AccountContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountContract
     */
    select?: AccountContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountContract
     */
    omit?: AccountContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountContractInclude<ExtArgs> | null
  }


  /**
   * Model StaffAccountAssignment
   */

  export type AggregateStaffAccountAssignment = {
    _count: StaffAccountAssignmentCountAggregateOutputType | null
    _min: StaffAccountAssignmentMinAggregateOutputType | null
    _max: StaffAccountAssignmentMaxAggregateOutputType | null
  }

  export type StaffAccountAssignmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    assignedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffAccountAssignmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    assignedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffAccountAssignmentCountAggregateOutputType = {
    id: number
    userId: number
    accountId: number
    assignedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffAccountAssignmentMinAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    assignedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffAccountAssignmentMaxAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    assignedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffAccountAssignmentCountAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    assignedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffAccountAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffAccountAssignment to aggregate.
     */
    where?: StaffAccountAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAccountAssignments to fetch.
     */
    orderBy?: StaffAccountAssignmentOrderByWithRelationInput | StaffAccountAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffAccountAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAccountAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAccountAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffAccountAssignments
    **/
    _count?: true | StaffAccountAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffAccountAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffAccountAssignmentMaxAggregateInputType
  }

  export type GetStaffAccountAssignmentAggregateType<T extends StaffAccountAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffAccountAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffAccountAssignment[P]>
      : GetScalarType<T[P], AggregateStaffAccountAssignment[P]>
  }




  export type StaffAccountAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffAccountAssignmentWhereInput
    orderBy?: StaffAccountAssignmentOrderByWithAggregationInput | StaffAccountAssignmentOrderByWithAggregationInput[]
    by: StaffAccountAssignmentScalarFieldEnum[] | StaffAccountAssignmentScalarFieldEnum
    having?: StaffAccountAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffAccountAssignmentCountAggregateInputType | true
    _min?: StaffAccountAssignmentMinAggregateInputType
    _max?: StaffAccountAssignmentMaxAggregateInputType
  }

  export type StaffAccountAssignmentGroupByOutputType = {
    id: string
    userId: string
    accountId: string
    assignedById: string
    createdAt: Date
    updatedAt: Date
    _count: StaffAccountAssignmentCountAggregateOutputType | null
    _min: StaffAccountAssignmentMinAggregateOutputType | null
    _max: StaffAccountAssignmentMaxAggregateOutputType | null
  }

  type GetStaffAccountAssignmentGroupByPayload<T extends StaffAccountAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffAccountAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffAccountAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffAccountAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], StaffAccountAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type StaffAccountAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    assignedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
    User?: boolean | StaffAccountAssignment$UserArgs<ExtArgs>
    _count?: boolean | StaffAccountAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAccountAssignment"]>

  export type StaffAccountAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    assignedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAccountAssignment"]>

  export type StaffAccountAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    assignedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffAccountAssignment"]>

  export type StaffAccountAssignmentSelectScalar = {
    id?: boolean
    userId?: boolean
    accountId?: boolean
    assignedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffAccountAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountId" | "assignedById" | "createdAt" | "updatedAt", ExtArgs["result"]["staffAccountAssignment"]>
  export type StaffAccountAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
    User?: boolean | StaffAccountAssignment$UserArgs<ExtArgs>
    _count?: boolean | StaffAccountAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffAccountAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffAccountAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StaffAccountAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffAccountAssignment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bankAccount: Prisma.$BankAccountPayload<ExtArgs>
      assignedBy: Prisma.$UserPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accountId: string
      assignedById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staffAccountAssignment"]>
    composites: {}
  }

  type StaffAccountAssignmentGetPayload<S extends boolean | null | undefined | StaffAccountAssignmentDefaultArgs> = $Result.GetResult<Prisma.$StaffAccountAssignmentPayload, S>

  type StaffAccountAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffAccountAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffAccountAssignmentCountAggregateInputType | true
    }

  export interface StaffAccountAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffAccountAssignment'], meta: { name: 'StaffAccountAssignment' } }
    /**
     * Find zero or one StaffAccountAssignment that matches the filter.
     * @param {StaffAccountAssignmentFindUniqueArgs} args - Arguments to find a StaffAccountAssignment
     * @example
     * // Get one StaffAccountAssignment
     * const staffAccountAssignment = await prisma.staffAccountAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffAccountAssignmentFindUniqueArgs>(args: SelectSubset<T, StaffAccountAssignmentFindUniqueArgs<ExtArgs>>): Prisma__StaffAccountAssignmentClient<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffAccountAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffAccountAssignmentFindUniqueOrThrowArgs} args - Arguments to find a StaffAccountAssignment
     * @example
     * // Get one StaffAccountAssignment
     * const staffAccountAssignment = await prisma.staffAccountAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffAccountAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffAccountAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffAccountAssignmentClient<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffAccountAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountAssignmentFindFirstArgs} args - Arguments to find a StaffAccountAssignment
     * @example
     * // Get one StaffAccountAssignment
     * const staffAccountAssignment = await prisma.staffAccountAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffAccountAssignmentFindFirstArgs>(args?: SelectSubset<T, StaffAccountAssignmentFindFirstArgs<ExtArgs>>): Prisma__StaffAccountAssignmentClient<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffAccountAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountAssignmentFindFirstOrThrowArgs} args - Arguments to find a StaffAccountAssignment
     * @example
     * // Get one StaffAccountAssignment
     * const staffAccountAssignment = await prisma.staffAccountAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffAccountAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffAccountAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffAccountAssignmentClient<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffAccountAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffAccountAssignments
     * const staffAccountAssignments = await prisma.staffAccountAssignment.findMany()
     * 
     * // Get first 10 StaffAccountAssignments
     * const staffAccountAssignments = await prisma.staffAccountAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffAccountAssignmentWithIdOnly = await prisma.staffAccountAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffAccountAssignmentFindManyArgs>(args?: SelectSubset<T, StaffAccountAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffAccountAssignment.
     * @param {StaffAccountAssignmentCreateArgs} args - Arguments to create a StaffAccountAssignment.
     * @example
     * // Create one StaffAccountAssignment
     * const StaffAccountAssignment = await prisma.staffAccountAssignment.create({
     *   data: {
     *     // ... data to create a StaffAccountAssignment
     *   }
     * })
     * 
     */
    create<T extends StaffAccountAssignmentCreateArgs>(args: SelectSubset<T, StaffAccountAssignmentCreateArgs<ExtArgs>>): Prisma__StaffAccountAssignmentClient<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffAccountAssignments.
     * @param {StaffAccountAssignmentCreateManyArgs} args - Arguments to create many StaffAccountAssignments.
     * @example
     * // Create many StaffAccountAssignments
     * const staffAccountAssignment = await prisma.staffAccountAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffAccountAssignmentCreateManyArgs>(args?: SelectSubset<T, StaffAccountAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffAccountAssignments and returns the data saved in the database.
     * @param {StaffAccountAssignmentCreateManyAndReturnArgs} args - Arguments to create many StaffAccountAssignments.
     * @example
     * // Create many StaffAccountAssignments
     * const staffAccountAssignment = await prisma.staffAccountAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffAccountAssignments and only return the `id`
     * const staffAccountAssignmentWithIdOnly = await prisma.staffAccountAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffAccountAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffAccountAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffAccountAssignment.
     * @param {StaffAccountAssignmentDeleteArgs} args - Arguments to delete one StaffAccountAssignment.
     * @example
     * // Delete one StaffAccountAssignment
     * const StaffAccountAssignment = await prisma.staffAccountAssignment.delete({
     *   where: {
     *     // ... filter to delete one StaffAccountAssignment
     *   }
     * })
     * 
     */
    delete<T extends StaffAccountAssignmentDeleteArgs>(args: SelectSubset<T, StaffAccountAssignmentDeleteArgs<ExtArgs>>): Prisma__StaffAccountAssignmentClient<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffAccountAssignment.
     * @param {StaffAccountAssignmentUpdateArgs} args - Arguments to update one StaffAccountAssignment.
     * @example
     * // Update one StaffAccountAssignment
     * const staffAccountAssignment = await prisma.staffAccountAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffAccountAssignmentUpdateArgs>(args: SelectSubset<T, StaffAccountAssignmentUpdateArgs<ExtArgs>>): Prisma__StaffAccountAssignmentClient<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffAccountAssignments.
     * @param {StaffAccountAssignmentDeleteManyArgs} args - Arguments to filter StaffAccountAssignments to delete.
     * @example
     * // Delete a few StaffAccountAssignments
     * const { count } = await prisma.staffAccountAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffAccountAssignmentDeleteManyArgs>(args?: SelectSubset<T, StaffAccountAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffAccountAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffAccountAssignments
     * const staffAccountAssignment = await prisma.staffAccountAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffAccountAssignmentUpdateManyArgs>(args: SelectSubset<T, StaffAccountAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffAccountAssignments and returns the data updated in the database.
     * @param {StaffAccountAssignmentUpdateManyAndReturnArgs} args - Arguments to update many StaffAccountAssignments.
     * @example
     * // Update many StaffAccountAssignments
     * const staffAccountAssignment = await prisma.staffAccountAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffAccountAssignments and only return the `id`
     * const staffAccountAssignmentWithIdOnly = await prisma.staffAccountAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffAccountAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffAccountAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffAccountAssignment.
     * @param {StaffAccountAssignmentUpsertArgs} args - Arguments to update or create a StaffAccountAssignment.
     * @example
     * // Update or create a StaffAccountAssignment
     * const staffAccountAssignment = await prisma.staffAccountAssignment.upsert({
     *   create: {
     *     // ... data to create a StaffAccountAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffAccountAssignment we want to update
     *   }
     * })
     */
    upsert<T extends StaffAccountAssignmentUpsertArgs>(args: SelectSubset<T, StaffAccountAssignmentUpsertArgs<ExtArgs>>): Prisma__StaffAccountAssignmentClient<$Result.GetResult<Prisma.$StaffAccountAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffAccountAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountAssignmentCountArgs} args - Arguments to filter StaffAccountAssignments to count.
     * @example
     * // Count the number of StaffAccountAssignments
     * const count = await prisma.staffAccountAssignment.count({
     *   where: {
     *     // ... the filter for the StaffAccountAssignments we want to count
     *   }
     * })
    **/
    count<T extends StaffAccountAssignmentCountArgs>(
      args?: Subset<T, StaffAccountAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffAccountAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffAccountAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAccountAssignmentAggregateArgs>(args: Subset<T, StaffAccountAssignmentAggregateArgs>): Prisma.PrismaPromise<GetStaffAccountAssignmentAggregateType<T>>

    /**
     * Group by StaffAccountAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAccountAssignmentGroupByArgs} args - Group by arguments.
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
      T extends StaffAccountAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffAccountAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: StaffAccountAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffAccountAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffAccountAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffAccountAssignment model
   */
  readonly fields: StaffAccountAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffAccountAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffAccountAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bankAccount<T extends BankAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankAccountDefaultArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends StaffAccountAssignment$UserArgs<ExtArgs> = {}>(args?: Subset<T, StaffAccountAssignment$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StaffAccountAssignment model
   */
  interface StaffAccountAssignmentFieldRefs {
    readonly id: FieldRef<"StaffAccountAssignment", 'String'>
    readonly userId: FieldRef<"StaffAccountAssignment", 'String'>
    readonly accountId: FieldRef<"StaffAccountAssignment", 'String'>
    readonly assignedById: FieldRef<"StaffAccountAssignment", 'String'>
    readonly createdAt: FieldRef<"StaffAccountAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffAccountAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffAccountAssignment findUnique
   */
  export type StaffAccountAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StaffAccountAssignment to fetch.
     */
    where: StaffAccountAssignmentWhereUniqueInput
  }

  /**
   * StaffAccountAssignment findUniqueOrThrow
   */
  export type StaffAccountAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StaffAccountAssignment to fetch.
     */
    where: StaffAccountAssignmentWhereUniqueInput
  }

  /**
   * StaffAccountAssignment findFirst
   */
  export type StaffAccountAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StaffAccountAssignment to fetch.
     */
    where?: StaffAccountAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAccountAssignments to fetch.
     */
    orderBy?: StaffAccountAssignmentOrderByWithRelationInput | StaffAccountAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffAccountAssignments.
     */
    cursor?: StaffAccountAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAccountAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAccountAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAccountAssignments.
     */
    distinct?: StaffAccountAssignmentScalarFieldEnum | StaffAccountAssignmentScalarFieldEnum[]
  }

  /**
   * StaffAccountAssignment findFirstOrThrow
   */
  export type StaffAccountAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StaffAccountAssignment to fetch.
     */
    where?: StaffAccountAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAccountAssignments to fetch.
     */
    orderBy?: StaffAccountAssignmentOrderByWithRelationInput | StaffAccountAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffAccountAssignments.
     */
    cursor?: StaffAccountAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAccountAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAccountAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffAccountAssignments.
     */
    distinct?: StaffAccountAssignmentScalarFieldEnum | StaffAccountAssignmentScalarFieldEnum[]
  }

  /**
   * StaffAccountAssignment findMany
   */
  export type StaffAccountAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which StaffAccountAssignments to fetch.
     */
    where?: StaffAccountAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffAccountAssignments to fetch.
     */
    orderBy?: StaffAccountAssignmentOrderByWithRelationInput | StaffAccountAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffAccountAssignments.
     */
    cursor?: StaffAccountAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffAccountAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffAccountAssignments.
     */
    skip?: number
    distinct?: StaffAccountAssignmentScalarFieldEnum | StaffAccountAssignmentScalarFieldEnum[]
  }

  /**
   * StaffAccountAssignment create
   */
  export type StaffAccountAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffAccountAssignment.
     */
    data: XOR<StaffAccountAssignmentCreateInput, StaffAccountAssignmentUncheckedCreateInput>
  }

  /**
   * StaffAccountAssignment createMany
   */
  export type StaffAccountAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffAccountAssignments.
     */
    data: StaffAccountAssignmentCreateManyInput | StaffAccountAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffAccountAssignment createManyAndReturn
   */
  export type StaffAccountAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many StaffAccountAssignments.
     */
    data: StaffAccountAssignmentCreateManyInput | StaffAccountAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffAccountAssignment update
   */
  export type StaffAccountAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffAccountAssignment.
     */
    data: XOR<StaffAccountAssignmentUpdateInput, StaffAccountAssignmentUncheckedUpdateInput>
    /**
     * Choose, which StaffAccountAssignment to update.
     */
    where: StaffAccountAssignmentWhereUniqueInput
  }

  /**
   * StaffAccountAssignment updateMany
   */
  export type StaffAccountAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffAccountAssignments.
     */
    data: XOR<StaffAccountAssignmentUpdateManyMutationInput, StaffAccountAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which StaffAccountAssignments to update
     */
    where?: StaffAccountAssignmentWhereInput
    /**
     * Limit how many StaffAccountAssignments to update.
     */
    limit?: number
  }

  /**
   * StaffAccountAssignment updateManyAndReturn
   */
  export type StaffAccountAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update StaffAccountAssignments.
     */
    data: XOR<StaffAccountAssignmentUpdateManyMutationInput, StaffAccountAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which StaffAccountAssignments to update
     */
    where?: StaffAccountAssignmentWhereInput
    /**
     * Limit how many StaffAccountAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffAccountAssignment upsert
   */
  export type StaffAccountAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffAccountAssignment to update in case it exists.
     */
    where: StaffAccountAssignmentWhereUniqueInput
    /**
     * In case the StaffAccountAssignment found by the `where` argument doesn't exist, create a new StaffAccountAssignment with this data.
     */
    create: XOR<StaffAccountAssignmentCreateInput, StaffAccountAssignmentUncheckedCreateInput>
    /**
     * In case the StaffAccountAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffAccountAssignmentUpdateInput, StaffAccountAssignmentUncheckedUpdateInput>
  }

  /**
   * StaffAccountAssignment delete
   */
  export type StaffAccountAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
    /**
     * Filter which StaffAccountAssignment to delete.
     */
    where: StaffAccountAssignmentWhereUniqueInput
  }

  /**
   * StaffAccountAssignment deleteMany
   */
  export type StaffAccountAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffAccountAssignments to delete
     */
    where?: StaffAccountAssignmentWhereInput
    /**
     * Limit how many StaffAccountAssignments to delete.
     */
    limit?: number
  }

  /**
   * StaffAccountAssignment.User
   */
  export type StaffAccountAssignment$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * StaffAccountAssignment without action
   */
  export type StaffAccountAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffAccountAssignment
     */
    select?: StaffAccountAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffAccountAssignment
     */
    omit?: StaffAccountAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffAccountAssignmentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    phone: 'phone',
    email: 'email',
    password: 'password',
    avatarUrl: 'avatarUrl',
    role: 'role',
    isActive: 'isActive',
    refreshToken: 'refreshToken',
    deactivatedAt: 'deactivatedAt',
    deactivatedById: 'deactivatedById',
    deactivationReason: 'deactivationReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresIn: 'expiresIn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const TransactionClassificationScalarFieldEnum: {
    id: 'id',
    code: 'code',
    category: 'category',
    label: 'label',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionClassificationScalarFieldEnum = (typeof TransactionClassificationScalarFieldEnum)[keyof typeof TransactionClassificationScalarFieldEnum]


  export const BankTransactionScalarFieldEnum: {
    id: 'id',
    bankAccountId: 'bankAccountId',
    uploadedById: 'uploadedById',
    transactionDate: 'transactionDate',
    valueDate: 'valueDate',
    amount: 'amount',
    type: 'type',
    description: 'description',
    reference: 'reference',
    chequeNo: 'chequeNo',
    tellerNo: 'tellerNo',
    currency: 'currency',
    classificationId: 'classificationId',
    user: 'user',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BankTransactionScalarFieldEnum = (typeof BankTransactionScalarFieldEnum)[keyof typeof BankTransactionScalarFieldEnum]


  export const BankAccountScalarFieldEnum: {
    id: 'id',
    accountCode: 'accountCode',
    accountNumber: 'accountNumber',
    accountName: 'accountName',
    accountType: 'accountType',
    currency: 'currency',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BankAccountScalarFieldEnum = (typeof BankAccountScalarFieldEnum)[keyof typeof BankAccountScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    companyName: 'companyName',
    email: 'email',
    address: 'address',
    phone: 'phone',
    country: 'country',
    state: 'state',
    city: 'city',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const AccountContractScalarFieldEnum: {
    id: 'id',
    bankAccountId: 'bankAccountId',
    returnChargeRate: 'returnChargeRate',
    returnChargeLimit: 'returnChargeLimit',
    cotCovenantRate: 'cotCovenantRate',
    cotOffCoverRate: 'cotOffCoverRate',
    cotOICRate: 'cotOICRate',
    turnoverLimit: 'turnoverLimit',
    cotCovenantFrequency: 'cotCovenantFrequency',
    chargeCOTOnShortfall: 'chargeCOTOnShortfall',
    creditInterestRate: 'creditInterestRate',
    debitRate: 'debitRate',
    excessRate: 'excessRate',
    excessRateType: 'excessRateType',
    vatRate: 'vatRate',
    whtRate: 'whtRate',
    rateType: 'rateType',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountContractScalarFieldEnum = (typeof AccountContractScalarFieldEnum)[keyof typeof AccountContractScalarFieldEnum]


  export const StaffAccountAssignmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    assignedById: 'assignedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffAccountAssignmentScalarFieldEnum = (typeof StaffAccountAssignmentScalarFieldEnum)[keyof typeof StaffAccountAssignmentScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ClassificationCode'
   */
  export type EnumClassificationCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassificationCode'>
    


  /**
   * Reference to a field of type 'ClassificationCode[]'
   */
  export type ListEnumClassificationCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassificationCode[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    deactivatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deactivatedById?: StringNullableFilter<"User"> | string | null
    deactivationReason?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tokens?: TokenListRelationFilter
    BankTransaction?: BankTransactionListRelationFilter
    StaffAccountAssignment?: StaffAccountAssignmentListRelationFilter
    permissions?: PermissionListRelationFilter
    uploadedTransactions?: BankTransactionListRelationFilter
    staffAssignments?: StaffAccountAssignmentListRelationFilter
    assignedStaffAccounts?: StaffAccountAssignmentListRelationFilter
    deactivatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deactivatedUsers?: UserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    deactivatedAt?: SortOrderInput | SortOrder
    deactivatedById?: SortOrderInput | SortOrder
    deactivationReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tokens?: TokenOrderByRelationAggregateInput
    BankTransaction?: BankTransactionOrderByRelationAggregateInput
    StaffAccountAssignment?: StaffAccountAssignmentOrderByRelationAggregateInput
    permissions?: PermissionOrderByRelationAggregateInput
    uploadedTransactions?: BankTransactionOrderByRelationAggregateInput
    staffAssignments?: StaffAccountAssignmentOrderByRelationAggregateInput
    assignedStaffAccounts?: StaffAccountAssignmentOrderByRelationAggregateInput
    deactivatedBy?: UserOrderByWithRelationInput
    deactivatedUsers?: UserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    phone?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    deactivatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deactivatedById?: StringNullableFilter<"User"> | string | null
    deactivationReason?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tokens?: TokenListRelationFilter
    BankTransaction?: BankTransactionListRelationFilter
    StaffAccountAssignment?: StaffAccountAssignmentListRelationFilter
    permissions?: PermissionListRelationFilter
    uploadedTransactions?: BankTransactionListRelationFilter
    staffAssignments?: StaffAccountAssignmentListRelationFilter
    assignedStaffAccounts?: StaffAccountAssignmentListRelationFilter
    deactivatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deactivatedUsers?: UserListRelationFilter
  }, "id" | "username" | "phone" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    deactivatedAt?: SortOrderInput | SortOrder
    deactivatedById?: SortOrderInput | SortOrder
    deactivationReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    deactivatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deactivatedById?: StringNullableWithAggregatesFilter<"User"> | string | null
    deactivationReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    name?: StringFilter<"Permission"> | string
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    users?: UserListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    name?: StringWithAggregatesFilter<"Permission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    userId?: StringFilter<"Token"> | string
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    userId?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    expiresIn?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type TransactionClassificationWhereInput = {
    AND?: TransactionClassificationWhereInput | TransactionClassificationWhereInput[]
    OR?: TransactionClassificationWhereInput[]
    NOT?: TransactionClassificationWhereInput | TransactionClassificationWhereInput[]
    id?: StringFilter<"TransactionClassification"> | string
    code?: EnumClassificationCodeFilter<"TransactionClassification"> | $Enums.ClassificationCode
    category?: EnumCategoryFilter<"TransactionClassification"> | $Enums.Category
    label?: StringFilter<"TransactionClassification"> | string
    description?: StringNullableFilter<"TransactionClassification"> | string | null
    createdAt?: DateTimeFilter<"TransactionClassification"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionClassification"> | Date | string
    transactions?: BankTransactionListRelationFilter
  }

  export type TransactionClassificationOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    category?: SortOrder
    label?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: BankTransactionOrderByRelationAggregateInput
  }

  export type TransactionClassificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: $Enums.ClassificationCode
    AND?: TransactionClassificationWhereInput | TransactionClassificationWhereInput[]
    OR?: TransactionClassificationWhereInput[]
    NOT?: TransactionClassificationWhereInput | TransactionClassificationWhereInput[]
    category?: EnumCategoryFilter<"TransactionClassification"> | $Enums.Category
    label?: StringFilter<"TransactionClassification"> | string
    description?: StringNullableFilter<"TransactionClassification"> | string | null
    createdAt?: DateTimeFilter<"TransactionClassification"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionClassification"> | Date | string
    transactions?: BankTransactionListRelationFilter
  }, "id" | "code">

  export type TransactionClassificationOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    category?: SortOrder
    label?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionClassificationCountOrderByAggregateInput
    _max?: TransactionClassificationMaxOrderByAggregateInput
    _min?: TransactionClassificationMinOrderByAggregateInput
  }

  export type TransactionClassificationScalarWhereWithAggregatesInput = {
    AND?: TransactionClassificationScalarWhereWithAggregatesInput | TransactionClassificationScalarWhereWithAggregatesInput[]
    OR?: TransactionClassificationScalarWhereWithAggregatesInput[]
    NOT?: TransactionClassificationScalarWhereWithAggregatesInput | TransactionClassificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransactionClassification"> | string
    code?: EnumClassificationCodeWithAggregatesFilter<"TransactionClassification"> | $Enums.ClassificationCode
    category?: EnumCategoryWithAggregatesFilter<"TransactionClassification"> | $Enums.Category
    label?: StringWithAggregatesFilter<"TransactionClassification"> | string
    description?: StringNullableWithAggregatesFilter<"TransactionClassification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TransactionClassification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransactionClassification"> | Date | string
  }

  export type BankTransactionWhereInput = {
    AND?: BankTransactionWhereInput | BankTransactionWhereInput[]
    OR?: BankTransactionWhereInput[]
    NOT?: BankTransactionWhereInput | BankTransactionWhereInput[]
    id?: StringFilter<"BankTransaction"> | string
    bankAccountId?: StringFilter<"BankTransaction"> | string
    uploadedById?: StringFilter<"BankTransaction"> | string
    transactionDate?: DateTimeFilter<"BankTransaction"> | Date | string
    valueDate?: DateTimeFilter<"BankTransaction"> | Date | string
    amount?: FloatFilter<"BankTransaction"> | number
    type?: EnumTransactionTypeFilter<"BankTransaction"> | $Enums.TransactionType
    description?: StringFilter<"BankTransaction"> | string
    reference?: StringNullableFilter<"BankTransaction"> | string | null
    chequeNo?: StringNullableFilter<"BankTransaction"> | string | null
    tellerNo?: StringNullableFilter<"BankTransaction"> | string | null
    currency?: StringFilter<"BankTransaction"> | string
    classificationId?: StringFilter<"BankTransaction"> | string
    user?: StringNullableFilter<"BankTransaction"> | string | null
    createdAt?: DateTimeFilter<"BankTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"BankTransaction"> | Date | string
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    classification?: XOR<TransactionClassificationScalarRelationFilter, TransactionClassificationWhereInput>
    User?: UserListRelationFilter
  }

  export type BankTransactionOrderByWithRelationInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    uploadedById?: SortOrder
    transactionDate?: SortOrder
    valueDate?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    reference?: SortOrderInput | SortOrder
    chequeNo?: SortOrderInput | SortOrder
    tellerNo?: SortOrderInput | SortOrder
    currency?: SortOrder
    classificationId?: SortOrder
    user?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bankAccount?: BankAccountOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
    classification?: TransactionClassificationOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type BankTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BankTransactionWhereInput | BankTransactionWhereInput[]
    OR?: BankTransactionWhereInput[]
    NOT?: BankTransactionWhereInput | BankTransactionWhereInput[]
    bankAccountId?: StringFilter<"BankTransaction"> | string
    uploadedById?: StringFilter<"BankTransaction"> | string
    transactionDate?: DateTimeFilter<"BankTransaction"> | Date | string
    valueDate?: DateTimeFilter<"BankTransaction"> | Date | string
    amount?: FloatFilter<"BankTransaction"> | number
    type?: EnumTransactionTypeFilter<"BankTransaction"> | $Enums.TransactionType
    description?: StringFilter<"BankTransaction"> | string
    reference?: StringNullableFilter<"BankTransaction"> | string | null
    chequeNo?: StringNullableFilter<"BankTransaction"> | string | null
    tellerNo?: StringNullableFilter<"BankTransaction"> | string | null
    currency?: StringFilter<"BankTransaction"> | string
    classificationId?: StringFilter<"BankTransaction"> | string
    user?: StringNullableFilter<"BankTransaction"> | string | null
    createdAt?: DateTimeFilter<"BankTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"BankTransaction"> | Date | string
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    classification?: XOR<TransactionClassificationScalarRelationFilter, TransactionClassificationWhereInput>
    User?: UserListRelationFilter
  }, "id">

  export type BankTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    uploadedById?: SortOrder
    transactionDate?: SortOrder
    valueDate?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    reference?: SortOrderInput | SortOrder
    chequeNo?: SortOrderInput | SortOrder
    tellerNo?: SortOrderInput | SortOrder
    currency?: SortOrder
    classificationId?: SortOrder
    user?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BankTransactionCountOrderByAggregateInput
    _avg?: BankTransactionAvgOrderByAggregateInput
    _max?: BankTransactionMaxOrderByAggregateInput
    _min?: BankTransactionMinOrderByAggregateInput
    _sum?: BankTransactionSumOrderByAggregateInput
  }

  export type BankTransactionScalarWhereWithAggregatesInput = {
    AND?: BankTransactionScalarWhereWithAggregatesInput | BankTransactionScalarWhereWithAggregatesInput[]
    OR?: BankTransactionScalarWhereWithAggregatesInput[]
    NOT?: BankTransactionScalarWhereWithAggregatesInput | BankTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BankTransaction"> | string
    bankAccountId?: StringWithAggregatesFilter<"BankTransaction"> | string
    uploadedById?: StringWithAggregatesFilter<"BankTransaction"> | string
    transactionDate?: DateTimeWithAggregatesFilter<"BankTransaction"> | Date | string
    valueDate?: DateTimeWithAggregatesFilter<"BankTransaction"> | Date | string
    amount?: FloatWithAggregatesFilter<"BankTransaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"BankTransaction"> | $Enums.TransactionType
    description?: StringWithAggregatesFilter<"BankTransaction"> | string
    reference?: StringNullableWithAggregatesFilter<"BankTransaction"> | string | null
    chequeNo?: StringNullableWithAggregatesFilter<"BankTransaction"> | string | null
    tellerNo?: StringNullableWithAggregatesFilter<"BankTransaction"> | string | null
    currency?: StringWithAggregatesFilter<"BankTransaction"> | string
    classificationId?: StringWithAggregatesFilter<"BankTransaction"> | string
    user?: StringNullableWithAggregatesFilter<"BankTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BankTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BankTransaction"> | Date | string
  }

  export type BankAccountWhereInput = {
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    id?: StringFilter<"BankAccount"> | string
    accountCode?: StringFilter<"BankAccount"> | string
    accountNumber?: StringFilter<"BankAccount"> | string
    accountName?: StringFilter<"BankAccount"> | string
    accountType?: EnumAccountTypeFilter<"BankAccount"> | $Enums.AccountType
    currency?: StringFilter<"BankAccount"> | string
    clientId?: StringFilter<"BankAccount"> | string
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
    contract?: XOR<AccountContractNullableScalarRelationFilter, AccountContractWhereInput> | null
    staffAssignments?: StaffAccountAssignmentListRelationFilter
    transactions?: BankTransactionListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type BankAccountOrderByWithRelationInput = {
    id?: SortOrder
    accountCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    accountType?: SortOrder
    currency?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contract?: AccountContractOrderByWithRelationInput
    staffAssignments?: StaffAccountAssignmentOrderByRelationAggregateInput
    transactions?: BankTransactionOrderByRelationAggregateInput
    client?: ClientOrderByWithRelationInput
  }

  export type BankAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountCode?: string
    accountNumber?: string
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    accountName?: StringFilter<"BankAccount"> | string
    accountType?: EnumAccountTypeFilter<"BankAccount"> | $Enums.AccountType
    currency?: StringFilter<"BankAccount"> | string
    clientId?: StringFilter<"BankAccount"> | string
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
    contract?: XOR<AccountContractNullableScalarRelationFilter, AccountContractWhereInput> | null
    staffAssignments?: StaffAccountAssignmentListRelationFilter
    transactions?: BankTransactionListRelationFilter
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "accountCode" | "accountNumber">

  export type BankAccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    accountType?: SortOrder
    currency?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BankAccountCountOrderByAggregateInput
    _max?: BankAccountMaxOrderByAggregateInput
    _min?: BankAccountMinOrderByAggregateInput
  }

  export type BankAccountScalarWhereWithAggregatesInput = {
    AND?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    OR?: BankAccountScalarWhereWithAggregatesInput[]
    NOT?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BankAccount"> | string
    accountCode?: StringWithAggregatesFilter<"BankAccount"> | string
    accountNumber?: StringWithAggregatesFilter<"BankAccount"> | string
    accountName?: StringWithAggregatesFilter<"BankAccount"> | string
    accountType?: EnumAccountTypeWithAggregatesFilter<"BankAccount"> | $Enums.AccountType
    currency?: StringWithAggregatesFilter<"BankAccount"> | string
    clientId?: StringWithAggregatesFilter<"BankAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    firstName?: StringFilter<"Client"> | string
    lastName?: StringFilter<"Client"> | string
    companyName?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    address?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    country?: StringNullableFilter<"Client"> | string | null
    state?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    avatarUrl?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    accounts?: BankAccountListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: BankAccountOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyName?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    firstName?: StringFilter<"Client"> | string
    lastName?: StringFilter<"Client"> | string
    address?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    country?: StringNullableFilter<"Client"> | string | null
    state?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    avatarUrl?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    accounts?: BankAccountListRelationFilter
  }, "id" | "companyName" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    firstName?: StringWithAggregatesFilter<"Client"> | string
    lastName?: StringWithAggregatesFilter<"Client"> | string
    companyName?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    address?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    country?: StringNullableWithAggregatesFilter<"Client"> | string | null
    state?: StringNullableWithAggregatesFilter<"Client"> | string | null
    city?: StringNullableWithAggregatesFilter<"Client"> | string | null
    avatarUrl?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type AccountContractWhereInput = {
    AND?: AccountContractWhereInput | AccountContractWhereInput[]
    OR?: AccountContractWhereInput[]
    NOT?: AccountContractWhereInput | AccountContractWhereInput[]
    id?: StringFilter<"AccountContract"> | string
    bankAccountId?: StringFilter<"AccountContract"> | string
    returnChargeRate?: FloatNullableFilter<"AccountContract"> | number | null
    returnChargeLimit?: FloatNullableFilter<"AccountContract"> | number | null
    cotCovenantRate?: FloatNullableFilter<"AccountContract"> | number | null
    cotOffCoverRate?: FloatNullableFilter<"AccountContract"> | number | null
    cotOICRate?: FloatNullableFilter<"AccountContract"> | number | null
    turnoverLimit?: FloatNullableFilter<"AccountContract"> | number | null
    cotCovenantFrequency?: StringNullableFilter<"AccountContract"> | string | null
    chargeCOTOnShortfall?: BoolNullableFilter<"AccountContract"> | boolean | null
    creditInterestRate?: FloatNullableFilter<"AccountContract"> | number | null
    debitRate?: FloatNullableFilter<"AccountContract"> | number | null
    excessRate?: FloatNullableFilter<"AccountContract"> | number | null
    excessRateType?: StringNullableFilter<"AccountContract"> | string | null
    vatRate?: FloatNullableFilter<"AccountContract"> | number | null
    whtRate?: FloatNullableFilter<"AccountContract"> | number | null
    rateType?: StringNullableFilter<"AccountContract"> | string | null
    effectiveFrom?: DateTimeNullableFilter<"AccountContract"> | Date | string | null
    effectiveTo?: DateTimeNullableFilter<"AccountContract"> | Date | string | null
    createdAt?: DateTimeFilter<"AccountContract"> | Date | string
    updatedAt?: DateTimeFilter<"AccountContract"> | Date | string
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
  }

  export type AccountContractOrderByWithRelationInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    returnChargeRate?: SortOrderInput | SortOrder
    returnChargeLimit?: SortOrderInput | SortOrder
    cotCovenantRate?: SortOrderInput | SortOrder
    cotOffCoverRate?: SortOrderInput | SortOrder
    cotOICRate?: SortOrderInput | SortOrder
    turnoverLimit?: SortOrderInput | SortOrder
    cotCovenantFrequency?: SortOrderInput | SortOrder
    chargeCOTOnShortfall?: SortOrderInput | SortOrder
    creditInterestRate?: SortOrderInput | SortOrder
    debitRate?: SortOrderInput | SortOrder
    excessRate?: SortOrderInput | SortOrder
    excessRateType?: SortOrderInput | SortOrder
    vatRate?: SortOrderInput | SortOrder
    whtRate?: SortOrderInput | SortOrder
    rateType?: SortOrderInput | SortOrder
    effectiveFrom?: SortOrderInput | SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bankAccount?: BankAccountOrderByWithRelationInput
  }

  export type AccountContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bankAccountId?: string
    AND?: AccountContractWhereInput | AccountContractWhereInput[]
    OR?: AccountContractWhereInput[]
    NOT?: AccountContractWhereInput | AccountContractWhereInput[]
    returnChargeRate?: FloatNullableFilter<"AccountContract"> | number | null
    returnChargeLimit?: FloatNullableFilter<"AccountContract"> | number | null
    cotCovenantRate?: FloatNullableFilter<"AccountContract"> | number | null
    cotOffCoverRate?: FloatNullableFilter<"AccountContract"> | number | null
    cotOICRate?: FloatNullableFilter<"AccountContract"> | number | null
    turnoverLimit?: FloatNullableFilter<"AccountContract"> | number | null
    cotCovenantFrequency?: StringNullableFilter<"AccountContract"> | string | null
    chargeCOTOnShortfall?: BoolNullableFilter<"AccountContract"> | boolean | null
    creditInterestRate?: FloatNullableFilter<"AccountContract"> | number | null
    debitRate?: FloatNullableFilter<"AccountContract"> | number | null
    excessRate?: FloatNullableFilter<"AccountContract"> | number | null
    excessRateType?: StringNullableFilter<"AccountContract"> | string | null
    vatRate?: FloatNullableFilter<"AccountContract"> | number | null
    whtRate?: FloatNullableFilter<"AccountContract"> | number | null
    rateType?: StringNullableFilter<"AccountContract"> | string | null
    effectiveFrom?: DateTimeNullableFilter<"AccountContract"> | Date | string | null
    effectiveTo?: DateTimeNullableFilter<"AccountContract"> | Date | string | null
    createdAt?: DateTimeFilter<"AccountContract"> | Date | string
    updatedAt?: DateTimeFilter<"AccountContract"> | Date | string
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
  }, "id" | "bankAccountId">

  export type AccountContractOrderByWithAggregationInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    returnChargeRate?: SortOrderInput | SortOrder
    returnChargeLimit?: SortOrderInput | SortOrder
    cotCovenantRate?: SortOrderInput | SortOrder
    cotOffCoverRate?: SortOrderInput | SortOrder
    cotOICRate?: SortOrderInput | SortOrder
    turnoverLimit?: SortOrderInput | SortOrder
    cotCovenantFrequency?: SortOrderInput | SortOrder
    chargeCOTOnShortfall?: SortOrderInput | SortOrder
    creditInterestRate?: SortOrderInput | SortOrder
    debitRate?: SortOrderInput | SortOrder
    excessRate?: SortOrderInput | SortOrder
    excessRateType?: SortOrderInput | SortOrder
    vatRate?: SortOrderInput | SortOrder
    whtRate?: SortOrderInput | SortOrder
    rateType?: SortOrderInput | SortOrder
    effectiveFrom?: SortOrderInput | SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountContractCountOrderByAggregateInput
    _avg?: AccountContractAvgOrderByAggregateInput
    _max?: AccountContractMaxOrderByAggregateInput
    _min?: AccountContractMinOrderByAggregateInput
    _sum?: AccountContractSumOrderByAggregateInput
  }

  export type AccountContractScalarWhereWithAggregatesInput = {
    AND?: AccountContractScalarWhereWithAggregatesInput | AccountContractScalarWhereWithAggregatesInput[]
    OR?: AccountContractScalarWhereWithAggregatesInput[]
    NOT?: AccountContractScalarWhereWithAggregatesInput | AccountContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountContract"> | string
    bankAccountId?: StringWithAggregatesFilter<"AccountContract"> | string
    returnChargeRate?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    returnChargeLimit?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    cotCovenantRate?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    cotOffCoverRate?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    cotOICRate?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    turnoverLimit?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    cotCovenantFrequency?: StringNullableWithAggregatesFilter<"AccountContract"> | string | null
    chargeCOTOnShortfall?: BoolNullableWithAggregatesFilter<"AccountContract"> | boolean | null
    creditInterestRate?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    debitRate?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    excessRate?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    excessRateType?: StringNullableWithAggregatesFilter<"AccountContract"> | string | null
    vatRate?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    whtRate?: FloatNullableWithAggregatesFilter<"AccountContract"> | number | null
    rateType?: StringNullableWithAggregatesFilter<"AccountContract"> | string | null
    effectiveFrom?: DateTimeNullableWithAggregatesFilter<"AccountContract"> | Date | string | null
    effectiveTo?: DateTimeNullableWithAggregatesFilter<"AccountContract"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AccountContract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountContract"> | Date | string
  }

  export type StaffAccountAssignmentWhereInput = {
    AND?: StaffAccountAssignmentWhereInput | StaffAccountAssignmentWhereInput[]
    OR?: StaffAccountAssignmentWhereInput[]
    NOT?: StaffAccountAssignmentWhereInput | StaffAccountAssignmentWhereInput[]
    id?: StringFilter<"StaffAccountAssignment"> | string
    userId?: StringFilter<"StaffAccountAssignment"> | string
    accountId?: StringFilter<"StaffAccountAssignment"> | string
    assignedById?: StringFilter<"StaffAccountAssignment"> | string
    createdAt?: DateTimeFilter<"StaffAccountAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAccountAssignment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
    assignedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    User?: UserListRelationFilter
  }

  export type StaffAccountAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    assignedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bankAccount?: BankAccountOrderByWithRelationInput
    assignedBy?: UserOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type StaffAccountAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_accountId?: StaffAccountAssignmentUserIdAccountIdCompoundUniqueInput
    AND?: StaffAccountAssignmentWhereInput | StaffAccountAssignmentWhereInput[]
    OR?: StaffAccountAssignmentWhereInput[]
    NOT?: StaffAccountAssignmentWhereInput | StaffAccountAssignmentWhereInput[]
    userId?: StringFilter<"StaffAccountAssignment"> | string
    accountId?: StringFilter<"StaffAccountAssignment"> | string
    assignedById?: StringFilter<"StaffAccountAssignment"> | string
    createdAt?: DateTimeFilter<"StaffAccountAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAccountAssignment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
    assignedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    User?: UserListRelationFilter
  }, "id" | "userId_accountId">

  export type StaffAccountAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    assignedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffAccountAssignmentCountOrderByAggregateInput
    _max?: StaffAccountAssignmentMaxOrderByAggregateInput
    _min?: StaffAccountAssignmentMinOrderByAggregateInput
  }

  export type StaffAccountAssignmentScalarWhereWithAggregatesInput = {
    AND?: StaffAccountAssignmentScalarWhereWithAggregatesInput | StaffAccountAssignmentScalarWhereWithAggregatesInput[]
    OR?: StaffAccountAssignmentScalarWhereWithAggregatesInput[]
    NOT?: StaffAccountAssignmentScalarWhereWithAggregatesInput | StaffAccountAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffAccountAssignment"> | string
    userId?: StringWithAggregatesFilter<"StaffAccountAssignment"> | string
    accountId?: StringWithAggregatesFilter<"StaffAccountAssignment"> | string
    assignedById?: StringWithAggregatesFilter<"StaffAccountAssignment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StaffAccountAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffAccountAssignment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentCreateNestedManyWithoutAssignedByInput
    deactivatedBy?: UserCreateNestedOneWithoutDeactivatedUsersInput
    deactivatedUsers?: UserCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivatedById?: string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionUncheckedCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutAssignedByInput
    deactivatedUsers?: UserUncheckedCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUpdateManyWithoutAssignedByNestedInput
    deactivatedBy?: UserUpdateOneWithoutDeactivatedUsersNestedInput
    deactivatedUsers?: UserUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUncheckedUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByNestedInput
    deactivatedUsers?: UserUncheckedUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivatedById?: string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    token: string
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionClassificationCreateInput = {
    id?: string
    code: $Enums.ClassificationCode
    category: $Enums.Category
    label: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: BankTransactionCreateNestedManyWithoutClassificationInput
  }

  export type TransactionClassificationUncheckedCreateInput = {
    id?: string
    code: $Enums.ClassificationCode
    category: $Enums.Category
    label: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutClassificationInput
  }

  export type TransactionClassificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumClassificationCodeFieldUpdateOperationsInput | $Enums.ClassificationCode
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: BankTransactionUpdateManyWithoutClassificationNestedInput
  }

  export type TransactionClassificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumClassificationCodeFieldUpdateOperationsInput | $Enums.ClassificationCode
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: BankTransactionUncheckedUpdateManyWithoutClassificationNestedInput
  }

  export type TransactionClassificationCreateManyInput = {
    id?: string
    code: $Enums.ClassificationCode
    category: $Enums.Category
    label: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionClassificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumClassificationCodeFieldUpdateOperationsInput | $Enums.ClassificationCode
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionClassificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumClassificationCodeFieldUpdateOperationsInput | $Enums.ClassificationCode
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionCreateInput = {
    id?: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutTransactionsInput
    uploadedBy: UserCreateNestedOneWithoutBankTransactionInput
    classification: TransactionClassificationCreateNestedOneWithoutTransactionsInput
    User?: UserCreateNestedManyWithoutUploadedTransactionsInput
  }

  export type BankTransactionUncheckedCreateInput = {
    id?: string
    bankAccountId: string
    uploadedById: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    classificationId: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutUploadedTransactionsInput
  }

  export type BankTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutTransactionsNestedInput
    uploadedBy?: UserUpdateOneRequiredWithoutBankTransactionNestedInput
    classification?: TransactionClassificationUpdateOneRequiredWithoutTransactionsNestedInput
    User?: UserUpdateManyWithoutUploadedTransactionsNestedInput
  }

  export type BankTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    classificationId?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutUploadedTransactionsNestedInput
  }

  export type BankTransactionCreateManyInput = {
    id?: string
    bankAccountId: string
    uploadedById: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    classificationId: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    classificationId?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: AccountContractCreateNestedOneWithoutBankAccountInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionCreateNestedManyWithoutBankAccountInput
    client: ClientCreateNestedOneWithoutAccountsInput
  }

  export type BankAccountUncheckedCreateInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: AccountContractUncheckedCreateNestedOneWithoutBankAccountInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: AccountContractUpdateOneWithoutBankAccountNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUpdateManyWithoutBankAccountNestedInput
    client?: ClientUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type BankAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: AccountContractUncheckedUpdateOneWithoutBankAccountNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountCreateManyInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    firstName: string
    lastName: string
    companyName: string
    email: string
    address?: string | null
    phone?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
    avatarUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: BankAccountCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    companyName: string
    email: string
    address?: string | null
    phone?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
    avatarUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: BankAccountUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: BankAccountUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: BankAccountUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    companyName: string
    email: string
    address?: string | null
    phone?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
    avatarUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountContractCreateInput = {
    id?: string
    returnChargeRate?: number | null
    returnChargeLimit?: number | null
    cotCovenantRate?: number | null
    cotOffCoverRate?: number | null
    cotOICRate?: number | null
    turnoverLimit?: number | null
    cotCovenantFrequency?: string | null
    chargeCOTOnShortfall?: boolean | null
    creditInterestRate?: number | null
    debitRate?: number | null
    excessRate?: number | null
    excessRateType?: string | null
    vatRate?: number | null
    whtRate?: number | null
    rateType?: string | null
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutContractInput
  }

  export type AccountContractUncheckedCreateInput = {
    id?: string
    bankAccountId: string
    returnChargeRate?: number | null
    returnChargeLimit?: number | null
    cotCovenantRate?: number | null
    cotOffCoverRate?: number | null
    cotOICRate?: number | null
    turnoverLimit?: number | null
    cotCovenantFrequency?: string | null
    chargeCOTOnShortfall?: boolean | null
    creditInterestRate?: number | null
    debitRate?: number | null
    excessRate?: number | null
    excessRateType?: string | null
    vatRate?: number | null
    whtRate?: number | null
    rateType?: string | null
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnChargeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    returnChargeLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOffCoverRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOICRate?: NullableFloatFieldUpdateOperationsInput | number | null
    turnoverLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    chargeCOTOnShortfall?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creditInterestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    debitRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRateType?: NullableStringFieldUpdateOperationsInput | string | null
    vatRate?: NullableFloatFieldUpdateOperationsInput | number | null
    whtRate?: NullableFloatFieldUpdateOperationsInput | number | null
    rateType?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutContractNestedInput
  }

  export type AccountContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    returnChargeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    returnChargeLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOffCoverRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOICRate?: NullableFloatFieldUpdateOperationsInput | number | null
    turnoverLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    chargeCOTOnShortfall?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creditInterestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    debitRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRateType?: NullableStringFieldUpdateOperationsInput | string | null
    vatRate?: NullableFloatFieldUpdateOperationsInput | number | null
    whtRate?: NullableFloatFieldUpdateOperationsInput | number | null
    rateType?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountContractCreateManyInput = {
    id?: string
    bankAccountId: string
    returnChargeRate?: number | null
    returnChargeLimit?: number | null
    cotCovenantRate?: number | null
    cotOffCoverRate?: number | null
    cotOICRate?: number | null
    turnoverLimit?: number | null
    cotCovenantFrequency?: string | null
    chargeCOTOnShortfall?: boolean | null
    creditInterestRate?: number | null
    debitRate?: number | null
    excessRate?: number | null
    excessRateType?: string | null
    vatRate?: number | null
    whtRate?: number | null
    rateType?: string | null
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnChargeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    returnChargeLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOffCoverRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOICRate?: NullableFloatFieldUpdateOperationsInput | number | null
    turnoverLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    chargeCOTOnShortfall?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creditInterestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    debitRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRateType?: NullableStringFieldUpdateOperationsInput | string | null
    vatRate?: NullableFloatFieldUpdateOperationsInput | number | null
    whtRate?: NullableFloatFieldUpdateOperationsInput | number | null
    rateType?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    returnChargeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    returnChargeLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOffCoverRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOICRate?: NullableFloatFieldUpdateOperationsInput | number | null
    turnoverLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    chargeCOTOnShortfall?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creditInterestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    debitRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRateType?: NullableStringFieldUpdateOperationsInput | string | null
    vatRate?: NullableFloatFieldUpdateOperationsInput | number | null
    whtRate?: NullableFloatFieldUpdateOperationsInput | number | null
    rateType?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountAssignmentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStaffAccountAssignmentInput
    bankAccount: BankAccountCreateNestedOneWithoutStaffAssignmentsInput
    assignedBy: UserCreateNestedOneWithoutAssignedStaffAccountsInput
    User?: UserCreateNestedManyWithoutStaffAssignmentsInput
  }

  export type StaffAccountAssignmentUncheckedCreateInput = {
    id?: string
    userId: string
    accountId: string
    assignedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutStaffAssignmentsInput
  }

  export type StaffAccountAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffAccountAssignmentNestedInput
    bankAccount?: BankAccountUpdateOneRequiredWithoutStaffAssignmentsNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutAssignedStaffAccountsNestedInput
    User?: UserUpdateManyWithoutStaffAssignmentsNestedInput
  }

  export type StaffAccountAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutStaffAssignmentsNestedInput
  }

  export type StaffAccountAssignmentCreateManyInput = {
    id?: string
    userId: string
    accountId: string
    assignedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAccountAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type BankTransactionListRelationFilter = {
    every?: BankTransactionWhereInput
    some?: BankTransactionWhereInput
    none?: BankTransactionWhereInput
  }

  export type StaffAccountAssignmentListRelationFilter = {
    every?: StaffAccountAssignmentWhereInput
    some?: StaffAccountAssignmentWhereInput
    none?: StaffAccountAssignmentWhereInput
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffAccountAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    deactivatedAt?: SortOrder
    deactivatedById?: SortOrder
    deactivationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    deactivatedAt?: SortOrder
    deactivatedById?: SortOrder
    deactivationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    deactivatedAt?: SortOrder
    deactivatedById?: SortOrder
    deactivationReason?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumClassificationCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassificationCode | EnumClassificationCodeFieldRefInput<$PrismaModel>
    in?: $Enums.ClassificationCode[] | ListEnumClassificationCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassificationCode[] | ListEnumClassificationCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumClassificationCodeFilter<$PrismaModel> | $Enums.ClassificationCode
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type TransactionClassificationCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    category?: SortOrder
    label?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionClassificationMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    category?: SortOrder
    label?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionClassificationMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    category?: SortOrder
    label?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumClassificationCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassificationCode | EnumClassificationCodeFieldRefInput<$PrismaModel>
    in?: $Enums.ClassificationCode[] | ListEnumClassificationCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassificationCode[] | ListEnumClassificationCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumClassificationCodeWithAggregatesFilter<$PrismaModel> | $Enums.ClassificationCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassificationCodeFilter<$PrismaModel>
    _max?: NestedEnumClassificationCodeFilter<$PrismaModel>
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type BankAccountScalarRelationFilter = {
    is?: BankAccountWhereInput
    isNot?: BankAccountWhereInput
  }

  export type TransactionClassificationScalarRelationFilter = {
    is?: TransactionClassificationWhereInput
    isNot?: TransactionClassificationWhereInput
  }

  export type BankTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    uploadedById?: SortOrder
    transactionDate?: SortOrder
    valueDate?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    chequeNo?: SortOrder
    tellerNo?: SortOrder
    currency?: SortOrder
    classificationId?: SortOrder
    user?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BankTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    uploadedById?: SortOrder
    transactionDate?: SortOrder
    valueDate?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    chequeNo?: SortOrder
    tellerNo?: SortOrder
    currency?: SortOrder
    classificationId?: SortOrder
    user?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    uploadedById?: SortOrder
    transactionDate?: SortOrder
    valueDate?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    chequeNo?: SortOrder
    tellerNo?: SortOrder
    currency?: SortOrder
    classificationId?: SortOrder
    user?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type AccountContractNullableScalarRelationFilter = {
    is?: AccountContractWhereInput | null
    isNot?: AccountContractWhereInput | null
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type BankAccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    accountType?: SortOrder
    currency?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    accountType?: SortOrder
    currency?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    accountType?: SortOrder
    currency?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type BankAccountListRelationFilter = {
    every?: BankAccountWhereInput
    some?: BankAccountWhereInput
    none?: BankAccountWhereInput
  }

  export type BankAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AccountContractCountOrderByAggregateInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    returnChargeRate?: SortOrder
    returnChargeLimit?: SortOrder
    cotCovenantRate?: SortOrder
    cotOffCoverRate?: SortOrder
    cotOICRate?: SortOrder
    turnoverLimit?: SortOrder
    cotCovenantFrequency?: SortOrder
    chargeCOTOnShortfall?: SortOrder
    creditInterestRate?: SortOrder
    debitRate?: SortOrder
    excessRate?: SortOrder
    excessRateType?: SortOrder
    vatRate?: SortOrder
    whtRate?: SortOrder
    rateType?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountContractAvgOrderByAggregateInput = {
    returnChargeRate?: SortOrder
    returnChargeLimit?: SortOrder
    cotCovenantRate?: SortOrder
    cotOffCoverRate?: SortOrder
    cotOICRate?: SortOrder
    turnoverLimit?: SortOrder
    creditInterestRate?: SortOrder
    debitRate?: SortOrder
    excessRate?: SortOrder
    vatRate?: SortOrder
    whtRate?: SortOrder
  }

  export type AccountContractMaxOrderByAggregateInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    returnChargeRate?: SortOrder
    returnChargeLimit?: SortOrder
    cotCovenantRate?: SortOrder
    cotOffCoverRate?: SortOrder
    cotOICRate?: SortOrder
    turnoverLimit?: SortOrder
    cotCovenantFrequency?: SortOrder
    chargeCOTOnShortfall?: SortOrder
    creditInterestRate?: SortOrder
    debitRate?: SortOrder
    excessRate?: SortOrder
    excessRateType?: SortOrder
    vatRate?: SortOrder
    whtRate?: SortOrder
    rateType?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountContractMinOrderByAggregateInput = {
    id?: SortOrder
    bankAccountId?: SortOrder
    returnChargeRate?: SortOrder
    returnChargeLimit?: SortOrder
    cotCovenantRate?: SortOrder
    cotOffCoverRate?: SortOrder
    cotOICRate?: SortOrder
    turnoverLimit?: SortOrder
    cotCovenantFrequency?: SortOrder
    chargeCOTOnShortfall?: SortOrder
    creditInterestRate?: SortOrder
    debitRate?: SortOrder
    excessRate?: SortOrder
    excessRateType?: SortOrder
    vatRate?: SortOrder
    whtRate?: SortOrder
    rateType?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountContractSumOrderByAggregateInput = {
    returnChargeRate?: SortOrder
    returnChargeLimit?: SortOrder
    cotCovenantRate?: SortOrder
    cotOffCoverRate?: SortOrder
    cotOICRate?: SortOrder
    turnoverLimit?: SortOrder
    creditInterestRate?: SortOrder
    debitRate?: SortOrder
    excessRate?: SortOrder
    vatRate?: SortOrder
    whtRate?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StaffAccountAssignmentUserIdAccountIdCompoundUniqueInput = {
    userId: string
    accountId: string
  }

  export type StaffAccountAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    assignedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffAccountAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    assignedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffAccountAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    assignedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type BankTransactionCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<BankTransactionCreateWithoutUploadedByInput, BankTransactionUncheckedCreateWithoutUploadedByInput> | BankTransactionCreateWithoutUploadedByInput[] | BankTransactionUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUploadedByInput | BankTransactionCreateOrConnectWithoutUploadedByInput[]
    createMany?: BankTransactionCreateManyUploadedByInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type StaffAccountAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput> | StaffAccountAssignmentCreateWithoutUserInput[] | StaffAccountAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutUserInput | StaffAccountAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: StaffAccountAssignmentCreateManyUserInputEnvelope
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutUsersInput = {
    create?: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput> | PermissionCreateWithoutUsersInput[] | PermissionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput | PermissionCreateOrConnectWithoutUsersInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type BankTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput> | BankTransactionCreateWithoutUserInput[] | BankTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUserInput | BankTransactionCreateOrConnectWithoutUserInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type StaffAccountAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput> | StaffAccountAssignmentCreateWithoutUserInput[] | StaffAccountAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutUserInput | StaffAccountAssignmentCreateOrConnectWithoutUserInput[]
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
  }

  export type StaffAccountAssignmentCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutAssignedByInput, StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput> | StaffAccountAssignmentCreateWithoutAssignedByInput[] | StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutAssignedByInput | StaffAccountAssignmentCreateOrConnectWithoutAssignedByInput[]
    createMany?: StaffAccountAssignmentCreateManyAssignedByInputEnvelope
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDeactivatedUsersInput = {
    create?: XOR<UserCreateWithoutDeactivatedUsersInput, UserUncheckedCreateWithoutDeactivatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeactivatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutDeactivatedByInput = {
    create?: XOR<UserCreateWithoutDeactivatedByInput, UserUncheckedCreateWithoutDeactivatedByInput> | UserCreateWithoutDeactivatedByInput[] | UserUncheckedCreateWithoutDeactivatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeactivatedByInput | UserCreateOrConnectWithoutDeactivatedByInput[]
    createMany?: UserCreateManyDeactivatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type BankTransactionUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<BankTransactionCreateWithoutUploadedByInput, BankTransactionUncheckedCreateWithoutUploadedByInput> | BankTransactionCreateWithoutUploadedByInput[] | BankTransactionUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUploadedByInput | BankTransactionCreateOrConnectWithoutUploadedByInput[]
    createMany?: BankTransactionCreateManyUploadedByInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput> | StaffAccountAssignmentCreateWithoutUserInput[] | StaffAccountAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutUserInput | StaffAccountAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: StaffAccountAssignmentCreateManyUserInputEnvelope
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput> | PermissionCreateWithoutUsersInput[] | PermissionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput | PermissionCreateOrConnectWithoutUsersInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type BankTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput> | BankTransactionCreateWithoutUserInput[] | BankTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUserInput | BankTransactionCreateOrConnectWithoutUserInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput> | StaffAccountAssignmentCreateWithoutUserInput[] | StaffAccountAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutUserInput | StaffAccountAssignmentCreateOrConnectWithoutUserInput[]
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
  }

  export type StaffAccountAssignmentUncheckedCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutAssignedByInput, StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput> | StaffAccountAssignmentCreateWithoutAssignedByInput[] | StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutAssignedByInput | StaffAccountAssignmentCreateOrConnectWithoutAssignedByInput[]
    createMany?: StaffAccountAssignmentCreateManyAssignedByInputEnvelope
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDeactivatedByInput = {
    create?: XOR<UserCreateWithoutDeactivatedByInput, UserUncheckedCreateWithoutDeactivatedByInput> | UserCreateWithoutDeactivatedByInput[] | UserUncheckedCreateWithoutDeactivatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeactivatedByInput | UserCreateOrConnectWithoutDeactivatedByInput[]
    createMany?: UserCreateManyDeactivatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type BankTransactionUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<BankTransactionCreateWithoutUploadedByInput, BankTransactionUncheckedCreateWithoutUploadedByInput> | BankTransactionCreateWithoutUploadedByInput[] | BankTransactionUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUploadedByInput | BankTransactionCreateOrConnectWithoutUploadedByInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutUploadedByInput | BankTransactionUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: BankTransactionCreateManyUploadedByInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutUploadedByInput | BankTransactionUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutUploadedByInput | BankTransactionUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type StaffAccountAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput> | StaffAccountAssignmentCreateWithoutUserInput[] | StaffAccountAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutUserInput | StaffAccountAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: StaffAccountAssignmentUpsertWithWhereUniqueWithoutUserInput | StaffAccountAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StaffAccountAssignmentCreateManyUserInputEnvelope
    set?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    disconnect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    delete?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    update?: StaffAccountAssignmentUpdateWithWhereUniqueWithoutUserInput | StaffAccountAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StaffAccountAssignmentUpdateManyWithWhereWithoutUserInput | StaffAccountAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StaffAccountAssignmentScalarWhereInput | StaffAccountAssignmentScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput> | PermissionCreateWithoutUsersInput[] | PermissionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput | PermissionCreateOrConnectWithoutUsersInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUsersInput | PermissionUpsertWithWhereUniqueWithoutUsersInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUsersInput | PermissionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUsersInput | PermissionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type BankTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput> | BankTransactionCreateWithoutUserInput[] | BankTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUserInput | BankTransactionCreateOrConnectWithoutUserInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutUserInput | BankTransactionUpsertWithWhereUniqueWithoutUserInput[]
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutUserInput | BankTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutUserInput | BankTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type StaffAccountAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput> | StaffAccountAssignmentCreateWithoutUserInput[] | StaffAccountAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutUserInput | StaffAccountAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: StaffAccountAssignmentUpsertWithWhereUniqueWithoutUserInput | StaffAccountAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    set?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    disconnect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    delete?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    update?: StaffAccountAssignmentUpdateWithWhereUniqueWithoutUserInput | StaffAccountAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StaffAccountAssignmentUpdateManyWithWhereWithoutUserInput | StaffAccountAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StaffAccountAssignmentScalarWhereInput | StaffAccountAssignmentScalarWhereInput[]
  }

  export type StaffAccountAssignmentUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutAssignedByInput, StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput> | StaffAccountAssignmentCreateWithoutAssignedByInput[] | StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutAssignedByInput | StaffAccountAssignmentCreateOrConnectWithoutAssignedByInput[]
    upsert?: StaffAccountAssignmentUpsertWithWhereUniqueWithoutAssignedByInput | StaffAccountAssignmentUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: StaffAccountAssignmentCreateManyAssignedByInputEnvelope
    set?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    disconnect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    delete?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    update?: StaffAccountAssignmentUpdateWithWhereUniqueWithoutAssignedByInput | StaffAccountAssignmentUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: StaffAccountAssignmentUpdateManyWithWhereWithoutAssignedByInput | StaffAccountAssignmentUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: StaffAccountAssignmentScalarWhereInput | StaffAccountAssignmentScalarWhereInput[]
  }

  export type UserUpdateOneWithoutDeactivatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutDeactivatedUsersInput, UserUncheckedCreateWithoutDeactivatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeactivatedUsersInput
    upsert?: UserUpsertWithoutDeactivatedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeactivatedUsersInput, UserUpdateWithoutDeactivatedUsersInput>, UserUncheckedUpdateWithoutDeactivatedUsersInput>
  }

  export type UserUpdateManyWithoutDeactivatedByNestedInput = {
    create?: XOR<UserCreateWithoutDeactivatedByInput, UserUncheckedCreateWithoutDeactivatedByInput> | UserCreateWithoutDeactivatedByInput[] | UserUncheckedCreateWithoutDeactivatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeactivatedByInput | UserCreateOrConnectWithoutDeactivatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDeactivatedByInput | UserUpsertWithWhereUniqueWithoutDeactivatedByInput[]
    createMany?: UserCreateManyDeactivatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDeactivatedByInput | UserUpdateWithWhereUniqueWithoutDeactivatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDeactivatedByInput | UserUpdateManyWithWhereWithoutDeactivatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type BankTransactionUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<BankTransactionCreateWithoutUploadedByInput, BankTransactionUncheckedCreateWithoutUploadedByInput> | BankTransactionCreateWithoutUploadedByInput[] | BankTransactionUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUploadedByInput | BankTransactionCreateOrConnectWithoutUploadedByInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutUploadedByInput | BankTransactionUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: BankTransactionCreateManyUploadedByInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutUploadedByInput | BankTransactionUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutUploadedByInput | BankTransactionUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput> | StaffAccountAssignmentCreateWithoutUserInput[] | StaffAccountAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutUserInput | StaffAccountAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: StaffAccountAssignmentUpsertWithWhereUniqueWithoutUserInput | StaffAccountAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StaffAccountAssignmentCreateManyUserInputEnvelope
    set?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    disconnect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    delete?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    update?: StaffAccountAssignmentUpdateWithWhereUniqueWithoutUserInput | StaffAccountAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StaffAccountAssignmentUpdateManyWithWhereWithoutUserInput | StaffAccountAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StaffAccountAssignmentScalarWhereInput | StaffAccountAssignmentScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput> | PermissionCreateWithoutUsersInput[] | PermissionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUsersInput | PermissionCreateOrConnectWithoutUsersInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUsersInput | PermissionUpsertWithWhereUniqueWithoutUsersInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUsersInput | PermissionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUsersInput | PermissionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type BankTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput> | BankTransactionCreateWithoutUserInput[] | BankTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutUserInput | BankTransactionCreateOrConnectWithoutUserInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutUserInput | BankTransactionUpsertWithWhereUniqueWithoutUserInput[]
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutUserInput | BankTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutUserInput | BankTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput> | StaffAccountAssignmentCreateWithoutUserInput[] | StaffAccountAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutUserInput | StaffAccountAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: StaffAccountAssignmentUpsertWithWhereUniqueWithoutUserInput | StaffAccountAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    set?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    disconnect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    delete?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    update?: StaffAccountAssignmentUpdateWithWhereUniqueWithoutUserInput | StaffAccountAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StaffAccountAssignmentUpdateManyWithWhereWithoutUserInput | StaffAccountAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StaffAccountAssignmentScalarWhereInput | StaffAccountAssignmentScalarWhereInput[]
  }

  export type StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutAssignedByInput, StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput> | StaffAccountAssignmentCreateWithoutAssignedByInput[] | StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutAssignedByInput | StaffAccountAssignmentCreateOrConnectWithoutAssignedByInput[]
    upsert?: StaffAccountAssignmentUpsertWithWhereUniqueWithoutAssignedByInput | StaffAccountAssignmentUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: StaffAccountAssignmentCreateManyAssignedByInputEnvelope
    set?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    disconnect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    delete?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    update?: StaffAccountAssignmentUpdateWithWhereUniqueWithoutAssignedByInput | StaffAccountAssignmentUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: StaffAccountAssignmentUpdateManyWithWhereWithoutAssignedByInput | StaffAccountAssignmentUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: StaffAccountAssignmentScalarWhereInput | StaffAccountAssignmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDeactivatedByNestedInput = {
    create?: XOR<UserCreateWithoutDeactivatedByInput, UserUncheckedCreateWithoutDeactivatedByInput> | UserCreateWithoutDeactivatedByInput[] | UserUncheckedCreateWithoutDeactivatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeactivatedByInput | UserCreateOrConnectWithoutDeactivatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDeactivatedByInput | UserUpsertWithWhereUniqueWithoutDeactivatedByInput[]
    createMany?: UserCreateManyDeactivatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDeactivatedByInput | UserUpdateWithWhereUniqueWithoutDeactivatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDeactivatedByInput | UserUpdateManyWithWhereWithoutDeactivatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput> | UserCreateWithoutPermissionsInput[] | UserUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput | UserCreateOrConnectWithoutPermissionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput> | UserCreateWithoutPermissionsInput[] | UserUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput | UserCreateOrConnectWithoutPermissionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput> | UserCreateWithoutPermissionsInput[] | UserUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput | UserCreateOrConnectWithoutPermissionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPermissionsInput | UserUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPermissionsInput | UserUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPermissionsInput | UserUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput> | UserCreateWithoutPermissionsInput[] | UserUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput | UserCreateOrConnectWithoutPermissionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPermissionsInput | UserUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPermissionsInput | UserUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPermissionsInput | UserUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type BankTransactionCreateNestedManyWithoutClassificationInput = {
    create?: XOR<BankTransactionCreateWithoutClassificationInput, BankTransactionUncheckedCreateWithoutClassificationInput> | BankTransactionCreateWithoutClassificationInput[] | BankTransactionUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutClassificationInput | BankTransactionCreateOrConnectWithoutClassificationInput[]
    createMany?: BankTransactionCreateManyClassificationInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type BankTransactionUncheckedCreateNestedManyWithoutClassificationInput = {
    create?: XOR<BankTransactionCreateWithoutClassificationInput, BankTransactionUncheckedCreateWithoutClassificationInput> | BankTransactionCreateWithoutClassificationInput[] | BankTransactionUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutClassificationInput | BankTransactionCreateOrConnectWithoutClassificationInput[]
    createMany?: BankTransactionCreateManyClassificationInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type EnumClassificationCodeFieldUpdateOperationsInput = {
    set?: $Enums.ClassificationCode
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type BankTransactionUpdateManyWithoutClassificationNestedInput = {
    create?: XOR<BankTransactionCreateWithoutClassificationInput, BankTransactionUncheckedCreateWithoutClassificationInput> | BankTransactionCreateWithoutClassificationInput[] | BankTransactionUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutClassificationInput | BankTransactionCreateOrConnectWithoutClassificationInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutClassificationInput | BankTransactionUpsertWithWhereUniqueWithoutClassificationInput[]
    createMany?: BankTransactionCreateManyClassificationInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutClassificationInput | BankTransactionUpdateWithWhereUniqueWithoutClassificationInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutClassificationInput | BankTransactionUpdateManyWithWhereWithoutClassificationInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type BankTransactionUncheckedUpdateManyWithoutClassificationNestedInput = {
    create?: XOR<BankTransactionCreateWithoutClassificationInput, BankTransactionUncheckedCreateWithoutClassificationInput> | BankTransactionCreateWithoutClassificationInput[] | BankTransactionUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutClassificationInput | BankTransactionCreateOrConnectWithoutClassificationInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutClassificationInput | BankTransactionUpsertWithWhereUniqueWithoutClassificationInput[]
    createMany?: BankTransactionCreateManyClassificationInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutClassificationInput | BankTransactionUpdateWithWhereUniqueWithoutClassificationInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutClassificationInput | BankTransactionUpdateManyWithWhereWithoutClassificationInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type BankAccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<BankAccountCreateWithoutTransactionsInput, BankAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutTransactionsInput
    connect?: BankAccountWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBankTransactionInput = {
    create?: XOR<UserCreateWithoutBankTransactionInput, UserUncheckedCreateWithoutBankTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionClassificationCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<TransactionClassificationCreateWithoutTransactionsInput, TransactionClassificationUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TransactionClassificationCreateOrConnectWithoutTransactionsInput
    connect?: TransactionClassificationWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutUploadedTransactionsInput = {
    create?: XOR<UserCreateWithoutUploadedTransactionsInput, UserUncheckedCreateWithoutUploadedTransactionsInput> | UserCreateWithoutUploadedTransactionsInput[] | UserUncheckedCreateWithoutUploadedTransactionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUploadedTransactionsInput | UserCreateOrConnectWithoutUploadedTransactionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUploadedTransactionsInput = {
    create?: XOR<UserCreateWithoutUploadedTransactionsInput, UserUncheckedCreateWithoutUploadedTransactionsInput> | UserCreateWithoutUploadedTransactionsInput[] | UserUncheckedCreateWithoutUploadedTransactionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUploadedTransactionsInput | UserCreateOrConnectWithoutUploadedTransactionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type BankAccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<BankAccountCreateWithoutTransactionsInput, BankAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutTransactionsInput
    upsert?: BankAccountUpsertWithoutTransactionsInput
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutTransactionsInput, BankAccountUpdateWithoutTransactionsInput>, BankAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutBankTransactionNestedInput = {
    create?: XOR<UserCreateWithoutBankTransactionInput, UserUncheckedCreateWithoutBankTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankTransactionInput
    upsert?: UserUpsertWithoutBankTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBankTransactionInput, UserUpdateWithoutBankTransactionInput>, UserUncheckedUpdateWithoutBankTransactionInput>
  }

  export type TransactionClassificationUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<TransactionClassificationCreateWithoutTransactionsInput, TransactionClassificationUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TransactionClassificationCreateOrConnectWithoutTransactionsInput
    upsert?: TransactionClassificationUpsertWithoutTransactionsInput
    connect?: TransactionClassificationWhereUniqueInput
    update?: XOR<XOR<TransactionClassificationUpdateToOneWithWhereWithoutTransactionsInput, TransactionClassificationUpdateWithoutTransactionsInput>, TransactionClassificationUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateManyWithoutUploadedTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutUploadedTransactionsInput, UserUncheckedCreateWithoutUploadedTransactionsInput> | UserCreateWithoutUploadedTransactionsInput[] | UserUncheckedCreateWithoutUploadedTransactionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUploadedTransactionsInput | UserCreateOrConnectWithoutUploadedTransactionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUploadedTransactionsInput | UserUpsertWithWhereUniqueWithoutUploadedTransactionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUploadedTransactionsInput | UserUpdateWithWhereUniqueWithoutUploadedTransactionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUploadedTransactionsInput | UserUpdateManyWithWhereWithoutUploadedTransactionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUploadedTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutUploadedTransactionsInput, UserUncheckedCreateWithoutUploadedTransactionsInput> | UserCreateWithoutUploadedTransactionsInput[] | UserUncheckedCreateWithoutUploadedTransactionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUploadedTransactionsInput | UserCreateOrConnectWithoutUploadedTransactionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUploadedTransactionsInput | UserUpsertWithWhereUniqueWithoutUploadedTransactionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUploadedTransactionsInput | UserUpdateWithWhereUniqueWithoutUploadedTransactionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUploadedTransactionsInput | UserUpdateManyWithWhereWithoutUploadedTransactionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AccountContractCreateNestedOneWithoutBankAccountInput = {
    create?: XOR<AccountContractCreateWithoutBankAccountInput, AccountContractUncheckedCreateWithoutBankAccountInput>
    connectOrCreate?: AccountContractCreateOrConnectWithoutBankAccountInput
    connect?: AccountContractWhereUniqueInput
  }

  export type StaffAccountAssignmentCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutBankAccountInput, StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput> | StaffAccountAssignmentCreateWithoutBankAccountInput[] | StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutBankAccountInput | StaffAccountAssignmentCreateOrConnectWithoutBankAccountInput[]
    createMany?: StaffAccountAssignmentCreateManyBankAccountInputEnvelope
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
  }

  export type BankTransactionCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput> | BankTransactionCreateWithoutBankAccountInput[] | BankTransactionUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutBankAccountInput | BankTransactionCreateOrConnectWithoutBankAccountInput[]
    createMany?: BankTransactionCreateManyBankAccountInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type ClientCreateNestedOneWithoutAccountsInput = {
    create?: XOR<ClientCreateWithoutAccountsInput, ClientUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAccountsInput
    connect?: ClientWhereUniqueInput
  }

  export type AccountContractUncheckedCreateNestedOneWithoutBankAccountInput = {
    create?: XOR<AccountContractCreateWithoutBankAccountInput, AccountContractUncheckedCreateWithoutBankAccountInput>
    connectOrCreate?: AccountContractCreateOrConnectWithoutBankAccountInput
    connect?: AccountContractWhereUniqueInput
  }

  export type StaffAccountAssignmentUncheckedCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutBankAccountInput, StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput> | StaffAccountAssignmentCreateWithoutBankAccountInput[] | StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutBankAccountInput | StaffAccountAssignmentCreateOrConnectWithoutBankAccountInput[]
    createMany?: StaffAccountAssignmentCreateManyBankAccountInputEnvelope
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
  }

  export type BankTransactionUncheckedCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput> | BankTransactionCreateWithoutBankAccountInput[] | BankTransactionUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutBankAccountInput | BankTransactionCreateOrConnectWithoutBankAccountInput[]
    createMany?: BankTransactionCreateManyBankAccountInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type AccountContractUpdateOneWithoutBankAccountNestedInput = {
    create?: XOR<AccountContractCreateWithoutBankAccountInput, AccountContractUncheckedCreateWithoutBankAccountInput>
    connectOrCreate?: AccountContractCreateOrConnectWithoutBankAccountInput
    upsert?: AccountContractUpsertWithoutBankAccountInput
    disconnect?: AccountContractWhereInput | boolean
    delete?: AccountContractWhereInput | boolean
    connect?: AccountContractWhereUniqueInput
    update?: XOR<XOR<AccountContractUpdateToOneWithWhereWithoutBankAccountInput, AccountContractUpdateWithoutBankAccountInput>, AccountContractUncheckedUpdateWithoutBankAccountInput>
  }

  export type StaffAccountAssignmentUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutBankAccountInput, StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput> | StaffAccountAssignmentCreateWithoutBankAccountInput[] | StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutBankAccountInput | StaffAccountAssignmentCreateOrConnectWithoutBankAccountInput[]
    upsert?: StaffAccountAssignmentUpsertWithWhereUniqueWithoutBankAccountInput | StaffAccountAssignmentUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: StaffAccountAssignmentCreateManyBankAccountInputEnvelope
    set?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    disconnect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    delete?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    update?: StaffAccountAssignmentUpdateWithWhereUniqueWithoutBankAccountInput | StaffAccountAssignmentUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: StaffAccountAssignmentUpdateManyWithWhereWithoutBankAccountInput | StaffAccountAssignmentUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: StaffAccountAssignmentScalarWhereInput | StaffAccountAssignmentScalarWhereInput[]
  }

  export type BankTransactionUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput> | BankTransactionCreateWithoutBankAccountInput[] | BankTransactionUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutBankAccountInput | BankTransactionCreateOrConnectWithoutBankAccountInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutBankAccountInput | BankTransactionUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: BankTransactionCreateManyBankAccountInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutBankAccountInput | BankTransactionUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutBankAccountInput | BankTransactionUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type ClientUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<ClientCreateWithoutAccountsInput, ClientUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAccountsInput
    upsert?: ClientUpsertWithoutAccountsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAccountsInput, ClientUpdateWithoutAccountsInput>, ClientUncheckedUpdateWithoutAccountsInput>
  }

  export type AccountContractUncheckedUpdateOneWithoutBankAccountNestedInput = {
    create?: XOR<AccountContractCreateWithoutBankAccountInput, AccountContractUncheckedCreateWithoutBankAccountInput>
    connectOrCreate?: AccountContractCreateOrConnectWithoutBankAccountInput
    upsert?: AccountContractUpsertWithoutBankAccountInput
    disconnect?: AccountContractWhereInput | boolean
    delete?: AccountContractWhereInput | boolean
    connect?: AccountContractWhereUniqueInput
    update?: XOR<XOR<AccountContractUpdateToOneWithWhereWithoutBankAccountInput, AccountContractUpdateWithoutBankAccountInput>, AccountContractUncheckedUpdateWithoutBankAccountInput>
  }

  export type StaffAccountAssignmentUncheckedUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<StaffAccountAssignmentCreateWithoutBankAccountInput, StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput> | StaffAccountAssignmentCreateWithoutBankAccountInput[] | StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: StaffAccountAssignmentCreateOrConnectWithoutBankAccountInput | StaffAccountAssignmentCreateOrConnectWithoutBankAccountInput[]
    upsert?: StaffAccountAssignmentUpsertWithWhereUniqueWithoutBankAccountInput | StaffAccountAssignmentUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: StaffAccountAssignmentCreateManyBankAccountInputEnvelope
    set?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    disconnect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    delete?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    connect?: StaffAccountAssignmentWhereUniqueInput | StaffAccountAssignmentWhereUniqueInput[]
    update?: StaffAccountAssignmentUpdateWithWhereUniqueWithoutBankAccountInput | StaffAccountAssignmentUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: StaffAccountAssignmentUpdateManyWithWhereWithoutBankAccountInput | StaffAccountAssignmentUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: StaffAccountAssignmentScalarWhereInput | StaffAccountAssignmentScalarWhereInput[]
  }

  export type BankTransactionUncheckedUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput> | BankTransactionCreateWithoutBankAccountInput[] | BankTransactionUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutBankAccountInput | BankTransactionCreateOrConnectWithoutBankAccountInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutBankAccountInput | BankTransactionUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: BankTransactionCreateManyBankAccountInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutBankAccountInput | BankTransactionUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutBankAccountInput | BankTransactionUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type BankAccountCreateNestedManyWithoutClientInput = {
    create?: XOR<BankAccountCreateWithoutClientInput, BankAccountUncheckedCreateWithoutClientInput> | BankAccountCreateWithoutClientInput[] | BankAccountUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutClientInput | BankAccountCreateOrConnectWithoutClientInput[]
    createMany?: BankAccountCreateManyClientInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type BankAccountUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<BankAccountCreateWithoutClientInput, BankAccountUncheckedCreateWithoutClientInput> | BankAccountCreateWithoutClientInput[] | BankAccountUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutClientInput | BankAccountCreateOrConnectWithoutClientInput[]
    createMany?: BankAccountCreateManyClientInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type BankAccountUpdateManyWithoutClientNestedInput = {
    create?: XOR<BankAccountCreateWithoutClientInput, BankAccountUncheckedCreateWithoutClientInput> | BankAccountCreateWithoutClientInput[] | BankAccountUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutClientInput | BankAccountCreateOrConnectWithoutClientInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutClientInput | BankAccountUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BankAccountCreateManyClientInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutClientInput | BankAccountUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutClientInput | BankAccountUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type BankAccountUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<BankAccountCreateWithoutClientInput, BankAccountUncheckedCreateWithoutClientInput> | BankAccountCreateWithoutClientInput[] | BankAccountUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutClientInput | BankAccountCreateOrConnectWithoutClientInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutClientInput | BankAccountUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BankAccountCreateManyClientInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutClientInput | BankAccountUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutClientInput | BankAccountUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type BankAccountCreateNestedOneWithoutContractInput = {
    create?: XOR<BankAccountCreateWithoutContractInput, BankAccountUncheckedCreateWithoutContractInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutContractInput
    connect?: BankAccountWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BankAccountUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<BankAccountCreateWithoutContractInput, BankAccountUncheckedCreateWithoutContractInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutContractInput
    upsert?: BankAccountUpsertWithoutContractInput
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutContractInput, BankAccountUpdateWithoutContractInput>, BankAccountUncheckedUpdateWithoutContractInput>
  }

  export type UserCreateNestedOneWithoutStaffAccountAssignmentInput = {
    create?: XOR<UserCreateWithoutStaffAccountAssignmentInput, UserUncheckedCreateWithoutStaffAccountAssignmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffAccountAssignmentInput
    connect?: UserWhereUniqueInput
  }

  export type BankAccountCreateNestedOneWithoutStaffAssignmentsInput = {
    create?: XOR<BankAccountCreateWithoutStaffAssignmentsInput, BankAccountUncheckedCreateWithoutStaffAssignmentsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutStaffAssignmentsInput
    connect?: BankAccountWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedStaffAccountsInput = {
    create?: XOR<UserCreateWithoutAssignedStaffAccountsInput, UserUncheckedCreateWithoutAssignedStaffAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedStaffAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutStaffAssignmentsInput = {
    create?: XOR<UserCreateWithoutStaffAssignmentsInput, UserUncheckedCreateWithoutStaffAssignmentsInput> | UserCreateWithoutStaffAssignmentsInput[] | UserUncheckedCreateWithoutStaffAssignmentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStaffAssignmentsInput | UserCreateOrConnectWithoutStaffAssignmentsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutStaffAssignmentsInput = {
    create?: XOR<UserCreateWithoutStaffAssignmentsInput, UserUncheckedCreateWithoutStaffAssignmentsInput> | UserCreateWithoutStaffAssignmentsInput[] | UserUncheckedCreateWithoutStaffAssignmentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStaffAssignmentsInput | UserCreateOrConnectWithoutStaffAssignmentsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStaffAccountAssignmentNestedInput = {
    create?: XOR<UserCreateWithoutStaffAccountAssignmentInput, UserUncheckedCreateWithoutStaffAccountAssignmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffAccountAssignmentInput
    upsert?: UserUpsertWithoutStaffAccountAssignmentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffAccountAssignmentInput, UserUpdateWithoutStaffAccountAssignmentInput>, UserUncheckedUpdateWithoutStaffAccountAssignmentInput>
  }

  export type BankAccountUpdateOneRequiredWithoutStaffAssignmentsNestedInput = {
    create?: XOR<BankAccountCreateWithoutStaffAssignmentsInput, BankAccountUncheckedCreateWithoutStaffAssignmentsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutStaffAssignmentsInput
    upsert?: BankAccountUpsertWithoutStaffAssignmentsInput
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutStaffAssignmentsInput, BankAccountUpdateWithoutStaffAssignmentsInput>, BankAccountUncheckedUpdateWithoutStaffAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedStaffAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedStaffAccountsInput, UserUncheckedCreateWithoutAssignedStaffAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedStaffAccountsInput
    upsert?: UserUpsertWithoutAssignedStaffAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedStaffAccountsInput, UserUpdateWithoutAssignedStaffAccountsInput>, UserUncheckedUpdateWithoutAssignedStaffAccountsInput>
  }

  export type UserUpdateManyWithoutStaffAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutStaffAssignmentsInput, UserUncheckedCreateWithoutStaffAssignmentsInput> | UserCreateWithoutStaffAssignmentsInput[] | UserUncheckedCreateWithoutStaffAssignmentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStaffAssignmentsInput | UserCreateOrConnectWithoutStaffAssignmentsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutStaffAssignmentsInput | UserUpsertWithWhereUniqueWithoutStaffAssignmentsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutStaffAssignmentsInput | UserUpdateWithWhereUniqueWithoutStaffAssignmentsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutStaffAssignmentsInput | UserUpdateManyWithWhereWithoutStaffAssignmentsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutStaffAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutStaffAssignmentsInput, UserUncheckedCreateWithoutStaffAssignmentsInput> | UserCreateWithoutStaffAssignmentsInput[] | UserUncheckedCreateWithoutStaffAssignmentsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStaffAssignmentsInput | UserCreateOrConnectWithoutStaffAssignmentsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutStaffAssignmentsInput | UserUpsertWithWhereUniqueWithoutStaffAssignmentsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutStaffAssignmentsInput | UserUpdateWithWhereUniqueWithoutStaffAssignmentsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutStaffAssignmentsInput | UserUpdateManyWithWhereWithoutStaffAssignmentsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumClassificationCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassificationCode | EnumClassificationCodeFieldRefInput<$PrismaModel>
    in?: $Enums.ClassificationCode[] | ListEnumClassificationCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassificationCode[] | ListEnumClassificationCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumClassificationCodeFilter<$PrismaModel> | $Enums.ClassificationCode
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumClassificationCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassificationCode | EnumClassificationCodeFieldRefInput<$PrismaModel>
    in?: $Enums.ClassificationCode[] | ListEnumClassificationCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClassificationCode[] | ListEnumClassificationCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumClassificationCodeWithAggregatesFilter<$PrismaModel> | $Enums.ClassificationCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClassificationCodeFilter<$PrismaModel>
    _max?: NestedEnumClassificationCodeFilter<$PrismaModel>
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
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

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BankTransactionCreateWithoutUploadedByInput = {
    id?: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutTransactionsInput
    classification: TransactionClassificationCreateNestedOneWithoutTransactionsInput
    User?: UserCreateNestedManyWithoutUploadedTransactionsInput
  }

  export type BankTransactionUncheckedCreateWithoutUploadedByInput = {
    id?: string
    bankAccountId: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    classificationId: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutUploadedTransactionsInput
  }

  export type BankTransactionCreateOrConnectWithoutUploadedByInput = {
    where: BankTransactionWhereUniqueInput
    create: XOR<BankTransactionCreateWithoutUploadedByInput, BankTransactionUncheckedCreateWithoutUploadedByInput>
  }

  export type BankTransactionCreateManyUploadedByInputEnvelope = {
    data: BankTransactionCreateManyUploadedByInput | BankTransactionCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type StaffAccountAssignmentCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutStaffAssignmentsInput
    assignedBy: UserCreateNestedOneWithoutAssignedStaffAccountsInput
    User?: UserCreateNestedManyWithoutStaffAssignmentsInput
  }

  export type StaffAccountAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    assignedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutStaffAssignmentsInput
  }

  export type StaffAccountAssignmentCreateOrConnectWithoutUserInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    create: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput>
  }

  export type StaffAccountAssignmentCreateManyUserInputEnvelope = {
    data: StaffAccountAssignmentCreateManyUserInput | StaffAccountAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutUsersInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput>
  }

  export type BankTransactionCreateWithoutUserInput = {
    id?: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutTransactionsInput
    uploadedBy: UserCreateNestedOneWithoutBankTransactionInput
    classification: TransactionClassificationCreateNestedOneWithoutTransactionsInput
  }

  export type BankTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    bankAccountId: string
    uploadedById: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    classificationId: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankTransactionCreateOrConnectWithoutUserInput = {
    where: BankTransactionWhereUniqueInput
    create: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput>
  }

  export type StaffAccountAssignmentCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStaffAccountAssignmentInput
    bankAccount: BankAccountCreateNestedOneWithoutStaffAssignmentsInput
    assignedBy: UserCreateNestedOneWithoutAssignedStaffAccountsInput
  }

  export type StaffAccountAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    userId: string
    accountId: string
    assignedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAccountAssignmentCreateWithoutAssignedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStaffAccountAssignmentInput
    bankAccount: BankAccountCreateNestedOneWithoutStaffAssignmentsInput
    User?: UserCreateNestedManyWithoutStaffAssignmentsInput
  }

  export type StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput = {
    id?: string
    userId: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutStaffAssignmentsInput
  }

  export type StaffAccountAssignmentCreateOrConnectWithoutAssignedByInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    create: XOR<StaffAccountAssignmentCreateWithoutAssignedByInput, StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput>
  }

  export type StaffAccountAssignmentCreateManyAssignedByInputEnvelope = {
    data: StaffAccountAssignmentCreateManyAssignedByInput | StaffAccountAssignmentCreateManyAssignedByInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDeactivatedUsersInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentCreateNestedManyWithoutAssignedByInput
    deactivatedBy?: UserCreateNestedOneWithoutDeactivatedUsersInput
  }

  export type UserUncheckedCreateWithoutDeactivatedUsersInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivatedById?: string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionUncheckedCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutAssignedByInput
  }

  export type UserCreateOrConnectWithoutDeactivatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeactivatedUsersInput, UserUncheckedCreateWithoutDeactivatedUsersInput>
  }

  export type UserCreateWithoutDeactivatedByInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentCreateNestedManyWithoutAssignedByInput
    deactivatedUsers?: UserCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserUncheckedCreateWithoutDeactivatedByInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionUncheckedCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutAssignedByInput
    deactivatedUsers?: UserUncheckedCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserCreateOrConnectWithoutDeactivatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeactivatedByInput, UserUncheckedCreateWithoutDeactivatedByInput>
  }

  export type UserCreateManyDeactivatedByInputEnvelope = {
    data: UserCreateManyDeactivatedByInput | UserCreateManyDeactivatedByInput[]
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type BankTransactionUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: BankTransactionWhereUniqueInput
    update: XOR<BankTransactionUpdateWithoutUploadedByInput, BankTransactionUncheckedUpdateWithoutUploadedByInput>
    create: XOR<BankTransactionCreateWithoutUploadedByInput, BankTransactionUncheckedCreateWithoutUploadedByInput>
  }

  export type BankTransactionUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: BankTransactionWhereUniqueInput
    data: XOR<BankTransactionUpdateWithoutUploadedByInput, BankTransactionUncheckedUpdateWithoutUploadedByInput>
  }

  export type BankTransactionUpdateManyWithWhereWithoutUploadedByInput = {
    where: BankTransactionScalarWhereInput
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type BankTransactionScalarWhereInput = {
    AND?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
    OR?: BankTransactionScalarWhereInput[]
    NOT?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
    id?: StringFilter<"BankTransaction"> | string
    bankAccountId?: StringFilter<"BankTransaction"> | string
    uploadedById?: StringFilter<"BankTransaction"> | string
    transactionDate?: DateTimeFilter<"BankTransaction"> | Date | string
    valueDate?: DateTimeFilter<"BankTransaction"> | Date | string
    amount?: FloatFilter<"BankTransaction"> | number
    type?: EnumTransactionTypeFilter<"BankTransaction"> | $Enums.TransactionType
    description?: StringFilter<"BankTransaction"> | string
    reference?: StringNullableFilter<"BankTransaction"> | string | null
    chequeNo?: StringNullableFilter<"BankTransaction"> | string | null
    tellerNo?: StringNullableFilter<"BankTransaction"> | string | null
    currency?: StringFilter<"BankTransaction"> | string
    classificationId?: StringFilter<"BankTransaction"> | string
    user?: StringNullableFilter<"BankTransaction"> | string | null
    createdAt?: DateTimeFilter<"BankTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"BankTransaction"> | Date | string
  }

  export type StaffAccountAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    update: XOR<StaffAccountAssignmentUpdateWithoutUserInput, StaffAccountAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput>
  }

  export type StaffAccountAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    data: XOR<StaffAccountAssignmentUpdateWithoutUserInput, StaffAccountAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type StaffAccountAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: StaffAccountAssignmentScalarWhereInput
    data: XOR<StaffAccountAssignmentUpdateManyMutationInput, StaffAccountAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type StaffAccountAssignmentScalarWhereInput = {
    AND?: StaffAccountAssignmentScalarWhereInput | StaffAccountAssignmentScalarWhereInput[]
    OR?: StaffAccountAssignmentScalarWhereInput[]
    NOT?: StaffAccountAssignmentScalarWhereInput | StaffAccountAssignmentScalarWhereInput[]
    id?: StringFilter<"StaffAccountAssignment"> | string
    userId?: StringFilter<"StaffAccountAssignment"> | string
    accountId?: StringFilter<"StaffAccountAssignment"> | string
    assignedById?: StringFilter<"StaffAccountAssignment"> | string
    createdAt?: DateTimeFilter<"StaffAccountAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"StaffAccountAssignment"> | Date | string
  }

  export type PermissionUpsertWithWhereUniqueWithoutUsersInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutUsersInput, PermissionUncheckedUpdateWithoutUsersInput>
    create: XOR<PermissionCreateWithoutUsersInput, PermissionUncheckedCreateWithoutUsersInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutUsersInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutUsersInput, PermissionUncheckedUpdateWithoutUsersInput>
  }

  export type PermissionUpdateManyWithWhereWithoutUsersInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutUsersInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: StringFilter<"Permission"> | string
    name?: StringFilter<"Permission"> | string
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
  }

  export type BankTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: BankTransactionWhereUniqueInput
    update: XOR<BankTransactionUpdateWithoutUserInput, BankTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<BankTransactionCreateWithoutUserInput, BankTransactionUncheckedCreateWithoutUserInput>
  }

  export type BankTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: BankTransactionWhereUniqueInput
    data: XOR<BankTransactionUpdateWithoutUserInput, BankTransactionUncheckedUpdateWithoutUserInput>
  }

  export type BankTransactionUpdateManyWithWhereWithoutUserInput = {
    where: BankTransactionScalarWhereInput
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type StaffAccountAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    update: XOR<StaffAccountAssignmentUpdateWithoutUserInput, StaffAccountAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<StaffAccountAssignmentCreateWithoutUserInput, StaffAccountAssignmentUncheckedCreateWithoutUserInput>
  }

  export type StaffAccountAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    data: XOR<StaffAccountAssignmentUpdateWithoutUserInput, StaffAccountAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type StaffAccountAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: StaffAccountAssignmentScalarWhereInput
    data: XOR<StaffAccountAssignmentUpdateManyMutationInput, StaffAccountAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type StaffAccountAssignmentUpsertWithWhereUniqueWithoutAssignedByInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    update: XOR<StaffAccountAssignmentUpdateWithoutAssignedByInput, StaffAccountAssignmentUncheckedUpdateWithoutAssignedByInput>
    create: XOR<StaffAccountAssignmentCreateWithoutAssignedByInput, StaffAccountAssignmentUncheckedCreateWithoutAssignedByInput>
  }

  export type StaffAccountAssignmentUpdateWithWhereUniqueWithoutAssignedByInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    data: XOR<StaffAccountAssignmentUpdateWithoutAssignedByInput, StaffAccountAssignmentUncheckedUpdateWithoutAssignedByInput>
  }

  export type StaffAccountAssignmentUpdateManyWithWhereWithoutAssignedByInput = {
    where: StaffAccountAssignmentScalarWhereInput
    data: XOR<StaffAccountAssignmentUpdateManyMutationInput, StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByInput>
  }

  export type UserUpsertWithoutDeactivatedUsersInput = {
    update: XOR<UserUpdateWithoutDeactivatedUsersInput, UserUncheckedUpdateWithoutDeactivatedUsersInput>
    create: XOR<UserCreateWithoutDeactivatedUsersInput, UserUncheckedCreateWithoutDeactivatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeactivatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeactivatedUsersInput, UserUncheckedUpdateWithoutDeactivatedUsersInput>
  }

  export type UserUpdateWithoutDeactivatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUpdateManyWithoutAssignedByNestedInput
    deactivatedBy?: UserUpdateOneWithoutDeactivatedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDeactivatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUncheckedUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutDeactivatedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDeactivatedByInput, UserUncheckedUpdateWithoutDeactivatedByInput>
    create: XOR<UserCreateWithoutDeactivatedByInput, UserUncheckedCreateWithoutDeactivatedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDeactivatedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDeactivatedByInput, UserUncheckedUpdateWithoutDeactivatedByInput>
  }

  export type UserUpdateManyWithWhereWithoutDeactivatedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDeactivatedByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    deactivatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deactivatedById?: StringNullableFilter<"User"> | string | null
    deactivationReason?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutPermissionsInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    uploadedTransactions?: BankTransactionCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentCreateNestedManyWithoutAssignedByInput
    deactivatedBy?: UserCreateNestedOneWithoutDeactivatedUsersInput
    deactivatedUsers?: UserCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserUncheckedCreateWithoutPermissionsInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivatedById?: string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionUncheckedCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    uploadedTransactions?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutAssignedByInput
    deactivatedUsers?: UserUncheckedCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserCreateOrConnectWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserUpdateManyWithWhereWithoutPermissionsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BankTransaction?: BankTransactionCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentCreateNestedManyWithoutAssignedByInput
    deactivatedBy?: UserCreateNestedOneWithoutDeactivatedUsersInput
    deactivatedUsers?: UserCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivatedById?: string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BankTransaction?: BankTransactionUncheckedCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutAssignedByInput
    deactivatedUsers?: UserUncheckedCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BankTransaction?: BankTransactionUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUpdateManyWithoutAssignedByNestedInput
    deactivatedBy?: UserUpdateOneWithoutDeactivatedUsersNestedInput
    deactivatedUsers?: UserUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BankTransaction?: BankTransactionUncheckedUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByNestedInput
    deactivatedUsers?: UserUncheckedUpdateManyWithoutDeactivatedByNestedInput
  }

  export type BankTransactionCreateWithoutClassificationInput = {
    id?: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutTransactionsInput
    uploadedBy: UserCreateNestedOneWithoutBankTransactionInput
    User?: UserCreateNestedManyWithoutUploadedTransactionsInput
  }

  export type BankTransactionUncheckedCreateWithoutClassificationInput = {
    id?: string
    bankAccountId: string
    uploadedById: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutUploadedTransactionsInput
  }

  export type BankTransactionCreateOrConnectWithoutClassificationInput = {
    where: BankTransactionWhereUniqueInput
    create: XOR<BankTransactionCreateWithoutClassificationInput, BankTransactionUncheckedCreateWithoutClassificationInput>
  }

  export type BankTransactionCreateManyClassificationInputEnvelope = {
    data: BankTransactionCreateManyClassificationInput | BankTransactionCreateManyClassificationInput[]
    skipDuplicates?: boolean
  }

  export type BankTransactionUpsertWithWhereUniqueWithoutClassificationInput = {
    where: BankTransactionWhereUniqueInput
    update: XOR<BankTransactionUpdateWithoutClassificationInput, BankTransactionUncheckedUpdateWithoutClassificationInput>
    create: XOR<BankTransactionCreateWithoutClassificationInput, BankTransactionUncheckedCreateWithoutClassificationInput>
  }

  export type BankTransactionUpdateWithWhereUniqueWithoutClassificationInput = {
    where: BankTransactionWhereUniqueInput
    data: XOR<BankTransactionUpdateWithoutClassificationInput, BankTransactionUncheckedUpdateWithoutClassificationInput>
  }

  export type BankTransactionUpdateManyWithWhereWithoutClassificationInput = {
    where: BankTransactionScalarWhereInput
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyWithoutClassificationInput>
  }

  export type BankAccountCreateWithoutTransactionsInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: AccountContractCreateNestedOneWithoutBankAccountInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutBankAccountInput
    client: ClientCreateNestedOneWithoutAccountsInput
  }

  export type BankAccountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: AccountContractUncheckedCreateNestedOneWithoutBankAccountInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutTransactionsInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutTransactionsInput, BankAccountUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutBankTransactionInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    StaffAccountAssignment?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentCreateNestedManyWithoutAssignedByInput
    deactivatedBy?: UserCreateNestedOneWithoutDeactivatedUsersInput
    deactivatedUsers?: UserCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserUncheckedCreateWithoutBankTransactionInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivatedById?: string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutAssignedByInput
    deactivatedUsers?: UserUncheckedCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserCreateOrConnectWithoutBankTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBankTransactionInput, UserUncheckedCreateWithoutBankTransactionInput>
  }

  export type TransactionClassificationCreateWithoutTransactionsInput = {
    id?: string
    code: $Enums.ClassificationCode
    category: $Enums.Category
    label: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionClassificationUncheckedCreateWithoutTransactionsInput = {
    id?: string
    code: $Enums.ClassificationCode
    category: $Enums.Category
    label: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionClassificationCreateOrConnectWithoutTransactionsInput = {
    where: TransactionClassificationWhereUniqueInput
    create: XOR<TransactionClassificationCreateWithoutTransactionsInput, TransactionClassificationUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutUploadedTransactionsInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentCreateNestedManyWithoutAssignedByInput
    deactivatedBy?: UserCreateNestedOneWithoutDeactivatedUsersInput
    deactivatedUsers?: UserCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserUncheckedCreateWithoutUploadedTransactionsInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivatedById?: string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionUncheckedCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutAssignedByInput
    deactivatedUsers?: UserUncheckedCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserCreateOrConnectWithoutUploadedTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadedTransactionsInput, UserUncheckedCreateWithoutUploadedTransactionsInput>
  }

  export type BankAccountUpsertWithoutTransactionsInput = {
    update: XOR<BankAccountUpdateWithoutTransactionsInput, BankAccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<BankAccountCreateWithoutTransactionsInput, BankAccountUncheckedCreateWithoutTransactionsInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutTransactionsInput, BankAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type BankAccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: AccountContractUpdateOneWithoutBankAccountNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutBankAccountNestedInput
    client?: ClientUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: AccountContractUncheckedUpdateOneWithoutBankAccountNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type UserUpsertWithoutBankTransactionInput = {
    update: XOR<UserUpdateWithoutBankTransactionInput, UserUncheckedUpdateWithoutBankTransactionInput>
    create: XOR<UserCreateWithoutBankTransactionInput, UserUncheckedCreateWithoutBankTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBankTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBankTransactionInput, UserUncheckedUpdateWithoutBankTransactionInput>
  }

  export type UserUpdateWithoutBankTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUpdateManyWithoutAssignedByNestedInput
    deactivatedBy?: UserUpdateOneWithoutDeactivatedUsersNestedInput
    deactivatedUsers?: UserUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBankTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByNestedInput
    deactivatedUsers?: UserUncheckedUpdateManyWithoutDeactivatedByNestedInput
  }

  export type TransactionClassificationUpsertWithoutTransactionsInput = {
    update: XOR<TransactionClassificationUpdateWithoutTransactionsInput, TransactionClassificationUncheckedUpdateWithoutTransactionsInput>
    create: XOR<TransactionClassificationCreateWithoutTransactionsInput, TransactionClassificationUncheckedCreateWithoutTransactionsInput>
    where?: TransactionClassificationWhereInput
  }

  export type TransactionClassificationUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: TransactionClassificationWhereInput
    data: XOR<TransactionClassificationUpdateWithoutTransactionsInput, TransactionClassificationUncheckedUpdateWithoutTransactionsInput>
  }

  export type TransactionClassificationUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumClassificationCodeFieldUpdateOperationsInput | $Enums.ClassificationCode
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionClassificationUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: EnumClassificationCodeFieldUpdateOperationsInput | $Enums.ClassificationCode
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutUploadedTransactionsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUploadedTransactionsInput, UserUncheckedUpdateWithoutUploadedTransactionsInput>
    create: XOR<UserCreateWithoutUploadedTransactionsInput, UserUncheckedCreateWithoutUploadedTransactionsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUploadedTransactionsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUploadedTransactionsInput, UserUncheckedUpdateWithoutUploadedTransactionsInput>
  }

  export type UserUpdateManyWithWhereWithoutUploadedTransactionsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUploadedTransactionsInput>
  }

  export type AccountContractCreateWithoutBankAccountInput = {
    id?: string
    returnChargeRate?: number | null
    returnChargeLimit?: number | null
    cotCovenantRate?: number | null
    cotOffCoverRate?: number | null
    cotOICRate?: number | null
    turnoverLimit?: number | null
    cotCovenantFrequency?: string | null
    chargeCOTOnShortfall?: boolean | null
    creditInterestRate?: number | null
    debitRate?: number | null
    excessRate?: number | null
    excessRateType?: string | null
    vatRate?: number | null
    whtRate?: number | null
    rateType?: string | null
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountContractUncheckedCreateWithoutBankAccountInput = {
    id?: string
    returnChargeRate?: number | null
    returnChargeLimit?: number | null
    cotCovenantRate?: number | null
    cotOffCoverRate?: number | null
    cotOICRate?: number | null
    turnoverLimit?: number | null
    cotCovenantFrequency?: string | null
    chargeCOTOnShortfall?: boolean | null
    creditInterestRate?: number | null
    debitRate?: number | null
    excessRate?: number | null
    excessRateType?: string | null
    vatRate?: number | null
    whtRate?: number | null
    rateType?: string | null
    effectiveFrom?: Date | string | null
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountContractCreateOrConnectWithoutBankAccountInput = {
    where: AccountContractWhereUniqueInput
    create: XOR<AccountContractCreateWithoutBankAccountInput, AccountContractUncheckedCreateWithoutBankAccountInput>
  }

  export type StaffAccountAssignmentCreateWithoutBankAccountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStaffAccountAssignmentInput
    assignedBy: UserCreateNestedOneWithoutAssignedStaffAccountsInput
    User?: UserCreateNestedManyWithoutStaffAssignmentsInput
  }

  export type StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput = {
    id?: string
    userId: string
    assignedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutStaffAssignmentsInput
  }

  export type StaffAccountAssignmentCreateOrConnectWithoutBankAccountInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    create: XOR<StaffAccountAssignmentCreateWithoutBankAccountInput, StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput>
  }

  export type StaffAccountAssignmentCreateManyBankAccountInputEnvelope = {
    data: StaffAccountAssignmentCreateManyBankAccountInput | StaffAccountAssignmentCreateManyBankAccountInput[]
    skipDuplicates?: boolean
  }

  export type BankTransactionCreateWithoutBankAccountInput = {
    id?: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutBankTransactionInput
    classification: TransactionClassificationCreateNestedOneWithoutTransactionsInput
    User?: UserCreateNestedManyWithoutUploadedTransactionsInput
  }

  export type BankTransactionUncheckedCreateWithoutBankAccountInput = {
    id?: string
    uploadedById: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    classificationId: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutUploadedTransactionsInput
  }

  export type BankTransactionCreateOrConnectWithoutBankAccountInput = {
    where: BankTransactionWhereUniqueInput
    create: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput>
  }

  export type BankTransactionCreateManyBankAccountInputEnvelope = {
    data: BankTransactionCreateManyBankAccountInput | BankTransactionCreateManyBankAccountInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutAccountsInput = {
    id?: string
    firstName: string
    lastName: string
    companyName: string
    email: string
    address?: string | null
    phone?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
    avatarUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutAccountsInput = {
    id?: string
    firstName: string
    lastName: string
    companyName: string
    email: string
    address?: string | null
    phone?: string | null
    country?: string | null
    state?: string | null
    city?: string | null
    avatarUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutAccountsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAccountsInput, ClientUncheckedCreateWithoutAccountsInput>
  }

  export type AccountContractUpsertWithoutBankAccountInput = {
    update: XOR<AccountContractUpdateWithoutBankAccountInput, AccountContractUncheckedUpdateWithoutBankAccountInput>
    create: XOR<AccountContractCreateWithoutBankAccountInput, AccountContractUncheckedCreateWithoutBankAccountInput>
    where?: AccountContractWhereInput
  }

  export type AccountContractUpdateToOneWithWhereWithoutBankAccountInput = {
    where?: AccountContractWhereInput
    data: XOR<AccountContractUpdateWithoutBankAccountInput, AccountContractUncheckedUpdateWithoutBankAccountInput>
  }

  export type AccountContractUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnChargeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    returnChargeLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOffCoverRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOICRate?: NullableFloatFieldUpdateOperationsInput | number | null
    turnoverLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    chargeCOTOnShortfall?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creditInterestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    debitRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRateType?: NullableStringFieldUpdateOperationsInput | string | null
    vatRate?: NullableFloatFieldUpdateOperationsInput | number | null
    whtRate?: NullableFloatFieldUpdateOperationsInput | number | null
    rateType?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountContractUncheckedUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    returnChargeRate?: NullableFloatFieldUpdateOperationsInput | number | null
    returnChargeLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOffCoverRate?: NullableFloatFieldUpdateOperationsInput | number | null
    cotOICRate?: NullableFloatFieldUpdateOperationsInput | number | null
    turnoverLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    cotCovenantFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    chargeCOTOnShortfall?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creditInterestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    debitRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRate?: NullableFloatFieldUpdateOperationsInput | number | null
    excessRateType?: NullableStringFieldUpdateOperationsInput | string | null
    vatRate?: NullableFloatFieldUpdateOperationsInput | number | null
    whtRate?: NullableFloatFieldUpdateOperationsInput | number | null
    rateType?: NullableStringFieldUpdateOperationsInput | string | null
    effectiveFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountAssignmentUpsertWithWhereUniqueWithoutBankAccountInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    update: XOR<StaffAccountAssignmentUpdateWithoutBankAccountInput, StaffAccountAssignmentUncheckedUpdateWithoutBankAccountInput>
    create: XOR<StaffAccountAssignmentCreateWithoutBankAccountInput, StaffAccountAssignmentUncheckedCreateWithoutBankAccountInput>
  }

  export type StaffAccountAssignmentUpdateWithWhereUniqueWithoutBankAccountInput = {
    where: StaffAccountAssignmentWhereUniqueInput
    data: XOR<StaffAccountAssignmentUpdateWithoutBankAccountInput, StaffAccountAssignmentUncheckedUpdateWithoutBankAccountInput>
  }

  export type StaffAccountAssignmentUpdateManyWithWhereWithoutBankAccountInput = {
    where: StaffAccountAssignmentScalarWhereInput
    data: XOR<StaffAccountAssignmentUpdateManyMutationInput, StaffAccountAssignmentUncheckedUpdateManyWithoutBankAccountInput>
  }

  export type BankTransactionUpsertWithWhereUniqueWithoutBankAccountInput = {
    where: BankTransactionWhereUniqueInput
    update: XOR<BankTransactionUpdateWithoutBankAccountInput, BankTransactionUncheckedUpdateWithoutBankAccountInput>
    create: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput>
  }

  export type BankTransactionUpdateWithWhereUniqueWithoutBankAccountInput = {
    where: BankTransactionWhereUniqueInput
    data: XOR<BankTransactionUpdateWithoutBankAccountInput, BankTransactionUncheckedUpdateWithoutBankAccountInput>
  }

  export type BankTransactionUpdateManyWithWhereWithoutBankAccountInput = {
    where: BankTransactionScalarWhereInput
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyWithoutBankAccountInput>
  }

  export type ClientUpsertWithoutAccountsInput = {
    update: XOR<ClientUpdateWithoutAccountsInput, ClientUncheckedUpdateWithoutAccountsInput>
    create: XOR<ClientCreateWithoutAccountsInput, ClientUncheckedCreateWithoutAccountsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAccountsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAccountsInput, ClientUncheckedUpdateWithoutAccountsInput>
  }

  export type ClientUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateWithoutClientInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: AccountContractCreateNestedOneWithoutBankAccountInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateWithoutClientInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: AccountContractUncheckedCreateNestedOneWithoutBankAccountInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutClientInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutClientInput, BankAccountUncheckedCreateWithoutClientInput>
  }

  export type BankAccountCreateManyClientInputEnvelope = {
    data: BankAccountCreateManyClientInput | BankAccountCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type BankAccountUpsertWithWhereUniqueWithoutClientInput = {
    where: BankAccountWhereUniqueInput
    update: XOR<BankAccountUpdateWithoutClientInput, BankAccountUncheckedUpdateWithoutClientInput>
    create: XOR<BankAccountCreateWithoutClientInput, BankAccountUncheckedCreateWithoutClientInput>
  }

  export type BankAccountUpdateWithWhereUniqueWithoutClientInput = {
    where: BankAccountWhereUniqueInput
    data: XOR<BankAccountUpdateWithoutClientInput, BankAccountUncheckedUpdateWithoutClientInput>
  }

  export type BankAccountUpdateManyWithWhereWithoutClientInput = {
    where: BankAccountScalarWhereInput
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyWithoutClientInput>
  }

  export type BankAccountScalarWhereInput = {
    AND?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    OR?: BankAccountScalarWhereInput[]
    NOT?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    id?: StringFilter<"BankAccount"> | string
    accountCode?: StringFilter<"BankAccount"> | string
    accountNumber?: StringFilter<"BankAccount"> | string
    accountName?: StringFilter<"BankAccount"> | string
    accountType?: EnumAccountTypeFilter<"BankAccount"> | $Enums.AccountType
    currency?: StringFilter<"BankAccount"> | string
    clientId?: StringFilter<"BankAccount"> | string
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
  }

  export type BankAccountCreateWithoutContractInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionCreateNestedManyWithoutBankAccountInput
    client: ClientCreateNestedOneWithoutAccountsInput
  }

  export type BankAccountUncheckedCreateWithoutContractInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutContractInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutContractInput, BankAccountUncheckedCreateWithoutContractInput>
  }

  export type BankAccountUpsertWithoutContractInput = {
    update: XOR<BankAccountUpdateWithoutContractInput, BankAccountUncheckedUpdateWithoutContractInput>
    create: XOR<BankAccountCreateWithoutContractInput, BankAccountUncheckedCreateWithoutContractInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutContractInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutContractInput, BankAccountUncheckedUpdateWithoutContractInput>
  }

  export type BankAccountUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUpdateManyWithoutBankAccountNestedInput
    client?: ClientUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type UserCreateWithoutStaffAccountAssignmentInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionCreateNestedManyWithoutUploadedByInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentCreateNestedManyWithoutAssignedByInput
    deactivatedBy?: UserCreateNestedOneWithoutDeactivatedUsersInput
    deactivatedUsers?: UserCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserUncheckedCreateWithoutStaffAccountAssignmentInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivatedById?: string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionUncheckedCreateNestedManyWithoutUploadedByInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutAssignedByInput
    deactivatedUsers?: UserUncheckedCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserCreateOrConnectWithoutStaffAccountAssignmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffAccountAssignmentInput, UserUncheckedCreateWithoutStaffAccountAssignmentInput>
  }

  export type BankAccountCreateWithoutStaffAssignmentsInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: AccountContractCreateNestedOneWithoutBankAccountInput
    transactions?: BankTransactionCreateNestedManyWithoutBankAccountInput
    client: ClientCreateNestedOneWithoutAccountsInput
  }

  export type BankAccountUncheckedCreateWithoutStaffAssignmentsInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: AccountContractUncheckedCreateNestedOneWithoutBankAccountInput
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutStaffAssignmentsInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutStaffAssignmentsInput, BankAccountUncheckedCreateWithoutStaffAssignmentsInput>
  }

  export type UserCreateWithoutAssignedStaffAccountsInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    deactivatedBy?: UserCreateNestedOneWithoutDeactivatedUsersInput
    deactivatedUsers?: UserCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserUncheckedCreateWithoutAssignedStaffAccountsInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivatedById?: string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionUncheckedCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    staffAssignments?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    deactivatedUsers?: UserUncheckedCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserCreateOrConnectWithoutAssignedStaffAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedStaffAccountsInput, UserUncheckedCreateWithoutAssignedStaffAccountsInput>
  }

  export type UserCreateWithoutStaffAssignmentsInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentCreateNestedManyWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentCreateNestedManyWithoutAssignedByInput
    deactivatedBy?: UserCreateNestedOneWithoutDeactivatedUsersInput
    deactivatedUsers?: UserCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserUncheckedCreateWithoutStaffAssignmentsInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivatedById?: string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    BankTransaction?: BankTransactionUncheckedCreateNestedManyWithoutUploadedByInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutUserInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput
    uploadedTransactions?: BankTransactionUncheckedCreateNestedManyWithoutUserInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedCreateNestedManyWithoutAssignedByInput
    deactivatedUsers?: UserUncheckedCreateNestedManyWithoutDeactivatedByInput
  }

  export type UserCreateOrConnectWithoutStaffAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffAssignmentsInput, UserUncheckedCreateWithoutStaffAssignmentsInput>
  }

  export type UserUpsertWithoutStaffAccountAssignmentInput = {
    update: XOR<UserUpdateWithoutStaffAccountAssignmentInput, UserUncheckedUpdateWithoutStaffAccountAssignmentInput>
    create: XOR<UserCreateWithoutStaffAccountAssignmentInput, UserUncheckedCreateWithoutStaffAccountAssignmentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffAccountAssignmentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffAccountAssignmentInput, UserUncheckedUpdateWithoutStaffAccountAssignmentInput>
  }

  export type UserUpdateWithoutStaffAccountAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUpdateManyWithoutUploadedByNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUpdateManyWithoutAssignedByNestedInput
    deactivatedBy?: UserUpdateOneWithoutDeactivatedUsersNestedInput
    deactivatedUsers?: UserUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffAccountAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUncheckedUpdateManyWithoutUploadedByNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByNestedInput
    deactivatedUsers?: UserUncheckedUpdateManyWithoutDeactivatedByNestedInput
  }

  export type BankAccountUpsertWithoutStaffAssignmentsInput = {
    update: XOR<BankAccountUpdateWithoutStaffAssignmentsInput, BankAccountUncheckedUpdateWithoutStaffAssignmentsInput>
    create: XOR<BankAccountCreateWithoutStaffAssignmentsInput, BankAccountUncheckedCreateWithoutStaffAssignmentsInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutStaffAssignmentsInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutStaffAssignmentsInput, BankAccountUncheckedUpdateWithoutStaffAssignmentsInput>
  }

  export type BankAccountUpdateWithoutStaffAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: AccountContractUpdateOneWithoutBankAccountNestedInput
    transactions?: BankTransactionUpdateManyWithoutBankAccountNestedInput
    client?: ClientUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutStaffAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: AccountContractUncheckedUpdateOneWithoutBankAccountNestedInput
    transactions?: BankTransactionUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type UserUpsertWithoutAssignedStaffAccountsInput = {
    update: XOR<UserUpdateWithoutAssignedStaffAccountsInput, UserUncheckedUpdateWithoutAssignedStaffAccountsInput>
    create: XOR<UserCreateWithoutAssignedStaffAccountsInput, UserUncheckedCreateWithoutAssignedStaffAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedStaffAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedStaffAccountsInput, UserUncheckedUpdateWithoutAssignedStaffAccountsInput>
  }

  export type UserUpdateWithoutAssignedStaffAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    deactivatedBy?: UserUpdateOneWithoutDeactivatedUsersNestedInput
    deactivatedUsers?: UserUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedStaffAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUncheckedUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    deactivatedUsers?: UserUncheckedUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutStaffAssignmentsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutStaffAssignmentsInput, UserUncheckedUpdateWithoutStaffAssignmentsInput>
    create: XOR<UserCreateWithoutStaffAssignmentsInput, UserUncheckedCreateWithoutStaffAssignmentsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutStaffAssignmentsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutStaffAssignmentsInput, UserUncheckedUpdateWithoutStaffAssignmentsInput>
  }

  export type UserUpdateManyWithWhereWithoutStaffAssignmentsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutStaffAssignmentsInput>
  }

  export type TokenCreateManyUserInput = {
    id?: string
    token: string
    expiresIn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankTransactionCreateManyUploadedByInput = {
    id?: string
    bankAccountId: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    classificationId: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAccountAssignmentCreateManyUserInput = {
    id?: string
    accountId: string
    assignedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAccountAssignmentCreateManyAssignedByInput = {
    id?: string
    userId: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyDeactivatedByInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    phone?: string | null
    email: string
    password: string
    avatarUrl?: string
    role?: $Enums.UserRole
    isActive?: boolean
    refreshToken?: string | null
    deactivatedAt?: Date | string | null
    deactivationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutTransactionsNestedInput
    classification?: TransactionClassificationUpdateOneRequiredWithoutTransactionsNestedInput
    User?: UserUpdateManyWithoutUploadedTransactionsNestedInput
  }

  export type BankTransactionUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    classificationId?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutUploadedTransactionsNestedInput
  }

  export type BankTransactionUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    classificationId?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutStaffAssignmentsNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutAssignedStaffAccountsNestedInput
    User?: UserUpdateManyWithoutStaffAssignmentsNestedInput
  }

  export type StaffAccountAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutStaffAssignmentsNestedInput
  }

  export type StaffAccountAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutTransactionsNestedInput
    uploadedBy?: UserUpdateOneRequiredWithoutBankTransactionNestedInput
    classification?: TransactionClassificationUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type BankTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    classificationId?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    classificationId?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffAccountAssignmentNestedInput
    bankAccount?: BankAccountUpdateOneRequiredWithoutStaffAssignmentsNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutAssignedStaffAccountsNestedInput
  }

  export type StaffAccountAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountAssignmentUpdateWithoutAssignedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffAccountAssignmentNestedInput
    bankAccount?: BankAccountUpdateOneRequiredWithoutStaffAssignmentsNestedInput
    User?: UserUpdateManyWithoutStaffAssignmentsNestedInput
  }

  export type StaffAccountAssignmentUncheckedUpdateWithoutAssignedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutStaffAssignmentsNestedInput
  }

  export type StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutDeactivatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUpdateManyWithoutAssignedByNestedInput
    deactivatedUsers?: UserUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDeactivatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUncheckedUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByNestedInput
    deactivatedUsers?: UserUncheckedUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDeactivatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    uploadedTransactions?: BankTransactionUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUpdateManyWithoutAssignedByNestedInput
    deactivatedBy?: UserUpdateOneWithoutDeactivatedUsersNestedInput
    deactivatedUsers?: UserUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUncheckedUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    uploadedTransactions?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByNestedInput
    deactivatedUsers?: UserUncheckedUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionCreateManyClassificationInput = {
    id?: string
    bankAccountId: string
    uploadedById: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankTransactionUpdateWithoutClassificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutTransactionsNestedInput
    uploadedBy?: UserUpdateOneRequiredWithoutBankTransactionNestedInput
    User?: UserUpdateManyWithoutUploadedTransactionsNestedInput
  }

  export type BankTransactionUncheckedUpdateWithoutClassificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutUploadedTransactionsNestedInput
  }

  export type BankTransactionUncheckedUpdateManyWithoutClassificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutUploadedTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUpdateManyWithoutAssignedByNestedInput
    deactivatedBy?: UserUpdateOneWithoutDeactivatedUsersNestedInput
    deactivatedUsers?: UserUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadedTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUncheckedUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByNestedInput
    deactivatedUsers?: UserUncheckedUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUploadedTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffAccountAssignmentCreateManyBankAccountInput = {
    id?: string
    userId: string
    assignedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankTransactionCreateManyBankAccountInput = {
    id?: string
    uploadedById: string
    transactionDate: Date | string
    valueDate: Date | string
    amount: number
    type: $Enums.TransactionType
    description: string
    reference?: string | null
    chequeNo?: string | null
    tellerNo?: string | null
    currency: string
    classificationId: string
    user?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffAccountAssignmentUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffAccountAssignmentNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutAssignedStaffAccountsNestedInput
    User?: UserUpdateManyWithoutStaffAssignmentsNestedInput
  }

  export type StaffAccountAssignmentUncheckedUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutStaffAssignmentsNestedInput
  }

  export type StaffAccountAssignmentUncheckedUpdateManyWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutBankTransactionNestedInput
    classification?: TransactionClassificationUpdateOneRequiredWithoutTransactionsNestedInput
    User?: UserUpdateManyWithoutUploadedTransactionsNestedInput
  }

  export type BankTransactionUncheckedUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    classificationId?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutUploadedTransactionsNestedInput
  }

  export type BankTransactionUncheckedUpdateManyWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    valueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    description?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    chequeNo?: NullableStringFieldUpdateOperationsInput | string | null
    tellerNo?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    classificationId?: StringFieldUpdateOperationsInput | string
    user?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateManyClientInput = {
    id?: string
    accountCode: string
    accountNumber: string
    accountName: string
    accountType: $Enums.AccountType
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: AccountContractUpdateOneWithoutBankAccountNestedInput
    staffAssignments?: StaffAccountAssignmentUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: AccountContractUncheckedUpdateOneWithoutBankAccountNestedInput
    staffAssignments?: StaffAccountAssignmentUncheckedUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutStaffAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUpdateManyWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUpdateManyWithoutAssignedByNestedInput
    deactivatedBy?: UserUpdateOneWithoutDeactivatedUsersNestedInput
    deactivatedUsers?: UserUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    BankTransaction?: BankTransactionUncheckedUpdateManyWithoutUploadedByNestedInput
    StaffAccountAssignment?: StaffAccountAssignmentUncheckedUpdateManyWithoutUserNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput
    uploadedTransactions?: BankTransactionUncheckedUpdateManyWithoutUserNestedInput
    assignedStaffAccounts?: StaffAccountAssignmentUncheckedUpdateManyWithoutAssignedByNestedInput
    deactivatedUsers?: UserUncheckedUpdateManyWithoutDeactivatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutStaffAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deactivationReason?: NullableStringFieldUpdateOperationsInput | string | null
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