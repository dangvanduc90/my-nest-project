export interface ConfigVariables {
  mongoUri: string
}

export default (): ConfigVariables => {
  console.log('process.env.MONGODB_URI', process.env.MONGODB_URI)
  return {
    mongoUri: process.env.MONGODB_URI
  };
};
