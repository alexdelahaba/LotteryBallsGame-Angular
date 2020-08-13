export const balls = [
  { classColor: '#43AABA', number: 1, chosen: false },
  { classColor: '#3B95A3', number: 2, chosen: false },
  { classColor: '#2A6A74', number: 3, chosen: false },
  { classColor: '#194046', number: 4, chosen: false },
  { classColor: '#3B63A3', number: 5, chosen: false },
  { classColor: '#2A4774', number: 6, chosen: false },
  { classColor: '#192A46', number: 7, chosen: false },
  { classColor: '#523BA3', number: 8, chosen: false },
  { classColor: '#3B2A74', number: 9, chosen: false },
  { classColor: '#2F225D', number: 10, chosen: false },
];

export interface Ball {
  classColor: string;
  number: number;
  chosen: boolean;
}
