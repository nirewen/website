export type Theme = 'light' | 'dark';

export interface Restaurante {
    nome: string;
    slugs: string[];
    numero: number;
}

export const RESTAURANTES = [
    {
        nome: 'Campus I',
        slugs: ['1', 'i'],
        numero: 1
    },
    {
        nome: 'Campus II',
        slugs: ['2', 'ii'],
        numero: 41
    },
    {
        nome: 'Cachoeira',
        slugs: ['cachoeira'],
        numero: 42
    },
    {
        nome: 'Frederico Westphalen',
        slugs: ['frederico_westphalen', 'frederico', 'westphalen'],
        numero: 4
    },
    {
        nome: 'Palmeira das Missões',
        slugs: ['palmeira', 'palmeira_das_missoes', 'missoes'],
        numero: 3
    }
] satisfies Restaurante[];

export type RESTAURANTE_NUMS = (typeof RESTAURANTES)[number]['numero'];
