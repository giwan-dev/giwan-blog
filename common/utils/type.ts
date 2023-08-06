/**
 * 주어진 타입의 속성 값을 NonNullable로 만드는 유틸리티 타입
 */
export type RequiredProperties<T, K extends keyof T> = T & {
  [key in K]: NonNullable<T[key]>
}
