import * as yup from 'yup';
export declare const configSchema: import('yup/lib/object').RequiredObjectSchema<
  {
    beforeCommands: yup.ArraySchema<
      yup.StringSchema<string, import('yup/lib/types').AnyObject, string>,
      import('yup/lib/types').AnyObject,
      string[],
      string[]
    >;
    afterCommands: yup.ArraySchema<
      yup.StringSchema<string, import('yup/lib/types').AnyObject, string>,
      import('yup/lib/types').AnyObject,
      string[],
      string[]
    >;
    baseFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    resolverFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    resolverTestFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    resolverE2ETestFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    authorizerFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    resolverType: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    schemaFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    testType: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
  },
  import('yup/lib/object').AnyObject,
  import('yup/lib/object').TypeOfShape<{
    beforeCommands: yup.ArraySchema<
      yup.StringSchema<string, import('yup/lib/types').AnyObject, string>,
      import('yup/lib/types').AnyObject,
      string[],
      string[]
    >;
    afterCommands: yup.ArraySchema<
      yup.StringSchema<string, import('yup/lib/types').AnyObject, string>,
      import('yup/lib/types').AnyObject,
      string[],
      string[]
    >;
    baseFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    resolverFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    resolverTestFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    resolverE2ETestFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    authorizerFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    resolverType: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    schemaFilePath: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
    testType: import('yup/lib/string').RequiredStringSchema<string, import('yup/lib/types').AnyObject>;
  }>
>;
