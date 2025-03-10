// plugins/amplify.ts
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';

export default defineNuxtPlugin(() => {
  Amplify.configure(amplifyConfig);
});

