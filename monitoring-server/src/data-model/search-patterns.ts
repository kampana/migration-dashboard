import { SearchPattern } from '../data-type/search-pattern-interface';

export let searchPatterns : SearchPattern[] = [
    // Angular providers
    {
        pattern: '$scope',
        displayName: '$scope'
    },
    {
        pattern: '$timeout',
        displayName: '$timeout'
    },
    {
        pattern: '$state',
        displayName: '$state'
    },
    {
        pattern: '$stateParams',
        displayName: '$stateParams'
    },
    {
        pattern: '$compile',
        displayName: '$compile'
    },
    {
        pattern: '$window',
        displayName: '$window'
    },
    {
        pattern: '$q',
        displayName: '$q'
    },

    // Angular component types
    {
        pattern: '.controller(',
        displayName: 'controller'
    },
    {
        pattern: '.directive(',
        displayName: 'directive'
    },
    {
        pattern: '.service(',
        displayName: 'service'
    },
    {
        pattern: '.factory(',
        displayName: 'factory'
    },
    {
        pattern: '.constant(',
        displayName: 'constant'
    },

]
