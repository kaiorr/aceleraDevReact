module.exports = {
    reporters: [
      'default',
      [
        'jest-junit',
        {
        outputName: 'output.xml',
        } 
      ]
    ]
  };