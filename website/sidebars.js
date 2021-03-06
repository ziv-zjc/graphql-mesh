module.exports = {
  sidebar: {
    'Getting Started': [
      'getting-started/introduction',
      'getting-started/installation',
      'getting-started/basic-example',
      'getting-started/mesh-transforms',
      'getting-started/multiple-apis'
    ],
    'Input Handlers': [
      'handlers/available-handlers',
      'handlers/graphql',
      'handlers/openapi',
      'handlers/grpc',
      'handlers/json-schema',
      'handlers/postgraphile',
      'handlers/soap',
      'handlers/mongoose',
      'handlers/odata',
      'handlers/thrift',
      'handlers/tuql',
      'handlers/mysql',
      'handlers/neo4j'
    ],
    Transforms: [
      'transforms/rename',
      'transforms/prefix',
      'transforms/cache',
      'transforms/snapshot',
      'transforms/mock',
      'transforms/resolvers-composition',
      'transforms/federation',
      'transforms/filter-schema',
      'transforms/naming-convention'
    ],
    // 'API Reference': ['api/cli', 'api/runtime'],
    Recipes: [
      'recipes/typescript', 
      'recipes/as-sdk', 
      'recipes/as-gateway',
      'recipes/federation'
    ],
    // 'Extend Your Mesh': ['extend/custom-handler', 'extend/custom-transform']
  }
};
