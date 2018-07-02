export class NumberUtility {
  public static getSuffix(idx: number): string {
    if (idx === 1) {
      return 'st';
    } else if (idx === 2) {
      return 'nd';
    } else if (idx === 3) {
      return 'rd';
    } else {
      return 'th';
    }
  }
}
