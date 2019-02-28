import { SearchPattern } from '../data-type/search-pattern-interface';
import { SearchCategory } from '../data-type/search-category-enum';

export let searchPatterns : SearchPattern[] = [
    // Angular injectables
    {
        pattern: '$scope',
        displayName: '$scope',
        searchCategory: SearchCategory.INJECTABLE
    },
    {
        pattern: '$timeout',
        displayName: '$timeout',
        searchCategory: SearchCategory.INJECTABLE
    },
    {
        pattern: '$state',
        displayName: '$state',
        searchCategory: SearchCategory.INJECTABLE
    },
    {
        pattern: '$stateParams',
        displayName: '$stateParams',
        searchCategory: SearchCategory.INJECTABLE
    },
    {
        pattern: '$compile',
        displayName: '$compile',
        searchCategory: SearchCategory.INJECTABLE
    },
    {
        pattern: '$window',
        displayName: '$window',
        searchCategory: SearchCategory.INJECTABLE
    },
    {
        pattern: '$q',
        displayName: '$q',
        searchCategory: SearchCategory.INJECTABLE
    },

    // Angular component types
    {
        pattern: '.controller(',
        displayName: 'controller',
        searchCategory: SearchCategory.COMPONENT_TYPE
    },
    {
        pattern: '.directive(',
        displayName: 'directive',
        searchCategory: SearchCategory.COMPONENT_TYPE
    },
    {
        pattern: '.service(',
        displayName: 'service',
        searchCategory: SearchCategory.COMPONENT_TYPE
    },
    {
        pattern: '.factory(',
        displayName: 'factory',
        searchCategory: SearchCategory.COMPONENT_TYPE
    },
    {
        pattern: '.constant(',
        displayName: 'constant',
        searchCategory: SearchCategory.COMPONENT_TYPE
    },

]
