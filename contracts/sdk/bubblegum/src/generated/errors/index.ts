/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * AssetOwnerMismatch: 'Asset Owner Does not match'
 *
 * @category Errors
 * @category generated
 */
export class AssetOwnerMismatchError extends Error {
  readonly code: number = 0x1770
  readonly name: string = 'AssetOwnerMismatch'
  constructor() {
    super('Asset Owner Does not match')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AssetOwnerMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new AssetOwnerMismatchError())
createErrorFromNameLookup.set(
  'AssetOwnerMismatch',
  () => new AssetOwnerMismatchError()
)

/**
 * PublicKeyMismatch: 'PublicKeyMismatch'
 *
 * @category Errors
 * @category generated
 */
export class PublicKeyMismatchError extends Error {
  readonly code: number = 0x1771
  readonly name: string = 'PublicKeyMismatch'
  constructor() {
    super('PublicKeyMismatch')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PublicKeyMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new PublicKeyMismatchError())
createErrorFromNameLookup.set(
  'PublicKeyMismatch',
  () => new PublicKeyMismatchError()
)

/**
 * HashingMismatch: 'Hashing Mismatch Within Leaf Schema'
 *
 * @category Errors
 * @category generated
 */
export class HashingMismatchError extends Error {
  readonly code: number = 0x1772
  readonly name: string = 'HashingMismatch'
  constructor() {
    super('Hashing Mismatch Within Leaf Schema')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, HashingMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new HashingMismatchError())
createErrorFromNameLookup.set(
  'HashingMismatch',
  () => new HashingMismatchError()
)

/**
 * UnsupportedSchemaVersion: 'Unsupported Schema Version'
 *
 * @category Errors
 * @category generated
 */
export class UnsupportedSchemaVersionError extends Error {
  readonly code: number = 0x1773
  readonly name: string = 'UnsupportedSchemaVersion'
  constructor() {
    super('Unsupported Schema Version')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnsupportedSchemaVersionError)
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new UnsupportedSchemaVersionError())
createErrorFromNameLookup.set(
  'UnsupportedSchemaVersion',
  () => new UnsupportedSchemaVersionError()
)

/**
 * AppendAuthorityNotFound: 'Could not find append authority in append allowlist'
 *
 * @category Errors
 * @category generated
 */
export class AppendAuthorityNotFoundError extends Error {
  readonly code: number = 0x1774
  readonly name: string = 'AppendAuthorityNotFound'
  constructor() {
    super('Could not find append authority in append allowlist')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AppendAuthorityNotFoundError)
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new AppendAuthorityNotFoundError())
createErrorFromNameLookup.set(
  'AppendAuthorityNotFound',
  () => new AppendAuthorityNotFoundError()
)

/**
 * AppendAllowlistIndexOutOfBounds: 'Append allowlist index out of bounds'
 *
 * @category Errors
 * @category generated
 */
export class AppendAllowlistIndexOutOfBoundsError extends Error {
  readonly code: number = 0x1775
  readonly name: string = 'AppendAllowlistIndexOutOfBounds'
  constructor() {
    super('Append allowlist index out of bounds')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AppendAllowlistIndexOutOfBoundsError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1775,
  () => new AppendAllowlistIndexOutOfBoundsError()
)
createErrorFromNameLookup.set(
  'AppendAllowlistIndexOutOfBounds',
  () => new AppendAllowlistIndexOutOfBoundsError()
)

/**
 * AppendAllowlistFull: 'Append allowlist has no more spots available'
 *
 * @category Errors
 * @category generated
 */
export class AppendAllowlistFullError extends Error {
  readonly code: number = 0x1776
  readonly name: string = 'AppendAllowlistFull'
  constructor() {
    super('Append allowlist has no more spots available')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AppendAllowlistFullError)
    }
  }
}

createErrorFromCodeLookup.set(0x1776, () => new AppendAllowlistFullError())
createErrorFromNameLookup.set(
  'AppendAllowlistFull',
  () => new AppendAllowlistFullError()
)

/**
 * AppendAllowlistIncrementOverflow: 'Append allowlist overflow when incrementing num_appends'
 *
 * @category Errors
 * @category generated
 */
export class AppendAllowlistIncrementOverflowError extends Error {
  readonly code: number = 0x1777
  readonly name: string = 'AppendAllowlistIncrementOverflow'
  constructor() {
    super('Append allowlist overflow when incrementing num_appends')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AppendAllowlistIncrementOverflowError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1777,
  () => new AppendAllowlistIncrementOverflowError()
)
createErrorFromNameLookup.set(
  'AppendAllowlistIncrementOverflow',
  () => new AppendAllowlistIncrementOverflowError()
)

/**
 * AppendAllowlistIncrementUnderflow: 'Append allowlist underflow when decrementing num_appends'
 *
 * @category Errors
 * @category generated
 */
export class AppendAllowlistIncrementUnderflowError extends Error {
  readonly code: number = 0x1778
  readonly name: string = 'AppendAllowlistIncrementUnderflow'
  constructor() {
    super('Append allowlist underflow when decrementing num_appends')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AppendAllowlistIncrementUnderflowError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1778,
  () => new AppendAllowlistIncrementUnderflowError()
)
createErrorFromNameLookup.set(
  'AppendAllowlistIncrementUnderflow',
  () => new AppendAllowlistIncrementUnderflowError()
)

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}
