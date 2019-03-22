module.exports.templateTags = [
  {
    name: 'EvalJS',
    displayName: 'EvalJS',
    description:
      'Execute Javascript code. Reference environment variables using env.VARIABLE_NAME',
    args: [
      {
        displayName: 'Code snippet',
        description: 'Enter valid javascript that would pass in a console',
        type: 'string',
        placeholder: 'env.RETURN_TRUE ? `string if true`:`string if false`'
      }
    ],
    run(context, code) {
      const env = context.context;
      try {
        result = eval(code);
      } catch (err) {
        console.log('EvalJS Error', err.message);
        throw new Error(`Error: ${err.message}`);
      }

      return result;
    }
  }
];
