
export interface MRData {

  /** The limit of items per page. */
  readonly limit: string;

  /** The offset of the data. */
  readonly offset: string;

  /** The series of the data. */
  readonly series: string;

  /** The total number of items. */
  readonly total: string;

  /** The URL of the data. */
  readonly url: string;

  /** The XML namespace. */
  readonly xmlns: string;
}
